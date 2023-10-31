// Projects.js
import React from 'react';
import './Project.css'; // Import your CSS file for styling
import img from './adidas1.jpg'
import img1 from './puma1.jpg';
import img2 from './puma2.jpg';
import img3 from './ironman.jpg';
import img4 from './captain.jpg';
import img5 from './thor.jpg';
import img6 from './todo1.jpg';
import img7 from './todo2.jpg';
import img8 from './todo3.jpg';
const Projects = () => {
    return (
        <div id="projects" className="projects">
            <h1>My Recent Projects</h1>
            <div className="project-container">
                <div className="project-box">
                <div className="project-images">
                        <img src={img} alt="Image 1" />
                        <img src={img1} alt="Image 2" />
                        <img src={img2} alt="Image 3" />
                    </div>
                    <h3>E-Commerce Project</h3>
                    <p>Developed a comprehensive platform for online shoe shopping.</p>
                    <a href="https://ucxzhgycdg8hi6glxjtrzg.on.drv.tw/Online%20shoe%20shopping/prakhar1.html" target="_blank" rel="noopener noreferrer" className="demo-button">Demo</a>
                    
                </div>
                <div className="project-box_">
                <div className="project-images_">
                        <img src={img3} alt="Image 1" />
                        <img src={img4} alt="Image 2" />
                        <img src={img5} alt="Image 3" />
                    </div> 
                    <h3>Avengers Game using Reactjs</h3>
                    <p>Developed a dynamic Marvel-themed quiz app using React. Integrated useState for question progression and user scoring.</p>
                    <div className="buttons">
                        <a href="https://prakhar1123.github.io/avengers" target="_blank" rel="noopener noreferrer" className="demo-button">Demo</a>
                        <a href="https://github.com/Prakhar1123/avengers" target="_blank" rel="noopener noreferrer" className="github-button">GitHub</a>
                    </div>
                </div>
                <div className="project-box__">
                <div className="project-images__">
                        <img src={img6} alt="Image 1" />
                        <img src={img7} alt="Image 2" />
                        <img src={img8} alt="Image 3" />
                    </div> 
                    <h3>Todo-List using React Js</h3>
                    <p>Created a task management application that enables users to view, add, mark complete, delete, and edit tasks.</p>
                    <a href="https://prakhar1123.github.io/Todolist_new/" target="_blank" rel="noopener noreferrer" className="demo-button">Demo</a>
                </div>
            </div>
        </div>
    );
};

export default Projects;
