import './App.css';
import {Routes, Route} from 'react-router-dom';
import Form from './components/Form';
import Display from './components/Display';
import Error from './components/Error';
import {useState} from 'react';

function App() {
  const [category, setCategory] = useState('people');
  const [id, setId] = useState(1);
  const updateDefault = (newCategory, newId)=> {
    setCategory(newCategory);
    setId(newId);
  }
  return (
    <div className="App">
    <Routes>
      <Route element={<Form defaultCategory = {category} defaultId = {id} updateDefault={updateDefault}/>} path="/" />
      <Route element={<Display updateDefault={updateDefault}/>} path="/:category/:id" />
      <Route element={<Error />} path="/error" />
    </Routes>
      
    </div>
  );
}

export default App;
