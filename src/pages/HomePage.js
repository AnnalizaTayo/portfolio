import React from "react";
import './style.css';

const HomePage = () => {
    return (
        <div className="home">
            <div className="left">
                <h3 className="p-1 text-4xl font-bold">Hello! Welcome to my Profile</h3>
                <h1 className="p-2 text-6xl font-bold fade">I am Anna Tayo</h1>
                <h4 className="p-2 text-2xl font-bold typing-text mb-4">Full Stack Web / Software Developer | Fiction Writer</h4>
                <a href="/projects" className="project-btn rounded-full px-3 py-1 mx-2 my-4 font-bold">PROJECTS</a>
                <a href="https://drive.google.com/file/d/1cimbeaBp589sw0FI5hPVG8IExxNKCXKl/view?usp=drive_link" className="contact-btn rounded-full px-3 py-1 mx-2 my-4 font-bold" target="_blank" rel="noreferrer">CHECK MY RESUME</a>
            </div>
        </div>
    )
}

export default HomePage;

