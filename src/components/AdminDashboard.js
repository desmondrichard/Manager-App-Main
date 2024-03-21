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

//validation:
const validate = values => {
    const errors = {};

    if (!values.teamName) {
        errors.teamName = "*Required";
    }

    if (!values.seasonYear) {
        errors.seasonYear = "*Required";
    }

    return errors;
}


function AdminDashboard() {

    //GET method:
    const [showData, setShowData] = useState(null);
    useEffect(() => {
        fetch('https://localhost:7097/getTeams')
            .then((data) => data.json())
            .then((data) => {
                console.log("data", data);
                // console.log("Success in getting players data", data);
                setShowData(data);  // showData=data;
            })
    }, [])



    const [ImageData, setImageData] = useState("");
    const [imgProgress, setImageProgress] = useState(0);
    const [imageValue, setImageValue] = useState(false);

    const dynamicImageNameFn = (val) => {
        console.log("imagevalues: ", val)
        setImageData(val)
    }

    function handleImageUploadProgress(value) {
        console.log("childtoparentImage", value);
        setImageProgress(value);
        setImageValue(false); //to avoid image view issue after clicking reset btn  i.e after clicking reset button we setted imageValue as true (clear image) ,so now to reupload we set it back to false

    }

    const teamNameReset = useRef("")

    const formik = useFormik({
        initialValues: {
            teamName: '',
            seasonYear: '',


        },
        validate,
        onSubmit: (values, { setSubmitting }) => {
            const newValues = { ...values, imageData: ImageData }
            console.log("newvalues", newValues)
            // console.log("imageData", ImageData)

            // POST method:
            const formData = new FormData();
            formData.append('teamName', values.teamName);
            formData.append('seasonYear', values.seasonYear);
            formData.append('imageData', ImageData);

            //Looping:
            formData.forEach((value, key) => {
                console.log("formData key:", key);
                console.log("formData value:", value);
            });

            axios.post('https://localhost:7097/AddTeams', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then((response) => {
                    console.log("response result", response.data);
                    setSubmitting(false);
                    ResetFields();
                    //GET Request recalling:
                    fetch('https://localhost:7097/getTeams')
                        .then((data) => data.json())
                        .then((data) => {
                            console.log("data", data);
                            setShowData(data);  // showData=data;
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

    //DELETE Request:  https://localhost:7097/deleteTeam/TNPL03


    function ResetFields() {
        teamNameReset.current.value = "";
        formik.resetForm();
        setImageProgress(""); // to reset image
        setImageValue(true); // to reset image

    }

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
                    <Col lg={8}>
                        <Table responsive striped className='caption-top'>
                            <caption style={{ fontSize: '20px', fontWeight: 'bold', textAlign: 'center' }}>TEAMS OVERVIEW</caption>
                            <thead>
                                <tr style={{ backgroundColor: 'red' }} className='admintr'>
                                    <th style={{ whiteSpace: 'nowrap', color: 'white' }}>TEAM NAME</th>
                                    <th style={{ whiteSpace: 'nowrap', color: 'white' }}>TEAM CODE</th>
                                    <th style={{ whiteSpace: 'nowrap', color: 'white' }}>SEASON YEAR</th>
                                    <th style={{ whiteSpace: 'nowrap', color: 'white' }}>TEAM LOGO</th>
                                    <th style={{ color: 'white' }}>LOGIN</th>
                                    <th style={{ color: 'white' }}>DELETE</th>
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
                                                            <td style={{ whiteSpace: 'nowrap' }} className='pt-3 text-center'>{showData.teamName ? showData.teamName : 'N/A'}</td>
                                                            <td className='pt-3 text-center'>{showData.teamCode ? showData.teamCode : 'N/A'}</td>
                                                            <td className='pt-3 text-center'>{showData.seasonYear ? showData.seasonYear : 'N/A'}</td>
                                                            <td className='pt-3 text-center'>
                                                                {/* {showData.imageData ? <img src={`data:image/jpeg;base64,${showData.imageData}`} alt="img" style={{ width: '37px', height: '37px' }} /> : ""} */}
                                                                {showData.imageData ? (
                                                                    <img src={`data:image/jpeg;base64,${showData.imageData}`} alt="img" style={{ width: '37px', height: '37px', marginTop: '-8px' }} />
                                                                ) : (
                                                                    <img src={require('./../assets/noimage.jpg')} alt="default" style={{ width: '37px', height: '37px', marginTop: '-8px' }} />
                                                                )}
                                                            </td>
                                                            <td><Button variant="success" onClick={HandleLoginTeam}>LOGIN</Button></td>
                                                            <td><Button variant="danger" onClick={() => deleteTeam(showData.teamCode)}>REMOVE</Button></td>

                                                        </tr>
                                                    )
                                                })
                                            }

                                        </tbody>
                                    ) : ('')
                            }
                        </Table>
                    </Col>

                    <Col lg={4} className='mt-2'>
                        <h5 className='text-center' style={{ color: '#595c5f' }}>ADD TEAMS</h5>
                        <Card style={{ border: '3px outset #2885D7' }}>
                            <Form className='p-3' onSubmit={formik.handleSubmit}>

                                <Form.Floating className="mb-2" >
                                    <Form.Control
                                        id="teamName"
                                        type="text"
                                        placeholder="enter team name"
                                        name="teamName"
                                        value={formik.values.teamName} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.teamName && formik.errors.teamName ? <span className='span'>{formik.errors.teamName}</span> : null
                                    }
                                    <label htmlFor="teamName" className='text-muted'>Team Name*</label>
                                </Form.Floating>

                                <Form.Floating className="mb-2" >
                                    <Form.Control
                                        id="seasonYear"
                                        type="text"
                                        placeholder="year"
                                        name="seasonYear"
                                        value={formik.values.seasonYear} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.seasonYear && formik.errors.seasonYear ? <span className='span'>{formik.errors.seasonYear}</span> : null
                                    }
                                    <label htmlFor="seasonYear" className='text-muted'>Season Year*</label>
                                </Form.Floating>
                                <div className='text-center mb-3'>
                                    <ImageUpload isClearImage={imageValue} onActivateProgressBar={handleImageUploadProgress} dynamicImageName={dynamicImageNameFn} />
                                </div>

                                <div className="d-grid gap-2">
                                    <Button type="submit" variant="outline-success" >SUBMIT</Button>
                                </div>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AdminDashboard