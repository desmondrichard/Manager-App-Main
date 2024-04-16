import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useFormik } from 'formik';
import { useRef } from 'react';
import { Country, State, City } from 'country-state-city';
import Select from "react-select";
import ProgressBarWithLabel from '../../ProgressBarWithLabel';
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

    if (!values.passportNo) {
        errors.passportNo = "*Required";
    }
    else if (!/^[A-Z]{1}[0-9]{6}$/.test(values.passportNo)) {
        errors.passportNo = "Enter Valid Passport Number"
    }

    if (!values.passportExpDate) {
        errors.passportExpDate = "*Required";
    }

    if (!values.birthCertificate) {
        errors.birthCertificate = "*Required"
    }
    else if (!/^[0-9]{6,14}$/.test(values.birthCertificate)) {
        errors.birthCertificate = "Enter Valid Birth Certificate Number"
    }


    if (!values.address) {
        errors.address = "Required"
    }

    if (!values.addressLine1) {
        errors.addressLine1 = "Required"
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

function StaffIDCardDetails({ activationKey, onActivationKeyChild, onPreviousActivationKey, showSaveBtn, showPutData, showClearBtn, previousClk, showSkipBtn, handlePrevClick }) {
    //reset address:
    const [clearValue, setClearValue] = useState(false);

    const [childNextKey, setChildNextKey] = useState("3");

    //Country value setting for post and put*:
    const [isPutRequest, setIsPutRequest] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(showPutData ? Country.getAllCountries().find(option => option.name === showPutData.country) : null);

    //State value setting for post and put*:
    const [selectedState, setSelectedState] = useState(showPutData ? State.getAllStates().find(option => option.name === showPutData.state) : null);

    //City value setting for post and put*:
    const [selectedCity, setSelectedCity] = useState(showPutData ? City.getAllCities().find(option => option.name === showPutData.city) : null);

    // reset form start: 
    const aadharno1 = useRef("");
    const panno1 = useRef("");
    const passno1 = useRef("");
    const passexp1 = useRef("");
    const birth1 = useRef("");
    const visaYes = useRef(false);
    const visaNo = useRef(false);
    const visaNumber = useRef("");
    const visaValid = useRef("");
    const address0 = useRef("");
    const address1 = useRef("");
    const address2 = useRef("");

    // const addressRef0 = useRef("");

    // for npm custom component dont use useRef instead use useState i.e for phone component
    function handleReset() {
        aadharno1.current.value = "";
        panno1.current.value = "";
        passno1.current.value = "";
        passexp1.current.value = "";
        birth1.current.value = "";
        visaYes.current.checked = false;
        visaNo.current.checked = false;
        visaNumber.current.value = "";
        visaValid.current.value = "";
        address0.current.value = "";
        address1.current.value = "";
        address2.current.value = "";
        setSelectedCountry(null);
        setSelectedState(null);
        setSelectedCity(null);
        //reset address:
        setClearValue(true);
        formik.resetForm();
        setProgress(0);
        //reset npm country-state-city

    }

    const [initialValues, setInitialValues] = useState({

    })

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            aadharNo: showPutData?.aadharNo || '',
            panCardNo: showPutData?.panCardNo || '',
            passportNo: showPutData?.passportNo || '',
            passportExpDate: showPutData?.passportExpDate || '',
            birthCertificate: showPutData?.birthCertificate || '',
            visaNumber: showPutData?.visaNumber || '',
            visacheck: showPutData?.visacheck || '',
            visaValidity: showPutData?.visaValidity || '',
            address: showPutData?.address || '',
            addressLine1: showPutData?.addressLine1 || '',
            addressLine2: showPutData?.addressLine2 || '',
            country: showPutData?.country || '',    //right approach
            state: showPutData?.state || '',
            city: showPutData?.city || '',
        },
        validate,
        onSubmit: (values, { setSubmitting }) => {
            // const dateOfBirth = new Date(values.passportExpDate);
            // const formattedDOB = `${dateOfBirth.getDate()}/${dateOfBirth.getMonth() + 1}/${dateOfBirth.getFullYear()}`;
            // const dateOfBirth1 = new Date(values.visaValidity);
            // const formattedDOB1 = `${dateOfBirth1.getDate()}/${dateOfBirth1.getMonth() + 1}/${dateOfBirth1.getFullYear()}`;


            const newValues = { ...values }

            axios.post('https://localhost:7097/StaffIDCardDetails', newValues)
                .then(response => {
                    console.log(response.data);
                    onActivationKeyChild(childNextKey)
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

    // alert(`Clicked Next`);
    // onActivationKeyChild(childNextKey)
    // console.log("newvalues", newValues)
    // setSubmitting(false);

    const handlePreviousButton = () => {
        onPreviousActivationKey("1")
        handlePrevClick(true)
    }

    //Progress Bar:
    const [progress, setProgress] = useState(0);

    function handleProgress() {
        //check form values or formik values:
        console.log("formik vals Idcard:", formik.values);
        //set progress as 1 if current form field is filled else 0:  
        //get no of form vals filled by adding it inside a object:
        let result = countKeysWithNonEmptyValues(formik.values); //sending object as parameter which has all form fields
        console.log(result);  //returned count is stored in result variable
        //if not null need to sent countryCount as 1 and then add it to result:
        let countryCount = 0;
        let stateCount = 0;
        let cityCount = 0;
        if (formik.values.selectedCountry !== null && formik.values.selectedCountry !== undefined) {  //we can also put selectedCountry directly instead of formik.values.selectedCountry
            countryCount = 1;
        }

        if (formik.values.selectedState !== null && formik.values.selectedState !== undefined) {
            stateCount = 1;
        }

        if (formik.values.selectedCity !== null && formik.values.selectedCity !== undefined) {
            cityCount = 1;
        }

        var npmProgress = parseInt((countryCount + stateCount + cityCount) / 3);
        setProgress(npmProgress);
        console.log("countryCount:", countryCount);
        console.log("stateCount:", stateCount);
        console.log("cityCount:", cityCount);
        console.log("selectedCountry", selectedCountry);
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

        //dynamic visaNumber field:
        if (formik.values.visacheck === 'No') {
            count++;
        }
        return count;
    }


    // UPDATE:
    console.log("showPutDataIDCard", showPutData);

    console.log('updateMethodDataID:', showPutData.alldataStaffId)
    function handleUpdate() {
        console.log("showPutDataIDCard", showPutData);
        // alert("update executed");

        // Convert the date strings to Date objects
        const passportExpDate = new Date(formik.values.passportExpDate);
        const visaValidity = new Date(formik.values.visaValidity);

        // Format dates as "yyyy-MM-dd"
        const formattedPassportExpDate = formatDate(passportExpDate);
        const formattedVisaValidity = formatDate(visaValidity);

        axios.put(`https://localhost:7097/StaffIdcard/${showPutData.alldataStaffId}`, {
            ...formik.values, passportExpDate: formattedPassportExpDate,
            visaValidity: formattedVisaValidity
        },
            {
                headers: {
                    'Content-Type': 'application/json'
                }

            })
            .then((response) => {
                if (response.status === 200) {
                    console.log("Updation Data: ", response.data);
                    onActivationKeyChild(childNextKey); //to navigate to next tab

                } else {
                    console.log("Unexpected response status: ", response.status);
                }
            })
            .catch((error) => {
                if (error.response && error.response.data) {
                    console.log("Error Updating User: ", error.response.data);
                } else {
                    console.log("Error Updating User: ", error.message);
                }
            });
    }

    // Function to format dates as "yyyy-MM-dd"
    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    // country-state-city: for POST not for PUT so we declared states dynamically for POST and PUT 
    // const [selectedCountry, setSelectedCountry] = useState(null);
    //const [selectedState, setSelectedState] = useState(null);
    //const [selectedCity, setSelectedCity] = useState(null);


    //useEffect will be trigerred whenever formik.values has value

    function handleSkip() {
        onActivationKeyChild(childNextKey)
    }



    useEffect(() => {
        handleProgress();
    }, [formik.values, selectedCountry, selectedState, selectedCity]); // Ensure that the effect is triggered when form values change

    useEffect(() => {
        if (showPutData?.visacheck) {
            formik.setFieldValue("visacheck", showPutData.visacheck);
        }
    }, [showPutData])

    //Country value setting for post and put*:
    useEffect(() => {
        if (showPutData) {
            setIsPutRequest(true);
        }
    }, [showPutData]);
    return (

        <Accordion.Item eventKey="2">
            <Accordion.Header><i className="bi bi-info-circle-fill me-1"></i><span style={{ fontWeight: '700' }}>ID CARD DETAILS</span><ProgressBarWithLabel progressValue={progress} /></Accordion.Header>
            <Accordion.Body>
                <Container >
                    {/* <p>{activationKey}</p> */}
                    <Form style={{ paddingRight: '60px' }} onSubmit={formik.handleSubmit} >
                        <Row>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="aadharNo"
                                        type="text"
                                        placeholder="aadharno"
                                        name="aadharNo"
                                        ref={aadharno1}
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
                                        ref={panno1}
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
                                        placeholder="passno"
                                        name="passportNo"
                                        ref={passno1}
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
                                        placeholder="passexp"
                                        name="passportExpDate"
                                        ref={passexp1}
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
                                        ref={birth1}
                                        value={formik.values.birthCertificate} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.birthCertificate && formik.errors.birthCertificate ? <span className='span'>{formik.errors.birthCertificate}</span> : null
                                    }
                                    <label htmlFor="birthCertificate" className='text-muted' style={{ fontSize: '13px' }}>BIRTH CERTIFICATE NO*</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col' style={{ textAlign: 'center' }}>
                                <label className='text-muted' htmlFor="battingpads">DO YOU HAVE VISA CARD</label>
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} onChange={(e) => { formik.handleChange(e) }}>
                                        <Form.Check
                                            inline
                                            label="Yes"
                                            name="visacheck"
                                            type="radio"
                                            id={`inline-${type}-Yes`}
                                            ref={visaYes}
                                            value="Yes"
                                            checked={formik.values.visacheck === "Yes"}
                                            onChange={(e) => {
                                                formik.setFieldValue('visacheck', e.target.value);
                                            }}
                                        />
                                        <Form.Check
                                            inline
                                            label="No"
                                            name="visacheck"
                                            type="radio"
                                            id={`inline-${type}-No`}
                                            // defaultChecked={true}
                                            ref={visaNo}
                                            value="No"
                                            checked={formik.values.visacheck === "No"}

                                        />
                                    </div>
                                ))}
                            </Col>

                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="staffVisaNo"
                                        type="text"
                                        placeholder="visano"
                                        name="visaNumber"
                                        ref={visaNumber}
                                        value={formik.values.visaNumber} onBlur={formik.handleBlur} onChange={formik.handleChange} disabled={formik.values.visacheck === 'No'}
                                    />
                                    {
                                        formik.touched.visaNumber && formik.errors.visaNumber ? <span className='span'>{formik.errors.visaNumber}</span> : null
                                    }
                                    <label htmlFor="staffVisaNo" className='text-muted' style={{ fontSize: '13px' }}>VISA NO</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="visaValidity"
                                        type="date"
                                        placeholder="visavalidity"
                                        name="visaValidity"
                                        ref={visaValid}
                                        value={formik.values.visaValidity}
                                        onBlur={formik.handleBlur}
                                        // min={new Date().toISOString().split('T')[0]}
                                        onChange={(e) => { formik.handleChange(e) }}

                                    />
                                    {
                                        formik.touched.visaValidity && formik.errors.visaValidity ? <span className='span'>{formik.errors.visaValidity}</span> : null
                                    }
                                    <label htmlFor="visaValidity" className='text-muted' style={{ fontSize: '13px' }}>VISA VALIDITY</label>
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
                            <>
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
                                    {console.log("value", selectedCountry)}
                                    <Select placeholder='country*' id='country' name='country'
                                        className="dynamicSelect" style={{ zIndex: 100, outline: 'none', border: 'none' }}
                                        options={Country.getAllCountries()} //filter 
                                        getOptionLabel={(options) => {

                                            return options["name"];
                                        }}
                                        getOptionValue={(options) => {
                                            console.log("options", options, typeof selectedCountry, selectedCountry)

                                            return options["name"];
                                        }}
                                        value={selectedCountry}
                                        onChange={(item) => {
                                            formik.setFieldValue("country", item.name);
                                            setSelectedCountry(item);
                                            console.log("item", item)
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
                            </>


                            <Col xs={12} lg={12} className='my-4 col'>
                                {previousClk && <Button variant="primary" className='me-1 mb-3 mx-1 previouss' style={{ width: "130px",marginTop:'6px' }} onClick={handlePreviousButton}>Previous</Button>}
                                {showSaveBtn && !previousClk && <Button type="submit" variant="success" className='me-1 mb-2 mx-1 ' style={{ width: "130px" }}>Save and Next</Button>}
                                {showClearBtn && <Button variant="warning" className='text-white mb-2 ' style={{ width: "130px" }} onClick={() => handleReset()}>CLEAR</Button>}
                                {!showSaveBtn && <Button variant="info" className='mx-1 updates' style={{ whiteSpace: 'nowrap', width: '130px', marginTop: '-8px' }} onClick={handleUpdate}>Update</Button>}
                                {(previousClk || showSkipBtn) && <Button variant="dark" className='skip ms-1' style={{ whiteSpace: 'nowrap', width: '130px', marginTop: '-8px' }} onClick={handleSkip}>Skip</Button>}
                            </Col>
                        </Row>

                    </Form>
                </Container>
            </Accordion.Body>
        </Accordion.Item>

    )
}

export default StaffIDCardDetails