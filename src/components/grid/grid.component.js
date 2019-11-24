import React ,{ Component } from 'react';
import Square from './square/square.component';
import ColorSlider from '../color-slider/color-slider.component';
import './grid.css';

const ROW_SIZE = 25;
const COL_SIZE = 40;

export default class Grid extends Component {
    constructor() {
        super();
        this.state = {
            grid: [],
            colorPicked: '',
            squareIsPressed: [],
            squareIsPressing: false
        }
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
        const newSquarePressed = this.state.squareIsPressed.slice();
        const square = newGrid[row][col];

        const newSquare = {
            ...square,
            mouseIsDown: true,
        }
        newSquarePressed.push(`r${row}c${col}`);
        newGrid[row][col] = newSquare;
        this.setState({grid: newGrid, 
            squareIsPressed: newSquarePressed,
            squareIsPressing: true
        });

    }

    handleMouseMove = (row, col) => {
        if(this.state.squareIsPressing && !this.state.squareIsPressed.find(x => x ===`r${row}c${col}`))
            this.handleMouseDown(row, col);
    }

    handleMouseUp = () => {
        this.setState({squareIsPressing: false});
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
            mouseIsMoving: false,
            key:`r${row}c${col}`
        }
    }

    render() {
        return (
            <div className='wrapper'>
                <ColorSlider />
                <div id='grid'>
                    {this.state.grid.map((rows, rId) => {
                        return (
                            <div className={`row${rId}`} key={`row${rId}`}>
                                {rows.map((el) => {
                                    return <Square 
                                        col={el.col} 
                                        row={el.row} 
                                        key={el.key}
                                        squareIsPressing={this.state.squareIsPressing}
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