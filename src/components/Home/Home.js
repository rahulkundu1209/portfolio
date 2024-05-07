import './Home.css';
import React from 'react';
import bg from '../../assets/rahul_bg_photo.png';
import Resume from '../../assets/Resume.pdf';
import TextSpan from '../Animation/TextSpan';

const Home = () =>{
    const sentence1 = "Hello, ".split("");
    const sentence2 = "I'm Rahul".split("");
    const sentence3 = "An Undergrad Student".split("");

    return(
        <section id='intro'>
            <img src={bg} alt='Profile' className='bg'/>
            <div className='intro-content'>
                <span className='hello'>
                    {sentence1.map((letter, index)=>(
                        <TextSpan key={index}>
                            {letter}
                        </TextSpan>
                    ))}
                </span>
                <span className='intro-text'>
                    {sentence2.map((letter, index)=>(
                        <TextSpan key={index}>
                            {letter}
                        </TextSpan>
                    ))}
                </span>
                <span className='intro-para'>
                    {sentence3.map((letter, index)=>(
                        <TextSpan key={index}>
                            {letter}
                        </TextSpan>
                    ))}
                </span>
                <a href={Resume} target='_blank' rel="noreferrer"><button className='resume-button'>Resume</button></a>
            </div>
        </section>
    );
}

export default Home;