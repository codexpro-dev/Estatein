import React from 'react'
import Logo from "../resources/Logo.svg"
import "../components/header.css"
const Header = () => {
  return (
    <>
      <header>
        <div className="ads">
            <div></div>
            <p>✨Discover Your Dream Property with Estatein. <span>Learn More</span></p>
            <p className='ad'>x</p>
        </div>
        <div className="navbar">
            <div className="logo">
                <img src={Logo} alt="logo" />
            </div>
            <div className="ul">
                <p>Home</p>
                <p>About Us</p>
                <p>Properties</p>
                <p>Services</p>
            </div>
            <div className="navbtn">
                <button>Contact Us</button>
            </div>
        </div>
      </header>
    </>
  )
}

export default Header
