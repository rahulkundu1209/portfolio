import React from 'react';
import './Modal.css';
import cross from "../../assets/cross.png";

const Modal = ({skill, learning, certificate, closeModal}) => {
  return (
    <div className='model-backdrop'>
      <div className='model-box'>
        <img src={cross} alt='cross-button' height="40px" width="40px" onClick={closeModal} className='modal-close-button' />
        <div className='model-content'>
          <h2 className='model-heading'>{skill}</h2>
          <section>
            <h3>How I learnt?</h3>
            <p>{learning}</p>
            {certificate && (
              <div className='modal-certificate-container'>
                <img src={certificate} alt={`${skill}-certificate`} height="auto" width="300px" />
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  )
}

export default Modal
