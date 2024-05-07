import React, { useState } from 'react';
import './ChartBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import Modal from '../../UI/Modal';

const ChartBar = (props) =>{
    let barFillHeight = props.value + "%";
    const [showInfo, setShowInfo] = useState(false);

    return(
        <div className="chart-bar">
            <div className='chart-bar-heading'>
                <h1 className="chart-bar__label">{props.label}</h1>
                <FontAwesomeIcon 
                icon={faCircleInfo} 
                className='chart-bar-info-icon'  
                onClick={(e)=>{setShowInfo(!showInfo)}} 
                />
                {showInfo && 
                <Modal 
                    learning={props.learning}
                    skill={props.label} 
                    closeModal={(e)=>setShowInfo(false)}
                    certificate={props.certificate}
                     />
                }
            </div>
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{width: barFillHeight}}></div>
            </div>
        </div>
    );
}

export default ChartBar;
