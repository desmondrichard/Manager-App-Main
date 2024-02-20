import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Dashboard.css';
import ImagePlayer from 'react-bootstrap/Image';
import ImageManager from 'react-bootstrap/Image';
import ImageSponsor from 'react-bootstrap/Image';
import ImageSupportStaff from 'react-bootstrap/Image';
import ImageSponsorNew from 'react-bootstrap/Image';
import ImageOrganizor from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
// import CarouselScoreCard from './CarouselScoreCard';
import FullCalendar from './FullCalendar';
import Piechart from './Chart/Piechart';


function Dashboard() {
    //Data Binding for player registration:
    const [showData, setShowData] = useState([]);
    useEffect(() => {
        fetch('http://192.168.1.192/ManagerApi/GetAllDataAndImages')
            .then((data) => data.json())
            .then((data) => {
                console.log("data in dashboard for players:", data);
                // console.log("Success in getting players data", data);
                setShowData(data);  // showData=data;
            })
    }, [])

    //Data Binding for staff registration:
    const [showData1, setShowData1] = useState([]);
    useEffect(() => {
        fetch('http://192.168.1.192/ManagerApi/GetStaffAllDataAndImages')
            .then((data) => data.json())
            .then((data) => {
                // console.log("data",data);
                // console.log("Success in getting data", data);
                setShowData1(data);  // showData=data;
            })
    }, [])
    return (
        <div style={{ marginTop: '-24px' }}>
            <Container fluid className="my-3 py-3">
                <Row className='row1'>
                    <Col lg={8} >
                        {/* ps-2 */}
                        <Card className='bgColor1 pb-4 boxShadowPlayer'>
                            <Row>
                                <Col lg={4} sm={6} xs={12} className='col'>
                                    <Card.Body style={{ borderRadius: '5px', height: '140px', margin: 'auto' }} className='mt-3 pt-4 boxShadow bg-light wrapper'>
                                        <NavLink to='/dashboard/dashboardplayerscard' className='navLinks'>
                                            <Button variant="dark" style={{ backgroundColor: 'transparent', border: 'none' }}>
                                                <div className='image'>
                                                    <ImagePlayer className='img' style={{ height: '100px', width: '140px' }} src={require('../assets/playernew1.png')}></ImagePlayer>
                                                    <div className='content'>
                                                        <Card.Title className='a'>PLAYERS</Card.Title>
                                                        <Card.Text className='b'>
                                                            {showData.length}
                                                        </Card.Text>
                                                    </div>
                                                </div>
                                            </Button>
                                        </NavLink>
                                    </Card.Body>
                                </Col>
                                <Col lg={4} sm={6} xs={12} className='col'>
                                    <Card.Body style={{ borderRadius: '5px', height: '140px', margin: 'auto' }} className='mt-3 text-center pt-4 boxShadow bg-light wrapper'>
                                        <NavLink to='/dashboard/dashboardstaffcard' className='navLinks'>
                                            <Button variant="dark" style={{ backgroundColor: 'transparent', border: 'none' }}>
                                                <div className='image'>
                                                    <ImageSupportStaff className='img' style={{ height: '100px', width: '150px' }} src={require('../assets/supportstaffsicon.png')}></ImageSupportStaff>
                                                    <div className='content'>
                                                        <Card.Title className='a'>SUPPORT STAFFS</Card.Title>
                                                        <Card.Text className='b'>
                                                            {showData1.length}
                                                        </Card.Text>
                                                    </div>
                                                </div>
                                            </Button>
                                        </NavLink>
                                    </Card.Body>
                                </Col>
                                <Col lg={4} sm={6} xs={12} className='col'>
                                    <Card.Body style={{ borderRadius: '5px', height: '140px', margin: 'auto' }} className='mt-3 text-center pt-4 boxShadow bg-light wrapper'>
                                        <Button variant="dark" style={{ backgroundColor: 'transparent', border: 'none' }}>
                                            <div className='image'>
                                                <ImageManager className='img' style={{ height: '100px', width: '100px' }} src={require('../assets/managericon.jpg')}></ImageManager>
                                                <div className='content'>
                                                    <Card.Title className='a'>MANAGEMENT</Card.Title>
                                                </div>
                                            </div>
                                        </Button>
                                    </Card.Body>
                                </Col>
                                <Col lg={4} sm={6} xs={12} className='col'>
                                    <Card.Body style={{ borderRadius: '5px', height: '140px', margin: 'auto' }} className='mt-3 text-center pt-4 boxShadow bg-light wrapper'>
                                        <NavLink to='/dashboard/playgroundcard' className='navLinks'>
                                            <Button variant="dark" style={{ backgroundColor: 'transparent', border: 'none' }}>
                                                <div className='image'>
                                                    <ImageSponsorNew className='img' style={{ height: '105px', width: '120px' }} src={require('../assets/stadium-icon-24.jpg')}></ImageSponsorNew>
                                                    <div className='content'>
                                                        <Card.Title className='a'>PLAYGROUND</Card.Title>
                                                        <Card.Text className='b'>
                                                            8
                                                        </Card.Text>
                                                    </div>
                                                </div>
                                            </Button>
                                        </NavLink>
                                    </Card.Body>
                                </Col>

                                <Col lg={4} sm={6} xs={12} className='col'>
                                    <Card.Body style={{ borderRadius: '5px', height: '140px', margin: 'auto' }} className=' mt-3 text-center pt-4 boxShadow bg-light wrapper'>
                                        <NavLink to='/dashboard/sponsorscard' className='navLinks'>
                                            <Button variant="dark" style={{ backgroundColor: 'transparent', border: 'none' }}>
                                                <div className='image'>
                                                    <ImageSponsor className='img' style={{ height: '105px', width: '200px' }} src={require('../assets/sponsoricon.png')}></ImageSponsor>
                                                    <div className='contentPartners1'>
                                                        <Card.Title className='a'>SPONSORS</Card.Title>
                                                        <Card.Text className='b'>
                                                            8
                                                        </Card.Text>
                                                    </div>
                                                </div>
                                            </Button>
                                        </NavLink>
                                    </Card.Body>
                                </Col>
                                <Col lg={4} sm={6} xs={12} className='col'>
                                    <Card.Body style={{ borderRadius: '5px', height: '140px', margin: 'auto' }} className=' mt-3 text-center pt-4 boxShadow bg-light wrapper'>
                                        <Button variant="dark" style={{ backgroundColor: 'transparent', border: 'none' }}>
                                            <div className='image'>
                                                <ImageOrganizor className='img' style={{ height: '105px', width: '120px' }} src={require('../assets/organizoricon.jpg')}></ImageOrganizor>
                                                <div className='content'>
                                                    <Card.Title className='a'>ORGANIZERS</Card.Title>
                                                </div>
                                            </div>
                                        </Button>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>

                    <Col lg={4} style={{ zIndex: 0 }} className='mt-1'>
                        <Card className='boxShadowPieChart' >
                            {/* <Calendar /> */}
                            {/* <CarouselScoreCard /> */}
                            <Piechart />
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col lg={8} style={{ zIndex: 0 }}>
                        <Card className='my-3 boxShadow1 boxShadowMargin' style={{ paddingLeft: '0px !important' }}>
                            <Card.Body>
                                <FullCalendar />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3}>Welcome</Col>
                </Row>

            </Container>

        </div>
    )
}

export default Dashboard