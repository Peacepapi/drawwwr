import React, { PureComponent } from 'react';
import './square.css';

export default class Square extends PureComponent {
 
    render() {
        const {row, 
            col, 
            mouseIsOver,
            mouseIsDown} = this.props;
        const moreClass = mouseIsDown ? 'isSelected':
                        mouseIsOver ? 'isHover':'';
        return (
            <div 
                className={`square ${moreClass}`}
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