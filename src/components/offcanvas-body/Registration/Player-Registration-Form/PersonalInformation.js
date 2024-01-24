import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import ImageUpload from '../ImageUpload';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import './PersonalInformation.css';
import { useRef } from 'react';
import Phone from '../../Phone';
import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";
// validation:
const validate = values => {
    const errors = {};

    if (!values.fName) {
        errors.fName = "*Required";
    }
    else if (!/^[a-zA-Z]{3,10}$/.test(values.fName)) {
        errors.fName = "First name should be between 3 to 10 characters long or only letters allowed";
    }

    if (!/^[a-zA-Z]{0,10}$/.test(values.mName)) {
        errors.mName = "Middle name should be maximum 10 characters long or only letters allowed";
    }

    if (!values.lName) {
        errors.lName = "*Required";
    }
    else if (!/^[a-zA-Z]{3,10}$/.test(values.lName)) {
        errors.lName = "Last Name should be between 3 to 10 characters long or only letters allowed";
    }

    if (!values.bloodGroup) {
        errors.bloodGroup = "*Required";
    }

    if (!values.initials) {
        errors.initials = "*Required";
    }
    else if (!/^[a-zA-Z]{0,1}$/.test(values.initials)) {
        errors.initials = "Initial can only contain one letter"
    }

    if (!values.dName) {
        errors.dName = "*Required";
    }
    else if (!/^[a-zA-Z]{3,10}$/.test(values.dName)) {
        errors.dName = 'Display Name must be alphanumeric and have length between 3 to 10 or only letters allowed'
    }

    if (!values.fatherName) {
        errors.fatherName = "*Required";
    }
    else if (!/^[a-zA-Z]{3,10}$/.test(values.fatherName)) {
        errors.fatherName = "Father Name should be maximum 10 characters long or only letters allowed";
    }

    if (!/^[a-zA-Z]{0,10}$/.test(values.motherName)) {
        errors.motherName = "Mother Name should be maximum 10 characters long or only letters allowed"
    }

    if (!values.dob) {
        errors.dob = "*Required";
    }

    if (!values.bloodGroup) {
        errors.bloodGroup = "*Required";
    }

    if (!values.email) {
        errors.email = "*Required";
    }
    else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
        errors.email = "*Invalid email address";
    }

    return errors;
}


