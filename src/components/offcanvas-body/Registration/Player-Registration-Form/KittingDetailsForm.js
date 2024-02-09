import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import './KittingDetailsForm.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useFormik } from 'formik';
import DynamicFields from './DynamicFields';
import { useRef } from 'react';
const validate = values => {
    const errors = {};

    if (!values.JerseyName) {
        errors.JerseyName = "*Required";
    }
    else if (!/^[a-zA-Z]{2,10}$/.test(values.JerseyName)) {
        errors.JerseyName = "Jersey Name should be between 2 to 10 characters long or only letters allowed";
    }

    if (!values.JerseyNo) {
        errors.JerseyNo = "*Required";
    } else if (!/^\d{1,3}([.,]{0,2})?$/.test(values.JerseyNo)) {
        errors.JerseyNo = "enter a valid jersey number";
    }


    if (!values.jerseySize) {
        errors.jerseySize = "*Required";
    }

    if (!values.trouserSize) {
        errors.trouserSize = "*Required";
    }

    if (!values.trouserLength) {
        errors.trouserLength = "*Required";
    } else if (!/^\d{1,3}([.,]{0,2})?$/.test(values.trouserLength)) {
        errors.trouserLength = "enter a valid length";
    }


    if (!values.shortsSize) {
        errors.shortsSize = "*Required";
    }

    if (!values.trackSuit) {
        errors.trackSuit = "*Required";
    }

    if (!values.helmet) {
        errors.helmet = "*Required";
    }

    if (!values.travelPolo) {
        errors.travelPolo = "*Required";
    }


    if (!/^\d{0,3}([.,]{0,2})?$/.test(values.familyJerseyNo)) {
        errors.familyJerseyNo = "enter a valid jersey number";
    }
    return errors
}


