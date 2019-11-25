import React from 'react';
import classes from './pallete.css';

export const Pallete = (props) => {
    const { red,green,blue } = props.color;        
    return (
        <span 
            className={classes.pallete} 
            style={{backgroundColor: `rgb(${red},${green},${blue}`}}
            onClick={() => props.handleUpdateRGBValue(props.color)}>
        </span>
    )
}