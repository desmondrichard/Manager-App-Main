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

    if (!values.OfficialName) {
        errors.OfficialName = "*Required";
    }
    else if (!/^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/.test(values.OfficialName)) {
        errors.OfficialName = "enter a valid name";
    }

    if (!values.OfficialEmailId) {
        errors.OfficialEmailId = "*Required";
    }
    else if (!/^^$|^.*@.*\..*$/.test(values.OfficialEmailId)) {
        errors.OfficialEmailId = "Invalid email address";
    }

    if (!values.OfficialDesignation) {
        errors.OfficialDesignation = "*Required";
    }

    if (!values.OfficialMobilNo) {
        errors.OfficialMobilNo = "*Required";
    }

    return errors;
}


function AccreadFranchiseOfficials({ activationKey, onChildNextActivationKey, onPreviousActivationKey }) {
    const [childNextKey, setChildNextKey] = useState("4");

    //mobile clear:
    const [OfficialMobilNo, setOfficialMobilNo] = useState("");
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
        setOfficialMobilNo("");
        formik.resetForm();
    }

    const formik = useFormik({
        initialValues: {
            OfficialName: '',
            OfficialEmailId: '',
            OfficialDesignation: '',
            OfficialMobilNo: null
        },
        validate,
        onSubmit: (values, { setSubmitting }) => {
            const newValues = { ...values, OfficialMobilNo }
            axios.post('https://localhost:7097/register/FrnciseOfficials', newValues)
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


    // alert(`clecked next`);
    // const newValues = { ...values, OfficialMobilNo }
    // onChildNextActivationKey(childNextKey)
    // console.log("newvalues",newValues)
    // setSubmitting(false);

    const handlePreviousButton = () => {
        onPreviousActivationKey("2")
    }
    //

    const Samp = (val) => {
        console.log("sample1", val)
        setOfficialMobilNo(val);
        formik.setFieldValue('OfficialMobilNo', val);// used to push value in formik dynamic child component else submit wont be enabled
        console.log("OfficialMobilNo", OfficialMobilNo)
    }
    function Sample(val) {
        console.log(val)
        setMobValue(false)

    }

    function handleSkip() {
        onChildNextActivationKey(childNextKey);
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
                                    id="OfficialName"
                                    type="text"
                                    placeholder="name"
                                    ref={name1}
                                    name="OfficialName"
                                    value={formik.values.OfficialName} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                />
                                {
                                    formik.touched.OfficialName && formik.errors.OfficialName ? <span className='span'>{formik.errors.OfficialName}</span> : null
                                }

                                <label htmlFor="OfficialName" className='text-muted'>Name*</label>
                            </Form.Floating>
                        </Col>
                        <Col xs={12} md={4} className='py-3 c1'>
                            <FloatingLabel className='mb-2 c1'
                                controlId="OfficialDesignation"
                                label="Designation*"
                                name="OfficialDesignation"
                                value={formik.values.OfficialDesignation} onChange={formik.handleChange} onBlur={formik.handleBlur}

                            >
                                <Form.Select aria-label="OfficialDesignation" ref={desig1}>
                                    <option>Select Type</option>
                                    <option value="franchise officials">Franchise Officials</option>
                                </Form.Select>
                                {
                                    formik.touched.OfficialDesignation && formik.errors.OfficialDesignation ? <span className='span'>{formik.errors.OfficialDesignation}</span> : null
                                }
                            </FloatingLabel>
                        </Col>
                        <Col xs={12} md={4} className='py-3 c1'>
                            <Phone isClear={mobValue} onValidate={validateForm} onChange={(e) => { formik.handleChange(e) }} samp={Samp} dynamicName="OfficialMobilNo" onActivateProgressBar={Sample} value={OfficialMobilNo} />
                        </Col>
                        <Col xs={12} md={4} className='py-3 c1'>
                            <Form.Floating className="mb-2">
                                <Form.Control
                                    id="OfficialEmailId"
                                    type="email"
                                    placeholder="email"
                                    ref={email1}
                                    name="OfficialEmailId"
                                    value={formik.values.OfficialEmailId} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                />
                                {
                                    formik.touched.OfficialEmailId && formik.errors.OfficialEmailId ? <span className='span'>{formik.errors.OfficialEmailId}</span> : null
                                }
                                <label htmlFor="OfficialEmailId" className='text-muted'>Email ID*</label>
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
                            <Button variant="dark" className='mx-2' onClick={handlePreviousButton}>BACK</Button>
                            {saveBtnClicked && <Button variant="warning" className='mx-2' style={{ color: 'white' }} onClick={() => handleReset()}>CLEAR</Button>}
                            {saveBtnClicked && <Button variant="success" className='mx-2' type='submit' disabled={Object.keys(formik.errors).length > 0 || formik.values.name === ''} >SAVE AND NEXT</Button>}
                            <Button variant="info" className='mx-2' style={{ color: 'white' }} onClick={handleSkip}>SKIP</Button>

                        </Col>

                    </Row>
                </Form>
            </Card>
        </div>
    )
}

export default AccreadFranchiseOfficials