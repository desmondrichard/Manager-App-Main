import React, { useState } from 'react';
import './RepresentationInfo.css';
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

    if (!values.city) {
        errors.city = "*Required";
    }
    else if (!/^[a-zA-Z]{3,15}$/.test(values.city)) {
        errors.city = "City name should be between 3 to 15 characters long or only letters allowed";
    }

    if (!values.club) {
        errors.club = "*Required";
    }
    else if (!/^[a-zA-Z]{3,15}$/.test(values.club)) {
        errors.club = "Club name should be between 3 to 15 characters maximum or only letters allowed";
    }

    if (!values.division) {
        errors.division = "*Required";
    }
    else if (!/^[a-zA-Z1-9]{0,15}$/.test(values.division)) {
        errors.division = "Division name should be between 15 characters maximum";
    }
    return errors;
}
function RepresentationInfo({ activationKey, onActivationKeyChild, onPreviousActivationKey }) {
    const [childNextKey, setChildNextKey] = useState("8");

    const formik = useFormik({
        initialValues: {
            city: '',
            club: '',
            division: '',

        },
        validate,
        onSubmit: values => {
            alert(`Hello! ,${values.fNamelNamemName}you have successfully signed up`);
            onActivationKeyChild(childNextKey)
        }
    });

    // reset form start: 
    const city1 = useRef("");
    const club1 = useRef("");
    const division1 = useRef("");


    // for npm custom component dont use useRef instead use useState i.e for phone component
    function handleReset() {
        city1.current.value = "";
        club1.current.value = "";
        division1.current.value = "";
        formik.resetForm();
    }

    const handlePreviousButton = () => {
        onPreviousActivationKey("6")
    }
    return (

        <Accordion.Item eventKey="7">
            <Accordion.Header><i className="bi bi-info-circle-fill me-1"></i><span style={{ fontWeight: '700' }}>REPRESENTATION INFORMATION</span></Accordion.Header>
            <Accordion.Body>
                <Container >
                    <Form style={{ paddingRight: '60px' }} onSubmit={formik.handleSubmit}>
                        <Row>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="city"
                                        type="text"
                                        placeholder="city"
                                        name="city"
                                        ref={city1}
                                        value={formik.values.city} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.city && formik.errors.city ? <span className='span'>{formik.errors.city}</span> : null
                                    }
                                    <label htmlFor="city" className='text-muted'>City/District*</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="club"
                                        type="text"
                                        placeholder="club"
                                        name="club"
                                        ref={club1}
                                        value={formik.values.club} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.club && formik.errors.club ? <span className='span'>{formik.errors.club}</span> : null
                                    }
                                    <label htmlFor="club" className='text-muted'>Club*</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="division"
                                        type="text"
                                        placeholder="division"
                                        name="division"
                                        ref={division1}
                                        value={formik.values.division} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.division && formik.errors.division ? <span className='span'>{formik.errors.division}</span> : null
                                    }
                                    <label htmlFor="division" className='text-muted'>Division*</label>
                                </Form.Floating>
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

export default RepresentationInfo