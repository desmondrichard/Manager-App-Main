import React, { useEffect, useState } from 'react';
import './RepresentationInfo.css';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useFormik } from 'formik';
import { useRef } from 'react';
import ProgressBarWithLabel from '../ProgressBarWithLabel';
// validation:
const validate = values => {
    const errors = {};

    if (!values.cityDistrict) {
        errors.cityDistrict = "*Required";
    }
    else if (!/^[a-zA-Z]{3,15}$/.test(values.cityDistrict)) {
        errors.cityDistrict = "City name should be between 3 to 15 characters long or only letters allowed";
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
            cityDistrict: '',
            club: '',
            division: '',

        },
        validate,
        onSubmit: values => {
            alert(`clicked next`);
            onActivationKeyChild(childNextKey)
            console.log('values',values)
        }
    });

    // reset form start: 
    const cityReset = useRef("");
    const clubReset = useRef("");
    const divisionReset = useRef("");


    // for npm custom component dont use useRef instead use useState i.e for phone component
    function handleReset() {
        cityReset.current.value = "";
        clubReset.current.value = "";
        divisionReset.current.value = "";
        formik.resetForm();
        setProgress(0);

    }

    const handlePreviousButton = () => {
        onPreviousActivationKey("6")
    }


    // progress Bar for static fields:
    const [progress, setProgress] = useState(0);
    function handleProgress() {
        console.log("formik values1", formik.values)
        const result = countKeysWithNonEmptyValues(formik.values);
        console.log("result for formik values:", result)
        const totalFilledFields = result;

        //calc formula
        let newProgress = ((totalFilledFields / 3) * 100).toFixed();
        console.log("Progress", newProgress)
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

    useEffect(() => {
        handleProgress();
    }, [formik.values])
    return (

        <Accordion.Item eventKey="7">
            <Accordion.Header><i className="bi bi-info-circle-fill me-1"></i><span style={{ fontWeight: '700' }}>REPRESENTATION INFORMATION</span><ProgressBarWithLabel progressValue={progress} /></Accordion.Header>
            <Accordion.Body>
                <Container >
                    <Form style={{ paddingRight: '60px' }} onSubmit={formik.handleSubmit}>
                        <Row>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="cityDistrict"
                                        type="text"
                                        placeholder="city"
                                        name="cityDistrict"
                                        ref={cityReset}
                                        value={formik.values.cityDistrict} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.cityDistrict && formik.errors.cityDistrict ? <span className='span'>{formik.errors.cityDistrict}</span> : null
                                    }
                                    <label htmlFor="cityDistrict" className='text-muted'>City/District*</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="club"
                                        type="text"
                                        placeholder="club"
                                        name="club"
                                        ref={clubReset}
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
                                        ref={divisionReset}
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