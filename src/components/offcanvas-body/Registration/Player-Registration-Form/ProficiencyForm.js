import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './ProficiencyForm.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import './ProficiencyForm.css';
import Container from 'react-bootstrap/Container';
import { useFormik } from 'formik';
import { useRef } from 'react';
// validation:
const validate = values => {
    const errors = {};

    if (!values.specialization) {
        errors.specialization = "*Required";
    }

    if (!values.battingorder) {
        errors.battingorder = "*Required";
    }

    if (!values.bowlingstyle) {
        errors.bowlingstyle = "*Required";
    }

    if (!values.bowlingspecification) {
        errors.bowlingspecification = "*Required";
    }

    return errors
}


function ProficiencyForm({ activationKey, onActivationKeyChild, onPreviousActivationKey }) {

    // reset form start: 
    const specs = useRef("");
    const batLeft = useRef(false);
    const batRight = useRef(false);
    const batOrder = useRef("");
    const armLeft = useRef(false);
    const armRight = useRef(false);
    const bowlStyle = useRef("");
    const bowlSpecs = useRef("");

    function handleReset() {
        specs.current.value = "none";
        batLeft.current.checked = false;
        batRight.current.checked = false;
        batOrder.current.value = "none";
        armLeft.current.checked = false;
        armRight.current.checked = false;
        bowlStyle.current.value = "none";
        bowlSpecs.current.value = "none";
        formik.resetForm();
    }

    const formik = useFormik({
        initialValues: {
            specialization: '',
            battingorder: '',
            bowlingstyle: '',
            bowlingspecification: ''

        },
        validate,
        onSubmit: values => {
            alert(`Hello! ,${values.fNamelNamemName}you have successfully signed up`);
            onActivationKeyChild(childNextKey);
        }
    })

    //next btn:
    const [childNextKey, setChildNextKey] = useState("2");

    const handlePreviousButton = () => {
        onPreviousActivationKey("0")
    }
    return (


        <Accordion.Item eventKey="1">
            <Accordion.Header><i className="bi bi-info-circle-fill me-1"></i><span style={{ fontWeight: '700' }}>PROFICIENCY INFORMATION</span></Accordion.Header>
            <Accordion.Body>
                <Container>
                    <p>{activationKey}</p>
                    <Form onSubmit={formik.handleSubmit}>
                        <Row>
                            <Col xs={12} lg={4} className='col'>
                                <FloatingLabel className='mb-2'
                                    controlId="specialization"
                                    label="Specialization*"
                                    name="specialization"
                                    value={formik.values.specialization} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                >
                                    <Form.Select aria-label="specialization" ref={specs}>
                                        <option>Select Type</option>
                                        <option value="batsman">BATSMAN</option>
                                        <option value="bowler">BOWLER</option>
                                        <option value="allrounder">ALL-ROUNDER</option>
                                        <option value="wicketkeeper">WICKETKEEPER</option>
                                    </Form.Select>
                                    {
                                        formik.touched.specialization && formik.errors.specialization ? <span className='span'>{formik.errors.specialization}</span> : null
                                    }

                                </FloatingLabel>
                            </Col>
                            <Col xs={12} lg={4} className=' col'>
                                <label className='text-muted me-2' htmlFor="gender">BATTING STYLE</label>
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3" style={{ whiteSpace: 'nowrap' }}>
                                        <Form.Check
                                            inline
                                            label="Left Hand"
                                            name="BatHand"
                                            type={type}
                                            ref={batLeft}
                                            id={`inline-${type}-left`}
                                        />
                                        <Form.Check
                                            inline
                                            label="Right Hand"
                                            name="BatHand"
                                            type={type}
                                            id={`inline-${type}-right`}
                                            defaultChecked={true}
                                            ref={batRight}
                                        />
                                    </div>
                                ))}
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <FloatingLabel className='mb-2'
                                    controlId="battingorder"
                                    label="Batting order*"
                                    name="battingorder"
                                    value={formik.values.battingorder} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                >
                                    <Form.Select aria-label="battingorder" ref={batOrder}>
                                        <option value="none">Select Type</option>
                                        <option value="top">TOP ORDER</option>
                                        <option value="middle">MIDDLE ORDER</option>
                                        <option value="lower">LOWER ORDER</option>
                                        <option value="tail">TAIL ENDER</option>
                                    </Form.Select>
                                    {
                                        formik.touched.battingorder && formik.errors.battingorder ? <span className='span'>{formik.errors.battingorder}</span> : null
                                    }
                                </FloatingLabel>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <label className='text-muted me-2' htmlFor="bowlertype">BOWLER TYPE</label>
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <span style={{ whiteSpace: 'nowrap' }}>
                                            <Form.Check
                                                inline
                                                label="Left Arm"
                                                name="Arm"
                                                type={type}
                                                id={`inline-${type}-leftarm`}
                                                ref={armLeft}
                                            />
                                            <Form.Check
                                                inline
                                                label="Right Arm"
                                                name="Arm"
                                                type={type}
                                                id={`inline-${type}-rightarm`}
                                                defaultChecked={true}
                                                ref={armRight}
                                            />
                                        </span>
                                    </div>
                                ))}

                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <FloatingLabel className='mb-2'
                                    controlId="bowlingstyle"
                                    label="Bowling Style*"
                                    name="bowlingstyle"
                                    value={formik.values.bowlingstyle} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                >
                                    <Form.Select aria-label="bowlingstyle" ref={bowlStyle}>
                                        <option value="none">Select Type</option>
                                        <option value="fast">FAST</option>
                                        <option value="spin">SPIN</option>
                                    </Form.Select>
                                    {
                                        formik.touched.bowlingstyle && formik.errors.bowlingstyle ? <span className='span'>{formik.errors.bowlingstyle}</span> : null
                                    }
                                </FloatingLabel>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <FloatingLabel className='mb-2'
                                    controlId="bowlingspecification"
                                    label="Bowling Specification*"
                                    name="bowlingspecification"
                                    value={formik.values.bowlingspecification} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                >
                                    <Form.Select aria-label="bowlingspecification" ref={bowlSpecs}>
                                        <option value="none">Select Type</option>
                                        <option value="sample1">sample1</option>
                                        <option value="sample2">sample2</option>
                                    </Form.Select>
                                    {
                                        formik.touched.bowlingspecification && formik.errors.bowlingspecification ? <span className='span'>{formik.errors.bowlingspecification}</span> : null
                                    }
                                </FloatingLabel>
                            </Col>
                            <Col xs={12} lg={12} className='my-4 col'>
                                <Button variant="primary" className='mb-2' style={{ width: "130px" }} onClick={() => handlePreviousButton()}>PREVIOUS</Button>
                                <Button variant="success" disabled={Object.keys(formik.errors).length > 0 || formik.values.name === ''} type="submit" value="submit" className='mx-3 mb-2' style={{ width: "130px" }}>Save and Next</Button>
                                <Button variant="warning" className='mx-1 text-white mb-2' style={{ width: "130px" }} onClick={() => handleReset()}>CLEAR</Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </Accordion.Body>
        </Accordion.Item>

    )
}

export default ProficiencyForm