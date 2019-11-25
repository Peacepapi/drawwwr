import React, { PureComponent } from 'react';
import { Pallete } from './pallete.component';
import classes from './pallete-list.css';

export default class PalleteList extends PureComponent {
    handleUpdateRGBValue = (color) => {
        this.props.handleUpdateRGBValue(color);
    }

    render() {
        console.log(this.props)
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
                <button onClick={() => this.props.handleResetState()}>Reset</button>
            </div>
        )
    }
}