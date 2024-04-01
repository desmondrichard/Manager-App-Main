import React, { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useFormik } from 'formik';
import { useRef } from 'react';
import ProgressBarWithLabel from '../../ProgressBarWithLabel';
import axios from 'axios';

// validation:
const validate = values => {
    const errors = {};

    if (!values.cityDistrict) {
        errors.cityDistrict = "*Required";
    }
    else if (!/^[a-zA-Z]{3,15}$/.test(values.cityDistrict)) {
        errors.cityDistrict = "City name should be between 3 to 15 characters long or only letters allowed";
    }

    if (!values.club) {
        errors.club = "*Required";
    }
    else if (!/^[a-zA-Z]{3,15}$/.test(values.club)) {
        errors.club = "Club name should be between 3 to 15 characters maximum or only letters allowed";
    }

    if (!values.division) {
        errors.division = "*Required";
    }
    else if (!/^[a-zA-Z1-9]{0,15}$/.test(values.division)) {
        errors.division = "Enter valid details";
    }
    return errors;
}
function StaffPreviousRepresentation({ activationKey, onActivationKeyChild, onPreviousActivationKey, showPutData, showSaveBtn }) {
    const [childNextKey, setChildNextKey] = useState("7");
    // reset form start: 
    const city1 = useRef("");
    const club1 = useRef("");
    const division1 = useRef("");


    // for npm custom component dont use useRef instead use useState i.e for phone component
    function handleReset() {
        city1.current.value = "";
        club1.current.value = "";
        division1.current.value = "";
        formik.resetForm();
        setProgress(0);
    }
    const formik = useFormik({
        initialValues: {
            cityDistrict: showPutData?.cityDistrict || '',
            club: showPutData?.club || '',
            division: showPutData?.division || '',

        },
        validate,
        onSubmit: values => {
            axios.post('https://localhost:7097/StaffRepresentation', values)
                .then(response => {
                    console.log(response.data);
                    onActivationKeyChild(childNextKey)
                    console.log("values", values)

                })
                .catch(error => {
                    console.error(error.message);
                    console.log("values", values)

                });
        }
    });

    // alert(`Hello! ,${values.fNamelNamemName}you have successfully signed up`);
    // onActivationKeyChild(childNextKey)
    // console.log("values",values)

    const handlePreviousButton = () => {
        onPreviousActivationKey("5")
    }

    //Progress Bar:
    const [progress, setProgress] = useState(0);

    function handleProgress() {
        //check form values or formik values:
        console.log("formik vals Representation:", formik.values);
        //set progress as 1 if current form field is filled else 0:  
        //get no of form vals filled by adding it inside a object:
        const result = countKeysWithNonEmptyValues(formik.values); //sending object as parameter which has all form fields
        console.log(result);  //returned count is stored in result variable
        //calc formula
        let newProgress = ((result / 3) * 100).toFixed();
        console.log("Progress", newProgress)
        //store result progress value
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

    //update:
    console.log('showPutDataRep', showPutData)
    function handleUpdate() {

        axios.put(`https://localhost:7097/StaffRepresentationinformationModel/${showPutData.alldataStaffId}`, formik.values, {
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

    function handleSkip() {
        onActivationKeyChild(childNextKey)
    }

    //useEffect will be trigerred whenever formik.values has value
    useEffect(() => {
        handleProgress();
    }, [formik.values]); // Ensure that the effect is triggered when form values change


    return (

        <Accordion.Item eventKey="6">
            <Accordion.Header><i className="bi bi-info-circle-fill me-1"></i><span style={{ fontWeight: '700' }}>REPRESENTATION INFORMATION</span><ProgressBarWithLabel progressValue={progress} /> </Accordion.Header>
            <Accordion.Body>
                <Container >
                    <Form style={{ paddingRight: '60px' }} onSubmit={formik.handleSubmit}>
                        <Row>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="division"
                                        type="text"
                                        placeholder="division"
                                        ref={division1}
                                        name="division"
                                        value={formik.values.division} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.division && formik.errors.division ? <span className='span'>{formik.errors.division}</span> : null
                                    }
                                    <label htmlFor="division" className='text-muted'>Division*</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="cityDistrict"
                                        type="text"
                                        placeholder="city"
                                        name="cityDistrict"
                                        ref={city1}
                                        value={formik.values.cityDistrict} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.cityDistrict && formik.errors.cityDistrict ? <span className='span'>{formik.errors.cityDistrict}</span> : null
                                    }
                                    <label htmlFor="cityDistrict" className='text-muted'>City/District*</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="club"
                                        type="text"
                                        placeholder="club"
                                        name="club"
                                        ref={club1}
                                        value={formik.values.club} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.club && formik.errors.club ? <span className='span'>{formik.errors.club}</span> : null
                                    }
                                    <label htmlFor="club" className='text-muted'>Club*</label>
                                </Form.Floating>
                            </Col>

                        </Row>

                        <Col lg={12} className='my-4 col'>
                            <Button variant="primary" className='me-1 mb-2 mx-1 ' style={{ width: "130px" }} onClick={handlePreviousButton}>PREVIOUS</Button>
                            {showSaveBtn && <Button type="submit" variant="success" className='me-1 mb-2 mx-1 ' style={{ width: "130px" }}>Save and Next</Button>}
                            <Button variant="warning" className='text-white mb-2 mx-1 ' style={{ width: "130px" }} onClick={() => handleReset()}>CLEAR</Button>
                            {!showSaveBtn && <Button variant="info" className='mx-1 update' style={{ whiteSpace: 'nowrap', width: '130px', marginTop: '-8px' }} onClick={handleUpdate}>Update</Button>}
                            {!showSaveBtn && <Button variant="dark" className='mx-1 skip' style={{ whiteSpace: 'nowrap', width: '130px', marginTop: '-8px' }} onClick={handleSkip}>Skip</Button>}
                        </Col>
                    </Form>
                </Container>
            </Accordion.Body>
        </Accordion.Item>

    )
}

export default StaffPreviousRepresentation