import React from 'react';
import './EducationCard.css';

const EducationCard = (props) => {
  return (
    <div className='education-card'>
        <h2>{props.degree}</h2>
        <span>{props.specification}</span>
        <h3>{props.interval}</h3>
        <h4>{props.institute}</h4>
    </div>
  )
}

export default EducationCard;
