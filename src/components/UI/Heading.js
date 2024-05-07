import React from 'react';
import './Heading.css';

const Heading = (props) =>{
  return (
    <div style={{fontSize: props.fontSize}} className={`${'heading'} ${props.className}`}>
      <h1>{props.content}<hr className='hr2' /></h1>
    </div>
  )
}

export default Heading
