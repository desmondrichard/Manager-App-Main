import React, { useRef, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useFormik } from 'formik';
import axios from 'axios';


const validate = values => {
  const errors = {};

  if (!values.groundName) {
    errors.groundName = "*Required";
  }
  else if (!/^[a-zA-Z ]*$/.test(values.groundName)) {
    errors.groundName = "enter a valid name";
  }

  if (!(values.teamA)) {
    errors.teamA = "*Required";
  }

  if (!(values.teamB)) {
    errors.teamB = "*Required";
  }

  if (!values.dateTime) {
    errors.dateTime = "*Required";
  }

  return errors;
}
function ThingsToDoFixtures({ activationKey, onChildNextActivationKey, onPreviousActivationKey }) {


  //reset:
  const name1 = useRef("");
  const teamA = useRef("");
  const teamB = useRef("");
  const date = useRef("");
  const teamImage1 = useRef(null)
  const teamImage2 = useRef(null)

  function handleReset() {
    name1.current.value = "";
    teamA.current.value = "";
    teamB.current.value = "";
    date.current.value = "";
    teamImage1.current.value = null;
    teamImage2.current.value = null;
    formik.resetForm();
  }

  const formik = useFormik({
    initialValues: {
      groundName: '',
      dateTime: '',
      teamA: '',
      teamB: '',
      teamImage1: null,
      teamImagePreview1: null,
      teamAImage: '',
      teamImage2: null,
      teamImagePreview2: null,
      teamBImage: '',

    },
    validate,
    onSubmit: (values, { setSubmitting }) => {
      // const dateOfBirth = new Date(values.dateTime);
      // const formattedDOB = `${dateOfBirth.getDate()}/${dateOfBirth.getMonth() + 1}/${dateOfBirth.getFullYear()}`;

      const newValues = { ...values, teamAImage: formik.values.teamImagePreview1, teamBImage: formik.values.teamImagePreview2 }

      const formData = new FormData();
      formData.append('groundName', values.groundName);
      formData.append('dateTime', values.dateTime);
      formData.append('teamA', values.teamA);
      formData.append('teamB', values.teamB);
      formData.append('teamAImage', formik.values.teamImage1);
      formData.append('teamBImage', formik.values.teamImage2);

       //Looping:
       formData.forEach((value, key) => {
        console.log("formData key:", key);
        console.log("formData value:", value);
    });

      axios.post('https://localhost:7097/api/playerimage/FixturesTest', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then(response => {
          console.log(response.data);
          onChildNextActivationKey(childNextKey)
          console.log("newvalues", newValues)
          setSubmitting(false);
        })
        .catch(error => {
          console.error(error.message);
          console.log("newvalues", newValues)
          setSubmitting(false);
        });
    }
  });

  // const dateOfBirth = new Date(values.dateTime);
  // const formattedDOB = `${dateOfBirth.getDate()}/${dateOfBirth.getMonth() + 1}/${dateOfBirth.getFullYear()}`;
  // const newValues = { ...values, teamAImage: formik.values.teamImagePreview1, teamBImage: formik.values.teamImagePreview2 }
  // alert(`clicked next`);
  // onChildNextActivationKey(childNextKey)
  // console.log("newvalues", newValues)
  // setSubmitting(false);

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
                id="dateTime"
                type="date"
                placeholder='DD-MM-YYYY'
                name="dateTime"
                ref={date}
                max={new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString().split("T")[0]}
                value={formik.values.dateTime} onChange={formik.handleChange} onBlur={formik.handleBlur}
              />
              {
                formik.touched.dateTime && formik.errors.dateTime ? <span className='span'>{formik.errors.dateTime}</span> : null
              }

              <label htmlFor="dateTime" className='text-muted'>Date*</label>
            </Form.Floating>
          </Col>

          <Col xs={12} lg={3} className='col'>
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
              <label htmlFor="teamA" className='text-muted'>Team A*</label>
            </Form.Floating>
          </Col>
          <Col xs={12} lg={3} className='col'>
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
              <label htmlFor="teamB" className='text-muted'>Team B*</label>
            </Form.Floating>
          </Col>
          {/* Added Team image: */}
          <Col xs={12} lg={4} className='col'>
            <Form.Floating className="mb-2">
              <Form.Control
                id="teamImage1"
                type="file"
                accept="image/*"
                placeholder="teamImage"
                name="teamAImage"
                ref={teamImage1}
                onChange={(event) => {
                  formik.setFieldValue('teamImage1', event.currentTarget.files[0]);
                  const file1 = event.currentTarget.files[0];
                  if (file1) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                      formik.setFieldValue('teamImagePreview1', event.target.result);
                    };
                    reader.readAsDataURL(file1);
                  }
                }}
              />
              <label htmlFor="teamImage1" className='text-muted'>Team A Image</label>
            </Form.Floating>
            {formik.values.teamImagePreview1 && (
              <img src={formik.values.teamImagePreview1} alt="Team Image Preview" className="img-fluid mt-2" style={{ height: '200px', width: '150px' }} />
            )}
          </Col>

          {/* Image:2 */}
          <Col xs={12} lg={4} className='col'>
            <Form.Floating className="mb-2">
              <Form.Control
                id="teamImage2"
                type="file"
                accept="image/*"
                placeholder="teamImage"
                name="teamBImage"
                ref={teamImage2}
                onChange={(event) => {
                  formik.setFieldValue('teamImage2', event.currentTarget.files[0]);
                  const file2 = event.currentTarget.files[0];
                  if (file2) {
                    const reader = new FileReader();
                    reader.onload = (event) => {
                      formik.setFieldValue('teamImagePreview2', event.target.result);
                    };
                    reader.readAsDataURL(file2);
                  }
                }}
              />
              <label htmlFor="teamImage2" className='text-muted'>Team A Image</label>
            </Form.Floating>
            {formik.values.teamImagePreview2 && (
              <img src={formik.values.teamImagePreview2} alt="Team Image Preview" className="img-fluid mt-2" style={{ height: '200px', width: '150px' }} />
            )}
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