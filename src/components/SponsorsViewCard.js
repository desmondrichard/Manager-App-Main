import React from 'react';
import Header from './Header';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import './SponsorsViewCard.css';
function SponsorsViewCard() {
    return (
        <div>
            <Header />
            <div className='headerBtn my-3'>
                <h5 className='headingTag'>SPONSORS</h5>
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

            <div className='cardBodyMain1'>
                <Row style={{ paddingBottom: '50px' }}>
                    {/* Card:1 */}
                    <Col lg={3} md={4} sm={6} className='mb-4'>
                        <div className='containerFlip'>
                            <div style={{ width: '14rem' }} className='cardFlip'>
                                <Card className='front' style={{ paddingTop: '30px' }}>
                                    <Card.Img variant="top" src={require("./../assets/Sponsors/Herbalife-Emblem.png")} />
                                </Card>
                                <Card className='back'>
                                    <Card.Title><span style={{ fontWeight: '600' }}>ABOUT US</span></Card.Title>
                                    <Card.Text className='text-center'>
                                        Herbalife Nutrition Ltd  is a global multi-level marketing corporation that develops and sells dietary supplements
                                    </Card.Text>
                                </Card>
                            </div>
                        </div>
                    </Col>

                    {/* Card:2 */}
                    <Col lg={3} md={4} sm={6} className='mb-4'>
                        <div className='containerFlip'>
                            <div style={{ width: '14rem' }} className='cardFlip'>
                                <Card className='front px-3' style={{ paddingTop: '35px' }}>
                                    <Card.Img variant="top" src={require("./../assets/Sponsors/JSW.png")} />
                                </Card>
                                <Card className='back'>
                                    <Card.Title><span style={{ fontWeight: '600' }}>ABOUT US</span></Card.Title>
                                    <Card.Text className='text-center'>
                                        JSW Steel Limited is an Indian multinational steel producer based in Mumbai
                                    </Card.Text>
                                </Card>
                            </div>
                        </div>
                    </Col>

                    {/* Card:3 */}
                    <Col lg={3} md={4} sm={6} className='mb-4'>
                        <div className='containerFlip'>
                            <div style={{ width: '14rem' }} className='cardFlip'>
                                <Card className='front px-3' style={{ paddingTop: '65px' }}>
                                    <Card.Img variant="top" src={require("./../assets/Sponsors/ceat.png")} />
                                </Card>
                                <Card className='back'>
                                    <Card.Title><span style={{ fontWeight: '600' }}>ABOUT US</span></Card.Title>
                                    <Card.Text className='text-center'>
                                        CEAT Limited is an Indian multinational tyre manufacturing company owned by the RPG Group
                                    </Card.Text>
                                </Card>
                            </div>
                        </div>
                    </Col>

                    {/* Card:4 */}
                    <Col lg={3} md={4} sm={6} className='mb-4'>
                        <div className='containerFlip'>
                            <div style={{ width: '14rem' }} className='cardFlip'>
                                <Card className='front px-2' style={{ paddingTop: '37px' }}>
                                    <Card.Img variant="top" src={require("./../assets/Sponsors/bb.png")} />
                                </Card>
                                <Card className='back'>
                                    <Card.Title><span style={{ fontWeight: '600' }}>ABOUT US</span></Card.Title>
                                    <Card.Text className='text-center'>
                                        Your online daily milk delivery app
                                    </Card.Text>
                                </Card>
                            </div>
                        </div>
                    </Col>

                    {/* Card:5 */}
                    <Col lg={3} md={4} sm={6} className='mb-4'>
                        <div className='containerFlip'>
                            <div style={{ width: '14rem' }} className='cardFlip'>
                                <Card className='front px-3' style={{ paddingTop: '70px' }}>
                                    <Card.Img variant="top" src={require("./../assets/Sponsors/upstoxlogo.png")} />
                                </Card>
                                <Card className='back'>
                                    <Card.Title><span style={{ fontWeight: '600' }}>ABOUT US</span></Card.Title>
                                    <Card.Text className='text-center'>
                                        We have been in the business of building wealth for our customers for over a decade
                                    </Card.Text>
                                </Card>
                            </div>
                        </div>
                    </Col>

                    {/* Card:6 */}
                    <Col lg={3} md={4} sm={6} className='mb-4'>
                        <div className='containerFlip'>
                            <div style={{ width: '14rem' }} className='cardFlip'>
                                <Card className='front px-3' style={{ paddingTop: '34px' }}>
                                    <Card.Img variant="top" src={require("./../assets/Sponsors/Zomato-logo.png")} />
                                </Card>
                                <Card className='back'>
                                    <Card.Title><span style={{ fontWeight: '600' }}>ABOUT US</span></Card.Title>
                                    <Card.Text className='text-center'>
                                        Zomato is an Indian multinational restaurant aggregator and food delivery company
                                    </Card.Text>
                                </Card>
                            </div>
                        </div>
                    </Col>

                    {/* Card:7 */}
                    <Col lg={3} md={4} sm={6} className='mb-4'>
                        <div className='containerFlip'>
                            <div style={{ width: '14rem' }} className='cardFlip'>
                                <Card className='front px-4' style={{ paddingTop: '20px' }}>
                                    <Card.Img variant="top" src={require("./../assets/star_sports_logo.png")} />
                                </Card>
                                <Card className='back'>
                                    <Card.Title><span style={{ fontWeight: '600' }}>ABOUT US</span></Card.Title>
                                    <Card.Text className='text-center'>
                                        Star Sports is a major broadcaster of cricket in India, holding the pay television rights
                                    </Card.Text>
                                </Card>
                            </div>
                        </div>
                    </Col>

                    {/* Card:8 */}
                    <Col lg={3} md={4} sm={6} className='mb-4'>
                        <div className='containerFlip'>
                            <div style={{ width: '14rem' }} className='cardFlip'>
                                <Card className='front px-2' style={{ paddingTop: '38px' }}>
                                    <Card.Img variant="top" src={require("./../assets/Sponsors/Tata-Motors-Logo.png")} />
                                </Card>
                                <Card className='back'>
                                    <Card.Title><span style={{ fontWeight: '600' }}>ABOUT US</span></Card.Title>
                                    <Card.Text className='text-center'>
                                        The Tata Group is a group of companies headquartered in Mumbai
                                    </Card.Text>
                                </Card>
                            </div>
                        </div>
                    </Col>

                </Row>

            </div>


        </div>


    )
}

export default SponsorsViewCard