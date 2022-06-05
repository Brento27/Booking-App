import './NavBar.css'
import React from 'react'

const NavBar = () => {
  return (
    <div className='navbar'>
      <div className="navContainer">
          <span className='logo'>coolbooking</span>
          <div className="navItems">
              <button className='navButton'>Register</button>
              <button className='navButton'>Login</button>
          </div>
      </div>
    </div>
  )
}

export default NavBar
