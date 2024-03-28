import React, { useEffect, useState } from 'react';
import './SocialMediaInfo.css';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useRef } from 'react';
//toast 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProgressBarWithLabel from '../ProgressBarWithLabel';
import axios from 'axios';
import { useFormik } from 'formik';

function SocialMediaInfo({ onCloseModal, onPreviousActivationKey, onShowData, showPutData, showSaveBtn }) {
    //close modal:
    const [modalClose, setModalClose] = useState(false)
    // reset form start: 
    const fbidReset = useRef("");
    const fblinkReset = useRef("");
    const instagramidReset = useRef("");
    const instagramlinkReset = useRef("");
    const twitteridReset = useRef("");
    const twitterlinkReset = useRef("");


    // for npm custom component dont use useRef instead use useState i.e for phone component
    function handleReset() {
        fbidReset.current.value = "";
        fblinkReset.current.value = "";
        instagramidReset.current.value = "";
        instagramlinkReset.current.value = "";
        twitteridReset.current.value = "";
        twitterlinkReset.current.value = "";
        formik.resetForm();
        setProgress(0);
    }

    // const handleSubmit = (e) => {
    //     // alert('Your information has been submitted!');
    //     notify();
    //     e.preventDefault();
    //     onCloseModal(modalClose);
    // }

    const handlePreviousButton = () => {
        onPreviousActivationKey("8")
    }

    //Toast msg:
    const notify = () => {
        toast.success("Form Successfully Submitted!", {
            position: toast.POSITION.TOP_CENTER // or 'BOTTOM_CENTER'
        });
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

    const formik = useFormik({
        initialValues: {
            facebookId: showPutData?.facebookId || '',
            facebookLink: showPutData?.facebookLink || '',
            instagramId: showPutData?.instagramId || '',
            instagramLink: showPutData?.instagramLink || '',
            twitterId: showPutData?.twitterId || '',
            twitterLink: showPutData?.twitterLink || ''

        },
        onSubmit: values => {
            axios.post('https://localhost:7097/SocialMediaModel', values)
                .then(response => {
                    notify(); //not working
                    console.log(response.data);
                    console.log("values", values)
                    onCloseModal(modalClose);
                    onShowData();
                })
                .catch(error => {
                    notify();  //not working
                    console.error(error.message);
                    console.log("values", values)
                    onCloseModal(modalClose);
                });

        }
    });

    console.log("showPutDataBank", showPutData)

    //update Method:
    function handleUpdate() {

        axios.put(`/${showPutData.alldataplayerId}`, formik.values, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (response.status === 200) {
                    console.log("Updation Data: ", response.data);
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



    // alert(`clicked submit`);
    // notify();
    // console.log("values", values)
    // onCloseModal(modalClose);

    useEffect(() => {
        handleProgress();
    }, [formik.values])

    return (
        <Accordion.Item eventKey="9">
            <ToastContainer />
            <Accordion.Header><i className="bi bi-info-circle-fill me-1"></i><span style={{ fontWeight: '700' }}>SOCIAL MEDIA INFORMATION</span><ProgressBarWithLabel progressValue={progress} /></Accordion.Header>
            <Accordion.Body>
                <Container >
                    <Form style={{ paddingRight: '60px' }} onSubmit={formik.handleSubmit}>
                        <Row>
                            <Col xs={12} lg={6} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="facebookId"
                                        type="text"
                                        placeholder="fbid"
                                        ref={fbidReset}
                                        name='facebookId'
                                        value={formik.values.facebookId} onBlur={formik.handleBlur} onChange={formik.handleChange}

                                    />
                                    <label htmlFor="facebookId" className='text-muted'>Facebook ID</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={6} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="facebookLink"
                                        type="text"
                                        placeholder="fblink"
                                        ref={fblinkReset}
                                        style={{ color: 'blue', cursor: 'pointer' }}
                                        name='facebookLink'
                                        value={formik.values.facebookLink} onBlur={formik.handleBlur} onChange={formik.handleChange}

                                    />
                                    <label htmlFor="facebookLink" className='text-muted'>Facebook Link</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={6} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="instagramId"
                                        type="text"
                                        placeholder="instagramid"
                                        ref={instagramidReset}
                                        name='instagramId'
                                        value={formik.values.instagramId} onBlur={formik.handleBlur} onChange={formik.handleChange}

                                    />
                                    <label htmlFor="instagramId" className='text-muted'>Instagram ID</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={6} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="instagramLink"
                                        type="text"
                                        placeholder="instagramlink"
                                        ref={instagramlinkReset}
                                        style={{ color: 'blue', cursor: 'pointer' }}
                                        name='instagramLink'
                                        value={formik.values.instagramLink} onBlur={formik.handleBlur} onChange={formik.handleChange}

                                    />
                                    <label htmlFor="instagramLink" className='text-muted'>Instagram Link</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={6} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="twitterId"
                                        type="text"
                                        placeholder="twitterid"
                                        ref={twitteridReset}
                                        name='twitterId'
                                        value={formik.values.twitterId} onBlur={formik.handleBlur} onChange={formik.handleChange}

                                    />
                                    <label htmlFor="twitterId" className='text-muted'>Twitter ID</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={6} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="twitterLink"
                                        type="text"
                                        placeholder="twitterlink"
                                        ref={twitterlinkReset}
                                        style={{ color: 'blue', cursor: 'pointer' }}
                                        name='twitterLink'
                                        value={formik.values.twitterLink} onBlur={formik.handleBlur} onChange={formik.handleChange}

                                    />
                                    <label htmlFor="twitterLink" className='text-muted'>Twitter Link</label>
                                </Form.Floating>
                            </Col>
                        </Row>

                        <Col lg={12} className='my-4 col'>
                            <Button variant="primary" className='me-1 mb-2 mx-1 ' style={{ width: "130px" }} onClick={handlePreviousButton}>PREVIOUS</Button>
                            {showSaveBtn && <Button type="submit" variant="success" className='me-1 mb-2 mx-1 ' style={{ width: "130px" }}>Save and Next</Button>}
                            <Button variant="warning" className='text-white mb-2 mx-1' style={{ width: "130px" }} onClick={() => handleReset()}>CLEAR</Button>
                            {!showSaveBtn && <Button variant="info" className='mx-1 mt-1' style={{ whiteSpace: 'nowrap', width: '130px', marginTop: '-8px' }} onClick={handleUpdate}>Update</Button>}

                        </Col>
                    </Form>
                </Container>
            </Accordion.Body>
        </Accordion.Item>

    )
}

export default SocialMediaInfo