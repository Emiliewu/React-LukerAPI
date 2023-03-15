import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Starship(props) {
    const [starship, setStarship] = useState();
    const {starshipurl} = props;

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
    {starship && starship}
    </>
  )
}

export default Starship