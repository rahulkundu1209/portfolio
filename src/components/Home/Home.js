import './Home.css';
import React from 'react';
import bg from '../../assets/rahul_bg_photo.png';
import { Link } from 'react-scroll';
import ModifiedButton02 from '../UI/ModifiedButton02';

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
                    <Link><ModifiedButton02 className=''>My CV</ModifiedButton02></Link>
                </span>
            </div>
        </section>
    );
}

export default Home;