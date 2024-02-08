import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ChepaukStadium from 'react-bootstrap/Image';
import ChinnaswamyStadium from 'react-bootstrap/Image';
import DharamshalaStadium from 'react-bootstrap/Image';
import Eden from 'react-bootstrap/Image';
import GreenPark from 'react-bootstrap/Image';
import Gujarat from 'react-bootstrap/Image';
import Wankede from 'react-bootstrap/Image';
import Lucknow from 'react-bootstrap/Image';
import Header from './Header';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

function DashboardPlayGroundViewCard() {
    return (
        <>
            <Header />
            <div className='headerBtn my-3'>
                <h5 className='headingTag'>STADIUMS</h5>
            </div>
            <div>
                <Row>
                    <Col lg={3} className='mb-2'>
                        <NavLink to='/dashboard' className='navLinks'>
                            <Button variant="primary" style={{ fontWeight: 'bold' }}>Go Back</Button>
                        </NavLink>
                    </Col>
                </Row>
            </div>


            <div className='m-4'>
                <Carousel className='container'>
                    <Carousel.Item interval={1000}>
                        <ChinnaswamyStadium src={require('./../assets/chinnaswamy_stadium.jpg')} text="First slide" className='d-block' style={{ width: '80vw', height: '80vh' }} />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <DharamshalaStadium src={require('./../assets/Dharamshala.jpg')} text="Second slide" className='d-block' style={{ width: '80vw', height: '80vh' }} />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <Eden src={require('./../assets/eden.jpg')} text="Third slide" className='d-block' style={{ width: '80vw', height: '80vh' }} />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <GreenPark src={require('./../assets/Green_Park.jpg')} text="Fourth slide" className='d-block' style={{ width: '80vw', height: '80vh' }} />
                        <Carousel.Caption>
                            <h3>Four slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <Gujarat src={require('./../assets/gujarat.jpg')} text="Fiveth slide" className='d-block' style={{ width: '80vw', height: '80vh' }} />
                        <Carousel.Caption>
                            <h3>Five slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <Lucknow src={require('./../assets/lucknow.jpg')} text="Sixth slide" className='d-block' style={{ width: '80vw', height: '80vh' }} />
                        <Carousel.Caption>
                            <h3>6 slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <Wankede src={require('./../assets/wankede.jpg')} text="Seventh slide" className='d-block' style={{ width: '80vw', height: '80vh' }} />
                        <Carousel.Caption>
                            <h3>7 slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <ChepaukStadium src={require('./../assets/Chepauk-Stadium-Chennai.jpg')} text="Eighth slide" className='d-block' style={{ width: '80vw', height: '80vh' }} />
                        <Carousel.Caption>
                            <h3>8 slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    )
}

export default DashboardPlayGroundViewCard