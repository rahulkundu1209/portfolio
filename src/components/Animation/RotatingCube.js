import './RotatingCube.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faHtml5, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { faC } from '@fortawesome/free-solid-svg-icons';

const RotatingCube = () => {
  return (
    <div className='stage-cube-cont'>
        <div className='cubespinner'>
            <div className='face1'>
                <FontAwesomeIcon icon={faGitAlt} color='#EC4D28' />
            </div>
            <div className='face2'>
                <FontAwesomeIcon icon={faHtml5} color='#F06529' />
            </div>
            <div className='face3'>
                <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
            </div>
            <div className='face4'>
                <FontAwesomeIcon icon={faPython} color='#DD0031' />
            </div>
            <div className='face5'>
                <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
            </div>
            <div className='face6'>
                <FontAwesomeIcon icon={faC} color='#EFD81D' />
            </div>
        </div>
    </div>
  );
}

export default RotatingCube;
