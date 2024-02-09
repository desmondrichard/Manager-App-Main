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

  if (!/^\d{0,3}$/.test(values.noOfSeatsBooked)) {
    errors.noOfSeatsBooked = "enter a valid number";
  }

  if (!/^\d{0,3}$/.test(values.seatNumbers)) {
    errors.seatNumbers = "enter a valid number";
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
  const transportTypeReset = useRef("");
  const travelType = useRef("");
  const busType = useRef("");

  function handleReset() {
    leavingFrom.current.value = "";
    goingTo.current.value = "";
    journeyDate.current.value = "";
    returnDate.current.value = "";
    seatBooked.current.value = "";
    seatNo.current.value = "";
    transportTypeReset.current.value = "none";
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
    else {
      formik.setFieldValue("checkOut", checkoutDate);
  }
  }


  const formik = useFormik({
    initialValues: {
      leavingFrom: '',
      goingTo: '',
      noOfSeatsBooked: '',
      seatNumbers: '',
      transportType:'',
      travelType: '',
      busType: '',
      dateOfJourney:'',
      returnDate:''
    },
    validate,
    onSubmit: values => {
      // alert(`Hello! ,${values.groundName} you have successfully signed up`);
      notify()
      console.log("values", values)
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
                id="dateOfJourney"
                type="date"
                min={new Date().toISOString().split('T')[0]}
                placeholder='DD-MM-YYYY'
                name="dateOfJourney"
                ref={journeyDate}
                value={formik.values.dateOfJourney}
                onChange={formik.handleChange}
              />

              <label htmlFor="dateOfJourney" className='text-muted'>Date Of Journey</label>
            </Form.Floating>
          </Col>
          <Col md={3} className='my-3'>
            <Form.Floating className="mb-2">
              <Form.Control
                id="returndate"
                type="date"
                min={new Date().toISOString().split('T')[0]}
                placeholder='DD-MM-YYYY'
                name="returndate"
                ref={returnDate}
                value={formik.values.returndate}
                onChange={(e) => checkIfCheckoutAfterCheckin(journeyDate.current.value, e.target.value)}
              />

              <label htmlFor="returnDate" className='text-muted'>Return Date</label>
            </Form.Floating>
          </Col>
          <Col md={3}>
            <FloatingLabel className='mb-2 c1'
              controlId="transportType"
              label="Transport Type"
              name="transportType"
              value={formik.values.transportType}
              onChange={formik.handleChange}
            >
              <Form.Select aria-label="transportType" ref={transportTypeReset}>
                <option value="none">Select Type</option>
                <option value="Roadways">Roadways</option>
                <option value="Railways">Railways</option>
                <option value="Airways">Airways</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
          <Col md={3}>
            <FloatingLabel className='mb-2 c1'
              controlId="travelType"
              label="Travel Type"
              name="travelType"
              value={formik.values.travelType}
              onChange={formik.handleChange}
            >
              <Form.Select aria-label="travelType" ref={travelType}>
                <option value="none">Select Type</option>
                <option value="Roadways">Roadways</option>
                <option value="Railways">Railways</option>
                <option value="Airways">Airways</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
          <Col md={3}>
            <FloatingLabel className='mb-2 c1'
              controlId="busType"
              label="Bus Type"
              name='busType'
              value={formik.values.busType}
              onChange={formik.handleChange}
            >
              <Form.Select aria-label="busType" ref={busType}>
                <option value="none">Select Type</option>
                <option value="Roadways">Roadways</option>
                <option value="Railways">Railways</option>
                <option value="Airways">Airways</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
          <Col md={3}>
            <Form.Floating className="mb-2">
              <Form.Control
                id="noOfSeatsBooked"
                type="text"
                placeholder="seatBooked"
                name="noOfSeatsBooked"
                ref={seatBooked}
                value={formik.values.noOfSeatsBooked} onBlur={formik.handleBlur} onChange={formik.handleChange}
              />
              {
                formik.touched.noOfSeatsBooked && formik.errors.noOfSeatsBooked ? <span className='span'>{formik.errors.noOfSeatsBooked}</span> : null
              }
              <label htmlFor="noOfSeatsBooked" className='text-muted'>No Of Seats Booked</label>
            </Form.Floating>
          </Col>
          <Col md={3}>
            <Form.Floating className="mb-2">
              <Form.Control
                id="seatNumbers"
                type="text"
                placeholder="seatnos"
                name="seatNumbers"
                ref={seatNo}
                value={formik.values.seatNumbers} onBlur={formik.handleBlur} onChange={formik.handleChange}
              />
              {
                formik.touched.seatNumbers && formik.errors.seatNumbers ? <span className='span'>{formik.errors.seatNumbers}</span> : null
              }
              <label htmlFor="seatNumbers" className='text-muted'>Seat No</label>
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