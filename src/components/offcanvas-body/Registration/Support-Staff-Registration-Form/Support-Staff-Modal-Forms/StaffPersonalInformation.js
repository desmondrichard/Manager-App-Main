import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import ImageUpload from '../../ImageUpload';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import './StaffPersonalInformation.css';
import Phone from '../../../Phone';
import { useFormik } from 'formik';
import { useRef } from 'react';
import ProgressBarWithLabel from '../../ProgressBarWithLabel';
import { useNavigate } from "react-router-dom";

// validation:
const validate = values => {
    const errors = {};

    if (!values.staffFName) {
        errors.staffFName = "*Required";
    }
    else if (!/^[a-zA-Z]{3,10}$/.test(values.staffFName)) {
        errors.staffFName = "First name should be between 3 to 10 characters long or only letters allowed";
    }

    if (!/^[a-zA-Z]{0,10}$/.test(values.staffSName)) {
        errors.staffSName = "Middle name should be maximum 10 characters long or only letters allowed";
    }

    if (!values.staffDesignation) {
        errors.staffDesignation = "*Required";
    }

    if (!values.staffSpecialization) {
        errors.staffSpecialization = "*Required";
    }

    if (!values.staffLName) {
        errors.staffLName = "*Required";
    }
    else if (!/^[a-zA-Z]{3,10}$/.test(values.staffLName)) {
        errors.staffLName = "Last Name should be between 3 to 10 characters long or only letters allowed";
    }

    if (!values.staffintials) {
        errors.staffintials = "*Required";
    }
    else if (!/^[a-zA-Z]{0,1}$/.test(values.staffintials)) {
        errors.staffintials = "Initial can only contain one letter"
    }

    if (!values.staffDisplayName) {
        errors.staffDisplayName = "*Required";
    }
    else if (!/^[a-zA-Z]{3,10}$/.test(values.staffDisplayName)) {
        errors.staffDisplayName = 'Display Name must be alphanumeric and have length between 3 to 10 or only letters allowed'
    }

    if (!values.staffFatherName) {
        errors.staffFatherName = "*Required";
    }
    else if (!/^[a-zA-Z]{3,10}$/.test(values.staffFatherName)) {
        errors.staffFatherName = "Father Name should be maximum 10 characters long or only letters allowed";
    }

    if (!/^[a-zA-Z]{0,10}$/.test(values.staffMotherName)) {
        errors.staffMotherName = "Mother Name should be maximum 10 characters long or only letters allowed"
    }

    if (!values.staffDob) {
        errors.staffDob = "*Required";
    }

    if (!values.staffBloodGroup) {
        errors.staffBloodGroup = "*Required";
    }

    if (!values.staffEmail) {
        errors.staffEmail = "*Required";
    }
    else if (!/^\S+@\S+\.\S+$/.test(values.staffEmail)) {
        errors.staffEmail = "*Invalid email address";
    }

    // if (!values.mobNo) {
    //     errors.mobNo = "*Required"
    // }

    return errors;
}

