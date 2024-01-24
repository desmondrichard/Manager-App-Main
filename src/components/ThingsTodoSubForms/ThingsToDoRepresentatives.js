import React, { useRef, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './ThingsToDoRepresentatives.css';
import { useFormik } from 'formik';

// validation:
const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = "*Required";
  }
  else if (!/^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/.test(values.name)) {
    errors.name = "enter a valid name";
  }

  return errors;
}

function ThingsToDoRepresentatives({ activationKey, onChildNextActivationKey }) {
  const [childNextKey, setChildNextKey] = useState("1");

  //reset:
  const name1 = useRef("");
  const uniformChecked = useRef(false);
  const tshirtChecked = useRef(false);

  function handleReset() {
    name1.current.value = "";
    uniformChecked.current.checked = false;
    tshirtChecked.current.checked = false;
    formik.resetForm();
  }

  const formik = useFormik({
    initialValues: {
      name: '',
    },
    validate,
    onSubmit: values => {
      alert(`Hello! ,${values.name} you have successfully signed up`);
      onChildNextActivationKey(childNextKey)
    }
  });


  return (
    <div>
      <Card className='bg-light p-4'>
        <Form onSubmit={formik.handleSubmit}>
          <Row className='fw-bold' style={{ fontSize: '16px' }}>
            <Col xs={12} md={4} className='py-3'>
              <Form.Floating className="mb-2">
                <Form.Control
                  id="name"
                  type="text"
                  placeholder="name"
                  ref={name1}
                  name="name"
                  value={formik.values.name} onBlur={formik.handleBlur} onChange={formik.handleChange}
                />
                {
                  formik.touched.name && formik.errors.name ? <span className='span'>{formik.errors.name}</span> : null
                }
                <label htmlFor="name" className='text-muted'>Representatives Name*</label>
              </Form.Floating>
            </Col>
            <Col xs={12} md={4} className='col1'>
              <Form.Check label="Team Uniform" ref={uniformChecked} />
            </Col>
            <Col xs={12} md={4} className='col1'>
              <Form.Check label="Team Tshirt" ref={tshirtChecked} />
            </Col>
          </Row>
          <Row>
            <Col className='end btns'>
              <Button variant="warning" className='mx-2' style={{ color: 'white' }} onClick={() => handleReset()}>CLEAR</Button>
              <Button variant="success" className='mx-2' type="submit" disabled={Object.keys(formik.errors).length > 0 || formik.values.name === ''}>SAVE AND NEXT</Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  )
}

export default ThingsToDoRepresentatives