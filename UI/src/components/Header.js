import React from 'react';
import '../components/Header.css'
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';
import { useContext, useEffect } from 'react';

export default function Header() {

  const {setUserInfo, userInfo} = useContext(UserContext)
    useEffect(()=>{
      fetch('http://localhost:4000/profile',{
        method:'GET',
        credentials: 'include',
      }).then((response)=>{
        response.json().then((userInfo)=>{
          setUserInfo(userInfo)
        })
      })
    },[])


    const logout = async ()=>{
      await fetch('http://localhost:4000/logout',{
        method:'POST',
        credentials:'include'
      })

      setUserInfo(null)
    }

  const username = userInfo?.username

  return (
    <header className="header">
   
    <nav className="nav">
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
       
      </ul>
    </nav>


    {username && (
      <>
        <Link  className="user" to='/Admin'>{`Welcome! Mr.${username}`}</Link>
        <a  className="logout" href="" onClick={logout}>Logout</a> 
      </>
    )}

    {!username && (
      <>
         <div className="auth">
           <Link to ='/Login'> Admin Login</Link>
        </div>

        <div className="register">
          <Link className="logout" to='/register'>Admin Register</Link>
        </div>
      </>
    )

    }   
  </header>
  )
}
