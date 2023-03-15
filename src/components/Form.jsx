import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function Form() {
  const [category, setCategory] = useState("people");
  const [id, setId] = useState(1)
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    
    navigate(`/${category}/${id}`);
  }
  return (
    <div id="search">
    <form onSubmit={handleSubmit}>
      <select name="category" value={category} onChange={e => setCategory(e.target.value)} >
        <option value="people">People</option>
        <option value="planets">Planets</option>
      </select>
      <input type="number" name="id" value={id} onChange={e => setId(e.target.value)}/>
      <button type='submit'>submit</button>
    </form>

    </div>
  )
}

export default Form