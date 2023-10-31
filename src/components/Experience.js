import React from 'react';
import './Experience.css';
import img1 from './html.png';
import img2 from './css.png';
import img3 from './javascript.png'
import img4 from './react.png';
import img5 from './node.png';
import img6 from './express.png';
import img7 from './python.png';
import img8 from './mysql.png';
import img9 from './java.png';
import img10 from './php.png';
import img11 from './bootstrap.png';
 const Experience = () => {
    return (
        <div id="experience" className="experience">
             <h1>Experience</h1>
            <div className="experience-box">
              
                <h2 style={{color:'black',textAlign:'center'}}>Full Stack Web Developer at TCS</h2>
                <p>Duration: 2.3 years of experience</p>
                <h2>I led the development of the EAT Report module, using Python, SQL, and Node.js to improve trading data accuracy by 30%. I also created automation scripts, using Python and SQL, to enhance data management efficiency by 40%. I developed user-friendly features with React.js and Node.js, building reusable front-end and back-end libraries. My skills include HTML5, CSS3, JavaScript, and Node.js. I collaborated effectively with my team, showcasing strong communication skills and teamwork. I used Git for project management and followed industry-standard practices, including cross-browser testing and debugging, to ensure web accessibility compliance.</h2>
               <h2>Skills:</h2>
               <div className="skills-list" >
                    <div className="skill-box" style={{height:"33px"}}>
                        <img src={img1} alt="HTML" />
                        <p>HTML</p>
                    </div>
                    <div className="skill-box" style={{height:"33px"}}>
                        <img src={img2} alt="CSS" />
                        <p>CSS</p>
                    </div>
                    <div className="skill-box" style={{height:"33px"}}>
                        <img src={img3} alt="JavaScript" />
                        <p>JavaScript</p>
                    </div>
                    <div className="skill-box" style={{height:"33px"}}>
                        <img src={img4} alt="ReactJS" />
                        <p>ReactJS</p>
                    </div>
                    <div className="skill-box" style={{height:"33px"}}>
                        <img src={img5} alt="Node.js" />
                        <p>Node.js</p>
                    </div>
                    <div className="skill-box" style={{height:"33px"}}>
                        <img src={img6} alt="Express.js"  />
                        <p>Express.js</p>
                    </div>
                    <div className="skill-box" style={{height:"33px"}}>
                        <img src={img7} alt="Python" />
                        <p>Python</p>
                    </div>
                    <div className="skill-box" style={{height:"33px"}}>
                        <img src={img9} alt="Java" />
                        <p>Java</p>
                    </div>
                    <div className="skill-box" style={{height:"33px"}}>
                        <img src={img8} alt="SQL" />
                        <p>SQL</p>
                    </div>
                </div>
            </div>
            
            <div className="experience-box">
                <h2 style={{color:'black',textAlign:'center'}}>Web Developer Internship at AlphaTech Software Pvt.Ltd</h2>
                <p>Duration: 3 Months</p>
                <h2>I created and launched an E-commerce website featuring user login, authentication, product display, a seamless checkout process, order placement, and secure payment methods. I used a combination of HTML, CSS, JavaScript, Bootstrap, PHP, and MySQL to make it all come together.</h2>
                <h2>Skills:</h2>
                <div className="skills-list">
                    <div className="skill-box">
                        <img src={img1} alt="HTML" />
                        <p>HTML</p>
                    </div>
                    <div className="skill-box">
                        <img src={img2} alt="CSS" />
                        <p>CSS</p>
                    </div>
                    <div className="skill-box">
                        <img src={img3} alt="JavaScript" />
                        <p>JavaScript</p>
                    </div>
                    <div className="skill-box">
                        <img src={img11} alt="Bootstrap" />
                        <p>Bootstrap</p>
                    </div>
                    <div className="skill-box">
                        <img src={img10} alt="PHP" />
                        <p>PHP</p>
                    </div>
                    <div className="skill-box">
                        <img src={img8} alt="SQL" />
                        <p>SQL</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Experience;