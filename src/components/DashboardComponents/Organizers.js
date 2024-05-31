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
import './Organizers.css';

function Organizers() {
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
        <>
            <Header />
            <div className='text-center'>
                <div className='playersList' style={{ whitespace: 'nowrap', minWidth: '250px' }}>ADD ORGANIZERS</div>
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
                            <FloatingLabel controlId="FranchiseLogo" label="Franchise Logo">
                                <Form.Select aria-label="FranchiseLogo">
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
                            <FloatingLabel controlId="hotelBookingDetails" label="Hotel Booking Details">
                                <Form.Select aria-label="hotelBookingDetails">
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
                            <FloatingLabel controlId="practiceScheduleRequest" label="Practice Schedule Request">
                                <Form.Select aria-label="practiceScheduleRequest">
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
                            <FloatingLabel controlId="accreditationCards" label="Accreditation Cards">
                                <Form.Select aria-label="accreditationCards">
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
                            <FloatingLabel controlId="playingKitApproval" label="Playing Kit Approval">
                                <Form.Select aria-label="playingKitApproval">
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
                        <Col md={4} sm={6} className='my-2'>
                            <FloatingLabel controlId="sponsorLogos" label="Sponsor Logos">
                                <Form.Select aria-label="sponsorLogos">
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
                            <FloatingLabel controlId="groundMat" label="Ground Mat Approval">
                                <Form.Select aria-label="groundMat">
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
                            <FloatingLabel controlId="playersPhotoShoot" label="Players Photoshoot">
                                <Form.Select aria-label="playersPhotoShoot">
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
                            <FloatingLabel controlId="tossRepresentatives" label="Toss Representatives">
                                <Form.Select aria-label="tossRepresentatives">
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
                            <FloatingLabel controlId="ticketRequest" label="Ticket Request">
                                <Form.Select aria-label="ticketRequest">
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
                            <FloatingLabel controlId="jerseySubmission" label="Jersey Submission">
                                <Form.Select aria-label="jerseySubmission">
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
                            <FloatingLabel controlId="playersContract" label="Players Contract">
                                <Form.Select aria-label="playersContract">
                                    <option value="none">Open this select menu</option>
                                    <option value="Signed">Signed</option>
                                    <option value="Not Signed">Not Signed</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Col>

                    </Row>
                    <Row className='d-flex justify-content-center'>
                        <Button variant="primary" className='my-4 organizersBtn'>Submit</Button>
                    </Row>
                </Card>

            </Form >
        </>
    )
}

export default Organizers