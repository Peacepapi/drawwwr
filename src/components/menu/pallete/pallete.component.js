import React, { Component } from 'react';
import classes from './pallete.css';
import { compareColor } from '../../../Utils/utilities';

export default class Pallete extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return !compareColor(nextProps.color, this.props.color);
    }   

    render() {
        const { red,green,blue } = this.props.color; 
        return (
            <span 
                className={classes.pallete} 
                style={{backgroundColor: `rgb(${red},${green},${blue}`}}
                onClick={() => this.props.handleUpdateRGBValue(this.props.color)}>
            </span>
        )
    }
    
}