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

    if (!/^[0-9]{1,10}$/.test(values.price)) {
        if (values.price.match(/[a-zA-Z]/)) {
            errors.price = "Only Numeric values accepted";
        } else {
            errors.price = "Length should be between 1 and 10 digits";
        }
    }

    if (!/^[a-zA-Z]{0,1}$/.test(values.category)) {
        errors.category = "Only one Letter allowed";
    }

    return errors;
}

function PlayerAuctionInformation({ activationKey, onActivationKeyChild, onPreviousActivationKey, showPutData, showSaveBtn, showClearBtn, handlePrevClick, previousClk, showSkipBtn }) {
    // reset form start: 
    const PriceReset = useRef("");
    const PickStatusReset = useRef("");
    const CategoryReset = useRef("");
    const CurrentStatusReset = useRef("");

    function handleReset() {
        PriceReset.current.value = "";
        PickStatusReset.current.value = "none";
        CategoryReset.current.value = "";
        CurrentStatusReset.current.value = "none";
        formik.resetForm();
        setProgress(0);
    }


    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            price: showPutData?.price || '',
            pickStatus: showPutData?.pickStatus || '',
            category: showPutData?.category || '',
            currentStatus: showPutData?.currentStatus || ''
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

    //next btn:
    const [childNextKey, setChildNextKey] = useState("10")

    // Previous btn:
    const handlePreviousButton = () => {
        onPreviousActivationKey("8")
        handlePrevClick(true)
    }

    // Progress Bar:
    const [progress, setProgress] = useState(0);

    function handleProgress() {
        console.log("formikvalues11", formik.values)
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


    // Update Request:
    function handleUpdate() {
        axios.put(`https://localhost:7097/api/PlayerAuction/${showPutData.alldataplayerId}`, formik.values, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (response.status === 200) {
                    console.log("Updation Data1: ", response.data);
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




    // Skip:
    function handleSkip() {
        onActivationKeyChild(childNextKey)
        handlePrevClick(true)
    }

    useEffect(() => {
        handleProgress();
    }, [formik.values])



    console.log("showPutDataPAII", showPutData)
    return (
        <Accordion.Item eventKey="9">
            <Accordion.Header><i className="bi bi-info-circle-fill me-1"></i><span style={{ fontWeight: '700' }}>PLAYER AUCTION INFORMATION</span><ProgressBarWithLabel progressValue={progress} /></Accordion.Header>
            <Accordion.Body>
                <Container>
                    {console.log("formikPAI", formik.values)}
                    <Form onSubmit={formik.handleSubmit}>
                        <Row>
                            <Col xs={12} lg={6} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="price"
                                        type="text"
                                        name="price"
                                        placeholder="price"
                                        ref={PriceReset}
                                        value={formik.values.price}
                                        onBlur={formik.handleBlur}
                                        onChange={(e) => {
                                            formik.setFieldValue('price', e.target.value.toUpperCase())
                                        }}
                                    />
                                    {
                                        formik.touched.price && formik.errors.price ? <span className='span'>{formik.errors.price}</span> : null
                                    }
                                    <label htmlFor="price" className='text-muted'>Price</label>

                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={6} className='col'>
                                <FloatingLabel className='mb-2'
                                    controlId="pickStatus"
                                    label="Pick-Status"
                                    name="pickStatus"

                                >
                                    <Form.Select aria-label="pickStatus" ref={PickStatusReset} value={formik.values.pickStatus} onBlur={formik.handleBlur} onChange={(e) => formik.setFieldValue('pickStatus', e.target.value)}>
                                        <option value="none">Select Type</option>
                                        <option value="Auction">Auction</option>
                                        <option value="Retained">Retained</option>
                                    </Form.Select>
                                    {
                                        formik.touched.pickStatus && formik.errors.pickStatus ? <span
                                            className='span'>{formik.errors.pickStatus}</span> : null
                                    }
                                </FloatingLabel>
                            </Col>
                            <Col xs={12} lg={6} className='col'>
                                <Form.Floating

                                    className="mb-2"
                                >
                                    <Form.Control id="category" className='category' type="text" placeholder="category" ref={CategoryReset} value={formik.values.category} onBlur={formik.handleBlur} onChange={(e) => {
                                        formik.setFieldValue('Category', e.target.value.toUpperCase())
                                    }} />
                                    {
                                        formik.touched.category && formik.errors.category ? <span className='span'>{formik.errors.category}</span> : null
                                    }
                                    <label htmlFor="category" className='text-muted'>Category</label>

                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={6} className='col'>
                                <FloatingLabel className='mb-2'
                                    controlId="currentStatus"
                                    label="currentStatus"
                                    name="currentStatus"
                                >
                                    <Form.Select aria-label="currentStatus" ref={CurrentStatusReset} value={formik.values.currentStatus} onBlur={formik.handleBlur} onChange={(e) => formik.setFieldValue('currentStatus', e.target.value)}>
                                        <option value="none">Select Type</option>
                                        <option value="Active">Acitve</option>
                                        <option value="Injured">Injured</option>
                                        <option value="Fitness">Fitness</option>
                                    </Form.Select>
                                    {
                                        formik.touched.currentStatus && formik.errors.currentStatus ? <span
                                            className='span'>{formik.errors.currentStatus}</span> : null
                                    }

                                </FloatingLabel>
                            </Col>
                            <Col lg={12} className='my-4 col'>
                                {previousClk && <Button variant="primary" className='me-1 mb-2 previousP' style={{ width: "130px" }} onClick={handlePreviousButton}>Previous</Button>}
                                {showSaveBtn && !previousClk && <Button type="submit" variant="success" className='me-1 mb-2 mx-1 ' style={{ width: "130px" }}>Save and Next</Button>}
                                {showClearBtn && <Button variant="warning" className='text-white mb-2 ' style={{ width: "130px" }} onClick={() => handleReset()}>Clear</Button>}
                                {!showSaveBtn && <Button variant="info" className='mx-1 updateP' style={{ whiteSpace: 'nowrap', width: '130px', marginTop: '-9px' }} onClick={handleUpdate}>Update</Button>}
                                {(previousClk || showSkipBtn) && <Button variant="dark" className='skip ms-1' style={{ whiteSpace: 'nowrap', width: '130px', marginTop: '-8px' }} onClick={handleSkip}>Skip</Button>}
                            </Col>
                        </Row>

                    </Form>
                </Container>
            </Accordion.Body>
        </Accordion.Item>

    )
}

export default PlayerAuctionInformation