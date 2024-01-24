import React, { useRef, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Phone from './../offcanvas-body/Phone';
import { useFormik } from 'formik';



// validation:
const validate = values => {
    const errors = {};

    if (!values.name) {
        errors.name = "*Required";
    }
    else if (!/^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/.test(values.name)) {
        errors.name = "enter a valid name";
    }

    if (!/^^$|^.*@.*\..*$/.test(values.email)) {
        errors.email = "Invalid email address";
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
            name: '',
            email: ''
        },
        validate,
        onSubmit: values => {
            alert(`Hello! ,${values.name} you have successfully signed up`);
            onChildNextActivationKey(childNextKey)
        }
    });

    const handlePreviousButton = () => {
        onPreviousActivationKey("2")
    }
    return (
        <div>
            <Card className='bg-light p-4'>
                <Form onSubmit={formik.handleSubmit}>
                    <Row className='fw-bold' style={{ fontSize: '16px' }}>
                        <Col xs={12} md={{ span: 4 }} className='py-3 c1'>
                            <Form.Floating className="mb-2">
                                <Form.Control
                                    id="name"
                                    type="text"
                                    placeholder="name"
                                    ref={name1}
                                    name="name"
                                    value={formik.values.name} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                />
                                {
                                    formik.touched.name && formik.errors.name ? <span className='span'>{formik.errors.name}</span> : null
                                }

                                <label htmlFor="name" className='text-muted'>Name*</label>
                            </Form.Floating>
                        </Col>
                        <Col xs={12} md={4} className='py-3 c1'>
                            <FloatingLabel className='mb-2 c1'
                                controlId="designation"
                                label="Designation"
                            >
                                <Form.Select aria-label="designation" ref={desig1}>
                                    <option>Select Type</option>
                                    <option value="year1">Player</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Col>
                        <Col xs={12} md={4} className='py-3 c1'>
                            <Phone isClear={mobValue} />
                        </Col>
                        <Col xs={12} md={4} className='py-3 c1'>
                            <Form.Floating className="mb-2">
                                <Form.Control
                                    id="email"
                                    type="email"
                                    placeholder="email"
                                    ref={email1}
                                    name="email"
                                    value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                />
                                {
                                    formik.touched.email && formik.errors.email ? <span className='span'>{formik.errors.email}</span> : null
                                }
                                <label htmlFor="email" className='text-muted'>Email ID</label>
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