import React, { Component } from 'react';
import { Slider } from './slider.component';
import classes from './slider-list.css';

export default class SliderList extends Component {
    constructor() {
        super();
        this.state = {
            red:0,
            green:0,
            blue:0,
        }
    }

    handleChangeValue = (color, value) => {
        const newState = Object.assign({}, this.state);
        newState[color] = Number(value);
        this.setState({...newState});
        this.props.handleUpdateRGB(`rgb(${newState.red},${newState.green},${newState.blue})`);
    }

    render() {
        return (
            <div id='color-slider'>
                <div 
                    className={classes.pallete}
                    style={{backgroundColor: this.props.colorPicked}}
                    >
                </div>
                <h3>Pallete</h3>
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