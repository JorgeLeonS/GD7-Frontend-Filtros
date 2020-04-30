import React, {useState, useEffect} from 'react';
import ButtonImg from './ButtonImg';

const ButtonFilter = (props) =>{

    // const buttonList = imgs.map((path, index) =>(

    // ));
    return(
        <>
        {props.imgs.map((path, i) =>{
            return(
                <div key={i} style={{border: "solid 1px blue"}} >
                    <ButtonImg
                        key = {i}
                        img = {path}
                        lbl = {props.lbls[i]}
                    ></ButtonImg>
                </div>
        )
    })}
    </>
    )
}

export default ButtonFilter;
