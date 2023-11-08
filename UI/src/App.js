import logo from './logo.svg';
import './App.css';
import Home from './views/Home';
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route strict exact path ="/" element={<Home/>}/>
    </Routes>
  );
}

export default App;
