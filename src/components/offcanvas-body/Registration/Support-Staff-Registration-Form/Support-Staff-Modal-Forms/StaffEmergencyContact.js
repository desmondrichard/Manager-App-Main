import React, { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Phone from '../../../Phone';
import { useFormik } from 'formik';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useRef } from 'react';
import ProgressBarWithLabel from '../../ProgressBarWithLabel';
import axios from 'axios';

// validation:
const validate = values => {
    const errors = {};

    if (!values.emergencyContactPerson) {
        errors.emergencyContactPerson = "*Required";
    }
    else if (!/^[a-zA-Z]{3,15}$/.test(values.emergencyContactPerson)) {
        errors.emergencyContactPerson = "Name should be between 3 to 15 characters long or only letters allowed";
    }

    if (!values.emergContactPersonRelationship) {
        errors.emergContactPersonRelationship = "*Required";
    }
    else if (!/^[a-zA-Z]{3,15}$/.test(values.emergContactPersonRelationship)) {
        errors.emergContactPersonRelationship = "Name should be between 3 to 15 characters long or only letters allowed";
    }

    return errors;
}


function StaffEmergencyContact({ activationKey, onActivationKeyChild, onPreviousActivationKey }) {
    const [mobileValueClear, setMobileValueClear] = useState(false);
    const [childNextKey, setChildNextKey] = useState("8");
    const [emergencyContactPersonNo, setEmergencyContactNo] = useState("");
    // reset form start: 
    const emgcontactperson1 = useRef("");
    const emgcontactrel1 = useRef("");

    // for npm custom component dont use useRef instead use useState i.e for phone component
    function handleReset() {
        emgcontactperson1.current.value = "";
        emgcontactrel1.current.value = "";
        setMobileValueClear(true);
        setmobileProgress("");
        formik.resetForm();
        setProgress(0);
    }

    const formik = useFormik({
        initialValues: {
            emergencyContactPerson: '',
            emergContactPersonRelationship: ''
        },
        validate,
        onSubmit: (values, { setSubmitting }) => {
            alert("you have successfully signed up");
            const newValues = { ...values, emergencyContactPersonNo }//adding emergencyContactPersonNo
            axios.post('https://localhost:7097/StaffEmergencycontactmodel', newValues)
                .then(response => {
                    console.log(response.data);
                    onActivationKeyChild(childNextKey)
                    console.log("newvalues", newValues)
                    setSubmitting(false);
                })
                .catch(error => {
                    console.error(error.message);
                    console.log("newvalues", newValues)
                    setSubmitting(false);
                });
        }
    });

    // onActivationKeyChild(childNextKey)
    // console.log("newValues", newValues)
    // setSubmitting(false);

    const handlePreviousButton = () => {
        onPreviousActivationKey("6")
    }

    //mobile Progress Bar:
    const [mobileProgress, setmobileProgress] = useState(0);

    function handleMobileProgress(val) {
        console.log("val", val);
        setmobileProgress(val);
        setMobileValueClear(false);
    }

    //Progress Bar:
    const [progress, setProgress] = useState(0);

    function handleProgress() {
        //check form values or formik values:
        console.log("formik vals Emergency:", formik.values);
        //set progress as 1 if current form field is filled else 0:  
        //get no of form vals filled by adding it inside a object:
        const result = countKeysWithNonEmptyValues(formik.values); //sending object as parameter which has all form fields
        console.log(result);  //returned count is stored in result variable
        let totalFilledFields = result + mobileProgress;
        //calc formula
        let newProgress = ((totalFilledFields / 3) * 100).toFixed();
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

    const Samp = (s) => {
        console.log("sample1", s)
        setEmergencyContactNo(s);
        console.log("emergencyContactPersonNo", emergencyContactPersonNo)
    }

    //useEffect will be trigerred whenever formik.values has value
    useEffect(() => {
        handleProgress();
    }, [formik.values, handleMobileProgress]); // Ensure that the effect is triggered when form values change



    // 

    return (

        <Accordion.Item eventKey="7">
            <Accordion.Header><i className="bi bi-info-circle-fill me-1"></i><span style={{ fontWeight: '700' }}>EMERGENCY CONTACT INFORMATION</span><ProgressBarWithLabel progressValue={progress} /> </Accordion.Header>
            <Accordion.Body>
                <Container >
                    <Form style={{ paddingRight: '60px' }} onSubmit={formik.handleSubmit}>
                        <Row>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="emergencyContactPerson"
                                        type="text"
                                        placeholder="emgcontactperson"
                                        name="emergencyContactPerson"
                                        ref={emgcontactperson1}
                                        value={formik.values.emergencyContactPerson} onBlur={formik.handleBlur} onChange={formik.handleChange}

                                    />
                                    {
                                        formik.touched.emergencyContactPerson && formik.errors.emergencyContactPerson ? <span className='span'>{formik.errors.emergencyContactPerson}</span> : null
                                    }
                                    <label htmlFor="emergencyContactPerson" className='text-muted fontSize'>Emg.Contact Name*</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <FloatingLabel className='mb-2'
                                    controlId="emergContactPersonRelationship"
                                    label="Emg.Contact Relation*"
                                    name="emergContactPersonRelationship"
                                    value={formik.values.emergContactPersonRelationship} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                >

                                    <Form.Select aria-label="emergContactPersonRelationship" ref={emgcontactrel1}>
                                        <option value="none">Select Type</option>
                                        <option value="batsman">PARENTS</option>
                                        <option value="bowler">GUARDIAN</option>
                                        <option value="allrounder">SPONSORS</option>
                                        <option value="wicketkeeper">FRIENDS</option>
                                        <option value="wicketkeeper">FAMILY MEMBER</option>
                                        <option value="wicketkeeper">NEIGHBOUR</option>
                                    </Form.Select>
                                </FloatingLabel>

                                {
                                    formik.touched.emergContactPersonRelationship && formik.errors.emergContactPersonRelationship ? <span className='span'>{formik.errors.emergContactPersonRelationship}</span> : null
                                }

                            </Col>
                            <Col xs={12} lg={4} className='col '>
                                <Phone isClear={mobileValueClear} onActivateProgressBar={handleMobileProgress} samp={Samp} dynamicName="emergencyContactPersonNo" dynamicId="emergencyContactPersonId" />
                            </Col>
                        </Row>

                        <Col lg={12} className='my-4 col'>
                            <Button variant="primary" className='me-1 mb-2 mx-1 ' style={{ width: "130px" }} onClick={handlePreviousButton}>PREVIOUS</Button>
                            <Button type="submit" variant="success" className='me-1 mb-2 mx-1 ' style={{ width: "130px" }} >Save and Next</Button>
                            <Button variant="warning" className='text-white mb-2 mx-1 ' style={{ width: "130px" }} onClick={() => handleReset()}>CLEAR</Button>
                        </Col>
                    </Form>
                </Container>
            </Accordion.Body>
        </Accordion.Item>

    )
}

export default StaffEmergencyContact