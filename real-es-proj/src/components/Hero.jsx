import React from "react";
import "../components/hero.css";
import HeroImg from "../resources/h-img.svg";
import HeroImg1 from "../resources/img-shop.svg";
import HeroImg2 from "../resources/img-snap.svg";
import HeroImg3 from "../resources/img-build.svg";
import HeroImg4 from "../resources/img-shine.svg";
import HeroImg5 from "../resources/h-arrow2.svg";

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
            <button>Learn More</button>
            <button className="hbtn">Browse Properties</button>
            <div className="reviews">
              <div className="row">
                <h2>200+</h2>
                <p>Happy Customers</p>
              </div>
              <div className="row">
                <h2>10k+</h2>
                <p>Properties For Clients</p>
              </div>
              <div className="row">
                <h2>16+</h2>
                <p>Years Of Experience</p>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-img">
          <img src={HeroImg} alt="" />
        </div>
      </div>
      <div className="review">
        <div className="rows">
          <div className="rows-img">
          <img src={HeroImg1} alt="" />
          <img src={HeroImg5} className="arrow" alt="" />
          </div>
          <p>Find Your Dream Home</p>
        </div>
        <div className="rows">
        <div className="rows-img">
          <img src={HeroImg1} alt="" />
          <img src={HeroImg5} className="arrow" alt="" />
          </div>
          <p>Unlock Property Value</p>
        </div>
        <div className="rows">
        <div className="rows-img">
          <img src={HeroImg1} alt="" />
          <img src={HeroImg5} className="arrow" alt="" />
          </div>
          <p>Effortless Property Management</p>
        </div>
        <div className="rows">
        <div className="rows-img">
          <img src={HeroImg1} alt="" />
          <img src={HeroImg5} className="arrow" alt="" />
          </div>
          <p>Smart Investment, Informed Decision</p>
        </div>
      </div>
    </>
  );
};

export default Hero;
