import React from "react";
import "./Hobby.css";
import PhotoCard from "./PhotoCard";
import p_1 from "../../assets/Photographs/p_1.jpg";
import p_2 from "../../assets/Photographs/p_2.jpg";
import p_3 from "../../assets/Photographs/p_3.jpg";
import p_4 from "../../assets/Photographs/p_4.jpg";
import p_5 from "../../assets/Photographs/p_5.jpg";
import p_6 from "../../assets/Photographs/p_6.jpg";
import Heading from "../UI/Heading";

const Hobby = () =>{
    const photographs = [
        {name:p_1},
        {name: p_2},
        {name: p_3},
        {name: p_4},
        {name: p_5},
        {name: p_6}
    ]
    return(
        <div className="hobby">
            <Heading content="HOBBY" fontSize = "35px" className="hobby-heading"/>
            <p className="hobby-text-zone">I love to capture beauty of nature. You will find out more on my instagram handle.</p>
            <div className="photographs">
                {photographs.map(photography=>(
                    <PhotoCard link={photography.name} key={photography.name}/>
                ))}
            </div>
        </div>
    )
}

export default Hobby;