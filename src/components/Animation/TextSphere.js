import './TextSphere.css';
import React from 'react';
import { useEffect } from 'react';
import TagCloud from 'TagCloud';

const TextShpere = () =>{
    useEffect(() => {
        return () => {
          const container = ".tagcloud";
          const texts = [
            "WebDev",
            "Problem Solving",
            "Photography",
            "Frontend",
            "Nature Lover",
            "Graphics",
            "Bike Ride",
            "Videography",
            "Editing",
            "Traveling",
            "Robotics",
            "Book Reading",
            "Open Source",
          ];
    
          const options = {
            radius: 250,
            maxSpeed: "normal",
            initSpeed: "normal",
            keep: true,
          };
    
          TagCloud(container, texts, options);
        };
      }, []);
    
      return (
        <>
            {/* span tag className must be "tagcloud"  */}
            <span className="tagcloud"></span>
        </>
      );
}

export default TextShpere;