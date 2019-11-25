import React from 'react';
import classes from './instructions.css';

export const Instructions = () => {
    return (
        <div className={classes['instructions-container']}>
            <p className={classes['instructions-para']}><strong>To Draw: </strong>Click or Click and Move</p>
            <p className={classes['instructions-para']}><strong>To Erase: </strong>Pick the first color from the pallete and Draw on the desired square</p>
        </div>
    )
}