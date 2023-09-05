import React from 'react';
import './ContactForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../UI/ModifiedButton';
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Heading from '../UI/Heading';

function ContactForm() {
  return (
    <div id='contact-page'>
        <Heading content = "CONTACT ME" fontSize="25px" className="contact-page-heading"/>
        <div className='contact-page-description'>
            <p>Please fill out the form to contact with me for any kind of work opportunity or collaboration.</p>
        </div>
        <div className='contact-page-contact-form'>
            <form>
                <ul>
                    <li className='half first'>
                        <input type='text' name='name' placeholder='Name' required/>
                    </li>
                    <li className='half'>
                        <input type='email' name='email' placeholder='Email'required />
                    </li>
                    <li>
                        <input type='text' name='subject' placeholder='Subject' required/>
                    </li>
                    <li>
                        <textarea name='message' placeholder='Message' required/>
                    </li>
                    <li className='send-button'>
                        <Button type='submit' value="SEND" >SEND</Button>
                    </li>
                </ul>
            </form>
            <div className='contact-page-connection-links'>
            <a target="_black" rel="noreferrer" href="https://www.linkedin.com/in/rahul1209/">
                <FontAwesomeIcon icon={faLinkedin} color='#fff'/>
            </a>
            <a target="_black" rel="noreferrer" href="https://www.github.com/rahulkundu1209/">
                <FontAwesomeIcon icon={faGithub} color='#fff'/>
            </a>
            <a target="_black" rel="noreferrer" href="https://www.instagram.com/_rahul_._kundu_/">
                <FontAwesomeIcon icon={faInstagram} color='#fff'/>
            </a>
            </div>
        </div>
    </div>
  )
}

export default ContactForm;
