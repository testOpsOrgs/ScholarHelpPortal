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
    <div className="logo">
      <img src="logo.png" alt="Logo" />
    </div>
    <nav className="nav">
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
       
      </ul>
    </nav>


    {username && (
      <>
        <Link to='/Admin'>{`welcome ${username}`}</Link>
        <a href="" onClick={logout}>logout</a> 
      </>
    )}

    {!username && (
      <>
         <div className="auth">
           <Link to ='/Login'> Admin Login</Link>
        </div>

        <div className="register">
          <Link to='/register'>Admin Register</Link>
        </div>
      </>
    )

    }   
  </header>
  )
}
