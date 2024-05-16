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
// const validate = values => {
//     const errors = {};

//     if (!values.emergencyContactPerson) {
//         errors.emergencyContactPerson = "*Required";
//     }
//     else if (!/^[a-zA-Z]{3,15}$/.test(values.emergencyContactPerson)) {
//         errors.emergencyContactPerson = "Name should be between 3 to 15 characters long or only letters allowed";
//     }

//     if (!values.emergContactPersonRelationship) {
//         errors.emergContactPersonRelationship = "*Required";
//     }
//     else if (!/^[a-zA-Z]{3,15}$/.test(values.emergContactPersonRelationship)) {
//         errors.emergContactPersonRelationship = "Name should be between 3 to 15 characters long or only letters allowed";
//     }

//     return errors;
// }


function StaffEmergencyContact({ activationKey, onActivationKeyChild, onPreviousActivationKey, showPutData, showSaveBtn, showClearBtn, handlePrevClick, previousClk, showSkipBtn }) {
    const [mobileValueClear, setMobileValueClear] = useState(false);
    const [childNextKey, setChildNextKey] = useState("8");
    const [emergencyContactPersonNo, setEmergencyContactNo] = useState("");


    // reset form start: 
    const emgcontactperson1 = useRef("");
    const emgcontactrel1 = useRef("");

    const [phNo, setphNo] = useState("");

    // for npm custom component dont use useRef instead use useState i.e for phone component
    function handleReset() {
        emgcontactperson1.current.value = "";
        emgcontactrel1.current.value = "";
        setMobileValueClear(true);
        setmobileProgress("");
        formik.resetForm();
        setProgress(0);
        setphNo("")
        formik.setFieldValue('emergencyContactPersonNo', "");
    }

    const formik = useFormik({
        initialValues: {
            emergencyContactPerson: showPutData?.emergencyContactPerson || '',
            emergContactPersonRelationship: showPutData?.emergContactPersonRelationship || '',
            emergencyContactPersonNo: showPutData?.emergencyContactPersonNo || ''
        },
        // validate,
        onSubmit: (values, { setSubmitting }) => {
            // alert("you have successfully signed up");
            const newValues = { ...values, emergencyContactPersonNo }//adding emergencyContactPersonNo
            axios.post('http://192.168.1.135/Manager-App-API/StaffEmergencycontactmodel', newValues)
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
        handlePrevClick(true)
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

    const [errors, setErrors] = useState({});
    const validateForm = (validationErrors) => {
        setErrors(validationErrors);
    };

    const Samp = (s) => {
        console.log("sample1", s)
        setEmergencyContactNo(s);
        console.log("emergencyContactPersonNo", emergencyContactPersonNo)
        setphNo(s)
    }

    console.log('showPutDataKitting', showPutData)

    //update:
    function handleUpdate() {
        //added line 150 to update emergencyContactPersonNo and sent newValues in put request
        const newValues = { ...formik.values, emergencyContactPersonNo };
        console.log("showPutDataa", formik.values)

        axios.put(`http://192.168.1.135/Manager-App-API/StaffEmergencycontactmodel/${showPutData.alldataStaffId}`, newValues, {
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
    }, [formik.values, handleMobileProgress]); // Ensure that the effect is triggered when form values change

    useEffect(() => {
        if (showPutData.emergencyContactPersonNo) {
            setphNo(showPutData.emergencyContactPersonNo)
        }

    }, [])

    return (

        <Accordion.Item eventKey="7">
            <Accordion.Header><i className="bi bi-info-circle-fill me-1"></i><span style={{ fontWeight: '700' }}>EMERGENCY CONTACT INFORMATION</span><ProgressBarWithLabel progressValue={progress} /> </Accordion.Header>
            <Accordion.Body>
                <Container >
                    <Form style={{ paddingRight: '60px' }} onSubmit={formik.handleSubmit}>
                        <Row>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2 emerGroup">
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
                                    <label htmlFor="emergencyContactPerson" className='text-muted fontSize'>Emg.Contact Name</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <FloatingLabel className='mb-2 emerGroup'
                                    controlId="emergContactPersonRelationship"
                                    label="Emg.Contact Relation"
                                    name="emergContactPersonRelationship"

                                >

                                    <Form.Select aria-label="emergContactPersonRelationship" ref={emgcontactrel1}
                                        value={formik.values.emergContactPersonRelationship} onBlur={formik.handleBlur} onChange={(e) => formik.setFieldValue('emergContactPersonRelationship', e.target.value)}
                                    >
                                        <option value="none">Select Type</option>
                                        <option value="spouse">SPOUSE</option>
                                        <option value="parents">PARENTS</option>
                                        <option value="guardian">GUARDIAN</option>
                                        <option value="sponsors">SPONSORS</option>
                                        <option value="friends">FRIENDS</option>
                                        <option value="familymember">FAMILY MEMBER</option>
                                        <option value="neighbour">NEIGHBOUR</option>
                                    </Form.Select>
                                </FloatingLabel>

                                {
                                    formik.touched.emergContactPersonRelationship && formik.errors.emergContactPersonRelationship ? <span className='span'>{formik.errors.emergContactPersonRelationship}</span> : null
                                }

                            </Col>
                            <Col xs={12} lg={4} className='col '>
                                <Phone isClear={mobileValueClear} onValidate={validateForm} onChange={(data) => setphNo(data.target.name)} onActivateProgressBar={handleMobileProgress} samp={Samp} dynamicName="emergencyContactPersonNo" dynamicId="emergencyContactPersonId" value={phNo} />
                                {formik.touched.emergencyContactPersonNo && formik.errors.emergencyContactPersonNo ? (
                                    <span className="span">{formik.errors.emergencyContactPersonNo}</span>
                                ) : null}
                            </Col>
                        </Row>

                        <Col lg={12} className='my-4 col'>
                            {previousClk && <Button variant="primary" className='me-1 mb-3 mx-1 previousp' style={{ width: "130px", marginTop: '6px' }} onClick={handlePreviousButton}>Previous</Button>}
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

export default StaffEmergencyContact