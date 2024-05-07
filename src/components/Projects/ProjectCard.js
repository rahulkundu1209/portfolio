import React from 'react';
import './ProjectCard.css';
import Button from '../UI/ModifiedButton';

function ProjectCard(props) {
  return (
    <div className='project-card'>
        <h2 className='project-card-heading'>{props.heading}</h2>
        <div className="project-card-image-container">
            <img src={props.image} alt="Project_Image"/>
        </div>
        <span className="project-card-description">
            {props.description}
        </span>
        <p className="project-card-technologies">{props.technologies}</p>
        <div className="project-card-button-container">
          <a href={props.link1} target='_blank' rel='noreferrer'><Button>{props.btn1}</Button></a>
          <a href={props.link2} target='_blank' rel='noreferrer'><Button>{props.btn2}</Button></a>
        </div>
    </div>
  )
}

export default ProjectCard
