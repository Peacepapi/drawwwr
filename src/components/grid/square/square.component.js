import React, { PureComponent } from 'react';
import classes from './square.css';

export default class Square extends PureComponent {
 
    render() {
        const {row,col,mouseIsOver,mouseIsDown,color} = this.props;
        const moreClass = mouseIsOver ? 'isHover':'';
        const style = color === 'rgb(241,241,241)' ? {}:
                        mouseIsDown ? {backgroundColor: color}:null;
        return (
            <div 
                className={`${classes.square} ${moreClass ? classes[moreClass]:''}`}
                style={style}
                id={`r${row}c${col}`}
                onMouseDown={() => this.props.handleMouseDown(row,col)}
                onMouseUp={() => this.props.handleMouseUp()}
                onMouseMove={() => this.props.handleMouseMove(row,col)}
                onMouseOver={() => this.props.handleMouseOverToggle(row,col)}
                onMouseLeave={() => this.props.handleMouseOverToggle(row,col)}
            ></div>
        )
    }
    
}