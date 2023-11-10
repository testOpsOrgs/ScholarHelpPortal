import logo from './logo.svg';
import './App.css';
import Home from './views/Home';
import {Route, Routes} from "react-router-dom";
import Admin from './views/Admin';

function App() {
  return (
    <Routes>
      <Route strict exact path ="/" element={<Home/>}/>
      <Route strict exact path='/Page1'/>
      <Route strict exact path='/Admin' element={<Admin/>}/>
    </Routes>
  );
}

export default App;
