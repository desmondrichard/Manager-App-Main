import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useFormik } from 'formik';
import { useRef } from 'react';
import { Country, State, City } from 'country-state-city';
import Select from "react-select";
import ProgressBarWithLabel from '../../ProgressBarWithLabel';
// validation:
const validate = values => {
    const errors = {};

    if (!values.staffAadharNo) {
        errors.staffAadharNo = "*Required";
    }
    else if (!/^[0-9]{4}[ -]?[0-9]{4}[ -]?[0-9]{4}$/.test(values.staffAadharNo)) {
        errors.staffAadharNo = "Enter Valid Aadhar Number"
    }

    if (!values.staffPanNo) {
        errors.staffPanNo = "*Required";
    }
    else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(values.staffPanNo)) {
        errors.staffPanNo = "Enter Valid Pan Card Number"
    }

    if (!values.staffPassNo) {
        errors.staffPassNo = "*Required";
    }
    else if (!/^[a-zA-Z0-9]{10}$/.test(values.staffPassNo)) {
        errors.staffPassNo = "Enter Valid Passport Number"
    }

    if (!values.staffPassExp) {
        errors.staffPassExp = "*Required";
    }

    if (!values.staffBirth) {
        errors.staffBirth = "*Required"
    }
    else if (!/^[0-9]{6,14}$/.test(values.staffBirth)) {
        errors.staffBirth = "Enter Valid Birth Certificate Number"
    }

    if (!values.staffVisaNo) {
        errors.staffVisaNo = "*Required"
    }
    else if (!/^[0-9]{16}?$/.test(values.staffVisaNo)) {
        errors.staffVisaNo = "Enter Valid Visa Number"
    }

    if (!values.staffAddress0) {
        errors.staffAddress0 = "Required"
    }

    if (!values.staffAddress1) {
        errors.staffAddress1 = "Required"
    }

    if (!values.selectedCountry) {
        errors.selectedCountry = "Required";
    }

    if (!values.selectedState) {
        errors.selectedState = "Required";
    }

    if (!values.selectedCity) {
        errors.selectedCity = "Required";
    }

    return errors;
}

