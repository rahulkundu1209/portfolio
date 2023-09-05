import React from 'react';
import './SkillsChart.css';
import ChartBar from './ChartBar';

const SkillsChart = () => {
  const dataPoints = [
    {
      label: 'C/C++',
      value: 80
    },
    {
      label: 'Python',
      value: 20
    },
    {
      label: 'HTML/CSS',
      value: 70
    },
    {
      label: 'JavaScript',
      value: 40
    },
    {
      label: 'React Js',
      value: 30
    },
    // {
    //   label: 'Next Js',
    //   value: 0
    // }
  ]
  return(
    <div className="chart">
        {dataPoints.map(dataPoint => (
            <ChartBar 
                key={dataPoint.label}
                value={dataPoint.value}
                label={dataPoint.label}
            />))}
    </div>
);
}

export default SkillsChart;
