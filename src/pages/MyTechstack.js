import React, { useState } from 'react';
import './style.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MyTechstack = () => {
    const skillSet = [
        {
          category: 'Front-end',
          skills: ['React.js (Advanced)', 'HTML5 (Advanced)', 'CSS3 (Advanced)', 'SASS (Advanced)', 'JavaScript (Advanced)'],
        },
        {
          category: 'Back-end',
          skills: ['Node.js| Express.js (Intermediate)', 'C# (Beginner)', 'Java (Intermediate)', 'Visual Basic (Intermediate)', 'C++ (Advanced)', 'C (Advanced)', 'PHP (Advanced)'],
        },
        {
          category: 'Databases',
          skills: ['MySQL (Advanced)', 'MongoDB (Advanced)'],
        },
        {
          category: 'Serverless',
          skills: ['Google Cloud Functions (Beginner)'],
        },
        {
          category: 'Version Control',
          skills: ['Git (Intermediate)', 'GitHub (Intermediate)'],
        },
        {
          category: 'UI Frameworks',
          skills: ['Tailwind CSS (Advanced)', 'Bootstrap (Advanced)'],
        },
        {
          category: 'CMS',
          skills: ['WordPress (Intermediate)'],
        },
        {
          category: 'APIs',
          skills: ['RESTful APIs (Beginner)', 'Postman (Intermediate)'],
        },
        {
          category: 'IDEs/Editors',
          skills: [ 'Eclipse (Beginner)', 'Android Studio (Beginner)', 'NetBeans (Intermediate)', 'Visual Studio Code (Advanced)', 'Visual Studio (Advanced)', 'Turbo C (Advanced)'],
        },
        {
          category: 'UI/UX Design Tools',
          skills: ['Figma (Intermediate)', 'Adobe Photoshop (Advanced)', 'Canva Pro (Advanced)'],
        },
    ];

    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    const handleSlideChange = (index) => {
        setActiveSlideIndex(index);
    };

    const sliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (_, nextSlide) => handleSlideChange(nextSlide),
    };
    const getBarWidth = (level) => {
        switch (level) {
          case 'Advanced':
            return 'w-full bg-green-200';
          case 'Intermediate':
            return 'w-2/3 bg-pink-200';
          case 'Beginner':
            return 'w-1/3 bg-gray-300';
          default:
            return 'w-1/3 bg-gray-300';
        }
    };

    return (
        <div className="tech">
            <div className="container p-8 left text-white" width="5rem">
                <h1 className="tech-head p-9 text-4xl font-bold mb-4 fade text-center">Tech Stack</h1>

                <Slider {...sliderSettings} className="mb-6">
                {skillSet.map((category, index) => (
                    <div key={index} className="p-4 bg-indigo-950/70 shadow-lg rounded-lg card">
                        <h2 className={`text-white text-2xl font-bold mb-2 text-center ${activeSlideIndex === index ? 'typing-text' : ''}`}>
                            {category.category}
                        </h2>
                        <ul className="mx-6 space-y-2 fade legend" id="legend">
                            <li>
                                <div className="items-center skill">
                                    <span className="text-left ml-2"></span>
                                    <div className='grid grid-cols-3 bar mr-2 text-indigo-950 text-center'>
                                        <h6 className='font-bold rounded-l-lg bg-gray-300'>Beginner</h6>
                                        <h6 className='font-bold bg-pink-200'>Intermediate</h6>
                                        <h6 className='font-bold rounded-r-lg bg-green-200'>Advanced</h6>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <ul className="mx-6 space-y-2 fade skill-list">
                        {category.skills.map((skill, skillIndex) => {
                            const [tech, level] = skill.split(' (');
                            const barWidth = getBarWidth(level.slice(0, -1));

                            return (
                            <li key={skillIndex}>
                                <div className={`items-center skill ${activeSlideIndex === index ? 'fade' : ''}`}>
                                    <span className="font-bold text-left ml-2 text-white">{tech}</span>
                                    <div className={`h-4 rounded-lg ${barWidth} bar`}></div>
                                </div>
                            </li>
                            );
                        })}
                        </ul>
                    </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
    

}

export default MyTechstack;