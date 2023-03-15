import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Homeworld(props) {
    const {homeworldurl} = props;
    const [homeworld, setHomeworld] = useState();

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
    {homeworld && homeworld}
    </>
  )
}

export default Homeworld