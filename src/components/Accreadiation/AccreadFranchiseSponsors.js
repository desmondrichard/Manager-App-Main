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
// 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// validation:
const validate = values => {
    const errors = {};

    if (!values.SponsorName) {
        errors.SponsorName = "*Required";
    }
    else if (!/^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/.test(values.SponsorName)) {
        errors.SponsorName = "enter a valid name";
    }

    if (!/^^$|^.*@.*\..*$/.test(values.SponsorEmailId)) {
        errors.SponsorEmailId = "Invalid email address";
    }

    return errors;
}



function AccreadFranchiseSponsors({ activationKey, onPreviousActivationKey }) {

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
            SponsorName: '',
            SponsorEmailId: ''
        },
        validate,
        onSubmit: (values, { setSubmitting }) => {
            const newValues = { ...values, SponsorMobilNo }
            axios.post('https://localhost:7097/register/FranciseSponsors', newValues)
                .then(response => {
                    console.log(response.data);
                    console.log("newvalues", newValues)
                    setSubmitting(false);
                    notify();
                })
                .catch(error => {
                    console.error(error.message);
                    console.log("newvalues", newValues)
                    setSubmitting(false);
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
    const notify = () => {
        toast.success("Form is Successfully Submitted!", {
            position: toast.POSITION.TOP_CENTER // or 'BOTTOM_CENTER'
        });
    }

    const [SponsorMobilNo, setSponsorMobilNo] = useState("");
    const Samp = (s) => {
        console.log("sample1", s)
        setSponsorMobilNo(s);
        console.log("PlayersMobilNo", SponsorMobilNo)
    }
    function Sample() {
        console.log("hi")
    }
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
                                label="Designation"
                                name="SponsorDesignation"
                                value={formik.values.SponsorDesignation} onChange={formik.handleChange}

                            >
                                <Form.Select aria-label="designation" ref={desig1}>
                                    <option value='none'>Select Type</option>
                                    <option value="franchise/sponsors">Franchise/Sponsors</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Col>
                        <Col xs={12} md={4} className='py-3 c1'>
                            <Phone isClear={mobValue} onChange={(e) => { formik.handleChange(e) }} samp={Samp} dynamicName="SponsorMobilNo" onActivateProgressBar={Sample} />
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
                                <label htmlFor="SponsorEmailId" className='text-muted'>Email ID</label>
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
                            <Button variant="warning" className='mx-2' style={{ color: 'white' }} onClick={() => handleReset()}>CLEAR</Button>
                            <Button variant="success" className='mx-2' type="submit" disabled={Object.keys(formik.errors).length > 0 || formik.values.name === ''} >SAVE </Button> <ToastContainer />
                        </Col>

                    </Row>
                </Form>
            </Card>
        </div>
    )
}

export default AccreadFranchiseSponsors