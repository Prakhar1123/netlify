import React, { useState, useEffect } from 'react';
import './Header.css';
import prakharImage from './prakhar.jpg';

const Header = () => {
  const [text, setText] = useState("Full Stack Developer");

  useEffect(() => {
    const animationInterval = setInterval(() => {
      if (text === "Full Stack Developer") {
        setText("Full Stack Developer");
      } else {
        setText("UI Developer");
      }
    }, 3000);

    return () => {
      clearInterval(animationInterval);
    };
  }, []);

  return (
    <header id="header" className="header">
      <div className="left-content">
        <div className="fixed-text">
          <p>Hi, I am Prakhar Kumar</p>
          <p>I am a</p>
          <p className="animate-character">
            <span className="full-stack-developer">{text}</span>
          </p>
          <p className='ps'>
            I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning, I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.
          </p>
          <a 
            href="https://drive.google.com/uc?export=download&id=1lhe9ECTmuHoQEC23LpUahtcBdD_KsI0P
            " download="PrakharKumar_Resume.pdf" className="download-link button"
          >
            Download my resume
          </a>
        </div>
        <div className="right-content">
          <div className="rotation-axis-container">
            {/* Create several rotating lines (electromagnetic lines) */}
            {/* Add more lines as needed */}
          </div>
          <img src={prakharImage} alt="Prakhar Kumar, a Full Stack Developer" className="my-image" />
        </div>
      </div>
    </header>
  );
};

export default Header;
