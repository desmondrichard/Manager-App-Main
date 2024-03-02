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

    if (!values.OfficialName) {
        errors.OfficialName = "*Required";
    }
    else if (!/^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/.test(values.OfficialName)) {
        errors.OfficialName = "enter a valid name";
    }

    if (!/^^$|^.*@.*\..*$/.test(values.OfficialEmailId)) {
        errors.OfficialEmailId = "Invalid email address";
    }

    return errors;
}


function AccreadFranchiseOfficials({ activationKey, onChildNextActivationKey, onPreviousActivationKey }) {
    const [childNextKey, setChildNextKey] = useState("4");
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
            OfficialName: '',
            OfficialEmailId: ''
        },
        validate,
        onSubmit: (values, { setSubmitting }) => {
            const newValues = { ...values, OfficialMobilNo }
            axios.post('', newValues)
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


    // alert(`clecked next`);
    // const newValues = { ...values, OfficialMobilNo }
    // onChildNextActivationKey(childNextKey)
    // console.log("newvalues",newValues)
    // setSubmitting(false);

    const handlePreviousButton = () => {
        onPreviousActivationKey("2")
    }
    //

    const [OfficialMobilNo, setOfficialMobilNo] = useState("");
    const Samp = (s) => {
        console.log("sample1", s)
        setOfficialMobilNo(s);
        console.log("PlayersMobilNo", OfficialMobilNo)
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
                                label="Designation"
                                name="OfficialDesignation"
                                value={formik.values.OfficialDesignation} onChange={formik.handleChange}

                            >
                                <Form.Select aria-label="OfficialDesignation" ref={desig1}>
                                    <option>Select Type</option>
                                    <option value="year1">Player</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Col>
                        <Col xs={12} md={4} className='py-3 c1'>
                            <Phone isClear={mobValue} onChange={(e) => { formik.handleChange(e) }} samp={Samp} dynamicName="OfficialMobilNo" onActivateProgressBar={Sample} />
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
                                <label htmlFor="OfficialEmailId" className='text-muted'>Email ID</label>
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
                            <Button variant="warning" className='mx-2' style={{ color: 'white' }} onClick={() => handleReset()}>CLEAR</Button>
                            <Button variant="success" className='mx-2' type='submit' disabled={Object.keys(formik.errors).length > 0 || formik.values.name === ''} >SAVE AND NEXT</Button>

                        </Col>

                    </Row>
                </Form>
            </Card>
        </div>
    )
}

export default AccreadFranchiseOfficials