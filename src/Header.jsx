import React from 'react'
import logo from './El-Tech Logo-1.png'

const Header = () => {
  return (
    <div>
      <div className=' header'>
      <div className='logo container '>
      <img src={logo}alt="logo" />
      <h3>Name</h3>

     
        </div>
      <div className="menu">
  <a href="">Home</a>
  <a href="">About</a>
  <a href="">Project</a>
  <a href="">Service</a>
  <a href="">Contact</a>
</div>
      </div>
       










    </div>
  )
}

export default Header