import React, { useRef } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import axios from 'axios';
import { useFormik } from 'formik';
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

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

  // if (!values.transportType) {
  //   errors.transportType = "*Required";
  // }

  if (!values.travelType) {
    errors.travelType = "*Required";
  }

  if (!values.busType) {
    errors.busType = "*Required";
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

  function checkIfCheckReturnDateAfterJourneyDate(checkinDate, checkoutDate) {
    const checkin = new Date(checkinDate);
    const checkout = new Date(checkoutDate);
    if (checkout < checkin) {
      alert('Checkout date must be after checkin date.');
      returnDate.current.value = ''; // clear the checkout date
      formik.setFieldValue('returnDate', '');
    }
    else {
      formik.setFieldValue('returnDate', checkoutDate);
    }
  }

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      leavingFrom: '',
      goingTo: '',
      noOfSeatsBooked: '',
      seatNumbers: '',
      transportType: '',
      travelType: '',
      busType: '',
      dateOfJourney: '',
      returnDate: ''
    },
    validate,
    onSubmit: (values, { setSubmitting }) => {
      // const dateOfBirth = new Date(values.dateOfJourney);
      //const formattedDOB = `${dateOfBirth.getDate()}/${dateOfBirth.getMonth() + 1}/${dateOfBirth.getFullYear()}`;
      //const dateOfBirth1 = new Date(values.returnDate);
      //const formattedDOB1 = `${dateOfBirth1.getDate()}/${dateOfBirth1.getMonth() + 1}/${dateOfBirth1.getFullYear()}`;
      // const newValues = { ...values, dateOfJourney: formattedDOB, returnDate: formattedDOB1 };

      const newValues = { ...values }
      // notify();
      axios.post('https://localhost:7097/register/Transport', newValues)
        .then(response => {
          console.log(response.data);
          console.log("newvalues", newValues)
          setSubmitting(false);
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Data Successfully saved",
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/thingstodo')
        })
        .catch(error => {
          console.error(error.message);
          console.log("newvalues", newValues)
          setSubmitting(false);
          Swal.fire({
            title: "Oops",
            text: "Somthing went wrong?",
            icon: "error"
          });
          navigate('/thingstodo')
        });

    }
  });

  // console.log("newvalues", newValues)
  // setSubmitting(false);

  //Toast msg:
  // const notify = () => {
  //   toast.success("Form is Successfully Submitted!", {
  //     position: toast.POSITION.TOP_CENTER // or 'BOTTOM_CENTER'
  //   });
  // }

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
                onChange={(e) => checkIfCheckReturnDateAfterJourneyDate(journeyDate.current.value, e.target.value)}
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
              <Form.Select aria-label="transportType" ref={transportTypeReset} onChange={(e) => formik.setFieldValue('transportType', e.target.value)}>
                <option value="none">Select Type</option>
                <option value="Roadways">Roadways</option>
                <option value="Railways">Railways</option>
                <option value="Airways">Airways</option>
              </Form.Select>
              {
                formik.touched.transportType && formik.errors.transportType ? <span className='span'>{formik.errors.transportType}</span> : null
              }
            </FloatingLabel>
          </Col>
          <Col md={3}>
            <FloatingLabel className='mb-2 c1'
              controlId="travelType"
              label="Travel Type*"
              name="travelType"
              value={formik.values.travelType} onBlur={formik.handleBlur}
              onChange={(e) => formik.handleChange(e)}
            >
              <Form.Select aria-label="travelType" ref={travelType} disabled={formik.values.transportType === 'none'}>
                <option value="none">Select Type</option>

                <option value="Bus" disabled={formik.values.transportType !== 'Roadways'}>Bus</option>

                <option value="Rail" disabled={formik.values.transportType !== 'Railways'}>Rail</option>

                <option value="Flight" disabled={formik.values.transportType !== 'Airways'}>Flight</option>

              </Form.Select>
              {
                formik.touched.travelType && formik.errors.travelType ? <span className='span'>{formik.errors.travelType}</span> : null
              }
            </FloatingLabel>
          </Col>
          <Col md={3}>
            <FloatingLabel className='mb-2 c1'
              controlId="busType"
              label="Vehicle Type*"
              name='busType'
              value={formik.values.busType} onBlur={formik.handleBlur}
              onChange={(e) => formik.handleChange(e)}

            >
              <Form.Select aria-label="busType" ref={busType} disabled={formik.values.travelType === 'none'}>
                <option value="none">Select Type</option>

                <option value="Volvo" disabled={formik.values.travelType !== 'Bus'}>Volvo</option>
                <option value="Sleeper" disabled={formik.values.travelType !== 'Bus'}>Sleeper</option>
                <option value="SemiSleeper" disabled={formik.values.travelType !== 'Bus'}>Semi-Sleeper</option>
                <option value="AC" disabled={formik.values.travelType !== 'Bus'}>AC</option>
                <option value="NonAC" disabled={formik.values.travelType !== 'Bus'}>Non-AC</option>
                <option value="executive" disabled={formik.values.travelType !== 'Bus'}>Executive/Seater</option>
                <option value="Volvo" disabled={formik.values.travelType !== 'Bus'}>Volvo</option>
                <option value="luxury" disabled={formik.values.travelType !== 'Bus'}>Luxury</option>
                <option value="Intercity" disabled={formik.values.travelType !== 'Bus'}>Intercity</option>
                <option value="Tourist" disabled={formik.values.travelType !== 'Bus'}>Tourist</option>

                <option value="Express" disabled={formik.values.travelType !== 'Rail'}>Express</option>
                <option value="SuperFast" disabled={formik.values.travelType !== 'Rail'}>SuperFast</option>
                <option value="Local" disabled={formik.values.travelType !== 'Rail'}>Local</option>

                <option value="Economy" disabled={formik.values.travelType !== 'Flight'}>Economy</option>
                <option value="PremiumEconomy" disabled={formik.values.travelType !== 'Flight'}>PremiumEconomy</option>
                <option value="Business" disabled={formik.values.travelType !== 'Flight'}>Business</option>
                <option value="FirstClass" disabled={formik.values.travelType !== 'Flight'}>FirstClass</option>
                <option value="domestic" disabled={formik.values.travelType !== 'Flight'}>Domestic</option>
                <option value="international" disabled={formik.values.travelType !== 'Flight'}>International</option>
                <option value="shorthaul" disabled={formik.values.travelType !== 'Flight'}>Short-Haul</option>
                <option value="longhaul" disabled={formik.values.travelType !== 'Flight'}>Long-Haul</option>
                <option value="lowcostcarrier" disabled={formik.values.travelType !== 'Flight'}>Low-Cost Carrier (LCC)</option>
                <option value="fullservicecarrier" disabled={formik.values.travelType !== 'Flight'}>Full-Service Carrier (FSC)</option>
                <option value="charter" disabled={formik.values.travelType !== 'Flight'}>Charter</option>
                <option value="redeye" disabled={formik.values.travelType !== 'Flight'}>Red-Eye</option>
                <option value="Direct" disabled={formik.values.travelType !== 'Flight'}>Direct</option>
                <option value="Connecting" disabled={formik.values.travelType !== 'Flight'}>Connecting</option>


              </Form.Select>
              {
                formik.touched.busType && formik.errors.busType ? <span className='span'>{formik.errors.busType}</span> : null
              }
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
            <Button variant="success" className='mx-2' type="submit" disabled={Object.keys(formik.errors).length > 0 || formik.values.leavingFrom === '' || formik.values.goingTo === ''}>SAVE</Button>
          </Col>
        </Row>
      </Form>
    </div >
  )
}

export default ThingsToDoTransport