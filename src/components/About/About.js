import React from "react";
import './About.css';
// import TextShpere from "../Animation/TextSphere";
import EducationCard from "./EducationCard";
import RotatingCube from "../Animation/RotatingCube";
import SkillsChart from "./Skills/SkillsChart";
import Heading from "../UI/Heading";
import SocialLinks from "../ContactForm/SocialLinks";
import PhotoPolaroids from "./PhotoPolaroids";

const About = (props) =>{
    return(
        <section id="about">
            <div className="about-me">
                <div>
                    <Heading content= "ABOUT ME" fontSize = "35px"/>
                </div>
                <div className="about-content">
                    <div className="text-zone">
                        <p>
                            I am an undergrad student with passion for exploration and steadfast belief in integrity and honesty. Currently I am pursuing B.Tech in Computer Science with a specialization in Business Systems. I am eager to embark on my journey as a skilled engineer, continuously seeking opportunities to learn and master new technologies.Currently I am exploring the field of web development. I find immense joy in nurturing my skill in photography and graphics designing.
                        </p>
                        <SocialLinks/>
                    </div>
                    <div className="about-photos">
                        <PhotoPolaroids/>
                    </div>
                </div>
            </div>
            
            <div className="education">
                <div>
                    <Heading content="EDUCATION" fontSize = "30px" className="education-heading"/>
                </div>
                <div className="education-content">
                    <div>
                        <EducationCard
                        degree = {"BACHELOR OF TECHNOLOGY"}
                        specification={"Computer Science and Business Systems"}
                        interval={"2022-2026"}
                        institute={"Techno Main Salt Lake"}
                        />
                    </div>
                    <div>
                        <EducationCard
                        degree = {"HIGHER SECONDARY EDUCATION"}
                        specification={'WBCHSE'}
                        interval={"2019-2021"}
                        institute={"Bankura Zilla School"}
                        />
                    </div>
                    <div>
                        <EducationCard
                        degree = {"SECONDARY EDUCATION"}
                        specification={"WBBSE"}
                        interval={"2013-2019"}
                        institute={"Sadhu Ramchand Murmu Smriti Vidyapith"}
                        />
                    </div>
                </div>
            </div>
            {/* <Hobby/> */}
            <div className="skills">
                <div>
                    <Heading content="SKILLS" fontSize = "30px"/>
                </div>
                <div className="skills-content">
                    <div className="rotating-cube">
                        <RotatingCube/>
                    </div>
                    <div className="skills-chart">
                        <SkillsChart/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;