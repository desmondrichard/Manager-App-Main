import React from 'react';
import Header from './Header';
import Card from 'react-bootstrap/Card';
import ImagePlayer from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './SuperAdminDashboard.css';
import Table from 'react-bootstrap/Table';


function SuperAdminDashboard() {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div className='py-5'>
                <Row className='mx-auto'>
                    <Col lg={3} md={4} sm={6}>
                        <Card style={{ width: '15rem' }} className='glassCard mb-2' border="danger">
                            <Card.Body className='adminCard'>
                                <Card.Title className='text-center' style={{ fontSize: '25px' }}>PLAYERS</Card.Title>
                                <Card.Text>
                                    <ImagePlayer className='img' style={{ height: '100px', width: '140px' }} src={require('../assets/playernew1.png')}></ImagePlayer>
                                </Card.Text>
                                <Card.Text className='text-center fw-bold fs-4'>10</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3} md={4} sm={6}>

                        <Card style={{ width: '15rem' }} className='glassCard mb-2' border="success">
                            <Card.Body className='adminCard'>
                                <Card.Title className='text-center' style={{ fontSize: '25px', whiteSpace: 'nowrap' }}>SUPPORT STAFFS</Card.Title>
                                <Card.Text>
                                    <ImagePlayer className='img' style={{ height: '100px', width: '140px' }} src={require('../assets/supportstaffsicon-removebg-preview.png')}></ImagePlayer>
                                </Card.Text>
                                <Card.Text className='text-center fw-bold fs-4'>10</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3} md={4} sm={6}>
                        <Card style={{ width: '15em' }} className='glassCard mb-2' border="warning">
                            <Card.Body className='adminCard'>
                                <Card.Title className='text-center' style={{ fontSize: '25px' }}>TEAMS</Card.Title>
                                <Card.Text>
                                    <ImagePlayer className='img' style={{ height: '100px', width: '140px' }} src={require('../assets/teams-removebg-preview.png')}></ImagePlayer>
                                </Card.Text>
                                <Card.Text className='text-center fw-bold fs-4'>10</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={3} md={4} sm={6}>
                        <Card style={{ width: '15rem' }} className='glassCard mb-2' border="info">
                            <Card.Body className='adminCard'>
                                <Card.Title className='text-center' style={{ fontSize: '25px' }}>ACTIVE USERS</Card.Title>
                                <Card.Text>
                                    <ImagePlayer className='img' style={{ height: '100px', width: '140px' }} src={require('../assets/activeuser.png')}></ImagePlayer>
                                </Card.Text>
                                <Card.Text className='text-center fw-bold fs-4'>10</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </div>
            <div className='px-3'>
                <Table striped bordered hover responsive className='adminTable caption-top'>
                    <caption className='fw-bold fs-4'>OVERVIEW</caption>
                    <thead className='tableAdmin'>
                        <tr>
                            <th>S.No</th>
                            <th style={{ whiteSpace: 'nowrap' }}>Client Code</th>
                            <th style={{ whiteSpace: 'nowrap' }}>Client Logo</th>
                            <th style={{ whiteSpace: 'nowrap' }}>Client Name</th>
                            <th style={{ whiteSpace: 'nowrap' }}>Total Players</th>
                            <th style={{ whiteSpace: 'nowrap' }}>Total Staffs</th>
                            <th style={{ whiteSpace: 'nowrap' }}>Active Status</th>
                            <th style={{ whiteSpace: 'nowrap' }}>Client Representative Name</th>
                            <th style={{ whiteSpace: 'nowrap' }}>Client Mobile</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td style={{ color: 'green' }}>Active</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td style={{ color: 'green' }}>Active</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>

                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default SuperAdminDashboard