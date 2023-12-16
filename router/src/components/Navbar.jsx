import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div id='navbar'>
        <div>
            <h1>Kalvium</h1>
        </div>
        <ul className='nav-links'>
            <Link className='link' to="/home" >
                <li>Home</li>
            </Link>
            <Link className='link' to="/contact">
                <li>Contact</li>
            </Link>
            <Link className='link' to="/about" >
                <li>About</li>
            </Link>
        </ul>
    </div>
  )
}

export default Navbar