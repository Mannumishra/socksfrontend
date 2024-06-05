import React, { useState } from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'
import shoppingbag from '../../Images/shoppingbag.webp'
import user from '../../Images/artsebasov_profile-128.webp'
import logo from '../../Images/logo.jpeg'
import facebook from '../../Images/facebook.webp'
import link from '../../Images/linkdin.webp'
import twitter from '../../Images/twitter.webp'
import instagram from '../../Images/instragram.webp'
import menu from '../../Images/menu.webp'
import close from '../../Images/close.webp'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <div className="navbar">
        <div className="firstnav">
          <div className="childfirst">
            <div>Refund Policy</div>
            <div>Track your Order</div>
          </div>
          <div className="childsecond">
            <div>
              <img src={facebook} alt="Facebook" className="social-icon" />
            </div>
            <div>
              <img src={instagram} alt="Instagram" className="social-icon" />
            </div>
            <div>
              <img src={link} alt="LinkedIn" className="social-icon" />
            </div>
            <div>
              <img src={twitter} alt="Twitter" className="social-icon" />
            </div>
          </div>
        </div>
        <hr />
        <div className="desktop">
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="logo">
           <Link to="/"> <img src={logo} alt="Logo" className="logo-image" /></Link>
          </div>
          <div className="icon">
            <div>
             <Link to="/cart"> <img src={shoppingbag} alt="Shopping Bag" className="icon-image" /></Link>
            </div>
            <div>
            <Link to='/login'>  <img src={user} alt="User" className="icon-image" /></Link>
            </div>
          </div>
        </div>
      </div>
      <div className={`navbar mobile ${menuOpen ? 'active' : ''}`}>
        <div className="navbarmobile">
          <div className="menu-icon" onClick={toggleMenu}>
            {
              menuOpen ? <img src={close} alt="" style={{ height: 30 }} /> :
                <img src={menu} alt="" style={{ height: 30 }} />
            }
          </div>
          <div className="logo">
           <Link to='/'> <img src={logo} alt="Logo" className="logo-image" /></Link>
          </div>
          <div className="icon">
            <div>
             <Link to='/cart'> <img src={shoppingbag} alt="Shopping Bag" className="icon-image" /></Link>
            </div>
            <div>
              <Link to='/login'><img src={user} alt="User" className="icon-image" /></Link>
            </div>
          </div>
        </div>
        <div className="nav-links">
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/about" onClick={toggleMenu}>About</Link>
          <Link to="/shop" onClick={toggleMenu}>Shop</Link>
          <Link to="/contact" onClick={toggleMenu}>Contact</Link>
          <div className="childsecond">
            <div>
              <img src={facebook} alt="Facebook" className="social-icon" />
            </div>
            <div>
              <img src={instagram} alt="Instagram" className="social-icon" />
            </div>
            <div>
              <img src={link} alt="LinkedIn" className="social-icon" />
            </div>
            <div>
              <img src={twitter} alt="Twitter" className="social-icon" />
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Header
