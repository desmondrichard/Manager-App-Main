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
import axios from 'axios';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

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

    //
    // \d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}

    if (!/\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}/.test(values.gstNumber)) {
        errors.gstNumber = "enter valid GST number";
    }

    if (!/^[0-9]{0,10}$/.test(values.bankContactNo)) {
        errors.bankContactNo = "enter valid contact number";
    }

    if (!/^[a-zA-Z]{0,25}$/.test(values.bankCountry)) {
        errors.bankCountry = "Country Name should be between 3 to 25 characters long or only letters allowed";
    }

    return errors;
}


function BankAccountDetails({ activationKey, onActivationKeyChild, onPreviousActivationKey, showPutData, showSaveBtn, showClearBtn, handlePrevClick, previousClk, showSkipBtn }) {

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
    // const bankaddressReset2 = useRef("");


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
        gstReset.current.value = "";
        bankcontact1.current.value = "";
        bankaddressReset.current.value = "";
        bankcountryReset.current.value = "";
        // bankaddressReset2.current.value = "";
        // console.log("Ref",genderMale);
        formik.resetForm();
        setProgress(0);

    }
    // reset form end: 

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            beneficiaryName: showPutData?.beneficiaryName || '',
            bankName: showPutData?.bankName || '',
            currencyType: showPutData?.currencyType || '',
            bankAccountNo: showPutData?.bankAccountNo || '',
            ifscCode: showPutData?.ifscCode || '',
            switchbicNumber: showPutData?.switchbicNumber || '',
            micrCode: showPutData?.micrCode || '',
            ibanCode: showPutData?.ibanCode || '',
            gstNumber: showPutData?.gstNumber || '',
            bankContactNo: showPutData?.bankContactNo || '',
            bankCountry: showPutData?.bankCountry || '',
            bankAddress: showPutData?.bankAddress || '',
            // bankAddress2: showPutData?.bankAddress2 || '',
            acType: showPutData?.acType || ''
        },
        validate,
        onSubmit: values => {
            axios.post('http://192.168.1.134/MA-APP/bankModel', values)
                .then(response => {
                    console.log(response.data);
                    onActivationKeyChild(childNextKey);
                    console.log("values", values)
                })
                .catch(error => {
                    console.error(error.message);
                    console.log("values", values)

                });
        }
    });

    // alert(`clicked next`);
    // onActivationKeyChild(childNextKey);
    // console.log("values", values)

    //next btn:
    const [childNextKey, setChildNextKey] = useState("5");

    const handlePreviousButton = () => {
        onPreviousActivationKey("3")
        handlePrevClick(true)
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

    console.log("showPutDataBank", showPutData)

    //update Method:
    function handleUpdate() {

        axios.put(`http://192.168.1.134/MA-APP/bankModel/${showPutData.alldataplayerId}`, formik.values, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (response.status === 200) {
                    console.log("Updation Data: ", response.data);
                    onActivationKeyChild(childNextKey);
                } else {
                    console.log("Unexpected response status: ", response.status);
                }
            })
            .catch(error => {
                if (error.response && error.response.data) {
                    console.log("Error Updating User: ", error.response.data);
                } else {
                    console.log("Error Updating User: ", error.message);
                }
            });
    }

    function handleSkip() {
        onActivationKeyChild(childNextKey)
        handlePrevClick(true)
    }

    useEffect(() => {
        handleProgress();
    }, [formik.values])


    return (

        <Accordion.Item eventKey="4">
            <Accordion.Header><i className="bi bi-info-circle-fill me-1"></i><span style={{ fontWeight: '700' }}>BANK ACCOUNT DETAILS</span><ProgressBarWithLabel progressValue={progress} /></Accordion.Header>
            <Accordion.Body>
                <Container >
                    {/* <p>{activationKey}</p> */}
                    <Form style={{ paddingRight: '60px' }} onSubmit={formik.handleSubmit}>
                        <Row>
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

                            <Col xs={12} lg={4}>
                                <FloatingLabel className='mb-2 col'
                                    controlId="currencyType"
                                    label="Currency Type*"
                                    name="currencyType"
                                >

                                    <Form.Select aria-label="currencyType" ref={currencytypeReset}
                                        value={formik.values.currencyType} onBlur={formik.handleBlur} onChange={(e) => formik.setFieldValue('currencyType', e.target.value)}
                                    >
                                        <option value="none">Select Type</option>
                                        <option value="rupees">Rupees</option>
                                        <option value="usdollar">US Dollar</option>
                                        <option value="euro">Euro</option>
                                        <option value="swissfranc">Swiss Franc</option>
                                        <option value="poundsterling">Pound Sterling</option>
                                        <option value="others">Others</option>
                                    </Form.Select>
                                    {
                                        formik.touched.currencyType && formik.errors.currencyType ? <span className='span'>{formik.errors.currencyType}</span> : null
                                    }
                                </FloatingLabel>
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
                            <Col xs={12} lg={4} className='col colAccount acTypeAlign'>
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
                                                checked={formik.values.acType === 'savings'}
                                                value='savings'
                                                ref={savingsReset}
                                                style={{ marginRight: '-5px' }}
                                            />
                                            <Form.Check
                                                inline
                                                label="Current"
                                                name="acType"
                                                type={type}
                                                id={`inline-${type}-current`}
                                                checked={formik.values.acType === 'current'}
                                                value='current'
                                                ref={currentReset}
                                                style={{ marginRight: '-30px' }}
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
                                        value={formik.values.switchbicNumber} onBlur={formik.handleBlur} onChange={formik.handleChange}
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
                                        value={formik.values.micrCode} onBlur={formik.handleBlur} onChange={formik.handleChange}

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
                                        value={formik.values.ibanCode} onBlur={formik.handleBlur} onChange={formik.handleChange}

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
                                        id="bankContactNo"
                                        type="text"
                                        placeholder="bankcontact"
                                        name="bankContactNo"
                                        ref={bankcontact1}
                                        value={formik.values.bankContactNo} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.bankContactNo && formik.errors.bankContactNo ? <span className='span'>{formik.errors.bankContactNo}</span> : null
                                    }
                                    {/*  */}
                                    <label htmlFor="bankContactNo" className='text-muted '>Bank Contact No</label>
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
                                        value={formik.values.bankAddress} onBlur={formik.handleBlur} onChange={formik.handleChange}

                                    />
                                    <label htmlFor="bankAddress" className='text-muted'>Bank Address 1</label>
                                </Form.Floating>
                            </Col>

                            {/* <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="bankAddress2"
                                        type="text"
                                        placeholder="bankaddress"
                                        name="bankAddress2"
                                        ref={bankaddressReset2}
                                        value={formik.values.bankAddress2} onBlur={formik.handleBlur} onChange={formik.handleChange}

                                    />
                                    <label htmlFor="bankAddress2" className='text-muted'>Bank Address 2</label>
                                </Form.Floating>
                            </Col> */}

                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="bankCountry"
                                        type="text"
                                        placeholder="bankcountry"
                                        name="bankCountry"
                                        ref={bankcountryReset}
                                        value={formik.values.bankCountry} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.bankCountry && formik.errors.bankCountry ? <span className='span'>{formik.errors.bankCountry}</span> : null
                                    }

                                    <label htmlFor="bankCountry" className='text-muted'>Bank Country</label>
                                </Form.Floating>
                            </Col>
                            <Col lg={12} className='my-4 col'>
                                {console.log("previousClkBtn", previousClk, showSkipBtn)}
                                {previousClk && <Button variant="primary" className='me-1 mb-2 mx-1 previousP' style={{ width: "130px" }} onClick={handlePreviousButton}>Previous</Button>}
                                {showSaveBtn && !previousClk && <Button type="submit" variant="success" className='me-1 mb-2 mx-1 ' style={{ width: "130px" }}>Save and Next</Button>}
                                {showClearBtn && <Button variant="warning" className='text-white mb-2 ' style={{ width: "130px" }} onClick={() => handleReset()}>Clear</Button>}
                                {!showSaveBtn && <Button variant="info" className='mx-1 updateP' style={{ whiteSpace: 'nowrap', width: '130px', marginTop: '-8px' }} onClick={handleUpdate}>Update</Button>}
                                {(previousClk || showSkipBtn) && <Button variant="dark" className='skip ms-1' style={{ whiteSpace: 'nowrap', width: '130px', marginTop: '-8px' }} onClick={handleSkip}>Skip</Button>}

                            </Col>
                        </Row>

                    </Form>
                </Container>
            </Accordion.Body>
        </Accordion.Item>

    )
}

export default BankAccountDetails