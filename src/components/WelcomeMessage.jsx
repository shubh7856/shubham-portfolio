import React, { useState, useEffect } from "react";
import "./WelcomeMessage.css";

const WelcomeMessage = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 500); // delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`welcome-message ${show ? "show" : ""}`}>
      Welcome to My Portfolio 🚀
    </div>
  );
};

export default WelcomeMessage;