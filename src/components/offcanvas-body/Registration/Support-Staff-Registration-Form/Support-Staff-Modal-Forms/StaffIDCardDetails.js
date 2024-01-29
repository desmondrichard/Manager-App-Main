import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useFormik } from 'formik';
import { useRef } from 'react';
// import StaffAddressDynamicFocus from './StaffAddressDynamicFocus';
import DynamicTextFields from '../DynamicTextFields';
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
    else if (!/^4[0-9]{12}(?:[0-9]{3})?$/.test(values.staffVisaNo)) {
        errors.staffVisaNo = "Enter Valid Visa Number"
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
        //reset address:
        setClearValue(true);
        formik.resetForm();
        setProgress(0);
    }


    const formik = useFormik({
        initialValues: {
            staffAadharNo: '',
            staffPanNo: '',
            staffPassNo: '',
            staffPassExp: '',
            staffBirth: '',
            staffVisaNo: '',
            staffAddress: '',
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
        console.log("formik vals:", formik.values.staffFName);
        //set progress as 1 if current form field is filled else 0:  
        //get no of form vals filled by adding it inside a object:
        const result = countKeysWithNonEmptyValues(formik.values); //sending object as parameter which has all form fields
        console.log(result);  //returned count is stored in result variable
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

    //useEffect will be trigerred whenever formik.values has value
    useEffect(() => {
        handleProgress();
    }, [formik.values]); // Ensure that the effect is triggered when form values change

    // function onActivateProgressBar() {
    //     handleProgress();
    // }

    return (

        <Accordion.Item eventKey="2">
            <Accordion.Header><i className="bi bi-info-circle-fill me-1"></i><span style={{ fontWeight: '700' }}>ID CARD DETAILS</span><ProgressBarWithLabel progressValue={progress} /></Accordion.Header>
            <Accordion.Body>
                <Container >
                    <p>{activationKey}</p>
                    <Form style={{ paddingRight: '60px' }} >
                        <Row>
                            <Col xs={12} lg={3} className='col'>
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
                            <Col xs={12} lg={3} className='col'>
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
                            <Col xs={12} lg={3} className='col'>
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
                            <Col xs={12} lg={3} className='col'>
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
                            <Col xs={12} lg={3} className='col'>
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
                            <Col xs={12} lg={3} className='col' style={{ textAlign: 'center' }}>
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
                                        />
                                        <Form.Check
                                            inline
                                            label="No"
                                            name="visa"
                                            type={type}
                                            id={`inline-${type}-notprovided`}
                                            // defaultChecked={true}
                                            ref={visaNo}
                                        />
                                    </div>
                                ))}
                            </Col>
                            <Col xs={12} lg={3} className='col'>
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
                            <Col xs={12} lg={3} className='col'>
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
                            <Col xs={12}>
                                <DynamicTextFields isClearAddress0={clearValue} isClearAddress1={clearValue} isClearAddress2={clearValue} isClearAddress3={clearValue} />
                            </Col>


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