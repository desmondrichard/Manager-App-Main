import React, { useEffect, useState } from 'react';
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
import axios from 'axios';
import ProgressBarWithLabel from '../ProgressBarWithLabel';

// validation:
const validate = values => {
    const errors = {};

    if (!values.emergencyContactPerson) {
        errors.emergencyContactPerson = "*Required";
    }
    else if (!/^[a-zA-Z ]{3,25}$/.test(values.emergencyContactPerson)) {
        errors.emergencyContactPerson = "Name should be between 3 to 25 characters long or only letters allowed";
    }

    if (!values.emergContactPersonRelationship) {
        errors.emergContactPersonRelationship = "*Required";
    }
    else if (!/^[a-zA-Z]{3,15}$/.test(values.emergContactPersonRelationship)) {
        errors.emergContactPersonRelationship = "Name should be between 3 to 15 characters long or only letters allowed";
    }

    return errors;
}
function EmergencyContact({ activationKey, onActivationKeyChild, onPreviousActivationKey }) {
    const [mobileValueClear, setMobileValueClear] = useState(false);
    const [childNextKey, setChildNextKey] = useState("9");
    const [emergencyContactPersonNo, setEmergencyContactNo] = useState("");
    const formik = useFormik({
        initialValues: {
            emergencyContactPerson: '',
            emergContactPersonRelationship: '',
          
        },
        validate,
        onSubmit: (values, { setSubmitting }) => {  //to add emergencyContactPersonNo along with values
            const newValues = { ...values, emergencyContactPersonNo }//adding emergencyContactPersonNo
           
            axios.post('https://localhost:7097/playerEmergencycontactmodel', newValues)
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

     // alert(`clicked next`);
            // onActivationKeyChild(childNextKey)
            // console.log("newValues", newValues)
            // setSubmitting(false);

    // reset form start: 
    const emgcontactpersonReset = useRef("");
    const emgcontactrelReset = useRef("");

    // for npm custom component dont use useRef instead use useState i.e for phone component
    function handleReset() {
        emgcontactpersonReset.current.value = "";
        emgcontactrelReset.current.value = "";
        setMobileValueClear(true);
        setPhoneProgress("");
        formik.resetForm();
        setProgress(0);
    }

    const handlePreviousButton = () => {
        onPreviousActivationKey("7")
    }

    const [errors, setErrors] = useState({});
    const validateForm = (validationErrors) => {
        setErrors(validationErrors);
    };

    //Dynamic phone progress Bar:
    const [phoneProgress, setPhoneProgress] = useState(0);
    function ActivateProgressBar(val) {
        console.log("childtoparentval: ", val);
        setPhoneProgress(val);//checking if value present or not
        setMobileValueClear(false);//if value is present  then clear the field  only after reset it clicked so made false-no clear again else it will be true always hence field cannot be cleared
    }
    // progress Bar for static fields:
    const [progress, setProgress] = useState(0);
    function handleProgress() {
        console.log("formik values1", formik.values)
        const result = countKeysWithNonEmptyValues(formik.values);
        console.log("result for formik values:", result)
        const totalFilledFields = result + phoneProgress;

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

    const Samp = (s) => {
        console.log("sample1", s)
        setEmergencyContactNo(s);
        console.log("emergencyContactPersonNo", emergencyContactPersonNo)
    }

    useEffect(() => {
        handleProgress();
    }, [formik.values, phoneProgress])

    return (

        <Accordion.Item eventKey="8">
            <Accordion.Header><i className="bi bi-info-circle-fill me-1"></i><span style={{ fontWeight: '700' }}>EMERGENCY CONTACT INFORMATION</span><ProgressBarWithLabel progressValue={progress} /></Accordion.Header>
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
                                        ref={emgcontactpersonReset}
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

                                    <Form.Select aria-label="Emg.Contact Relation*" ref={emgcontactrelReset}>
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
                                <Phone isClear={mobileValueClear} onValidate={validateForm} onChange={(e) => { formik.handleChange(e) }} onActivateProgressBar={ActivateProgressBar} samp={Samp} dynamicName="emergencyContactPersonNo" dynamicId="emergencyContactPersonId" />
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