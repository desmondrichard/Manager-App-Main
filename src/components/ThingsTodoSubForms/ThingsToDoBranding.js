import React, { useRef, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './ThingsToDoBranding.css';
import { useFormik } from 'formik';
import axios from 'axios';

function ThingsToDoBranding({ activationKey, onChildNextActivationKey, onPreviousActivationKey }) {
  //reset:
  // const teamLogo = useRef(false);
  // const teamFlage = useRef(false);
  // const sideFlages = useRef(false);
  // const standees = useRef(false);
  // const busBranding = useRef(false);
  // const busBooking = useRef(false);

  function handleReset() {
    // teamLogo.current.checked = false;
    // teamFlage.current.checked = false;
    // sideFlages.current.checked = false;
    // standees.current.checked = false;
    // busBranding.current.checked = false;
    // busBooking.current.checked = false;
    formik.setFieldValue('teamLogo', '');
    formik.setFieldValue('teamFlage', '');
    formik.setFieldValue('sideFlages', '');
    formik.setFieldValue('standees', '');
    formik.setFieldValue('busBranding', '');
    formik.setFieldValue('busBooking', '');
    formik.resetForm();
  }

  const [childNextKey, setChildNextKey] = useState("2");

  const [saveBtnClicked, setSaveBtnClicked] = useState(true)
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   onChildNextActivationKey(childNextKey)
  // }
  const handlePreviousButton = () => {
    onPreviousActivationKey("0")
  }
  //
  const formik = useFormik({
    initialValues: {
      teamLogo: 'no',
      teamFlage: 'no',
      sideFlages: 'no',
      standees: 'no',
      busBranding: 'no',
      busBooking: 'no'
    },
    onSubmit: values => {
      axios.post('https://localhost:7097/register/Branding', values)
        .then(response => {
          console.log(response.data);
          onChildNextActivationKey(childNextKey)
          console.log("values", values)
          setSaveBtnClicked(false)
        })
        .catch(error => {
          console.error(error.message);
          console.log("values", values)
        });
    }
  });

  function handleSkip() {
    onChildNextActivationKey(childNextKey)
  }



  // alert(`clicked next tab`);
  // onChildNextActivationKey(childNextKey)
  // console.log("values", values)

  return (
    <div>
      <Card className='bg-light p-4'>
        <Form onSubmit={formik.handleSubmit}>
          <Row className='fw-bold' style={{ fontSize: '16px' }}>
            <Col xs={12} md={4} className='py-3'>
              {/* <Form.Check label="Team Uniform" name='teamUniform' value={true} checked={formik.values.teamUniform} onChange={formik.handleChange} /> */}
              <Form.Check label="Team Logo" name='teamLogo' checked={formik.values.teamLogo === "yes"} value="yes" onChange={(e) => { formik.setFieldValue('teamLogo', e.target.checked ? "yes" : "no") }} />
            </Col>
            <Col xs={12} md={4} className='py-3'>
              <Form.Check label="Team Flag" name='teamFlage' checked={formik.values.teamFlage === "yes"} value={true} onChange={(e) => { formik.setFieldValue('teamFlage', e.target.checked ? "yes" : "no") }} />
            </Col>
            <Col xs={12} md={4} className='py-3'>
              <Form.Check label="Side Flag" name='sideFlages' checked={formik.values.sideFlages === "yes"} value={true} onChange={(e) => { formik.setFieldValue('sideFlages', e.target.checked ? "yes" : "no") }} />
            </Col>
            <Col xs={12} md={4} className='py-3'>
              <Form.Check label="Standees" name='standees' checked={formik.values.standees === "yes"} value={true} onChange={(e) => { formik.setFieldValue('standees', e.target.checked ? "yes" : "no") }} />
            </Col>
            <Col xs={12} md={4} className='py-3'>
              <Form.Check label="Bus Branding" name='busBranding' checked={formik.values.busBranding === "yes"} value={true} onChange={(e) => { formik.setFieldValue('busBranding', e.target.checked ? "yes" : "no") }} />
            </Col>
            <Col xs={12} md={4} className='py-3'>
              <Form.Check label="Bus Booking" name='busBooking' checked={formik.values.busBooking === "yes"} value={true} onChange={(e) => { formik.setFieldValue('busBooking', e.target.checked ? "yes" : "no") }} />
            </Col>

          </Row>
          <Row>
            <Col className='end btns'>
              {console.log("saveBtn2", saveBtnClicked)}
              <Button variant="danger" className='mx-2' style={{ color: 'white' }} onClick={handlePreviousButton}>BACK</Button>
              {saveBtnClicked && <Button variant="warning" className='mx-2' style={{ color: 'white' }} onClick={() => handleReset()}>CLEAR</Button>}
              {saveBtnClicked && <Button variant="success" className='mx-2' type="submit">SAVE AND NEXT</Button>}
              <Button variant="info" className='mx-2' style={{ color: 'white' }} onClick={() => handleSkip()}>SKIP</Button>

            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  )
}

export default ThingsToDoBranding