import React, { useRef, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useFormik } from 'formik';
import axios from 'axios';

const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = "*Required";
  }
  else if (!/^[a-zA-Z ]*$/.test(values.name)) {
    errors.name = "enter a valid name";
  }

  if (!/^[a-zA-Z ]*$/.test(values.equipments)) {
    errors.equipments = "enter a valid name";
  }

  if (!/^[a-zA-Z ]*$/.test(values.equipmentsType)) {
    errors.equipmentsType = "enter a valid name";
  }


  return errors;
}

function ThingsToDoMatchEquipments({ activationKey, onChildNextActivationKey, onPreviousActivationKey }) {
  //reset:
  const name1 = useRef("");
  const equip1 = useRef("");
  const equipType = useRef("");

  const [saveBtnClicked, setSaveBtnClicked] = useState(true)


  function handleReset() {
    name1.current.value = "";
    equip1.current.value = "";
    equipType.current.value = "";
    formik.resetForm();
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      equipments: '',
      equipmentsType: ''
    },
    validate,
    onSubmit: values => {
      axios.post('http://192.168.1.135/Manager-App-API/register/MatchEquipments_Requirements', values)
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

  // alert(`Hello! ,${values.groundName} you have successfully signed up`);
  // onChildNextActivationKey(childNextKey)
  // console.log("values", values);

  const handlePreviousButton = () => {
    onPreviousActivationKey("4")
  }

  const [childNextKey, setChildNextKey] = useState("6");

  function handleSkip() {
    onChildNextActivationKey(childNextKey)
  }

  return (
    <div>
      <Form onSubmit={formik.handleSubmit}>
        <Row>
          <Col md={4} className='my-3'>
            <Form.Floating className="mb-2">
              <Form.Control
                id="name"
                type="text"
                placeholder="equipname"
                ref={name1}
                name="name"
                value={formik.values.name} onBlur={formik.handleBlur} onChange={formik.handleChange}
              />
              {
                formik.touched.name && formik.errors.name ? <span className='span'>{formik.errors.name}</span> : null
              }
              <label htmlFor="name" className='text-muted'>Name*</label>
            </Form.Floating>
          </Col>
          <Col md={4} className='my-3'>
            <Form.Floating className="mb-2">
              <Form.Control
                id="equipments"
                type="text"
                placeholder="equipment"
                name="equipments"
                ref={equip1}
                value={formik.values.equipments} onBlur={formik.handleBlur} onChange={formik.handleChange}
              />
              {
                formik.touched.equipments && formik.errors.equipments ? <span className='span'>{formik.errors.equipments}</span> : null
              }
              <label htmlFor="equip" className='text-muted'>Equipment</label>
            </Form.Floating>
          </Col>
          <Col md={4} className='my-3'>
            <Form.Floating className="mb-2">
              <Form.Control
                id="equipmentsType"
                type="text"
                placeholder="equiptype"
                name="equipmentsType"
                ref={equipType}
                value={formik.values.equipmentsType} onBlur={formik.handleBlur} onChange={formik.handleChange}
              />
              {
                formik.touched.equipmentsType && formik.errors.equipmentsType ? <span className='span'>{formik.errors.equipmentsType}</span> : null
              }
              <label htmlFor="equipmentsType" className='text-muted'>Equipment Type</label>
            </Form.Floating>
          </Col>
        </Row>
        <Row>
          <Col className='end btns'>
            <Button variant="danger" className='mx-2' style={{ color: 'white' }} onClick={handlePreviousButton}>BACK</Button>
            {saveBtnClicked && <Button variant="warning" className='mx-2' style={{ color: 'white' }} onClick={() => handleReset()}>CLEAR</Button>}
            {saveBtnClicked && <Button variant="success" className='mx-2' type="submit" disabled={Object.keys(formik.errors).length > 0 || formik.values.name === ''}>SAVE AND NEXT</Button>}
            <Button variant="info" className='mx-2' style={{ color: 'white' }} onClick={() => handleSkip()}>SKIP</Button>

          </Col>
        </Row>
      </Form>
    </div>
  )
}

export default ThingsToDoMatchEquipments