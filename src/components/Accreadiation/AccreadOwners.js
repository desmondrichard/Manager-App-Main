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

    if (!values.OwnerName) {
        errors.OwnerName = "*Required";
    }
    else if (!/^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/.test(values.OwnerName)) {
        errors.OwnerName = "enter a valid name";
    }

    if (!values.OwnerEmailId) {
        errors.OwnerEmailId = "*Required";
    }
    else if (!/^^$|^.*@.*\..*$/.test(values.OwnerEmailId)) {
        errors.OwnerEmailId = "Invalid email address";
    }

    if (!values.OwnerDesignation) {
        errors.OwnerDesignation = "*Required";
    }

    if (!values.OwnerMobilNo) {
        errors.OwnerMobilNo = "*Required";
    }



    return errors;
}

function AccreadOwners({ activationKey, onChildNextActivationKey, onPreviousActivationKey }) {
    const [childNextKey, setChildNextKey] = useState("3");

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

    const formik = useFormik({
        initialValues: {
            OwnerName: '',
            OwnerEmailId: '',
            OwnerDesignation: '',
            OwnerMobilNo: null,
        },
        validate,
        onSubmit: (values, { setSubmitting }) => {
            const newValues = { ...values, OwnerMobilNo }
            axios.post('https://localhost:7097/register/OwnersManagement', newValues)
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

    // alert(`Hello! ,${values.name} you have successfully signed up`);
    // const newValues = { ...values, OwnerMobilNo }
    // onChildNextActivationKey(childNextKey)
    // console.log("newvalues", newValues)
    // setSubmitting(false);

    const handlePreviousButton = () => {
        onPreviousActivationKey("1")
    }

    const [OwnerMobilNo, setOwnerMobilNo] = useState(null);
    const Samp = (value) => {
        console.log("sample1", value)
        setOwnerMobilNo(value);
        formik.setFieldValue('OwnerMobilNo', value);// used to push value in formik dynamic child component else submit wont be enabled
        console.log("PlayersMobilNo", OwnerMobilNo)
    }
    function Sample(val) {
        console.log(val)
        setMobValue(false)

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
                                    id="OwnerName"
                                    type="text"
                                    placeholder="name"
                                    ref={name1}
                                    name="OwnerName"
                                    value={formik.values.OwnerName} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                />
                                {
                                    formik.touched.OwnerName && formik.errors.OwnerName ? <span className='span'>{formik.errors.OwnerName}</span> : null
                                }
                                <label htmlFor="OwnerName" className='text-muted'>Name*</label>
                            </Form.Floating>
                        </Col>
                        <Col xs={12} md={4} className='py-3 c1'>
                            <FloatingLabel className='mb-2 c1'
                                controlId="OwnerDesignation"
                                label="Designation*"
                                name="OwnerDesignation"
                                value={formik.values.OwnerDesignation} onChange={formik.handleChange} onBlur={formik.handleBlur}

                            >
                                <Form.Select aria-label="OwnerDesignation" ref={desig1}>
                                    <option value='none'>Select Type</option>
                                    <option value="owner">Owner</option>
                                </Form.Select>
                                {
                                    formik.touched.OwnerDesignation && formik.errors.OwnerDesignation ? <span className='span'>{formik.errors.OwnerDesignation}</span> : null
                                }
                            </FloatingLabel>
                        </Col>
                        <Col xs={12} md={4} className='py-3 c1'>
                            <Phone isClear={mobValue} onValidate={validateForm} onChange={(e) => { formik.handleChange(e) }} samp={Samp} dynamicName="OwnerMobilNo" onActivateProgressBar={Sample} />

                            {formik.touched.OwnerMobilNo && formik.errors.OwnerMobilNo ? (
                                <span className="span">{formik.errors.OwnerMobilNo}</span>
                            ) : null}
                        </Col>
                        <Col xs={12} md={4} className='py-3 c1'>
                            <Form.Floating className="mb-2">
                                <Form.Control
                                    id="OwnerEmailId"
                                    type="email"
                                    placeholder="email"
                                    ref={email1}
                                    name="OwnerEmailId"
                                    value={formik.values.OwnerEmailId} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                />
                                {
                                    formik.touched.OwnerEmailId && formik.errors.OwnerEmailId ? <span className='span'>{formik.errors.OwnerEmailId}</span> : null
                                }
                                <label htmlFor="OwnerEmailId" className='text-muted'>Email ID*</label>
                            </Form.Floating>
                        </Col>
                        <Col xs={12} md={4} className='py-3 c1'>
                            <FloatingLabel className='mb-2 c1'
                                controlId="dutypass"
                                label="Duty Pass"
                            >
                                <Form.Select aria-label="dutypass" ref={dutypass1}>
                                    <option>Select Type</option>
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

export default AccreadOwners