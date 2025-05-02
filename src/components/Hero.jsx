import React from 'react';
import './Hero.css';
import shubhamProfile from '../assets/shubhamProfile.png'; // ✅ tumhari profile image ka path

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hi, I'm <span>Shubham Saraswat</span></h1>
          <p>FullStack/MEARN Developer | 3+ Years Experience</p>
          <a href="/path-to-resume.pdf" download className="resume-button">Download Resume</a>
        </div>

        {/* ✅ Tumhara Stylish Floating Image */}
        <div className="hero-image">
          <div className="floating-image">
            <img src={shubhamProfile} alt="Shubham Saraswat" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;