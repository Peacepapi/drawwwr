import React, { Component } from 'react';
import { Pallete } from './pallete.component';
import classes from './pallete-list.css';

export default class PalleteList extends Component {
    handleUpdateRGB = (color) => {
        this.props.handleUpdateRGB(color);
    }

    render() {
        return (
            <div>
                <h3>Used Pallete</h3>
                <div className={classes.palleteContainer}>
                    {this.props.colors.map(color => {
                        return <Pallete 
                            key={color} 
                            color={color}
                            handleUpdateRGB={this.handleUpdateRGB}
                        />
                    })}
                </div>
            </div>
        )
    }
}