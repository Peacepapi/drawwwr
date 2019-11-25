import React, { PureComponent } from 'react';
import { Slider } from './slider.component';
import classes from './slider-list.css';

export default class SliderList extends PureComponent {

    handleChangeValue = (color, value) => {
        const newState = Object.assign({}, this.props.rgbValue);
        newState[color] = Number(value);
        console.log(newState);
        this.props.handleUpdateRGBValue(newState);
    }


    render() {
        const {red,green,blue} = this.props.colorPicked;
        console.log(this.props);
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