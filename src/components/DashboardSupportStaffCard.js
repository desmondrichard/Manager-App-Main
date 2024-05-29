import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './DashboardCard.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './Header';
import { ListGroup } from 'react-bootstrap';
import Placeholder from 'react-bootstrap/Placeholder';
import './DashboardSupportStaffCard.css';
import Container from 'react-bootstrap/Container';
//Lazy Loading Images:
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


function DashboardSupportStaffCard() {
    //Data Binding:
    const [showData, setShowData] = useState(null);
    useEffect(() => {     
        fetch('https://localhost:7097/GETalldata-Staffs')
            .then((data) => data.json())
            .then((data) => {
                // console.log("data",data);
                // console.log("Success in getting players data", data);
                setShowData(data);  // showData=data;
            })
    }, [])
    return (
        <div>
            <Header />
            <div className='text-center bg-primary my-3 p-2 text-white h4' style={{ width: '190px', borderRadius: '5px', margin: 'auto', whiteSpace: 'nowrap' }}>SUPPORT STAFF</div>
            <NavLink to='/dashboard' className='navLinks'><Button variant="primary" className='mt-3 addPlayers butn1'>
                Go Back
            </Button>
            </NavLink>

            {/* Card: */}
            <div className='my-3 p-2'>
                <Container className='text-center'>
                    <Card style={{ width: '100%' }}>
                        <Card.Header style={{ fontWeight: 'bold', fontSize: '18px' }}>SUPPORT STAFFS</Card.Header>
                        <ListGroup variant='flush'>
                            {
                                showData !== null && showData.length ?
                                    (
                                        <Row className='my-3 justify-content-center'>
                                            {
                                                showData.map((showData, i) => {
                                                    return (

                                                        <Col xs={12} md={6} xl={4} key={i}>
                                                            <Card style={{ width: '15rem', cursor: 'pointer' }} className='m-4 zoom'>

                                                                <LazyLoadImage effect="blur" variant="top" src={showData ? `data:image;base64,${showData.imageData}` :  //checks for data
                                                                    require('./../assets/dummy_profile_img.png')}   //default img 
                                                                    alt="img" style={{ width: '239px', height: '250px' }}
                                                                    // 
                                                                    onError={(e) => {
                                                                        e.target.src = require('./../assets/dummy_profile_img.png');
                                                                    }} />
                                                                <Card.Body style={{ borderTop: '1px solid #DDDDDD' }} >
                                                                    <Card.Text style={{ fontSize: '14px', fontWeight: '500', marginTop: '-16px' }}>Staff ID: {showData.alldataStaffId} </Card.Text>
                                                                    <Card.Text style={{ fontSize: '14px', fontWeight: '500', marginTop: '-13px' }}>Staff Name: {showData.supportStaffName ? showData.supportStaffName : 'N/A'}</Card.Text>
                                                                    <Card.Text style={{ fontSize: '14px', fontWeight: '500', marginTop: '-13px' }}>Designation: {showData.designation ? showData.designation : 'N/A'}</Card.Text>
                                                                    <Card.Text style={{ fontSize: '14px', fontWeight: '500', marginTop: '-13px' }}>Specialization: {showData.specialization ? showData.specialization : 'N/A'}</Card.Text>
                                                                </Card.Body>

                                                            </Card>
                                                        </Col>
                                                    )
                                                })
                                            }
                                        </Row>
                                    ) : (
                                        <Row className='my-3'>
                                            <Col xs={12} sm={12} md={6} lg={4}>
                                                <Card style={{ width: '18rem' }}>
                                                    <Card.Img variant="top" src="https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png" />
                                                    <Card.Body>
                                                        <Placeholder as={Card.Title} animation="glow">
                                                            <Placeholder xs={6} />
                                                        </Placeholder>
                                                        <Placeholder as={Card.Text} animation="glow">
                                                            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                                            <Placeholder xs={6} /> <Placeholder xs={8} />
                                                        </Placeholder>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col md={6} lg={4} className='d-none d-md-block d-lg-block d-xl-block'>
                                                <Card style={{ width: '18rem' }}>
                                                    <Card.Img variant="top" src="https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png" />
                                                    <Card.Body>
                                                        <Placeholder as={Card.Title} animation="glow">
                                                            <Placeholder xs={6} />
                                                        </Placeholder>
                                                        <Placeholder as={Card.Text} animation="glow">
                                                            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                                            <Placeholder xs={6} /> <Placeholder xs={8} />
                                                        </Placeholder>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                            <Col lg={4} className='d-none d-lg-block d-xl-block'>
                                                <Card style={{ width: '18rem' }}>
                                                    <Card.Img variant="top" src="https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png" />
                                                    <Card.Body>
                                                        <Placeholder as={Card.Title} animation="glow">
                                                            <Placeholder xs={6} />
                                                        </Placeholder>
                                                        <Placeholder as={Card.Text} animation="glow">
                                                            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                                            <Placeholder xs={6} /> <Placeholder xs={8} />
                                                        </Placeholder>
                                                    </Card.Body>
                                                </Card>
                                            </Col>

                                        </Row>
                                    )

                            }

                        </ListGroup>
                    </Card>
                </Container>
            </div>


        </div >
    )
}

export default DashboardSupportStaffCard