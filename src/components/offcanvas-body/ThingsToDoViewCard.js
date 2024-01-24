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
//
import { useParams } from 'react-router-dom';
import axios from 'axios';
function ThingsToDoViewCard() {
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
    const [showData, setShowData] = useState(null);
    useEffect(() => {
        fetch('http://192.168.1.192/ManagerApi/register/AllDataThingsToDo')
            .then((data) => data.json())
            .then((data) => {
                // console.log("data",data);
                setShowData(data);  // showData=data;
            })
    }, [])

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
                            {
                                showData ?
                                    (
                                        <Row>
                                            {
                                                showData.map((showData, i) => {
                                                    return (
                                                        <React.Fragment key={i}>
                                                            <Col md={4} className='todoCol'><div className='divCard'>ID: <span style={{ fontWeight: '400' }}>{showData.alldataThingsId ? showData.alldataThingsId : 'N/A'}</span></div></Col>
                                                            <Col md={4} className='todoCol'><div className='divCard' style={{ whiteSpace: 'nowrap' }}>Representatives Name: <span style={{ fontWeight: '400' }}>{showData.representatives ? showData.representatives : 'N/A'}</span></div></Col>
                                                            <Col md={4} className='todoCol'><div className='divCard'>Team Name: <span style={{ fontWeight: '400' }}>{showData.representatives ? showData.representatives : 'N/A'}</span></div></Col>
                                                            <Col md={4} className='todoCol'><div className='divCard'>Team Tshirt: <span style={{ fontWeight: '400' }}>{showData.teamTshirt ? showData.teamTshirt : 'N/A'}</span></div></Col>
                                                            <Col md={4} className='todoCol'><div className='divCard'>Team Uniform: <span style={{ fontWeight: '400' }}>{showData.teamUniform ? showData.teamUniform : 'N/A'}</span></div></Col>
                                                        </React.Fragment>
                                                    )
                                                })
                                            }
                                        </Row>
                                    ) : (<h4>Loading...</h4>)
                            }

                        </Card.Body>
                    </Card>
                    {/* Card:2 */}
                    <Card style={{ width: '100%' }} className='mt-3 todoSubCard'>
                        <Card.Header className='todoHeader'>BRANDING FORM</Card.Header>
                        <Card.Body>
                            {
                                showData ?
                                    (<Row>
                                        {
                                            showData.map((showData, i) => {
                                                return (
                                                    <React.Fragment key={i}>
                                                        <Col md={4} className='todoCol'><div className='divCard'>ID: <span style={{ fontWeight: '400' }}>{showData.alldataThingsId ? showData.alldataThingsId : 'N/A'}</span></div></Col>
                                                        <Col md={4} className='todoCol'><div className='divCard'>Team Logo: <span style={{ fontWeight: '400' }}>{showData.teamLogo ? showData.teamLogo : 'N/A'}</span></div></Col>
                                                        <Col md={4} className='todoCol'><div className='divCard'>Team Flage: <span style={{ fontWeight: '400' }}>{showData.teamFlage ? showData.teamFlage : 'N/A'}</span></div></Col>
                                                        <Col md={4} className='todoCol'><div className='divCard'>Standees: <span style={{ fontWeight: '400' }}>{showData.standees ? showData.standees : 'N/A'}</span></div></Col>
                                                        <Col md={4} className='todoCol'><div className='divCard'>Side Flages: <span style={{ fontWeight: '400' }}>{showData.sideFlages ? showData.sideFlages : 'N/A'}</span></div></Col>
                                                        <Col md={4} className='todoCol'><div className='divCard'>Bus Booking: <span style={{ fontWeight: '400' }}>{showData.busBooking ? showData.busBooking : 'N/A'}</span></div></Col>
                                                    </React.Fragment>
                                                )

                                            })
                                        }

                                    </Row>) : (<h4>Loading...</h4>)
                            }

                        </Card.Body>
                    </Card>
                    {/* Card:3 */}
                    <Card style={{ width: '100%' }} className='mt-3 todoSubCard'>
                        <Card.Header className='todoHeader'>COACH THERAPIST FORM</Card.Header>
                        <Card.Body>
                            {
                                showData ?
                                    (
                                        <Row>
                                            {
                                                showData.map((showData, i) => {
                                                    return (
                                                        <React.Fragment key={i}>
                                                            <Col md={4} className='todoCol'><div className='divCard'>ID: <span style={{ fontWeight: '400' }}>{showData.alldataThingsId ? showData.alldataThingsId : 'N/A'}</span></div></Col>
                                                            <Col md={4} className='todoCol'><div className='divCard'>Item Name: <span style={{ fontWeight: '400' }}>{showData.name ? showData.name : 'N/A'}</span></div></Col>
                                                            <Col md={4} className='todoCol'><div className='divCard'>Designation: <span style={{ fontWeight: '400' }}>{showData.designation ? showData.designation : 'N/A'}</span></div></Col>
                                                        </React.Fragment>
                                                    )
                                                })
                                            }

                                        </Row>
                                    ) : (<h4>Loading...</h4>)
                            }

                        </Card.Body>
                    </Card>
                    {/* Card:4 */}
                    <Card style={{ width: '100%' }} className='mt-3 todoSubCard' >
                        <Card.Header className='todoHeader'>FIXTURES FORM</Card.Header>
                        <Card.Body>
                            {
                                showData ?
                                    (
                                        <Row>
                                            {
                                                showData.map((showData, i) => {
                                                    return (
                                                        <React.Fragment key={i}>
                                                            <Col md={4} className='todoCol'><div className='divCard'>ID: <span style={{ fontWeight: '400' }}>{showData.alldataThingsId ? showData.alldataThingsId : 'N/A'}</span></div></Col>
                                                            <Col md={4} className='todoCol'><div className='divCard'>Ground Name: <span style={{ fontWeight: '400' }}>{showData.groundName ? showData.groundName : 'N/A'}</span></div></Col>
                                                            <Col md={4} className='todoCol'><div className='divCard'>Team A: <span style={{ fontWeight: '400' }}>{showData.teamA ? showData.teamA : 'N/A'}</span></div></Col>
                                                            <Col md={4} className='todoCol'><div className='divCard'>Team B: <span style={{ fontWeight: '400' }}>{showData.teamB ? showData.teamB : 'N/A'}</span></div></Col>
                                                            <Col md={4} className='todoCol'><div className='divCard'>Date: <span style={{ fontWeight: '400' }}>{showData.dateTime ? formattedDate = format(new Date(showData.dateTime),
                                                                'dd/MM/yyyy') : 'N/A'}</span></div></Col>

                                                        </React.Fragment>
                                                    )
                                                })
                                            }

                                        </Row>
                                    ) : (<h4>Loading...</h4>)
                            }

                        </Card.Body>
                    </Card>
                    {/* Card:5 */}
                    <Card style={{ width: '100%' }} className='mt-3 todoSubCard' >
                        <Card.Header className='todoHeader'>HOTEL ACCOMODATION FORM</Card.Header>
                        <Card.Body>
                            {
                                showData ?


                                    (<Row>
                                        {
                                            showData.map((showData, i) => {
                                                return (
                                                    <React.Fragment key={i}>
                                                        <Col md={4} className='todoCol'><div className='divCard'>ID: <span style={{ fontWeight: '400' }}>{showData.alldataThingsId ? showData.alldataThingsId : 'N/A'}</span></div></Col>
                                                        <Col md={4} className='todoCol'><div className='divCard'>No Of Rooms: <span style={{ fontWeight: '400' }}>{showData.noOfRooms ? showData.noOfRooms : 'N/A'}</span></div></Col>
                                                        <Col md={4} className='todoCol'><div className='divCard'>No Of People: <span style={{ fontWeight: '400' }}>{showData.noOfPeople ? showData.noOfPeople : 'N/A'}</span></div></Col>
                                                        <Col md={4} className='todoCol'><div className='divCard'>Check In: <span style={{ fontWeight: '400' }}>{showData.checkIn ? showData.checkIn : 'N/A'}</span></div></Col>
                                                        <Col md={4} className='todoCol'><div className='divCard'>Check Out: <span style={{ fontWeight: '400' }}>{showData.checkOut ? showData.checkOut : 'N/A'}</span></div></Col>
                                                        <Col md={4} className='todoCol'><div className='divCard'>City Name: <span style={{ fontWeight: '400' }}>{showData.cityName ? showData.cityName : 'N/A'}</span></div></Col>
                                                        <Col md={4} className='todoCol'><div className='divCard'>Days Stayed: <span style={{ fontWeight: '400' }}>{showData.daysStayed ? showData.daysStayed : 'N/A'}</span></div></Col>
                                                    </React.Fragment>
                                                )
                                            })
                                        }

                                    </Row>) : (<h4>Loading...</h4>)
                            }
                        </Card.Body>
                    </Card>
                    {/* Card:6 */}
                    <Card style={{ width: '100%' }} className='mt-3 todoSubCard'>
                        <Card.Header className='todoHeader'>MATCH EQUIPMENT FORM</Card.Header>
                        <Card.Body>
                            {
                                showData ?
                                    (<Row>
                                        {
                                            showData.map((showData, i) => {
                                                return (
                                                    <React.Fragment key={i}>
                                                        <Col md={4} className='todoCol'><div className='divCard'>ID: <span style={{ fontWeight: '400' }}>{showData.alldataThingsId ? showData.alldataThingsId : 'N/A'}</span></div></Col>
                                                        <Col md={4} className='todoCol'><div className='divCard'>Name: <span style={{ fontWeight: '400' }}>{showData.name ? showData.name : 'N/A'}</span></div></Col>
                                                        <Col md={4} className='todoCol'><div className='divCard'>Items: <span style={{ fontWeight: '400' }}>-</span></div></Col>
                                                        <Col md={4} className='todoCol'><div className='divCard'>Items Type: <span style={{ fontWeight: '400' }}>-</span></div></Col>
                                                    </React.Fragment>
                                                )
                                            })
                                        }

                                    </Row>) : (<h4>Loading...</h4>)
                            }

                        </Card.Body>
                    </Card>
                    {/* Card:7 */}
                    <Card style={{ width: '100%' }} className='mt-3 todoSubCard'>
                        <Card.Header className='todoHeader'>TRANSPORT FORM</Card.Header>
                        <Card.Body>
                            {
                                showData ?
                                    (
                                        <Row>
                                            {
                                                showData.map((showData, i) => {
                                                    return (
                                                        <React.Fragment key={i}>
                                                            <Col md={4} className='todoCol'><div className='divCard'>ID: <span style={{ fontWeight: '400' }}>{showData.alldataThingsId ? showData.alldataThingsId : 'N/A'}</span></div></Col>
                                                            <Col md={4} className='todoCol'><div className='divCard'>Bus Type: <span style={{ fontWeight: '400' }}>{showData.busType ? showData.busType : 'N/A'}</span></div></Col>
                                                            <Col md={4} className='todoCol'><div className='divCard'>Date Of Journey: <span style={{ fontWeight: '400' }}>{showData.dateOfJourney ? showData.dateOfJourney : 'N/A'}</span></div></Col>
                                                            <Col md={4} className='todoCol'><div className='divCard'>Going To: <span style={{ fontWeight: '400' }}>{showData.goingTo ? showData.goingTo : 'N/A'}</span></div></Col>
                                                            <Col md={4} className='todoCol'><div className='divCard'>Leaving From: <span style={{ fontWeight: '400' }}>{showData.leavingFrom ? showData.leavingFrom : 'N/A'}</span></div></Col>
                                                            <Col md={4} className='todoCol'><div className='divCard'>Seats Booked: <span style={{ fontWeight: '400' }}>{showData.noOfSeatsBooked ? showData.noOfSeatsBooked : 'N/A'}</span></div></Col>
                                                            <Col md={4} className='todoCol'><div className='divCard'>Return Date: <span style={{ fontWeight: '400' }}>{showData.returnDate ? showData.returnDate : 'N/A'}</span></div></Col>
                                                            <Col md={4} className='todoCol'><div className='divCard'>Seat No: <span style={{ fontWeight: '400' }}>{showData.seatNumbers ? showData.seatNumbers : 'N/A'}</span></div></Col>
                                                            <Col md={4} className='todoCol'><div className='divCard'>Time Slot:<span style={{ fontWeight: '400' }}> {showData.timeSlot ? showData.timeSlot : 'N/A'}</span></div></Col>
                                                            <Col md={4} className='todoCol'><div className='divCard'>Item Type:<span style={{ fontWeight: '400' }}> -</span></div></Col>
                                                            <Col md={4} className='todoCol'><div className='divCard'>Travel Type: <span style={{ fontWeight: '400' }}>{showData.travelType ? showData.travelType : 'N/A'}</span></div></Col>
                                                        </React.Fragment>
                                                    )
                                                })
                                            }

                                        </Row>
                                    ) : (<h4>Loading...</h4>)
                            }

                        </Card.Body>
                    </Card>

                </Card.Body>
            </Card>
        </div>
    )
}

export default ThingsToDoViewCard