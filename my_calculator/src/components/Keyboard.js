import React from 'react';
import './Keyboard.css';

const Keyboard  = (props) => {

    return (
        <div className={'calculator-buttons'}>
            <button>%</button>
            <button>+/-</button>
            <button>C</button>
            <button className={'btn-blue'}>/</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button className={'btn-blue'}>x</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button className={'btn-blue'}>-</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button className={'btn-blue'}>+</button>
            <button>0</button>
            <button>,</button>
            <button className={'btn-equal'}>=</button>
        </div>
    )

};

export default Keyboard;