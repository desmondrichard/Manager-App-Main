import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Header from '../Header';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Card from 'react-bootstrap/Card';
import { useFormik } from 'formik';
import axios from 'axios';

function PurchaseDetails() {
    // POST request:
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            // aadharNo: showPutData?.aadharNo || '';
        },
        onSubmit: (values, { setSubmitting }) => {
            const newValues = { ...values };

            axios.post('', newValues)
                .then(response => {
                    console.log(response.data);
                    // onActivationKeyChild(childNextKey);
                    console.log("newvalues", newValues)
                    setSubmitting(false);
                })
                .catch(error => {
                    console.error(error.message);
                    console.log("newvalues", newValues)
                    setSubmitting(false);
                });
        }
    });
    return (
        <div>
            <Header />
            <div className='text-center'>
                <div className='playersList' style={{ whitespace: 'nowrap', minWidth: '250px' }}>ADD PURCHASE DETAILS</div>
            </div>
            <Row className='mt-2'>
                <Col xs={4} style={{ marginTop: '-5px' }}>
                    <NavLink to='/dashboard' className='navLinks'><Button variant="primary" className='mt-3 addPlayers butn1'>
                        Go Back
                    </Button>
                    </NavLink>
                </Col>
            </Row>
            <Form className='my-3' onSubmit={formik.handleSubmit}>
                <Card className='organizersCard mx-3'>
                    <Row className='pt-3'>
                        <Col md={4} sm={6} className='my-2'>
                            <FloatingLabel controlId="auctionTshirts" label="Auction Tshirts">
                                <Form.Select aria-label="auctionTshirts">
                                    <option value="none">Open this select menu</option>
                                    <option value="Shared">Shared</option>
                                    <option value="Yet to Share">Yet to Share</option>
                                    <option value="Received">Received</option>
                                    <option value="Yet to Receive">Yet to Receive</option>
                                    <option value="Partially Received">Partially Received</option>
                                    <option value="On Process">On Process</option>
                                    <option value="Submitted">Submitted</option>
                                    <option value="Not Yet Submitted">Not Yet Submitted</option>
                                    <option value="Booked">Booked</option>
                                    <option value="Completed">Completed</option>
                                    <option value="Partially Completed">Partially Completed</option>
                                    <option value="Ready">Ready</option>
                                    <option value="Not Ready">Not Ready</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Col>
                        <Col md={4} sm={6} className='my-2'>
                            <FloatingLabel controlId="GetTogetherTshirts" label="Get together Tshirts">
                                <Form.Select aria-label="GetTogetherTshirts">
                                    <option value="none">Open this select menu</option>
                                    <option value="Shared">Shared</option>
                                    <option value="Yet to Share">Yet to Share</option>
                                    <option value="Received">Received</option>
                                    <option value="Yet to Receive">Yet to Receive</option>
                                    <option value="Partially Received">Partially Received</option>
                                    <option value="On Process">On Process</option>
                                    <option value="Submitted">Submitted</option>
                                    <option value="Not Yet Submitted">Not Yet Submitted</option>
                                    <option value="Booked">Booked</option>
                                    <option value="Completed">Completed</option>
                                    <option value="Partially Completed">Partially Completed</option>
                                    <option value="Ready">Ready</option>
                                    <option value="Not Ready">Not Ready</option>
                                </Form.Select>
                            </FloatingLabel>

                        </Col>
                        <Col md={4} sm={6} className='my-2'>
                            <FloatingLabel controlId="matchJersey" label="Match Jersey">
                                <Form.Select aria-label="matchJersey">
                                    <option value="none">Open this select menu</option>
                                    <option value="Shared">Shared</option>
                                    <option value="Yet to Share">Yet to Share</option>
                                    <option value="Received">Received</option>
                                    <option value="Yet to Receive">Yet to Receive</option>
                                    <option value="Partially Received">Partially Received</option>
                                    <option value="On Process">On Process</option>
                                    <option value="Submitted">Submitted</option>
                                    <option value="Not Yet Submitted">Not Yet Submitted</option>
                                    <option value="Booked">Booked</option>
                                    <option value="Completed">Completed</option>
                                    <option value="Partially Completed">Partially Completed</option>
                                    <option value="Ready">Ready</option>
                                    <option value="Not Ready">Not Ready</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Col>
                        <Col md={4} sm={6} className='my-2'>
                            <FloatingLabel controlId="matchTrousers" label="Match Trousers">
                                <Form.Select aria-label="matchTrousers">
                                    <option value="none">Open this select menu</option>
                                    <option value="Shared">Shared</option>
                                    <option value="Yet to Share">Yet to Share</option>
                                    <option value="Received">Received</option>
                                    <option value="Yet to Receive">Yet to Receive</option>
                                    <option value="Partially Received">Partially Received</option>
                                    <option value="On Process">On Process</option>
                                    <option value="Submitted">Submitted</option>
                                    <option value="Not Yet Submitted">Not Yet Submitted</option>
                                    <option value="Booked">Booked</option>
                                    <option value="Completed">Completed</option>
                                    <option value="Partially Completed">Partially Completed</option>
                                    <option value="Ready">Ready</option>
                                    <option value="Not Ready">Not Ready</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Col>
                        <Col md={4} sm={6} className='my-2'>
                            <FloatingLabel controlId="trainingJersey" label="Training Jersey">
                                <Form.Select aria-label="trainingJersey">
                                    <option value="none">Open this select menu</option>
                                    <option value="Shared">Shared</option>
                                    <option value="Yet to Share">Yet to Share</option>
                                    <option value="Received">Received</option>
                                    <option value="Yet to Receive">Yet to Receive</option>
                                    <option value="Partially Received">Partially Received</option>
                                    <option value="On Process">On Process</option>
                                    <option value="Submitted">Submitted</option>
                                    <option value="Not Yet Submitted">Not Yet Submitted</option>
                                    <option value="Booked">Booked</option>
                                    <option value="Completed">Completed</option>
                                    <option value="Partially Completed">Partially Completed</option>
                                    <option value="Ready">Ready</option>
                                    <option value="Not Ready">Not Ready</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Col>
                        <Col md={4} sm={6} className='my-2'>
                            <FloatingLabel controlId="trainingTrousers" label="Training Trousers">
                                <Form.Select aria-label="trainingTrousers">
                                    <option value="none">Open this select menu</option>
                                    <option value="Shared">Shared</option>
                                    <option value="Yet to Share">Yet to Share</option>
                                    <option value="Received">Received</option>
                                    <option value="Yet to Receive">Yet to Receive</option>
                                    <option value="Partially Received">Partially Received</option>
                                    <option value="On Process">On Process</option>
                                    <option value="Submitted">Submitted</option>
                                    <option value="Not Yet Submitted">Not Yet Submitted</option>
                                    <option value="Booked">Booked</option>
                                    <option value="Completed">Completed</option>
                                    <option value="Partially Completed">Partially Completed</option>
                                    <option value="Ready">Ready</option>
                                    <option value="Not Ready">Not Ready</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Col>
                        <Col md={4} sm={6} className='my-2'>
                            <FloatingLabel controlId="travelTshirts" label="Travel Tshirts">
                                <Form.Select aria-label="travelTshirts">
                                    <option value="none">Open this select menu</option>
                                    <option value="Shared">Shared</option>
                                    <option value="Yet to Share">Yet to Share</option>
                                    <option value="Received">Received</option>
                                    <option value="Yet to Receive">Yet to Receive</option>
                                    <option value="Partially Received">Partially Received</option>
                                    <option value="On Process">On Process</option>
                                    <option value="Submitted">Submitted</option>
                                    <option value="Not Yet Submitted">Not Yet Submitted</option>
                                    <option value="Booked">Booked</option>
                                    <option value="Completed">Completed</option>
                                    <option value="Partially Completed">Partially Completed</option>
                                    <option value="Ready">Ready</option>
                                    <option value="Not Ready">Not Ready</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Col>
                        <Col md={4} sm={6} className='my-2'>
                            <FloatingLabel controlId="franchiseJersey" label="Franchise Jersey">
                                <Form.Select aria-label="franchiseJersey">
                                    <option value="none">Open this select menu</option>
                                    <option value="Shared">Shared</option>
                                    <option value="Yet to Share">Yet to Share</option>
                                    <option value="Received">Received</option>
                                    <option value="Yet to Receive">Yet to Receive</option>
                                    <option value="Partially Received">Partially Received</option>
                                    <option value="On Process">On Process</option>
                                    <option value="Submitted">Submitted</option>
                                    <option value="Not Yet Submitted">Not Yet Submitted</option>
                                    <option value="Booked">Booked</option>
                                    <option value="Completed">Completed</option>
                                    <option value="Partially Completed">Partially Completed</option>
                                    <option value="Ready">Ready</option>
                                    <option value="Not Ready">Not Ready</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Col>
                        <Col md={4} sm={6} className='my-2'>
                            <FloatingLabel controlId="fansJersey" label="Fans Jersey">
                                <Form.Select aria-label="fansJersey">
                                    <option value="none">Open this select menu</option>
                                    <option value="Shared">Shared</option>
                                    <option value="Yet to Share">Yet to Share</option>
                                    <option value="Received">Received</option>
                                    <option value="Yet to Receive">Yet to Receive</option>
                                    <option value="Partially Received">Partially Received</option>
                                    <option value="On Process">On Process</option>
                                    <option value="Submitted">Submitted</option>
                                    <option value="Not Yet Submitted">Not Yet Submitted</option>
                                    <option value="Booked">Booked</option>
                                    <option value="Completed">Completed</option>
                                    <option value="Partially Completed">Partially Completed</option>
                                    <option value="Ready">Ready</option>
                                    <option value="Not Ready">Not Ready</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Col>
                        <Col md={4} sm={6} className='my-2'>
                            <FloatingLabel controlId="teamFlags" label="Team Flags">
                                <Form.Select aria-label="teamFlags">
                                    <option value="none">Open this select menu</option>
                                    <option value="Shared">Shared</option>
                                    <option value="Yet to Share">Yet to Share</option>
                                    <option value="Received">Received</option>
                                    <option value="Yet to Receive">Yet to Receive</option>
                                    <option value="Partially Received">Partially Received</option>
                                    <option value="On Process">On Process</option>
                                    <option value="Submitted">Submitted</option>
                                    <option value="Not Yet Submitted">Not Yet Submitted</option>
                                    <option value="Booked">Booked</option>
                                    <option value="Completed">Completed</option>
                                    <option value="Partially Completed">Partially Completed</option>
                                    <option value="Ready">Ready</option>
                                    <option value="Not Ready">Not Ready</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Col>
                        <Col md={4} sm={6} className='my-2'>
                            <FloatingLabel controlId="fanFlags" label="Fan Flags">
                                <Form.Select aria-label="fanFlags">
                                    <option value="none">Open this select menu</option>
                                    <option value="Shared">Shared</option>
                                    <option value="Yet to Share">Yet to Share</option>
                                    <option value="Received">Received</option>
                                    <option value="Yet to Receive">Yet to Receive</option>
                                    <option value="Partially Received">Partially Received</option>
                                    <option value="On Process">On Process</option>
                                    <option value="Submitted">Submitted</option>
                                    <option value="Not Yet Submitted">Not Yet Submitted</option>
                                    <option value="Booked">Booked</option>
                                    <option value="Completed">Completed</option>
                                    <option value="Partially Completed">Partially Completed</option>
                                    <option value="Ready">Ready</option>
                                    <option value="Not Ready">Not Ready</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Col>
                    </Row>

                    <Row className='d-flex justify-content-center'>
                        <Button variant="primary" className='my-4 organizersBtn'>Submit</Button>
                    </Row>
                </Card>

            </Form >
        </div>
    )
}

export default PurchaseDetails