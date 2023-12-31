import React from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard';
import portfolioImage from '../../assets/projectImages/portfolioImage.jpg';
import investmentCalculatorImage from '../../assets/projectImages/investmentCalculatorImage.jpg';
import foodOrderImage from '../../assets/projectImages/foodOrderAppImage.jpg';
import Heading from '../UI/Heading'
import ModifiedButton02 from '../UI/ModifiedButton02';

function Projects() {
  const projects = [
    {
      type: "web",
      heading: "Portfolio",
      image: portfolioImage,
      description: "It is a single page website which shows who I am, what I do, my skillset and contact infomations.",
      technologies: "ReactJS",
      code: "https://github.com/rahulkundu1209/portfolio",
      demo: ""
    },
    {
      type: "web",
      heading: "Interest Calculator",
      image: investmentCalculatorImage,
      description: "It is a react web app where you can calculate compound interest per year, yearly return, total return etc entering required data.",
      technologies: "ReactJS",
      code: "https://github.com/rahulkundu1209/investment-calculator",
      demo: "https://rahulkundu1209.github.io/investment-calculator/",
    },
    {
      type: "web",
      heading: "Food Order App",
      image: foodOrderImage,
      description: "It is a food order app for a resturant, although till now it doesn't have any functional database, working on it..",
      technologies: "ReactJS",
      code: "https://github.com/rahulkundu1209",
      demo: ""
    }
  ]

  return (
    <section id='projects'>
        <Heading content = "PROJECTS" fontSize="30px" className="projects-heading"/>
        <div className='projects-subheading'>
            <ModifiedButton02>WEB</ModifiedButton02>
        </div>
        <div className='projects-contents'>
            <div className='web-projects-content'>
              {projects.map(project => (
                <ProjectCard
                heading={project.heading}
                image = {project.image}
                description = {project.description}
                technologies = {project.technologies}
                btn1 = "GitHub"
                btn2 = "Demo"
                link1 = {project.code}
                link2 = {project.demo}
                />
              ))}
            </div>
        </div>
    </section>
  )
}

export default Projects;
