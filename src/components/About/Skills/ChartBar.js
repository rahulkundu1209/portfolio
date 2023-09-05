import React from 'react';
import './ChartBar.css';

const ChartBar = (props) =>{
    let barFillHeight = props.value + "%";

    return(
        <div className="chart-bar">
            <h1 className="chart-bar__label">{props.label}</h1>
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{width: barFillHeight}}></div>
            </div>
        </div>
    );
}

export default ChartBar;
