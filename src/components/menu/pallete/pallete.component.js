import React from 'react';
import classes from './pallete.css';

export const Pallete = (props) => {
    const { color } = props;
    return (
        <span 
            className={classes.pallete} 
            style={{backgroundColor: color}}
            onClick={() => props.handleUpdateRGB(color)}>
        </span>
    )
}