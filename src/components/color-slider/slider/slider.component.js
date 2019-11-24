import React from 'react';

export const Slider = (props) => {
    const {label, value} = props;
    return (
        <div className='slider'>
            <label>{label}</label>
            <input 
                type='range' 
                min='0' 
                max='255' 
                value={value}
                onChange={(e) => props.handleChangeValue(label, e.target.value)}
            />
        </div>
    )
}