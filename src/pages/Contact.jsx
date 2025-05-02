import React from 'react';
import './Contact.css';
import connectIcon from "../assets/connect-icon.jpg";


const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-heading">Contact With Me</h2>
      <div className="contact-container">
        
        {/* Left Profile Card */}
        <div className="contact-card">
          <img src={connectIcon} alt="Profile" className="contact-img" />
          <h3>Shubham Saraswat</h3>
          <p>Full Stack Developer</p>
          <hr />
          <p>Feel Free to Connect</p>
          <p>Email: er.shubham7856@gmail.com</p>
          <p>Find me Here! 🔥</p>
          <div className="contact-icons">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/shubham-saraswat-573517176//" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>

        {/* Right Contact Form */}
        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Name *" required />
            <input type="text" placeholder="Phone Number" />
          </div>
          <input type="email" placeholder="Email Address *" required />
          <input type="text" placeholder="Subject *" required />
          <textarea placeholder="Your Message *" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>

      </div>
    </section>
  );
};

export default Contact;