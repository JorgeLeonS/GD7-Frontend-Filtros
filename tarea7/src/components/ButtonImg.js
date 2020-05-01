import React from 'react';

const ButtonImg = (props) =>{
    
    return(
        <button className={props.isSelected ? "selected" : "notSelected"} 
        onClick={() => {
             props.handler(props.lbl);
           }}> 
            <img className="m-auto" src={props.img}></img>
            <p style={{fontSize: "10px", fontFamily: "NunitoSans"}}>{props.lbl}</p>
        </button>
    )
}
export default ButtonImg;