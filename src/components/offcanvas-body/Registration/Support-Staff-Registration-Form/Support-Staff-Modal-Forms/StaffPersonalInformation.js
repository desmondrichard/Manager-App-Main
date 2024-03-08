import React, { useState, useEffect } from 'react';
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
import axios from 'axios';


// validation:
const validate = values => {
    const errors = {};

    if (!values.supportStaffName) {
        errors.supportStaffName = "*Required";
    }
    else if (!/^[a-zA-Z]{3,10}$/.test(values.supportStaffName)) {
        errors.supportStaffName = "First name should be between 3 to 10 characters long or only letters allowed";
    }

    if (!/^[a-zA-Z]{0,10}$/.test(values.middleName)) {
        errors.middleName = "Middle name should be maximum 10 characters long or only letters allowed";
    }

    if (!values.designation) {
        errors.designation = "*Required";
    }

    if (!values.specialization) {
        errors.specialization = "*Required";
    }

    if (!values.lastName) {
        errors.lastName = "*Required";
    }
    else if (!/^[a-zA-Z]{3,10}$/.test(values.lastName)) {
        errors.lastName = "Last Name should be between 3 to 10 characters long or only letters allowed";
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

    if (!values.mobileNo) {
        errors.mobileNo = "*Required";
    }

    return errors;
}

function StaffPersonalInformation({ activationKey, onActivationKeyChild }) {
    const [mobileValueClear, setMobileValueClear] = useState(false);//for clearing mobile no ..false-no clear

    //true-clear,false-not clear:
    const [imageValue, setImageValue] = useState(false);  //for clearing image after reset is clicked,false-no clear

    const [childNextKey, setChildNextKey] = useState("1");
    //
    const [errors, setErrors] = useState({});

    const validateForm = (validationErrors) => {
        setErrors(validationErrors);
    };
    const [count, setCount] = useState(0);


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
    const genderMaleReset = useRef(false);
    const genderFemaleReset = useRef(false);
    const desig = useRef("");
    const spec = useRef("");

    // progressbar:
    const [progress, setProgress] = useState(0);

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
        email.current.value = "";
        genderMaleReset.current.checked = false;
        genderFemaleReset.current.checked = false;
        desig.current.value = "none";
        spec.current.value = "none";
        setImageValue(true);//means clears the image
        setImageProgress("");
        setMobileValueClear(true);//means after reset clear field(clear-true)
        setPhoneProgress("");
        // console.log("Ref",genderMale);
        formik.resetForm();
        //after clicking reset btn progress bar should be 0:
        setProgress(0);
        // console.log("setprogress after reset", progress)
    }

    const formik = useFormik({
        initialValues: {
            supportStaffName: '',
            middleName: '',
            lastName: '',
            designation: '',
            specialization: '',
            initials: '',
            displayName: '',
            fatherName: '',
            motherName: '',
            dateOfBirth: '',
            bloodGroup: '',
            emailId: '',
            gender: '',
            mobileNo: null,
            year: '',
            team: ''
        },
        validate,
        onSubmit: (values, { setSubmitting }) => {
            const year = new Date().getFullYear();
            console.log("year", year)
            // const dateOfBirth = new Date(values.dateOfBirth);
            //const formattedDOB = `${dateOfBirth.getDate()}/${dateOfBirth.getMonth() + 1}/${dateOfBirth.getFullYear()}`;
            //values = { ...values, mobileNo, ImageData, dateOfBirth: formattedDOB }
            //Default year:

            values = { ...values, mobileNo,year:year }

            //converting to form-data  for sending data as multipart/form-data:
            const formData = new FormData();

            formData.append('supportStaffName', values.supportStaffName);
            formData.append('middleName', values.middleName);
            formData.append('lastName', values.lastName);
            formData.append('designation', values.designation);
            formData.append('specialization', values.specialization);
            formData.append('initials', values.initials);
            formData.append('displayName', values.displayName);
            formData.append('fatherName', values.fatherName);
            formData.append('motherName', values.motherName);
            formData.append('dateOfBirth', values.dateOfBirth);
            formData.append('bloodGroup', values.bloodGroup);
            formData.append('emailId', values.emailId);
            formData.append('mobileNo', values.mobileNo);
            formData.append('ImageData', ImageData);
            formData.append('team', values.team);
            formData.append('year', values.year);
            formData.append('gender', values.gender);

            axios.post('https://localhost:7097/api/playerimage/StaffTestingImage', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(response => {
                    console.log(response.data);
                    onActivationKeyChild(childNextKey)
                    console.log("newvalues", values)
                    setSubmitting(false);
                })
                .catch(error => {
                    console.error(error.message);
                    console.log("newvalues", values)
                    setSubmitting(false);
                });

        }
    });

    // alert(`Clicked next`);
    // onActivationKeyChild(childNextKey)
    // // console.log("values:", values)
    // console.log('newvalues', newValues)
    // setSubmitting(false);


    // Image base 64 value:
    const [ImageData, setImageData] = useState("");
    const dynamicImageNameFn = (val) => {
        console.log("valll", val)
        setImageData(val)
    }

    //phone value:
    const [mobileNo, setMobileNo] = useState(null);
    const Samp = (value) => {
        setMobileNo(value);
        formik.setFieldValue('mobileNo', value);// used to push value in formik dynamic child component
        console.log("phonevalue", mobileNo)

    }

    //Dynamic Image upload progress Bar:
    const [imgProgress, setImageProgress] = useState(0);

    function handleImageUploadProgress(value) {
        console.log("childtoparentImage", value);
        setImageProgress(value);
        setImageValue(false);  //to avoid image view issue after clicking reset btn  i.e after clicking reset button we setted imageValue as true (clear image) ,so now to reupload we set it back to false
    }

    //Dynamic phone progress Bar:
    const [phoneProgress, setPhoneProgress] = useState(0);
    function ActivateProgressBar(val) {
        console.log("childtoparentval: ", val);
        setPhoneProgress(val);//checking if value present or not
        setMobileValueClear(false);//if value is present  then clear the field  only after reset it clicked so made false-no clear again else it will be true always hence field cannot be cleared
    }

    //Progress Bar:

    function handleProgress() {
        //check form values or formik values:
        console.log("formik vals PersonalInfo:", formik.values);
        //set progress as 1 if current form field is filled else 0:  
        //get no of form vals filled by adding it inside a object:
        const result = countKeysWithNonEmptyValues(formik.values); //sending object as parameter which has all filled form fields count
        console.log(result);  //returned count is stored in result variable
        console.log("phoneprogress", phoneProgress);
        //adding dynamic fields: 
        const totalFilledFields = result + imgProgress;

        //calc formula
        let newProgress = ((totalFilledFields / 15) * 100).toFixed();
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
    }, [formik.values, phoneProgress, imgProgress]); // Ensure that the effect is triggered when form values change


    return (
        <Accordion.Item eventKey="0">
            <Accordion.Header><i className="bi bi-info-circle-fill me-1"></i><span style={{ fontWeight: '700' }}>PERSONAL INFORMATION </span><ProgressBarWithLabel progressValue={progress} /> </Accordion.Header>
            <Accordion.Body>
                <Container>
                    <p>{activationKey}</p>
                    <Form onSubmit={formik.handleSubmit}>
                        {/* {progress} */}
                        <Row>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="staffFName"
                                        type="text"
                                        placeholder="first name"
                                        name="supportStaffName"
                                        ref={firstName}
                                        value={formik.values.supportStaffName} onBlur={formik.handleBlur} onChange={(e) => { formik.handleChange(e) }}
                                    />
                                    {
                                        formik.touched.supportStaffName && formik.errors.supportStaffName ? <span className='span'>{formik.errors.supportStaffName}</span> : null
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
                                        name="middleName"
                                        ref={middleName}
                                        value={formik.values.middleName} onBlur={formik.handleBlur} onChange={(e) => { formik.handleChange(e) }}
                                    />
                                    {
                                        formik.touched.middleName && formik.errors.middleName ? <span className='span'>{formik.errors.middleName}</span> : null
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
                                        name="lastName"
                                        ref={lastName}
                                        value={formik.values.lastName} onBlur={formik.handleBlur} onChange={(e) => { formik.handleChange(e) }}
                                    />
                                    {
                                        formik.touched.lastName && formik.errors.lastName ? <span className='span'>{formik.errors.lastName}</span> : null
                                    }
                                    <label htmlFor="staffLName" className='text-muted'>Staff Last Name*</label>
                                </Form.Floating>
                            </Col>

                            <Col xs={12} lg={4} className='col'>
                                <FloatingLabel className='mb-2'
                                    controlId="designation"
                                    label="Designation*"
                                    name="designation"
                                    value={formik.values.designation} onBlur={formik.handleBlur} onChange={(e) => {
                                        formik.handleChange(e)
                                    }}>

                                    <Form.Select aria-label="designation" ref={desig} onChange={(e) => formik.setFieldValue('designation', e.target.value)}>
                                        <option value="none">Select Type</option>
                                        <option value="management">Management</option>
                                        <option value="coach">Coaching</option>
                                        <option value="analyst">Analyst</option>
                                        <option value="fitness">Fitness/Nutrition</option>
                                        <option value="medical">Medical</option>
                                        <option value="media">Media/PR</option>
                                        <option value="others">Others</option>
                                    </Form.Select>
                                    {
                                        formik.touched.designation && formik.errors.designation ? <span className='span'>{formik.errors.designation}</span> : null
                                    }
                                </FloatingLabel>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <FloatingLabel className='mb-2'
                                    controlId="specialization"
                                    label="specialization*"
                                    name="specialization"
                                    value={formik.values.specialization} onBlur={formik.handleBlur} onChange={(e) => { formik.handleChange(e) }}
                                >

                                    <Form.Select aria-label="specialization" ref={spec} disabled={formik.values.designation === 'none'}>
                                        <option value="none">Select Type</option>

                                        <option value="ceo" disabled={formik.values.designation !== 'management'}>CEO</option>
                                        <option value="manager" disabled={formik.values.designation !== 'management'}>Manager</option>
                                        <option value="headofoperations" disabled={formik.values.designation !== 'management'}>Head Of Operations</option>

                                        <option value="headcoach" disabled={formik.values.designation !== 'coach'}>Head Coach</option>
                                        <option value="battingcoach" disabled={formik.values.designation !== 'coach'}>Batting Coach</option>
                                        <option value="bowlingcoach" disabled={formik.values.designation !== 'coach'}>Bowling Coach</option>
                                        <option value="fieldingcoach" disabled={formik.values.designation !== 'coach'}>Fielding Coach</option>
                                        <option value="assistantcoach" disabled={formik.values.designation !== 'coach'}>Assistant Coach</option>

                                        <option value="videoanalyst" disabled={formik.values.designation !== 'analyst'}>Video Ananlyst</option>
                                        <option value="performanceanalyst" disabled={formik.values.designation !== 'analyst'}>Performance Analyst</option>
                                        <option value="dataanalyst" disabled={formik.values.designation !== 'analyst'}>Data Analyst</option>

                                        <option value="physio" disabled={formik.values.designation !== 'fitness'}>Physio</option>
                                        <option value="strength" disabled={formik.values.designation !== 'fitness'}>Strength & Conditioning</option>
                                        <option value="nutritionist" disabled={formik.values.designation !== 'fitness'}>Nutritionist</option>
                                        <option value="masseur" disabled={formik.values.designation !== 'fitness'}>Masseur</option>

                                        <option value="teamdoctor" disabled={formik.values.designation !== 'medical'}>Team Doctor</option>
                                        <option value="mentalcoach" disabled={formik.values.designation !== 'medical'}>Mental & Conditioning Coach</option>

                                        <option value="media" disabled={formik.values.designation !== 'media'}>Media Manager</option>
                                        <option value="pr" disabled={formik.values.designation !== 'media'}>PR Manager</option>

                                        <option value="others" disabled={formik.values.designation !== 'others'}>Others</option>

                                        {/* <option value="Fast" disabled={formik.values.bowlingstyle !== 'Fast'}>Fast</option> */}

                                    </Form.Select>
                                    {
                                        formik.touched.specialization && formik.errors.specialization ? <span className='span'>{formik.errors.specialization}</span> : null
                                    }
                                </FloatingLabel>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="staffintials"
                                        type="text"
                                        placeholder="initials"
                                        name="initials"
                                        ref={initials}
                                        value={formik.values.initials} onBlur={formik.handleBlur} onChange={(e) => { formik.handleChange(e) }}
                                    />
                                    {
                                        formik.touched.initials && formik.errors.initials ? <span className='span'>{formik.errors.initials}</span> : null
                                    }
                                    <label htmlFor="staffintials" className='text-muted'>Initials*</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="staffDisplayName"
                                        type="text"
                                        placeholder="display name"
                                        name="displayName"
                                        ref={displayName}
                                        value={formik.values.displayName} onBlur={formik.handleBlur} onChange={(e) => { formik.handleChange(e) }}
                                    />
                                    {
                                        formik.touched.displayName && formik.errors.displayName ? <span className='span'>{formik.errors.displayName}</span> : null
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
                                        name="fatherName"
                                        ref={fathersName}
                                        value={formik.values.fatherName} onBlur={formik.handleBlur} onChange={(e) => { formik.handleChange(e) }}
                                    />
                                    {
                                        formik.touched.fatherName && formik.errors.fatherName ? <span className='span'>{formik.errors.fatherName}</span> : null
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
                                        name="motherName"
                                        ref={mothersName}
                                        value={formik.values.motherName} onBlur={formik.handleBlur} onChange={(e) => { formik.handleChange(e) }}
                                    />
                                    {
                                        formik.touched.motherName && formik.errors.motherName ? <span className='span'>{formik.errors.motherName}</span> : null
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
                                        name="dateOfBirth"
                                        ref={dob}
                                        max="2008-12-31"
                                        value={formik.values.dateOfBirth} onBlur={formik.handleBlur} onChange={(e) => { formik.handleChange(e) }}
                                    />
                                    {
                                        formik.touched.dateOfBirth && formik.errors.dateOfBirth ? <span className='span'>{formik.errors.dateOfBirth}</span> : null
                                    }
                                    <label htmlFor="staffDob" className='text-muted'>Date of Birth*</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <FloatingLabel className='mb-2'
                                    controlId="bloodGroup"
                                    label="BloodGroup*"
                                    name="bloodGroup"
                                    value={formik.values.bloodGroup} onBlur={formik.handleBlur} onChange={(e) => { formik.handleChange(e) }}
                                >

                                    <Form.Select aria-label="bloodGroup" ref={bloodgrp}>
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
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="staffEmail"
                                        type="staffEmail"
                                        placeholder="email"
                                        name="emailId"
                                        ref={email}
                                        value={formik.values.emailId} onBlur={formik.handleBlur} onChange={(e) => { formik.handleChange(e) }}
                                    />
                                    {
                                        formik.touched.emailId && formik.errors.emailId ? <span className='span'>{formik.errors.emailId}</span> : null
                                    }
                                    <label htmlFor="staffEmail" className='text-muted'>Email Address*</label>
                                </Form.Floating>
                            </Col>

                            <Col className='col' lg={4}>
                                <Phone isClear={mobileValueClear} onValidate={validateForm} onChange={(e) => { formik.handleChange(e) }} onActivateProgressBar={ActivateProgressBar} samp={Samp} dynamicName="mobileNo" dynamicId="mobileId" />
                                {formik.touched.mobileNo && formik.errors.mobileNo ? (
                                    <span className="span">{formik.errors.mobileNo}</span>
                                ) : null}
                            </Col>

                            <Col xs={12} lg={4} className='d-flex justify-content-center pt-3 col'>
                                <label className='text-muted me-2' htmlFor="gender">Gender:</label>
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3" style={{ whiteSpace: 'nowrap' }} onChange={(e) => { formik.handleChange(e) }}>
                                        <Form.Check
                                            inline
                                            label="Male"
                                            name="gender"
                                            type={type}
                                            id={`inline-${type}-male`}
                                            // defaultChecked={true}
                                            ref={genderMaleReset}
                                            value="Male"
                                            style={{ marginRight: '-15px' }}
                                        />
                                        <Form.Check
                                            inline
                                            label="Female"
                                            name="gender"
                                            type={type}
                                            id={`inline-${type}-female`}
                                            ref={genderFemaleReset}
                                            value="Female"
                                            style={{ marginRight: '-30px' }}

                                        />
                                    </div>
                                ))}
                            </Col>

                            {/* Temporary Field: */}
                            <Col xs={12} lg={4} className='py-3 c1'>
                                <Form.Floating className="mb-2 mt-2">
                                    <Form.Control
                                        id="team"
                                        type="text"
                                        placeholder="name"
                                        name="team"
                                        value={formik.values.team} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.team && formik.errors.team ? <span className='span'>{formik.errors.team}</span> : null
                                    }
                                    <label htmlFor="PlayersName" className='text-muted'>Team Name</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={5} lg={2} className='col'>
                                <ImageUpload isClearImage={imageValue} onActivateProgressBar={handleImageUploadProgress} dynamicImageName={dynamicImageNameFn} />
                            </Col>
                            <Col xs={{ span: 6, offset: 1 }} lg={{ span: 9, offset: 1 }} className='d-flex align-items-center col'>
                                <Button variant="warning" style={{ color: "white", width: "130px" }} onClick={() => handleReset()}>CLEAR</Button>
                                <Button variant="success" className='mx-3' type="submit" style={{ whiteSpace: 'nowrap', width: '130px' }}>Save and Next</Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </Accordion.Body>
        </Accordion.Item>

    )
}

export default StaffPersonalInformation