import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

const ButtonComp = (props) => {

    return (
      <div className="m-4">
        <Button className="a" variant="contained" style={{border: `${props.border}`,
            backgroundColor: `${props.backC}`, color: `${props.lblC}`}}>
            {props.label}
        </Button>
      </div>
    )
  
}

export default ButtonComp;
