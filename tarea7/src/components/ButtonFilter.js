import React, {useState, useEffect} from 'react';
import ButtonImg from './ButtonImg';

const ButtonFilter = (props) =>{

    return(
        <>
        {props.imgs.map((path, i) =>{
            return(
                <div key={i} style={{border: "solid 1px blue"}} onClick={() => {
                    console.log(props.handler);
                  }}
                >
                    <ButtonImg
                        key = {i}
                        img = {path}
                        lbl = {props.lbls[i]}
                        handler={props.handler}
                        isSelected={props.lbls[i] === props.selected ? true : false}
                    ></ButtonImg>
                </div>
        )
    })}
    </>
    
    )
   
}

export default ButtonFilter;