function StaffPersonalInformation({ activationKey, onActivationKeyChild }) {
    const [mobileValue, setMobileValue] = useState(false);
    const [imageValue, setImageValue] = useState(false);

    const [childNextKey, setChildNextKey] = useState("1");
    //
    const [errors, setErrors] = useState({});

    const validateForm = (validationErrors) => {
        setErrors(validationErrors);
    };

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
    const desig = useRef("");
    const spec = useRef("");

    // progressbar:
    const progress = 0;

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
        desig.current.value = "none";
        spec.current.value = "none";
        setImageValue(true);
        // console.log("Ref",genderMale);
        formik.resetForm();
    }

    const formik = useFormik({
        initialValues: {
            staffFName: '',
            staffSName: '',
            staffLName: '',
            staffDesignation: '',
            staffSpecialization: '',
            staffintials: '',
            staffDisplayName: '',
            staffFatherName: '',
            staffMotherName: '',
            staffDob: '',
            staffBloodGroup: '',
            staffEmail: ''
        },
        validate,
        onSubmit: values => {
            alert(`Hello! ,${values.fNamelNamemName}you have successfully signed up`);
            onActivationKeyChild(childNextKey)
        }
    });
    return (

        <Accordion.Item eventKey="0">
            <Accordion.Header><i className="bi bi-info-circle-fill me-1"></i><span style={{ fontWeight: '700' }}>PERSONAL INFORMATION </span><ProgressBarWithLabel /> </Accordion.Header>
            <Accordion.Body>
                <Container>
                    <p>{activationKey}</p>
                    <Form onSubmit={formik.handleSubmit}>
                        <Row>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="staffFName"
                                        type="text"
                                        placeholder="first name"
                                        name="staffFName"
                                        ref={firstName}
                                        value={formik.values.staffFName} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.staffFName && formik.errors.staffFName ? <span className='span'>{formik.errors.staffFName}</span> : null
                                    }
                                    <label htmlFor="staffFName" className='text-muted'>Staff First Name*</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="staffSName"
                                        type="text"
                                        placeholder="second name"
                                        name="staffSName"
                                        ref={middleName}
                                        value={formik.values.staffSName} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.staffSName && formik.errors.staffSName ? <span className='span'>{formik.errors.staffSName}</span> : null
                                    }
                                    <label htmlFor="staffSName" className='text-muted'>Staff Middle Name</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="staffLName"
                                        type="text"
                                        placeholder="last name"
                                        name="staffLName"
                                        ref={lastName}
                                        value={formik.values.staffLName} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.staffLName && formik.errors.staffLName ? <span className='span'>{formik.errors.staffLName}</span> : null
                                    }
                                    <label htmlFor="staffLName" className='text-muted'>Staff Last Name*</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <FloatingLabel className='mb-2'
                                    controlId="staffDesignation"
                                    label="Designation*"
                                    name="staffDesignation"

                                    value={formik.values.staffDesignation} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                >

                                    <Form.Select aria-label="staffDesignation" ref={desig}>
                                        <option value="none">Select Type</option>
                                        <option value="management">Management</option>
                                    </Form.Select>
                                    {
                                        formik.touched.staffDesignation && formik.errors.staffDesignation ? <span className='span'>{formik.errors.staffDesignation}</span> : null
                                    }
                                </FloatingLabel>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <FloatingLabel className='mb-2'
                                    controlId="staffSpecialization"
                                    label="Specialization*"
                                    name="staffSpecialization"
                                    value={formik.values.staffSpecialization} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                >

                                    <Form.Select aria-label="staffSpecialization" ref={spec}>
                                        <option value="none">Select Type</option>
                                        <option value="management">Management</option>
                                    </Form.Select>
                                    {
                                        formik.touched.staffSpecialization && formik.errors.staffSpecialization ? <span className='span'>{formik.errors.staffSpecialization}</span> : null
                                    }
                                </FloatingLabel>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="staffintials"
                                        type="text"
                                        placeholder="initials"
                                        name="staffintials"
                                        ref={initials}
                                        value={formik.values.staffintials} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.staffintials && formik.errors.staffintials ? <span className='span'>{formik.errors.staffintials}</span> : null
                                    }
                                    <label htmlFor="staffintials" className='text-muted'>Initials</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="staffDisplayName"
                                        type="text"
                                        placeholder="display name"
                                        name="staffDisplayName"
                                        ref={displayName}
                                        value={formik.values.staffDisplayName} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.staffDisplayName && formik.errors.staffDisplayName ? <span className='span'>{formik.errors.staffDisplayName}</span> : null
                                    }
                                    <label htmlFor="staffDisplayName" className='text-muted'>Display Name*</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="staffFatherName"
                                        type="text"
                                        placeholder="father name"
                                        name="staffFatherName"
                                        ref={fathersName}
                                        value={formik.values.staffFatherName} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.staffFatherName && formik.errors.staffFatherName ? <span className='span'>{formik.errors.staffFatherName}</span> : null
                                    }
                                    <label htmlFor="staffFatherName" className='text-muted'>Father's Name*</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="staffMotherName"
                                        type="text"
                                        placeholder="mother name"
                                        name="staffMotherName"
                                        ref={mothersName}
                                        value={formik.values.staffMotherName} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.staffMotherName && formik.errors.staffMotherName ? <span className='span'>{formik.errors.staffMotherName}</span> : null
                                    }
                                    <label htmlFor="staffMotherName" className='text-muted'>Mother's Name</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="staffDob"
                                        type="date"
                                        placeholder="dob"
                                        name="staffDob"
                                        ref={dob}
                                        max={new Date().toISOString().split('T')[0]}
                                        value={formik.values.staffDob} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.staffDob && formik.errors.staffDob ? <span className='span'>{formik.errors.staffDob}</span> : null
                                    }
                                    <label htmlFor="staffDob" className='text-muted'>Date of Birth*</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <FloatingLabel className='mb-2'
                                    controlId="staffBloodGroup"
                                    label="BloodGroup*"
                                    name="staffBloodGroup"
                                    value={formik.values.staffBloodGroup} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                >

                                    <Form.Select aria-label="staffBloodGroup" ref={bloodgrp}>
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
                                        formik.touched.staffBloodGroup && formik.errors.staffBloodGroup ? <span className='span'>{formik.errors.staffBloodGroup}</span> : null
                                    }
                                </FloatingLabel>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="staffEmail"
                                        type="staffEmail"
                                        placeholder="email"
                                        name="staffEmail"
                                        ref={email}
                                        value={formik.values.staffEmail} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.staffEmail && formik.errors.staffEmail ? <span className='span'>{formik.errors.staffEmail}</span> : null
                                    }
                                    <label htmlFor="staffEmail" className='text-muted'>Email Address*</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Phone isClear={mobileValue} onValidate={validateForm} />
                            </Col>

                            <Col xs={12} lg={4} className='d-flex justify-content-center pt-3 col'>
                                <label className='text-muted me-2' htmlFor="gender">Gender:</label>
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3" style={{ whiteSpace: 'nowrap' }}>
                                        <Form.Check
                                            inline
                                            label="Male"
                                            name="staffGender"
                                            type={type}
                                            id={`inline-${type}-male`}
                                            defaultChecked={true}
                                            ref={genderMale}
                                        />
                                        <Form.Check
                                            inline
                                            label="Female"
                                            name="staffGender"
                                            type={type}
                                            id={`inline-${type}-female`}
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
                                <Button variant="success" className='mx-3' type="submit" style={{ whiteSpace: 'nowrap', width: '130px' }} >Save and Next</Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </Accordion.Body>

        </Accordion.Item>

    )
}

export default StaffPersonalInformation