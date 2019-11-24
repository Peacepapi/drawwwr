import React from 'react';
import classes from './slider.css';

export const Slider = (props) => {
    const {label, value} = props;
    return (
        <div>
            <label>{`${label} (${value})`}</label>
            <input 
                className={classes.slider}
                type='range' 
                min='0' 
                max='255' 
                value={value}
                onChange={(e) => props.handleChangeValue(label, e.target.value)}
            />
        </div>
    )
}