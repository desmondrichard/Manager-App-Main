import React, { useState, useEffect } from 'react';
import './StaffKittingDetails.css';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useFormik } from 'formik';
import { useRef } from 'react';
import ProgressBarWithLabel from '../../ProgressBarWithLabel';
import axios from 'axios';


const validate = values => {
    const errors = {};

    if (!values.jerseyName) {
        errors.jerseyName = "*Required";
    }
    else if (!/^[a-zA-Z]{2,10}$/.test(values.jerseyName)) {
        errors.jerseyName = "Jersey Name should be between 2 to 10 characters long or only letters allowed";
    }

    if (!values.jerseyNo) {
        errors.jerseyNo = "*Required";
    }
    else if (!/^[0-9]{0,3}$/.test(values.jerseyNo)) {
        errors.jerseyNo = "enter valid Digits";
    }


    if (!values.jerseySize) {
        errors.jerseySize = "*Required";
    }

    if (!/^[a-zA-Z]{0,1}$/.test(values.initials)) {
        errors.initials = "only one letter allowed";
    }


    if (!/^[0-9]{0,2}$/.test(values.trouserLength)) {
        errors.trouserLength = "upto two Digits allowed";
    }


    if (!/^[0-9]{0,3}$/.test(values.familyJerseyNo)) {
        errors.familyJerseyNo = "upto three Digits allowed";
    }


    return errors
}
//how to update formik using put request as json as content type
function StaffKittingDetails({ activationKey, onActivationKeyChild, onPreviousActivationKey, showPutData, showSaveBtn }) {

    // reset form start: 
    const JerseyName1 = useRef("");
    const JerseyNo1 = useRef("");
    const jerseysize1 = useRef("");
    const trowsersize1 = useRef("");
    const trowserlength1 = useRef("");
    const shortssize1 = useRef("");
    const tracksuit1 = useRef("");
    const travelpolo1 = useRef("");
    const familyjerseyno1 = useRef("");

    const [childNextKey, setChildNextKey] = useState("2");


    // for npm custom component dont use useRef instead use useState i.e for phone component
    function handleReset() {
        JerseyName1.current.value = "";
        JerseyNo1.current.value = "";
        jerseysize1.current.value = "none";
        trowsersize1.current.value = "none";
        trowserlength1.current.value = "";
        shortssize1.current.value = "none";
        tracksuit1.current.value = "none";
        travelpolo1.current.value = "none";
        familyjerseyno1.current.value = "";
        formik.resetForm();
        setProgress(0);
    }
    // reset form end: 

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            jerseyName: showPutData?.jerseyName || '',
            jerseyNo: showPutData?.jerseyNo || '',
            jerseySize: showPutData?.jerseySize || '',
            trouserSize: showPutData?.trouserSize || '',
            initials: showPutData?.initials || '',
            trouserLength: showPutData?.trouserLength || '',
            familyJerseyNo: showPutData?.familyJerseyNo || '',
            shortsSize: showPutData?.shortsSize || '',
            trackSuit: showPutData?.trackSuit || '',
            travelPolo: showPutData?.travelPolo || ''
        },
        validate,
        onSubmit: values => {
            axios.post('https://localhost:7097/StaffplayerkittingModel', values)
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

    // alert(`Clicked Next`);
    // onActivationKeyChild(childNextKey)
    // console.log("values",values)

    const handlePreviousButton = () => {
        onPreviousActivationKey("0")
    }
    //Progress Bar:
    const [progress, setProgress] = useState(0);

    function handleProgress() {
        //check form values or formik values:
        console.log("formik vals Kitting:", formik.values);
        //set progress as 1 if current form field is filled else 0:  
        //get no of form vals filled by adding it inside a object:
        const result = countKeysWithNonEmptyValues(formik.values); //sending object as parameter which has all form fields
        console.log(result);  //returned count is stored in result variable
        //calc formula
        let newProgress = ((result / 10) * 100).toFixed();
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

    console.log('showPutDataKitting', showPutData)

    function handleSkip() {
        onActivationKeyChild(childNextKey)
    }

    //update:
    function handleUpdate() {

        axios.put(`https://localhost:7097/StaffkittingModel/${showPutData.alldataStaffId}`, formik.values, {
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

    //useEffect will be trigerred whenever formik.values has value
    useEffect(() => {
        handleProgress();
    }, [formik.values]); // Ensure that the effect is triggered when form values change


    return (

        <Accordion.Item eventKey="1">
            <Accordion.Header ><i className="bi bi-info-circle-fill me-1"></i><span style={{ fontWeight: '700' }}>KITTING DETAILS</span><ProgressBarWithLabel progressValue={progress} /></Accordion.Header>
            <Accordion.Body>
                <Container >
                    {/* <p>{activationKey}</p> */}
                    <Form style={{ paddingRight: '60px' }} onSubmit={formik.handleSubmit}>
                        <Row>
                            <Col xs={12} lg={3} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="staffJerseyName"
                                        type="text"
                                        placeholder="JerseyName"
                                        name='jerseyName'
                                        ref={JerseyName1}
                                        value={formik.values.jerseyName} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.jerseyName && formik.errors.jerseyName ? <span className='span'>{formik.errors.jerseyName}</span> : null
                                    }
                                    <label htmlFor="staffJerseyName" className='text-muted'>Name on Jersey*</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={3} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="staffJerseyNo"
                                        type="text"
                                        placeholder="JerseyNo"
                                        name="jerseyNo"
                                        ref={JerseyNo1}
                                        value={formik.values.jerseyNo} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.jerseyNo && formik.errors.jerseyNo ? <span className='span'>{formik.errors.jerseyNo}</span> : null
                                    }
                                    <label htmlFor="staffJerseyNo" className='text-muted'>Jersey No*</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={3} className='col'>
                                <FloatingLabel className='mb-2'
                                    controlId="jerseySize"
                                    label="Jersey Size*"
                                    name="jerseySize"

                                >
                                    <Form.Select aria-label="jerseySize" ref={jerseysize1}
                                        value={formik.values.jerseySize} onBlur={formik.handleBlur} onChange={(e) => formik.setFieldValue('jerseySize', e.target.value)}
                                    >
                                        <option value="none">Select Type</option>
                                        <option value="S">S</option>
                                        <option value="M">M</option>
                                        <option value="L">L</option>
                                        <option value="XL">XL</option>
                                        <option value="XXL">XXL</option>
                                        <option value="3XL">3XL</option>
                                        <option value="4XL">4XL</option>
                                    </Form.Select>
                                    {
                                        formik.touched.jerseySize && formik.errors.jerseySize ? <span className='span'>{formik.errors.jerseySize}</span> : null
                                    }
                                </FloatingLabel>
                            </Col>
                            <Col xs={12} lg={3} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="staffInitialprint"
                                        type="text"
                                        placeholder="initialprint"
                                        name="initials"

                                        value={formik.values.initials} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.initials && formik.errors.initials ? <span className='span'>{formik.errors.initials}</span> : null
                                    }
                                    <label htmlFor="initials" className='text-muted'>Initial Print</label>
                                </Form.Floating>
                            </Col>

                            <Col xs={12} lg={3} className='col'>
                                <FloatingLabel className='mb-2'
                                    controlId="trouserSize"
                                    label="Trouser Size"
                                    name="trouserSize"

                                >
                                    <Form.Select aria-label="trouserSize" ref={trowsersize1}
                                        value={formik.values.trouserSize} onBlur={formik.handleBlur} onChange={(e) => formik.setFieldValue('trouserSize', e.target.value)}
                                    >
                                        <option value="none">Select Type</option>
                                        <option value="S">S</option>
                                        <option value="M">M</option>
                                        <option value="L">L</option>
                                        <option value="XL">XL</option>
                                        <option value="XXL">XXL</option>
                                        <option value="3XL">3XL</option>
                                        <option value="4XL">4XL</option>
                                    </Form.Select>
                                    {
                                        formik.touched.trouserSize && formik.errors.trouserSize ? <span className='span'>{formik.errors.trouserSize}</span> : null
                                    }
                                </FloatingLabel>
                            </Col>
                            <Col xs={12} lg={3} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="staffTrowserlength"
                                        type="text"
                                        placeholder="Trowser Length"
                                        name="trouserLength"
                                        ref={trowserlength1}
                                        value={formik.values.trouserLength} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.trouserLength && formik.errors.trouserLength ? <span className='span'>{formik.errors.trouserLength}</span> : null
                                    }
                                    <label htmlFor="staffTrowserlength" className='text-muted'>Trowser Length</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={3} className='col'>
                                <FloatingLabel className='mb-2'
                                    controlId="shortsSize"
                                    label="Shorts Size"
                                    name="shortsSize"

                                >
                                    <Form.Select aria-label="shortsSize" ref={shortssize1}
                                        value={formik.values.shortsSize} onBlur={formik.handleBlur} onChange={(e) => formik.setFieldValue('shortsSize', e.target.value)}>
                                        <option value="none">Select Type</option>
                                        <option value="S">S</option>
                                        <option value="M">M</option>
                                        <option value="L">L</option>
                                        <option value="XL">XL</option>
                                        <option value="XXL">XXL</option>
                                        <option value="3XL">3XL</option>
                                        <option value="4XL">4XL</option>
                                    </Form.Select>
                                    {
                                        formik.touched.shortsSize && formik.errors.shortsSize ? <span className='span'>{formik.errors.shortsSize}</span> : null
                                    }
                                </FloatingLabel>
                            </Col>
                            <Col xs={12} lg={3} className='col'>
                                <FloatingLabel className='mb-2'
                                    controlId="trackSuit"
                                    label="Track suit"
                                    name="trackSuit"

                                >

                                    <Form.Select aria-label="trackSuit" ref={tracksuit1}
                                        value={formik.values.trackSuit} onBlur={formik.handleBlur} onChange={(e) => formik.setFieldValue('trackSuit', e.target.value)}
                                    >
                                        <option value="none">Select Type</option>
                                        <option value="S">S</option>
                                        <option value="M">M</option>
                                        <option value="L">L</option>
                                        <option value="XL">XL</option>
                                        <option value="XXL">XXL</option>
                                        <option value="3XL">3XL</option>
                                        <option value="4XL">4XL</option>
                                    </Form.Select>

                                </FloatingLabel>
                            </Col>
                            <Col xs={12} lg={3} className='col'>
                                <FloatingLabel className='mb-2'
                                    controlId="travelPolo"
                                    label="Travel Polo"
                                    name="travelPolo"
                                    onChange={formik.handleChange}
                                >

                                    <Form.Select aria-label="travelPolo" ref={travelpolo1}
                                        value={formik.values.travelPolo} onBlur={formik.handleBlur} onChange={(e) => formik.setFieldValue('travelPolo', e.target.value)}
                                    >
                                        <option value="none">Select Type</option>
                                        <option value="S">S</option>
                                        <option value="M">M</option>
                                        <option value="L">L</option>
                                        <option value="XL">XL</option>
                                        <option value="XXL">XXL</option>
                                        <option value="3XL">3XL</option>
                                        <option value="4XL">4XL</option>
                                    </Form.Select>

                                </FloatingLabel>
                            </Col>
                            <Col xs={12} lg={3} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="staffFamilyjerseyno"
                                        type="text"
                                        placeholder="familyjerseyno"
                                        name="familyJerseyNo"
                                        ref={familyjerseyno1}
                                        value={formik.values.familyJerseyNo} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.familyJerseyNo && formik.errors.familyJerseyNo ? <span className='span'>{formik.errors.familyJerseyNo}</span> : null
                                    }
                                    <label htmlFor="staffFamilyjerseyno" className='text-muted'>Family Jersey No</label>
                                </Form.Floating>
                            </Col>
                        </Row>

                        <Col lg={12} className='my-4 col'>
                            <Button variant="primary" className='me-1 mb-2 mx-1 ' style={{ width: "130px" }} onClick={handlePreviousButton}>PREVIOUS</Button>
                            {showSaveBtn && <Button type="submit" variant="success" className='me-1 mb-2 mx-1 ' style={{ width: "130px" }}>Save and Next</Button>}
                            <Button variant="warning" className='text-white mb-2 ' style={{ width: "130px" }} onClick={() => handleReset()}>CLEAR</Button>
                            {!showSaveBtn && <Button variant="info" className='mx-1 mt-1' style={{ whiteSpace: 'nowrap', width: '130px',marginTop:'-8px' }} onClick={handleUpdate}>Update</Button>}
                            {!showSaveBtn && <Button variant="dark" className='mt-1' style={{ whiteSpace: 'nowrap', width: '130px',marginTop:'-8px' }} onClick={handleSkip}>Skip</Button>}

                        </Col>
                    </Form>
                </Container>
            </Accordion.Body>
        </Accordion.Item>

    )
}

export default StaffKittingDetails