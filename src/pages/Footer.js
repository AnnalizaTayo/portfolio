import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { AiFillGithub, AiFillLinkedin, AiOutlineCodepenCircle } from "react-icons/ai";
import './style.css';

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="social-links">
        <li>
          <a href="https://www.facebook.com/annatayowebdev" target='_blank' rel="noopener noreferrer">
            <FaFacebook />
          </a>
        </li>
        <li>
          <a href="https://github.com/AnnalizaTayo" target='_blank' rel="noopener noreferrer">
            <AiFillGithub />
          </a>
        </li>
        <li>
          <a href="https://codepen.io/annaliza-arboleda-tayo" target='_blank' rel="noopener noreferrer">
            <AiOutlineCodepenCircle />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/annaliza-arboleda-tayo/" target='_blank' rel="noopener noreferrer">
            <AiFillLinkedin />
          </a>
        </li>
      </ul>
      <p className='text-center mb-0'>© Anna Tayo 2023. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
