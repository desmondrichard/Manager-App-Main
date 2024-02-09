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

    if (!values.playerName) {
        errors.playerName = "*Required";
    }
    else if (!/^[a-zA-Z]{3,10}$/.test(values.playerName)) {
        errors.playerName = "First name should be between 3 to 10 characters long or only letters allowed";
    }

    if (!/^[a-zA-Z]{0,10}$/.test(values.middleName)) {
        errors.middleName = "Middle name should be maximum 10 characters long or only letters allowed";
    }

    if (!values.lastName) {
        errors.lastName = "*Required";
    }
    else if (!/^[a-zA-Z]{3,10}$/.test(values.lastName)) {
        errors.lastName = "Last Name should be between 3 to 10 characters long or only letters allowed";
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

    if (!values.displayName) {
        errors.displayName = "*Required";
    }
    else if (!/^[a-zA-Z]{3,10}$/.test(values.displayName)) {
        errors.displayName = 'Display Name must be alphanumeric and have length between 3 to 10 or only letters allowed'
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

    if (!values.dateOfBirth) {
        errors.dateOfBirth = "*Required";
    }

    if (!values.bloodGroup) {
        errors.bloodGroup = "*Required";
    }

    if (!values.emailId) {
        errors.emailId = "*Required";
    }
    else if (!/^\S+@\S+\.\S+$/.test(values.emailId)) {
        errors.emailId = "*Invalid email address";
    }

    return errors;
}


function PersonalInformation({ activationKey, onActivationKeyChild }) {

    const navigate = useNavigate();
    const [mobileValue, setMobileValue] = useState(false);
    const [imageValue, setImageValue] = useState(false);
    // const [imageValue,setImageValue]=useState(false);

    // next btn:
    const [childNextKey, setChildNextKey] = useState("1");

    // reset form start: 
    const firstNameReset = useRef("");
    const middleNameReset = useRef("");
    const lastNameReset = useRef("");
    const initialsReset = useRef("");
    const displayNameReset = useRef("");
    const fathersNameReset = useRef("");
    const mothersNameReset = useRef("");
    const dobReset = useRef("");
    const bloodgrpReset = useRef("");
    const emailReset = useRef("");
    const genderMaleReset = useRef(false);
    const genderFemaleReset = useRef(false);


    // for npm custom component dont use useRef instead use useState i.e for phone component
    function handleReset() {
        firstNameReset.current.value = "";
        middleNameReset.current.value = "";
        lastNameReset.current.value = "";
        initialsReset.current.value = "";
        displayNameReset.current.value = "";
        fathersNameReset.current.value = "";
        mothersNameReset.current.value = "";
        dobReset.current.value = "";
        bloodgrpReset.current.value = "none"; //since default or initial value in html code below is none
        setMobileValue(true);
        emailReset.current.value = "";
        genderMaleReset.current.checked = false;
        genderFemaleReset.current.checked = false;
        setImageValue(true);
        // console.log("Ref",genderMale);
        formik.resetForm();
    }
    // reset form end: 

    const formik = useFormik({
        initialValues: {
            playerName: '',
            middleName: '',
            lastName: '',
            initials: '',
            displayName: '',
            fatherName: '',
            motherName: '',
            dateOfBirth: '',
            bloodGroup: '',
            emailId: ''
        },
        validate,
        onSubmit: values => {
            alert('Clicked Next');
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
                                        id="playerName"
                                        type="text"
                                        placeholder="first name"
                                        // value={playerName}
                                        ref={firstNameReset}
                                        name="playerName"
                                        value={formik.values.playerName} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.playerName && formik.errors.playerName ? <span className='span'>{formik.errors.playerName}</span> : null
                                    }
                                    <label htmlFor="playerName" className='text-muted'>Player First Name*</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="middleName"
                                        type="text"
                                        placeholder="middle name"
                                        ref={middleNameReset}
                                        name="middleName"
                                        value={formik.values.middleName} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.middleName && formik.errors.middleName ? <span className='span'>{formik.errors.middleName}</span> : null
                                    }
                                    <label htmlFor="middleName" className='text-muted'>Player Middle Name</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="lastName"
                                        type="text"
                                        placeholder="last name"
                                        ref={lastNameReset}
                                        name="lastName"
                                        value={formik.values.lastName} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.lastName && formik.errors.lastName ? <span className='span'>{formik.errors.lastName}</span> : null
                                    }
                                    <label htmlFor="lastName" className='text-muted'>Player Last Name*</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="initials"
                                        type="text"
                                        placeholder="initials"
                                        ref={initialsReset}
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
                                        id="displayName"
                                        type="text"
                                        placeholder="display name"
                                        ref={displayNameReset}
                                        name="displayName"
                                        value={formik.values.displayName} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.displayName && formik.errors.displayName ? <span className='span'>{formik.errors.displayName}</span> : null
                                    }
                                    <label htmlFor="displayName" className='text-muted'>Display Name*</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="fatherName"
                                        type="text"
                                        placeholder="father name"
                                        ref={fathersNameReset}
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
                                        ref={mothersNameReset}
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
                                        id="dateOfBirth"
                                        type="date"
                                        ref={dobReset}
                                        placeholder='DD-MM-YYYY'
                                        min="1960-01-01" max="2008-12-31"
                                        name="dateOfBirth"
                                        value={formik.values.dateOfBirth} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.dateOfBirth && formik.errors.dateOfBirth ? <span className='span'>{formik.errors.dateOfBirth}</span> : null
                                    }
                                    <label htmlFor="dateOfBirth" className='text-muted'>Date of Birth*</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <FloatingLabel className='mb-2'
                                    controlId="bloodGroup"
                                    label="BloodGroup*"
                                    name="bloodGroup"
                                    value={formik.values.bloodGroup} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                >

                                    <Form.Select aria-label="bloodGroup" className='' ref={bloodgrpReset}>
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
                                        id="emailId"
                                        type="email"
                                        placeholder="email"
                                        ref={emailReset}
                                        name="emailId"
                                        value={formik.values.emailId} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.emailId && formik.errors.emailId ? <span className='span'>{formik.errors.emailId}</span> : null
                                    }
                                    <label htmlFor="emailId" className='text-muted'>Email Address*</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='d-flex justify-content-center pt-3 col'>
                                <label className='text-muted me-2' htmlFor="gender">Gender:</label>
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3" style={{ whiteSpace: 'nowrap' }}>
                                        <Form.Check
                                            inline
                                            label="Male"
                                            name="Male"
                                            type={type}
                                            id={`inline-${type}-Male`}
                                            // defaultChecked={true}
                                            ref={genderMaleReset}
                                        />
                                        <Form.Check
                                            inline
                                            label="Female"
                                            name="Male"
                                            type={type}
                                            id={`inline-${type}-Female`}
                                            // defaultChecked={false}
                                            ref={genderFemaleReset}
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