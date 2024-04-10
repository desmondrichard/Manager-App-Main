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
import axios from 'axios';

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


function ProficiencyForm({ activationKey, onActivationKeyChild, onPreviousActivationKey, showPutData, showSaveBtn, showClearBtn, handlePrevClick, previousClk, showSkipBtn }) {
    const modalContentRef = useRef(null);
    // reset form start: 
    const specsReset = useRef("");
    const batLeftReset = useRef(false);
    const batRightReset = useRef(false);
    const batOrderReset = useRef("");
    const armLeftReset = useRef(false);
    const armRightReset = useRef(false);
    const bowlStyleReset = useRef("");
    const bowlSpecsReset = useRef("");

    //
    const [teamName, setteamName] = useState("");

    function handleReset() {
        alert("reset")
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
        enableReinitialize: true,
        initialValues: {
            specialization: showPutData?.specialization || '',
            battingOrder: showPutData?.battingOrder || '',
            bowlingType: showPutData?.bowlingType || '',
            bowlingSpecification: showPutData?.bowlingSpecification || '',
            battingStyle: showPutData?.battingStyle || '',
            bowlerType: showPutData?.bowlerType || ''
        },
        validate,
        onSubmit: values => {
            axios.post('https://localhost:7097/playerSpecializationModel', values)
                .then(response => {
                    console.log(response.data);
                    onActivationKeyChild(childNextKey);
                    console.log("values", values)

                })
                .catch(error => {
                    console.error(error.message);
                    console.log("values", values)

                });
        }
    })

    // alert('clicked next');
    // onActivationKeyChild(childNextKey);
    // console.log("values", values)

    //next btn:
    const [childNextKey, setChildNextKey] = useState("2");

    const handlePreviousButton = () => {
        onPreviousActivationKey("0")
        handlePrevClick(true)
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

    console.log("showPutDataProficiency", showPutData)

    function handleSkip() {
        onActivationKeyChild(childNextKey)
        handlePrevClick(true)

    }

    //update Method:
    function handleUpdate() {
        axios.put(`https://localhost:7097/SpecializationModel/${showPutData.alldataplayerId}`, formik.values, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (response.status === 200) {
                    console.log("Updation Data: ", response.data);
                    onActivationKeyChild(childNextKey);
                } else {
                    console.log("Unexpected response status: ", response.status);
                }
            })
            .catch(error => {
                if (error.response && error.response.data) {
                    console.log("Error Updating User: ", error.response.data);
                } else {
                    console.log("Error Updating User: ", error.message);
                }
            });
    }
    //
    const targetElement = useRef(null);

    useEffect(() => {
        handleProgress();
    }, [formik.values])

    return (

        <Accordion.Item eventKey="1">
            <Accordion.Header><i className="bi bi-info-circle-fill me-1"></i><span style={{ fontWeight: '700' }}>PROFICIENCY INFORMATION</span><ProgressBarWithLabel progressValue={progress} /></Accordion.Header>
            <Accordion.Body>
                <Container ref={modalContentRef}>
                    {/* <p>{activationKey}</p> */}
                    <Form onSubmit={formik.handleSubmit}>
                        <Row>
                            <Col xs={12} lg={6} className='col'>
                                <FloatingLabel className='mb-2'
                                    controlId="specialization"
                                    label="Specialization*"
                                    name="specialization"
                                >
                                    <Form.Select aria-label="specialization" ref={specsReset}
                                        value={formik.values.specialization} onBlur={formik.handleBlur} onChange={(e) => formik.setFieldValue('specialization', e.target.value)}
                                    >
                                        <option value="none">Select Type</option>
                                        <option value="batter">BATTER</option>
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
                                            checked={formik.values.battingStyle === 'leftHanded'}
                                            id={`inline-${type}-leftHanded`}
                                            value='leftHanded'
                                        />
                                        <Form.Check
                                            inline
                                            label="Right Hand"
                                            name="battingStyle"
                                            type={type}
                                            id={`inline-${type}-rightHanded`}
                                            checked={formik.values.battingStyle === 'rightHanded'}
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
                                >
                                    <Form.Select aria-label="battingOrder" ref={batOrderReset}
                                        value={formik.values.battingOrder} onBlur={formik.handleBlur} onChange={(e) => formik.setFieldValue('battingOrder', e.target.value)}

                                    >
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
                                                checked={formik.values.bowlerType === 'LeftArm'}

                                            />
                                            <Form.Check
                                                inline
                                                label="Right Arm"
                                                name="bowlerType"
                                                type={type}
                                                id={`inline-${type}-rightarm`}
                                                value='RightArm'
                                                ref={armRightReset}
                                                checked={formik.values.bowlerType === 'RightArm'}

                                            // defaultChecked={true}
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
                                >
                                    <Form.Select aria-label="bowlingType" ref={bowlStyleReset}
                                        value={formik.values.bowlingType} onBlur={formik.handleBlur} onChange={(e) => formik.setFieldValue('bowlingType', e.target.value)}

                                    >
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

                                >
                                    <Form.Select aria-label="bowlingSpecification" ref={bowlSpecsReset} disabled={formik.values.bowlingType === 'none'}
                                        value={formik.values.bowlingSpecification} onBlur={formik.handleBlur} onChange={(e) => formik.setFieldValue('bowlingSpecification', e.target.value)}

                                    >
                                        <option value="none">Select Type</option>
                                        <option value="Fast" disabled={formik.values.bowlingType !== 'Fast'}>FAST</option>
                                        <option value="Medium Fast" disabled={formik.values.bowlingType !== 'Fast'}>MEDIUM FAST</option>
                                        <option value="Fast Medium" disabled={formik.values.bowlingType !== 'Fast'}>FAST MEDIUM</option>
                                        <option value="Off Spin" disabled={formik.values.bowlingType !== 'Spin'}>OFF SPIN</option>
                                        <option value="Orthodox" disabled={formik.values.bowlingType !== 'Spin'}>ORTHODOX</option>
                                        <option value="Chinaman" disabled={formik.values.bowlingType !== 'Spin'}>CHINAMAN</option>
                                        <option value="Leg Spin" disabled={formik.values.bowlingType !== 'Spin'}>LEG SPIN</option>
                                    </Form.Select>
                                    {formik.touched.bowlingSpecification && formik.errors.bowlingSpecification ? <span className='span'>{formik.errors.bowlingSpecification}</span> : null}
                                </FloatingLabel>
                            </Col>

                            <Col xs={12} lg={12} className='my-4 col'>
                                {console.log("previousClkBtn", previousClk, showSkipBtn)}
                                {previousClk && <Button variant="primary" className='me-1 mx-1 mt-2 previousP' style={{ width: "130px" }} onClick={handlePreviousButton}>PREVIOUS</Button>}
                                {showSaveBtn && !previousClk && <Button type="submit" variant="success" className='me-1 mb-2 mx-1 ' style={{ width: "130px" }}>Save and Next</Button>}
                                {showClearBtn && <Button variant="warning" className='text-white mb-2 ' style={{ width: "130px" }} onClick={() => handleReset()}>CLEAR</Button>}
                                {!showSaveBtn && <Button variant="info" className='mx-1 update' style={{ whiteSpace: 'nowrap', width: '130px', marginTop: '7px' }} onClick={handleUpdate}>Update</Button>}
                                {(previousClk || showSkipBtn) && <Button variant="dark" className='skip ms-1' style={{ whiteSpace: 'nowrap', width: '130px', marginTop: '7px' }} onClick={handleSkip}>Skip</Button>}

                            </Col>
                        </Row>
                    </Form>
                </Container>
            </Accordion.Body>
        </Accordion.Item>

    )
}

export default ProficiencyForm