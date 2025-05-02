import React from 'react';
import './About.css';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="about" id="about">
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="about-image">
          <img src="/assets/profile.jpg" alt="About Shubham" />
        </div>
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            I'm a passionate Full Stack Developer with expertise in React.js, Node.js, and AWS Cloud.
            I love building dynamic, scalable applications and solving real-world problems through technology.
          </p>
          <p>
            <strong>Education:</strong> B.E. (Computer Science Engineering) - Chandigarh University
          </p>
          <p>
            <strong>Experience:</strong> 4+ years of industry experience, working with top companies and projects.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;