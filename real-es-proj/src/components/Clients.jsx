import React from 'react'
import "../components/clients.css"
import arrowL from "../resources/ft-l-arrow.svg"
import arrowR from "../resources/ft-r-arrow.svg"

const Clients = () => {
  return (
    <>
      <div className="feature-prop">
              <div className="featured-text">
                <div className="feat-i">
                  {/* <img src={FtCool} alt="" /> */}
                </div>
                <div className="feat-txt">
                  <h2>What Our Clients Say</h2>
                  <div className="f-t">
                  <p>
                    Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.
                  </p>
                  <button>View All Testimonials</button>
                  </div>
                </div>
              </div>
              <div className="featured-row">
                <div className="featured">
                  
                </div>
              </div>
              <div className="ft-slide">
                  <div className="slide-num">
                      <p>01 <span>of 03</span></p>
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
  )
}

export default Clients
