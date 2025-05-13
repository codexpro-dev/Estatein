import React from "react";
import "../components/featured.css";
import FtCool from "../resources/ft-cool.svg";
import secImg1 from "../resources/sec-img1.svg";
import secImg2 from "../resources/sec-img2.svg";
import secImg3 from "../resources/sec-img3.svg";
import secIcon1 from "../resources/sec-icon1.svg";
import secIcon2 from "../resources/sec-icon2.svg";
import secIcon3 from "../resources/sec-icon3.svg";
import arrowL from "../resources/ft-l-arrow.svg";
import arrowR from "../resources/ft-r-arrow.svg";

const Featured = () => {
  return (
    <>
      <div className="feature-prop">
        <div className="featured-text">
          <div className="feat-i">
            <img src={FtCool} alt="" />
          </div>
          <div className="feat-txt">
            <h2>Featured Properties</h2>
            <div className="f-t">
              <p>
                Explore our handpicked selection of featured properties. Each
                listing offers a glimpse into exceptional homes and investments
                available <br /> through Estatein. Click "View Details" for more
                information.
              </p>
              <button>View All Properties</button>
            </div>
          </div>
        </div>
        <div className="featured-row">
          <div className="featured">
            <div className="ft-row">
              <div className="rowws-img">
                <img src={secImg1} alt="" />
              </div>
              <div className="ft-row-txt">
                <h3>Seaside Serenity Villa</h3>
                <p>
                  A stunning 4-bedroom, 3-bathroom villa in a <br /> peaceful
                  suburban neighborhood... <span>Read More</span>
                </p>
              </div>
              <div className="ft-label">
                <p>
                  <img src={secIcon1} alt="" /> 4-Bedroom
                </p>
                <p>
                  <img src={secIcon2} alt="" /> 3-Bathroom
                </p>
                <p>
                  <img src={secIcon3} alt="" /> Villa
                </p>
              </div>
              <div className="ft-view">
                <div className="price">
                  <p>price</p>
                  <h3>$550,000</h3>
                </div>
                <div className="ftt-btn">
                  <button>View Property Detail</button>
                </div>
              </div>
            </div>
            <div className="ft-row">
              <div className="rowws-img">
                <img src={secImg2} alt="" />
              </div>
              <div className="ft-row-txt">
                <h3>Metrpolitan Haven</h3>
                <p>
                  A stunning 4-bedroom, 3-bathroom villa in a <br /> peaceful
                  suburban neighborhood... <span>Read More</span>{" "}
                </p>
              </div>
              <div className="ft-label">
                <p>
                  <img src={secIcon1} alt="" /> 2-Bedroom
                </p>
                <p>
                  <img src={secIcon2} alt="" /> 2-Bathroom
                </p>
                <p>
                  <img src={secIcon3} alt="" /> Villa
                </p>
              </div>
              <div className="ft-view">
                <div className="price">
                  <p>price</p>
                  <h3>$350,000</h3>
                </div>
                <div className="ftt-btn">
                  <button>View Property Detail</button>
                </div>
              </div>
            </div>
            <div className="ft-row">
              <div className="rowws-img">
                <img src={secImg3} alt="" />
              </div>
              <div className="ft-row-txt">
                <h3>Rustic Retrat Cattage</h3>
                <p>
                  A stunning 4-bedroom, 3-bathroom villa in a <br /> peaceful
                  suburban neighborhood... <span>Read More</span>{" "}
                </p>
              </div>
              <div className="ft-label">
                <p>
                  <img src={secIcon1} alt="" /> 3-Bedroom
                </p>
                <p>
                  <img src={secIcon2} alt="" /> 3-Bathroom
                </p>
                <p>
                  <img src={secIcon3} alt="" /> Villa
                </p>
              </div>
              <div className="ft-view">
                <div className="price">
                  <p>price</p>
                  <h3>$590,000</h3>
                </div>
                <div className="ftt-btn">
                  <button>View Property Detail</button>
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

export default Featured;
