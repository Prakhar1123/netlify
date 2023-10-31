import React from 'react';
import Header from './components/Header'; // Update the import path
import Skills from './components/Skills'; // Update the import path
import Experience from './components/Experience'; // Update the import path
import Projects from './components/Projects'; // Update the import path
import Education from './components/Education'; // Update the import path
import ContactUs from './components/ContactUs'; // Update the import path
import './App.css'; // Import your CSS file
import Navbar from './components/Navbar';

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Header />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <ContactUs />
        </div>
    );
}

export default App;