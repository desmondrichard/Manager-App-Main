import React, { useRef, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useFormik } from 'formik';


const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = "*Required";
  }
  else if (!/^[a-zA-Z ]*$/.test(values.name)) {
    errors.name = "enter a valid name";
  }

  if (!/^[a-zA-Z ]*$/.test(values.equipment)) {
    errors.equipment = "enter a valid name";
  }

  if (!/^[a-zA-Z ]*$/.test(values.equipmentType)) {
    errors.equipmentType = "enter a valid name";
  }


  return errors;
}

function ThingsToDoMatchEquipments({ activationKey, onChildNextActivationKey, onPreviousActivationKey }) {
  //reset:
  const name1 = useRef("");
  const equip1 = useRef("");
  const equipType = useRef("");

  function handleReset() {
    name1.current.value = "";
    equip1.current.value = "";
    equipType.current.value = "";
    formik.resetForm();
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      equipment: '',
      equipmentType: ''
    },
    validate,
    onSubmit: values => {
      alert(`Hello! ,${values.groundName} you have successfully signed up`);
      onChildNextActivationKey(childNextKey)
    }
  });

  const handlePreviousButton = () => {
    onPreviousActivationKey("4")
  }

  const [childNextKey, setChildNextKey] = useState("6");

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
                id="equipment"
                type="text"
                placeholder="equipment"
                name="equipment"
                ref={equip1}
                value={formik.values.equipment} onBlur={formik.handleBlur} onChange={formik.handleChange}
              />
              {
                formik.touched.equipment && formik.errors.equipment ? <span className='span'>{formik.errors.equipment}</span> : null
              }
              <label htmlFor="equip" className='text-muted'>Equipment</label>
            </Form.Floating>
          </Col>
          <Col md={4} className='my-3'>
            <Form.Floating className="mb-2">
              <Form.Control
                id="equipmentType"
                type="text"
                placeholder="equiptype"
                name="equipmentType"
                ref={equipType}
                value={formik.values.equipmentType} onBlur={formik.handleBlur} onChange={formik.handleChange}
              />
              {
                formik.touched.equipmentType && formik.errors.equipmentType ? <span className='span'>{formik.errors.equipmentType}</span> : null
              }
              <label htmlFor="equipmentType" className='text-muted'>Equipment Type</label>
            </Form.Floating>
          </Col>
        </Row>
        <Row>
          <Col className='end btns'>
            <Button variant="danger" className='mx-2' style={{ color: 'white' }} onClick={handlePreviousButton}>BACK</Button>
            <Button variant="warning" className='mx-2' style={{ color: 'white' }} onClick={() => handleReset()}>CLEAR</Button>
            <Button variant="success" className='mx-2' type="submit" disabled={Object.keys(formik.errors).length > 0 || formik.values.name === ''}>SAVE AND NEXT</Button>
          </Col>
        </Row>
      </Form>
    </div>
  )
}

export default ThingsToDoMatchEquipments