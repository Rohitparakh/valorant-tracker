import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="header">
        <Link to="/">
        <div className='logo'>Logo</div>
        </Link>
        <Link to="/">
        <div className='name'>Valorant Rohit</div>
        </Link>
    </div>
  )
}

export default Header