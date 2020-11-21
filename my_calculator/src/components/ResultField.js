import React from 'react';
import './ResultField.css';

const ResultField = (props) => {

    return (
        <div className={'result'}>
            {props.result}
        </div>
    )

};

export default ResultField;