import React from "react";
import "../components/hero.css";
import HeroImg from "../resources/h-img.svg";
import HeroImg1 from "../resources/img-shop.svg";
import Dream from "../resources/Sub Container.png";

const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="hero-text">
          <div className="h-text">
            <h1>
              Discover Your Dream <br /> Property with Estatein
            </h1>
            <p>
              Your journey to finding the perfect property begins here. Explore
              our listings to find <br /> the home that matches your dreams.
            </p>
            <div className="h-btn">
              <button>Learn More</button>
            <button className="hbtn">Browse Properties</button>
            </div>
            <div className="reviews">
              <div className="row one">
                <h2>200+</h2>
                <p>Happy Customers</p>
              </div>
              <div className="row two">
                <h2>10k+</h2>
                <p>Properties For Clients</p>
              </div>
              <div className="row three">
                <h2>16+</h2>
                <p>Years Of Experience</p>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-img">
          <img src={HeroImg} alt="" />
          <img src={Dream} className="dream" alt="" />
        </div>
      </div>
      <div className="review">
        <div className="rows">
          <div className="rows-img">
          <img src={HeroImg1} alt="" />
          
          </div>
          <p>Find Your Dream Home</p>
        </div>
        <div className="rows">
        <div className="rows-img">
          <img src={HeroImg1} alt="" />
          {/* <img src={HeroImg5} className="arrow" alt="" /> */}
          </div>
          <p>Unlock Property Value</p>
        </div>
        <div className="rows">
        <div className="rows-img">
          <img src={HeroImg1} alt="" />
          {/* <img src={HeroImg5} className="arrow" alt="" /> */}
          </div>
          <p>Effortless Property Management</p>
        </div>
        <div className="rows">
        <div className="rows-img">
          <img src={HeroImg1} alt="" />
          {/* <img src={HeroImg5} className="arrow" alt="" /> */}
          </div>
          <p>Smart Investment, Informed Decision</p>
        </div>
      </div>
    </>
  );
};

export default Hero;
