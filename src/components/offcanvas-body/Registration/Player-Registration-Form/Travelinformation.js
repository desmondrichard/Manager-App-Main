import React, { useState } from 'react';
import './TravelInformation.css';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useFormik } from 'formik';
import { useRef } from 'react';
// validation:
const validate = values => {
    const errors = {};

    if (!/^[a-zA-Z]{0,15}$/.test(values.travelFrom)) {
        errors.travelFrom = "should be between 3 to 15 characters long or only letters allowed";
    }

    if (!/^[a-zA-Z]{0,15}$/.test(values.returnDestination)) {
        errors.returnDestination = "should be between 3 to 15 characters long or only letters allowed";
    }
    return errors;
}
function Travelinformation({ activationKey, onActivationKeyChild, onPreviousActivationKey }) {
    const [childNextKey, setChildNextKey] = useState("7");

    const formik = useFormik({
        initialValues: {
            travelFrom: '',
            destn: '',

        },
        validate,
        onSubmit: values => {
            alert(`clicked next`);
            onActivationKeyChild(childNextKey)
        }
    });

    // reset form start: 
    const fromReset = useRef("");
    const toReset = useRef("");

    // for npm custom component dont use useRef instead use useState i.e for phone component
    function handleReset() {
        fromReset.current.value = "";
        toReset.current.value = "";
        formik.resetForm();
    }

    const handlePreviousButton = () => {
        onPreviousActivationKey("5")
    }
    return (

        <Accordion.Item eventKey="6">
            <Accordion.Header><i className="bi bi-info-circle-fill me-1"></i><span style={{ fontWeight: '700' }}>TRAVEL INFORMATION</span></Accordion.Header>
            <Accordion.Body>
                <Container >
                    <Form style={{ paddingRight: '60px' }} onSubmit={formik.handleSubmit}>
                        <Row>
                            <Col xs={12} lg={6} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="travelFrom"
                                        type="text"
                                        placeholder="travelfrom"
                                        name="travelFrom"
                                        ref={fromReset}
                                        value={formik.values.travelFrom} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.travelFrom && formik.errors.travelFrom ? <span className='span'>{formik.errors.travelFrom}</span> : null
                                    }
                                    <label htmlFor="travelFrom" className='text-muted'>Travel From</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={6} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="returnDestination"
                                        type="text"
                                        placeholder="destn"
                                        name="returnDestination"
                                        ref={toReset}

                                        value={formik.values.returnDestination} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.returnDestination && formik.errors.returnDestination ? <span className='span'>{formik.errors.returnDestination}</span> : null
                                    }
                                    <label htmlFor="returnDestination" className='text-muted'>Destination</label>
                                </Form.Floating>
                            </Col>

                        </Row>

                        <Col lg={12} className='my-4 col'>
                            <Button variant="primary" className='me-1 mb-2 mx-1 ' style={{ width: "130px" }} onClick={handlePreviousButton}>PREVIOUS</Button>
                            <Button type="submit" variant="success" className='me-1 mb-2 mx-1 ' style={{ width: "130px" }}>Save and Next</Button>
                            <Button variant="warning" className='text-white mb-2 mx-1 ' style={{ width: "130px" }} onClick={() => handleReset()}>CLEAR</Button>
                        </Col>
                    </Form>
                </Container>
            </Accordion.Body>
        </Accordion.Item>

    )
}

export default Travelinformation