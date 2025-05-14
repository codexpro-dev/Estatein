import React from "react";
import "../components/footer.css";
import FDesign from "../resources/f-Design.svg";
import FDesign2 from "../resources/f-Design2.svg";
import fIcon1 from "../resources/input-i1.svg";
import fIcon2 from "../resources/input-i2.svg";
import FLogo from "../resources/Logo.svg";
import social1 from "../resources/soc1.svg"
import social2 from "../resources/soc2.svg"
import social3 from "../resources/soc3.svg"
import social4 from "../resources/soc4.svg"



const Footer = () => {
  return (
    <>
      <div className="section">
        <div className="design">
          <div className="ds1">
            <img src={FDesign} alt="" />
          </div>
          <div className="ds2">
            <img src={FDesign2} alt="" />
          </div>
        </div>
        <div className="sub-footer">
          <div className="feat-txt">
            <h2>Start Your Real Estate Journey Today</h2>
            <div className="f-t-s">
              <p>
                Your dream property is just a click away. Whether you're looking
                for a new home, a strategic investment, or expert real estate
                advice, <br /> Estatein is here to assist you every step of the
                way. Take the first step towards your real estate goals and
                explore our available properties <br /> or get in touch with our
                team for personalized assistance.
              </p>
              <button>Explore Properties</button>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="footer-cont">
          {/* Logo and Newsletter */}
          <div className="footer-logo">
            <div className="f-logo">
              <img src={FLogo} alt="" />
            </div>
            <div className="lt">
              <span>
                <img src={fIcon1} alt="" />
              </span>
              <input type="email" placeholder="Enter Your Email" />
              <button>
                <img src={fIcon2} />
              </button>
            </div>
          </div>

          <div className="footer-txt">
            {/* Home */}
            <div className="ftr">
              <h4>Home</h4>

              <p>Hero Section</p>
              <p>Features</p>
              <p>Properties</p>
              <p>Testimonials</p>
              <p>FAQ’s</p>
            </div>
            {/* About Us */}
            <div className="ftr">
              <h4>About Us</h4>

              <p>Our Story</p>
              <p>Our Works</p>
              <p>How It Works</p>
              <p>Our Team</p>
              <p>Our Cpents</p>
            </div>
            {/* Properties */}
            <div className="ftr">
              <h4>Properties</h4>

              <p>Portfopo</p>
              <p>Categories</p>
            </div>
            {/* Services */}
            <div className="ftr">
              <h4>Services</h4>

              <p>Valuation Mastery</p>
              <p>Strategic Marketing</p>
              <p>Negotiation Wizardry</p>
              <p>Closing Success</p>
              <p>Property Management</p>
            </div>
            {/* Contact Us */}
            <div>
              <h4>Contact Us</h4>

              <p>Contact Form</p>
              <p>Our Offices</p>
            </div>
          </div>
        </div>
      </footer>
      <div className="copy-write">
        <div className="copy"> 
          <p><span>©2023 Estatein. All Rights Reserved.</span>Terms & Conditions</p>
        </div>
        <div className="social">
          <img src={social1} alt="" />
          <img src={social2} alt="" />
          <img src={social3} alt="" />
          <img src={social4} alt="" />
        </div>
        <div>
          
        </div>
      </div>
    </>
  );
};

export default Footer;
