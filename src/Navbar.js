import React from 'react'
import './App.css';

import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className='but-nav'>
          
        <a className='btn-login' href="/l"> <button className='btn-login1'>Login</button></a> 
        <a className='btn-signup' href="/s"><button className='naveena'>Signup</button></a>
        </div>
    </div>
  )
}



export default Navbar