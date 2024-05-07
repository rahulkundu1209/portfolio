import React from 'react';
import './SkillsChart.css';
import ChartBar from './ChartBar';

const SkillsChart = () => {
  const dataPoints = [
    {
      label: 'C/C++',
      value: 80,
      learning: "I began with C as my first programming language, as is common among many programmers. In my second semester, I took a course called 'Programming for Problem Solving,' where an exceptional faculty member taught us. His teaching style not only helped me grasp the subject well but also taught me how to effectively learn a programming language. I scored 9 points in the theory paper and 10 points in the practical paper. However, my experience with learning C++ was different. I learned it primarily to solve Data Structures and Algorithms (DSA) problems, mainly from tutorials by Striver, a renowned tutor on YouTube and a Software Development Engineer (SDE) at Google. Additionally, I referenced documentation as needed during my learning process.",
      certificate: null
    },
    {
      label: 'Python',
      value: 20,
      learning: "In the third semester, I learned Python as part of the practical paper 'Computational Statistics'. My primary learning resources were following the faculty's guidance and studying documentation from W3Schools.",
      certificate: null
    },
    {
      label: 'HTML/CSS/JS',
      value: 70,
      learning: "Out of a keen interest in understanding the creation of the web pages we commonly use, I began learning web development from scratch during the early days of my college journey. Initially, I relied on YouTube videos, and later, I enrolled in a web development course offered by IBM on Coursera.",
      certificate: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~GB2SERMGY6TA/CERTIFICATE_LANDING_PAGE~GB2SERMGY6TA.jpeg"
    },
    {
      label: 'React Js',
      value: 50,
      learning: "After mastering the basics of web development, I decided to delve deeper into the field. After conducting some research, I concluded that MERN (MongoDB, Express.js, React.js, Node.js) development was the most suitable path for me. Consequently, I began my journey with React.js and enrolled in a course taught by Maximilian Schwarzmuller on Udemy.",
      certificate: "https://udemy-certificate.s3.amazonaws.com/image/UC-b24ea563-e9dc-4648-b72b-4abd3710e8f0.jpg?v=1705495204000"
    },
    {
      label: 'Node Js',
      value: 10,
      learning: "Currently learning from Udemy.",
      certificate: null
    },
    // {
    //   label: 'Next Js',
    //   value: 0
    // }
  ]
  return(
    <div className="chart">
      <h1>Programming</h1>
        {dataPoints.map(dataPoint => (
            <ChartBar 
                key={dataPoint.label}
                value={dataPoint.value}
                label={dataPoint.label}
                learning={dataPoint.learning}
                certificate={dataPoint.certificate}
            />))}
    </div>
);
}

export default SkillsChart;
