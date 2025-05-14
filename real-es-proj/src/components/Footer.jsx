import React from "react";
import "../components/footer.css";
import FDesign from "../resources/f-Design.svg";
import FDesign2 from "../resources/f-Design2.svg";

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
      <footer>fdd</footer>
    </>
  );
};

export default Footer;
