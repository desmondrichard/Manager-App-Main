import React, { useState, useEffect } from 'react';
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
import ProgressBarWithLabel from '../ProgressBarWithLabel';
// validation:
const validate = values => {
    const errors = {};

    if (!values.specialization) {
        errors.specialization = "*Required";
    }

    if (!values.battingOrder) {
        errors.battingOrder = "*Required";
    }

    if (!values.bowlingType) {
        errors.bowlingType = "*Required";
    }

    if (!values.bowlingSpecification) {
        errors.bowlingSpecification = "*Required";
    }

    return errors
}


function ProficiencyForm({ activationKey, onActivationKeyChild, onPreviousActivationKey }) {

    // reset form start: 
    const specsReset = useRef("");
    const batLeftReset = useRef(false);
    const batRightReset = useRef(false);
    const batOrderReset = useRef("");
    const armLeftReset = useRef(false);
    const armRightReset = useRef(false);
    const bowlStyleReset = useRef("");
    const bowlSpecsReset = useRef("");

    function handleReset() {
        specsReset.current.value = "none";
        batLeftReset.current.checked = false;
        batRightReset.current.checked = false;
        batOrderReset.current.value = "none";
        armLeftReset.current.checked = false;
        armRightReset.current.checked = false;
        bowlStyleReset.current.value = "none";
        bowlSpecsReset.current.value = "none";
        formik.resetForm();
        setProgress(0);

    }

    const formik = useFormik({
        initialValues: {
            specialization: '',
            battingOrder: '',
            bowlingType: '',
            bowlingSpecification: ''

        },
        validate,
        onSubmit: values => {
            alert('clicked next');
            onActivationKeyChild(childNextKey);
            console.log("values", values)
        }
    })

    //next btn:
    const [childNextKey, setChildNextKey] = useState("2");

    const handlePreviousButton = () => {
        onPreviousActivationKey("0")
    }

    // progress Bar for static fields:
    const [progress, setProgress] = useState(0);
    function handleProgress() {
        console.log("formik values1", formik.values)
        const result = countKeysWithNonEmptyValues(formik.values);
        console.log("result for formik values:", result)
        const totalFilledFields = result;

        //calc formula
        let newProgress = ((totalFilledFields / 6) * 100).toFixed();
        console.log("Progress", newProgress)
        setProgress(newProgress);
    }

    function countKeysWithNonEmptyValues(obj) {
        let count = 0;

        for (const key in obj) {
            if (
                obj.hasOwnProperty(key) &&    //hasOwnProperty is used to check any value present in obj
                obj[key] !== null &&
                obj[key] !== undefined &&
                obj[key] !== ''
            ) {
                count++;
            }
        }
        console.log("count", count)
        return count;
    }

    useEffect(() => {
        handleProgress();
    }, [formik.values])

    return (


        <Accordion.Item eventKey="1">
            <Accordion.Header><i className="bi bi-info-circle-fill me-1"></i><span style={{ fontWeight: '700' }}>PROFICIENCY INFORMATION</span><ProgressBarWithLabel progressValue={progress} /></Accordion.Header>
            <Accordion.Body>
                <Container>
                    <p>{activationKey}</p>
                    <Form onSubmit={formik.handleSubmit}>
                        <Row>
                            <Col xs={12} lg={6} className='col'>
                                <FloatingLabel className='mb-2'
                                    controlId="specialization"
                                    label="Specialization*"
                                    name="specialization"
                                    value={formik.values.specialization} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                >
                                    <Form.Select aria-label="specialization" ref={specsReset}>
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
                            <Col xs={12} lg={6} className=' col'>
                                <label className='text-muted me-2' htmlFor="gender">BATTING STYLE</label>
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3" style={{ whiteSpace: 'nowrap' }} onChange={(e) => { formik.handleChange(e) }}>
                                        <Form.Check
                                            inline
                                            label="Left Hand"
                                            name="battingStyle"
                                            type={type}
                                            ref={batLeftReset}
                                            id={`inline-${type}-left`}
                                            value='leftHanded'
                                        />
                                        <Form.Check
                                            inline
                                            label="Right Hand"
                                            name="battingStyle"
                                            type={type}
                                            id={`inline-${type}-right`}
                                            // defaultChecked={true}
                                            ref={batRightReset}
                                            value="rightHanded"
                                        />
                                    </div>
                                ))}
                            </Col>
                            <Col xs={12} lg={6} className='col'>
                                <FloatingLabel className='mb-2'
                                    controlId="battingOrder"
                                    label="Batting order*"
                                    name="battingOrder"
                                    value={formik.values.battingOrder} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                >
                                    <Form.Select aria-label="battingOrder" ref={batOrderReset}>
                                        <option value="none">Select Type</option>
                                        <option value="top">TOP ORDER</option>
                                        <option value="middle">MIDDLE ORDER</option>
                                        <option value="lower">LOWER ORDER</option>
                                        <option value="tail">TAIL ENDER</option>
                                    </Form.Select>
                                    {
                                        formik.touched.battingOrder && formik.errors.battingOrder ? <span className='span'>{formik.errors.battingOrder}</span> : null
                                    }
                                </FloatingLabel>
                            </Col>
                            <Col xs={12} lg={6} className='col'>
                                <label className='text-muted me-2' htmlFor="bowlerType">BOWLER TYPE</label>
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3">
                                        <span style={{ whiteSpace: 'nowrap' }} onChange={(e) => { formik.handleChange(e) }}>
                                            <Form.Check
                                                inline
                                                label="Left Arm"
                                                name="bowlerType"
                                                type={type}
                                                id={`inline-${type}-leftarm`}
                                                value='LeftArm'
                                                ref={armLeftReset}
                                            />
                                            <Form.Check
                                                inline
                                                label="Right Arm"
                                                name="bowlerType"
                                                type={type}
                                                id={`inline-${type}-rightarm`}
                                                value='RightArm'
                                                ref={armRightReset}
                                            />
                                        </span>
                                    </div>
                                ))}

                            </Col>

                            <Col xs={12} lg={6} className='col'>
                                <FloatingLabel className='mb-2'
                                    controlId="bowlingType"
                                    label="Bowling Style*"
                                    name="bowlingType"
                                    value={formik.values.bowlingType} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                >
                                    <Form.Select aria-label="bowlingType" ref={bowlStyleReset} onChange={(e) => {
                                        formik.setFieldValue('bowlingType', e.target.value);

                                    }}>
                                        <option value="none">Select Type</option>
                                        <option value="Fast">FAST</option>
                                        <option value="Spin">SPIN</option>
                                    </Form.Select>
                                    {formik.touched.bowlingType && formik.errors.bowlingType ? <span className='span'>{formik.errors.bowlingType}</span> : null}
                                </FloatingLabel>
                            </Col>
                            <Col xs={12} lg={6} className='col'>
                                <FloatingLabel className='mb-2'
                                    controlId="bowlingSpecification"
                                    label="Bowling Specification*"
                                    name="bowlingSpecification"
                                    value={formik.values.bowlingSpecification} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                >
                                    <Form.Select aria-label="bowlingSpecification" ref={bowlSpecsReset} disabled={formik.values.bowlingType === 'none'}>
                                        <option value="none">Select Type</option>
                                        <option value="Fast" disabled={formik.values.bowlingType !== 'Fast'}>Fast</option>
                                        <option value="Medium Fast" disabled={formik.values.bowlingType !== 'Fast'}>Medium Fast</option>
                                        <option value="Fast Medium" disabled={formik.values.bowlingType !== 'Fast'}>Fast Medium</option>
                                        <option value="Off Spin" disabled={formik.values.bowlingType !== 'Spin'}>Off Spin</option>
                                        <option value="Orthodox" disabled={formik.values.bowlingType !== 'Spin'}>Orthodox</option>
                                        <option value="Chinaman" disabled={formik.values.bowlingType !== 'Spin'}>Chinaman</option>
                                        <option value="Leg Spin" disabled={formik.values.bowlingType !== 'Spin'}>Leg Spin</option>
                                    </Form.Select>
                                    {formik.touched.bowlingSpecification && formik.errors.bowlingSpecification ? <span className='span'>{formik.errors.bowlingSpecification}</span> : null}
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