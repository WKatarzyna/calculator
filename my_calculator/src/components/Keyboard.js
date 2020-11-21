import React from 'react';
import './Keyboard.css';
import {Component} from 'react';

class Keyboard extends Component {

    handleClick = (e) => {
        this.props.parentCallback(e.target.value);
    };

    render() {
        return (
            <>
                <button className={"btn"} value={"%"} onClick={this.handleClick}>%</button>
                <button className={"btn"} value={"+/-"} onClick={this.handleClick}>+/-</button>
                <button className={"btn"} value={"C"} onClick={this.handleClick}>C</button>
                <button value={"/"} onClick={this.handleClick} className={'btn-blue btn'}>/</button>
                <button className={"btn"} value={"7"} onClick={this.handleClick}>7</button>
                <button className={"btn"} value={"8"} onClick={this.handleClick}>8</button>
                <button className={"btn"} value={"9"} onClick={this.handleClick}>9</button>
                <button value={"*"} onClick={this.handleClick} className={'btn-blue btn'}>x</button>
                <button className={"btn"} value={"4"} onClick={this.handleClick}>4</button>
                <button className={"btn"} value={"5"} onClick={this.handleClick}>5</button>
                <button className={"btn"} value={"6"} onClick={this.handleClick}>6</button>
                <button value={"-"} onClick={this.handleClick} className={'btn-blue btn'}>-</button>
                <button className={"btn"} value={"1"} onClick={this.handleClick}>1</button>
                <button className={"btn"} value={"2"} onClick={this.handleClick}>2</button>
                <button className={"btn"} value={"3"} onClick={this.handleClick}>3</button>
                <button value={"+"} onClick={this.handleClick} className={'btn-blue btn'}>+</button>
                <button className={"btn"} value={"0"} onClick={this.handleClick}>0</button>
                <button className={"btn"} value={","} onClick={this.handleClick}>,</button>
                <button value={"="} onClick={this.handleClick} className={'btn-equal btn'}>=</button>
            </>
        )
    }
}

export default Keyboard;