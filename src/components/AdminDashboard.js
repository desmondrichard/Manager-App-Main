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


    // Image base 64 value:
    const [imageData, setImageData] = useState("");
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
            const newValues = { ...values, imageData: imageData }
            console.log("newvalues", newValues)

            const formData = new FormData();
            // Append form data fields
            formData.append('teamName', values.teamName);
            formData.append('seasonYear', values.seasonYear);
            formData.append('imageData', imageData);

            //POST method:
            axios.post('https://localhost:7097/AddTeams', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
                .then(response => {
                    console.log("response",response);
                    // console.log("newvalues", newValues)
                    setSubmitting(false);
                    ResetFields();
                })
                .catch(error => {
                    console.error(error.message);
                    console.log("newvalues", newValues)
                    setSubmitting(false);
                    // ResetFields();
                });

            // setSubmitting(false);
            // ResetFields();

        }
    });

    function ResetFields() {
        teamNameReset.current.value = "";
        formik.resetForm();
        setImageProgress(""); // to reset image
        setImageValue(true); // to reset image

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
                                                    console.log("ShowAdminDataImage", showData.imageData)
                                                    console.log("ShowAdminData", showData)
                                                    return (
                                                        <tr key={i}>
                                                            <td style={{ whiteSpace: 'nowrap' }} className='pt-3 text-center'>{showData.teamName ? showData.teamName : 'N/A'}</td>
                                                            <td className='pt-3 text-center'>{showData.teamCode ? showData.teamCode : 'N/A'}</td>
                                                            <td className='pt-3 text-center'>{showData.seasonYear ? showData.seasonYear : 'N/A'}</td>
                                                            <td className='pt-3 text-center'>
                                                                {showData.imageData ? showData.imageData : "no image"}
                                                                {/* <img
                                                                    src={showData ? `data:image;base64/*,${showData.imageData}` :  //checks for data
                                                                        require('./../assets/dummy_profile_img.png')}   //default img 
                                                                    alt="img" style={{ width: '37px', height: '37px' }}
                                                                    onError={(e) => {
                                                                        e.target.src = require('./../assets/dummy_profile_img.png');
                                                                    }}
                                                                /> */}

                                                            </td>
                                                            <td><Button variant="success">LOGIN</Button></td>
                                                            <td><Button variant="danger">REMOVE</Button></td>
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

                                <FloatingLabel
                                    controlId="teamName"
                                    label="Team Name*"
                                    className="mb-3"
                                    name="teamName"
                                    value={formik.values.teamName} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                >
                                    <Form.Select aria-label="Default select example" ref={teamNameReset}>
                                        <option value="none">Select Teams</option>
                                        <option value="ballsytrichy">Ballsy Trichy</option>
                                        <option value="salemspartans">Salem Spartans</option>
                                        <option value="chennaicheetas">Punjab Panthers</option>

                                    </Form.Select>
                                    {
                                        formik.touched.teamName && formik.errors.teamName ? <span className='span'>{formik.errors.teamName}</span> : null
                                    }
                                </FloatingLabel>

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
                                    <Button type="submit" variant="outline-success">SUBMIT</Button>
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