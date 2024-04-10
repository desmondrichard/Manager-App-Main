import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import './KittingDetailsForm.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import './Iddetails.css';
import { useFormik } from 'formik';
import { useRef } from 'react';
// import PlayerDynamicTextFields from './PlayerDynamicTextFields';
import { Country, State, City } from 'country-state-city';
import Select from "react-select";
import ProgressBarWithLabel from '../ProgressBarWithLabel';
import axios from 'axios';

// validation:
const validate = values => {
    const errors = {};

    if (!values.aadharNo) {
        errors.aadharNo = "*Required";
    }
    else if (!/^[0-9]{4}[ -]?[0-9]{4}[ -]?[0-9]{4}$/.test(values.aadharNo)) {
        errors.aadharNo = "Enter Valid Aadhar Number"
    }

    if (!values.panCardNo) {
        errors.panCardNo = "*Required";
    }
    else if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(values.panCardNo)) {
        errors.panCardNo = "Enter Valid Pan Card Number"
    }

    //

    if (!values.passportNo) {
        errors.passportNo = "*Required";
    }
    else if (!/^[A-Z]{1}[0-9]{6}$/.test(values.passportNo)) {
        errors.passportNo = "Enter Valid Passport Number"
    }
    //

    if (!values.passportExpDate) {
        errors.passportExpDate = "*Required";
    }

    if (!values.birthCertificate) {
        errors.birthCertificate = "*Required";
    }
    else if (!/^[0-9]{6,14}$/.test(values.birthCertificate)) {
        errors.birthCertificate = "Enter Valid Birth Certificate Number"
    }

    // if (!values.address) {
    //     errors.address = "*Required";
    // }
    if (!values.address) {
        errors.address = "*Required"
    }

    if (!values.addressLine1) {
        errors.addressLine1 = "*Required"
    }

    if (!values.country) {
        errors.country = "Required";
    }

    if (!values.state) {
        errors.state = "Required";
    }

    if (!values.city) {
        errors.city = "Required";
    }

    return errors;
}
function Iddetails({ activationKey, onActivationKeyChild, onPreviousActivationKey, showPutData, showSaveBtn, showClearBtn, handlePrevClick, previousClk, showSkipBtn }) {
    // next btn:
    const [childNextKey, setChildNextKey] = useState("4");

    const [clearValue, setClearValue] = useState(false);

    // reset form start: 
    const aadharnoReset = useRef("");
    const pannoReset = useRef("");
    const passnoReset = useRef("");
    const passexpReset = useRef("");
    const birthReset = useRef("");
    const visaYesReset = useRef(false);
    const visaNoReset = useRef(false);
    const address0 = useRef("");
    const address1 = useRef("");
    const address2 = useRef("");
    const visaNumber = useRef("");

    // const addressRef0 = useRef("");

    // for npm custom component dont use useRef instead use useState i.e for phone component
    function handleReset() {
        aadharnoReset.current.value = "";
        pannoReset.current.value = "";
        passnoReset.current.value = "";
        passexpReset.current.value = "";
        birthReset.current.value = "";
        visaYesReset.current.checked = false;
        visaNoReset.current.checked = false;
        setClearValue(true);
        address0.current.value = "";
        address1.current.value = "";
        address2.current.value = "";
        visaNumber.current.value = "";
        setSelectedCountry(null);
        setSelectedState(null);
        setSelectedCity(null);
        // addressRef0.current.value = "";
        formik.resetForm();
        setProgress(0);

    }

    const [visaChecked, setVisaChecked] = useState(null);
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            aadharNo: showPutData?.aadharNo || '',
            panCardNo: showPutData?.panCardNo || '',
            passportExpDate: showPutData?.passportExpDate || '',
            birthCertificate: showPutData?.birthCertificate || '',
            visacheck: showPutData?.visacheck || '',
            address: showPutData?.address || '',
            addressLine1: showPutData?.addressLine1 || '',
            addressLine2: showPutData?.addressLine2 || '',
            passportNo: showPutData?.passportNo || '',
            country: showPutData?.country || '',    //right approach
            state: showPutData?.state || '',
            city: showPutData?.city || '',
            visaNumber: showPutData?.visaNumber || ''

        },
        validate,
        onSubmit: (values, { setSubmitting }) => {
            // const passportExpDate = new Date(values.passportExpDate);
            // const formattedPassportExpDate = `${passportExpDate.getDate()}/${passportExpDate.getMonth() + 1}/${passportExpDate.getFullYear()}`;
            // const dob = formattedPassportExpDate;
            const newValues = { ...values };

            axios.post('https://localhost:7097/IDCardDetailsModel', newValues)
                .then(response => {
                    console.log(response.data);
                    onActivationKeyChild(childNextKey);
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

    // onActivationKeyChild(childNextKey);
    // alert('clicked next');
    // console.log("newvalues", newValues)
    // setSubmitting(false);

    const handlePreviousButton = () => {
        onPreviousActivationKey("2")
        handlePrevClick(true)
    }
    // country-state-city:
    //const [selectedCountry, setSelectedCountry] = useState(null);
    //const [selectedState, setSelectedState] = useState(null);
    //const [selectedCity, setSelectedCity] = useState(null);

    //Country value setting for post and put*:
    const [isPutRequest, setIsPutRequest] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(showPutData ? Country.getAllCountries().find(option => option.name === showPutData.country) : null);

    //State value setting for post and put*:
    const [selectedState, setSelectedState] = useState(showPutData ? State.getAllStates().find(option => option.name === showPutData.state) : null);

    //City value setting for post and put*:
    const [selectedCity, setSelectedCity] = useState(showPutData ? City.getAllCities().find(option => option.name === showPutData.city) : null);


    useEffect(() => {
        console.log(selectedCountry);
        console.log(selectedCountry?.isoCode);
        console.log(State?.getStatesOfCountry(selectedCountry?.isoCode));
    }, [selectedCountry]);
    // console.log("Focus",address);

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

        //dynamic field values:
        if (formik.values.visacheck === 'no') {
            count++;
        }

        return count;
    }

    console.log("showPutDataProf", showPutData)

    // Function to format dates as "yyyy-MM-dd"
    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    //update Method:
    function handleUpdate() {
        // Convert the date strings to Date objects
        const passportExpDate = new Date(formik.values.passportExpDate);
        // Format dates as "yyyy-MM-dd"
        const formattedPassportExpDate = formatDate(passportExpDate);

        axios.put(`https://localhost:7097/PlayerIDcardModel/${showPutData.alldataplayerId}`, {
            ...formik.values, passportExpDate: formattedPassportExpDate,
        }, {
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
        handleProgress();   // uncomment while adding progress bar
    }, [formik.values, selectedCountry, selectedState, selectedCity]);

    //Country value setting for post and put*:
    useEffect(() => {
        if (showPutData) {
            setIsPutRequest(true);
        }
    }, [showPutData]);
    return (

        <Accordion.Item eventKey="3">
            <Accordion.Header><i className="bi bi-info-circle-fill me-1"></i><span style={{ fontWeight: '700' }}>ID CARD DETAILS</span><ProgressBarWithLabel progressValue={progress} /></Accordion.Header>
            <Accordion.Body>
                <Container >
                    {/* <p>{activationKey}</p> */}
                    <Form style={{ paddingRight: '60px' }} onSubmit={formik.handleSubmit}>
                        <Row>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="aadharNo"
                                        type="text"
                                        placeholder="aadharNo"
                                        name="aadharNo"
                                        ref={aadharnoReset}
                                        value={formik.values.aadharNo} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.aadharNo && formik.errors.aadharNo ? <span className='span'>{formik.errors.aadharNo}</span> : null
                                    }
                                    <label htmlFor="aadharNo" className='text-muted'>AADHAR NO*</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="panCardNo"
                                        type="text"
                                        placeholder="panno"
                                        name="panCardNo"
                                        ref={pannoReset}
                                        value={formik.values.panCardNo} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.panCardNo && formik.errors.panCardNo ? <span className='span'>{formik.errors.panCardNo}</span> : null
                                    }
                                    <label htmlFor="panCardNo" className='text-muted'>PANCARD NO*</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="passportNo"
                                        type="text"
                                        placeholder="passportNo"
                                        name="passportNo"
                                        ref={passnoReset}
                                        value={formik.values.passportNo} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.passportNo && formik.errors.passportNo ? <span className='span'>{formik.errors.passportNo}</span> : null
                                    }
                                    <label htmlFor="passportNo" className='text-muted'>PASSPORT NO*</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="passportExpDate"
                                        type="date"
                                        // placeholder="passexp"
                                        name="passportExpDate"
                                        ref={passexpReset}
                                        min={new Date().toISOString().split('T')[0]}
                                        value={formik.values.passportExpDate} onBlur={formik.handleBlur} onChange={(e) => { formik.handleChange(e) }}
                                    />
                                    {
                                        formik.touched.passportExpDate && formik.errors.passportExpDate ? <span className='span'>{formik.errors.passportExpDate}</span> : null
                                    }
                                    <label htmlFor="passportExpDate" className='text-muted'>PASSPORT EXP DATE*</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="birthCertificate"
                                        type="text"
                                        placeholder="birth"
                                        name="birthCertificate"
                                        ref={birthReset}
                                        value={formik.values.birthCertificate} onBlur={formik.handleBlur} onChange={formik.handleChange}

                                    />
                                    {
                                        formik.touched.birthCertificate && formik.errors.birthCertificate ? <span className='span'>{formik.errors.birthCertificate}</span> : null
                                    }
                                    <label htmlFor="birthCertificate" className='text-muted' style={{ fontSize: '13px' }}>BIRTH CERTIFICATE NO*</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <label className='text-muted' htmlFor="visacheck">DO YOU HAVE VISA</label>
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} onChange={(e) => { formik.handleChange(e) }}>
                                        <Form.Check
                                            inline
                                            label="Yes"
                                            name="visacheck"
                                            type={type}
                                            id={`inline-${type}-yes`}
                                            ref={visaYesReset}
                                            checked={formik.values.visacheck === 'yes'}

                                            value="yes"

                                        // onChange={(e) => {
                                        //     setVisaChecked(e.target.value);
                                        //     formik.setFieldValue('visacheck', e.target.value);
                                        // }}
                                        />
                                        <Form.Check
                                            inline
                                            label="No"
                                            name="visacheck"
                                            type={type}
                                            id={`inline-${type}-no`}
                                            // defaultChecked={true}
                                            ref={visaNoReset}
                                            checked={formik.values.visacheck === 'no'}
                                            value="no"

                                        // onChange={(e) => {
                                        //     setVisaChecked(e.target.value);
                                        //     formik.setFieldValue('visacheck', e.target.value);
                                        // }}
                                        />
                                    </div>
                                ))}
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="visaNumber"
                                        type="text"
                                        placeholder="visaNumber"
                                        name="visaNumber"
                                        ref={visaNumber}
                                        value={formik.values.visaNumber} onBlur={formik.handleBlur} onChange={formik.handleChange} disabled={formik.values.visacheck === 'no'}
                                    />
                                    {
                                        formik.touched.visaNumber && formik.errors.visaNumber ? <span className='span'>{formik.errors.visaNumber}</span> : null
                                    }
                                    <label htmlFor="visaNumber" className='text-muted'>VISA NUMBER</label>
                                </Form.Floating>
                            </Col>

                            {/* <Row className='row1'> */}
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="address"
                                        type="text"
                                        placeholder="address"
                                        name="address"
                                        ref={address0}
                                        value={formik.values.address} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.address && formik.errors.address ? <span className='span'>{formik.errors.address}</span> : null
                                    }
                                    <label htmlFor="address" className='text-muted'>ADDRESS*</label>
                                </Form.Floating>
                            </Col>
                            {/* {isFocused && ( */}

                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="addressLine1"
                                        type="text"
                                        placeholder="address1"
                                        name="addressLine1"
                                        ref={address1}
                                        // value={
                                        //     isClearAddress1 ? "" : value1
                                        // }
                                        // onChange={e => setValue1(e.target.value)}
                                        value={formik.values.addressLine1} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.addressLine1 && formik.errors.addressLine1 ? <span className='span'>{formik.errors.addressLine1}</span> : null
                                    }

                                    <label htmlFor="addressLine1" className='text-muted'>ADDRESS LINE 1*</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="addressLine2"
                                        type="text"
                                        placeholder="address2"
                                        name="addressLine2"
                                        ref={address2}
                                        // value={
                                        //     isClearAddress2 ? "" : value2
                                        // }
                                        // onChange={e => setValue2(e.target.value)}
                                        value={formik.values.addressLine2} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.addressLine2 && formik.errors.addressLine2 ? <span className='span'>{formik.errors.addressLine2}</span> : null
                                    }
                                    <label htmlFor="addressLine2" className='text-muted'>ADDRESS LINE 2</label>
                                </Form.Floating>
                            </Col>

                            {/* country-state-city: */}
                            <Col xs={12} lg={4} className='col'>
                                {/* <label htmlFor="country">Country:</label> */}
                                <Select placeholder='country*' id='country' name='country'
                                    className="dynamicSelect" style={{ zIndex: 100, outline: 'none', border: 'none' }}
                                    options={Country.getAllCountries()}
                                    getOptionLabel={(options) => {
                                        return options["name"];
                                    }}
                                    getOptionValue={(options) => {
                                        return options["name"];
                                    }}
                                    value={selectedCountry}
                                    // onChange={(item) => {
                                    //     setSelectedCountry(item);
                                    // }}
                                    onChange={(item) => {
                                        formik.setFieldValue("country", item.name);
                                        setSelectedCountry(item);
                                    }}

                                />
                                {formik.touched.country && formik.errors.country ? <span className='span'>{formik.errors.country}</span> : null}

                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                {/* <label htmlFor="state">State:</label> */}
                                <Select placeholder='State*' style={{ zIndex: 100 }} id='state' name='state'
                                    options={State?.getStatesOfCountry(selectedCountry?.isoCode)}
                                    getOptionLabel={(options) => {
                                        return options["name"];
                                    }}
                                    getOptionValue={(options) => {
                                        return options["name"];
                                    }}
                                    value={selectedState}
                                    onChange={(item) => {
                                        formik.setFieldValue("state", item.name);
                                        setSelectedState(item);
                                    }}
                                />
                                {formik.touched.state && formik.errors.state ? <span className='span'>{formik.errors.state}</span> : null}
                            </Col>
                            <Col xs={12} lg={4} className='col '>
                                {/* <label htmlFor="city">City:</label> */}
                                <Select id='city' name='city' placeholder='City*' className="dynamicSelect" style={{ zIndex: 100 }}
                                    options={City.getCitiesOfState(
                                        selectedState?.countryCode,
                                        selectedState?.isoCode
                                    )}
                                    getOptionLabel={(options) => {
                                        return options["name"];
                                    }}
                                    getOptionValue={(options) => {
                                        return options["name"];
                                    }}
                                    value={selectedCity}
                                    onChange={(item) => {
                                        formik.setFieldValue("city", item.name);
                                        setSelectedCity(item);
                                    }}
                                />
                                {formik.touched.city && formik.errors.city ? <span className='span'>{formik.errors.city}</span> : null}
                            </Col>

                            <Col xs={12} lg={12} className='my-4 col'>
                                {console.log("previousClkBtn", previousClk, showSkipBtn)}
                                {previousClk && <Button variant="primary" className='me-1 mb-2 mx-1 previousP' style={{ width: "130px" }} onClick={handlePreviousButton}>PREVIOUS</Button>}
                                {showSaveBtn && !previousClk && <Button type="submit" variant="success" className='me-1 mb-2 mx-1 ' style={{ width: "130px" }}>Save and Next</Button>}
                                {showClearBtn && <Button variant="warning" className='text-white mb-2 ' style={{ width: "130px" }} onClick={() => handleReset()}>CLEAR</Button>}
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

export default Iddetails