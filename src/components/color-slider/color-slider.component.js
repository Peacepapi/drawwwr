import React, { Component } from 'react';
import { Slider } from './slider/slider.component';

export default class ColorSlider extends Component {
    constructor() {
        super();
        this.state = {
            red:0,
            blue:0,
            green:0
        }
    }

    handleChangeValue = (color, value) => {
        const newState = Object.assign({}, this.state);
        newState[color] = Number(value);
        this.setState({...newState});
    }

    render() {
        return (
            <div id='color-slider'>
                <h3>Yerr</h3>
                {Object.entries(this.state).map(([k,v]) => {
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