import React, { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './Phone.css';
import Col from 'react-bootstrap/Col';
function Phone({ isClear, onActivateProgressBar }) {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [valid, setValid] = useState(true);
    console.log("isClear", isClear)

    const handleChange = (value) => {
        setPhoneNumber(value);
        setValid(validatePhoneNumber(value));
        onActivateProgressBar();
    };



    const validatePhoneNumber = (phoneNumber) => {
        const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;
        return phoneNumberPattern.test(phoneNumber);
    };

    return (
        <div>
            <Col sm={12}>
                <PhoneInput className='phone'
                    country={'in'}
                    value={isClear ? "" : phoneNumber}
                    onChange={handleChange}
                    inputProps={{
                        required: true,
                        placeholder: 'mobile*',
                        
                    }}
                />

                {/* {!valid && (
                    <p style={{color:'red'}}>enter a valid phone number</p>
                )} */}
            </Col>
        </div>
    )
}

export default Phone