function KittingDetailsForm({ activationKey, onActivationKeyChild, onPreviousActivationKey }) {
    //next btn:
    const [childNextKey, setChildNextKey] = useState("3")
    // reset form start: 
    const JerseyNameReset = useRef("");
    const JerseyNoReset = useRef("");
    const jerseysizeReset = useRef("");
    const trowsersizeReset = useRef("");
    const trowserlengthReset = useRef("");
    const shortssizeReset = useRef("");
    const tracksuitReset = useRef("");
    const circkethelmetReset = useRef("");
    const travelpoloReset = useRef("");
    const familyjerseynoReset = useRef("");
    const bowlerA = useRef(false);
    const bowlerB = useRef(false);
    const qty = useRef("");


    // for npm custom component dont use useRef instead use useState i.e for phone component
    function handleReset() {
        JerseyNameReset.current.value = "";
        JerseyNoReset.current.value = "";
        jerseysizeReset.current.value = "none";
        trowsersizeReset.current.value = "none";
        trowserlengthReset.current.value = "";
        shortssizeReset.current.value = "none";
        tracksuitReset.current.value = "none";
        circkethelmetReset.current.value = "none";
        travelpoloReset.current.value = "none";
        familyjerseynoReset.current.value = "";
        bowlerA.current.checked = false;
        bowlerB.current.checked = false;
        qty.current.value = "";
        formik.resetForm();
    }
    // reset form end: 
    const formik = useFormik({
        initialValues: {
            JerseyName: '',
            JerseyNo: '',
            jerseySize: '',
            trouserSize: '',
            trouserLength: '',
            shortsSize: '',
            trackSuit: '',
            helmet: '',
            travelPolo: '',
            familyJerseyNo: ''

        },
        validate,
        onSubmit: values => {
            alert('clicked next');
            onActivationKeyChild(childNextKey);
        }
    });

    const handlePreviousButton = () => {
        onPreviousActivationKey("1")
    }
    return (

        <Accordion.Item eventKey="2">
            <Accordion.Header><i className="bi bi-info-circle-fill me-1"></i><span style={{ fontWeight: '700' }}>KITTING DETAILS</span></Accordion.Header>
            <Accordion.Body>
                <Container >
                    <Form style={{ paddingRight: '60px' }} onSubmit={formik.handleSubmit}>
                        <Row>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="JerseyName"
                                        type="text"
                                        placeholder="JerseyName"
                                        name="JerseyName"
                                        ref={JerseyNameReset}
                                        value={formik.values.JerseyName} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.JerseyName && formik.errors.JerseyName ? <span className='span'>{formik.errors.JerseyName}</span> : null
                                    }
                                    <label htmlFor="JerseyName" className='text-muted'>Name on Jersey*</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="JerseyNo"
                                        type="text"
                                        // min="0" max="999"
                                        placeholder="JerseyNo"
                                        name="JerseyNo"
                                        ref={JerseyNoReset}
                                        value={formik.values.JerseyNo} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.JerseyNo && formik.errors.JerseyNo ? <span className='span'>{formik.errors.JerseyNo}</span> : null
                                    }
                                    <label htmlFor="JerseyNo" className='text-muted'>Jersey No*</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <FloatingLabel className='mb-2'
                                    controlId="jerseySize"
                                    label="Jersey Size*"
                                    name="jerseySize"
                                    value={formik.values.jerseySize} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                >

                                    <Form.Select aria-label="jerseySize" ref={jerseysizeReset}>
                                        <option value="none">Select Type</option>
                                        <option value="S">S</option>
                                        <option value="M">M</option>
                                        <option value="L">L</option>
                                        <option value="XL">XL</option>
                                        <option value="XXL">XXL</option>
                                        <option value="3XL">3XL</option>
                                        <option value="4XL">4XL</option>
                                    </Form.Select>
                                    {
                                        formik.touched.jerseySize && formik.errors.jerseySize ? <span className='span'>{formik.errors.jerseySize}</span> : null
                                    }
                                </FloatingLabel>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <FloatingLabel className='mb-2'
                                    controlId="trouserSize"
                                    label="Trowser Size*"
                                    name="trouserSize"
                                    min="0" max="999"
                                    value={formik.values.trouserSize} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                >
                                    <Form.Select aria-label="trouserSize" ref={trowsersizeReset}>
                                        <option value="none">Select Type</option>
                                        <option value="S">S</option>
                                        <option value="M">M</option>
                                        <option value="L">L</option>
                                        <option value="XL">XL</option>
                                        <option value="XXL">XXL</option>
                                        <option value="3XL">3XL</option>
                                        <option value="4XL">4XL</option>
                                    </Form.Select>
                                    {
                                        formik.touched.trouserSize && formik.errors.trouserSize ? <span className='span'>{formik.errors.trouserSize}</span> : null
                                    }
                                </FloatingLabel>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="trouserLength"
                                        type="text"
                                        placeholder="Trowser Length"
                                        name="trouserLength"
                                        // min="0" max="999"
                                        ref={trowserlengthReset}
                                        value={formik.values.trouserLength} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.trouserLength && formik.errors.trouserLength ? <span className='span'>{formik.errors.trouserLength}</span> : null
                                    }
                                    <label htmlFor="trouserLength" className='text-muted'>Trowser Length</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <FloatingLabel className='mb-2'
                                    controlId="shortsSize"
                                    label="Shorts Size*"
                                    name="shortsSize"
                                    value={formik.values.shortsSize} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                >
                                    <Form.Select aria-label="shortsSize" ref={shortssizeReset}>
                                        <option value="none">Select Type</option>
                                        <option value="S">S</option>
                                        <option value="M">M</option>
                                        <option value="L">L</option>
                                        <option value="XL">XL</option>
                                        <option value="XXL">XXL</option>
                                        <option value="3XL">3XL</option>
                                        <option value="4XL">4XL</option>
                                    </Form.Select>
                                    {
                                        formik.touched.shortsSize && formik.errors.shortsSize ? <span className='span'>{formik.errors.shortsSize}</span> : null
                                    }
                                </FloatingLabel>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <FloatingLabel className='mb-2'
                                    controlId="trackSuit"
                                    label="Track suit*"
                                    name="trackSuit"
                                    value={formik.values.trackSuit} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                >
                                    <Form.Select aria-label="trackSuit" ref={tracksuitReset}>
                                        <option value="none">Select Type</option>
                                        <option value="S">S</option>
                                        <option value="M">M</option>
                                        <option value="L">L</option>
                                        <option value="XL">XL</option>
                                        <option value="XXL">XXL</option>
                                        <option value="3XL">3XL</option>
                                        <option value="4XL">4XL</option>
                                    </Form.Select>
                                    {
                                        formik.touched.trackSuit && formik.errors.trackSuit ? <span className='span'>{formik.errors.trackSuit}</span> : null
                                    }
                                </FloatingLabel>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <FloatingLabel className='mb-2'
                                    controlId="helmet"
                                    label="Cricket Helmet*"
                                    name="helmet"
                                    value={formik.values.helmet} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                >
                                    <Form.Select aria-label="helmet" ref={circkethelmetReset}>
                                        <option value="none">Select Type</option>
                                        <option value="Junior">Junior (52-54 cm)</option>
                                        <option value="Youth">Youth (54-57 cm)</option>
                                        <option value="small">small (55-58 cm)</option>
                                        <option value="Medium">Medium (58-61 cm)</option>
                                        <option value="Large">Large (60-63 cm)</option>
                                    </Form.Select>
                                    {
                                        formik.touched.helmet && formik.errors.helmet ? <span className='span'>{formik.errors.helmet}</span> : null
                                    }
                                </FloatingLabel>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <FloatingLabel className='mb-2'
                                    controlId="travelPolo"
                                    label="Travel Polo"
                                    name="travelPolo"
                                    value={formik.values.travelPolo} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                >
                                    <Form.Select aria-label="travelPolo" ref={travelpoloReset}>
                                        <option value="none">Select Type</option>
                                        <option value="S">S</option>
                                        <option value="M">M</option>
                                        <option value="L">L</option>
                                        <option value="XL">XL</option>
                                        <option value="XXL">XXL</option>
                                        <option value="3XL">3XL</option>
                                        <option value="4XL">4XL</option>
                                    </Form.Select>
                                    {
                                        formik.touched.travelPolo && formik.errors.travelPolo ? <span className='span'>{formik.errors.travelPolo}</span> : null
                                    }
                                </FloatingLabel>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="familyJerseyNo"
                                        type="text"
                                        placeholder="familyJerseyNo"
                                        name="familyJerseyNo"
                                        value={formik.values.familyJerseyNo} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                        ref={familyjerseynoReset}
                                    />
                                    {
                                        formik.touched.familyJerseyNo && formik.errors.familyJerseyNo ? <span className='span'>{formik.errors.familyJerseyNo}</span> : null
                                    }
                                    <label htmlFor="familyJerseyNo" className='text-muted'>Family Jersey No</label>
                                </Form.Floating>
                            </Col>
                        </Row>

                        <Row>
                            <Col className='col radioFields'>
                                <label className='text-muted' htmlFor="battingpads" style={{ whiteSpace: 'nowrap' }}>BATTING PADS</label>
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} style={{ whiteSpace: 'nowrap' }}>
                                        <Form.Check style={{
                                            padding: '20px'
                                        }}
                                            inline
                                            label="Yes"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-yes`}
                                            ref={bowlerA}
                                        />
                                        <Form.Check
                                            inline
                                            label="No"
                                            name="group1"
                                            type={type}
                                            id={`inline-${type}-no`}
                                            defaultChecked={true}
                                            ref={bowlerB}
                                        />
                                    </div>
                                ))}
                            </Col>
                            <Col className='col QtyMainMargin'>
                                <div>
                                    <Form.Label htmlFor="qty" style={{ color: '#7C7F81' }}>QUANTITY</Form.Label>
                                    <Form.Control size="md"
                                        type="number"
                                        id="qty"
                                        ref={qty}
                                        style={{ width: '80px' }}
                                        min="0"
                                        max="2"
                                        onChange={(e) => {
                                            if (e.target.value > 0) {
                                                bowlerA.current.checked = true;
                                            } else {
                                                bowlerB.current.checked = true;
                                            }
                                        }}
                                    />
                                </div>
                            </Col>
                            {/* Dynamic Form: */}
                            <Col xs={12} lg={{ span: 12 }} className='col'>
                                <DynamicFields />
                            </Col>
                        </Row>
                        {/* <Row> */}

                        <Col lg={12} className='my-4 col'>
                            <Button variant="primary" className='me-1 mb-2 mx-1 ' style={{ width: "130px" }} onClick={handlePreviousButton}>PREVIOUS</Button>
                            <Button variant="success" disabled={Object.keys(formik.errors).length > 0 || formik.values.name === ''} type="submit" value="submit" className='me-1 mb-2 mx-1 ' style={{ width: "130px" }}>Save and Next</Button>
                            <Button variant="warning" type="button" className='text-white mb-2 ' style={{ width: "130px" }} onClick={() => handleReset()}>CLEAR</Button>
                        </Col>
                    </Form>
                </Container>
            </Accordion.Body>
        </Accordion.Item>

    )
}

export default KittingDetailsForm