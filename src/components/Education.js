// Education.js
import React from 'react';
import './Education.css'; // Import your CSS file for styling
import cmr from './cmr.png';
const Education = () => {
    return (
        <div id="education" className="education">
    <h1>Education</h1>
    <div className="education-box">
        <div className="education-header">
            <h2>
                <img src={cmr} alt="CMR Logo" className="education-image" />
                CMR Institute of Technology
            </h2>
        </div>
        <div className="education-content">
            <p>
                I graduated from CMR Institute of Technology with a Bachelor's degree in Information Science and Engineering in the year 2021.
                My academic performance was reflected in a CGPA of 6.72.
            </p>
        </div>
    </div>
</div>





        
    );
};

export default Education;
