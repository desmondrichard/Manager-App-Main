import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import './PlayerAuctionInformation.css';
import { useFormik } from 'formik';
import Button from 'react-bootstrap/Button';
import { useRef } from 'react';
import axios from 'axios';
import ProgressBarWithLabel from '../ProgressBarWithLabel';

// Validation:
const validate = values => {
    const errors = {};

    if (!/^[0-9]{1,10}$/.test(values.Price)) {
        if (values.Price.match(/[a-zA-Z]/)) {
            errors.Price = "Only Numeric values accepted";
        } else {
            errors.Price = "Length should be between 1 and 10 digits";
        }
    }

    if (!/^[a-zA-Z]{0,1}$/.test(values.Category)) {
        errors.Category = "Only one Letter allowed";
    }

    return errors;
}

function PlayerAuctionInformation({ activationKey, onActivationKeyChild, onPreviousActivationKey, showSaveBtn, showPutData, showClearBtn, handlePrevClick, previousClk, showSkipBtn }) {
    //next btn:
    const [childNextKey, setChildNextKey] = useState("10")

    // Previous btn:
    const handlePreviousButton = () => {
        onPreviousActivationKey("8")
        handlePrevClick(true)
    }

    const formik = useFormik({
        initialValues: {
            Price: showPutData?.Price || "",
            PickStatus: showPutData?.PickStatus || "",
            Category: showPutData?.Category || "",
            CurrentStatus: showPutData?.CurrentStatus || ""
        },
        validate,
        onSubmit: values => {
            axios.post('https://localhost:7097/api/PlayerAuction', values)
                .then(response => {
                    console.log(response.data);
                    onActivationKeyChild(childNextKey);
                    console.log("player_auction_values", values)

                })
                .catch(error => {
                    console.error(error.message);
                    console.log("values", values)

                });
        }
    });

    function handleReset() {
        Price.current.value = "";
        PickStatus.current.value = "none";
        Category.current.value = "";
        CurrentStatus.current.value = "none";
        formik.resetForm();
        setProgress(0);
    }

    // reset form start: 
    const Price = useRef("");
    const PickStatus = useRef("");
    const Category = useRef("");
    const CurrentStatus = useRef("");

    // Update Request:
    function handleUpdate() {

        axios.put(`https://localhost:7097/api/PlayerAuction/${showPutData.alldataplayerId}`, formik.values, {
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

    // Progress Bar:
    const [progress, setProgress] = useState(0);

    function handleProgress() {
        console.log("formik values1", formik.values)
        const result = countKeysWithNonEmptyValues(formik.values);
        console.log("result for formik values:", result)
        const totalFilledFields = result;

        //calc formula
        let newProgress = ((totalFilledFields / 4) * 100).toFixed();
        console.log("Progress", newProgress, totalFilledFields)
        setProgress(newProgress);
    }

    function countKeysWithNonEmptyValues(obj) {
        let count = 0;

        for (const key in obj) {
            console.log("obj1", obj, obj[key])
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


    // Skip:
    function handleSkip() {
        onActivationKeyChild(childNextKey)
        handlePrevClick(true)
    }

    useEffect(() => {
        handleProgress();
    }, [formik.values])
    return (
        <Accordion.Item eventKey="9">
            <Accordion.Header><i className="bi bi-info-circle-fill me-1"></i><span style={{ fontWeight: '700' }}>PLAYER AUCTION INFORMATION</span><ProgressBarWithLabel progressValue={progress} /></Accordion.Header>
            <Accordion.Body>
                <Container>
                    <Form onSubmit={formik.handleSubmit}>
                        <Row>
                            <Col xs={12} lg={6} className='col'>
                                <FloatingLabel
                                    controlId="Price"
                                    label="Price"
                                    className="mb-2"
                                >
                                    <Form.Control name="Price" type="text" placeholder="Price" value={formik.values.Price} ref={Price} onBlur={formik.handleBlur} onChange={(e) => {
                                        formik.setFieldValue('Price', e.target.value.toUpperCase())
                                    }} />
                                    {
                                        formik.touched.Price && formik.errors.Price ? <span className='span'>{formik.errors.Price}</span> : null
                                    }
                                </FloatingLabel>
                            </Col>
                            <Col xs={12} lg={6} className='col'>
                                <FloatingLabel className='mb-2'
                                    controlId="PickStatus"
                                    label="Pick-Status"
                                    name="PickStatus"

                                >
                                    <Form.Select aria-label="PickStatus" ref={PickStatus} value={formik.values.PickStatus} onBlur={formik.handleBlur} onChange={(e) => formik.setFieldValue('PickStatus', e.target.value)}>
                                        <option value="none">None</option>
                                        <option value="Auction">Auction</option>
                                        <option value="Retained">Retained</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Col>
                            <Col xs={12} lg={6} className='col'>
                                <FloatingLabel
                                    controlId="Category"
                                    label="Category"
                                    className="mb-2"
                                >
                                    <Form.Control className='Category' type="text" placeholder="Category" ref={Category} value={formik.values.Category} onBlur={formik.handleBlur} onChange={(e) => {
                                        formik.setFieldValue('Category', e.target.value.toUpperCase())
                                    }} />
                                    {
                                        formik.touched.Category && formik.errors.Category ? <span className='span'>{formik.errors.Category}</span> : null
                                    }
                                </FloatingLabel>
                            </Col>
                            <Col xs={12} lg={6} className='col'>
                                <FloatingLabel className='mb-2'
                                    controlId="CurrentStatus"
                                    label="Current-Status"
                                    name="CurrentStatus"
                                >
                                    <Form.Select aria-label="CurrentStatus" value={formik.values.CurrentStatus} ref={CurrentStatus} onBlur={formik.handleBlur} onChange={(e) => formik.setFieldValue('CurrentStatus', e.target.value)}>
                                        <option value="none">None</option>
                                        <option value="Active">Acitve</option>
                                        <option value="Injured">Injured</option>
                                        <option value="Fitness">Fitness</option>
                                    </Form.Select>
                                </FloatingLabel>
                            </Col>
                        </Row>

                        {previousClk && <Button variant="primary" className='me-1 mb-2 previousP' style={{ width: "130px" }} onClick={handlePreviousButton}>Previous</Button>}
                        {showSaveBtn && !previousClk && <Button type="submit" variant="success" className='me-1 mb-2 mx-1 ' style={{ width: "130px" }}>Save and Next</Button>}
                        {showClearBtn && <Button variant="warning" className='text-white mb-2 ' style={{ width: "130px" }} onClick={() => handleReset()}>Clear</Button>}
                        {!showSaveBtn && <Button variant="info" className='mx-1 updateP' style={{ whiteSpace: 'nowrap', width: '130px', marginTop: '-9px' }} onClick={handleUpdate}>Update</Button>}
                        {(previousClk || showSkipBtn) && <Button variant="dark" className='skip ms-1' style={{ whiteSpace: 'nowrap', width: '130px', marginTop: '-8px' }} onClick={handleSkip}>Skip</Button>}
                    </Form>
                </Container>
            </Accordion.Body>
        </Accordion.Item>

    )
}

export default PlayerAuctionInformation