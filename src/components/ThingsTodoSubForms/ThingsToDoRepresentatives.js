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

  if (!values.representatives) {
    errors.representatives = "*Required";
  }
  else if (!/^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/.test(values.representatives)) {
    errors.representatives = "enter a valid name";
  }

  return errors;
}

function ThingsToDoRepresentatives({ activationKey, onChildNextActivationKey }) {
  const [childNextKey, setChildNextKey] = useState("1");

  //reset:
  const name1 = useRef("");
  const uniformChecked = useRef(false);
  const tshirtChecked = useRef(false);
  // if (uniformChecked.current.checked) {
  //   console.log("Team Uniform checked");
  // }
  // if (tshirtChecked.current.checked) {
  //   console.log("Team Tshirt checked");
  // }

  function handleReset() {
    name1.current.value = "";
    uniformChecked.current.checked = false;
    tshirtChecked.current.checked = false;
    formik.setFieldValue('representatives', '');
    formik.setFieldValue('teamUniform', false);
    formik.resetForm();

  }

  const formik = useFormik({
    initialValues: {
      representatives: '',
      teamUniform: '',
      teamTshirt:''
    },
    validate,
    onSubmit: values => {
      alert(`clicked next tab`);
      onChildNextActivationKey(childNextKey)
      console.log("values", values)
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
                  id="representatives"
                  type="text"
                  placeholder="name"
                  ref={name1}
                  name="representatives"
                  value={formik.values.representatives} onBlur={formik.handleBlur} onChange={formik.handleChange}
                />
                {
                  formik.touched.representatives && formik.errors.representatives ? <span className='span'>{formik.errors.representatives}</span> : null
                }
                <label htmlFor="representatives" className='text-muted'>Representatives Name*</label>
              </Form.Floating>
            </Col>
            <Col xs={12} md={4} className='col1'>
              {/* <Form.Check label="Team Uniform" ref={uniformChecked} name='teamUniform' /> */}
              <Form.Check label="Team Uniform" name='teamUniform' value={true} checked={formik.values.teamUniform} onChange={formik.handleChange} />
            </Col>
            <Col xs={12} md={4} className='col1'>
              <Form.Check label="Team Tshirt" name='teamTshirt' value={true} checked={formik.values.teamTshirt} onChange={formik.handleChange} />
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