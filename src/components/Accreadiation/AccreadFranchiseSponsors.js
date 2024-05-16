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
import { useNavigate } from 'react-router-dom'
// 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';

// validation:
const validate = values => {
    const errors = {};

    if (!values.SponsorName) {
        errors.SponsorName = "*Required";
    }
    else if (!/^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/.test(values.SponsorName)) {
        errors.SponsorName = "enter a valid name";
    }

    if (!values.SponsorEmailId) {
        errors.SponsorEmailId = "*Required";
    }
    else if (!/^^$|^.*@.*\..*$/.test(values.SponsorEmailId)) {
        errors.SponsorEmailId = "Invalid email address";
    }

    if (!values.SponsorDesignation) {
        errors.SponsorDesignation = "*Required";
    }

    if (!values.SponsorMobilNo) {
        errors.SponsorMobilNo = "*Required";
    }


    return errors;
}



function AccreadFranchiseSponsors({ activationKey, onPreviousActivationKey }) {
    const navigate = useNavigate()

    //mobile clear:
    const [SponsorMobilNo, setSponsorMobilNo] = useState("");
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
        setSponsorMobilNo("");
        formik.resetForm();
    }

    const formik = useFormik({
        initialValues: {
            SponsorName: '',
            SponsorEmailId: '',
            SponsorDesignation: '',
            SponsorMobilNo: null
        },
        validate,
        onSubmit: (values, { setSubmitting }) => {
            const newValues = { ...values, SponsorMobilNo }
            axios.post('http://192.168.1.135/Manager-App-API/register/FranciseSponsors', newValues)
                .then(response => {
                    console.log(response.data);
                    console.log("newvalues", newValues)
                    setSubmitting(false);
                    setSaveBtnClicked(false)
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Data Successfully saved",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/accreadiationcards')
                })
                .catch(error => {
                    console.error(error.message);
                    console.log("newvalues", newValues)
                    setSubmitting(false);
                    Swal.fire({
                        title: "Oops",
                        text: "Somthing went wrong?",
                        icon: "error"
                    });
                    navigate('/accreadiationcards')
                });
        }
    });

    // const newValues = { ...values, SponsorMobilNo }
    // console.log("newvalues", newValues)
    // setSubmitting(false);
    // notify();

    const handlePreviousButton = () => {
        onPreviousActivationKey("3")
    }


    //Toast msg:
    // const notify = () => {
    //     toast.success("Form is Successfully Submitted!", {
    //         position: toast.POSITION.TOP_CENTER // or 'BOTTOM_CENTER'
    //     });
    // }


    const Samp = (val) => {
        console.log("sample1", val)
        setSponsorMobilNo(val);
        formik.setFieldValue('SponsorMobilNo', val);// used to push value in formik dynamic child component else submit wont be enabled
        console.log("SponsorMobilNo", SponsorMobilNo)
    }

    function Sample(val) {
        console.log(val);
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
                                    id="SponsorName"
                                    type="text"
                                    placeholder="name"
                                    ref={name1}
                                    name="SponsorName"
                                    value={formik.values.SponsorName} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                />
                                {
                                    formik.touched.SponsorName && formik.errors.SponsorName ? <span className='span'>{formik.errors.SponsorName}</span> : null
                                }
                                <label htmlFor="SponsorName" className='text-muted'>Name*</label>
                            </Form.Floating>
                        </Col>
                        <Col xs={12} md={4} className='py-3 c1'>
                            <FloatingLabel className='mb-2 c1'
                                controlId="SponsorDesignation"
                                label="Designation*"
                                name="SponsorDesignation"
                                value={formik.values.SponsorDesignation} onChange={formik.handleChange} onBlur={formik.handleBlur}

                            >
                                <Form.Select aria-label="designation" ref={desig1}>
                                    <option value='none'>Select Type</option>
                                    <option value="franchise/sponsors">Franchise/Sponsors</option>
                                </Form.Select>
                                {
                                    formik.touched.SponsorDesignation && formik.errors.SponsorDesignation ? <span className='span'>{formik.errors.SponsorDesignation}</span> : null
                                }
                            </FloatingLabel>
                        </Col>

                        <Col xs={12} md={4} className='py-3 c1'>
                            <Phone isClear={mobValue} onValidate={validateForm} onChange={(e) => { formik.handleChange(e) }} samp={Samp} dynamicName="SponsorMobilNo" onActivateProgressBar={Sample} value={SponsorMobilNo} />
                        </Col>
                        <Col xs={12} md={4} className='py-3 c1'>
                            <Form.Floating className="mb-2">
                                <Form.Control
                                    id="SponsorEmailId"
                                    type="email"
                                    placeholder="email"
                                    ref={email1}
                                    name="SponsorEmailId"
                                    value={formik.values.SponsorEmailId} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                />
                                {
                                    formik.touched.SponsorEmailId && formik.errors.SponsorEmailId ? <span className='span'>{formik.errors.SponsorEmailId}</span> : null
                                }
                                <label htmlFor="SponsorEmailId" className='text-muted'>Email ID*</label>
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
                        <Col className='text-end btns'>
                            <Button variant="dark" className='mx-2' onClick={handlePreviousButton}>BACK</Button>
                            {saveBtnClicked && <Button variant="warning" className='mx-2' style={{ color: 'white' }} onClick={() => handleReset()}>CLEAR</Button>}
                            {saveBtnClicked && <Button variant="success" className='mx-2' type="submit" disabled={Object.keys(formik.errors).length > 0 || formik.values.name === ''} >SAVE </Button>}
                            <ToastContainer />
                        </Col>

                    </Row>
                </Form>
            </Card>
        </div>
    )
}

export default AccreadFranchiseSponsors