import React from "react";
import "../components/clients.css";
import arrowL from "../resources/ft-l-arrow.svg";
import arrowR from "../resources/ft-r-arrow.svg";
import ratings from "../resources/ratings.svg";
import proPics from "../resources/profile1.svg";
import proPics2 from "../resources/profile2.svg";
import proPics3 from "../resources/profile3.svg";
import ftCool from "../resources/ft-cool.svg"



const Clients = () => {
  return (
    <>
      <div className="feature-prop">
        <div className="featured-text">
          <div className="feat-i"><img src={ftCool} alt="" /></div>
          <div className="feat-txt">
            <h2>What Our Clients Say</h2>
            <div className="f-t">
              <p>
                Read the success stories and heartfelt testimonials from our
                valued clients. Discover why they chose Estatein for their real
                estate needs.
              </p>
              <button>View All Testimonials</button>
            </div>
          </div>
        </div>
        <div className="featured-row">
          <div className="featured">
            <div className="ft-row">
              <div className="rowws-img">
                <img src={ratings} alt="" />
              </div>
              <div className="ft-row-txt">
                <h3>Exceptional Service!</h3>
                <p>
                  Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly <br /> recommended!
                </p>
              </div>
              <div className="ft-label">
                <div className="lb-pro">
                  <img src={proPics} alt="" />
                </div>
                <div className="lb-txt">
                  <h4>Charity Mishopy</h4>
                  <p>USA, Califonia</p>
                </div>
              </div>
            </div>
            <div className="ft-row">
              <div className="rowws-img">
                <img src={ratings} alt="" />
              </div>
              <div className="ft-row-txt">
                <h3>Efficient and Reliable</h3>
                <p>
                  Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the <br /> results.
                </p>
              </div>
              <div className="ft-label">
                <div className="lb-pro">
                  <img src={proPics2} alt="" />
                </div>
                <div className="lb-txt">
                  <h4>Chief Lopes</h4>
                  <p>London City </p>
                </div>
              </div>
            </div>
            <div className="ft-row">
              <div className="rowws-img">
                <img src={ratings} alt="" />
              </div>
              <div className="ft-row-txt">
                <h3>Trusted Advisors</h3>
                <p>
                  The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. <br /> Thank you for your support!
                </p>
              </div>
              <div className="ft-labell">
                <div className="lb-pro">
                  <img src={proPics3} alt="" />
                </div>
                <div className="lb-txt">
                  <h4>Codexpro Dev</h4>
                  <p>US, Canadaaa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ft-slide">
          <div className="slide-num">
            <p>
              01 <span>of 03</span>
            </p>
          </div>
          <div className="slide-arr">
            <div className="arrow1">
              <img src={arrowL} alt="" />
            </div>
            <div className="arrow2">
              <img src={arrowR} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;
