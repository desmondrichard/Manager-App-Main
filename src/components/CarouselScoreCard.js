import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './CarouselScoreCard.css';
import Logo3 from 'react-bootstrap/Image';
import Logo from 'react-bootstrap/Image';
import Logo1 from 'react-bootstrap/Image';
import Logo2 from 'react-bootstrap/Image';
import { Card } from 'react-bootstrap';
function CarouselScoreCard() {
    //Data Binding:
    const [showData, setShowData] = useState(null);
    useEffect(() => {
        fetch('http://192.168.1.192/ManagerApi/GetAllDataAndImages')
            .then((data) => data.json())
            .then((data) => {
                // console.log("data",data);
                console.log("Success in getting data", data);
                setShowData(data);  // showData=data;
            })
    }, [])

    return (
        <div>
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <Image
                        className="d-block w-100" style={{ height: '394px' }}
                        src={require('./../assets/cricket-stadium-vector.jpg')}
                    />
                    {/*  */}
                    <Carousel.Caption style={{ bottom: '210px', transform: 'translateY(50%)' }}>
                        <Card className='cardGlass'>
                            <Row>
                                <Col xs={12} className="text-center" style={{ marginTop: '15px' }}>
                                    <Logo className="d-inline-block align-middle" src={require('./../assets/cricket_logo.png')} fluid style={{ height: '50px', width: '50px' }} />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}><p style={{ color: 'white' }} className='head'>T20 Cricket</p></Col>
                            </Row>
                            <Row>
                                <Col xs={4}><p style={{ fontSize: '19px', fontWeight: 'bold', color: 'blue' }}>ENG</p></Col>
                                <Col xs={4}><p style={{ fontSize: '18px', fontWeight: 'bold', color: 'white' }}>VS</p></Col>
                                <Col xs={4}><p style={{ fontSize: '19px', fontWeight: 'bold', color: 'blue' }}>SL</p></Col>
                            </Row>
                            <Row>
                                <Col xs={12} className='matchTime'><div className='matchTime1' style={{}}><p style={{ lineHeight: '10px' }}>9 MAY TUE</p><p style={{ marginTop: '-8px' }}>7:00 PM</p></div></Col>
                            </Row>
                            <Row>
                                <Col xs={12}><p style={{ color: 'red', fontWeight: 'bold', marginBottom: '-10px' }} className='live'>WATCH LIVE ON</p></Col>
                            </Row>
                            <Row>
                                <Col xs={12} className='m-auto'>
                                    <div className='d-flex justify-content-center'>
                                        <Logo1 className="d-block" src={require('./../assets/star_sports_tamil.png')} fluid style={{ height: '80px', width: '110px' }} />
                                        <Logo2 className="d-block" src={require('./../assets/hotstar.png')} fluid style={{ height: '50px', width: '50px', marginTop: '14px', marginRight: '10px' }} />
                                        <Logo3 className="d-block" src={require('./../assets/jiocinema_logo.png')} fluid style={{ height: '80px', width: '80px' }} />
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="d-block w-100" style={{ height: '394px' }}
                        src={require('./../assets/stadium_bg.jpg')}
                    />
                    {/*  */}
                    <Carousel.Caption style={{ bottom: '210px', transform: 'translateY(50%)' }}>
                        <Card className='cardGlass'>
                            <Row>
                                <Col xs={12} className="text-center" style={{ marginTop: '15px' }}>
                                    <Logo className="d-inline-block align-middle" src={require('./../assets/cricket_logo.png')} fluid style={{ height: '50px', width: '50px' }} />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}><p style={{ color: 'white' }} className='head'>T20 Cricket</p></Col>
                            </Row>
                            <Row>
                                <Col xs={4}><p style={{ fontSize: '19px', fontWeight: 'bold', color: 'blue' }}>AUS</p></Col>
                                <Col xs={4}><p style={{ fontSize: '18px', fontWeight: 'bold', color: 'white' }}>VS</p></Col>
                                <Col xs={4}><p style={{ fontSize: '19px', fontWeight: 'bold', color: 'blue' }}>NZ</p></Col>
                            </Row>
                            <Row>
                                <Col xs={12} className='matchTime'><div className='matchTime1' style={{}}><p style={{ lineHeight: '10px' }}>9 MAY TUE</p><p style={{ marginTop: '-8px' }}>7:00 PM</p></div></Col>
                            </Row>
                            <Row>
                                <Col xs={12}><p style={{ color: 'red', fontWeight: 'bold', marginBottom: '-10px' }} className='live'>WATCH LIVE ON</p></Col>
                            </Row>
                            <Row>
                                <Col xs={12} className='m-auto'>
                                    <div className='d-flex justify-content-center'>
                                        <Logo1 className="d-block" src={require('./../assets/star_sports_tamil.png')} fluid style={{ height: '80px', width: '110px' }} />
                                        <Logo2 className="d-block" src={require('./../assets/hotstar.png')} fluid style={{ height: '50px', width: '50px', marginTop: '14px', marginRight: '10px' }} />
                                        <Logo3 className="d-block" src={require('./../assets/jiocinema_logo.png')} fluid style={{ height: '80px', width: '80px' }} />
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="d-block w-100" style={{ height: '394px' }}
                        src={require('./../assets/cricket_bg_new.jpg')}
                    />
                    {/*  */}
                    <Carousel.Caption style={{ bottom: '210px', transform: 'translateY(50%)' }}>
                        <Card className='cardGlass'>
                            <Row>
                                <Col xs={12} className="text-center" style={{ marginTop: '15px' }}>
                                    <Logo className="d-inline-block align-middle" src={require('./../assets/cricket_logo.png')} fluid style={{ height: '50px', width: '50px' }} />
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}><p style={{ color: 'white' }} className='head'>T20 Cricket</p></Col>
                            </Row>
                            <Row>
                                <Col xs={4}><p style={{ fontSize: '19px', fontWeight: 'bold', color: 'blue' }}>IND</p></Col>
                                <Col xs={4}><p style={{ fontSize: '18px', fontWeight: 'bold', color: 'white' }}>VS</p></Col>
                                <Col xs={4}><p style={{ fontSize: '19px', fontWeight: 'bold', color: 'blue' }}>PAK</p></Col>
                            </Row>
                            <Row>
                                <Col xs={12} className='matchTime'><div className='matchTime1' style={{}}><p style={{ lineHeight: '10px' }}>9 MAY TUE</p><p style={{ marginTop: '-8px' }}>7:00 PM</p></div></Col>
                            </Row>
                            <Row>
                                <Col xs={12}><p style={{ color: 'red', fontWeight: 'bold', marginBottom: '-10px' }} className='live'>WATCH LIVE ON</p></Col>
                            </Row>
                            <Row>
                                <Col xs={12} className='m-auto'>
                                    <div className='d-flex justify-content-center'>
                                        <Logo1 className="d-block" src={require('./../assets/star_sports_tamil.png')} fluid style={{ height: '80px', width: '110px' }} />
                                        <Logo2 className="d-block" src={require('./../assets/hotstar.png')} fluid style={{ height: '50px', width: '50px', marginTop: '14px', marginRight: '10px' }} />
                                        <Logo3 className="d-block" src={require('./../assets/jiocinema_logo.png')} fluid style={{ height: '80px', width: '80px' }} />
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CarouselScoreCard