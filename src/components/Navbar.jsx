import React from "react";
import "./Navbar.css";
import shubhamLogo from "../assets/shubhamLogo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={shubhamLogo} alt="Logo" />
      </div>
      <div className="navbar-right">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact Me</a>
      </div>
    </nav>
  );
};

export default Navbar;