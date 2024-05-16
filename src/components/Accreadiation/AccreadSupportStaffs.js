import React, { useEffect, useRef, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Phone from './../offcanvas-body/Phone';
import { useFormik } from 'formik';
import axios from 'axios';

// validation:
const validate = values => {
    const errors = {};

    if (!values.StaffName) {
        errors.StaffName = "*Required";
    }
    else if (!/^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/.test(values.StaffName)) {
        errors.StaffName = "enter a valid name";
    }

    if (!values.StaffEmailId) {
        errors.StaffEmailId = "*Required";
    }
    else if (!/^^$|^.*@.*\..*$/.test(values.StaffEmailId)) {
        errors.StaffEmailId = "Invalid email address";
    }

    if (!values.StaffDesignation) {
        errors.StaffDesignation = "*Required";
    }

    if (!values.StaffMobilNo) {
        errors.StaffMobilNo = "*Required";
    }

    return errors;
}


function AccreadSupportStaffs({ activationKey, onChildNextActivationKey, onPreviousActivationKey }) {
    const [childNextKey, setChildNextKey] = useState("2");

//mobile clear
const [StaffMobilNo, setStaffMobilNo] = useState("null");
    const [mobValue, setMobValue] = useState(false);

    //reset:
    const name1 = useRef("");
    const desig1 = useRef("");
    const email1 = useRef("");
    const dutypass1 = useRef("");

    const [saveBtnClicked, setSaveBtnClicked] = useState(true)

    function handleReset() {
        name1.current.value = "";
        desig1.current.value = "none";
        email1.current.value = "";
        dutypass1.current.value = "none";
        setMobValue(true);
        setStaffMobilNo("")
        formik.resetForm();
    }

    // 

    const formik = useFormik({
        initialValues: {
            StaffName: '',
            StaffEmailId: '',
            StaffDesignation: '',
            StaffMobilNo: null
        },
        validate,
        onSubmit: (values, { setSubmitting }) => {
            const newValues = { ...values, StaffMobilNo }
            axios.post('http://192.168.1.135/Manager-App-API/register/AccreadiationStaff', newValues)
                .then(response => {
                    console.log(response.data);
                    onChildNextActivationKey(childNextKey);
                    console.log("newvalues", newValues)
                    setSubmitting(false);
                    setSaveBtnClicked(false)
                })
                .catch(error => {
                    console.error(error.message);
                    console.log("newvalues", newValues)
                    setSubmitting(false);
                });
        }
    });

    // alert(`clicked next`);
    // const newValues = { ...values,StaffMobilNo }
    // onChildNextActivationKey(childNextKey)
    // console.log("newvalues", newValues)
    // setSubmitting(false);

    //phone value:
    const Samp = (val) => {
        console.log("sample1", val)
        setStaffMobilNo(val);
        formik.setFieldValue('StaffMobilNo', val);// used to push value in formik dynamic child component else submit wont be enabled
        console.log("PlayersMobilNo", StaffMobilNo)
    }

    function Sample(val) {
        console.log("val", val);
        setMobValue(false);
    }

    const handlePreviousButton = () => {
        onPreviousActivationKey("0")
    }

    function handleSkip() {
        onChildNextActivationKey(childNextKey)
    }

    //mobile validation:
    const [errors, setErrors] = useState({});
    const validateForm = (validationErrors) => {
        setErrors(validationErrors);
    };

    function handleProgress() {
        console.log("formik values1", formik.values)
    }
    useEffect(() => {
        handleProgress();
    }, [formik.values])
    return (
        <div>
            <Card className='bg-light p-4'>
                <Form onSubmit={formik.handleSubmit}>
                    <Row className='fw-bold' style={{ fontSize: '16px' }}>
                        <Col xs={12} md={{ span: 4 }} className='py-3 c1'>
                            <Form.Floating className="mb-2">
                                <Form.Control
                                    id="StaffName"
                                    type="text"
                                    placeholder="name"
                                    ref={name1}
                                    name="StaffName"
                                    value={formik.values.StaffName} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                />
                                {
                                    formik.touched.StaffName && formik.errors.StaffName ? <span className='span'>{formik.errors.StaffName}</span> : null
                                }

                                <label htmlFor="StaffName" className='text-muted'>Name*</label>
                            </Form.Floating>
                        </Col>
                        <Col xs={12} md={4} className='py-3 c1'>
                            <FloatingLabel className='mb-2 c1'
                                controlId="StaffDesignation"
                                label="Designation*"
                                name="StaffDesignation"
                                value={formik.values.StaffDesignation} onChange={formik.handleChange} onBlur={formik.handleBlur}
                            >

                                <Form.Select aria-label="StaffDesignation" ref={desig1}>
                                    <option value='none'>Select Type</option>
                                    <option value="head of operation">Head of Operation</option>
                                    <option value="head coach">Head Coach</option>
                                </Form.Select>
                                {
                                    formik.touched.StaffDesignation && formik.errors.StaffDesignation ? <span className='span'>{formik.errors.StaffDesignation}</span> : null
                                }
                            </FloatingLabel>
                        </Col>
                        <Col xs={12} md={4} className='py-3 c1'>
                            <Phone isClear={mobValue} onValidate={validateForm} onChange={(e) => { formik.handleChange(e) }} samp={Samp} onActivateProgressBar={Sample} dynamicName="StaffMobilNo" value={StaffMobilNo}/>
                            {formik.touched.StaffMobilNo && formik.errors.StaffMobilNo ? (
                                <span className="span">{formik.errors.StaffMobilNo}</span>
                            ) : null}
                        </Col>

                        <Col xs={12} md={4} className='py-3 c1'>
                            <Form.Floating className="mb-2">
                                <Form.Control
                                    id="StaffEmailId"
                                    type="email"
                                    placeholder="email"
                                    ref={email1}
                                    name="StaffEmailId"
                                    value={formik.values.StaffEmailId} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                />
                                {
                                    formik.touched.StaffEmailId && formik.errors.StaffEmailId ? <span className='span'>{formik.errors.StaffEmailId}</span> : null
                                }
                                <label htmlFor="StaffEmailId" className='text-muted'>Email ID*</label>
                            </Form.Floating>
                        </Col>
                        <Col xs={12} md={4} className='py-3 c1'>
                            <FloatingLabel className='mb-2 c1'
                                controlId="dutypass"
                                label="Duty Pass"
                            >
                                <Form.Select aria-label="dutypass" ref={dutypass1}>
                                    <option value='none'>Select Type</option>
                                    <option value="year1">Yes</option>
                                    <option value="year2">No</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Col>

                    </Row>
                    <Row>
                        <Col className='end btns'>
                            <Button variant="dark" className='me-1' onClick={handlePreviousButton}>BACK</Button>
                            {saveBtnClicked && <Button variant="warning" className='me-1' style={{ color: 'white' }} onClick={() => handleReset()}>CLEAR</Button>}
                            {saveBtnClicked && <Button variant="success" className='me-1' type="submit" disabled={Object.keys(formik.errors).length > 0 || formik.values.name === ''}>SAVE AND NEXT</Button>}
                            <Button variant="info" className='mx-2' style={{ color: 'white' }} onClick={() => handleSkip()}>SKIP</Button>

                        </Col>

                    </Row>
                </Form>
            </Card>
        </div>
    )
}

export default AccreadSupportStaffs