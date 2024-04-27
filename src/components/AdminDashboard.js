import React, { useState, useEffect } from 'react';
import Header from './Header';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import './AdminDashboard.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useFormik } from 'formik';
import ImageUpload from './offcanvas-body/Registration/ImageUpload';
import { useRef } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import Image1 from 'react-bootstrap/Image';
import Image2 from 'react-bootstrap/Image';

//validation:
const validate = values => {
    const errors = {};

    if (!values.ClientName) {
        errors.ClientName = "*Required";
    }

    if (!values.UserName) {
        errors.UserName = "*Required";
    }

    if (!values.LoginId) {
        errors.LoginId = "*Required";
    }

    if (!values.EmailId) {
        errors.EmailId = "*Required";
    }
    else if (!/^([a-zA-Z][\w+-]+(?:\.\w+)?)@([\w-]+(?:\.[a-zA-Z]{2,10})+)$/.test(values.EmailId)) {
        errors.EmailId = "*Invalid email address";
    }

    if (!values.Password) {
        errors.Password = "*Required";
    } else if (values.Password.length < 8) {
        errors.Password = "Password must be at least 8 characters long.";
    }

    return errors;
}


function AdminDashboard() {

    //GET method:
    const [showData, setShowData] = useState(null);
    useEffect(() => {
        fetch('http://192.168.1.134/MA-APP/getTeams')
            .then((data) => data.json())
            .then((data) => {
                console.log("data", data);
                // console.log("Success in getting players data", data);
                setShowData(data);  // showData=data;
            })
    }, [])

    // function ResetFields() {
    //     ClientNameReset.current.value = "";
    //     formik.resetForm();
    //     setImageProgress(""); // to reset image
    //     setImageValue(true); // to reset image
    // }

    const [clientLogo, setClientLogo] = useState("");
    const [imgProgress, setImageProgress] = useState(0);
    const [imageValue, setImageValue] = useState(false);

    const dynamicImageNameFn = (val) => {
        console.log("imagevalues: ", val)
        setClientLogo(val)
    }

    function handleImageUploadProgress(value) {
        console.log("childtoparentImage", value);
        setImageProgress(value);
        setImageValue(false); //to avoid image view issue after clicking reset btn  i.e after clicking reset button we setted imageValue as true (clear image) ,so now to reupload we set it back to false

    }

    // const ClientNameReset = useRef("")

    const formik = useFormik({
        initialValues: {
            ClientName: '',
            UserName: '',
            LoginId: '',
            EmailId: '',
            ContactNumber: '',
            Password: '',
            clientLogo: ''

        },
        validate,
        onSubmit: (values, { setSubmitting }) => {
            const newValues = { ...values, clientLogo: clientLogo }
            console.log("newvaluesClient", newValues)
            formik.resetForm();//to reset text fields
            setImageProgress(""); // to reset image
            setImageValue(true); // to reset image


            // POST method:
            const formData = new FormData();
            formData.append('ClientName', values.ClientName);
            formData.append('UserName', values.UserName);
            formData.append('clientLogo', clientLogo);
            formData.append('LoginId', values.LoginId);
            formData.append('EmailId', values.EmailId);
            formData.append('ContactNumber', values.ContactNumber);
            formData.append('Password', values.Password);

            //Looping:
            formData.forEach((value, key) => {
                console.log("formData key:", key);
                console.log("formData value:", value);
            });

            axios.post('http://192.168.1.134/MA-APP/AddTeams', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then((response) => {
                    console.log("response result", response.data);
                    setSubmitting(false);

                    //GET Request recalling:
                    axios.get(`http://192.168.1.134/MA-APP/getTeams`).then((response) => {
                        console.log("GET Success", response.data)
                        // Update the state with the new data
                        setShowData(response.data)
                    })
                        .catch((error) => {
                            console.log("Error Getting User", error)
                        })

                })
                .catch((error) => {
                    console.error(error);
                    setSubmitting(false);
                });

        }
    });

    // setSubmitting(false);
    // ResetFields();




    function deleteTeam(id) {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You won\'t be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://localhost:7097/deleteTeam/${id}`).then((response) => {
                    if (response.data.TeamCode === id) {   //check how to use alldataThingsId here 
                        console.log("Deletion Success", response.data)
                    }
                    console.log("res", response.data)

                    //Call the GET method here:
                    axios.get(`https://localhost:7097/getTeams`).then((response) => {
                        console.log("GET Success", response.data)
                        // Update the state with the new data
                        setShowData(response.data)
                    })
                        .catch((error) => {
                            console.log("Error Getting User", error)
                        })
                    //GET ends here

                    Swal.fire(
                        'Deleted!',
                        'The user has been deleted.',
                        'success'
                    )
                }).catch((error) => {
                    console.log("Error Deleting User", error)
                    Swal.fire(
                        'Error!',
                        'An error occurred while deleting the user.',
                        'error'
                    )
                })
            }
        })
    }

    const navigate = useNavigate();

    function HandleLoginTeam() {
        navigate("/teamslogin")
    }

    //since in ImageUpload component setted clearImageInPost as true,we just setted it as true here and sending it as props:
    const [clearImageInPost, setClearImageInPost] = useState(true)

    // password show/hide:
    const [visible, setVisible] = useState(true);

    const [Password, setPwd] = useState('');

    useEffect(() => {
    }, [formik.values])

    return (
        <div>
            <Header />
            <div className='text-center'>
                <div className='playersList'>ADMIN DASHBOARD</div>
            </div>
            <br />
            <Container>
                <Row>
                    <Col xs={12} className='mt-2'>
                        <h5 className='text-center' style={{ color: '#595c5f' }}>ADD TEAMS</h5>
                        <Card style={{ border: '3px outset #2885D7' }}>
                            <Form className='p-3' onSubmit={formik.handleSubmit}>
                                <Row>
                                    <Col md={4}>
                                        <Form.Floating className="mb-2" >
                                            <Form.Control
                                                id="ClientName"
                                                type="text"
                                                placeholder="enter client name"
                                                name="ClientName"
                                                value={formik.values.ClientName} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                            />
                                            {
                                                formik.touched.ClientName && formik.errors.ClientName ? <span className='span'>{formik.errors.ClientName}</span> : null
                                            }
                                            <label htmlFor="ClientName" className='text-muted'>Client Name*</label>
                                        </Form.Floating>
                                    </Col>

                                    <Col md={4}>
                                        <Form.Floating className="mb-2" >
                                            <Form.Control
                                                id="UserName"
                                                type="text"
                                                placeholder="enter user name"
                                                name="UserName"
                                                value={formik.values.UserName} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                            />
                                            {
                                                formik.touched.UserName && formik.errors.UserName ? <span className='span'>{formik.errors.UserName}</span> : null
                                            }
                                            <label htmlFor="UserName" className='text-muted'>User Name*</label>
                                        </Form.Floating>
                                    </Col>

                                    <Col md={4}>
                                        <Form.Floating className="mb-2" >
                                            <Form.Control
                                                id="LoginId"
                                                type="text"
                                                placeholder="enter Login ID"
                                                name="LoginId"
                                                value={formik.values.LoginId} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                            />
                                            {
                                                formik.touched.LoginId && formik.errors.LoginId ? <span className='span'>{formik.errors.LoginId}</span> : null
                                            }
                                            <label htmlFor="LoginId" className='text-muted'>Login ID*</label>
                                        </Form.Floating>
                                    </Col>


                                    <Col md={4}>
                                        <Form.Floating className="mb-2" >
                                            <Form.Control
                                                id="EmailId"
                                                type="text"
                                                placeholder="enter Email"
                                                name="EmailId"
                                                value={formik.values.EmailId} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                            />
                                            {
                                                formik.touched.EmailId && formik.errors.EmailId ? <span className='span'>{formik.errors.EmailId}</span> : null
                                            }
                                            <label htmlFor="EmailId" className='text-muted'>Email ID*</label>
                                        </Form.Floating>
                                    </Col>

                                    <Col md={4}>
                                        <Form.Floating className="mb-2" >
                                            <Form.Control
                                                id="ContactNumber"
                                                type="text"
                                                placeholder="enter Contact Number"
                                                name="ContactNumber"
                                                value={formik.values.ContactNumber} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                            />
                                            {
                                                formik.touched.ContactNumber && formik.errors.ContactNumber ? <span className='span'>{formik.errors.ContactNumber}</span> : null
                                            }
                                            <label htmlFor="ContactNumber" className='text-muted'>Contact Number</label>
                                        </Form.Floating>
                                    </Col>

                                    <Col md={4}>
                                        <Form.Floating className="mb-2" >
                                            <Form.Control
                                                id="Password"
                                                type="password"
                                                placeholder="enter password"
                                                name="Password"
                                                value={formik.values.Password} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                            />
                                            {
                                                formik.touched.Password && formik.errors.Password ? <span className='span'>{formik.errors.Password}</span> : null
                                            }
                                            <label htmlFor="Password" className='text-muted'>Password</label>
                                        </Form.Floating>
                                    </Col>

                                </Row>
                                <div className='text-center mb-3'>
                                    <ImageUpload isClearImage={imageValue} onActivateProgressBar={handleImageUploadProgress} dynamicImageName={dynamicImageNameFn} clearImageInPost={clearImageInPost} />
                                </div>

                                <div className="d-grid gap-2">
                                    <Button type="submit" variant="outline-success" >SUBMIT</Button>
                                </div>
                            </Form>
                        </Card>
                    </Col>


                    <Col xs={12}>
                        <div style={{ fontSize: '20px', fontWeight: 'bold', textAlign: 'center', whitespace: 'nowrap',color:'rgb(91,94,97)' }} className='my-2'>TEAMS OVERVIEW</div>
                        <Table responsive striped>
                            <thead>
                                <tr style={{ backgroundColor: 'red' }} className='admintr text-center'>
                                    <th style={{ whiteSpace: 'nowrap', color: 'white' }}>CLIENT CODE</th>
                                    <th style={{ whiteSpace: 'nowrap', color: 'white' }}>TEAM LOGO</th>
                                    <th style={{ whiteSpace: 'nowrap', color: 'white' }}>CLIENT NAME</th>
                                    <th style={{ whiteSpace: 'nowrap', color: 'white' }} >CREATED DATE</th>
                                    <th style={{ whiteSpace: 'nowrap', color: 'white' }}>USER NAME</th>
                                    <th style={{ whiteSpace: 'nowrap', color: 'white' }}>LOGIN ID</th>
                                    <th style={{ whiteSpace: 'nowrap', color: 'white' }}>PASSWORD</th>
                                    <th style={{ whiteSpace: 'nowrap', color: 'white' }}>EMAIL ID</th>
                                    <th style={{ whiteSpace: 'nowrap', color: 'white' }}>CONTACT No</th>
                                    <th style={{ color: 'white' }}>STATUS</th>
                                </tr>
                            </thead>
                            {/* {console.log("imageFile1:", imageData)} */}
                            {
                                (showData) ?
                                    (
                                        <tbody>
                                            {
                                                showData.map((showData, i) => {
                                                    // console.log("ShowAdminDataImage", showData.imageData)
                                                    console.log("ShowData", showData)
                                                    return (
                                                        <tr key={i}>
                                                            <td className='pt-3 text-center'>{showData.clientCode ? showData.clientCode : 'N/A'}</td>
                                                            <td className='pt-3 text-center'>
                                                                {/* {showData.imageData ? <img src={`data:image/jpeg;base64,${showData.imageData}`} alt="img" style={{ width: '37px', height: '37px' }} /> : ""} */}
                                                                {showData.clientLogo ? (
                                                                    <img src={`data:image/jpeg;base64,${showData.clientLogo}`} alt="img" style={{ width: '37px', height: '37px', marginTop: '-8px' }} />
                                                                ) : (
                                                                    <img src={require('./../assets/noimage.jpg')} alt="default" style={{ width: '37px', height: '37px', marginTop: '-8px' }} />
                                                                )}
                                                            </td>
                                                            <td style={{ whiteSpace: 'nowrap' }} className='pt-3 text-center'>{showData.clientName ? showData.clientName : 'N/A'}</td>
                                                            <td style={{ whiteSpace: 'nowrap' }} className='pt-3 text-center'>{showData.createdDate ? showData.createdDate : 'N/A'}</td>
                                                            <td style={{ whiteSpace: 'nowrap' }} className='pt-3 text-center'>{showData.userName ? showData.userName : 'N/A'}</td>
                                                            <td style={{ whiteSpace: 'nowrap' }} className='pt-3 text-center'>{showData.loginId ? showData.loginId : 'N/A'}</td>
                                                            <td className='pt-3 text-center'>{showData.password ? showData.password : 'N/A'}</td>
                                                            <td className='pt-3 text-center'>{showData.emailId ? showData.emailId : 'N/A'}</td>
                                                            <td className='pt-3 text-center'>{showData.contactNumber ? showData.contactNumber : 'N/A'}</td>
                                                            <td style={{ whiteSpace: 'nowrap' }} className={`pt-3 text-center ${showData.recordStatus === "MSC001" ? "text-success" : "text-danger"}`}>
                                                                <label className="switch">
                                                                    <input type="checkbox" checked={showData.recordStatus === "MSC001" ? true : false} />
                                                                    <span className="slider round"></span>
                                                                </label>

                                                                {showData.recordStatus === "MSC001" ? "ACTIVE" : "INACTIVE"}
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }

                                        </tbody>
                                    ) : ('')
                            }
                        </Table>
                    </Col>


                </Row>
            </Container>
        </div>
    )
}

export default AdminDashboard