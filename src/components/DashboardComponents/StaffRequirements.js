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

function StaffRequirements() {
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
                            <FloatingLabel controlId="physioEquipment" label="Physio Equipment">
                                <Form.Select aria-label="physioEquipment">
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
                            <FloatingLabel controlId="trainerEquipment" label="Trainer Equipment">
                                <Form.Select aria-label="trainerEquipment">
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
                            <FloatingLabel controlId="coachEquipment" label="Coach Equipment">
                                <Form.Select aria-label="coachEquipment">
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
                            <FloatingLabel controlId="videoAnalystEquipment" label="Video Analyst Equipment">
                                <Form.Select aria-label="videoAnalystEquipment">
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
                            <FloatingLabel controlId="logisticsMaterial" label="Logistics Material">
                                <Form.Select aria-label="logisticsMaterial">
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
                            <FloatingLabel controlId="masseurMaterial" label="Masseur Material">
                                <Form.Select aria-label="masseurMaterial">
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
                            <FloatingLabel controlId="kokkaburraTurf" label="Kokkaburra Turf">
                                <Form.Select aria-label="kokkaburraTurf">
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
                            <FloatingLabel controlId="sgTest" label="SG Test">
                                <Form.Select aria-label="sgTest">
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
        </>
    )
}

export default StaffRequirements