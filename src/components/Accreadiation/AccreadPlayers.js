import React, { useEffect, useRef } from 'react';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Phone from './../offcanvas-body/Phone';
import { useState } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';

// import Tab from 'react-bootstrap';


// validation:
const validate = values => {
    const errors = {};

    if (!values.PlayersName) {
        errors.PlayersName = "*Required";
    }
    else if (!/^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/.test(values.PlayersName)) {
        errors.PlayersName = "enter a valid name";
    }

    if (!values.PlayersEmailId) {
        errors.PlayersEmailId = "*Required";
    }
    else if (!/^^$|^.*@.*\..*$/.test(values.PlayersEmailId)) {
        errors.PlayersEmailId = "Invalid email address";
    }

    if (!values.PlayersDesignation) {
        errors.PlayersDesignation = "*Required";
    }

    if (!values.PlayersMobilNo) {
        errors.PlayersMobilNo = "*Required";
    }

    return errors;
}



function AccreadPlayers({ activationKey, onChildNextActivationKey }) {

    //next btn:
    const [childNextKey, setChildNextKey] = useState("1");

    const [mobValue, setMobValue] = useState(false);

    //reset:
    const name1 = useRef("");
    const desig1 = useRef("");
    const email1 = useRef("");
    const dutypass1 = useRef("");
    const team1 = useRef("");

    function handleReset() {
        name1.current.value = "";
        desig1.current.value = "";
        email1.current.value = "";
        team1.current.value = "";
        dutypass1.current.value = "";
        setMobValue(true);
        formik.resetForm();
    }

    const formik = useFormik({
        initialValues: {
            PlayersName: '',
            PlayersDesignation: '',
            PlayersEmailId: '',
            team: '',
            PlayersMobilNo: null,

        },
        validate,
        onSubmit: (values, { setSubmitting }) => {
            const newValues = { ...values, PlayersMobilNo }
            console.log("new values", newValues)
            axios.post('https://localhost:7097/register/AccreadiationPlayers', newValues)
                .then(response => {
                    console.log(response.data);
                    onChildNextActivationKey(childNextKey);
                    console.log("newvalues", newValues)
                    setSubmitting(false);
                })
                .catch(error => {
                    console.log(error.message);
                    // console.error(error.response.data);
                    console.log("newvaluesErr", newValues)
                    setSubmitting(false);
                });
            // alert(`clicked next`);
            // const newValues = { ...values, PlayersMobilNo }
            // onChildNextActivationKey(childNextKey)
            // console.log("newvalues", newValues)
            // setSubmitting(false);
        }
    });

    //phone value:
    const [PlayersMobilNo, setPlayersMobilNo] = useState(null);
    const Samp = (value) => {
        console.log("sample1", value)
        setPlayersMobilNo(value);
        formik.setFieldValue('PlayersMobilNo', value);// used to push value in formik dynamic child component else submit wont be enabled
        console.log("PlayersMobilNo", PlayersMobilNo)
    }

    function Sample(val) {
        console.log("childtoparentval: ", val);
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
        <Card className='bg-light p-4'>
            <Form onSubmit={formik.handleSubmit}>
                <Row className='fw-bold' style={{ fontSize: '16px' }}>
                    <Col xs={12} md={4} className='py-3 c1'>
                        <Form.Floating className="mb-2">
                            <Form.Control
                                id="PlayersName"
                                type="text"
                                placeholder="name"
                                ref={name1}
                                name="PlayersName"
                                value={formik.values.PlayersName} onBlur={formik.handleBlur} onChange={formik.handleChange}
                            />
                            {
                                formik.touched.PlayersName && formik.errors.PlayersName ? <span className='span'>{formik.errors.PlayersName}</span> : null
                            }
                            <label htmlFor="PlayersName" className='text-muted'>Name*</label>
                        </Form.Floating>
                    </Col>
                    <Col xs={12} md={4} className='py-3 c1'>
                        <FloatingLabel className='mb-2 c1'
                            controlId="PlayersDesignation"
                            label="Designation*"
                            name='PlayersDesignation'
                            value={formik.values.PlayersDesignation} onChange={formik.handleChange} onBlur={formik.handleBlur}
                        >
                            <Form.Select aria-label="PlayersDesignation" ref={desig1}>
                                <option value='none'>Select Type</option>
                                <option value="playerdesig">Player</option>
                            </Form.Select>
                            {
                                formik.touched.PlayersDesignation && formik.errors.PlayersDesignation ? <span className='span'>{formik.errors.PlayersDesignation}</span> : null
                            }
                        </FloatingLabel>
                    </Col>

                    <Col xs={12} md={4} className='py-3 c1'>
                        <Phone isClear={mobValue} onValidate={validateForm} onChange={formik.handleChange} onActivateProgressBar={Sample} dynamicId="mobileId" samp={Samp} dynamicName="PlayersMobilNo" />

                        {formik.touched.PlayersMobilNo && formik.errors.PlayersMobilNo ? (
                            <span className="span">{formik.errors.PlayersMobilNo}</span>
                        ) : null}
                    </Col>

                    <Col xs={12} md={4} className='py-3 c1'>
                        <Form.Floating className="mb-2">
                            <Form.Control
                                id="PlayersEmailId"
                                type="email"
                                placeholder="email"
                                ref={email1}
                                name="PlayersEmailId"
                                value={formik.values.PlayersEmailId} onBlur={formik.handleBlur} onChange={formik.handleChange}
                            />
                            {
                                formik.touched.PlayersEmailId && formik.errors.PlayersEmailId ? <span className='span'>{formik.errors.PlayersEmailId}</span> : null
                            }
                            <label htmlFor="PlayersEmailId" className='text-muted'>Email ID*</label>
                        </Form.Floating>
                    </Col>
                    <Col xs={12} md={4} className='py-3 c1'>
                        <FloatingLabel className='mb-2 c1'
                            controlId="PlayersDutyPass"
                            label="Duty Pass"
                            name='PlayersDutyPass'
                            value={formik.values.PlayersDutyPass} onChange={formik.handleChange}
                        >
                            <Form.Select aria-label="PlayersDutyPass" ref={dutypass1}>
                                <option value='none'>Select Type</option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>
                            </Form.Select>
                        </FloatingLabel>
                    </Col>
                    {/* Temporary Field: */}
                    <Col xs={12} md={4} className='py-3 c1'>
                        <Form.Floating className="mb-2">
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

                </Row>
                <Row>
                    <Col className='end btns'>
                        <Button variant="warning" className='mx-2' style={{ color: 'white' }} onClick={() => handleReset()}>CLEAR</Button>
                        <Button variant="success" className='mx-2' type="submit" disabled={Object.keys(formik.errors).length > 0 || formik.values.name === ''}>SAVE AND NEXT</Button>

                    </Col>

                </Row>
            </Form>
        </Card>


    )
}

export default AccreadPlayers