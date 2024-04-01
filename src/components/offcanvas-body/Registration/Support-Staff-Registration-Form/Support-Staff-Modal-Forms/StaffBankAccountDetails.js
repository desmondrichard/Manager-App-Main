import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useFormik } from 'formik';
import { useRef } from 'react';
import './StaffBankAccountDetails.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import axios from 'axios';
import ProgressBarWithLabel from '../../ProgressBarWithLabel';
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

    if (!/^[^0-9]{0,12}$/.test(values.currencyType)) {
        errors.currencyType = "Invalid currency type";
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

    if (!/^[0-9]{0,10}$/.test(values.bankContactNo)) {
        errors.bankContactNo = "enter valid contact number";
    }

    if (!/^[a-zA-Z]{0,20}$/.test(values.bankCountry)) {
        errors.bankCountry = "Country Name should be between 3 to 20 characters long or only letters allowed";
    }

    return errors;
}

function StaffBankAccountDetails({ activationKey, onActivationKeyChild, onPreviousActivationKey, showPutData, showSaveBtn }) {
    const [childNextKey, setChildNextKey] = useState("4");

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
    const bankaddress2 = useRef("");
    const bankcountry1 = useRef("");



    // for npm custom component dont use useRef instead use useState i.e for phone component
    function handleReset() {
        beneficiaryname1.current.value = "";
        bankname1.current.value = "";
        currencytype1.current.value = "none";
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
        bankaddress2.current.value = "";
        bankcountry1.current.value = "";

        // console.log("Ref",genderMale);
        formik.resetForm();
        setProgress(0);
    }
    // reset form end: 
    // 
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            beneficiaryName: showPutData?.beneficiaryName || '',
            bankName: showPutData?.bankName || '',
            currencyType: showPutData?.currencyType || '',
            acType: showPutData?.acType || '',
            bankAccountNo: showPutData?.bankAccountNo || '',
            ifscCode: showPutData?.ifscCode || '',
            micrCode: showPutData?.micrCode || '',
            ibanCode: showPutData?.ibanCode || '',
            gstNumber: showPutData?.gstNumber || '',
            bankAddress: showPutData?.bankAddress || '',
            bankAddress2: showPutData?.bankAddress2 || '',
            bankContactNo: showPutData?.bankContactNo || '',
            bankCountry: showPutData?.bankCountry || '',
            switchbicNumber: showPutData?.switchbicNumber || ''

        },
        validate,
        onSubmit: values => {
            axios.post('https://localhost:7097/StaffbankModel', values)
                .then(response => {
                    console.log(response.data);
                    onActivationKeyChild(childNextKey)
                    console.log("values", values)
                })
                .catch(error => {
                    console.error(error.message);
                    console.log("values", values)
                });

        }
    });

    // alert(`Hello! ,${values.fNamelNamemName}you have successfully signed up`);
    // onActivationKeyChild(childNextKey)
    // console.log("values", values)

    const handlePreviousButton = () => {
        onPreviousActivationKey("2")
    }

    //Progress Bar:
    const [progress, setProgress] = useState(0);

    function handleProgress() {
        //check form values or formik values:
        console.log("formik vals Bank:", formik.values);
        //set progress as 1 if current form field is filled else 0:  
        //get no of form vals filled by adding it inside a object:
        const result = countKeysWithNonEmptyValues(formik.values); //sending object as parameter which has all form fields
        console.log(result);  //returned count is stored in result variable
        //calc formula
        let newProgress = ((result / 14) * 100).toFixed();
        console.log("Progress", newProgress)
        //store result progress value
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

    //update:
    console.log("showputDataBank", showPutData)

    function handleUpdate() {

        axios.put(`https://localhost:7097/StaffbankModel/${showPutData.alldataStaffId}`, formik.values, {
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
    }

    //useEffect will be trigerred whenever formik.values has value
    useEffect(() => {
        handleProgress();
    }, [formik.values]); // Ensure that the effect is triggered when form values change


    return (

        <Accordion.Item eventKey="3">
            <Accordion.Header><i className="bi bi-info-circle-fill me-1"></i><span style={{ fontWeight: '700' }}>BANK ACCOUNT DETAILS</span><ProgressBarWithLabel progressValue={progress} /></Accordion.Header>
            <Accordion.Body>
                <Container >
                    <Form style={{ paddingRight: '60px' }} onSubmit={formik.handleSubmit}>
                        <Row>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="bankName"
                                        type="text"
                                        placeholder="bankname"
                                        name="bankName"
                                        ref={bankname1}
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
                                        ref={beneficiaryname1}
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
                                    controlId="CurrencyType"
                                    label="Currency Type*"
                                    name="currencyType"
                                >

                                    <Form.Select aria-label="currencyType" ref={currencytype1} value={formik.values.currencyType} onBlur={formik.handleBlur}
                                        onChange={(e) => formik.setFieldValue('currencyType', e.target.value)}>
                                        <option value="none">Select Type</option>
                                        <option value="rupees">Rupees</option>
                                        <option value="us dollar">US Dollar</option>
                                        <option value="euro">Euro</option>
                                        <option value="swiss franc">Swiss Franc</option>
                                        <option value="singapore dollar">Singapore Dollar</option>
                                        <option value="pound sterling">Pound Sterling</option>
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
                                        ref={accountno1}
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
                                    <div key={`inline-${type}`} style={{ whiteSpace: 'nowrap' }} onChange={(e) => { formik.handleChange(e) }}>
                                        <Form.Check
                                            inline
                                            label="Savings"
                                            name="acType"
                                            type={type}
                                            id={`inline-${type}-savings`}
                                            // defaultChecked={true}
                                            ref={savings1}
                                            checked={formik.values.acType === 'savings'}
                                            value="savings"
                                            style={{ marginRight: '-5px' }}
                                        />
                                        <Form.Check
                                            inline
                                            label="Current"
                                            name="acType"
                                            type={type}
                                            id={`inline-${type}-current`}
                                            ref={current1}
                                            checked={formik.values.acType === 'current'}
                                            value="current"
                                            style={{ marginRight: '-30px' }}
                                        />
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
                                        ref={ifsc1}
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
                                        ref={swiftbic1}
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
                                        ref={micr1}
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
                                        ref={iban1}
                                        value={formik.values.ibanCode} onBlur={formik.handleBlur} onChange={(e) => formik.setFieldValue('ibanCode', e.target.value)}
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
                                        ref={gst1}
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
                                        ref={bankaddress1}
                                        value={formik.values.bankAddress} onBlur={formik.handleBlur} onChange={formik.handleChange}

                                    />
                                    <label htmlFor="bankAddress" className='text-muted'>Bank Address 1</label>
                                </Form.Floating>
                            </Col>

                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="bankAddress2"
                                        type="text"
                                        placeholder="bankaddress"
                                        name="bankAddress2"
                                        ref={bankaddress2}
                                        value={formik.values.bankAddress2} onBlur={formik.handleBlur} onChange={formik.handleChange}

                                    />
                                    <label htmlFor="bankAddress2" className='text-muted'>Bank Address 2</label>
                                </Form.Floating>
                            </Col>

                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="bankCountry"
                                        type="text"
                                        placeholder="bankcountry"
                                        name="bankCountry"
                                        ref={bankcountry1}
                                        value={formik.values.bankCountry} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.bankCountry && formik.errors.bankCountry ? <span className='span'>{formik.errors.bankCountry}</span> : null
                                    }
                                    <label htmlFor="bankCountry" className='text-muted'>Bank Country</label>
                                </Form.Floating>
                            </Col>
                            <Col lg={12} className='my-4 col'>
                                <Button variant="primary" className='me-1 mb-2 mx-1 ' style={{ width: "130px" }} onClick={handlePreviousButton}>PREVIOUS</Button>
                                {showSaveBtn && <Button type="submit" variant="success" className='me-1 mb-2 mx-1 ' style={{ width: "130px" }}>Save and Next</Button>}
                                <Button variant="warning" className='text-white mb-2 mx-1 ' style={{ width: "130px" }} onClick={() => handleReset()}>CLEAR</Button>
                                {!showSaveBtn && <Button variant="info" className='mx-1 update' style={{ whiteSpace: 'nowrap', width: '130px', marginTop: '-8px' }} onClick={handleUpdate}>Update</Button>}
                                {!showSaveBtn && <Button variant="dark" className='mx-1 skip' style={{ whiteSpace: 'nowrap', width: '130px', marginTop: '-8px' }} onClick={handleSkip}>Skip</Button>}

                            </Col>
                        </Row>

                    </Form>
                </Container>
            </Accordion.Body>
        </Accordion.Item>

    )
}

export default StaffBankAccountDetails