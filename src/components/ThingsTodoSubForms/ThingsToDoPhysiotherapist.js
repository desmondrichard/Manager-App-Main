import React, { useRef, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
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

function ThingsToDoPhysiotherapist({ activationKey, onChildNextActivationKey, onPreviousActivationKey }) {
  //reset:
  const name1 = useRef("");
  const desig = useRef("");

  function handleReset() {
    name1.current.value = "";
    desig.current.value = "";
    formik.resetForm();
  }
  const formik = useFormik({
    initialValues: {
      name: '',
      designation:''
    },
    validate,
    onSubmit: values => {
      alert(`Hello! ,${values.name} you have successfully signed up`);
      onChildNextActivationKey(childNextKey)
      console.log("values",values);
    }
  });

  const [childNextKey, setChildNextKey] = useState("3");

  const handlePreviousButton = () => {
    onPreviousActivationKey("1")
  }
  return (
    <div>
      <Form onSubmit={formik.handleSubmit}>
        <Card className='bg-light p-4'>

          <Row className='fw-bold' style={{ fontSize: '16px' }}>
            <Col xs={12} md={4} className='py-3'>
              <Form.Floating className="mb-2">
                <Form.Control
                  id="name"
                  type="text"
                  placeholder="coachname"
                  ref={name1}
                  name="name"
                  value={formik.values.name} onBlur={formik.handleBlur} onChange={formik.handleChange}
                />
                {
                  formik.touched.name && formik.errors.name ? <span className='span'>{formik.errors.name}</span> : null
                }
                <label htmlFor="name" className='text-muted'>Coach/Physiotherapist Name*</label>
              </Form.Floating>
            </Col>
            <Col xs={12} md={4} className='py-3'>
              <FloatingLabel className='mb-2 c1'
                controlId="coach"
                label="Designation"
                id="designation"
                name="designation"
                value={formik.values.designation}
                onChange={formik.handleChange}
              >
                <Form.Select aria-label="designation" ref={desig}>
                  <option value="none">Select Type</option>
                  <option value="coach physiotherapist">Coach Physiotherapist</option>
                </Form.Select>
              </FloatingLabel>
            </Col>
            <Col xs={12} md={2} className='col1'>
            </Col>
            <Col xs={12} md={2} className='col1'>
            </Col>
          </Row>
          <Row>
            <Col className='end btns'>
              <Button variant="danger" className='mx-2' style={{ color: 'white' }} onClick={handlePreviousButton}>BACK</Button>
              <Button variant="warning" className='mx-2' style={{ color: 'white' }} onClick={() => handleReset()}>CLEAR</Button>
              <Button variant="success" className='mx-2' type="submit" disabled={Object.keys(formik.errors).length > 0 || formik.values.name === ''}>SAVE AND NEXT</Button>
            </Col>
          </Row>

        </Card>
      </Form>
    </div>
  )
}

export default ThingsToDoPhysiotherapist