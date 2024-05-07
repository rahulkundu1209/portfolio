import React from "react";
import "./ModifiedButton02.css";

const ModifiedButton02 = (props) =>{
    return (
        <button type={props.type} value={props.value} className='customized-button-02'>
          {props.children}
        </button>
      )
}

export default ModifiedButton02;