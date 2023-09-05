import React from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard';
import portfolioImage from '../../assets/projectImages/portfolioImage.png';
import Heading from '../UI/Heading'
import ModifiedButton02 from '../UI/ModifiedButton02';

function Projects() {
  return (
    <section id='projects'>
        <Heading content = "PROJECTS" fontSize="35px" className="projects-heading"/>
        <div className='projects-subheading'>
            <ModifiedButton02>WEB</ModifiedButton02>
        </div>
        <div className='projects-contents'>
            <div className='web-projects-content'>
                <ProjectCard
                heading = "Portfolio"
                image = {portfolioImage}
                description = "It is my portfolio website which contains everything about me."
                technologies = "ReactJS"
                btn1 = "GitHub"
                btn2 = "Demo"
                />
            </div>
        </div>
    </section>
  )
}

export default Projects;
