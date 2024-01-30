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
// validation:
const validate = values => {
    const errors = {};

    if (!values.staffEmgcontactperson) {
        errors.staffEmgcontactperson = "*Required";
    }
    else if (!/^[a-zA-Z]{3,15}$/.test(values.staffEmgcontactperson)) {
        errors.staffEmgcontactperson = "Name should be between 3 to 15 characters long or only letters allowed";
    }

    if (!values.StaffEmgContactRel) {
        errors.StaffEmgContactRel = "*Required";
    }
    else if (!/^[a-zA-Z]{3,15}$/.test(values.StaffEmgContactRel)) {
        errors.StaffEmgContactRel = "Name should be between 3 to 15 characters long or only letters allowed";
    }

    return errors;
}

function Sample(){
    console.log("samp")
}
function StaffEmergencyContact({ activationKey, onActivationKeyChild, onPreviousActivationKey }) {
    const [mobileValue, setMobileValue] = useState(false);
    const [childNextKey, setChildNextKey] = useState("8");

    // reset form start: 
    const emgcontactperson1 = useRef("");
    const emgcontactrel1 = useRef("");

    // for npm custom component dont use useRef instead use useState i.e for phone component
    function handleReset() {
        emgcontactperson1.current.value = "";
        emgcontactrel1.current.value = "";
        setMobileValue(true);
        formik.resetForm();
        setProgress(0);
    }

    const formik = useFormik({
        initialValues: {
            staffEmgcontactperson: '',
            StaffEmgContactRel: ''
        },
        validate,
        onSubmit: values => {
            alert("you have successfully signed up");
            onActivationKeyChild(childNextKey)
        }
    });
    const handlePreviousButton = () => {
        onPreviousActivationKey("6")
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
        //calc formula
        let newProgress = ((result / 3) * 100).toFixed();
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

    function onActivateProgressBar() {
        handleProgress();
    }

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
                                        id="emgcontactperson"
                                        type="text"
                                        placeholder="emgcontactperson"
                                        name="staffEmgcontactperson"
                                        ref={emgcontactperson1}
                                        value={formik.values.staffEmgcontactperson} onBlur={formik.handleBlur} onChange={formik.handleChange}

                                    />
                                    {
                                        formik.touched.staffEmgcontactperson && formik.errors.staffEmgcontactperson ? <span className='span'>{formik.errors.staffEmgcontactperson}</span> : null
                                    }
                                    <label htmlFor="staffEmgcontactperson" className='text-muted fontSize'>Emg.Contact Name*</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <FloatingLabel className='mb-2'
                                    controlId="StaffEmgContactRel"
                                    label="Emg.Contact Relation*"
                                    name="StaffEmgContactRel"
                                    value={formik.values.StaffEmgContactRel} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                >

                                    <Form.Select aria-label="Emg.Contact Relation*" ref={emgcontactrel1}>
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
                                    formik.touched.StaffEmgContactRel && formik.errors.StaffEmgContactRel ? <span className='span'>{formik.errors.StaffEmgContactRel}</span> : null
                                }

                            </Col>
                            <Col xs={12} lg={4} className='col '>
                                <Phone isClear={mobileValue} onActivateProgressBar={Sample()} />
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