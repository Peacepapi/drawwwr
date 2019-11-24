import React, { PureComponent } from 'react';
import SliderList from './slider/slider-list.component';
import PalleteList from './pallete/pallete-list.component';
import classes from './menu.css';

export default class Menu extends PureComponent {

    handleUpdateRGB = (color) => {
        this.props.handleUpdateRGB(color);
    }

    render() {
        return (
            <div className={classes.menu}>
                <div id={classes.title}>Drawwwr</div>
                <SliderList 
                    handleUpdateRGB={this.handleUpdateRGB} 
                    colorPicked={this.props.colorPicked}
                />
                <PalleteList 
                    colors={this.props.colors} 
                    handleUpdateRGB={this.handleUpdateRGB}
                />
            </div>
        )
    }
}