import './BankAccountDetails.css';
import React, { useEffect, useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useFormik } from 'formik';
import { useRef } from 'react';
import ProgressBarWithLabel from '../ProgressBarWithLabel';

// validation:
const validate = values => {


    const errors = {};

    if (!values.beneficiaryName) {
        errors.beneficiaryName = "*Required";
    }
    else if (!/^[a-zA-Z]{3,20}$/.test(values.beneficiaryName)) {
        errors.beneficiaryName = "Beneficiary Name should be between 3 to 20 characters long or only letters allowed";
    }

    if (!values.bankName) {
        errors.bankName = "*Required";
    }
    else if (!/^[a-zA-Z]{2,15}$/.test(values.bankName)) {
        errors.bankName = "Bank Name should be between 2 to 15 characters long or only letters allowed";
    }

    if (!values.bankAccountNo) {
        errors.bankAccountNo = "*Required"
    }
    else if (!/^\d{9,18}$/.test(values.bankAccountNo)) {
        errors.bankAccountNo = "enter valid Account number";
    }


    if (!values.ifscCode) {
        errors.ifscCode = "*Required";
    }
    else if (!/^[A-Za-z]{4}\d{7}$/.test(values.ifscCode)) {
        errors.ifscCode = "enter valid Ifsc code";
    }


    if (!/^[0-9]{0,9}$/.test(values.micrCode)) {
        errors.micrCode = "enter valid micr code";
    }

    if (!/^[0-9a-zA-Z]{0,15}$/.test(values.gstNumber)) {
        errors.gstNumber = "enter valid GST number";
    }

    if (!/^[0-9]{0,10}$/.test(values.bankcontact)) {
        errors.bankcontact = "enter valid contact number";
    }

    if (!/^[a-zA-Z]{0,25}$/.test(values.bankCity)) {
        errors.bankCity = "Country Name should be between 3 to 25 characters long or only letters allowed";
    }

    return errors;
}

