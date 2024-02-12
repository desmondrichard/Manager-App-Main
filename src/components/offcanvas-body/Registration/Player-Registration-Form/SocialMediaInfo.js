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
import { useFormik } from 'formik';

function SocialMediaInfo({ onCloseModal, onPreviousActivationKey }) {
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
            facebookId: '',
            facebookLink: '',
            instagramId: '',
            instagramLink: '',
            twitterId: '',
            twitterLink: ''

        },
        onSubmit: values => {
            alert(`clicked submit`);
            notify();
            console.log("values", values)
            onCloseModal(modalClose);

        }
    });


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
                                        onChange={(e) => { formik.handleChange(e) }}
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
                                        onChange={(e) => { formik.handleChange(e) }}
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
                                        onChange={(e) => { formik.handleChange(e) }}
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
                                        onChange={(e) => { formik.handleChange(e) }}
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
                                        onChange={(e) => { formik.handleChange(e) }}
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
                                        onChange={(e) => { formik.handleChange(e) }}
                                    />
                                    <label htmlFor="twitterLink" className='text-muted'>Twitter Link</label>
                                </Form.Floating>
                            </Col>
                        </Row>

                        <Col lg={12} className='my-4 col'>
                            <Button variant="primary" className='me-1 mb-2 mx-1 ' style={{ width: "130px" }} onClick={handlePreviousButton}>PREVIOUS</Button>
                            <Button type="submit" variant="success" className='me-1 mb-2 mx-1 ' style={{ width: "130px" }}>Save and Next</Button>
                            <Button variant="warning" className='text-white mb-2 mx-1 ' style={{ width: "130px" }} onClick={() => handleReset()}>CLEAR</Button>
                        </Col>
                    </Form>
                </Container>
            </Accordion.Body>
        </Accordion.Item>

    )
}

export default SocialMediaInfo