import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './ProgressBarWithLabel.css';
function ProgressBarWithLabel({ progressValue }) {
    const now = progressValue;
    return (
        <div className='d-none d-md-block d-lg-block d-xl-block'>
            <ProgressBar striped variant="primary" now={now} label={`${now}% Done`} className='progress' style={{
                backgroundColor: '#343A40',
                height: '1.3rem',
                position: 'absolute',
                right: '40px',
                top: '15px'
            }} />
        </div>

    )
}

export default ProgressBarWithLabel
