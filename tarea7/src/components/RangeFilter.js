/* FROM https://github.com/mui-org/material-ui/blob/master/docs/src/pages/components/slider/RangeSlider.js */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';    

const useStyles = makeStyles({
//   root: {
//     width: 300,
//   },
});

function valuetext(value) {
  return `${value}`;
}


const RangeFilter = (props) =>{
  const classes = useStyles();

  const [value, setValue] = React.useState([props.min, props.max]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange1 = (event) => {
    setValue([event.target.value === '' ? '' : Number(event.target.value), value[1]]);
  };
  const handleInputChange2 = (event) => {
    setValue([value[0], event.target.value === '' ? '' : Number(event.target.value)]);
  };

  return (
    <div className={classes.root}>
      {/* <Typography id="range-slider" gutterBottom>
        Temperature range
      </Typography> */}
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        step = {0.01}
        min = {props.min}
        max = {props.max}
      />
      <div className="flex justify-between">
      <Input
            className={classes.input}
            value={value[0]}
            margin="dense"
            onChange={handleInputChange1}
            inputProps={{
              step: 10,
              min: `${props.min}`,
              max: `${props.max}`,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
          <Input
            className={classes.input}
            value={value[1]}
            margin="dense"
            onChange={handleInputChange2}
            inputProps={{
              step: 10,
              min: `${props.min}`,
              max: `${props.max}`,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
          </div>
    </div>
  );
}
export default RangeFilter;
