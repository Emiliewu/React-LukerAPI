import React from 'react';
import img from '../images/Ben_Kenobi.png';
import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <h1>oops...</h1>
      <img src={img} alt="oops...there is something wrong" />
      <Link to="/">try again</Link>
    </div>
  )
}

export default Error