function StaffIDCardDetails({ activationKey, onActivationKeyChild, onPreviousActivationKey }) {
    //reset address:
    const [clearValue, setClearValue] = useState(false);

    const [childNextKey, setChildNextKey] = useState("3");

    // reset form start: 
    const aadharno1 = useRef("");
    const panno1 = useRef("");
    const passno1 = useRef("");
    const passexp1 = useRef("");
    const birth1 = useRef("");
    const visaYes = useRef(false);
    const visaNo = useRef(false);
    const visaNumber = useRef("");
    const visaValid = useRef("");
    const address0 = useRef("");
    const address1 = useRef("");
    const address2 = useRef("");

    // const addressRef0 = useRef("");

    // for npm custom component dont use useRef instead use useState i.e for phone component
    function handleReset() {
        aadharno1.current.value = "";
        panno1.current.value = "";
        passno1.current.value = "";
        passexp1.current.value = "";
        birth1.current.value = "";
        visaYes.current.checked = false;
        visaNo.current.checked = false;
        visaNumber.current.value = "";
        visaValid.current.value = "";
        address0.current.value = "";
        address1.current.value = "";
        address2.current.value = "";
        setSelectedCountry(null);
        setSelectedState(null);
        setSelectedCity(null);
        //reset address:
        setClearValue(true);
        formik.resetForm();
        setProgress(0);
        //reset npm country-state-city
       
    }


    const formik = useFormik({
        initialValues: {
            staffAadharNo: '',
            staffPanNo: '',
            staffPassNo: '',
            staffPassExp: '',
            staffBirth: '',
            staffVisaNo: '',
            staffAddress0: '',
            staffAddress1: '',
            staffAddress2: '',
            selectedCountry: null,
            selectedState: null,
            selectedCity: null,
        },
        validate,
        onSubmit: values => {
            alert(`Hello! ,${values.fNamelNamemName}you have successfully signed up`);
            onActivationKeyChild(childNextKey)

        }
    });

    const handlePreviousButton = () => {
        onPreviousActivationKey("1")
    }

    //Progress Bar:
    const [progress, setProgress] = useState(0);

    function handleProgress() {
        //check form values or formik values:
        console.log("formik vals Idcard:", formik.values);
        //set progress as 1 if current form field is filled else 0:  
        //get no of form vals filled by adding it inside a object:
        let result = countKeysWithNonEmptyValues(formik.values); //sending object as parameter which has all form fields
        console.log(result);  //returned count is stored in result variable
        //if not null need to sent countryCount as 1 and then add it to result:
        let countryCount = 0;
        let stateCount = 0;
        let cityCount = 0;
        if (formik.values.selectedCountry !== null && formik.values.selectedCountry !== undefined) {  //we can also put selectedCountry directly instead of formik.values.selectedCountry
            countryCount = 1;
        }

        if (formik.values.selectedState !== null && formik.values.selectedState !== undefined) {
            stateCount = 1;
        }

        if (formik.values.selectedCity !== null && formik.values.selectedCity !== undefined) {
            cityCount = 1;
        }

        var npmProgress = parseInt((countryCount + stateCount + cityCount) / 3);
        setProgress(npmProgress);
        console.log("countryCount:", countryCount);
        console.log("stateCount:", stateCount);
        console.log("cityCount:", cityCount);
        console.log("selectedCountry", selectedCountry);
        //calc formula
        let newProgress = ((result / 14) * 100).toFixed();

        console.log("Progress", newProgress)
        //store result progress value
        setProgress(newProgress);
    }
    function countKeysWithNonEmptyValues(obj) {
        let count = 0;

        for (const key in obj) {
            if (
                obj.hasOwnProperty(key) &&    //hasOwnProperty is used to check any value present in obj
                obj[key] !== null &&
                obj[key] !== undefined &&
                obj[key] !== ''
            ) {
                count++;
            }
        }
        console.log("count", count)
        return count;
    }


    // function onActivateProgressBar() {
    //     handleProgress();
    // }


    // country-state-city:
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedState, setSelectedState] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);
    useEffect(() => {
        console.log(selectedCountry);
        console.log(selectedCountry?.isoCode);
        console.log(State?.getStatesOfCountry(selectedCountry?.isoCode));
    }, [selectedCountry]);

    //useEffect will be trigerred whenever formik.values has value
    useEffect(() => {
        handleProgress();
    }, [formik.values, selectedCountry, selectedState, selectedCity]); // Ensure that the effect is triggered when form values change


    return (

        <Accordion.Item eventKey="2">
            <Accordion.Header><i className="bi bi-info-circle-fill me-1"></i><span style={{ fontWeight: '700' }}>ID CARD DETAILS</span><ProgressBarWithLabel progressValue={progress} /></Accordion.Header>
            <Accordion.Body>
                <Container >
                    <p>{activationKey}</p>
                    <Form style={{ paddingRight: '60px' }} >
                        <Row>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="staffAadharNo"
                                        type="text"
                                        placeholder="aadharno"
                                        name="staffAadharNo"
                                        ref={aadharno1}
                                        value={formik.values.staffAadharNo} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.staffAadharNo && formik.errors.staffAadharNo ? <span className='span'>{formik.errors.staffAadharNo}</span> : null
                                    }
                                    <label htmlFor="staffAadharNo" className='text-muted'>AADHAR NO*</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="staffPanNo"
                                        type="text"
                                        placeholder="panno"
                                        name="staffPanNo"
                                        ref={panno1}
                                        value={formik.values.staffPanNo} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.staffPanNo && formik.errors.staffPanNo ? <span className='span'>{formik.errors.staffPanNo}</span> : null
                                    }
                                    <label htmlFor="staffPanNo" className='text-muted'>PANCARD NO*</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="staffPassNo"
                                        type="text"
                                        placeholder="passno"
                                        name="staffPassNo"
                                        ref={passno1}
                                        value={formik.values.staffPassNo} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.staffPassNo && formik.errors.staffPassNo ? <span className='span'>{formik.errors.staffPassNo}</span> : null
                                    }
                                    <label htmlFor="staffPassNo" className='text-muted'>PASSPORT NO*</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="staffPassExp"
                                        type="date"
                                        placeholder="passexp"
                                        name="staffPassExp"
                                        ref={passexp1}
                                        value={formik.values.staffPassExp} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                        min={new Date().toISOString().split('T')[0]}
                                    />
                                    {
                                        formik.touched.staffPassExp && formik.errors.staffPassExp ? <span className='span'>{formik.errors.staffPassExp}</span> : null
                                    }
                                    <label htmlFor="staffPassExp" className='text-muted'>PASSPORT EXP DATE*</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="staffBirth"
                                        type="text"
                                        placeholder="birth"
                                        name="staffBirth"
                                        ref={birth1}
                                        value={formik.values.staffBirth} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.staffBirth && formik.errors.staffBirth ? <span className='span'>{formik.errors.staffBirth}</span> : null
                                    }
                                    <label htmlFor="staffBirth" className='text-muted' style={{ fontSize: '13px' }}>BIRTH CERTIFICATE NO*</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col' style={{ textAlign: 'center' }}>
                                <label className='text-muted' htmlFor="battingpads">DO YOU HAVE VISA CARD</label>
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} onChange={(e) => { formik.handleChange(e) }}>
                                        <Form.Check style={{

                                        }}
                                            inline
                                            label="Yes"
                                            name="visa"
                                            type={type}
                                            id={`inline-${type}-provided`}
                                            ref={visaYes}
                                            value="visaYes"
                                        />
                                        <Form.Check
                                            inline
                                            label="No"
                                            name="visa"
                                            type={type}
                                            id={`inline-${type}-notprovided`}
                                            // defaultChecked={true}
                                            ref={visaNo}
                                            value="visaNo"
                                        />
                                    </div>
                                ))}
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="staffVisaNo"
                                        type="text"
                                        placeholder="visano"
                                        name="staffVisaNo"
                                        ref={visaNumber}
                                        value={formik.values.staffVisaNo} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.staffVisaNo && formik.errors.staffVisaNo ? <span className='span'>{formik.errors.staffVisaNo}</span> : null
                                    }
                                    <label htmlFor="staffVisaNo" className='text-muted' style={{ fontSize: '13px' }}>VISA NO</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="staffVisaValidity"
                                        type="date"
                                        placeholder="visavalidity"
                                        name="staffVisaValidity"
                                        ref={visaValid}
                                        min={new Date().toISOString().split('T')[0]}
                                        onChange={(e) => { formik.handleChange(e) }}
                                    />
                                    <label htmlFor="staffVisaValidity" className='text-muted' style={{ fontSize: '13px' }}>VISA VALIDITY</label>
                                </Form.Floating>
                            </Col>

                            {/* <Row className='row1'> */}
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="staffAddress0"
                                        type="text"
                                        placeholder="address"
                                        name="staffAddress0"
                                        ref={address0}
                                        value={formik.values.staffAddress0} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.staffAddress0 && formik.errors.staffAddress0 ? <span className='span'>{formik.errors.staffAddress0}</span> : null
                                    }
                                    <label htmlFor="staffAddress" className='text-muted'>ADDRESS*</label>
                                </Form.Floating>
                            </Col>
                            {/* {isFocused && ( */}
                            <>
                                <Col xs={12} lg={4} className='col'>
                                    <Form.Floating className="mb-2">
                                        <Form.Control
                                            id="staffAddress1"
                                            type="text"
                                            placeholder="address1"
                                            name="staffAddress1"
                                            ref={address1}
                                            // value={
                                            //     isClearAddress1 ? "" : value1
                                            // }
                                            // onChange={e => setValue1(e.target.value)}
                                            value={formik.values.staffAddress1} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                        />
                                        {
                                            formik.touched.staffAddress1 && formik.errors.staffAddress1 ? <span className='span'>{formik.errors.staffAddress1}</span> : null
                                        }

                                        <label htmlFor="address1" className='text-muted'>ADDRESS LINE 1*</label>
                                    </Form.Floating>
                                </Col>
                                <Col xs={12} lg={4} className='col'>
                                    <Form.Floating className="mb-2">
                                        <Form.Control
                                            id="staffAddress2"
                                            type="text"
                                            placeholder="address2"
                                            name="staffAddress2"
                                            ref={address2}
                                            // value={
                                            //     isClearAddress2 ? "" : value2
                                            // }
                                            // onChange={e => setValue2(e.target.value)}
                                            value={formik.values.staffAddress2} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                        />
                                        {
                                            formik.touched.staffAddress2 && formik.errors.staffAddress2 ? <span className='span'>{formik.errors.staffAddress2}</span> : null
                                        }
                                        <label htmlFor="address2" className='text-muted'>ADDRESS LINE 2</label>
                                    </Form.Floating>
                                </Col>

                                {/* country-state-city: */}
                                <Col xs={12} lg={4} className='col'>
                                    {/* <label htmlFor="country">Country:</label> */}
                                    <Select placeholder='country*' id='country' name='selectedCountry'
                                        className="dynamicSelect" style={{ zIndex: 100, outline: 'none', border: 'none' }}
                                        options={Country.getAllCountries()}
                                        getOptionLabel={(options) => {
                                            return options["name"];
                                        }}
                                        getOptionValue={(options) => {
                                            return options["name"];
                                        }}
                                        value={selectedCountry}
                                        // onChange={(item) => {
                                        //     setSelectedCountry(item);
                                        // }}
                                        onChange={(item) => {
                                            formik.setFieldValue('selectedCountry', item);
                                            setSelectedCountry(item);
                                        }}

                                    />
                                    {formik.touched.selectedCountry && formik.errors.selectedCountry ? <span className='span'>{formik.errors.selectedCountry}</span> : null}

                                </Col>
                                <Col xs={12} lg={4} className='col'>
                                    {/* <label htmlFor="state">State:</label> */}
                                    <Select placeholder='State*' style={{ zIndex: 100 }} id='state' name='selectedState'
                                        options={State?.getStatesOfCountry(selectedCountry?.isoCode)}
                                        getOptionLabel={(options) => {
                                            return options["name"];
                                        }}
                                        getOptionValue={(options) => {
                                            return options["name"];
                                        }}
                                        value={selectedState}
                                        onChange={(item) => {
                                            formik.setFieldValue('selectedState', item);
                                            setSelectedState(item);
                                        }}
                                    />
                                    {formik.touched.selectedState && formik.errors.selectedState ? <span className='span'>{formik.errors.selectedState}</span> : null}
                                </Col>
                                <Col xs={12} lg={4} className='col '>
                                    {/* <label htmlFor="city">City:</label> */}
                                    <Select id='city' name='city' placeholder='City*' className="dynamicSelect" style={{ zIndex: 100 }}
                                        options={City.getCitiesOfState(
                                            selectedState?.countryCode,
                                            selectedState?.isoCode
                                        )}
                                        getOptionLabel={(options) => {
                                            return options["name"];
                                        }}
                                        getOptionValue={(options) => {
                                            return options["name"];
                                        }}
                                        value={selectedCity}
                                        onChange={(item) => {
                                            formik.setFieldValue('selectedCity', item);
                                            setSelectedCity(item);
                                        }}
                                    />
                                    {formik.touched.selectedCity && formik.errors.selectedCity ? <span className='span'>{formik.errors.selectedCity}</span> : null}
                                </Col>

                            </>


                            <Col xs={12} lg={12} className='my-4 col'>
                                <Button variant="primary" className='me-1 mb-2 mx-1 ' style={{ width: "130px" }} onClick={handlePreviousButton}>PREVIOUS</Button>
                                <Button variant="success" onClick={formik.handleSubmit} className='me-1 mb-2 mx-1 ' style={{ width: "130px" }}>Save and Next</Button>
                                <Button variant="warning" className='text-white mb-2 mx-1 ' style={{ width: "130px" }} onClick={() => handleReset()}>CLEAR</Button>
                            </Col>
                        </Row>

                    </Form>
                </Container>
            </Accordion.Body>
        </Accordion.Item>

    )
}

export default StaffIDCardDetails