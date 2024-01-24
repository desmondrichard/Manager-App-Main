import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './ThingsTodoFormTab.css';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
function ThingsToDoFormTab() {

    return (
        <div className='mt-3'>
            {/* Tabs: start*/}
            <Container fluid >
                <Row style={{ margin: '0px' }} className=''>
                    <Tabs justify variant='pills' defaultkey='tab-1' className='mb-1 p-0 tab' style={{borderRadius:'5px'}}>
                        {/* Tab:1 */}
                        <Tab eventKey='tab-1' title='Branding'>
                            <Card className='bg-light p-4'>
                                <Row className='fw-bold' style={{ fontSize: '16px' }}>
                                    <Col xs={6} md={3} className='py-3 c1'>
                                        <Form.Check
                                            type='checkbox'
                                            inline
                                            label="Team Logo"
                                            name="teamlogo"
                                            id="1"
                                        />
                                    </Col>
                                    <Col xs={6} md={3} className='py-3 c1'>
                                        <Form.Check
                                            type='checkbox'
                                            inline
                                            label="Team Flages"
                                            name="teamflages"
                                            id="2"
                                        />
                                    </Col>
                                    <Col xs={6} md={3} className='py-3 c1'>
                                        <Form.Check
                                            type='checkbox'
                                            inline
                                            label="Side Flages"
                                            name="sideflages"
                                            id="3"
                                        />
                                    </Col>
                                    <Col xs={6} md={3} className='py-3 c1'>
                                        <Form.Check
                                            type='checkbox'
                                            inline
                                            label="Standees"
                                            name="standees"
                                            id="4"
                                        />
                                    </Col>
                                    <Col xs={6} md={3} className='py-3 c1'>
                                        <Form.Check
                                            type='checkbox'
                                            inline
                                            label="Bus Branding"
                                            name="busbranding"
                                            id="5"
                                        />
                                    </Col>
                                    <Col xs={6} md={3} className='py-3 c1'>
                                        <Form.Check
                                            type='checkbox'
                                            inline
                                            label="Bus Booking"
                                            name="busbooking"
                                            id="6"
                                        />
                                    </Col>
                                    <Col md={3} xs={8}>
                                        <FloatingLabel className='mb-2 c1'
                                            controlId="year"
                                            label="Year*"
                                        >
                                            <Form.Select aria-label="year">
                                                <option>Select Type</option>
                                                <option value="year1">2023</option>
                                                <option value="year2">2024</option>
                                                <option value="year3">2025</option>
                                            </Form.Select>
                                        </FloatingLabel>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='end btns'>
                                        <Button variant="warning" className='mx-2' style={{ color: 'white' }}>CLEAR</Button>
                                        <Button variant="success" className='mx-2'>SAVE</Button>
                                        <Button variant="primary">NEXT</Button>
                                    </Col>
                                </Row>
                            </Card>
                        </Tab>

                        {/* Tab:2 */}
                        <Tab eventKey='tab-2' title='Representative'>
                            <Card className='bg-light p-4'>
                                <Row className='fw-bold' style={{ fontSize: '16px' }}>
                                    <Col xs={7} md={3} className='py-3 c1'>
                                        <Form.Check
                                            type='checkbox'
                                            inline
                                            label="Representatives"
                                            name="representatives"
                                            id="1"
                                        />
                                    </Col>
                                    <Col xs={5} md={3} className='py-3 c1'>
                                        <Form.Check
                                            type='checkbox'
                                            inline
                                            label="Team Uniforms"
                                            name="teamuniforms"
                                            id="4"
                                        />
                                    </Col>
                                    <Col xs={7} md={3} className='py-3 c1'>
                                        <Form.Check
                                            type='checkbox'
                                            inline
                                            label="Team Tshirt"
                                            name="teamtshirts"
                                            id="5"
                                        />
                                    </Col>
                                    <Col md={3} xs={8}>
                                        <FloatingLabel className='mb-2 c1'
                                            controlId="year"
                                            label="Year*"
                                        >
                                            <Form.Select aria-label="year">
                                                <option>Select Type</option>
                                                <option value="year1">2023</option>
                                                <option value="year2">2024</option>
                                                <option value="year3">2025</option>
                                            </Form.Select>
                                        </FloatingLabel>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='end btns'>
                                        <Button variant="dark" className='me-1'>BACK</Button>
                                        <Button variant="warning" className='me-1' style={{ color: 'white' }}>CLEAR</Button>
                                        <Button variant="success" className='me-1'>SAVE</Button>
                                        <Button variant="primary">NEXT</Button>
                                    </Col>

                                </Row>
                            </Card>
                        </Tab>

                        {/* Tab:3 */}
                        <Tab eventKey='tab-3' title='Coach PhysioTherapist'>
                            <Card className='bg-light p-4'>
                                <Row className='fw-bold' style={{ fontSize: '16px' }}>
                                    <Col xs={12} md={{ span: 3, offset: 1 }} className='py-4 c1'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="name"
                                                type="text"
                                                placeholder="name"

                                            />
                                            <label htmlFor="name" className='text-muted'>Name</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} md={{ span: 3, offset: 1 }} className='py-4 c1'>
                                        <FloatingLabel
                                            controlId="designation"
                                            label="Designation*"
                                        >
                                            <Form.Select aria-label="designation">
                                                <option>Select Type</option>
                                                <option value="year1">Coach PhysioTherapist</option>
                                            </Form.Select>
                                        </FloatingLabel>
                                    </Col>

                                    <Col md={{ span: 3, offset: 1 }} xs={12} className='py-4 c1'>
                                        <FloatingLabel
                                            controlId="year"
                                            label="Year*"
                                        >
                                            <Form.Select aria-label="year">
                                                <option>Select Type</option>
                                                <option value="year1">2023</option>
                                                <option value="year2">2024</option>
                                                <option value="year3">2025</option>
                                            </Form.Select>
                                        </FloatingLabel>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='end btns'>
                                        <Button variant="dark" className='me-1'>BACK</Button>
                                        <Button variant="warning" className='me-1' style={{ color: 'white' }}>CLEAR</Button>
                                        <Button variant="success" className='me-1'>SAVE</Button>
                                        <Button variant="primary">NEXT</Button>
                                    </Col>

                                </Row>
                            </Card>
                        </Tab>
                        {/* Tab:4 */}
                        <Tab eventKey='tab-4' title='Fixtures'>
                            <Card className='bg-light p-4'>
                                <Row className='fw-bold' style={{ fontSize: '16px' }}>
                                    <Col md={4} xs={6} className='my-3 c1'>
                                        <Form.Floating>
                                            <Form.Control
                                                id="date"
                                                type="date"
                                                placeholder="date"

                                            />
                                            <label htmlFor="date" className='text-muted'>Date</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col md={4} xs={6} className='my-3 c1'>
                                        <Form.Floating>
                                            <Form.Control
                                                id="grounda"
                                                type="text"
                                                placeholder="grounda"

                                            />
                                            <label htmlFor="grounda" className='text-muted'>GroundA</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col md={4} xs={6} className='my-3 c1'>
                                        <Form.Floating>
                                            <Form.Control
                                                id="teama"
                                                type="text"
                                                placeholder="teama"

                                            />
                                            <label htmlFor="teama" className='text-muted'>TeamA</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col md={4} xs={6} className='my-3 c1'>
                                        <Form.Floating>
                                            <Form.Control
                                                id="teamb"
                                                type="text"
                                                placeholder="teamb"

                                            />
                                            <label htmlFor="teamb" className='text-muted'>TeamB</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col md={4} xs={6} className='my-3 c1'>
                                        <FloatingLabel className='mb-4 '
                                            controlId="year"
                                            label="Year*"
                                        >
                                            <Form.Select aria-label="year">
                                                <option>Select Type</option>
                                                <option value="year1">2023</option>
                                                <option value="year2">2024</option>
                                                <option value="year3">2025</option>
                                            </Form.Select>
                                        </FloatingLabel>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='end btns'>
                                        <Button variant="dark" className='mx-2'>BACK</Button>
                                        <Button variant="warning" className='mx-2' style={{ color: 'white' }}>CLEAR</Button>
                                        <Button variant="success" className='mx-2'>SAVE</Button>
                                        <Button variant="primary">NEXT</Button>
                                    </Col>

                                </Row>
                            </Card>
                        </Tab>
                        {/* Tab:5 */}
                        <Tab eventKey='tab-5' title='Hotel Accomodation'>
                            <Card className='bg-light p-4'>
                                <Row className='fw-bold' style={{ fontSize: '16px' }}>
                                    <Col md={4} xs={6} className='my-3 c1'>
                                        <Form.Floating>
                                            <Form.Control
                                                id="hotelname"
                                                type="text"
                                                placeholder="hotelname"

                                            />
                                            <label htmlFor="hotelname" className='text-muted'>Hotel Name</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col md={4} xs={6} className='my-3 c1'>
                                        <Form.Floating>
                                            <Form.Control
                                                id="cityname"
                                                type="text"
                                                placeholder="cityname"

                                            />
                                            <label htmlFor="cityname" className='text-muted'>City Name</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col md={4} xs={6} className='my-3 c1'>
                                        <Form.Floating>
                                            <Form.Control
                                                id="rooms"
                                                type="number"
                                                placeholder="rooms"

                                            />
                                            <label htmlFor="rooms" className='text-muted'>No of Rooms</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col md={4} xs={6} className='my-3 c1'>
                                        <Form.Floating>
                                            <Form.Control
                                                id="roomno"
                                                type="text"
                                                placeholder="roomno"

                                            />
                                            <label htmlFor="roomno" className='text-muted'>Room No</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col md={4} xs={6} className='my-3 c1'>
                                        <Form.Floating>
                                            <Form.Control
                                                id="checkin"
                                                type="date"
                                                placeholder="checkin"

                                            />
                                            <label htmlFor="checkin" className='text-muted'>Check In Date</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col md={4} xs={6} className='my-3 c1'>
                                        <Form.Floating>
                                            <Form.Control
                                                id="checkout"
                                                type="date"
                                                placeholder="checkout"

                                            />
                                            <label htmlFor="checkout" className='text-muted'>Check Out Date</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col md={4} xs={6} className='my-3 c1'>
                                        <Form.Floating>
                                            <Form.Control
                                                id="stayed"
                                                type="number"
                                                placeholder="stayed"

                                            />
                                            <label htmlFor="stayed" className='text-muted'>Days Stayed</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col md={4} xs={6} className='my-3 c1'>
                                        <Form.Floating>
                                            <Form.Control
                                                id="people"
                                                type="number"
                                                placeholder="people"

                                            />
                                            <label htmlFor="people" className='text-muted'>People Count</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col md={4} xs={6} className='my-3 c1'>
                                        <FloatingLabel className='mb-4'
                                            controlId="year"
                                            label="Year*"
                                        >
                                            <Form.Select aria-label="year">
                                                <option>Select Type</option>
                                                <option value="year1">2023</option>
                                                <option value="year2">2024</option>
                                                <option value="year3">2025</option>
                                            </Form.Select>
                                        </FloatingLabel>
                                    </Col>

                                </Row>
                                <Row>
                                    <Col className='text-end btns'>
                                        <Button variant="dark" className='mx-2'>BACK</Button>
                                        <Button variant="warning" className='mx-2' style={{ color: 'white' }}>CLEAR</Button>
                                        <Button variant="success" className='mx-2'>SAVE</Button>
                                        <Button variant="primary">NEXT</Button>
                                    </Col>

                                </Row>
                            </Card>
                        </Tab>
                        {/* Tab:6 */}
                        <Tab eventKey='tab-6' title='Match Reqirements'>
                            <Card className='bg-light p-4'>
                                <Row className='fw-bold' style={{ fontSize: '16px' }}>
                                    <Col md={4} xs={12} className='my-3 c1'>
                                        <Form.Floating>
                                            <Form.Control
                                                id="name"
                                                type="text"
                                                placeholder="name"

                                            />
                                            <label htmlFor="name" className='text-muted'>Name</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col md={4} xs={12} className='my-3 c1'>
                                        <Form.Floating>
                                            <Form.Control
                                                id="equipments"
                                                type="text"
                                                placeholder="equipments"

                                            />
                                            <label htmlFor="equipments" className='text-muted'>Equipments</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col md={4} xs={12} className='my-3 c1'>
                                        <Form.Floating>
                                            <Form.Control
                                                id="equipmentstype"
                                                type="text"
                                                placeholder="equipmentstype"

                                            />
                                            <label htmlFor="equipmentstype" className='text-muted'>Equipments Type</label>
                                        </Form.Floating>
                                    </Col>

                                    <Col md={4} xs={12} className='my-3 c1' >
                                        <FloatingLabel className='mb-4'
                                            controlId="year"
                                            label="Year*"
                                        >
                                            <Form.Select aria-label="year">
                                                <option>Select Type</option>
                                                <option value="year1">2023</option>
                                                <option value="year2">2024</option>
                                                <option value="year3">2025</option>
                                            </Form.Select>
                                        </FloatingLabel>
                                    </Col>

                                </Row>
                                <Row>
                                    <Col className='text-end btns' xs={12} >
                                        <Button variant="dark" className='me-1'>BACK</Button>
                                        <Button variant="warning" className='me-1' style={{ color: 'white' }}>CLEAR</Button>
                                        <Button variant="success" className='me-1'>SAVE</Button>
                                        <Button variant="primary">NEXT</Button>
                                    </Col>
                                </Row>
                            </Card>
                        </Tab>
                        {/* Tab:7 */}
                        <Tab eventKey='tab-7' title='Transport Details'>
                            <Card className='bg-light p-4'>
                                <Row className='fw-bold' style={{ fontSize: '16px' }}>
                                    <Col md={3} xs={6} className='my-3 c1'>
                                        <Form.Floating>
                                            <Form.Control
                                                id="leaving"
                                                type="text"
                                                placeholder="leaving"

                                            />
                                            <label htmlFor="leaving" className='text-muted'>Leaving From</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col md={3} xs={6} className='my-3 c1'>
                                        <Form.Floating>
                                            <Form.Control
                                                id="going"
                                                type="text"
                                                placeholder="going"

                                            />
                                            <label htmlFor="going" className='text-muted'>Going To</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col md={3} xs={6} className='my-3 c1'>
                                        <Form.Floating>
                                            <Form.Control
                                                id="doj"
                                                type="date"
                                                placeholder="doj"

                                            />
                                            <label htmlFor="doj" className='text-muted'>Date of Journey</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col md={3} xs={6} className='my-3 c1'>
                                        <Form.Floating>
                                            <Form.Control
                                                id="return"
                                                type="date"
                                                placeholder="return"

                                            />
                                            <label htmlFor="return" className='text-muted'>Return Date</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col md={3} xs={6} className='my-3 c1'>
                                        <Form.Floating>
                                            <Form.Control
                                                id="bustype"
                                                type="text"
                                                placeholder="bustype"

                                            />
                                            <label htmlFor="bustype" className='text-muted'>Bus Type</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col md={3} xs={6} className='my-3 c1'>
                                        <Form.Floating>
                                            <Form.Control
                                                id="traveltype"
                                                type="text"
                                                placeholder="traveltype"

                                            />
                                            <label htmlFor="traveltype" className='text-muted'>Travel Type</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col md={3} xs={6} className='my-3 c1'>
                                        <Form.Floating>
                                            <Form.Control
                                                id="transporttype"
                                                type="text"
                                                placeholder="transporttype"

                                            />
                                            <label htmlFor="transporttype" className='text-muted'>Transport Type</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col md={3} xs={6} className='my-3 c1'>
                                        <Form.Floating>
                                            <Form.Control
                                                id="timeslot"
                                                type="text"
                                                placeholder="timeslot"

                                            />
                                            <label htmlFor="timeslot" className='text-muted'>Time Slot</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col md={3} xs={6} className='my-3 c1'>
                                        <Form.Floating>
                                            <Form.Control
                                                id="seats"
                                                type="number"
                                                placeholder="seats"

                                            />
                                            <label htmlFor="seats" className='text-muted'>Seats Booked</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col md={3} xs={6} className='my-3 c1'>
                                        <Form.Floating>
                                            <Form.Control
                                                id="seatno"
                                                type="number"
                                                placeholder="seatno"

                                            />
                                            <label htmlFor="seatno" className='text-muted'>Seat No</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col md={3} xs={6} className='my-3 c1'>
                                        <FloatingLabel className='mb-4'
                                            controlId="year"
                                            label="Year*"
                                        >
                                            <Form.Select aria-label="year">
                                                <option>Select Type</option>
                                                <option value="year1">2023</option>
                                                <option value="year2">2024</option>
                                                <option value="year3">2025</option>
                                            </Form.Select>
                                        </FloatingLabel>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className='end btns'>
                                        <Button variant="dark" className='mx-2'>BACK</Button>
                                        <Button variant="warning" className='mx-2' style={{ color: 'white' }}>CLEAR</Button>
                                        <Button variant="success" className='mx-2'>SAVE</Button>
                                    </Col>

                                </Row>
                            </Card>
                        </Tab>
                    </Tabs>
                </Row>

            </Container>
            {/* Tabs:end */}
        </div>
    )
}

export default ThingsToDoFormTab