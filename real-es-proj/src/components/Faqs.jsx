import React from 'react'
import "../components/faqs.css"
import ftCool from "../resources/ft-cool.svg"
import arrowR from "../resources/ft-r-arrow.svg";
import arrowL from "../resources/ft-l-arrow.svg";


const Faqs = () => {
  return (
    <>
      <div className="feature-prop">
              <div className="featured-text">
                <div className="feat-i"><img src={ftCool} alt="" /></div>
                <div className="feat-txt">
                  <h2>Frequently Asked Questions</h2>
                  <div className="f-t">
                    <p>
                      Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and <br /> assist you every step of the way.
                    </p>
                    <button>View All FAQs</button>
                  </div>
                </div>
              </div>
              <div className="featured-row">
                <div className="featured">
                  <div className="ft-row">
                    <div className="ft-row-txt">
                      <h3>How do I search for properties on <br /> Estatein?</h3>
                      <p>
                        Learn how to use our user-friendly search tools <br /> to find properties that match your criteria.
                      </p>
                    </div>
                    <div className="ft-label">
                      <button>Read More</button>
                    </div>
                  </div>
                  <div className="ft-row">
                    <div className="ft-row-txt">
                      <h3>What documents do I need to sell my  property through Estatein?</h3>
                      <p>
                        Find out about the necessary documentation <br /> for listing your property with us.
                      </p>
                    </div>
                    <div className="ft-label">
                      <button>Read More</button>
                    </div>
                  </div>
                  <div className="ft-row">
                    <div className="ft-row-txt">
                      <h3>How do I search for properties on <br /> Estatein?</h3>
                      <p>
                        Discover the different ways you can get in touch <br /> with our experienced agents.
                      </p>
                    </div>
                    <div className="ft-label">
                      <button>Read More</button>
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
  )
}

export default Faqs
