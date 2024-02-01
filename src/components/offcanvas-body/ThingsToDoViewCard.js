import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import './ThingsToDoViewCard.css';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import Header from '../Header';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ExploreOptions from '../ModalComponents/ExploreOptions';
import format from 'date-fns/format';
import { useLocation } from 'react-router-dom';
//
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
function ThingsToDoViewCard() {
    const location = useLocation();
    console.log("location", location)

    //ID
    // const param = useParams();
    // console.log(param);
    // const [showData, setShowData] = useState({});
    // const postId = 1; // replace this with the actual post id

    // useEffect(() => {
    //     axios.get(`http://192.168.1.192/ManagerApi/register/AllDataThingsToDo/${postId}`)
    //         .then(response => {
    //             setShowData(response.data);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // }, [postId]);


    // Data Binding:
    // const [showData, setShowData] = useState(null);
    // useEffect(() => {
    //     fetch('http://192.168.1.192/ManagerApi/register/AllDataThingsToDo')
    //         .then((data) => data.json())
    //         .then((data) => {
    //             // console.log("data",data);
    //             setShowData(data);  // showData=data;
    //         })
    // }, [])

    var formattedDate;
    return (
        <div>
            <Header />
            <div className='headerBtn my-3'>
                <h5>THINGS TODO DETAILS-LIST</h5>
            </div>
            <div>
                <Row>
                    <Col lg={3} className='mb-2'>
                        <NavLink to='/thingstodo' className='navLinks'><Button variant="primary" style={{ fontWeight: 'bold' }}>Go Back</Button></NavLink>
                    </Col>
                    <Col lg={{ span: 3, offset: 6 }} ><ExploreOptions /></Col>
                </Row>
            </div>

            <Card className='my-3 m-auto' style={{ width: '90%', border: '2px outset #2E83D8' }}>
                <Card.Body>
                    {/* Card:1 */}
                    <Card style={{ width: '100%' }} className='todoSubCard'>
                        <Card.Header className='todoHeader'>REPRESENTATIVES FORM</Card.Header>
                        <Card.Body>
                            <Row style={{ fontSize: '14px' }}>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>ID: <span style={{ fontWeight: '400' }}>{location.state.showData.alldataThingsId ? location.state.showData.alldataThingsId : '-'}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard' style={{ whiteSpace: 'nowrap' }}>Representatives Name: <span style={{ fontWeight: '400' }}>{location.state.showData.representatives ? location.state.showData.representatives : '-'}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Team Name: <span style={{ fontWeight: '400' }}>{location.state.showData.name ? location.state.showData.name : '-'}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Team Tshirt: <span style={{ fontWeight: '400' }}>{location.state.showData.teamTshirt ? location.state.showData.teamTshirt : '-'}</span></div></Col>
                                <Col xs={12} md={6} xl={4} className='todoCol'><div className='divCard'>Team Uniform: <span style={{ fontWeight: '400' }}>{location.state.showData.teamUniform ? location.state.showData.teamUniform : '-'}</span></div></Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    {/* Card:2 */}
                    <Card style={{ width: '100%' }} className='mt-3 todoSubCard'>
                        <Card.Header className='todoHeader'>BRANDING FORM</Card.Header>
                        <Card.Body>
                            <Row style={{ fontSize: '14px' }}>
                                <Col md={4} className='todoCol'><div className='divCard'>ID: <span style={{ fontWeight: '400' }}>{location.state.showData.alldataThingsId ? location.state.showData.alldataThingsId : '-'}</span></div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Team Logo: <span style={{ fontWeight: '400' }}>{location.state.showData.teamLogo ? location.state.showData.teamLogo : '-'}</span></div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Team Flage: <span style={{ fontWeight: '400' }}>{location.state.showData.teamFlage ? location.state.showData.teamFlage : '-'}</span></div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Standees: <span style={{ fontWeight: '400' }}>{location.state.showData.standees ? location.state.showData.standees : '-'}</span></div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Side Flages: <span style={{ fontWeight: '400' }}>{location.state.showData.sideFlages ? location.state.showData.sideFlages : '-'}</span></div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Bus Booking: <span style={{ fontWeight: '400' }}>{location.state.showData.busBooking ? location.state.showData.busBooking : '-'}</span></div></Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    {/* Card:3 */}
                    <Card style={{ width: '100%' }} className='mt-3 todoSubCard'>
                        <Card.Header className='todoHeader'>COACH THERAPIST FORM</Card.Header>
                        <Card.Body>
                            <Row style={{ fontSize: '14px' }}>
                                <Col md={4} className='todoCol'><div className='divCard'>ID: <span style={{ fontWeight: '400' }}>{location.state.showData.alldataThingsId ? location.state.showData.alldataThingsId : '-'}</span></div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Item Name: <span style={{ fontWeight: '400' }}>{location.state.showData.name ? location.state.showData.name : '-'}</span></div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Designation: <span style={{ fontWeight: '400' }}>{location.state.showData.designation ? location.state.showData.designation : '-'}</span></div></Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    {/* Card:4 */}
                    <Card style={{ width: '100%' }} className='mt-3 todoSubCard' >
                        <Card.Header className='todoHeader'>FIXTURES FORM</Card.Header>
                        <Card.Body>
                            <Row style={{ fontSize: '14px' }}>
                                <Col md={4} className='todoCol'><div className='divCard'>ID: <span style={{ fontWeight: '400' }}>{location.state.showData.alldataThingsId ? location.state.showData.alldataThingsId : '-'}</span></div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Ground Name: <span style={{ fontWeight: '400' }}>{location.state.showData.groundName ? location.state.showData.groundName : '-'}</span></div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Team A: <span style={{ fontWeight: '400' }}>{location.state.showData.teamA ? location.state.showData.teamA : '-'}</span></div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Team B: <span style={{ fontWeight: '400' }}>{location.state.showData.teamB ? location.state.showData.teamB : '-'}</span></div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Date: <span style={{ fontWeight: '400' }}>{location.state.showData.dateTime ? formattedDate = format(new Date(location.state.showData.dateTime),
                                    'dd/MM/yyyy') : 'N/A'}</span></div></Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    {/* Card:5 */}
                    <Card style={{ width: '100%' }} className='mt-3 todoSubCard' >
                        <Card.Header className='todoHeader'>HOTEL ACCOMODATION FORM</Card.Header>
                        <Card.Body>
                            <Row style={{ fontSize: '14px' }}>
                                <Col md={4} className='todoCol'><div className='divCard'>ID: <span style={{ fontWeight: '400' }}>{location.state.showData.alldataThingsId ? location.state.showData.alldataThingsId : '-'}</span></div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>No Of Rooms: <span style={{ fontWeight: '400' }}>{location.state.showData.noOfRooms ? location.state.showData.noOfRooms : '-'}</span></div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>No Of People: <span style={{ fontWeight: '400' }}>{location.state.showData.noOfPeople ? location.state.showData.noOfPeople : '-'}</span></div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Check In: <span style={{ fontWeight: '400' }}>{location.state.showData.checkIn ? location.state.showData.checkIn : '-'}</span></div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Check Out: <span style={{ fontWeight: '400' }}>{location.state.showData.checkOut ? location.state.showData.checkOut : '-'}</span></div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>City Name: <span style={{ fontWeight: '400' }}>{location.state.showData.cityName ? location.state.showData.cityName : '-'}</span></div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Days Stayed: <span style={{ fontWeight: '400' }}>{location.state.showData.daysStayed ? location.state.showData.daysStayed : '-'}</span></div></Col>
                            </Row>
                        </Card.Body>
                    </Card>



                    {/* Card:6 */}
                    <Card style={{ width: '100%' }} className='mt-3 todoSubCard'>
                        <Card.Header className='todoHeader'>MATCH EQUIPMENT FORM</Card.Header>
                        <Card.Body>
                            <Row style={{ fontSize: '14px' }}>
                                <Col md={4} className='todoCol'><div className='divCard'>ID: <span style={{ fontWeight: '400' }}>{location.state.showData.alldataThingsId ? location.state.showData.alldataThingsId : '-'}</span></div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Name: <span style={{ fontWeight: '400' }}>{location.state.showData.name ? location.state.showData.name : '-'}</span></div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Items: <span style={{ fontWeight: '400' }}>-</span></div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Items Type: <span style={{ fontWeight: '400' }}>-</span></div></Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    {/* Card:7 */}
                    <Card style={{ width: '100%' }} className='mt-3 todoSubCard'>
                        <Card.Header className='todoHeader'>TRANSPORT FORM</Card.Header>
                        <Card.Body>
                            <Row style={{ fontSize: '14px' }}>
                                <Col md={4} className='todoCol'><div className='divCard'>ID: <span style={{ fontWeight: '400' }}>{location.state.showData.alldataThingsId ? location.state.showData.alldataThingsId : '-'}</span></div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Bus Type: <span style={{ fontWeight: '400' }}>{location.state.showData.busType ? location.state.showData.busType : '-'}</span></div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Date Of Journey: <span style={{ fontWeight: '400' }}>{location.state.showData.dateOfJourney ? location.state.showData.dateOfJourney : '-'}</span></div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Going To: <span style={{ fontWeight: '400' }}>{location.state.showData.goingTo ? location.state.showData.goingTo : '-'}</span></div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Leaving From: <span style={{ fontWeight: '400' }}>{location.state.showData.leavingFrom ? location.state.showData.leavingFrom : '-'}</span></div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Seats Booked: <span style={{ fontWeight: '400' }}>{location.state.showData.noOfSeatsBooked ? location.state.showData.noOfSeatsBooked : '-'}</span></div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Return Date: <span style={{ fontWeight: '400' }}>{location.state.showData.returnDate ? location.state.showData.returnDate : '-'}</span></div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Seat No: <span style={{ fontWeight: '400' }}>{location.state.showData.seatNumbers ? location.state.showData.seatNumbers : '-'}</span></div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Time Slot:<span style={{ fontWeight: '400' }}> {location.state.showData.timeSlot ? location.state.showData.timeSlot : '-'}</span></div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Item Type:<span style={{ fontWeight: '400' }}> -</span></div></Col>
                                <Col md={4} className='todoCol'><div className='divCard'>Travel Type: <span style={{ fontWeight: '400' }}>{location.state.showData.travelType ? location.state.showData.travelType : '-'}</span></div></Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Card.Body>
            </Card>

        </div >
    )
}

export default ThingsToDoViewCard