function PersonalInformation({ activationKey,onActivationKeyChild }) {

    const navigate = useNavigate();
    const [mobileValue, setMobileValue] = useState(false);
    const [imageValue, setImageValue] = useState(false);
    // const [imageValue,setImageValue]=useState(false);

    // next btn:
    const [childNextKey, setChildNextKey] = useState("1");

    // reset form start: 
    const firstName = useRef("");
    const middleName = useRef("");
    const lastName = useRef("");
    const initials = useRef("");
    const displayName = useRef("");
    const fathersName = useRef("");
    const mothersName = useRef("");
    const dob = useRef("");
    const bloodgrp = useRef("");
    const email = useRef("");
    const genderMale = useRef(false);
    const genderFemale = useRef(false);


    // for npm custom component dont use useRef instead use useState i.e for phone component
    function handleReset() {
        firstName.current.value = "";
        middleName.current.value = "";
        lastName.current.value = "";
        initials.current.value = "";
        displayName.current.value = "";
        fathersName.current.value = "";
        mothersName.current.value = "";
        dob.current.value = "";
        bloodgrp.current.value = "none"; //since default or initial value in html code below is none
        setMobileValue(true);
        email.current.value = "";
        genderMale.current.checked = false;
        genderFemale.current.checked = false;
        setImageValue(true);
        // console.log("Ref",genderMale);
        formik.resetForm();
    }
    // reset form end: 

    const formik = useFormik({
        initialValues: {
            fName: '',
            mName: '',
            lName: '',
            initials: '',
            dName: '',
            fatherName: '',
            motherName: '',
            dob: '',
            bloodGroup: '',
            email: ''
        },
        validate,
        onSubmit: values => {
            alert(`Hello! ,${values.fNamelNamemName}you have successfully signed up`);
            onActivationKeyChild(childNextKey)
        }
    });



    return (
     
        <Accordion.Item eventKey="0">
            <Accordion.Header><i className="bi bi-info-circle-fill me-1"></i><span style={{ fontWeight: '700' }}>PERSONAL INFORMATION</span></Accordion.Header>
            <Accordion.Body>
                <Container>
                    <p>{activationKey}</p>
                    <Form onSubmit={formik.handleSubmit}>
                        <Row>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="fName"
                                        type="text"
                                        placeholder="first name"
                                        // value={fName}
                                        ref={firstName}
                                        name="fName"
                                        value={formik.values.fName} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.fName && formik.errors.fName ? <span className='span'>{formik.errors.fName}</span> : null
                                    }
                                    <label htmlFor="fName" className='text-muted'>Player First Name*</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="mName"
                                        type="text"
                                        placeholder="middle name"
                                        ref={middleName}
                                        name="mName"
                                        value={formik.values.mName} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.mName && formik.errors.mName ? <span className='span'>{formik.errors.mName}</span> : null
                                    }
                                    <label htmlFor="mName" className='text-muted'>Player Middle Name</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="lName"
                                        type="text"
                                        placeholder="last name"
                                        ref={lastName}
                                        name="lName"
                                        value={formik.values.lName} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.lName && formik.errors.lName ? <span className='span'>{formik.errors.lName}</span> : null
                                    }
                                    <label htmlFor="lName" className='text-muted'>Player Last Name*</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="initials"
                                        type="text"
                                        placeholder="initials"
                                        ref={initials}
                                        name="initials"
                                        value={formik.values.initials} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.initials && formik.errors.initials ? <span className='span'>{formik.errors.initials}</span> : null
                                    }
                                    <label htmlFor="initials" className='text-muted'>Initials</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="dName"
                                        type="text"
                                        placeholder="display name"
                                        ref={displayName}
                                        name="dName"
                                        value={formik.values.dName} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.dName && formik.errors.dName ? <span className='span'>{formik.errors.dName}</span> : null
                                    }
                                    <label htmlFor="dName" className='text-muted'>Display Name*</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="fatherName"
                                        type="text"
                                        placeholder="father name"
                                        ref={fathersName}
                                        name="fatherName"
                                        value={formik.values.fatherName} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.fatherName && formik.errors.fatherName ? <span className='span'>{formik.errors.fatherName}</span> : null
                                    }
                                    <label htmlFor="fatherName" className='text-muted'>Father's Name*</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="motherName"
                                        type="text"
                                        placeholder="mother name"
                                        ref={mothersName}
                                        name="motherName"
                                        value={formik.values.motherName} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.motherName && formik.errors.motherName ? <span className='span'>{formik.errors.motherName}</span> : null
                                    }
                                    <label htmlFor="motherName" className='text-muted'>Mother's Name</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                {/*  */}
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="dob1"
                                        type="date"
                                        ref={dob}
                                        placeholder='DD-MM-YYYY'
                                        min="1960-01-01" max={new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString().split("T")[0]}
                                        name="dob"
                                        value={formik.values.dob} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.dob && formik.errors.dob ? <span className='span'>{formik.errors.dob}</span> : null
                                    }
                                    <label htmlFor="dob1" className='text-muted'>Date of Birth*</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <FloatingLabel className='mb-2'
                                    controlId="bloodGroup"
                                    label="BloodGroup*"
                                    name="bloodGroup"
                                    value={formik.values.bloodGroup} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                >

                                    <Form.Select aria-label="bloodGroup" className='' ref={bloodgrp}>
                                        <option value="none">Select Type</option>
                                        <option value="O+">O+</option>
                                        <option value="O-">O-</option>
                                        <option value="A+">A+</option>
                                        <option value="A-">A-</option>
                                        <option value="B+">B+</option>
                                        <option value="B-">B-</option>
                                        <option value="AB+">AB+</option>
                                        <option value="AB-">AB-</option>
                                    </Form.Select>
                                    {
                                        formik.touched.bloodGroup && formik.errors.bloodGroup ? <span className='span'>{formik.errors.bloodGroup}</span> : null
                                    }
                                </FloatingLabel>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Phone isClear={mobileValue} />
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="email"
                                        type="email"
                                        placeholder="email"
                                        ref={email}
                                        name="email"
                                        value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.email && formik.errors.email ? <span className='span'>{formik.errors.email}</span> : null
                                    }
                                    <label htmlFor="email" className='text-muted'>Email Address*</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='d-flex justify-content-center pt-3 col'>
                                <label className='text-muted me-2' htmlFor="gender">Gender:</label>
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3" style={{ whiteSpace: 'nowrap' }}>
                                        <Form.Check
                                            inline
                                            label="Male"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-male`}
                                            defaultChecked={true}
                                            ref={genderMale}
                                        />
                                        <Form.Check
                                            inline
                                            label="Female"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-female`}
                                            defaultChecked={false}
                                            ref={genderFemale}
                                        />
                                    </div>
                                ))}
                            </Col>
                            <Col xs={5} lg={2} className='col'>
                                <ImageUpload isClearImage={imageValue} />
                            </Col>
                            <Col xs={{ span: 6, offset: 1 }} lg={{ span: 9, offset: 1 }} className='d-flex align-items-center col'>
                                <Button variant="warning" style={{ color: "white", width: "130px" }} onClick={() => handleReset()}>CLEAR</Button>
                                <Button variant="success" type='submit' disabled={Object.keys(formik.errors).length > 0 || formik.values.name === ''} className='mx-3' style={{ whiteSpace: 'nowrap', width: '130px' }} >Save and Next</Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </Accordion.Body>
        </Accordion.Item>



    )
}

export default PersonalInformation