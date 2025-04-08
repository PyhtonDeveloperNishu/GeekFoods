import React from 'react'
import './Navbar.css'
import sun_icon from "./../../assets/sun-icon.png";
import moon_icon from "./../../assets/moon-icon.png";
import logo from "./../../assets/logo.svg";

const navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo-con'>
        <img src={logo} alt="" className='logo' /><h2 className='geekfoods'>GeekFoods</h2>
        </div>
        <ul>
            <li>Home</li>
            <li>Quote</li>
            <li>Resturants</li>
            <li>Foods</li>
            <li>Contact</li>
        </ul>
        <button className='getStart'>Get started</button>
        <img src={sun_icon} alt=""  className='toggle-icon'  height={35} />
    </div>
  )
}

export default navbar