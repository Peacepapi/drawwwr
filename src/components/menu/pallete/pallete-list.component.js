import React, { Component } from 'react';
import Pallete from './pallete.component';
import classes from './pallete-list.css';
import { compareColor } from '../../../Utils/utilities';

export default class PalleteList extends Component {
    handleUpdateRGBValue = (color) => {
        this.props.handleUpdateRGBValue(color);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.colors.length === this.props.colors.length) {
            for(let i = 0; nextProps.colors.length;i++) {
                if(!compareColor(nextProps.colors[i], nextProps.colors[i]))
                    return true;
            }
        }
        return false;
    }

    render() {
        return (
            <div>
                <h3>Used Pallete</h3>
                <div className={classes.palleteContainer}>
                    {this.props.colors.map(rgbValue => {
                        const {red, green, blue} = rgbValue;
                        return <Pallete 
                            key={''+red+green+blue} 
                            color={rgbValue}
                            handleUpdateRGBValue={this.handleUpdateRGBValue}
                        />
                    })}
                </div>
                <div className={classes['btn-wrapper']}>
                    <button className={classes.btn} onClick={() => this.props.handleResetState()}>Reset</button>
                </div>
            </div>
        )
    }
}