import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useFormik } from 'formik';
import { useRef } from 'react';
import ProgressBarWithLabel from '../../ProgressBarWithLabel';

// validation:
const validate = values => {
    const errors = {};

    if (!/^[a-zA-Z]{0,15}$/.test(values.staffTravelfrom)) {
        errors.staffTravelfrom = "should be between 3 to 15 characters long or only letters allowed";
    }

    if (!/^[a-zA-Z]{0,15}$/.test(values.staffDestn)) {
        errors.staffDestn = "should be between 3 to 15 characters long or only letters allowed";
    }
    return errors;
}
function StaffTravelInformation({ activationKey, onActivationKeyChild, onPreviousActivationKey }) {
    const [childNextKey, setChildNextKey] = useState("6");
    const formik = useFormik({
        initialValues: {
            staffTravelfrom: '',
            staffDestn: '',
        },
        validate,
        onSubmit: values => {
            alert("you have successfully signed up");
            onActivationKeyChild(childNextKey)
        }
    });

    // reset form start: 
    const from = useRef("");
    const to = useRef("");


    // for npm custom component dont use useRef instead use useState i.e for phone component
    function handleReset() {
        from.current.value = "";
        to.current.value = "";
        formik.resetForm();
        setProgress(0);
    }

    const handlePreviousButton = () => {
        onPreviousActivationKey("4")
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
        let newProgress = ((result / 2) * 100).toFixed();
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


    return (

        <Accordion.Item eventKey="5">
            <Accordion.Header><i className="bi bi-info-circle-fill me-1"></i><span style={{ fontWeight: '700' }}>TRAVEL INFORMATION</span><ProgressBarWithLabel progressValue={progress} /></Accordion.Header>
            <Accordion.Body>
                <Container >
                    <Form style={{ paddingRight: '60px' }} onSubmit={formik.handleSubmit}>
                        <Row>
                            <Col xs={12} lg={6} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="staffTravelfrom"
                                        type="text"
                                        placeholder="travelfrom"
                                        name="staffTravelfrom"
                                        ref={from}
                                        value={formik.values.staffTravelfrom} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.staffTravelfrom && formik.errors.staffTravelfrom ? <span className='span'>{formik.errors.staffTravelfrom}</span> : null
                                    }

                                    <label htmlFor="staffTravelfrom" className='text-muted'>Travel From</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={6} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="staffDestn"
                                        type="text"
                                        placeholder="destn"
                                        name="staffDestn"
                                        ref={to}
                                        value={formik.values.staffDestn} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.staffDestn && formik.errors.staffDestn ? <span className='span'>{formik.errors.staffDestn}</span> : null
                                    }
                                    <label htmlFor="staffDestn" className='text-muted'>Destination</label>
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

export default StaffTravelInformation