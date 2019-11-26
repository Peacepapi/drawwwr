import React ,{ Component } from 'react';
import Square from './square/square.component';
import classes from './grid.css';
import Menu from '../menu/menu.component';
import { compareColor } from '../../Utils/utilities';

const ROW_SIZE = 34;
const COL_SIZE = 48;

export default class Grid extends Component {
    constructor() {
        super();
        this.state = {
            grid: [],
            colorPicked: {red:0,green:0,blue:0},
            squareIsPressing: false,
            usedPallete: [{red:241,green:241,blue:241}]
        }
    }

    resetState = () => {
        this.setState({
            grid: this.createGrid(),
            colorPicked: {red:0,green:0,blue:0},
            squareIsPressing: false,
            usedPallete: [{red: 241, green: 241, blue:241}]
        })
    }

    componentDidMount() {
        this.setState({grid: this.createGrid()})
    }

    handleMouseOverToggle = (row, col) => {
        const newGrid = this.state.grid.slice();
        const square = newGrid[row][col];
        const newSquare = {
            ...square,
            mouseIsOver: !square.mouseIsOver
        }
        newGrid[row][col] = newSquare;
        this.setState({grid: newGrid});
    }

    handleMouseDown = (row, col) => {
        const newGrid = this.state.grid.slice();
        const newUsedPallete = this.state.usedPallete.slice();
        const square = newGrid[row][col];
        const newSquare = {
            ...square,
            color: this.state.colorPicked,
            mouseIsDown: true,
        }
        newGrid[row][col] = newSquare;

        if(!newUsedPallete.find(x => compareColor(x, this.state.colorPicked))) {
            newUsedPallete.push(this.state.colorPicked);
        }

        this.setState({grid: newGrid, 
            squareIsPressing: true,
            usedPallete: newUsedPallete
        });
    }

    handleMouseMove = (row, col) => {
        const { squareIsPressing, colorPicked } = this.state;
        const newGrid = this.state.grid.slice();
        const square = newGrid[row][col];  
        if(squareIsPressing && !compareColor(square.color, colorPicked))
            this.handleMouseDown(row, col);
    }

    handleMouseUp = () => {
        this.setState({squareIsPressing: false});
    }

    handleUpdateRGB = (rgb) => {
        const newState = Object.assign({}, this.state);
        newState.colorPicked = rgb;
        this.setState({...newState});
    }

    createGrid = () => {
        const grid = [];
        for(let i = 0; i < ROW_SIZE; i++) {
            const row = []
            for(let j = 0; j < COL_SIZE; j++) {
                row.push(this.createSquare(i, j))
            }
            grid.push(row);
        }
        return grid;
    }

    createSquare = (row, col) => {
        return {
            row,
            col,
            mouseIsOver: false,
            mouseIsDown: false,
            color:'',
            key:`r${row}c${col}`
        }
    }
    
    render() {
        return (
            <div className={classes.container}>
                <Menu 
                    handleUpdateRGB={this.handleUpdateRGB} 
                    handleResetState={this.resetState}
                    colorPicked={this.state.colorPicked}
                    colors={this.state.usedPallete}
                />
                <div id={classes.grid}>
                    {this.state.grid.map((rows, rId) => {
                        return (
                            <div className={classes.rows} id={`row${rId}`} key={`row${rId}`}>
                                {rows.map((el) => {
                                    return <Square 
                                        col={el.col} 
                                        row={el.row} 
                                        key={el.key}
                                        color={el.color}
                                        mouseIsOver={el.mouseIsOver}
                                        mouseIsDown={el.mouseIsDown}
                                        handleMouseDown={this.handleMouseDown}
                                        handleMouseUp={this.handleMouseUp}
                                        handleMouseMove={this.handleMouseMove}
                                        handleMouseOverToggle={this.handleMouseOverToggle}/>
                                })}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}