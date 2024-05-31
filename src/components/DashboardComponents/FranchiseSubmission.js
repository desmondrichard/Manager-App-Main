import React from 'react';
import Header from '../Header';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Card from 'react-bootstrap/Card';
import { useFormik } from 'formik';
import axios from 'axios';

function FranchiseSubmission() {
    // POST request:
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            // aadharNo: showPutData?.aadharNo || '';
        },
        onSubmit: (values, { setSubmitting }) => {
            const newValues = { ...values };

            axios.post('https://localhost:7097/IDCardDetailsModel', newValues)
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
                <div className='playersList' style={{ whitespace: 'nowrap', minWidth: '250px' }}>ADD FRANCHISE TODO</div>
            </div>
            <Row className='mt-2'>
                <Col xs={4} style={{ marginTop: '-5px' }}>
                    <NavLink to='/dashboard' className='navLinks'><Button variant="primary" className='mt-3 addPlayers butn1'>
                        Go Back
                    </Button>
                    </NavLink>
                </Col>
            </Row>

            <Form className='my-3'>
                <Card className='organizersCard mx-3'>
                    <Row className='pt-3'>
                        <Col md={4} sm={6} className='my-2'>
                            <FloatingLabel controlId="selectionTrials" label="Selection Trials">
                                <Form.Select aria-label="selectionTrials">
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
                            <FloatingLabel controlId="auction" label="Auction">
                                <Form.Select aria-label="auction">
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
                            <FloatingLabel controlId="dataCollection" label="Data Collection">
                                <Form.Select aria-label="dataCollection">
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
                            <FloatingLabel controlId="fixtures" label="Fixtures">
                                <Form.Select aria-label="fixtures">
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
                            <FloatingLabel controlId="hotelBookings" label="Hotel Bookings">
                                <Form.Select aria-label="hotelBookings">
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
                            <FloatingLabel controlId="teamPractice" label="Team Practice Schedule Request">
                                <Form.Select aria-label="teamPractice">
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
                            <FloatingLabel controlId="tnplLogo" label="TNPL Logo">
                                <Form.Select aria-label="tnplLogo">
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
                            <FloatingLabel controlId="franchiseTeamLogo" label="Franchise Team Logo">
                                <Form.Select aria-label="franchiseTeamLogo">
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
                            <FloatingLabel controlId="franchiseTicket" label="Franchise Ticket Request">
                                <Form.Select aria-label="franchiseTicket">
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
                            <FloatingLabel controlId="playersReplacement" label="Players Replacement Form">
                                <Form.Select aria-label="playersReplacement">
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
                            <FloatingLabel controlId="franchiseAnthem" label="Franchise Anthem">
                                <Form.Select aria-label="franchiseAnthem">
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
                            <FloatingLabel controlId="teamFlags" label="Team Flags Size 6*3">
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
                            <FloatingLabel controlId="LEDDugout" label="LED Dugout and Perimeter">
                                <Form.Select aria-label="LEDDugout">
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

export default FranchiseSubmission