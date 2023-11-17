import logo from './logo.svg';
import './App.css';
import Home from './views/Home';
import { Route, Routes } from "react-router-dom";
import Admin from './views/Admin';
import Year from './views/Year';
import TwoYearPage from './views/TwoYearPage';
import FourYearPage from './views/FourYearPage';
import Login from './views/Login';
import AdminRegister from './views/AdminRegister';
import UserContextProvider from './UserContext';
import SemesterSubjects from './views/SemesterSubjects';
import Content from './views/Content';
import Download from './views/Download';

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
         <Route strict exact path="/semester/:year/:semester" element={<SemesterSubjects />}/>
         <Route strict exact path="/:year/:semester/:subject" element={<Content/>}/>
         <Route strict exact path="/:year/:semester/:subject/:type" element={<Download/>}/>
      </Routes>
    </UserContextProvider>
   
  );
}

export default App;
