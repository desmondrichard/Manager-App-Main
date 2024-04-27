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
// const validate = values => {
//     const errors = {};

//     if (!values.emergencyContactPerson) {
//         errors.emergencyContactPerson = "*Required";
//     }
//     else if (!/^[a-zA-Z ]{3,25}$/.test(values.emergencyContactPerson)) {
//         errors.emergencyContactPerson = "Name should be between 3 to 25 characters long or only letters allowed";
//     }

//     if (!values.emergContactPersonRelationship) {
//         errors.emergContactPersonRelationship = "*Required";
//     }
//     else if (!/^[a-zA-Z]{3,15}$/.test(values.emergContactPersonRelationship)) {
//         errors.emergContactPersonRelationship = "Name should be between 3 to 15 characters long or only letters allowed";
//     }

//     return errors;
// }
function EmergencyContact({ activationKey, onActivationKeyChild, onPreviousActivationKey, showPutData, showSaveBtn, showClearBtn, handlePrevClick, previousClk, showSkipBtn }) {
    const [mobileValueClear, setMobileValueClear] = useState(false);
    const [childNextKey, setChildNextKey] = useState("9");
    const [emergencyContactPersonNo, setEmergencyContactNo] = useState("");
    //
    const [phNo, setphNo] = useState("");

    const formik = useFormik({
        initialValues: {
            emergencyContactPerson: showPutData?.emergencyContactPerson || '',
            emergContactPersonRelationship: showPutData?.emergContactPersonRelationship || '',
            emergencyContactPersonNo: showPutData?.emergencyContactPersonNo || ''
        },
        // validate,
        onSubmit: (values, { setSubmitting }) => {  //to add emergencyContactPersonNo along with values
            values = { ...values, emergencyContactPersonNo }//adding emergencyContactPersonNo
            // console.log("newValues", newValues)
            axios.post('http://192.168.1.134/MA-APP/playerEmergencycontactmodel', values)
                .then(response => {
                    console.log(response.data);
                    onActivationKeyChild(childNextKey)
                    console.log("emergvalues", values)
                    setSubmitting(false);
                })
                .catch(error => {
                    console.error(error.message);
                    console.log("values", values)
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
        //m:
        setphNo("")
        formik.setFieldValue('emergencyContactPersonNo', "");
    }

    const handlePreviousButton = () => {
        onPreviousActivationKey("7")
        handlePrevClick(true)
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
        formik.setFieldValue('mobileNo', s);
        console.log("emergencyContactPersonNo", emergencyContactPersonNo)
        setphNo(s)
    }

    console.log("showPutDataBank", showPutData)

    //update Method:
    function handleUpdate() {
        //added next line to update emergencyContactPersonNo and sent newValues in put request
        const newValues = { ...formik.values, emergencyContactPersonNo };
        axios.put(`http://192.168.1.134/MA-APP/playerEmergencycontactmodel/${showPutData.alldataplayerId}`, newValues, {
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

    useEffect(() => {
        handleProgress();
    }, [formik.values, phoneProgress])

    useEffect(() => {
        if (showPutData.emergencyContactPersonNo) {
            setphNo(showPutData.emergencyContactPersonNo)
        }
    }, [])



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
                                    <label htmlFor="emergencyContactPerson" className='text-muted fontSize'>Emg.Contact Name</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <FloatingLabel className='mb-2'
                                    controlId="emergContactPersonRelationship"
                                    label="Emg.Contact Relation"
                                    name="emergContactPersonRelationship"
                                >

                                    <Form.Select aria-label="Emg.Contact Relation*" ref={emgcontactrelReset}
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
                                <Phone isClear={mobileValueClear} onValidate={validateForm} value={phNo} onChange={(data) => setphNo(data.target.name)} onActivateProgressBar={ActivateProgressBar} samp={Samp} dynamicName="emergencyContactPersonNo" dynamicId="emergencyContactPersonId" className='emergPhone' />
                                {formik.touched.emergencyContactPersonNo && formik.errors.emergencyContactPersonNo ? (
                                    <span className="span">{formik.errors.emergencyContactPersonNo}</span>
                                ) : null}
                            </Col>
                        </Row>

                        <Col lg={12} className='my-4 col'>
                            {console.log("previousClkBtn", previousClk, showSkipBtn)}
                            {previousClk && <Button variant="primary" className='me-1 mb-2 mx-1 previousP' style={{ width: "130px" }} onClick={handlePreviousButton}>Previous</Button>}
                            {showSaveBtn && !previousClk && <Button type="submit" variant="success" className='me-1 mb-2 mx-1 ' style={{ width: "130px" }}>Save and Next</Button>}
                            {showClearBtn && <Button variant="warning" className='text-white mb-2 ' style={{ width: "130px" }} onClick={() => handleReset()}>Clear</Button>}
                            {!showSaveBtn && <Button variant="info" className='mx-1 updateP' style={{ whiteSpace: 'nowrap', width: '130px', marginTop: '-8px' }} onClick={handleUpdate}>Update</Button>}
                            {(previousClk || showSkipBtn) && <Button variant="dark" className='skip ms-1' style={{ whiteSpace: 'nowrap', width: '130px', marginTop: '-8px' }} onClick={handleSkip}>Skip</Button>}
                        </Col>
                    </Form>
                </Container>
            </Accordion.Body>
        </Accordion.Item>

    )
}

export default EmergencyContact