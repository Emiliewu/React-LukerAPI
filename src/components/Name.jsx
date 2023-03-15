import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


function Name(props) {
    let {url, category} = props;
    const [name, setName] = useState();
  
   category = "residents" || "charactors" ? "people": category;
    let arr = url.split("/");
    let id = arr.splice(-2, 1);
    const urlforlink = `/${category}/${id}`;

    useEffect(()=>{
        axios.get(url)
            .then(res => {
                // console.log(res);
                res.data.name ? setName(res.data.name) : setName(res.data.title);
                
            })
            .catch(err => console.log(err))

    }, [url])
  return (
    <div id="link">{name  ? <Link to={urlforlink} >{name}</Link>: ""}</div>
  )
}

export default Name