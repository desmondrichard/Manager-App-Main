import React, { useRef, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './ThingsToDoRepresentatives.css';
import { useFormik } from 'formik';
import axios from 'axios';


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
  // const uniformChecked = useRef({ checked: false });
  // const tshirtChecked = useRef({ checked: false });


  function handleReset() {
    name1.current.value = "";
    // uniformChecked.current.checked = false;
    // tshirtChecked.current.checked = false;
    formik.setFieldValue('teamUniform', '');
    formik.setFieldValue('teamTshirt', '');
    formik.setFieldValue('representatives', '');
    formik.resetForm();

  }

  const formik = useFormik({
    initialValues: {
      representatives: '',
      teamUniform: 'no',
      teamTshirt: 'no',
      team: ''
    },
    validate,
    onSubmit: values => {
      axios.post('https://localhost:7097/register/AuctionRepresentatives', values)
        .then(response => {
          console.log(response.data);
          onChildNextActivationKey(childNextKey)
          console.log("values", values)
        })
        .catch(error => {
          console.log("values", values)
          // console.error(error.response.data);
          console.log(error.message);
        });
    }
  });

  // alert(`clicked next tab`);
  // onChildNextActivationKey(childNextKey)
  // console.log("values", values)

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
              <Form.Check label="Team Uniform" name='teamUniform' value="yes" checked={formik.values.teamUniform === "yes"} onChange={(e) => {
                formik.setFieldValue('teamUniform', e.target.checked ? "yes" : "no");
              }} />
            </Col>
            <Col xs={12} md={4} className='col1'>
              <Form.Check label="Team Tshirt" name='teamTshirt' value="yes" checked={formik.values.teamTshirt === "yes"} onChange={(e) => {
                formik.setFieldValue('teamTshirt', e.target.checked ? "yes" : "no");
              }} />
            </Col>

            {/* Temporary Field: */}
            <Col xs={12} md={4} className='py-3 c1'>
              <Form.Floating className="mb-2">
                <Form.Control
                  id="team"
                  type="text"
                  placeholder="name"
                  name="team"
                  value={formik.values.team} onBlur={formik.handleBlur} onChange={formik.handleChange}
                />
                {
                  formik.touched.team && formik.errors.team ? <span className='span'>{formik.errors.team}</span> : null
                }
                <label htmlFor="PlayersName" className='text-muted'>Team Name</label>
              </Form.Floating>
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