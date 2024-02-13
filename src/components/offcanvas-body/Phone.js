import React, { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import './Phone.css';
// import Col from 'react-bootstrap/Col';
function Phone({ isClear, onActivateProgressBar, samp, dynamicName, dynamicId }) {
    const [phoneValue, setPhoneValue] = useState('');

    const [phoneNumber, setPhoneNumber] = useState('');//to fetch 0 or 1
    const [valid, setValid] = useState(true);//npm validation
    //
    const [fieldValue, setFieldValue] = useState(0);

    console.log("isClear", isClear) //1st comes with value false-no clear


    const handleChange = (value) => {
        setPhoneNumber(value);
        setValid(validatePhoneNumber(value));
        onActivateProgressBar(fieldValue);
        setPhoneValue((prevPhoneValue) => value)//to take all inputted digits else takes first 10 digits only
        // onGetPhoneValue(phoneValue);
        console.log("phonevalue11", value)
        samp(value)
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
    }, [phoneValue])


    return (
        <div>
            {/* {fieldValue} */}
            {console.log('name', dynamicName)}
            <PhoneInput className='phone'
                country={'in'}
                value={isClear ? "" : phoneNumber}
                onChange={handleChange}
                inputProps={{
                    // required: true,
                    placeholder: 'mobile',
                    name: dynamicName,
                    id: dynamicId,
                    // valid:valid
                }}
            />
            
        </div>
    )
}

export default Phone