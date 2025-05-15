import React from 'react';
import './Projects.css';
import ProjectCard from './ProjectCard';
import portfolioImage from '../../assets/projectImages/portfolioImage.jpg';
import investmentCalculatorImage from '../../assets/projectImages/investmentCalculatorImage.jpg';
import foodOrderImage from '../../assets/projectImages/foodOrderAppImage.jpg';
import learnExerciseAppImage from '../../assets/projectImages/learnExerciseAppImage.jpg';
import thrivehivesImage from '../../assets/projectImages/thrivehivesImage.jpg';
import Heading from '../UI/Heading'
import ModifiedButton02 from '../UI/ModifiedButton02';

function Projects() {
  const projects = [
    {
      type: "web",
      heading: "Thrive Hives",
      image: thrivehivesImage,
      description: "The website aims to provide tools to students enrolled in the Thrive Hives course.",
      technologies: "ReactJS | NodeJS | ExpressJS | Supabase",
      code: "https://github.com/rahulkundu1209/ThriveHive-web",
      demo: "https://thrive-hives.vercel.app/"
    },
    {
      type: "web",
      heading: "Learn Exercise App",
      image: learnExerciseAppImage,
      description: "In this web app you can search for exercises by there name or involved body part. You can sign in to bookmark an exercise and easily find it later.",
      technologies: "ReactJS",
      code: "https://github.com/rahulkundu1209/learn-exercises.git",
      demo: "https://learn-exercises-beb83.web.app/"
    },
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
    },
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
                key={project.heading}
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
