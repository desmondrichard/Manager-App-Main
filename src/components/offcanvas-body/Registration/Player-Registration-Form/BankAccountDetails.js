import './BankAccountDetails.css';
import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useFormik } from 'formik';
import { useRef } from 'react';

// validation:
const validate = values => {


    const errors = {};

    if (!values.beneficiaryname) {
        errors.beneficiaryname = "*Required";
    }
    else if (!/^[a-zA-Z]{3,20}$/.test(values.beneficiaryname)) {
        errors.beneficiaryname = "Beneficiary Name should be between 3 to 20 characters long or only letters allowed";
    }

    if (!values.bankname) {
        errors.bankname = "*Required";
    }
    else if (!/^[a-zA-Z]{2,15}$/.test(values.bankname)) {
        errors.bankname = "Bank Name should be between 2 to 15 characters long or only letters allowed";
    }

    if(!values.accountno){
        errors.accountno="*Required"
    }
    else if (!/^\d{9,18}$/.test(values.accountno)) {
        errors.accountno = "enter valid Account number";
    }


    if (!values.ifsc) {
        errors.ifsc = "*Required";
    }
    else if (!/^[A-Za-z]{4}\d{7}$/.test(values.ifsc)) {
        errors.ifsc = "enter valid Ifsc code";
    }


    if (!/^[0-9]{0,9}$/.test(values.micr)) {
        errors.micr = "enter valid micr code";
    }

    if (!/^[0-9a-zA-Z]{0,15}$/.test(values.gst)) {
        errors.gst = "enter valid GST number";
    }

    if (!/^[0-9]{0,10}$/.test(values.bankcontact)) {
        errors.bankcontact = "enter valid contact number";
    }

    if (!/^[a-zA-Z]{0,25}$/.test(values.bankcountry)) {
        errors.bankcountry = "Country Name should be between 3 to 25 characters long or only letters allowed";
    }

    return errors;
}

