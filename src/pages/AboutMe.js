import React from "react";
import myPic from "../img/castmere.jpg"
import './style.css';

const AboutMe = () => {
    return (
        <div className="about">
            <div className="left">
                <img className="mypic fade" src={myPic} alt="mypic" />
                <h2 className="p-2 text-5xl font-bold typing-text">Hi, I'm Anna aka Castmere!</h2>
                <h4 className="p-2 text-2xl font-bold fade">Web / Software Developer | Fiction Writer</h4>
                <p className="fade">
                    As a full-stack web developer and author, I always make it a point to complete tasks quickly and discreetly, whether in a group or on my own. Before putting my thoughts into action, I like to watch patterns of development and investigate any relevant ideas. Creating a story is similar to web development in that I needed both creative and technical skills to complete the project. I am skilled in both designing and planning for development.
                </p>
                <p className="fade">
                    After graduating from computer engineering school, I continued my education by studying Java and web development at TESDA and attending a bootcamp at KODEGo to hone my abilities. I enjoy designing visually beautiful and user-friendly website interfaces using HTML, CSS, PHP, and JavaScript, among other things. I'm always eager to learn about the latest web development languages and frameworks, and I'm especially eager to learn how to build my own APIs. 
                </p>
                <p className="fade">
                    When it comes to writing, I enjoy crafting interesting fictional worlds, engaging characters, and compelling narratives, whether it's a short story, novel, or screenplay. I'm passionate about stories and want to leave a lasting impression on my readers.
                </p>
            </div>
        </div>
    )
    

}

export default AboutMe;