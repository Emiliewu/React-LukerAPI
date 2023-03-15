import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Name(props) {
    const {url} = props;
    const [name, setName] = useState();

    useEffect(()=>{
        axios.get(url)
            .then(res => {
                // console.log(res);
                res.data.name ? setName(res.data.name) : setName(res.data.title);
            })
            .catch(err => console.log(err))

    }, [url])
  return (
    <>{name && name}</>
  )
}

export default Name