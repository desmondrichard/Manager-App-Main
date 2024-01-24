import React, { useRef, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useFormik } from 'formik';

const validate = values => {
  const errors = {};

  if (!values.groundName) {
    errors.groundName = "*Required";
  }
  else if (!/^[a-zA-Z ]*$/.test(values.groundName)) {
    errors.groundName = "enter a valid name";
  }

  if (!/^[a-zA-Z ]*$/.test(values.teamA)) {
    errors.teamA = "enter a valid name";
  }

  if (!/^[a-zA-Z ]*$/.test(values.teamB)) {
    errors.teamB = "enter a valid name";
  }

  return errors;
}
function ThingsToDoFixtures({ activationKey, onChildNextActivationKey, onPreviousActivationKey }) {


  //reset:
  const name1 = useRef("");
  const teamA = useRef("");
  const teamB = useRef("");
  const date = useRef("");

  function handleReset() {
    name1.current.value = "";
    teamA.current.value = "";
    teamB.current.value = "";
    date.current.value = "";
    formik.resetForm();
  }

  const formik = useFormik({
    initialValues: {
      groundName: '',
      teamA: '',
      teamB: ''
    },
    validate,
    onSubmit: values => {
      alert(`Hello! ,${values.groundName} you have successfully signed up`);
      onChildNextActivationKey(childNextKey)
    }
  });

  const [childNextKey, setChildNextKey] = useState("4");

  const handlePreviousButton = () => {
    onPreviousActivationKey("2")
  }
  return (
    <div>
      <Form onSubmit={formik.handleSubmit}>
        <Row>
        <Col>
            <Form.Floating className="mb-2">
              <Form.Control
                id="groundName"
                type="text"
                placeholder="groundName"
                ref={name1}
                name="groundName"
                value={formik.values.groundName} onBlur={formik.handleBlur} onChange={formik.handleChange}
              />
              {
                formik.touched.groundName && formik.errors.groundName ? <span className='span'>{formik.errors.groundName}</span> : null
              }
              <label htmlFor="groundName" className='text-muted'>Ground Name*</label>
            </Form.Floating>
          </Col>
          <Col xs={12} lg={3} className='col'>
            {/*  */}
            <Form.Floating className="mb-2">
              <Form.Control
                id="dob1"
                type="date"
                placeholder='DD-MM-YYYY'
                name="dob"
                ref={date}
                max={new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString().split("T")[0]}
              />

              <label htmlFor="dob" className='text-muted'>Date of Birth</label>
            </Form.Floating>
          </Col>
         
          <Col>
            <Form.Floating className="mb-2">
              <Form.Control
                id="teamA"
                type="text"
                placeholder="teamA"
                ref={teamA}
                name="teamA"
                value={formik.values.teamA} onBlur={formik.handleBlur} onChange={formik.handleChange}
              />
              {
                formik.touched.teamA && formik.errors.teamA ? <span className='span'>{formik.errors.teamA}</span> : null
              }
              <label htmlFor="teamA" className='text-muted'>Team A</label>
            </Form.Floating>
          </Col>
          <Col>
            <Form.Floating className="mb-2">
              <Form.Control
                id="teamB"
                type="text"
                placeholder="teamB"
                ref={teamB}
                name="teamB"
                value={formik.values.teamB} onBlur={formik.handleBlur} onChange={formik.handleChange}
              />
              {
                formik.touched.teamB && formik.errors.teamB ? <span className='span'>{formik.errors.teamB}</span> : null
              }
              <label htmlFor="teamB" className='text-muted'>Team B</label>
            </Form.Floating>
          </Col>
        </Row>
        <Row>
          <Col className='end btns'>
            <Button variant="danger" className='mx-2' style={{ color: 'white' }} onClick={handlePreviousButton}>BACK</Button>
            <Button variant="warning" className='mx-2' style={{ color: 'white' }} onClick={() => handleReset()}>CLEAR</Button>
            <Button variant="success" className='mx-2' type="submit" disabled={Object.keys(formik.errors).length > 0 || formik.values.groundName === ''}>SAVE AND NEXT</Button>
          </Col>
        </Row>
      </Form>
    </div>
  )
}

export default ThingsToDoFixtures