import React, { useRef, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useFormik } from 'formik';
import axios from 'axios';


const validate = values => {
    const errors = {};

    if (!values.hotelName) {
        errors.hotelName = "*Required";
    }
    else if (!/^[a-zA-Z ]*$/.test(values.hotelName)) {
        errors.hotelName = "enter a valid name";
    }


    if (!values.cityName) {
        errors.cityName = "*Required";
    }
    else if (!/^[a-zA-Z ]*$/.test(values.cityName)) {
        errors.cityName = "enter a valid name";
    }

    if (!values.noOfRooms) {
        errors.noOfRooms = "*Required";
    }
    else if (!/^\d{0,3}?$/.test(values.noOfRooms)) {
        errors.noOfRooms = "enter a valid number";
    }

    if (!values.roomsNo) {
        errors.roomsNo = "*Required";
    }
    else if (!/^\d{0,3}?$/.test(values.roomsNo)) {
        errors.roomsNo = "enter a valid number";
    }

    if (!values.daysStayed) {
        errors.daysStayed = "*Required";
    }
    else if (!/^\d{0,3}?$/.test(values.daysStayed)) {
        errors.daysStayed = "enter a valid number";
    }

    if (!values.noOfPeople) {
        errors.noOfPeople = "*Required";
    }
    if (!/^\d{0,3}?$/.test(values.noOfPeople)) {
        errors.noOfPeople = "enter a valid number";
    }

    return errors;
}
function ThingsToDoHotelAccomodation({ activationKey, onChildNextActivationKey, onPreviousActivationKey }) {
    //reset:
    const name1 = useRef("");
    const cityName = useRef("");
    const noOfRoom = useRef("");
    const roomNo = useRef("");
    const checkIn = useRef("");
    const checkOut = useRef("");
    const stayed = useRef("");
    const noOfPeople = useRef("");

    function handleReset() {
        name1.current.value = "";
        cityName.current.value = "";
        noOfRoom.current.value = "";
        roomNo.current.value = "";
        checkIn.current.value = "";
        checkOut.current.value = "";
        stayed.current.value = "";
        noOfPeople.current.value = "";
        formik.resetForm();
    }
    const formik = useFormik({
        initialValues: {
            hotelName: '',
            cityName: '',
            noOfRooms: '',
            roomsNo: '',
            daysStayed: '',
            noOfPeople: '',
            checkIn: '',
            checkOut: ''
        },
        validate,
        onSubmit: (values, { setSubmitting }) => {
            const dateOfBirth = new Date(values.checkIn);
            const formattedDOB = `${dateOfBirth.getDate()}/${dateOfBirth.getMonth() + 1}/${dateOfBirth.getFullYear()}`;
            const dateOfBirth1 = new Date(values.checkOut);
            const formattedDOB1 = `${dateOfBirth1.getDate()}/${dateOfBirth1.getMonth() + 1}/${dateOfBirth1.getFullYear()}`;
            const newValues = { ...values, checkIn: formattedDOB, checkOut: formattedDOB1 };

            axios.post('https://localhost:7097/register/HotelAccomodation', newValues)
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

    // alert(`Hello! ,${values.groundName} you have successfully signed up`);
    // onChildNextActivationKey(childNextKey)
    // console.log("newvalues", newValues)
    // setSubmitting(false);


    // const [checkOutValue, setCheckOutValue] = useState("");

    function checkIfCheckoutAfterCheckin(checkinDate, checkoutDate) {
        const checkin = new Date(checkinDate);
        const checkout = new Date(checkoutDate);
        if (checkout < checkin) {
            alert('Checkout date must be after checkin date.');
            checkOut.current.value = ''; // clear the checkout date
        }
        else {
            formik.setFieldValue("checkOut", checkoutDate);
        }
    }

    const [childNextKey, setChildNextKey] = useState("5");

    const handlePreviousButton = () => {
        onPreviousActivationKey("3")
    }
    return (
        <div>
            <Form onSubmit={formik.handleSubmit}>
                <Row>
                    <Col md={3} className='my-3'>
                        <Form.Floating className="mb-2">
                            <Form.Control
                                id="hotelName"
                                type="text"
                                placeholder="hotelname"
                                ref={name1}
                                name="hotelName"
                                value={formik.values.hotelName} onBlur={formik.handleBlur} onChange={formik.handleChange}
                            />
                            {
                                formik.touched.hotelName && formik.errors.hotelName ? <span className='span'>{formik.errors.hotelName}</span> : null
                            }

                            <label htmlFor="hotelName" className='text-muted'>Hotel Name*</label>
                        </Form.Floating>
                    </Col>
                    <Col md={3} className='my-3'>
                        <Form.Floating className="mb-2">
                            <Form.Control
                                id="cityName"
                                type="text"
                                placeholder="cityName"
                                ref={cityName}
                                name="cityName"
                                value={formik.values.cityName} onBlur={formik.handleBlur} onChange={formik.handleChange}
                            />
                            {
                                formik.touched.cityName && formik.errors.cityName ? <span className='span'>{formik.errors.cityName}</span> : null
                            }
                            <label htmlFor="cityName" className='text-muted'>City Name*</label>
                        </Form.Floating>
                    </Col>
                    <Col md={3} className='my-3'>
                        <Form.Floating className="mb-2">
                            <Form.Control
                                id="noofrooms"
                                type="text"
                                placeholder="noofrooms"
                                ref={noOfRoom}
                                name="noOfRooms"
                                value={formik.values.noOfRooms} onBlur={formik.handleBlur} onChange={formik.handleChange}
                            />
                            {
                                formik.touched.noOfRooms && formik.errors.noOfRooms ? <span className='span'>{formik.errors.noOfRooms}</span> : null
                            }
                            <label htmlFor="noOfRoom" className='text-muted'>No Of Rooms*</label>
                        </Form.Floating>
                    </Col>
                    <Col md={3} className='my-3'>
                        <Form.Floating className="mb-2">
                            <Form.Control
                                id="roomNo"
                                type="text"
                                placeholder="roomno"
                                ref={roomNo}
                                name="roomsNo"
                                value={formik.values.roomsNo} onBlur={formik.handleBlur} onChange={formik.handleChange}
                            />
                            {
                                formik.touched.roomsNo && formik.errors.roomsNo ? <span className='span'>{formik.errors.roomsNo}</span> : null
                            }
                            <label htmlFor="roomNo" className='text-muted'>Room Number*</label>
                        </Form.Floating>
                    </Col>
                    <Col md={3} className='my-3'>
                        <Form.Floating className="mb-2">
                            <Form.Control
                                id="checkin"
                                type="date"
                                min={new Date().toISOString().split('T')[0]}
                                placeholder='DD-MM-YYYY'
                                name="checkIn"
                                ref={checkIn}
                                value={formik.values.checkIn}
                                onChange={formik.handleChange}
                            />

                            <label htmlFor="checkin" className='text-muted'>Check In*</label>
                        </Form.Floating>
                    </Col>
                    <Col md={3} className='my-3'>
                        <Form.Floating className="mb-2">
                            <Form.Control
                                id="checkOut"
                                type="date"
                                min={new Date().toISOString().split('T')[0]}
                                placeholder='DD-MM-YYYY'
                                name="checkOut"
                                ref={checkOut}
                                value={formik.values.checkOut}
                                onChange={(e) => checkIfCheckoutAfterCheckin(checkIn.current.value, e.target.value)}
                            />

                            <label htmlFor="checkOut" className='text-muted'>Check Out*</label>
                        </Form.Floating>
                    </Col>
                    <Col md={3} className='my-3'>
                        <Form.Floating className="mb-2">
                            <Form.Control
                                id="daysstayed"
                                type="text"
                                placeholder="daysstayed"
                                name="daysStayed"
                                ref={stayed}
                                value={formik.values.daysStayed} onBlur={formik.handleBlur} onChange={formik.handleChange}
                            />
                            {
                                formik.touched.daysStayed && formik.errors.daysStayed ? <span className='span'>{formik.errors.daysStayed}</span> : null
                            }
                            <label htmlFor="daysStayed" className='text-muted'>Days Stayed*</label>
                        </Form.Floating>
                    </Col>
                    <Col md={3} className='my-3'>
                        <Form.Floating className="mb-2">
                            <Form.Control
                                id="noOfPeople"
                                type="text"
                                placeholder="noOfPeople"
                                ref={noOfPeople}
                                name='noOfPeople'
                                value={formik.values.noOfPeople} onBlur={formik.handleBlur} onChange={formik.handleChange}
                            />
                            {
                                formik.touched.noOfPeople && formik.errors.noOfPeople ? <span className='span'>{formik.errors.noOfPeople}</span> : null
                            }
                            <label htmlFor="noOfPeople" className='text-muted'>No Of people*</label>
                        </Form.Floating>
                    </Col>
                </Row>
                <Row>
                    <Col className='end btns'>
                        <Button variant="danger" className='mx-2' style={{ color: 'white' }} onClick={handlePreviousButton}>BACK</Button>
                        <Button variant="warning" className='mx-2' style={{ color: 'white' }} onClick={() => handleReset()}>CLEAR</Button>
                        <Button variant="success" className='mx-2' type="submit" disabled={Object.keys(formik.errors).length > 0 || formik.values.hotelName === '' || formik.values.cityName === ''}>SAVE AND NEXT</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default ThingsToDoHotelAccomodation