function BankAccountDetails({ activationKey, onActivationKeyChild, onPreviousActivationKey }) {

    // reset form start: 
    const beneficiarynameReset = useRef("");
    const banknameReset = useRef("");
    const currencytypeReset = useRef("");
    const accountnoReset = useRef("");
    const savingsReset = useRef("");
    const currentReset = useRef("");
    const ifscReset = useRef("");
    const swiftbicReset = useRef("");
    const micrReset = useRef("");
    const ibanReset = useRef("");
    const gstReset = useRef("");
    const bankcontact1 = useRef("");
    const bankaddressReset = useRef("");
    const bankcountryReset = useRef("");



    // for npm custom component dont use useRef instead use useState i.e for phone component
    function handleReset() {
        beneficiarynameReset.current.value = "";
        banknameReset.current.value = "";
        currencytypeReset.current.value = "";
        accountnoReset.current.value = "";
        savingsReset.current.checked = false;
        currentReset.current.checked = false;
        ifscReset.current.value = "";
        swiftbicReset.current.value = "";
        micrReset.current.value = "";
        ibanReset.current.value = "";
        gstReset.current.checked = "";
        bankcontact1.current.value = "";
        bankaddressReset.current.value = "";
        bankcountryReset.current.value = "";
        // console.log("Ref",genderMale);
        formik.resetForm();
        setProgress(0);

    }
    // reset form end: 

    const formik = useFormik({
        initialValues: {
            beneficiaryName: '',
            bankName: '',
            CurrencyType: '',
            bankAccountNo: '',
            ifscCode: '',
            switchbicNumber: '',
            micrCode: '',
            ibanCode: '',
            gstNumber: '',
            bankcontact: '',
            bankCity: ''

        },
        validate,
        onSubmit: values => {
            alert(`clicked next`);
            onActivationKeyChild(childNextKey);
            console.log("values",values)
        }
    });
    //next btn:
    const [childNextKey, setChildNextKey] = useState("5");

    const handlePreviousButton = () => {
        onPreviousActivationKey("3")
    }

    // progress Bar for static fields:
    const [progress, setProgress] = useState(0);
    function handleProgress() {
        console.log("formik values1", formik.values)
        const result = countKeysWithNonEmptyValues(formik.values);
        console.log("result for formik values:", result)
        const totalFilledFields = result;

        //calc formula
        let newProgress = ((totalFilledFields / 13) * 100).toFixed();
        console.log("Progress", newProgress)
        setProgress(newProgress);
    }

    function countKeysWithNonEmptyValues(obj) {
        let count = 0;

        for (const key in obj) {
            if (
                obj.hasOwnProperty(key) &&    //hasOwnProperty is used to check any value present in obj
                obj[key] !== null &&
                obj[key] !== undefined &&
                obj[key] !== ''
            ) {
                count++;
            }
        }
        console.log("count", count)
        return count;
    }

    useEffect(() => {
        handleProgress();
    }, [formik.values])


    return (

        <Accordion.Item eventKey="4">
            <Accordion.Header><i className="bi bi-info-circle-fill me-1"></i><span style={{ fontWeight: '700' }}>BANK ACCOUNT DETAILS</span><ProgressBarWithLabel progressValue={progress} /></Accordion.Header>
            <Accordion.Body>
                <Container >
                    <p>{activationKey}</p>
                    <Form style={{ paddingRight: '60px' }} onSubmit={formik.handleSubmit}>
                        <Row>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="beneficiaryName"
                                        type="text"
                                        placeholder="beneficiaryname"
                                        name="beneficiaryName"
                                        ref={beneficiarynameReset}
                                        style={{ zIndex: -1 }}
                                        value={formik.values.beneficiaryName} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.beneficiaryName && formik.errors.beneficiaryName ? <span className='span'>{formik.errors.beneficiaryName}</span> : null
                                    }
                                    <label htmlFor="beneficiaryName" className='text-muted'>Beneficiary Name*</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="bankName"
                                        type="text"
                                        placeholder="bankname"
                                        name="bankName"
                                        ref={banknameReset}
                                        value={formik.values.bankName} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.bankName && formik.errors.bankName ? <span className='span'>{formik.errors.bankName}</span> : null
                                    }

                                    <label htmlFor="bankName" className='text-muted'>Bank Name*</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4}>
                                <Form.Floating className="mb-2 col">
                                    <Form.Control
                                        id="CurrencyType"
                                        type="text"
                                        placeholder="currencytype"
                                        name="CurrencyType"
                                        ref={currencytypeReset}
                                        value={formik.values.CurrencyType} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.CurrencyType && formik.errors.CurrencyType ? <span className='span'>{formik.errors.CurrencyType}</span> : null
                                    }
                                    <label htmlFor="CurrencyType" className='text-muted'>Currency Type</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="bankAccountNo"
                                        type="text"
                                        placeholder="accountno"
                                        name="bankAccountNo"
                                        ref={accountnoReset}
                                        value={formik.values.bankAccountNo} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.bankAccountNo && formik.errors.bankAccountNo ? <span className='span'>{formik.errors.bankAccountNo}</span> : null
                                    }
                                    <label htmlFor="bankAccountNo" className='text-muted'>Account No*</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col colAccount'>
                                <label className='text-muted' htmlFor="battingpads">Account Type*</label>
                                {['radio'].map((type) => (

                                    <div key={`inline-${type}`} >
                                        <span style={{ whiteSpace: 'nowrap' }} onChange={(e) => { formik.handleChange(e) }}>
                                            <Form.Check
                                                inline
                                                label="Savings"
                                                name="acType"
                                                type={type}
                                                id={`inline-${type}-savings`}
                                                // defaultChecked={true}
                                                ref={savingsReset}
                                            />
                                            <Form.Check
                                                inline
                                                label="Current"
                                                name="acType"
                                                type={type}
                                                id={`inline-${type}-current`}
                                                ref={currentReset}
                                            />
                                        </span>
                                    </div>
                                ))}
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="ifscCode"
                                        type="text"
                                        placeholder="ifsc"
                                        name="ifscCode"
                                        ref={ifscReset}
                                        value={formik.values.ifscCode} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.ifscCode && formik.errors.ifscCode ? <span className='span'>{formik.errors.ifscCode}</span> : null
                                    }
                                    <label htmlFor="ifscCode" className='text-muted'>IFSC Code*</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="switchbicNumber"
                                        type="text"
                                        placeholder="swiftbic"
                                        name="switchbicNumber"
                                        ref={swiftbicReset}
                                        onChange={formik.handleChange}
                                    />
                                    {/*  */}
                                    <label htmlFor="switchbicNumber" className='text-muted '>Swift/Bic No Type</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="micrCode"
                                        type="text"
                                        placeholder="micr"
                                        name="micrCode"
                                        ref={micrReset}
                                        value={formik.values.micr} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.micrCode && formik.errors.micrCode ? <span className='span'>{formik.errors.micrCode}</span> : null
                                    }
                                    <label htmlFor="micrCode" className='text-muted'>MICR Code</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="ibanCode"
                                        type="text"
                                        placeholder="iban"
                                        name="ibanCode"
                                        ref={ibanReset}
                                        onChange={formik.handleChange}
                                    />

                                    <label htmlFor="ibanCode" className='text-muted'>IBAN Code</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="gstNumber"
                                        type="text"
                                        placeholder="gst"
                                        name="gstNumber"
                                        ref={gstReset}
                                        value={formik.values.gstNumber} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.gstNumber && formik.errors.gstNumber ? <span className='span'>{formik.errors.gstNumber}</span> : null
                                    }
                                    <label htmlFor="gstNumber" className='text-muted'>GST Number</label>
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
                                        id="bankAddress"
                                        type="text"
                                        placeholder="bankaddress"
                                        name="bankAddress"
                                        ref={bankaddressReset}
                                        onChange={formik.handleChange}
                                    />
                                    <label htmlFor="bankAddress" className='text-muted'>Bank Address</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="bankCity"
                                        type="text"
                                        placeholder="bankcountry"
                                        name="bankCity"
                                        ref={bankcountryReset}
                                        value={formik.values.bankCity} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.bankCity && formik.errors.bankCity ? <span className='span'>{formik.errors.bankCity}</span> : null
                                    }

                                    <label htmlFor="bankCity" className='text-muted'>Bank Country</label>
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