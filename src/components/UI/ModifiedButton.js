import React from 'react';
import './ModifiedButton.css'

function Button({children},props) {
  return (
    <button type={props.type} value={props.value} className='customized-button'>
      {children}
    </button>
  )
}

export default Button;
