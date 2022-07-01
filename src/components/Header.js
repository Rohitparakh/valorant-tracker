import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpg'
const Header = () => {
  return (
    <div className="header">
        <Link to="/">
        <div className='logo'>
            <img src={logo}/>
        </div>
        </Link>
        <Link to="/">
        <div className='name'>Valorant Stats by Rohit</div>
        </Link>
    </div>
  )
}

export default Header