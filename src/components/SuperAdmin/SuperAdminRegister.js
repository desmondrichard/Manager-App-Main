import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Image0 from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import Image1 from 'react-bootstrap/Image';
import Image2 from 'react-bootstrap/Image';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';
import Swal from 'sweetalert2';

// Validation:
const validate = values => {
    const errors = {};
    if (!values.fullname) {
        errors.fullname = "*Required";
    } else if (values.fullname.length < 3) {
        errors.fullname = "Full name should be at least 3 characters long"
    }
    if (!values.username) {
        errors.username = "*Required";
    } else if (!/^(?=[a-zA-Z0-9._]{3,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/.test(values.username)) {
        errors.username = "Enter Valid username";
    }
    if (!values.email) {
        errors.email = "*Required";
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
        errors.email = "*Invalid email address";
    }
    if (!values.mobile) {
        errors.mobile = "*Required";
    } else if (isNaN(Number(values.mobile))) {
        errors.mobile = "Must be a number.";
    } else if (values.mobile.length !== 10) {
        errors.mobile = "Mobile number must be 10 digits.";
    }
    if (!values.password) {
        errors.password = "*Required";
    } else if (values.password.length < 8) {
        errors.password = "Minimum 8 characters required";
    }
    if (!values.confirmpassword) {
        errors.confirmpassword = "*Required";
    } else if (values.password !== values.confirmpassword) {
        errors.confirmpassword = "Passwords do not match.";
    }
    return errors;
}

function SuperAdminRegister() {
    const navigate = useNavigate();
    // password show/hide:
    const [visible, setVisible] = useState(true);
    const [visible1, setVisible1] = useState(true);


    // Formik:
    const formik = useFormik({
        initialValues: {
            fullname: '',
            username: '',
            email: '',
            mobile: '',
            password: '',
            confirmpassword: '',
        },
        validate,
        onSubmit: (values, { setSubmitting }) => {
            const newValues = { ...values }
            axios.post('https://localhost:7097/SuperAdmin', newValues)
                .then(response => {
                    console.log("response status: ", response.status) //to fetch  the status of API like 200 etc
                    console.log(response.data);
                    console.log("newvalues", newValues)
                    setSubmitting(false)
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Successfully Regitered",
                        showConfirmButton: false,
                        timer: 3000,
                        width: 300
                    });
                    navigate("/");
                })
                .catch(error => {
                    console.error(error.message);
                    console.log("values", newValues)
                });


        }
    });

    // const newValues = { ...values }
    // alert(`Hello! ,${values.fullname}you have successfully signed up`);
    // console.log('newvalues', newValues)
    // setSubmitting(false)
    // navigate("/");

    return (
        <div className='pt-1 '>
            <Card className='mx-3 cardBg'>
                <Row className='row11parent'>
                    <Col md={7}>
                        <Image0 src={require('../../assets/mountain2.jpg')} fluid className='borderRadius d-none d-md-block' style={{ height: '100%' }}></Image0>
                    </Col>
                    <Col md={5}>
                        <Container className='pt-1'>
                            <Form onSubmit={formik.handleSubmit}>
                                <legend className='text-center ' style={{ fontWeight: '700' }}>Register</legend>
                                <hr style={{ border: '2px solid #198754' }} />

                                {/*Full Name Field: */}
                                <Form.Group className="mb-1" controlId="Name">
                                    <Form.Label className='fontRegister'>Full Name</Form.Label>
                                    <Form.Control size="sm" className='shadow-none' type="text" name='fullname' placeholder="Enter Your Full Name" value={formik.values.fullname} onBlur={formik.handleBlur} onChange={formik.handleChange} />
                                    {
                                        formik.touched.fullname && formik.errors.fullname ? <span className='span'>{formik.errors.fullname}</span> : null
                                    }
                                </Form.Group>

                                {/*Username Field: */}
                                <Form.Group className="mb-1" controlId="username">
                                    <Form.Label className='fontRegister'>User Name</Form.Label>
                                    <Form.Control size="sm" className='shadow-none' type="text" name='username' placeholder="Enter Your UserName" value={formik.values.username} onBlur={formik.handleBlur} onChange={formik.handleChange} />
                                    {
                                        formik.touched.username && formik.errors.username ? <span className='span'>{formik.errors.username}</span> : null
                                    }
                                </Form.Group>

                                {/* Email Field: */}
                                <Form.Group className="mb-1" controlId="formGroupEmail">
                                    <Form.Label className='fontRegister'>Email</Form.Label>
                                    <Form.Control size="sm" className='shadow-none' type="email" placeholder="Enter Email" name='email' value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange} />
                                    {
                                        formik.touched.email && formik.errors.email ? <span className='span'>{formik.errors.email}</span> : null
                                    }
                                </Form.Group>

                                {/* Mobile Field: */}
                                <Form.Group className="mb-1" controlId="Phone">
                                    <Form.Label className='fontRegister'>Mobile Number</Form.Label>
                                    <InputGroup className='number'>
                                        <InputGroup.Text id="inputGroup-sizing-sm">+91
                                            <Form.Control size="sm" className='paddingStyle shadow-none' type="text" placeholder="Enter Phone Number" name='mobile' value={formik.values.mobile} onBlur={formik.handleBlur} onChange={formik.handleChange} />
                                        </InputGroup.Text>
                                    </InputGroup>
                                    {
                                        formik.touched.mobile && formik.errors.mobile ? <span className='span'>{formik.errors.mobile}</span> : null
                                    }
                                </Form.Group>

                                {/* Password Field: */}
                                <Form.Group className="mb-1" controlId="Password">
                                    <Form.Label className='fontRegister'>Password </Form.Label>
                                    <div className='pwd' >
                                        <Form.Control size="sm" className='shadow-none' type={
                                            visible ? "password" : "text"}
                                            placeholder="Password" name='password' value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange} />
                                        <div className='p-2 pwd-toggle' onClick={() => setVisible(!visible)}>
                                            {visible ? <Image1 className='img11' style={{ height: '18px' }} src={require('../../assets/eye-close.png')}></Image1> :
                                                <Image2 className='img11' style={{ height: '14px' }} src={require('../../assets/eye-open.png')}></Image2>}
                                        </div>
                                    </div>
                                    {
                                        formik.touched.password && formik.errors.password ? <span className='span'>{formik.errors.password}</span> : null
                                    }
                                </Form.Group>

                                {/* ConfirmPassword Field: */}
                                <Form.Group className="mb-1" controlId="ConfirmPassword">
                                    <Form.Label className='fontRegister'>Confirm Password</Form.Label>
                                    <div className='pwd' >
                                        <Form.Control size="sm" className='shadow-none' type={
                                            visible1 ? "password" : "text"} name='confirmpassword' placeholder="Confirm Password" value={formik.values.confirmpassword} onBlur={formik.handleBlur} onChange={formik.handleChange} />
                                        <div className='p-2 pwd-toggle' onClick={() => setVisible1(!visible1)}>
                                            {visible1 ? <Image1 className='img11' style={{ height: '18px' }} src={require('../../assets/eye-close.png')}></Image1>
                                                : <Image2 className='img11' style={{ height: '14px' }} src={require('../../assets/eye-open.png')}></Image2>
                                            }
                                        </div>
                                    </div>
                                    {
                                        formik.touched.confirmpassword && formik.errors.confirmpassword ? <span className='span'>{formik.errors.confirmpassword}</span> : null
                                    }
                                </Form.Group>


                                {/* Submit Button: */}
                                <div className="d-grid gap-2 my-2">
                                    <Button type='submit' value='submit' variant="outline-success" className='mt-2 w-100 fw-bold fs-4' size="sm">
                                        Sign Up
                                    </Button>

                                </div>
                            </Form>
                            <div className='text-center py-2'>
                                <p style={{ fontWeight: '500' }}>Already Have an Account ? <span className='text-danger signUp' style={{ fontSize: '19px', fontWeight: '500' }}><Link to='/'>Login</Link> </span></p>
                            </div>

                        </Container>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

export default SuperAdminRegister