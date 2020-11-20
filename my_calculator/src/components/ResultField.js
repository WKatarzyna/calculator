import React from 'react';
import './ResultField.css';

const ResultField = (props) => {

    return (
        <div className={'result'}>
            <p className={'result--text'}>{props.result}</p>
        </div>
    )

};

export default ResultField;