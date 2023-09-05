import React from 'react';
import './ProjectsCard.css';
import {Link } from 'react-scroll';
import Button from '../UI/ModifiedButton';

function ProjectCard(props) {
  return (
    <div className='project-card'>
        <h2 className='project-card-heading'>{props.heading}</h2>
        <div className="project-card-image-container">
            <img src={props.image} alt="Project Image"/>
        </div>
        <span className="project-card-description">
            {props.description}
        </span>
        <p className="project-card-technologies">{props.technologies}</p>
        <div className="project-card-button-container">
          <Link href={props.link}><Button>{props.btn1}</Button></Link>
          <Link href={props.link}><Button>{props.btn2}</Button></Link>
        </div>
    </div>
  )
}

export default ProjectCard
