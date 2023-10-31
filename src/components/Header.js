import React from "react";
import './Header.css';
import prakharImage from './prakharImage.jpg'

const Header = () => {
  return (
    <header id="header" className="header" role="banner">
      <div className="content">
        <div className="left-content">
          <div className="fixed-text">
            <h1>Hi, I am Prakhar Kumar</h1>
            <p>I am a</p>
            <p className="animate-character">
              <span className="full-stack-developer">Full Stack Developer</span>
            </p>
            <p className='ps'>
              I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning, I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.
            </p>
            <a
              href="https://drive.google.com/uc?export=download&id=1lhe9ECTmuHoQEC23LpUahtcBdD_KsI0P"
              download="PrakharKumar_Resume.pdf"
              className="download-link button"
              aria-label="Download my resume"
            >
              Download my resume
            </a>
          </div>
          <img src={prakharImage} alt="Image of Prakhar Kumar" className="my-image" />
        </div>
      </div>
    </header>
  );
};

export default Header;