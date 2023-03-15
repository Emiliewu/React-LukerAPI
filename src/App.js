import './App.css';
import {Routes, Route} from 'react-router-dom';
import Form from './components/Form';
import Display from './components/Display';
import Error from './components/Error';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route element={<Form/>} path="/" />
      <Route element={<Display />} path="/:category/:id" />
      <Route element={<Error />} path="/error" />
    </Routes>
      
    </div>
  );
}

export default App;
