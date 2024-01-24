import React, { useState } from 'react';
import './EmergencyContact.css';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Phone from '../../Phone';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useFormik } from 'formik';
import { useRef } from 'react';

// validation:
const validate = values => {
    const errors = {};

    if (!values.emgcontactperson) {
        errors.emgcontactperson = "*Required";
    }
    else if (!/^[a-zA-Z ]{3,25}$/.test(values.emgcontactperson)) {
        errors.emgcontactperson = "Name should be between 3 to 25 characters long or only letters allowed";
    }

    if (!values.emgcontactrel) {
        errors.emgcontactrel = "*Required";
    }
    else if (!/^[a-zA-Z]{3,15}$/.test(values.emgcontactrel)) {
        errors.emgcontactrel = "Name should be between 3 to 15 characters long or only letters allowed";
    }

    return errors;
}
function EmergencyContact({ activationKey, onActivationKeyChild, onPreviousActivationKey }) {
    const [childNextKey, setChildNextKey] = useState("9");

    const [mobileValue, setMobileValue] = useState(false);

    const formik = useFormik({
        initialValues: {
            emgcontactperson: '',
            emgcontactrel: '',
        },
        validate,
        onSubmit: values => {
            alert(`Hello! ,${values.fNamelNamemName}you have successfully signed up`);
            onActivationKeyChild(childNextKey)
        }
    });

    // reset form start: 
    const emgcontactperson1 = useRef("");
    const emgcontactrel1 = useRef("");

    // for npm custom component dont use useRef instead use useState i.e for phone component
    function handleReset() {
        emgcontactperson1.current.value = "";
        emgcontactrel1.current.value = "";
        setMobileValue(true);
        formik.resetForm();
    }

    const handlePreviousButton = () => {
        onPreviousActivationKey("7")
    }
    return (

        <Accordion.Item eventKey="8">
            <Accordion.Header><i className="bi bi-info-circle-fill me-1"></i><span style={{ fontWeight: '700' }}>EMERGENCY CONTACT INFORMATION</span></Accordion.Header>
            <Accordion.Body>
                <Container >
                    <Form style={{ paddingRight: '60px' }} onSubmit={formik.handleSubmit}>
                        <Row>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="emgcontactperson"
                                        type="text"
                                        placeholder="emgcontactperson"
                                        name="emgcontactperson"
                                        ref={emgcontactperson1}
                                        value={formik.values.emgcontactperson} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.emgcontactperson && formik.errors.emgcontactperson ? <span className='span'>{formik.errors.emgcontactperson}</span> : null
                                    }
                                    <label htmlFor="emgcontactperson" className='text-muted fontSize'>Emg.Contact Name*</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <FloatingLabel className='mb-2'
                                    controlId="emgcontactrel"
                                    label="Emg.Contact Relation*"
                                    name="emgcontactrel"
                                    value={formik.values.emgcontactrel} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                >

                                    <Form.Select aria-label="Emg.Contact Relation*" ref={emgcontactrel1}>
                                        <option>Select Type</option>
                                        <option value="batsman">PARENTS</option>
                                        <option value="bowler">GUARDIAN</option>
                                        <option value="allrounder">SPONSORS</option>
                                        <option value="wicketkeeper">FRIENDS</option>
                                        <option value="wicketkeeper">FAMILY MEMBER</option>
                                        <option value="wicketkeeper">NEIGHBOUR</option>
                                    </Form.Select>
                                </FloatingLabel>
                                {
                                    formik.touched.emgcontactrel && formik.errors.emgcontactrel ? <span className='span'>{formik.errors.emgcontactrel}</span> : null
                                }
                            </Col>
                            <Col xs={12} lg={4} className='col '>
                                <Phone isClear={mobileValue} />
                            </Col>
                        </Row>

                        <Col lg={12} className='my-4 col'>
                            <Button variant="primary" className='me-1 mb-2 mx-1 ' style={{ width: "130px" }} onClick={handlePreviousButton}>PREVIOUS</Button>
                            <Button variant="success" type="submit" disabled={Object.keys(formik.errors).length > 0 || formik.values.name === ''} className='me-1 mb-2 mx-1 ' style={{ width: "130px" }}>Save and Next</Button>
                            <Button variant="warning" className='text-white mb-2 mx-1 ' style={{ width: "130px" }} onClick={() => handleReset()}>CLEAR</Button>
                        </Col>
                    </Form>
                </Container>
            </Accordion.Body>
        </Accordion.Item>

    )
}

export default EmergencyContact