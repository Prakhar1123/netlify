import React from 'react';
import './Skills.css';
import img1 from './html.png';
import img2 from './css.png';
import img3 from './javascript.png';
import img4 from './react.png';
import img5 from './next.png';
import img6 from './node.png';
import img7 from './express.png';
import img8 from './python.png';
import img9 from './mysql.png';
import img10 from './java.png';

const Skills = () => {
    return (
        <div id="skills" className="skills">
            <h2 className="skills-title">Skills</h2>
            <div className="skills-container">
                <div className="front-end-skills">
                    <h2>Front-End Skills</h2>
                    <ul>
                        <li><img src={img1} alt="HTML" />HTML</li>
                        <li><img src={img2} alt="CSS" />CSS</li>
                        <li><img src={img3} alt="JavaScript" />JavaScript</li>
                        <li><img src={img4} alt="ReactJS" />ReactJS</li>
                        <li><img src={img5} alt="Next.js" />Next.js</li>
                    </ul>
                </div>
                <div className="back-end-skills">
                    <h2>Back-End Skills</h2>
                    <ul>
                        <li><img src={img6} alt="Node Js" />Node Js</li>
                        <li><img src={img7} alt="Express Js" />Express Js</li>
                        <li><img src={img8} alt="Python" />Python</li>
                        <li><img src={img9} alt="SQL" />SQL</li>
                        <li><img src={img10} alt="Java" />Java</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Skills;
