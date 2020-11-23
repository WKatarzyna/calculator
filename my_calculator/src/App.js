import React from 'react';
import {Component} from 'react';
import './App.css';
// Importing components
import Keypad from './components/Keypad';
import ResultField from "./components/ResultField";

class App extends Component {

    state = {
        equation: "",
        result: "",
        calculation: ""
    };

    handleClick = (pressedValue) => {

        if (pressedValue === "=") return this.calculate(this.parseCalculationString(this.state.equation));
        else if (pressedValue === "C") {
            this.resetResult();
        }
        else if (pressedValue === "+/-" && this.state.equation.length > 0) {
            this.invertNumber();
        }
        else if (pressedValue === "%" && this.state.equation.length < 1) return this.setState(prevState => ({equation: prevState.equation}));
        else return this.initialValueIsNumber(pressedValue);

    };

    initialValueIsNumber = (pressedValue) => {
        if (isNaN(parseInt(pressedValue)) && this.state.equation.length === 0) return this.setState({equation: ''});
        else if (isNaN(parseInt(this.state.equation[this.state.equation.length - 1])) && isNaN(parseInt(pressedValue))) {
            this.setState(prevState => ({
                equation: prevState.equation.substring(0, prevState.equation.length - 1) + pressedValue

            }))
        } else {
            let initialValue = 0;
            if ((this.state.equation[initialValue] === '0' && this.state.equation.length === 1 && ['-', '+', '/', '*', '%'].indexOf(pressedValue) === -1)) {
                this.setState({
                        equation: pressedValue
                    }
                )
            } else {
                this.setState({
                        equation: this.state.equation + pressedValue
                    }
                )
            }
        }
    };
    invertNumber = () => {
        let index, firstPartOfEquation, secondPartOfEquation;
        let mathEquation = this.state.equation;
        for (let i = 0; i < mathEquation.length; i++) {

            if (['-', '+', '/', '*', '%'].indexOf(mathEquation[i]) > -1) {
                index = i;
            }
        }
        if (index === 0) {
            this.setState({
                    equation: mathEquation >= 0 ? -Math.abs(mathEquation).toString() : Math.abs(mathEquation).toString()
                }
            )
        } else {
            firstPartOfEquation = mathEquation.substring(0, index + 1);
            secondPartOfEquation = parseFloat(mathEquation.substring(index + 1, mathEquation.length));
            if (!(mathEquation[index - 1] === '+' || mathEquation[index - 1] === '-' || mathEquation[index - 1] === '*' || mathEquation[index - 1] === '/' || mathEquation[index - 1] === '%') && index !== mathEquation.length - 1) {
                firstPartOfEquation = mathEquation.substring(0, index + 1);
                secondPartOfEquation = parseFloat(mathEquation.substring(index + 1, mathEquation.length));
                this.setState({
                        equation: firstPartOfEquation + (secondPartOfEquation >= 0 ? -Math.abs(secondPartOfEquation).toString() : Math.abs(secondPartOfEquation).toString())
                    }
                )
            } else if (index !== mathEquation.length - 1) {
                firstPartOfEquation = mathEquation.substring(0, index);
                secondPartOfEquation = parseFloat(mathEquation.substring(index, mathEquation.length));
                this.setState({
                        equation: firstPartOfEquation + (secondPartOfEquation >= 0 ? -Math.abs(secondPartOfEquation).toString() : Math.abs(secondPartOfEquation).toString())
                    }
                )
            }


        }

    };

    parseCalculationString = (str) => {
        let calculation = [],
            current = '';
        for (var i = 0, ch; ch = str.charAt(i); i++)  {
            if (['-', '+', '/', '*', '%'].indexOf(ch) > -1) {
                if (current === '' && ch === '-') {
                    current += '-';
                } else {
                    calculation.push(parseFloat(current), ch);
                    current = '';
                }
            } else {
                current += str.charAt(i);
            }
        }
        if (current !== '') {
            calculation.push(parseFloat(current));
        }
        return calculation;
    };

    calculate = (calc) => {
        try {
            let ops = [
                    {'%': (a, b) => b * a / 100},
                    {'*': (a, b) => a * b, '/': (a, b) => a / b},
                    {'+': (a, b) => a + b, '-': (a, b) => a - b}],
                newCalc = [],
                currentOp;
            for (let i = 0; i < ops.length; i++) {
                for (let j = 0; j < calc.length; j++) {
                    if (ops[i][calc[j]]) {
                        currentOp = ops[i][calc[j]];
                    } else if (currentOp) {
                        newCalc[newCalc.length - 1] =
                            currentOp(newCalc[newCalc.length - 1], calc[j]);
                        currentOp = null;
                    } else {
                        newCalc.push(calc[j]);
                    }
                }
                calc = newCalc;
                newCalc = [];
            }
            if (calc.length > 1) {
                return calc;
            } else {
                this.setState({
                    result: calc[0].toFixed(2)
                })

            }
        } catch (e) {
            this.setState({
                result: "error"
            })

        }

    };

    resetResult = () => {
        this.setState({
            equation: "",
            result: ""
        })
    };

    render() {
        return (
            <div className={'container'}>
                <div className={'calculator-body'}>
                    <div className={'output'}>
                        <div className={'calculations'}>{this.state.equation}</div>
                        <ResultField result={this.state.result}/>
                    </div>
                    <Keypad parentCallback={this.handleClick}/>
                </div>
            </div>);
    }

}

export default App;
