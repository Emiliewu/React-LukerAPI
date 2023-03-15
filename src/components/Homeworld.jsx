import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

function Homeworld(props) {
    const {homeworldurl} = props;
    const [homeworld, setHomeworld] = useState();
    let arr = homeworldurl.split("/");
    let id = arr.splice(-2, 1);
    const url = "/planets/" + id;

    useEffect(()=>{
        axios.get(homeworldurl)
            .then(res => {
                // console.log(res);
                setHomeworld(res.data.name)
               
            })
            .catch(err => console.log(err))

    }, [homeworldurl])
  return (
    <>
    {homeworld? <Link to={url} >{homeworld}</Link>: ""}
    </>
  )
}

export default Homeworld