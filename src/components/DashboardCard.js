import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './DashboardCard.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './Header';
import { Container, ListGroup } from 'react-bootstrap';
// 

import Placeholder from 'react-bootstrap/Placeholder';
function DashboardCard() {
    //Data Binding:
    const [showData, setShowData] = useState(null);
    useEffect(() => {
        fetch('http://192.168.1.192/ManagerApi/GetAllDataAndImages')
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
            <div className='text-center bg-primary my-3 p-2 text-white h4' style={{ width: '120px', borderRadius: '5px', margin: 'auto' }}>PLAYERS</div>
            <NavLink to='/dashboard' className='navLinks'><Button variant="primary" className='mt-3 addPlayers butn1'>
                Go Back
            </Button>
            </NavLink>

            {/* Card: */}
            <div className='my-3 p-2'>
                <Container>
                    <Card style={{ width: '100%' }}>
                        <Card.Header style={{ fontWeight: 'bold', fontSize: '18px' }}>PLAYERS</Card.Header>
                        <ListGroup variant='flush'>
                            {
                                showData ?
                                    (<Row>
                                        {
                                            showData.map((showData, i) => {
                                                return (
                                                    <Col xs={12} md={6} xl={4} key={i}>
                                                        <Card style={{ width: '15rem', cursor: 'pointer' }} className='m-4 zoom'>
                                                            <Card.Img variant="top" src={showData ? `data:image;base64,${showData.imageData}` : require('./../assets/dummy_profile_img.png')} alt="img" style={{ width: 'auto', height: '300px' }} />
                                                            <Card.Body style={{ borderTop: '1px solid #DDDDDD' }}>
                                                                <Card.Text style={{ fontSize: '14px', fontWeight: '500' }}>Player ID:
                                                                    {showData.alldataplayerId ? showData.alldataplayerId : 'N/A'}
                                                                </Card.Text>
                                                                <Card.Text style={{ fontSize: '14px', fontWeight: '500' }}>Player Name: {showData.playerName ? showData.playerName : 'N/A'}</Card.Text>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                )
                                            })
                                        }

                                    </Row>) : (
                                        <Row>
                                            <Col xs={12} sm={12} md={6} lg={4}>
                                                <Card style={{ width: '16rem' }}>
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
                                                <Card style={{ width: '16rem' }}>
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
                                                <Card style={{ width: '16rem' }}>
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



            {/*  */}

        </div>
    )
}

export default DashboardCard