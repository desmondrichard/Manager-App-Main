import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import './KittingDetailsForm.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import './Iddetails.css';
import { useFormik } from 'formik';
import { useRef } from 'react';
import PlayerDynamicTextFields from './PlayerDynamicTextFields';
// validation:
const validate = values => {
    const errors = {};

    if (!values.aadharno) {
        errors.aadharno = "*Required";
    }
    else if (!/^[0-9]{4}[ -]?[0-9]{4}[ -]?[0-9]{4}$/.test(values.aadharno)) {
        errors.aadharno = "Enter Valid Aadhar Number"
    }

    if (!values.panno) {
        errors.panno = "*Required";
    }
    else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(values.panno)) {
        errors.panno = "Enter Valid Pan Card Number"
    }

    if (!values.passno) {
        errors.passno = "*Required";
    }
    else if (!/^[a-zA-Z0-9]{10}$/.test(values.passno)) {
        errors.passno = "Enter Valid Passport Number"
    }

    if (!values.passexp) {
        errors.passexp = "*Required";
    }

    if (!values.birth) {
        errors.birth = "*Required";
    }
    else if (!/^[0-9]{6,14}$/.test(values.birth)) {
        errors.birth = "Enter Valid Birth Certificate Number"
    }

    // if (!values.address) {
    //     errors.address = "*Required";
    // }

    return errors;
}
function Iddetails({ activationKey, onActivationKeyChild, onPreviousActivationKey }) {
    // next btn:
    const [childNextKey, setChildNextKey] = useState("4");

    const [clearValue, setClearValue] = useState(false);

    // reset form start: 
    const aadharno1 = useRef("");
    const panno1 = useRef("");
    const passno1 = useRef("");
    const passexp1 = useRef("");
    const birth1 = useRef("");
    const visaYes = useRef(false);
    const visaNo = useRef(false);
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
        setClearValue(true);
        // addressRef0.current.value = "";
        formik.resetForm();
    }


    const formik = useFormik({
        initialValues: {
            aadharno: '',
            panno: '',
            passno: '',
            passexp: '',
            birth: '',
            address: '',
        },
        validate,
        onSubmit: values => {
            alert(`Hello! ,${values.aadharno}you have successfully signed up`);
            onActivationKeyChild(childNextKey);
            console.log("childNextKey4", childNextKey)
        }
    });

    const handlePreviousButton = () => {
        onPreviousActivationKey("2")
    }
    // console.log("Focus",address);
    return (

        <Accordion.Item eventKey="3">
            <Accordion.Header><i className="bi bi-info-circle-fill me-1"></i><span style={{ fontWeight: '700' }}>ID CARD DETAILS</span></Accordion.Header>
            <Accordion.Body>
                <Container >
                    <p>{activationKey}</p>
                    <Form style={{ paddingRight: '60px' }} onSubmit={formik.handleSubmit}>
                        <Row>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="aadharno"
                                        type="text"
                                        placeholder="aadharno"
                                        name="aadharno"
                                        ref={aadharno1}
                                        value={formik.values.aadharno} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.aadharno && formik.errors.aadharno ? <span className='span'>{formik.errors.aadharno}</span> : null
                                    }
                                    <label htmlFor="aadharno" className='text-muted'>AADHAR NO*</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="panno"
                                        type="text"
                                        placeholder="panno"
                                        name="panno"
                                        ref={panno1}
                                        value={formik.values.panno} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.panno && formik.errors.panno ? <span className='span'>{formik.errors.panno}</span> : null
                                    }
                                    <label htmlFor="panno" className='text-muted'>PANCARD NO*</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="passno"
                                        type="text"
                                        placeholder="passno"
                                        name="passno"
                                        ref={passno1}
                                        value={formik.values.passno} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.passno && formik.errors.passno ? <span className='span'>{formik.errors.passno}</span> : null
                                    }
                                    <label htmlFor="passno" className='text-muted'>PASSPORT NO*</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="passexp"
                                        type="date"
                                        placeholder="passexp"
                                        name="passexp"
                                        ref={passexp1}
                                        value={formik.values.passexp} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                        min={new Date().toISOString().split('T')[0]}
                                    />
                                    {
                                        formik.touched.passexp && formik.errors.passexp ? <span className='span'>{formik.errors.passexp}</span> : null
                                    }
                                    <label htmlFor="passexp" className='text-muted'>PASSPORT EXP DATE*</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="birth"
                                        type="text"
                                        placeholder="birth"
                                        name="birth"
                                        ref={birth1}
                                        value={formik.values.birth} onBlur={formik.handleBlur} onChange={formik.handleChange}

                                    />
                                    {
                                        formik.touched.birth && formik.errors.birth ? <span className='span'>{formik.errors.birth}</span> : null
                                    }
                                    <label htmlFor="birth" className='text-muted' style={{ fontSize: '13px' }}>BIRTH CERTIFICATE NO*</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <label className='text-muted' htmlFor="battingpads">DO YOU HAVE VISA</label>
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} >
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
                            <Col xs={12}>
                                <PlayerDynamicTextFields isClearAddress0={clearValue} isClearAddress1={clearValue} isClearAddress2={clearValue} isClearCountry={clearValue} isClearState={clearValue} isClearCity={clearValue} />
                            </Col>

                            <Col xs={12} lg={12} className='my-4 col'>
                                <Button variant="primary" className='me-1 mb-2 mx-1 ' style={{ width: "130px" }} onClick={handlePreviousButton}>PREVIOUS</Button>
                                <Button variant="success" type='submit' disabled={Object.keys(formik.errors).length > 0 || formik.values.name === ''} className='me-1 mb-2 mx-1 ' style={{ width: "130px" }}>Save and Next</Button>
                                <Button variant="warning" className='text-white mb-2 mx-1 ' style={{ width: "130px" }} onClick={() => handleReset()}>CLEAR</Button>

                            </Col>
                        </Row>

                    </Form>
                </Container>
            </Accordion.Body>
        </Accordion.Item>

    )
}

export default Iddetails