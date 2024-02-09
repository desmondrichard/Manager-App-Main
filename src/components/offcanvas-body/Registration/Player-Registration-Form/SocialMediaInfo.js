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
                                        id="facebookId"
                                        type="text"
                                        placeholder="fbid"
                                        ref={fbidReset}
                                        name='facebookId'
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
                                    />
                                    <label htmlFor="twitterLink" className='text-muted'>Twitter Link</label>
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