import React, { useRef } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useFormik } from 'formik';
// 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const validate = values => {
  const errors = {};

  if (!values.leavingFrom) {
    errors.leavingFrom = "*Required";
  }
  else if (!/^[a-zA-Z ]*$/.test(values.leavingFrom)) {
    errors.leavingFrom = "enter a valid name";
  }

  if (!values.goingTo) {
    errors.goingTo = "*Required";
  }
  else if (!/^[a-zA-Z ]*$/.test(values.goingTo)) {
    errors.goingTo = "enter a valid name";
  }

  if (!/^\d{0,3}$/.test(values.seatBooked)) {
    errors.seatBooked = "enter a valid number";
  }

  if (!/^\d{0,3}$/.test(values.seatNo)) {
    errors.seatNo = "enter a valid number";
  }



  return errors;
}

function ThingsToDoTransport({ activationKey, onPreviousActivationKey }) {
  //reset:
  const leavingFrom = useRef("");
  const goingTo = useRef("");
  const journeyDate = useRef("");
  const returnDate = useRef("");
  const seatBooked = useRef("");
  const seatNo = useRef("");
  const transportType = useRef("");
  const travelType = useRef("");
  const busType = useRef("");

  function handleReset() {
    leavingFrom.current.value = "";
    goingTo.current.value = "";
    journeyDate.current.value = "";
    returnDate.current.value = "";
    seatBooked.current.value = "";
    seatNo.current.value = "";
    transportType.current.value = "none";
    travelType.current.value = "none";
    busType.current.value = "none";
    formik.resetForm();
  }

  function checkIfCheckoutAfterCheckin(checkinDate, checkoutDate) {
    const checkin = new Date(checkinDate);
    const checkout = new Date(checkoutDate);
    if (checkout < checkin) {
      alert('Checkout date must be after checkin date.');
      returnDate.current.value = ''; // clear the checkout date
    }
  }


  const formik = useFormik({
    initialValues: {
      leavingFrom: '',
      goingTo: '',
      seatBooked: '',
      seatNo: ''
    },
    validate,
    onSubmit: values => {
      // alert(`Hello! ,${values.groundName} you have successfully signed up`);
      notify()
    }
  });

  //Toast msg:
  const notify = () => {
    toast.success("Form is Successfully Submitted!", {
      position: toast.POSITION.TOP_CENTER // or 'BOTTOM_CENTER'
    });
  }

  const handlePreviousButton = () => {
    onPreviousActivationKey("5")
  }
  return (
    <div>
      <Form onSubmit={formik.handleSubmit}>
        <Row>
          <Col md={3}>
            <Form.Floating className="mb-2 mt-3">
              <Form.Control
                id="leavingFrom"
                type="text"
                placeholder="leavingfrom"
                name="leavingFrom"
                ref={leavingFrom}
                value={formik.values.leavingFrom} onBlur={formik.handleBlur} onChange={formik.handleChange}
              />
              {
                formik.touched.leavingFrom && formik.errors.leavingFrom ? <span className='span'>{formik.errors.leavingFrom}</span> : null
              }
              <label htmlFor="leavingFrom" className='text-muted'>Leaving From*</label>
            </Form.Floating>
          </Col>
          <Col md={3}>
            <Form.Floating className="mb-2 mt-3">
              <Form.Control
                id="goingTo"
                type="text"
                placeholder="goingTo"
                name="goingTo"
                ref={goingTo}
                value={formik.values.goingTo} onBlur={formik.handleBlur} onChange={formik.handleChange}
              />
              {
                formik.touched.goingTo && formik.errors.goingTo ? <span className='span'>{formik.errors.goingTo}</span> : null
              }
              <label htmlFor="goingTo" className='text-muted'>Going To*</label>
            </Form.Floating>
          </Col>
          <Col md={3} className='my-3'>
            <Form.Floating className="mb-2">
              <Form.Control
                id="checkin"
                type="date"
                min={new Date().toISOString().split('T')[0]}
                placeholder='DD-MM-YYYY'
                name="journeyDate"
                ref={journeyDate}
              />

              <label htmlFor="journeyDate" className='text-muted'>Check In</label>
            </Form.Floating>
          </Col>
          <Col md={3} className='my-3'>
            <Form.Floating className="mb-2">
              <Form.Control
                id="checkout"
                type="date"
                min={new Date().toISOString().split('T')[0]}
                placeholder='DD-MM-YYYY'
                name="returndate"
                ref={returnDate}
                onChange={(e) => checkIfCheckoutAfterCheckin(journeyDate.current.value, e.target.value)}
              />

              <label htmlFor="returnDate" className='text-muted'>Check Out</label>
            </Form.Floating>
          </Col>
          <Col md={3}>
            <FloatingLabel className='mb-2 c1'
              controlId="transporttype"
              label="Transport Type"
            >
              <Form.Select aria-label="transporttype" ref={transportType}>
                <option value="none">Select Type</option>
                <option value="year1">Roadways</option>
                <option value="year1">Railways</option>
                <option value="year1">Airways</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
          <Col md={3}>
            <FloatingLabel className='mb-2 c1'
              controlId="traveltype"
              label="Travel Type"
            >
              <Form.Select aria-label="traveltype" ref={travelType}>
                <option value="none">Select Type</option>
                <option value="year1">Roadways</option>
                <option value="year1">Railways</option>
                <option value="year1">Airways</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
          <Col md={3}>
            <FloatingLabel className='mb-2 c1'
              controlId="bustype"
              label="Bus Type"
            >
              <Form.Select aria-label="bustype" ref={busType}>
                <option value="none">Select Type</option>
                <option value="year1">Roadways</option>
                <option value="year1">Railways</option>
                <option value="year1">Airways</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
          <Col md={3}>
            <Form.Floating className="mb-2">
              <Form.Control
                id="seatBooked"
                type="text"
                placeholder="seatBooked"
                name="seatBooked"
                ref={seatBooked}
                value={formik.values.seatBooked} onBlur={formik.handleBlur} onChange={formik.handleChange}
              />
              {
                formik.touched.seatBooked && formik.errors.seatBooked ? <span className='span'>{formik.errors.seatBooked}</span> : null
              }
              <label htmlFor="seatBooked" className='text-muted'>No Of Seats Booked</label>
            </Form.Floating>
          </Col>
          <Col md={3}>
            <Form.Floating className="mb-2">
              <Form.Control
                id="seatNo"
                type="text"
                placeholder="seatnos"
                name="seatNo"
                ref={seatNo}
                value={formik.values.seatNo} onBlur={formik.handleBlur} onChange={formik.handleChange}
              />
              {
                formik.touched.seatNo && formik.errors.seatNo ? <span className='span'>{formik.errors.seatNo}</span> : null
              }
              <label htmlFor="seatNo" className='text-muted'>Seat No</label>
            </Form.Floating>
          </Col>
        </Row>
        <Row>
          <Col className='end btns'>
            <Button variant="danger" className='mx-2' style={{ color: 'white' }} onClick={handlePreviousButton}>BACK</Button>
            <Button variant="warning" className='mx-2' style={{ color: 'white' }} onClick={() => handleReset()}>CLEAR</Button>
            <Button variant="success" className='mx-2' type="submit" disabled={Object.keys(formik.errors).length > 0 || formik.values.leavingFrom === '' || formik.values.goingTo === ''}>SAVE</Button><ToastContainer />
          </Col>
        </Row>
      </Form>
    </div >
  )
}

export default ThingsToDoTransport