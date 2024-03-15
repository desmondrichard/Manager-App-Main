import React, { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useRef } from 'react';
import ProgressBarWithLabel from '../../ProgressBarWithLabel';
import { useFormik } from 'formik';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function StaffSocialMediaInfo({ onCloseModal, onPreviousActivationKey, onShowData }) {

    const [modalClose, setModalClose] = useState(false)
    // reset form start: 
    const fbid1 = useRef("");
    const fblink1 = useRef("");
    const instagramid1 = useRef("");
    const instagramlink1 = useRef("");
    const twitterid1 = useRef("");
    const twitterlink1 = useRef("");


    // for npm custom component dont use useRef instead use useState i.e for phone component
    function handleReset() {
        fbid1.current.value = "";
        fblink1.current.value = "";
        instagramid1.current.value = "";
        instagramlink1.current.value = "";
        twitterid1.current.value = "";
        twitterlink1.current.value = "";
        formik.resetForm();
        setProgress(0);
    }

    const handlePreviousButton = () => {
        onPreviousActivationKey("7")
    }

    //Toast msg:
    const notify = () => {
        toast.success("Form Successfully Submitted!", {
            position: toast.POSITION.TOP_CENTER // or 'BOTTOM_CENTER'
        });
    }
    //Progress Bar:
    const [progress, setProgress] = useState(0);

    function handleProgress() {
        //check form values or formik values:
        console.log(formik.values);
        //set progress as 1 if current form field is filled else 0:  
        //get no of form vals filled by adding it inside a object:
        const result = countKeysWithNonEmptyValues(formik.values); //sending object as parameter which has all form fields
        console.log(result);  //returned count is stored in result variable
        //calc formula
        let newProgress = ((result / 6) * 100).toFixed();
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

    const formik = useFormik({
        initialValues: {
            facebookId: '',
            facebookLink: '',
            instagramId: '',
            instagramLink: '',
            twitterId: '',
            twitterLink: ''

        },
        onSubmit: values => {
            axios.post('https://localhost:7097/StaffSocialMediaModel', values)
                .then(response => {
                    console.log(response.data);
                    console.log("values", values)
                    alert('clicked')
                    onCloseModal(modalClose);
                    //   call a function from parent
                    onShowData();

                })
                .catch(error => {
                    console.error(error.message);
                    console.log("values", values)
                    alert('clicked')
                    onCloseModal(modalClose);
                });
                 //not working
        }
    });

    // alert(`clicked submit`);
    // notify();
    // console.log("values", values)
    // onCloseModal(modalClose);

    useEffect(() => {
        handleProgress();
    }, [formik.values]); // Ensure that the effect is triggered when form values change

    return (

        <Accordion.Item eventKey="8">
            <ToastContainer />
            <Accordion.Header><i className="bi bi-info-circle-fill me-1"></i><span style={{ fontWeight: '700' }}>SOCIAL MEDIA INFORMATION</span><ProgressBarWithLabel progressValue={progress} /></Accordion.Header>
            <Accordion.Body>
                <Container >
                    <Form style={{ paddingRight: '60px' }} onSubmit={formik.handleSubmit}>
                        <Row>
                            <Col xs={12} lg={6} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        name="facebookId"
                                        id="facebookId"
                                        type="text"
                                        placeholder="fbid"
                                        ref={fbid1}
                                        onChange={(e) => { formik.handleChange(e) }}
                                    />
                                    <label htmlFor="facebookId" className='text-muted'>Facebook ID</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={6} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        name="facebookLink"
                                        id="facebookLink"
                                        type="text"
                                        placeholder="fblink"
                                        ref={fblink1}
                                        style={{ color: 'blue', cursor: 'pointer' }}
                                        onChange={(e) => { formik.handleChange(e) }}
                                    />
                                    <label htmlFor="facebookLink" className='text-muted'>Facebook Link</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={6} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        name="instagramId"
                                        id="instagramId"
                                        type="text"
                                        placeholder="instagramid"
                                        ref={instagramid1}
                                        onChange={(e) => { formik.handleChange(e) }}
                                    />
                                    <label htmlFor="instagramId" className='text-muted'>Instagram ID</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={6} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        name="instagramLink"
                                        id="instagramLink"
                                        type="text"
                                        placeholder="instagramlink"
                                        ref={instagramlink1}
                                        style={{ color: 'blue', cursor: 'pointer' }}
                                        onChange={(e) => { formik.handleChange(e) }}
                                    />
                                    <label htmlFor="instagramLink" className='text-muted'>Instagram Link</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={6} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        name="twitterId"
                                        id="twitterId"
                                        type="text"
                                        placeholder="twitterid"
                                        ref={twitterid1}
                                        onChange={(e) => { formik.handleChange(e) }}
                                    />
                                    <label htmlFor="twitterId" className='text-muted'>Twitter ID</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={6} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        name="twitterLink"
                                        id="twitterLink"
                                        type="text"
                                        placeholder="twitterlink"
                                        style={{ color: 'blue', cursor: 'pointer' }}
                                        ref={twitterlink1}
                                        onChange={(e) => { formik.handleChange(e) }}
                                    />
                                    <label htmlFor="twitterLink" className='text-muted'>Twitter Link</label>
                                </Form.Floating>
                            </Col>
                        </Row>

                        <Col lg={12} className='my-4 col'>
                            <Button variant="primary" type="button" className='me-1 mb-2 mx-1 ' style={{ width: "130px" }} onClick={handlePreviousButton}>PREVIOUS</Button>
                            <Button type="submit" variant="success" className='me-1 mb-2 mx-1 ' style={{ width: "130px" }}>Save and Next</Button>
                            <Button variant="warning" className='text-white mb-2 mx-1 ' style={{ width: "130px" }} onClick={() => handleReset()}>CLEAR</Button>
                        </Col>
                    </Form>
                </Container>
            </Accordion.Body>
        </Accordion.Item>

    )
}

export default StaffSocialMediaInfo