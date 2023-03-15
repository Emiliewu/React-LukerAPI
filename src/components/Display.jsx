import React, {useState, useEffect} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import Form from './Form';
import Homeworld from './Homeworld';
import Starship from './Starship';

function Display() {
  const [detail, setDetail] = useState();
  const [display, setDisplay] = useState();
  const [homeworldurl, setHomeworldurl] = useState();
  const [starship, setStarship] = useState();
  const {id, category} = useParams();
  const navigate = useNavigate();

  const url = "https://swapi.dev/api/";
  console.log(id + category);
  useEffect(()=>{
    axios.get(`${url}${category}/${id}`)
      .then(res => {
        console.log(res);
        setDetail(res.data);
        let arr = [];
        arr = Object.entries(res.data);
        // console.log(arr);
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

  }, [id, category, navigate]);

  return (
    <div id="result">
    <Form />

    { category === 'people'? 
      detail &&<div>
        <ul>
          <h2>{detail.name}</h2>
          <li> Height:&nbsp; {detail.height}</li>
          <li> Mass:&nbsp; {detail.mass}</li>
          <li> Eye Color:&nbsp; {detail.eye_color}</li>
          <li> Skin Color:&nbsp; {detail.skin_color}</li>
          <li>Homeworld: &nbsp;<Homeworld homeworldurl = {homeworldurl}/></li>
          <li>Starships:&nbsp; 
          {starship.length === 0 ? "Not Available" : starship.map((item,idx)=><Starship starshipurl = {item} key={idx}/>)} &nbsp;</li>
        </ul>
      </div>:
      display && display.map((item, idx)=><ul key = {idx}>
      <li>{item[0]} : {item[1]}</li>
      </ul>)
    }
    </div>
  )
}

export default Display