import React, { useRef, useState } from 'react';
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

    if (!/^^$|^.*@.*\..*$/.test(values.StaffEmailId)) {
        errors.StaffEmailId = "Invalid email address";
    }

    return errors;
}


function AccreadSupportStaffs({ activationKey, onChildNextActivationKey, onPreviousActivationKey }) {
    const [childNextKey, setChildNextKey] = useState("2");
    const [mobValue, setMobValue] = useState(false);
    //reset:
    const name1 = useRef("");
    const desig1 = useRef("");
    const email1 = useRef("");
    const dutypass1 = useRef("");

    function handleReset() {
        name1.current.value = "";
        desig1.current.value = "";
        email1.current.value = "";
        dutypass1.current.value = "";
        setMobValue(true);
        formik.resetForm();
    }

    // 

    const formik = useFormik({
        initialValues: {
            StaffName: '',
            StaffEmailId: ''
        },
        validate,
        onSubmit: (values, { setSubmitting }) => {
            const newValues = { ...values, StaffMobilNo }
            axios.post('https://localhost:7097/register/AccreadiationStaff', newValues)
                .then(response => {
                    console.log(response.data);
                    onChildNextActivationKey(childNextKey);
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
    // const newValues = { ...values,StaffMobilNo }
    // onChildNextActivationKey(childNextKey)
    // console.log("newvalues", newValues)
    // setSubmitting(false);

    const [StaffMobilNo, setStaffMobilNo] = useState("");
    const Samp = (s) => {
        console.log("sample1", s)
        setStaffMobilNo(s);
        console.log("PlayersMobilNo", StaffMobilNo)
    }
    function Sample() {
        console.log("hi")
    }

    const handlePreviousButton = () => {
        onPreviousActivationKey("0")
    }

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
                                label="Designation"
                                name="StaffDesignation"
                                value={formik.values.StaffName} onChange={formik.handleChange}

                            >
                                <Form.Select aria-label="StaffDesignation" ref={desig1}>
                                    <option value='none'>Select Type</option>
                                    <option value="head of operation">Head of Operation</option>
                                    <option value="head coach">Head Coach</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Col>
                        <Col xs={12} md={4} className='py-3 c1'>
                            <Phone isClear={mobValue} onChange={(e) => { formik.handleChange(e) }} samp={Samp} dynamicName="StaffMobilNo" onActivateProgressBar={Sample} />
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
                                <label htmlFor="StaffEmailId" className='text-muted'>Email ID</label>
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
                            <Button variant="warning" className='me-1' style={{ color: 'white' }} onClick={() => handleReset()}>CLEAR</Button>
                            <Button variant="success" className='me-1' type="submit" disabled={Object.keys(formik.errors).length > 0 || formik.values.name === ''}>SAVE AND NEXT</Button>

                        </Col>

                    </Row>
                </Form>
            </Card>
        </div>
    )
}

export default AccreadSupportStaffs