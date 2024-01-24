import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

function ProgressBarWithLabel() {
    const now = 40;
    return <ProgressBar striped variant="primary" now={now} label={`${now}% Done`} style={{backgroundColor:'#343A40',width:'25rem',marginLeft:'auto'}}/>;
}

export default ProgressBarWithLabel
