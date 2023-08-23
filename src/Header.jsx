import React, { useState } from 'react'
import logo from './IMG-20230819-WA0022.jpg'

const Header = () => {
  const [nav, setNav] =useState([
    
  ])
  return (
    <div>
      <div className=' header'>
      <div className='logo container '>
      <img src={logo} alt="logo"  />
      <h3>Bamidele <br /> Raphael</h3>

     
        </div>
      <div className="menu">
  <a href="">Home</a>
  <a href="">About</a>
  <a href="">Project</a>
  <a href="">Service</a>
 
</div>
      </div>
       










    </div>
  )
}

export default Header