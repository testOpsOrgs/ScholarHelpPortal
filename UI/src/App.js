import logo from './logo.svg';
import './App.css';
import Home from './views/Home';
import {Route, Routes} from "react-router-dom";
import Admin from './views/Admin';
import Year from './views/Year';
import TwoYearPage from './views/TwoYearPage';
import FourYearPage from './views/FourYearPage';
import Login from './views/Login';
import AdminRegister from './views/AdminRegister';
import UserContextProvider from './UserContext'

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route strict exact path ="/" element={<Home/>}/>
        <Route strict exact path='/Year' element={<Year/>}/>
        <Route strict exact path='/Admin' element={<Admin/>}/>
        <Route strict exact path='/2Y' element={<TwoYearPage/>}/>
        <Route strict exact path='/4Y' element={<FourYearPage/>}/>
        <Route strict exact path='/Login' element={<Login/>}/>
        <Route strict exact path='/register' element={<AdminRegister/>}/>
      </Routes>
    </UserContextProvider>
   
  );
}

export default App;
