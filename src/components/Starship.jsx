import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

function Starship(props) {
    const [starship, setStarship] = useState();
    const {starshipurl} = props;
    let arr = starshipurl.split("/");
    let id = arr.splice(-2, 1);
    const url = "/starships/" +id;
    useEffect(()=>{
        axios.get(starshipurl)
            .then(res => {
                console.log(res);
                setStarship(res.data.name)
            })
            .catch(err => console.log(err))

    }, [starshipurl])

  return (
    <>
    {starship ? <Link to={url}>{starship}</Link>: ""}
    </>
  )
}

export default Starship