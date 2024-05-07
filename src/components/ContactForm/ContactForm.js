import React from 'react';
import './ContactForm.css';
import Button from '../UI/ModifiedButton';
import Heading from '../UI/Heading';
import SocialLinks from './SocialLinks';

function ContactForm() {
  return (
    <div id='contact-page'>
        <Heading content = "CONTACT ME" fontSize="20px" className="contact-page-heading"/>
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
                <SocialLinks/>
            </div>
        </div>
    </div>
  )
}

export default ContactForm;
