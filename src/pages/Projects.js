import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ProjectCard from './ProjectCard';

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
    <div className={className} style={{ ...style, display: 'block' }} onClick={onClick}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Next</button>
    </div>
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
    <div className={className} style={{ ...style, display: 'block' }} onClick={onClick}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Previous</button>
    </div>
    );
}

const Projects = () => {
    const projects = [
        {
            title: 'PawOrder Pet Shop',
            details: "Pet Essentials Shop & Vet Appointment Scheduler, a React-based website hosted on Netlify. Shop for pet essentials with a user-friendly catalog and checkout. Plus, schedule vet appointments online, choosing your preferred vet and time slot. We've integrated MockAPI for realistic data. Simplify pet care in one place!",
            techStack: ['react', 'css', 'nodejs', 'netlify'],
            gifSrc: '/gif/paworder.gif',
        },
        {
            title: "Author Castmere's Website",
            details: "This author's website is designed as a platform to showcase the author's literary works. Utilizing a tech stack of HTML, CSS, Bootstrap, and PHP, we've created an aesthetically pleasing and functional website. Visitors can easily browse through the author's writings and engage in direct communication through our PHP Mailer feature. This website serves as a window into the author's creative journey, offering insights into their work and facilitating effortless connections with readers. It's a straightforward and user-friendly hub designed to explore the author's literary world.",
            techStack: ['html', 'css', 'php','bootstrapcss'],
            gifSrc: '/gif/castmere.gif',
        },
        {
            title: 'Music Player with API Integration',
            details: "This music player website is a culmination of HTML, CSS, and JavaScript expertise, designed to replicate a Figma-based layout as assigned by our instructor. Using the Spotify23 API, we enrich your music experience by providing comprehensive track album details, associated album listings, and insights into related artists. Additionally, we integrate the genius-song-lyrics1 API to seamlessly retrieve and display song lyrics. Our platform on CodePen.io is dedicated to offering you an immersive and interactive journey through the world of music, adhering to the design vision provided. Explore, listen, and enjoy the harmonious blend of technology and melody.",
            techStack: ['html', 'css', 'js', 'codepenio'],
            gifSrc: '/gif/MusicPlayerLayoutwithAPIintegration.gif',
        },
        {
            title: 'Music Player Layout',
            details: "This music player layout, created using HTML, CSS, and JavaScript, faithfully follows the design provided by our instructor in Figma. It offers a clean and intuitive interface for playing music. The seek bar, animated to simulate the progression of a song, provides a visual representation of playback. Additionally, the buttons feature smooth animations, enhancing user interaction and creating a dynamic experience. This project is hosted on CodePen.io, allowing you to explore the design and functionality of our music player layout. Enjoy a simplified yet engaging way to listen to your favorite tracks.",
            techStack: ['html', 'css', 'js', 'codepenio'],
            gifSrc: '/gif/musicplayerlayout.gif',
        },
        {
            title: 'Netflix-like',
            details: "This website design draws inspiration from Netflix, offering a familiar and user-friendly layout. Integrated with the TV-MAZE API, it replicates the essence of individual show websites. Developed using HTML, JavaScript, CSS, and Bootstrap, our platform delivers a seamless exploration of television series. Users can delve into comprehensive show details, including cast information, episode guides, and ratings. The responsive design ensures a smooth and intuitive browsing experience for TV enthusiasts. Dive into the world of entertainment, effortlessly browse through a vast collection of shows, and rediscover your favorite series on our meticulously crafted website.",
            techStack: ['html', 'css', 'js', 'bootstrapcss'],
            gifSrc: '/gif/netflixlike.gif',
        },
        {
            title: 'Todo List',
            details: "This Todo List website, constructed using HTML, CSS, and JavaScript, offers a straightforward approach to task management. When users enter the site, they provide their names to personalize the experience. This leads them to the Todo page, where they can efficiently add, complete, and delete tasks. The website's design emphasizes simplicity and user-friendliness, ensuring tasks are organized with ease. It caters to a variety of needs, whether for daily chores or significant projects. Our platform is your practical tool for efficient task management. Utilize our Todo List website to regain control of your to-do list and boost productivity.",
            techStack: ['html', 'css', 'js'],
            gifSrc: '/gif/ToDoList.gif',
        },
        {
            title: 'Online Library',
            details: "This static online library layout, solely designed using HTML and CSS, offers a glimpse into the world of books without the complexity of search functions. Visitors can explore our handpicked collection of literary works, showcasing covers and titles in a visually appealing format. The intuitive design ensures ease of use as you navigate through the virtual bookshelf, selecting titles of interest. While a search feature is absent, our website provides an uncomplicated and straightforward way to discover and appreciate the world of literature. Enjoy the simplicity of our static online library layout, designed to showcase books and foster a love for reading.",
            techStack: ['html', 'css'],
            gifSrc: '/gif/onlineLibrary.gif',
        },
        {
            title: 'Guessing Game',
            details: "A straightforward guessing game, created with HTML, CSS, and JavaScript, invites players to guess a number between 1 and 6. Correct guesses earn points. The game offers a minimalistic interface, fostering an engaging and enjoyable guessing experience without the need for complex elements or persuasion.",
            techStack: ['html', 'css', 'js'],
            gifSrc: '/gif/guessinggame.gif',
        },
    ];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />, // Custom next button
        prevArrow: <PrevArrow />, // Custom previous button
        responsive: [
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 1,
            },
        },
        ],
    };

    return (
        <div className='projects'>
            <div className="left">
                <h1 className="text-5xl font-bold fade text-center">My Sample Outputs</h1>
                <div className="p-4">
                    <h1 className="text-3xl font-semibold mb-4 text-center">My Projects</h1>
                    <Slider {...sliderSettings}>
                        {projects.map((project, index) => (
                        <div key={index}>
                            <ProjectCard {...project} />
                        </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Projects;
