import React from 'react';
import Header from './Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import './AdminDashboard.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
function AdminDashboard() {
    return (
        <div>
            <Header />
            <div className='text-center'>
                <div className='playersList'>ADMIN DASHBOARD</div>
            </div>
            <br />
            <Container>
                <Row>
                    <Col lg={8}>
                        <Table responsive striped className='caption-top'>
                            <caption style={{ fontSize: '20px', fontWeight: 'bold', textAlign: 'center' }}>TEAMS OVERVIEW</caption>
                            <thead>
                                <tr style={{ backgroundColor: 'red' }} className='admintr'>
                                    <th style={{ whiteSpace: 'nowrap', color: 'white' }}>TEAM NAME</th>
                                    <th style={{ whiteSpace: 'nowrap', color: 'white' }}>TEAM CODE</th>
                                    <th style={{ whiteSpace: 'nowrap', color: 'white' }}>SEASON YEAR</th>
                                    <th style={{ whiteSpace: 'nowrap', color: 'white' }}>TEAM LOGO</th>
                                    <th style={{ color: 'white' }}>LOGIN</th>
                                    <th style={{ color: 'white' }}>DELETE</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='pt-3 text-center'>1</td>
                                    <td className='pt-3 text-center'>Mark</td>
                                    <td className='pt-3 text-center'>Otto</td>
                                    <td className='pt-3 text-center'>@mdo</td>
                                    <td><Button variant="success">LOGIN</Button></td>
                                    <td><Button variant="danger">REMOVE</Button></td>
                                </tr>


                            </tbody>
                        </Table>
                    </Col>
                    <Col lg={4} className='mt-2'>
                        <h5 className='text-center' style={{ color: '#595c5f' }}>ADD TEAMS</h5>
                        <Card style={{ border: '3px outset #2885D7' }}>
                            <Form className='p-3'>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Team Name*"
                                    className="mb-3"
                                >
                                    <Form.Select aria-label="Default select example">
                                        <option value="none">Open this select menu</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </FloatingLabel>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Season Year*"
                                    className="mb-3"
                                >
                                    <Form.Control type="text" placeholder="enter year" />
                                </FloatingLabel>

                                <div>
                                    <p style={{ fontSize: '12px', textAlign: 'center', fontWeight: 'bold' }}>*Please upload JPG/PNG image only</p>
                                </div>

                                <div className="d-grid gap-2">
                                    <Button variant="outline-success">SUBMIT</Button>
                                </div>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AdminDashboard