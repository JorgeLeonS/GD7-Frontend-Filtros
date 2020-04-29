import React from 'react';

const ButtonImg = (props) =>{
    
    return(
        <div className="m-1">
            <img src={props.img}></img>
            <br></br>
            <p>{props.lbl}</p>
        </div>
    )
}
export default ButtonImg;