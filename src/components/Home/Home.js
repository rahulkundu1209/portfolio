import './Home.css';
import React from 'react';
import bg from '../../assets/rahul_bg_photo.png';
import Resume from '../../assets/Resume.pdf';

const Home = () =>{
    return(
        <section id='intro'>
            <img src={bg} alt='Profile' className='bg'/>
            <div className='intro-content'>
                <span className='hello'>Hello, </span>
                <span className='intro-text'>
                    I'm
                    <span className='intro-name'> Rahul</span>
                    <p className='intro-para'>An Undergrad Student</p>
                    <a href={Resume} target='_blank'><button className='resume-button'>Resume</button></a>
                </span>
            </div>
        </section>
    );
}

export default Home;