import React, { useState, useEffect } from 'react';
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
import ProgressBarWithLabel from '../ProgressBarWithLabel';
import axios from 'axios';

// validation:
const validate = values => {
    const errors = {};

    if (!values.playerName) {
        errors.playerName = "*Required";
    }
    else if (!/^[a-zA-Z\s]{3,25}$/.test(values.playerName)) {
        errors.playerName = "First name should be between 3 to 25 characters long or only letters allowed";
    }

    if (!/^[a-zA-Z\s]{0,25}$/.test(values.middleName)) {
        errors.middleName = "Middle name should be maximum 25 characters long or only letters allowed";
    }

    if (!values.lastName) {
        errors.lastName = "*Required";
    }
    else if (!/^[a-zA-Z\s]{3,25}$/.test(values.lastName)) {
        errors.lastName = "Last Name should be between 3 to 25 characters long or only letters allowed";
    }

    if (!values.bloodGroup) {
        errors.bloodGroup = "*Required";
    }

    if (!values.initials) {
        errors.initials = "*Required";
    }
    else if (!/^[a-zA-Z_\-.]{0,5}$/.test(values.initials)) {
        errors.initials = "Invalid Initial"
    }

    if (!values.displayName) {
        errors.displayName = "*Required";
    }
    else if (!/^[a-zA-Z_\-.\s]{3,30}$/.test(values.displayName)) {
        errors.displayName = 'Display Name must be alphanumeric and have length between 3 to 30 or only letters allowed'
    }

    if (!values.fatherName) {
        errors.fatherName = "*Required";
    }
    else if (!/^[a-zA-Z_\-.\s]{3,30}$/.test(values.fatherName)) {
        errors.fatherName = "Father Name should be maximum 30 characters long or only letters allowed";
    }

    if (!/^[a-zA-Z_\-.\s]{0,30}$/.test(values.motherName)) {
        errors.motherName = "Mother Name should be maximum 30 characters long or only letters allowed"
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
    else if (!/^([a-zA-Z][\w+-]+(?:\.\w+)?)@([\w-]+(?:\.[a-zA-Z]{2,10})+)$/.test(values.emailId)) {
        errors.emailId = "*Invalid email address";

    }

    if (!values.mobileNo) {
        errors.mobileNo = "*Required";
    }

    // if (!values.secondNumber) {  
    //     errors.secondNumber = "*Required";
    // }

    return errors;
}


function PersonalInformation({ activationKey, onActivationKeyChild, showPutData, showSaveBtn, showClearBtn, previousClk, showSkipBtn, updateClicked, clearImageInPost }) {
    const [mobileValueClear, setMobileValueClear] = useState(false);//for clearing mobile no ..false-no clear
    const [mobileValueClear1, setMobileValueClear1] = useState(false);//for clearing mobile no ..false-no clear

    const navigate = useNavigate();
    // const [mobileValue, setMobileValue] = useState(false);
    const [imageValue, setImageValue] = useState(false);
    // const [imageValue,setImageValue]=useState(false);

    //m:
    const [phNo, setphNo] = useState("");
    const [secondPhNo, setSecondPhNo] = useState("");


    // next btn:
    const [childNextKey, setChildNextKey] = useState("1");

    //
    const [errors, setErrors] = useState({});
    const validateForm = (validationErrors) => {
        setErrors(validationErrors);
    };

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
        emailReset.current.value = "";
        genderMaleReset.current.checked = false;
        genderFemaleReset.current.checked = false;
        setImageProgress("");
        setImageValue(true);
        setMobileValueClear(true);
        setMobileValueClear1(true);
        setPhoneProgress("");
        formik.resetForm();
        setProgress(0);
        //m:
        setphNo("")
        formik.setFieldValue('mobileNo', "");

        setSecondPhNo("")
        formik.setFieldValue('secondNumber', "");
    }
    // reset form end: 

    //m:
    useEffect(() => {
        if (showPutData.mobileNo) {
            setphNo(showPutData.mobileNo)
        }
        if (showPutData.secondNumber) {
            setSecondPhNo(showPutData.secondNumber)
        }

    }, [])


    const [initialValues, setInitialValues] = useState({
        playerName: '',
        middleName: '',
        lastName: '',
        initials: '',
        displayName: '',
        fatherName: '',
        motherName: '',
        dateOfBirth: '',
        bloodGroup: '',
        emailId: '',
        gender: '',
        secondNumber: null,
        mobileNo: null,
        team: '',
        year: ''
    })
    const formik = useFormik({
        initialValues: initialValues,
        validate,
        onSubmit: (values, { setSubmitting }) => {
            //Default year:
            const year = new Date().getFullYear();
            console.log("year", year)
            // const dateOfBirth = new Date(values.dateOfBirth);
            //const formattedDOB = `${dateOfBirth.getDate()}/${dateOfBirth.getMonth() + 1}/${dateOfBirth.getFullYear()}`;
            //values = { ...values, mobileNo, ImageData, dateOfBirth: formattedDOB }

            values = { ...values, secondNumber, ImageData, year: year }

            const formData = new FormData();
            // Append form data fields
            formData.append('playerName', values.playerName);
            formData.append('middleName', values.middleName);
            formData.append('lastName', values.lastName);
            formData.append('initials', values.initials);
            formData.append('displayName', values.displayName);
            formData.append('fatherName', values.fatherName);
            formData.append('motherName', values.motherName);
            formData.append('dateOfBirth', values.dateOfBirth);
            formData.append('bloodGroup', values.bloodGroup);
            formData.append('emailId', values.emailId);
            formData.append('gender', values.gender);
            formData.append('mobileNo', values.mobileNo);
            formData.append('secondNumber', values.secondNumber);
            formData.append('ImageData', values.ImageData);
            formData.append('team', values.team);
            formData.append('year', values.year);

            axios.post('https://localhost:7097/PersonalInformations', formData, {
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

    // console.log("formattedDate",formattedDOB)
    // alert('Clicked Next');
    // onActivationKeyChild(childNextKey)
    // console.log('newvalues', newValues)
    // setSubmitting(false);

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
        setMobileValueClear1(false);//if value is present  then clear the field  only after reset it clicked so made false-no clear again else it will be true always hence field cannot be cleared
    }

    // progress Bar for static fields:
    const [progress, setProgress] = useState(0);
    function handleProgress() {
        console.log("formik values1", formik.values)
        const result = countKeysWithNonEmptyValues(formik.values);
        console.log("result for formik values:", result)
        const totalFilledFields = result + imgProgress;

        //calc formula
        let newProgress = ((totalFilledFields / 15) * 100).toFixed();
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

    // Image base 64 value:
    const [ImageData, setImageData] = useState("");
    const dynamicImageNameFn = (val) => {
        // console.log("valll", val)
        //to unslice: data:image/png;base64,
        // val = val.slice(23)  //sliced  to remove data:image/png;base64 and to display from /9j.....
        // console.log('sliced Val', val)
        setImageData(val)
    }

    //1st number phone value:
    // const [mobileNo, setMobileNo] = useState(null);
    const Samp = (value) => {
        // setMobileNo(value);
        formik.setFieldValue('mobileNo', value);// used to push value in formik dynamic child component else submit wont be enabled
        // console.log("phonevalue", mobileNo)
        //m:
        setphNo(value)
    }

    //2nd number phone value:
    const [secondNumber, setsecondNumber] = useState(null);
    const Samp1 = (value) => {
        setsecondNumber(value);
        formik.setFieldValue('secondNumber', value);// used to push value in formik dynamic child component else submit wont be enabled
        console.log("phone2value", secondNumber)
        setSecondPhNo(value)
    }

    function handleSkip() {
        onActivationKeyChild(childNextKey)
    }

    //update:
    const [initialValuesLoaded, setInitialValuesLoaded] = useState(false);//for loading initial values
    console.log('showPutDataPlayerPersonal', showPutData)
    console.log('updateMethodDataIDPlayer:', showPutData.alldataplayerId)

    function handleUpdate() {
        // alert("update executed");
        console.log("formikVals", formik.values, ImageData)

        const formData = new FormData();
        formData.append('playerName', formik.values.playerName);
        formData.append('middleName', formik.values.middleName);
        formData.append('lastName', formik.values.lastName);
        formData.append('initials', formik.values.initials);
        formData.append('displayName', formik.values.displayName);
        formData.append('fatherName', formik.values.fatherName);
        formData.append('motherName', formik.values.motherName);
        formData.append('dateOfBirth', formik.values.dateOfBirth);
        formData.append('bloodGroup', formik.values.bloodGroup);
        formData.append('emailId', formik.values.emailId);
        formData.append('mobileNo', formik.values.mobileNo);
        formData.append('secondNumber', formik.values.secondNumber)
        formData.append('ImageData', ImageData);
        formData.append('team', formik.values.team);
        formData.append('year', formik.values.year);
        formData.append('gender', formik.values.gender);

        console.log("form", formData)
        //const newValues = { ...formik.values, secondNumber };

        axios.put(`https://localhost:7097/PlayersTestingImage/${showPutData.alldataplayerId}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((response) => {
                if (response.status === 200) {
                    console.log("Updation Data: ", response.data);
                    onActivationKeyChild(childNextKey); //to navigate to next tab

                } else {
                    console.log("Unexpected response status: ", response.status);
                }
            })
            .catch((error) => {
                if (error.response && error.response.data) {
                    console.log("Error Updating User: ", error.response.data);
                } else {
                    console.log("Error Updating User: ", error.message);
                }

            });
    }

    useEffect(() => {
        setInitialValues({
            playerName: showPutData.playerName,
            middleName: showPutData.middleName,
            lastName: showPutData.lastName,
            designation: showPutData.designation,
            specialization: showPutData.specialization,
            initials: showPutData.initials,
            displayName: showPutData.displayName,
            fatherName: showPutData.fatherName,
            motherName: showPutData.motherName,
            dateOfBirth: showPutData.dateOfBirth,
            bloodGroup: showPutData.bloodGroup,
            emailId: showPutData.emailId,
            gender: showPutData.gender,
            mobileNo: showPutData.mobileNo,
            secondNumber: showPutData.secondNumber,
            year: showPutData.year,
            team: showPutData.team,
            imageData: showPutData.imageData
        });
        setInitialValuesLoaded(true);
        if (showPutData.mobileNo) {
            setMobileValueClear(false);
        }

        //added:
        if (showPutData.imageData) {
            setImageValue(false);
        }
    }, [showPutData]);

    useEffect(() => {
        if (initialValuesLoaded) {
            formik.setValues(initialValues);
        }
    }, [initialValuesLoaded]);


    useEffect(() => {
        handleProgress();
    }, [formik.values, phoneProgress, imgProgress])

    // handleProgress();
    return (

        <Accordion.Item eventKey="0">
            <Accordion.Header><i className="bi bi-info-circle-fill me-1"></i><span style={{ fontWeight: '700' }}>PERSONAL INFORMATION</span><ProgressBarWithLabel progressValue={progress} /></Accordion.Header>
            <Accordion.Body>
                <Container>
                    {/* <p>{activationKey}</p> */}
                    <Form onSubmit={formik.handleSubmit}>
                        <Row>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="playerName"
                                        type="text"
                                        placeholder="first name"
                                        ref={firstNameReset}
                                        name="playerName"
                                        value={formik.values.playerName} onBlur={formik.handleBlur} onChange={(e) => {
                                            formik.setFieldValue('playerName', e.target.value.toUpperCase())
                                        }}
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
                                        value={formik.values.middleName} onBlur={formik.handleBlur} onChange={(e) => {
                                            formik.setFieldValue('middleName', e.target.value.toUpperCase())
                                        }}
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
                                        value={formik.values.lastName} onBlur={formik.handleBlur} onChange={(e) => {
                                            formik.setFieldValue('lastName', e.target.value.toUpperCase())
                                        }}
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
                                        value={formik.values.initials} onBlur={formik.handleBlur} onChange={(e) => {
                                            formik.setFieldValue('initials', e.target.value.toUpperCase())
                                        }}
                                    />
                                    {
                                        formik.touched.initials && formik.errors.initials ? <span className='span'>{formik.errors.initials}</span> : null
                                    }
                                    <label htmlFor="initials" className='text-muted'>Initials</label>
                                </Form.Floating>
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
                                            id={`inline-${type}-Male`}
                                            // defaultChecked={true}
                                            checked={formik.values.gender === 'Male'} //to preload in update request
                                            ref={genderMaleReset}
                                            value="Male"
                                            style={{ marginRight: '-25px' }}
                                        />
                                        <Form.Check
                                            inline
                                            label="Female"
                                            name="gender"
                                            type={type}
                                            id={`inline-${type}-Female`}
                                            // defaultChecked={false}
                                            checked={formik.values.gender === 'Female'}
                                            ref={genderFemaleReset}
                                            value="Female"
                                            style={{ marginRight: '-40px' }}
                                        />
                                    </div>
                                ))}
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="displayName"
                                        type="text"
                                        placeholder="display name"
                                        ref={displayNameReset}
                                        name="displayName"
                                        value={formik.values.displayName} onBlur={formik.handleBlur} onChange={(e) => {
                                            formik.setFieldValue('displayName', e.target.value.toUpperCase())
                                        }}
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
                                        value={formik.values.fatherName} onBlur={formik.handleBlur} onChange={(e) => {
                                            formik.setFieldValue('fatherName', e.target.value.toUpperCase())
                                        }}

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
                                        value={formik.values.motherName} onBlur={formik.handleBlur} onChange={(e) => {
                                            formik.setFieldValue('motherName', e.target.value.toUpperCase())
                                        }}
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
                                        // placeholder='DD-MM-YYYY'
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
                                >

                                    <Form.Select aria-label="bloodGroup" className='' ref={bloodgrpReset} value={formik.values.bloodGroup} onBlur={formik.handleBlur} onChange={(e) => formik.setFieldValue('bloodGroup', e.target.value)}>
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
                                {/* sent only particular phone value in value to Phone component since send entire data is throwing error */}
                                <Phone isClear={mobileValueClear} value={phNo} onValidate={validateForm} onChange={(data) => setphNo(data.target.name)} onActivateProgressBar={ActivateProgressBar} samp={Samp} dynamicName="mobileNo" dynamicId="mobileId"
                                />
                                {formik.touched.mobileNo && formik.errors.mobileNo ? (
                                    <span className="span">{formik.errors.mobileNo}</span>
                                ) : null}
                            </Col>
                            {/* second mobile */}
                            <Col xs={12} lg={4} className='col'>
                                <Phone isClear={mobileValueClear1} value={secondPhNo} onValidate={validateForm} onChange={(data) => setSecondPhNo(data.target.name)} onActivateProgressBar={ActivateProgressBar} samp={Samp1} dynamicName="secondNumber" dynamicId="secondNumberId"
                                />

                                {formik.touched.secondNumber && formik.errors.secondNumber ? (
                                    <span className="span">{formik.errors.secondNumber}</span>
                                ) : null}
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="emailId"
                                        type="email"
                                        placeholder="email"
                                        ref={emailReset}
                                        name="emailId"
                                        value={formik.values.emailId} onBlur={formik.handleBlur} onChange={(e) => {
                                            formik.setFieldValue('emailId', e.target.value.toUpperCase())
                                        }}
                                    />
                                    {
                                        formik.touched.emailId && formik.errors.emailId ? <span className='span'>{formik.errors.emailId}</span> : null
                                    }
                                    <label htmlFor="emailId" className='text-muted'>Email Address*</label>
                                </Form.Floating>
                            </Col>

                            <Col xs={5} lg={4} className='col'>
                                <ImageUpload isClearImage={imageValue} onActivateProgressBar={handleImageUploadProgress} dynamicImageName={dynamicImageNameFn} showPutData={showPutData} updateClicked={updateClicked} clearImageInPost={clearImageInPost} />
                            </Col>


                            {/* Temporary Field: */}
                            <Col xs={12} lg={4} className='pt-4 c1'>
                                <Form.Floating className="mb-5">
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
                            <Col xs={{ span: 6, offset: 1 }} lg={{ span: 9, offset: 1 }} className='d-flex align-items-center col'>
                                {console.log('previousClkPer', previousClk)}
                                {showClearBtn && <Button variant="warning" style={{ color: "white", width: "130px" }} onClick={() => handleReset()}>Clear</Button>}
                                {/* <Button variant="warning" style={{ color: "white", width: "130px" }} onClick={() => handleReset()}>CLEAR</Button> */}
                                {/*only when showSaveBtn is true saveandnext btn will be displayed:  */}
                                {!previousClk && showSaveBtn && <Button variant="success" className='mx-1' type="submit" style={{ whiteSpace: 'nowrap', width: '130px' }}>Save and Next</Button>}
                                {/* only when showSaveBtn is false update btn will be displayed: */}
                                {!showSaveBtn && <Button variant="info" className='mx-1 text-white' style={{ whiteSpace: 'nowrap', width: '130px' }} onClick={handleUpdate}>Update</Button>}
                                {console.log("previousClkBtn", previousClk, showSkipBtn)}
                                {(previousClk || showSkipBtn) && <Button variant="dark" style={{ whiteSpace: 'nowrap', width: '130px' }} onClick={handleSkip}>Skip</Button>}
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </Accordion.Body>
        </Accordion.Item>

    )
}

export default PersonalInformation