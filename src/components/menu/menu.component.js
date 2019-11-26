import React, { Component } from 'react';
import SliderList from './slider/slider-list.component';
import PalleteList from './pallete/pallete-list.component';
import classes from './menu.css';
import { Instructions } from './instructions/instructions.component';
import { Footer } from './footer/footer.component';
import { compareColor } from '../../Utils/utilities';

export default class Menu extends Component {
    constructor() {
        super();
        this.state = {
            rgbValue: {
                red:0,
                green:0,
                blue:0,
            }
        }
    
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(!compareColor(nextProps.colorPicked, this.props.colorPicked))
            return true;
        if(nextProps.colors.length === this.props.colors.length) {
            for(let i = 0; nextProps.colors.length;i++) {
                if(!compareColor(nextProps.colors[i], nextProps.colors[i]))
                    return true;
            }
        }
        return false;
    }

    handleUpdateRGBValue = (colorState) => {
        this.setState({rgbValue: colorState});
        this.props.handleUpdateRGB(colorState);
    }

    handleResetState = () => {
        this.props.handleResetState();
        this.setState({rgbValue:{
            red:0,green:0,blue:0}
        })
    }

    render() {
        return (
            <div className={classes.menu}>
                <div id={classes.title}>Drawwwr</div>
                <SliderList 
                    handleUpdateRGBValue={this.handleUpdateRGBValue} 
                    colorPicked={this.props.colorPicked}
                    rgbValue={this.state.rgbValue}
                />
                <PalleteList 
                    colors={this.props.colors}
                    handleUpdateRGBValue={this.handleUpdateRGBValue}
                    handleResetState={this.handleResetState}
                />
                <Instructions />
                <Footer />
            </div>
        )
    }
}