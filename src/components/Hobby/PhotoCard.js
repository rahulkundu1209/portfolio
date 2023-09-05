import React, { useState } from "react";
import './PhotoCard.css';

const PhotoCard = (props) =>{
    const [selection, setSelection] =useState(false);
    const selectionHandler = () =>{
        setSelection(true);
    }

    return(
        <>
        <div className={`${selection===true ? "blured-photos" : ""}`} onClick={()=>setSelection(false)}></div>
        <div className={`${selection===true ? "photo-card selected-photocard" : "photo-card"}`} onClick={selectionHandler}>
            <img src={props.link}/>
        </div>
        </>
    )
}

export default PhotoCard;