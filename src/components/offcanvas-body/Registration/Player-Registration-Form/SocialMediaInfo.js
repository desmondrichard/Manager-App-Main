import React, { useState } from 'react';
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
function SocialMediaInfo({ onCloseModal, onPreviousActivationKey }) {
    //close modal:
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

    }

    const handleSubmit = (e) => {
        // alert('Your information has been submitted!');
        notify();
        e.preventDefault();
        onCloseModal(modalClose);
    }

    const handlePreviousButton = () => {
        onPreviousActivationKey("8")
    }

    //Toast msg:
    const notify = () => {
        toast.success("Form Successfully Submitted!", {
            position: toast.POSITION.TOP_CENTER // or 'BOTTOM_CENTER'
        });
    }

    return (
        <Accordion.Item eventKey="9">
            <ToastContainer />
            <Accordion.Header><i className="bi bi-info-circle-fill me-1"></i><span style={{ fontWeight: '700' }}>SOCIAL MEDIA INFORMATION</span></Accordion.Header>
            <Accordion.Body>
                <Container >
                    <Form style={{ paddingRight: '60px' }}>
                        <Row>
                            <Col xs={12} lg={6} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="fbid"
                                        type="text"
                                        placeholder="fbid"
                                        ref={fbid1}
                                    />
                                    <label htmlFor="fbid" className='text-muted'>Facebook ID</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={6} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="fblink"
                                        type="text"
                                        placeholder="fblink"
                                        ref={fblink1}
                                        style={{ color: 'blue', cursor: 'pointer' }}
                                    />
                                    <label htmlFor="fblink" className='text-muted'>Facebook Link</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={6} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="instagramid"
                                        type="text"
                                        placeholder="instagramid"
                                        ref={instagramid1}

                                    />
                                    <label htmlFor="instagramid" className='text-muted'>Instagram ID</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={6} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="instagramlink"
                                        type="text"
                                        placeholder="instagramlink"
                                        ref={instagramlink1}
                                        style={{ color: 'blue', cursor: 'pointer' }}
                                    />
                                    <label htmlFor="instagramlink" className='text-muted'>Instagram Link</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={6} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="twitterid"
                                        type="text"
                                        placeholder="twitterid"
                                        ref={twitterid1}

                                    />
                                    <label htmlFor="twitterid" className='text-muted'>Twitter ID</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={6} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="twitterlink"
                                        type="text"
                                        placeholder="twitterlink"
                                        ref={twitterlink1}
                                        style={{ color: 'blue', cursor: 'pointer' }}
                                    />
                                    <label htmlFor="twitterlink" className='text-muted'>Twitter Link</label>
                                </Form.Floating>
                            </Col>
                        </Row>

                        <Col lg={12} className='my-4 col'>
                            <Button variant="primary" className='me-1 mb-2 mx-1 ' style={{ width: "130px" }} onClick={handlePreviousButton}>PREVIOUS</Button>
                            <Button type="submit" variant="success" className='me-1 mb-2 mx-1 ' style={{ width: "130px" }} onClick={(e) => handleSubmit(e)}>Save and Next</Button>
                            <Button variant="warning" className='text-white mb-2 mx-1 ' style={{ width: "130px" }} onClick={() => handleReset()}>CLEAR</Button>
                        </Col>
                    </Form>
                </Container>
            </Accordion.Body>
        </Accordion.Item>

    )
}

export default SocialMediaInfo