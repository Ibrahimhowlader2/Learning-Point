import React from 'react';
import './HeroSection.css';
import heroImg from '../../images/slider-1.png';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    // <!-- ============= HERO SECTION START // ============== -->
    <section id="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="content">
              <h3>Start your favorite course</h3>
              <h1>
                Now learning from anywhere, and build your
                <span style={{
                  textDecoration: "none",
                  color: "#880ed4"
                }}> bright career.</span>
              </h1>
              <p>
                It has survived not only five centuries but also the leap into
                electronic typesetting.
              </p>
              <button className="btn btn-warning">
                <Link to="/services"
                  style={{
                    textDecoration: "none",
                    fontSize: "20px",
                    fontWeight: "bold",
                    padding: "10px 12px",
                    color:"#000"
                  }}
                >
                Start The Course
              </Link>
            </button>
          </div>
        </div>
        <div className="col-md-6">
          <img className="d-block w-100" src={heroImg} alt="" />
        </div>
      </div>
    </div>
    </section >
    // <!-- ============= HERO SECTION END // ============== -->
  );
};

export default HeroSection;