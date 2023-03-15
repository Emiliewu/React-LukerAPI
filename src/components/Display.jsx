import React, {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import Form from './Form';
import Homeworld from './Homeworld';
import Starship from './Starship';
import Name from './Name';

function Display(props) {
  const [detail, setDetail] = useState();
  const [display, setDisplay] = useState();
  const [homeworldurl, setHomeworldurl] = useState();
  const [starship, setStarship] = useState();
  let {id, category} = useParams();
  const navigate = useNavigate();

 
  const url = "https://swapi.dev/api/";
  console.log(id + category);
  useEffect(()=>{
    axios.get(`${url}${category}/${id}`)
      .then(res => {
        // console.log(res);
        setDetail(res.data);
        let arr = [];
        arr = Object.entries(res.data);
        console.log(arr);
        setDisplay(Object.entries(res.data));
        if(category === 'people') {
          const {homeworld} = res.data;
          setHomeworldurl(homeworld);
          const {starships} = res.data;
          console.log(starships);
          setStarship(starships);
        }
    

      })
      .catch(err =>{
        navigate("/error")
      } )

  }, [id, category]);

  return (
    <div id="result">
    <Form defaultCategory = {category} defaultId={id}/>

    { category === 'people' && detail?
        <ul>
          <h2>{detail.name}</h2>
          <li> Height:&nbsp; {detail.height}</li>
          <li> Mass:&nbsp; {detail.mass}</li>
          <li> Eye Color:&nbsp; {detail.eye_color}</li>
          <li> Skin Color:&nbsp; {detail.skin_color}</li>
          <li>Homeworld: &nbsp;<Homeworld homeworldurl = {homeworldurl} /></li>
          <li>Starships:&nbsp; 
          {starship? starship.length === 0 ? "Not Available" : starship.map((item,idx)=><Starship starshipurl = {item}  key={idx}/>) : ""} &nbsp;</li>
        </ul> : ""
    }
      <div>
     { category !== 'people' && display && display.map((item, idx)=><ul key = {idx}>
      <li>{item[0]} : {(typeof item[1] === 'object') ? item[1].map((one, idx)=><div key={idx}><Name url={one} category = {item[0]} /></div>):item[1]}</li>
      </ul>)
      
    }
    </div>
    </div>
  )
}

export default Display