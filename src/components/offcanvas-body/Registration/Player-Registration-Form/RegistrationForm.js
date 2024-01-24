import React, { useRef, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import ImageUpload from '../ImageUpload';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


function RegistrationForm() {
    const [firstName, setFirstName] = useState("");
    const [midName, setMidName] = useState("");
    const [lastName, setLastName] = useState("");
    const [initial, setInitial] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [fathersName, setFathersName] = useState("");
    const [mothersName, setMothersName] = useState("");
    const [dob, setDOB] = useState("");
    const [bloodGrp, setBloodGrp] = useState("");
    const [mob, setMob] = useState("");
    const [gender, setGender] = useState("");
    const [mailId, setMailId] = useState("");

    const firstName1 = useRef("");
    const midName1 = useRef("");
    const lastName1 = useRef("");
    const initial1 = useRef("");
    const displayName1 = useRef("");
    const fathersName1 = useRef("");
    const mothersName1 = useRef("");
    const dob1 = useRef("");
    const bloodGrp1 = useRef("");
    const mob1 = useRef("");
    const gender1 = useRef("");
    const mail = useRef("");

    function handleResetBtn() {
        firstName1.current.value = "";
        midName1.current.value = "";
        lastName1.current.value = "";
        initial1.current.value = "";
        displayName1.current.value = "";
        fathersName1.current.value = "";
        mothersName1.current.value = "";
        dob1.current.value = "";
        bloodGrp1.current.value = "";
        mob1.current.value = "";
        gender1.current.checked = false;
    }


    return (
        <div>
            <Accordion defaultActiveKey="0" >
                <Accordion.Item eventKey="0">
                    <Accordion.Header><i className="bi bi-info-circle-fill me-1"></i><span style={{ fontWeight: '700' }}>PERSONAL INFORMATION</span></Accordion.Header>
                    <Accordion.Body>
                        <Container>
                            <Form >
                                <Row>
                                    <Col xs={12} lg={4} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="fName"
                                                type="text"
                                                placeholder="first name"
                                                ref={firstName1}
                                                onChange={(e) => { setFirstName(e.target.value); }}
                                            />
                                            <label htmlFor="fName" className='text-muted'>Player First Name*</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={4} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="mName"
                                                type="text"
                                                placeholder="second name"
                                                ref={midName1}
                                                onChange={(e) => setMidName(e.target.value)}
                                            />
                                            <label htmlFor="mName" className='text-muted'>Player Middle Name</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={4} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="lName"
                                                type="text"
                                                placeholder="second name"
                                                ref={lastName1}
                                                onChange={(e) => setLastName(e.target.value)}
                                            />
                                            <label htmlFor="lName" className='text-muted'>Player Last Name*</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={4} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="initials"
                                                type="text"
                                                placeholder="initials"
                                                ref={initial1}
                                                onChange={(e) => setInitial(e.target.value)}
                                            />
                                            <label htmlFor="initials" className='text-muted'>Initials</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={4} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="dName"
                                                type="text"
                                                placeholder="display name"
                                                ref={displayName1}
                                                onChange={(e) => setDisplayName(e.target.value)}
                                            />
                                            <label htmlFor="dName" className='text-muted'>Display Name*</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={4} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="fatherName"
                                                type="text"
                                                placeholder="father name"
                                                ref={fathersName1}
                                                onChange={(e) => setFathersName(e.target.value)}
                                            />
                                            <label htmlFor="fatherName" className='text-muted'>Father's Name*</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={4} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="motherName"
                                                type="text"
                                                placeholder="mother name"
                                                ref={mothersName1}
                                                onChange={(e) => setMothersName(e.target.value)}
                                            />
                                            <label htmlFor="motherName" className='text-muted'>Mother's Name</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={4} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="dob1"
                                                type="date"
                                                placeholder="dob"
                                                ref={dob1}
                                                onChange={(e) => setDOB(e.target.value)}
                                            />
                                            <label htmlFor="dob1" className='text-muted'>Date of Birth*</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={4} className='col'>
                                        <FloatingLabel className='mb-2'
                                            controlId="bloodGroup"

                                            label="BloodGroup*"
                                            ref={bloodGrp1}
                                            onChange={(e) => setBloodGrp(e.target.value)}
                                        >
                                            <Form.Select aria-label="bloodGroup">
                                                <option value="none">Select Type</option>
                                                <option value="O+">O+</option>
                                                <option value="O-">O-</option>
                                                <option value="A+">A+</option>
                                                <option value="A-">A-</option>
                                                <option value="B+">B+</option>
                                                <option value="B-">B-</option>
                                                <option value="AB+">AB+</option>
                                                <option value="AB-">AB-</option>
                                            </Form.Select>
                                        </FloatingLabel>
                                    </Col>
                                    <Col xs={12} lg={4} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="mobileNo"
                                                type="text"
                                                placeholder="mobile number"
                                                ref={mob1}
                                                onChange={(e) => setMob(e.target.value)}
                                            />
                                            <label htmlFor="mobileNo" className='text-muted'>Mobile Number*</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={4} className='col'>
                                        <Form.Floating className="mb-2">
                                            <Form.Control
                                                id="email"
                                                type="email"
                                                placeholder="email"
                                                ref={mail}
                                                onChange={(e) => setMailId(e.target.value)}
                                            />
                                            <label htmlFor="email" className='text-muted'>Email Address*</label>
                                        </Form.Floating>
                                    </Col>
                                    <Col xs={12} lg={4} className='d-flex justify-content-center pt-3 col'>
                                        <label className='text-muted me-2' htmlFor="gender">Gender</label>
                                        {['radio'].map((type) => (
                                            <div key={`inline-${type}`} className="mb-3">
                                                <Form.Check
                                                    inline
                                                    label="Male"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-male`}
                                                />
                                                <Form.Check
                                                    inline
                                                    label="Female"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-female`}
                                                />
                                            </div>
                                        ))}
                                    </Col>
                                    <Col xs={5} lg={2} className='col'>
                                        <ImageUpload />
                                    </Col>
                                    <Col xs={{ span: 6, offset: 1 }} lg={{ span: 9, offset: 1 }} className='d-flex align-items-center col'>
                                        <Button variant="warning" style={{ color: "white", width: "130px" }} onClick={() => handleResetBtn()}>CLEAR</Button>
                                        <Button variant="success" className='mx-3' style={{ whiteSpace: 'nowrap', width: '130px' }} >Save and Next</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Container>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

        </div>
    )
}

export default RegistrationForm