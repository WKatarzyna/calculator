import React from 'react';
import {Component} from 'react';
import './App.css';
import Keyboard from './components/Keyboard';
import ResultField from "./components/ResultField";

class App extends Component {

    state = {
        operations: "",
        result: 0
    };

    handleClick = (button) => {

        if (button === "=") {
            this.calculate(button)
        } else if (button === "C") {
            this.resetResult()
        } else {
            this.setState({
                operations: this.state.operations + button
            })
            this.setState(prevState => ({
                operations: `${prevState.operations}`.replace(/([\/\+-/*=])([\/\+\-\*=])/gi, button)
            }))

        }
    };
    calculate = () => {

    }

    resetResult = () => {
        this.setState({
            result: 0,
            operations: ""
        })
    };

    render() {
        return (
            <div className={'container'}>
                <div className={'calculator-body'}>
                    <div className={'output'}>
                        <div className={'calculations'}>{this.state.operations}</div>
                        <ResultField result={this.state.result}/>
                    </div>
                    <Keyboard parentCallback={this.handleClick}/>
                </div>
            </div>);
    }

}

export default App;
