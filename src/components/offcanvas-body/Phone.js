import React, { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './Phone.css';
// import Col from 'react-bootstrap/Col';
function Phone({ isClear, onActivateProgressBar }) {

    const [phoneNumber, setPhoneNumber] = useState('');//to fetch 0 or 1
    const [valid, setValid] = useState(true);
    //
    const [fieldValue, setFieldValue] = useState(0);

    console.log("isClear", isClear) //1st comes with value false-no clear

    const handleChange = (value) => {
        setPhoneNumber(value);
        setValid(validatePhoneNumber(value));
        onActivateProgressBar(fieldValue);
    };


    const validatePhoneNumber = (phoneNumber) => {
        const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;
        return phoneNumberPattern.test(phoneNumber);
    };

    useEffect(() => {
        if (phoneNumber.length > 2) {
            setFieldValue(1)
        } else {
            setFieldValue(0)
        }
    }, [phoneNumber])


    return (
        <div>
            {/* {fieldValue} */}
            <PhoneInput className='phone'
                country={'in'}
                value={isClear ? "" : phoneNumber}
                onChange={handleChange}
                inputProps={{
                    required: true,
                    placeholder: 'mobile*',

                }}
            />

        </div>
    )
}

export default Phone