function BankAccountDetails({ activationKey, onActivationKeyChild, onPreviousActivationKey }) {

    // reset form start: 
    const beneficiaryname1 = useRef("");
    const bankname1 = useRef("");
    const currencytype1 = useRef("");
    const accountno1 = useRef("");
    const savings1 = useRef("");
    const current1 = useRef("");
    const ifsc1 = useRef("");
    const swiftbic1 = useRef("");
    const micr1 = useRef("");
    const iban1 = useRef("");
    const gst1 = useRef("");
    const bankcontact1 = useRef("");
    const bankaddress1 = useRef("");
    const bankcountry1 = useRef("");



    // for npm custom component dont use useRef instead use useState i.e for phone component
    function handleReset() {
        beneficiaryname1.current.value = "";
        bankname1.current.value = "";
        currencytype1.current.value = "";
        accountno1.current.value = "";
        savings1.current.checked = false;
        current1.current.checked = false;
        ifsc1.current.value = "";
        swiftbic1.current.value = "";
        micr1.current.value = "";
        iban1.current.value = "";
        gst1.current.checked = "";
        bankcontact1.current.value = "";
        bankaddress1.current.value = "";
        bankcountry1.current.value = "";

        // console.log("Ref",genderMale);
        formik.resetForm();
    }
    // reset form end: 

    const formik = useFormik({
        initialValues: {
            beneficiaryname: '',
            bankname: '',
            currencytype: '',
            accountno: '',
            ifsc: '',
            swiftbic: '',
            micr: '',
            iban: '',
            gst: '',
            bankcontact: '',
            bankcountry: ''

        },
        validate,
        onSubmit: values => {
            alert(`Hello! ,${values.fNamelNamemName}you have successfully signed up`);
            onActivationKeyChild(childNextKey);

        }
    });
    //next btn:
    const [childNextKey, setChildNextKey] = useState("5");

    const handlePreviousButton = () => {
        onPreviousActivationKey("3")
    }

    return (

        <Accordion.Item eventKey="4">
            <Accordion.Header><i className="bi bi-info-circle-fill me-1"></i><span style={{ fontWeight: '700' }}>BANK ACCOUNT DETAILS</span></Accordion.Header>
            <Accordion.Body>
                <Container >
                    <p>{activationKey}</p>
                    <Form style={{ paddingRight: '60px' }} onSubmit={formik.handleSubmit}>
                        <Row>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="beneficiaryname"
                                        type="text"
                                        placeholder="beneficiaryname"
                                        name="beneficiaryname"
                                        ref={beneficiaryname1}
                                        style={{ zIndex: -1 }}
                                        value={formik.values.beneficiaryname} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.beneficiaryname && formik.errors.beneficiaryname ? <span className='span'>{formik.errors.beneficiaryname}</span> : null
                                    }
                                    <label htmlFor="beneficiaryname" className='text-muted'>Beneficiary Name*</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="bankname"
                                        type="text"
                                        placeholder="bankname"
                                        name="bankname"
                                        ref={bankname1}
                                        value={formik.values.bankname} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.bankname && formik.errors.bankname ? <span className='span'>{formik.errors.bankname}</span> : null
                                    }

                                    <label htmlFor="bankname" className='text-muted'>Bank Name*</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4}>
                                <Form.Floating className="mb-2 col">
                                    <Form.Control
                                        id="currencytype"
                                        type="text"
                                        placeholder="currencytype"
                                        name="currencytype"
                                        ref={currencytype1}
                                        value={formik.values.currencytype} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.currencytype && formik.errors.currencytype ? <span className='span'>{formik.errors.currencytype}</span> : null
                                    }
                                    <label htmlFor="currencytype" className='text-muted'>Currency Type</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="accountno"
                                        type="text"
                                        placeholder="accountno"
                                        name="accountno"
                                        ref={accountno1}
                                        value={formik.values.accountno} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.accountno && formik.errors.accountno ? <span className='span'>{formik.errors.accountno}</span> : null
                                    }
                                    <label htmlFor="accountno" className='text-muted'>Account No*</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col colAccount'>
                                <label className='text-muted' htmlFor="battingpads">Account Type*</label>
                                {['radio'].map((type) => (

                                    <div key={`inline-${type}`} >
                                        <span style={{ whiteSpace: 'nowrap' }}>
                                            <Form.Check
                                                inline
                                                label="Savings"
                                                name="AccType"
                                                type={type}
                                                id={`inline-${type}-savings`}
                                                // defaultChecked={true}
                                                ref={savings1}
                                            />
                                            <Form.Check
                                                inline
                                                label="Current"
                                                name="AccType"
                                                type={type}
                                                id={`inline-${type}-current`}
                                                ref={current1}
                                            />
                                        </span>
                                    </div>
                                ))}
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="ifsc"
                                        type="text"
                                        placeholder="ifsc"
                                        name="ifsc"
                                        ref={ifsc1}
                                        value={formik.values.ifsc} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.ifsc && formik.errors.ifsc ? <span className='span'>{formik.errors.ifsc}</span> : null
                                    }
                                    <label htmlFor="ifsc" className='text-muted'>IFSC Code*</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="swiftbic"
                                        type="text"
                                        placeholder="swiftbic"
                                        name="swiftbic"
                                        ref={swiftbic1}
                                    />
                                    {/*  */}
                                    <label htmlFor="swiftbic" className='text-muted '>Swift/Bic No Type</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="micr"
                                        type="text"
                                        placeholder="micr"
                                        name="micr"
                                        ref={micr1}
                                        value={formik.values.micr} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.micr && formik.errors.micr ? <span className='span'>{formik.errors.micr}</span> : null
                                    }
                                    <label htmlFor="micr" className='text-muted'>MICR Code</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="iban"
                                        type="text"
                                        placeholder="iban"
                                        name="iban"
                                        ref={iban1}
                                    />

                                    <label htmlFor="iban" className='text-muted'>IBAN Code</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="gst"
                                        type="text"
                                        placeholder="gst"
                                        name="gst"
                                        ref={gst1}
                                        value={formik.values.gst} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.gst && formik.errors.gst ? <span className='span'>{formik.errors.gst}</span> : null
                                    }
                                    <label htmlFor="gst" className='text-muted'>GST Number</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="bankcontact"
                                        type="text"
                                        placeholder="bankcontact"
                                        name="bankcontact"
                                        ref={bankcontact1}
                                        value={formik.values.bankcontact} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.bankcontact && formik.errors.bankcontact ? <span className='span'>{formik.errors.bankcontact}</span> : null
                                    }
                                    {/*  */}
                                    <label htmlFor="bankcontact" className='text-muted '>Bank Contact No</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="bankaddress"
                                        type="text"
                                        placeholder="bankaddress"
                                        name="bankaddress"
                                        ref={bankaddress1}
                                    />
                                    <label htmlFor="bankaddress" className='text-muted'>Bank Address</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="bankcountry"
                                        type="text"
                                        placeholder="bankcountry"
                                        name="bankcountry"
                                        ref={bankcountry1}
                                        value={formik.values.bankcountry} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.bankcountry && formik.errors.bankcountry ? <span className='span'>{formik.errors.bankcountry}</span> : null
                                    }

                                    <label htmlFor="bankcountry" className='text-muted'>Bank Country</label>
                                </Form.Floating>
                            </Col>
                            <Col lg={12} className='my-4 col'>
                                <Button variant="primary" className='me-1 mb-2 mx-1 ' style={{ width: "130px" }} onClick={handlePreviousButton}>PREVIOUS</Button>
                                <Button variant="success" className='me-1 mb-2 mx-1 ' disabled={Object.keys(formik.errors).length > 0 || formik.values.name === ''} style={{ width: "130px" }} type='submit'>Save and Next</Button>
                                <Button variant="warning" className='text-white mb-2 mx-1 ' style={{ width: "130px" }} onClick={() => handleReset()}>CLEAR</Button>
                            </Col>
                        </Row>

                    </Form>
                </Container>
            </Accordion.Body>
        </Accordion.Item>

    )
}

export default BankAccountDetails