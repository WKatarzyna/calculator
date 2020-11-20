import React from 'react';
import {Component} from 'react';
import './App.css';
import Keyboard from './components/Keyboard';
import ResultField from "./components/ResultField";

class App extends Component {

    state = {
        result: ""
    };

    render() {

        return (
            <div className={'container'}>
                <div className={'calculator-body'}>
                    <ResultField result={this.state.result}/>
                    {this.state.result}
                    <Keyboard/>
                </div>
            </div>);
    }

}

export default App;
