import React, { Component } from 'react';
import { Slider } from './slider.component';
import classes from './slider-list.css';
import { compareColor } from '../../../Utils/utilities';

export default class SliderList extends Component {

    handleChangeValue = (color, value) => {
        const newState = Object.assign({}, this.props.rgbValue);
        newState[color] = Number(value);
        this.props.handleUpdateRGBValue(newState);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !compareColor(nextProps.colorPicked, this.props.colorPicked) || 
                !compareColor(nextProps.rgbValue, this.props.rgbValue); 
    }

    render() {
        const {red,green,blue} = this.props.colorPicked;
        return (
            <div id='color-slider'>
                <div 
                    className={classes.pallete}
                    style={{backgroundColor: `rgb(${red},${green},${blue})`}}
                    >
                </div>
                <h3>Pallete</h3>
                {Object.entries(this.props.rgbValue).map(([k,v]) => {
                    return <Slider 
                        key={k} 
                        value={v} 
                        label={k}
                        handleChangeValue={this.handleChangeValue}
                        />
                })}
            </div>
        )
    }
}