import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './Phone.css';
import Col from 'react-bootstrap/Col';
function Phone({ isClear}) {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [valid, setValid] = useState(true);
    console.log("isClear", isClear)
  
    const handleChange = (value) => {
        setPhoneNumber(value);
        setValid(validatePhoneNumber(value));
    
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
                        placeholder: '(e.g. +91 1234567890)',
                    }}
                />

                {!valid && (
                    <p>enter a valid phone number</p>
                )}
            </Col>
        </div>
    )
}

export default Phone