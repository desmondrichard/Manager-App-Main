import React, { useRef, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './ThingsToDoBranding.css';
import { useFormik } from 'formik';


function ThingsToDoBranding({ activationKey, onChildNextActivationKey, onPreviousActivationKey }) {
  //reset:
  const logoChecked = useRef(false);
  const flagChecked = useRef(false);
  const sideFlagChecked = useRef(false);
  const standeesChecked = useRef(false);
  const brandingChecked = useRef(false);
  const bookingChecked = useRef(false);

  function handleReset() {
    logoChecked.current.checked = false;
    flagChecked.current.checked = false;
    sideFlagChecked.current.checked = false;
    standeesChecked.current.checked = false;
    brandingChecked.current.checked = false;
    bookingChecked.current.checked = false;
    // formik.resetForm();
  }

  const [childNextKey, setChildNextKey] = useState("2");

  const handleSubmit = (e) => {
    e.preventDefault();
    onChildNextActivationKey(childNextKey)
  }
  const handlePreviousButton = () => {
    onPreviousActivationKey("0")
  }
  return (
    <div>
      <Card className='bg-light p-4'>
        <Form >
          <Row className='fw-bold' style={{ fontSize: '16px' }}>
            <Col xs={12} md={4} className='py-3'>
              <Form.Check label="Team Logo" ref={logoChecked} />
            </Col>
            <Col xs={12} md={4} className='py-3'>
              <Form.Check label="Team Flag" ref={flagChecked} />
            </Col>
            <Col xs={12} md={4} className='py-3'>
              <Form.Check label="Side Flag" ref={sideFlagChecked} />
            </Col>
            <Col xs={12} md={4} className='py-3'>
              <Form.Check label="Standees" ref={standeesChecked} />
            </Col>
            <Col xs={12} md={4} className='py-3'>
              <Form.Check label="Bus Branding" ref={brandingChecked} />
            </Col>
            <Col xs={12} md={4} className='py-3'>
              <Form.Check label="Bus Booking" ref={bookingChecked} />
            </Col>

          </Row>
          <Row>
            <Col className='end btns'>
              <Button variant="danger" className='mx-2' style={{ color: 'white' }} onClick={handlePreviousButton}>BACK</Button>
              <Button variant="warning" className='mx-2' style={{ color: 'white' }} onClick={() => handleReset()}>CLEAR</Button>
              <Button variant="success" className='mx-2' type="submit" onClick={(e) => handleSubmit(e)}>SAVE AND NEXT</Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  )
}

export default ThingsToDoBranding