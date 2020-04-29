import React, {useState, useEffect} from 'react';
import ButtonImg from './ButtonImg';

const ButtonFilter = (props) =>{
    const imgs = props.imgs;
    const lbls = props.lbls;

    // const buttonList = imgs.map((path, index) =>(

    // ));
    return(
        <div className="grid grid-cols-6">
    {imgs.map((path, i) =>{
        return(
            <div key={i} className="border-solid border border-blue">
                <ButtonImg
                    key = {i}
                    img = {path}
                    lbl = {lbls[i]}
                ></ButtonImg>
            </div>
        )
    })}
    </div>
    )
}

export default ButtonFilter;
