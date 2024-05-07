import React from "react";
import "./SocialLinks.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const SocialLinks = () =>{
    return(
        <div className="social-links">
            <a target="_black" rel="noreferrer" href="https://www.linkedin.com/in/rahul1209/">
                <FontAwesomeIcon icon={faLinkedin} color='#fff'/>
            </a>
            <a target="_black" rel="noreferrer" href="https://www.github.com/rahulkundu1209/">
                <FontAwesomeIcon icon={faGithub} color='#fff'/>
            </a>
            <a target="_black" rel="noreferrer" href="https://www.instagram.com/_rahul_._kundu_/">
                <FontAwesomeIcon icon={faInstagram} color='#fff'/>
            </a>
        </div>
    );
}

export default SocialLinks;