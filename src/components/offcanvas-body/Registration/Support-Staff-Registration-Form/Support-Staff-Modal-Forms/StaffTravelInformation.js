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
import axios from 'axios';

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
function StaffTravelInformation({ activationKey, onActivationKeyChild, onPreviousActivationKey, showPutData, showSaveBtn, showClearBtn, handlePrevClick, previousClk, showSkipBtn }) {
    const [childNextKey, setChildNextKey] = useState("6");

    const formik = useFormik({
        initialValues: {
            travelFrom: showPutData?.travelFrom || '',
            returnDestination: showPutData?.returnDestination || '',
        },
        validate,
        onSubmit: values => {
            axios.post('http://192.168.1.135/Manager-App-API/StaffTravelInformationModel', values)
                .then(response => {
                    console.log(response.data);
                    onActivationKeyChild(childNextKey)
                    console.log("values", values)

                })
                .catch(error => {
                    console.error(error.message);
                    console.log("values", values)
                });
        }
    });

    // alert("you have successfully signed up");
    // onActivationKeyChild(childNextKey)
    // console.log("values",values)

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
        handlePrevClick(true)
    }

    //Progress Bar:
    const [progress, setProgress] = useState(0);

    function handleProgress() {
        //check form values or formik values:
        console.log("formik vals Travel:", formik.values);
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

    console.log('showPutDataTravel', showPutData)

    //update:
    function handleUpdate() {

        axios.put(`http://192.168.1.135/Manager-App-API/StaffTravelInformationModel/${showPutData.alldataStaffId}`, formik.values, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (response.status === 200) {
                    console.log("Updation Data: ", response.data);
                    onActivationKeyChild(childNextKey);
                } else {
                    console.log("Unexpected response status: ", response.status);
                }
            })
            .catch(error => {
                if (error.response && error.response.data) {
                    console.log("Error Updating User: ", error.response.data);
                } else {
                    console.log("Error Updating User: ", error.message);
                }
            });
    }

    function handleSkip() {
        onActivationKeyChild(childNextKey)
        handlePrevClick(true)
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
                                        id="travelFrom"
                                        type="text"
                                        placeholder="travelfrom"
                                        name="travelFrom"
                                        ref={from}
                                        value={formik.values.travelFrom} onBlur={formik.handleBlur} onChange={(e) => {
                                            formik.setFieldValue('travelFrom', e.target.value.toUpperCase())
                                        }}
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
                                        ref={to}
                                        value={formik.values.returnDestination} onBlur={formik.handleBlur} onChange={(e) => {
                                            formik.setFieldValue('returnDestination', e.target.value.toUpperCase())
                                        }}
                                    />
                                    {
                                        formik.touched.returnDestination && formik.errors.returnDestination ? <span className='span'>{formik.errors.returnDestination}</span> : null
                                    }
                                    <label htmlFor="returnDestination" className='text-muted'>Destination</label>
                                </Form.Floating>
                            </Col>
                        </Row>

                        <Col lg={12} className='my-4 col'>
                        {previousClk && <Button variant="primary" className='me-1 mb-3 mx-1 previousp ' style={{ width: "130px",marginTop:'6px' }} onClick={handlePreviousButton}>Previous</Button>}
                            {showSaveBtn && !previousClk && <Button type="submit" variant="success" className='me-1 mb-2 mx-1 ' style={{ width: "130px" }}>Save and Next</Button>}
                            {showClearBtn && <Button variant="warning" className='text-white mb-2 ' style={{ width: "130px" }} onClick={() => handleReset()}>Clear</Button>}
                            {!showSaveBtn && <Button variant="info" className='mx-1 updates' style={{ whiteSpace: 'nowrap', width: '130px', marginTop: '-8px' }} onClick={handleUpdate}>Update</Button>}
                            {(previousClk || showSkipBtn) && <Button variant="dark" className='skip ms-1' style={{ whiteSpace: 'nowrap', width: '130px', marginTop: '-8px' }} onClick={handleSkip}>Skip</Button>}
                        </Col>
                    </Form>
                </Container>
            </Accordion.Body>
        </Accordion.Item>

    )
}

export default StaffTravelInformation