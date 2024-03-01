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
//validation:
const validate = values => {
    const errors = {};

    if (!values.teamName) {
        errors.teamName = "*Required";
    }

    if (!values.year) {
        errors.year = "*Required";
    }

    return errors;
}


function AdminDashboard() {

    // Image base 64 value:
    const [ImageData, setImageData] = useState("");
    const [imgProgress, setImageProgress] = useState(0);
    const [imageValue, setImageValue] = useState(false);

    const dynamicImageNameFn = (val) => {
        console.log("vals", val)
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
            year: '',
            imageData: '',

        },
        validate,
        onSubmit: (values, { setSubmitting }) => {
            const newValues = { ...values, ImageData }
            console.log("newvalues", newValues)
            setSubmitting(false);
            ResetFields();

        }
    });

    function ResetFields() {
        teamNameReset.current.value = "";
        formik.resetForm();
        setImageProgress(""); // to reset image
        setImageValue(true); // to reset image

    }

    useEffect(() => {
    }, [formik.values, imgProgress])

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
                            <tbody>
                                <tr>
                                    <td className='pt-3 text-center'>1</td>
                                    <td className='pt-3 text-center'>Mark</td>
                                    <td className='pt-3 text-center'>Otto</td>
                                    <td className='pt-3 text-center'>@mdo</td>
                                    <td><Button variant="success">LOGIN</Button></td>
                                    <td><Button variant="danger">REMOVE</Button></td>
                                </tr>

                            </tbody>
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
                                        <option value="1">Team 1</option>
                                        <option value="2">Team 2</option>
                                        <option value="3">Team 3</option>
                                    </Form.Select>
                                    {
                                        formik.touched.teamName && formik.errors.teamName ? <span className='span'>{formik.errors.teamName}</span> : null
                                    }
                                </FloatingLabel>

                                <Form.Floating className="mb-2" >
                                    <Form.Control
                                        id="year"
                                        type="text"
                                        placeholder="year"
                                        name="year"
                                        value={formik.values.year} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.year && formik.errors.year ? <span className='span'>{formik.errors.year}</span> : null
                                    }
                                    <label htmlFor="year" className='text-muted'>Season Year*</label>
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