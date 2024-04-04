import React, { useEffect, useState } from 'react';
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
import ProgressBarWithLabel from '../ProgressBarWithLabel';
import axios from 'axios';

const validate = values => {
    const errors = {};

    if (!values.jerseyName) {
        errors.jerseyName = "*Required";
    }
    else if (!/^[a-zA-Z]{2,10}$/.test(values.jerseyName)) {
        errors.jerseyName = "Jersey Name should be between 2 to 10 characters long or only letters allowed";
    }

    if (!values.jerseyNo) {
        errors.jerseyNo = "*Required";
    } else if (!/^\d{1,3}([.,]{0,2})?$/.test(values.jerseyNo)) {
        errors.jerseyNo = "enter a valid jersey number";
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


    // if (!/^\d{0,3}([.,]{0,2})?$/.test(values.familyJerseyNo)) {
    //     errors.familyJerseyNo = "enter a valid jersey number";
    // }
    return errors
}


function KittingDetailsForm({ activationKey, onActivationKeyChild, onPreviousActivationKey, showSaveBtn, showPutData, showClearBtn }) {
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
    // const qty = useRef("");


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

        if (bowlerA?.current) {
            bowlerA.current.checked = false;
        }
        if (bowlerB?.current) {
            bowlerB.current.checked = false;

        }

        setDynamicFieldsClear(count => count + 1)
        formik.resetForm();
        setProgress(0);

    }


    // reset form end: 
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            jerseyName: showPutData?.jerseyName || '',
            jerseyNo: showPutData?.jerseyNo || '',
            jerseySize: showPutData?.jerseySize || '',
            trouserSize: showPutData?.trouserSize || '',
            trouserLength: showPutData?.trouserLength || '',
            shortsSize: showPutData?.shortsSize || '',
            trackSuit: showPutData?.trackSuit || '',
            helmet: showPutData?.helmet || '',
            travelPolo: showPutData?.travelPolo || '',
            familyJerseyNo: showPutData?.familyJerseyNo || ''

        },
        validate,
        onSubmit: (values, { setSubmitting }) => {
            const newValues = { ...values, ...dynamicValues };
            axios.post('https://localhost:7097/playerkittingModel', values)
                .then(response => {
                    console.log(response.data);
                    onActivationKeyChild(childNextKey);
                    console.log("newvalues", newValues)
                    setSubmitting(false);
                })
                .catch(error => {
                    console.error(error.message);
                    console.log("newvalues", newValues);
                    setSubmitting(false);
                });
        }
    });

    //getting dynamicfield values here:
    const [dynamicValues, setDynamicValues] = useState({});
    function handleDataUpdate(dynamicValues) {
        console.log("Data", dynamicValues)
        setDynamicValues(dynamicValues)
    }

    // alert('clicked next');
    // onActivationKeyChild(childNextKey);
    // console.log('values',values)

    const handlePreviousButton = () => {
        onPreviousActivationKey("1")
    }

    // progress Bar for static fields:
    const [progress, setProgress] = useState(0);
    function handleProgress() {
        console.log("formik values1", formik.values)
        const result = countKeysWithNonEmptyValues(formik.values);
        console.log("result for formik values:", result)
        const totalFilledFields = result;

        //calc formula
        let newProgress = ((totalFilledFields / 22) * 100).toFixed();
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

    //update Method:
    function handleUpdate() {

        axios.put(`https://localhost:7097/kittingModel/${showPutData.alldataplayerId}`, formik.values, {
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

    //clearing DynamicFields:
    const [dynamicFieldsClear, setDynamicFieldsClear] = useState(0);

    useEffect(() => {
        handleProgress();
    }, [formik.values])

    return (

        <Accordion.Item eventKey="2">
            <Accordion.Header><i className="bi bi-info-circle-fill me-1"></i><span style={{ fontWeight: '700' }}>KITTING DETAILS</span><ProgressBarWithLabel progressValue={progress} /></Accordion.Header>
            <Accordion.Body>
                <Container >
                    <Form style={{ paddingRight: '60px' }} onSubmit={formik.handleSubmit}>
                        <Row>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="jerseyName"
                                        type="text"
                                        placeholder="JerseyName"
                                        name="jerseyName"
                                        ref={JerseyNameReset}
                                        value={formik.values.jerseyName} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.jerseyName && formik.errors.jerseyName ? <span className='span'>{formik.errors.jerseyName}</span> : null
                                    }
                                    <label htmlFor="jerseyName" className='text-muted'>Name on Jersey*</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <Form.Floating className="mb-2">
                                    <Form.Control
                                        id="jerseyNo"
                                        type="text"
                                        // min="0" max="999"
                                        placeholder="JerseyNo"
                                        name="jerseyNo"
                                        ref={JerseyNoReset}
                                        value={formik.values.jerseyNo} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    />
                                    {
                                        formik.touched.jerseyNo && formik.errors.jerseyNo ? <span className='span'>{formik.errors.jerseyNo}</span> : null
                                    }
                                    <label htmlFor="jerseyNo" className='text-muted'>Jersey No*</label>
                                </Form.Floating>
                            </Col>
                            <Col xs={12} lg={4} className='col'>
                                <FloatingLabel className='mb-2'
                                    controlId="jerseySize"
                                    label="Jersey Size*"
                                    name="jerseySize"

                                >

                                    <Form.Select aria-label="jerseySize" ref={jerseysizeReset}
                                        value={formik.values.jerseySize} onBlur={formik.handleBlur} onChange={(e) => formik.setFieldValue('jerseySize', e.target.value)}

                                    >
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

                                >
                                    <Form.Select aria-label="trouserSize" ref={trowsersizeReset}
                                        value={formik.values.trouserSize} onBlur={formik.handleBlur} onChange={(e) => formik.setFieldValue('trouserSize', e.target.value)}

                                    >
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

                                >
                                    <Form.Select aria-label="shortsSize" ref={shortssizeReset}
                                        value={formik.values.shortsSize} onBlur={formik.handleBlur} onChange={(e) => formik.setFieldValue('shortsSize', e.target.value)}

                                    >
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

                                >
                                    <Form.Select aria-label="trackSuit" ref={tracksuitReset}
                                        value={formik.values.trackSuit} onBlur={formik.handleBlur} onChange={(e) => formik.setFieldValue('trackSuit', e.target.value)}

                                    >
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

                                >
                                    <Form.Select aria-label="helmet" ref={circkethelmetReset}
                                        value={formik.values.helmet} onBlur={formik.handleBlur} onChange={(e) => formik.setFieldValue('helmet', e.target.value)}

                                    >
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

                                >
                                    <Form.Select aria-label="travelPolo" ref={travelpoloReset}
                                        value={formik.values.travelPolo} onBlur={formik.handleBlur} onChange={(e) => formik.setFieldValue('travelPolo', e.target.value)}

                                    >
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

                        {/* Row 1 */}
                        <Row>
                            {/* Dynamic Form: */}
                            {/* <Col xs={12} lg={{ span: 12 }} className='col'>
                                <DynamicFields onDataUpdate={handleDataUpdate} isClear={dynamicFieldsClear} />
                            </Col> */}

                            {/* Field:1 */}
                            <Col md={9} xl={4} className='mt-3'>
                                <label className='text-muted' htmlFor="battingPads">BATTING PADS</label>
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3" style={{ whiteSpace: 'nowrap' }} onChange={(e) => { formik.handleChange(e) }}>
                                        <Form.Check className='mt-3'
                                            inline
                                            label="Provided"
                                            name="battingPads"
                                            type={type}
                                            // checked={formik.values.battingStyle === 'leftHanded'}
                                            id={`inline-${type}-Provided`}
                                            value='Provided'
                                        />
                                        <Form.Check
                                            inline
                                            label="Not Provided"
                                            name="battingPads"
                                            type={type}
                                            id={`inline-${type}-NotProvided`}
                                            // checked={formik.values.battingStyle === 'rightHanded'}
                                            // defaultChecked={true}
                                            value="NotProvided"
                                        />
                                    </div>
                                ))}
                            </Col>
                            <Col md={{ span: 1, offset: 2 }} xl={{ span: 1, offset: 1 }} className='mt-3'>
                                <Form.Label style={{ color: '#6F7275' }}>QTY</Form.Label>
                                <Form.Control
                                    type="number"
                                    name='battinpadqty'
                                    style={{ width: '80px' }}
                                    min="0"
                                />
                            </Col>

                            {/* Field:2 */}
                            <Col md={9} xl={{ span: 3, offset: 1 }} className='mt-3'>
                                <label className='text-muted' htmlFor="battingPads">BATTING GLOVES</label>
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3" style={{ whiteSpace: 'nowrap' }} onChange={(e) => { formik.handleChange(e) }}>
                                        <Form.Check className='mt-3'
                                            inline
                                            label="Provided"
                                            name="battingGloves"
                                            type={type}
                                            // checked={formik.values.battingStyle === 'leftHanded'}
                                            id={`inline-${type}-Provided`}
                                            value='Provided'
                                        />
                                        <Form.Check
                                            inline
                                            label="Not Provided"
                                            name="battingGloves"
                                            type={type}
                                            id={`inline-${type}-NotProvided`}
                                            // checked={formik.values.battingStyle === 'rightHanded'}
                                            // defaultChecked={true}
                                            value="NotProvided"
                                        />
                                    </div>
                                ))}
                            </Col>
                            <Col md={{ span: 1, offset: 2 }} xl={{ span: 1, offset: 1 }} className='mt-3'>
                                <Form.Label style={{ color: '#6F7275' }}>QTY</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="battinggloveqty"
                                    style={{ width: '80px' }}
                                    min="0"
                                />
                            </Col>
                        </Row>
                        {/* Row 2 */}
                        <Row>
                            {/* Field:1 */}
                            <Col md={9} xl={4} className='mt-3'>
                                <label className='text-muted' htmlFor="battingPads" style={{ whiteSpace: 'nowrap' }}>WICKETKEEPING GLOVES</label>
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3" style={{ whiteSpace: 'nowrap' }} onChange={(e) => { formik.handleChange(e) }}>
                                        <Form.Check className='mt-3'
                                            inline
                                            label="Provided"
                                            name="wkGloves"
                                            type={type}
                                            // checked={formik.values.battingStyle === 'leftHanded'}
                                            id={`inline-${type}-Provided`}
                                            value='Provided'
                                        />
                                        <Form.Check
                                            inline
                                            label="Not Provided"
                                            name="wkGloves"
                                            type={type}
                                            id={`inline-${type}-NotProvided`}
                                            // checked={formik.values.battingStyle === 'rightHanded'}
                                            // defaultChecked={true}
                                            value="NotProvided"
                                        />
                                    </div>
                                ))}
                            </Col>
                            <Col md={{ span: 1, offset: 2 }} xl={{ span: 1, offset: 1 }} className='mt-3'>
                                <Form.Label style={{ color: '#6F7275' }}>QTY</Form.Label>
                                <Form.Control
                                    type="number"
                                    name='wkGlovesqty'
                                    style={{ width: '80px' }}
                                    min="0"
                                />
                            </Col>

                            {/* Field:2 */}
                            <Col md={9} xl={{ span: 3, offset: 1 }} className='mt-3'>
                                <label className='text-muted' htmlFor="battingPads" style={{ whiteSpace: 'nowrap' }}>WICKETKEEPING PADS</label>
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3" style={{ whiteSpace: 'nowrap' }} onChange={(e) => { formik.handleChange(e) }}>
                                        <Form.Check className='mt-3'
                                            inline
                                            label="Provided"
                                            name="wkPad"
                                            type={type}
                                            // checked={formik.values.battingStyle === 'leftHanded'}
                                            id={`inline-${type}-Provided`}
                                            value='Provided'
                                        />
                                        <Form.Check
                                            inline
                                            label="Not Provided"
                                            name="wkPad"
                                            type={type}
                                            id={`inline-${type}-NotProvided`}
                                            // checked={formik.values.battingStyle === 'rightHanded'}
                                            // defaultChecked={true}
                                            value="NotProvided"
                                        />
                                    </div>
                                ))}
                            </Col>
                            <Col md={{ span: 1, offset: 2 }} xl={{ span: 1, offset: 1 }} className='mt-3'>
                                <Form.Label style={{ color: '#6F7275' }}>QTY</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="wkpadqty"
                                    style={{ width: '80px' }}
                                    min="0"
                                />
                            </Col>
                        </Row>
                        {/* Row 3 */}
                        <Row>
                            {/* Field:1 */}
                            <Col md={9} xl={4} className='mt-3'>
                                <label className='text-muted' htmlFor="battingPads">SHOULDER BAG</label>
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3" style={{ whiteSpace: 'nowrap' }} onChange={(e) => { formik.handleChange(e) }}>
                                        <Form.Check className='mt-3'
                                            inline
                                            label="Provided"
                                            name="shoulderBag"
                                            type={type}
                                            // checked={formik.values.battingStyle === 'leftHanded'}
                                            id={`inline-${type}-Provided`}
                                            value='Provided'
                                        />
                                        <Form.Check
                                            inline
                                            label="Not Provided"
                                            name="shoulderBag"
                                            type={type}
                                            id={`inline-${type}-NotProvided`}
                                            // checked={formik.values.battingStyle === 'rightHanded'}
                                            // defaultChecked={true}
                                            value="NotProvided"
                                        />
                                    </div>
                                ))}
                            </Col>
                            <Col md={{ span: 1, offset: 2 }} xl={{ span: 1, offset: 1 }} className='mt-3'>
                                <Form.Label style={{ color: '#6F7275' }}>QTY</Form.Label>
                                <Form.Control
                                    type="number"
                                    name='shoulderbagqty'
                                    style={{ width: '80px' }}
                                    min="0"
                                />
                            </Col>

                            {/* Field:2 */}
                            <Col md={9} xl={{ span: 3, offset: 1 }} className='mt-3'>
                                <label className='text-muted' htmlFor="battingPads">SHOE BAG</label>
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3" style={{ whiteSpace: 'nowrap' }} onChange={(e) => { formik.handleChange(e) }}>
                                        <Form.Check className='mt-3'
                                            inline
                                            label="Provided"
                                            name="shoeBag"
                                            type={type}
                                            // checked={formik.values.battingStyle === 'leftHanded'}
                                            id={`inline-${type}-Provided`}
                                            value='Provided'
                                        />
                                        <Form.Check
                                            inline
                                            label="Not Provided"
                                            name="shoeBag"
                                            type={type}
                                            id={`inline-${type}-NotProvided`}
                                            // checked={formik.values.battingStyle === 'rightHanded'}
                                            // defaultChecked={true}
                                            value="NotProvided"
                                        />
                                    </div>
                                ))}
                            </Col>
                            <Col md={{ span: 1, offset: 2 }} xl={{ span: 1, offset: 1 }} className='mt-3'>
                                <Form.Label style={{ color: '#6F7275' }}>QTY</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="shoebagqty"
                                    style={{ width: '80px' }}
                                    min="0"
                                />
                            </Col>
                        </Row>
                        {/* Row 4 */}
                        <Row>
                            {/* Field:1 */}
                            <Col md={9} xl={4} className='mt-3'>
                                <label className='text-muted' htmlFor="battingPads">PLAYER KIT BAG</label>
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3" style={{ whiteSpace: 'nowrap' }} onChange={(e) => { formik.handleChange(e) }}>
                                        <Form.Check className='mt-3'
                                            inline
                                            label="Provided"
                                            name="playingkitBag"
                                            type={type}
                                            // checked={formik.values.battingStyle === 'leftHanded'}
                                            id={`inline-${type}-Provided`}
                                            value='Provided'
                                        />
                                        <Form.Check
                                            inline
                                            label="Not Provided"
                                            name="playingkitBag"
                                            type={type}
                                            id={`inline-${type}-NotProvided`}
                                            // checked={formik.values.battingStyle === 'rightHanded'}
                                            // defaultChecked={true}
                                            value="NotProvided"
                                        />
                                    </div>
                                ))}
                            </Col>
                            <Col md={{ span: 1, offset: 2 }} xl={{ span: 1, offset: 1 }} className='mt-3'>
                                <Form.Label style={{ color: '#6F7275' }}>QTY</Form.Label>
                                <Form.Control
                                    type="number"
                                    name='playerbagqty'
                                    style={{ width: '80px' }}
                                    min="0"
                                />
                            </Col>

                            {/* Field:2 */}
                            <Col md={9} xl={{ span: 3, offset: 1 }} className='mt-3'>
                                <label className='text-muted' htmlFor="battingPads">PRACTICE JERSEY</label>
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3" style={{ whiteSpace: 'nowrap' }} onChange={(e) => { formik.handleChange(e) }}>
                                        <Form.Check className='mt-3'
                                            inline
                                            label="Provided"
                                            name="practicsJersey"
                                            type={type}
                                            // checked={formik.values.battingStyle === 'leftHanded'}
                                            id={`inline-${type}-Provided`}
                                            value='Provided'
                                        />
                                        <Form.Check
                                            inline
                                            label="Not Provided"
                                            name="practicsJersey"
                                            type={type}
                                            id={`inline-${type}-NotProvided`}
                                            // checked={formik.values.battingStyle === 'rightHanded'}
                                            // defaultChecked={true}
                                            value="NotProvided"
                                        />
                                    </div>
                                ))}
                            </Col>
                            <Col md={{ span: 1, offset: 2 }} xl={{ span: 1, offset: 1 }} className='mt-3'>
                                <Form.Label style={{ color: '#6F7275' }}>QTY</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="practisejerseyqty"
                                    style={{ width: '80px' }}
                                    min="0"
                                />
                            </Col>
                        </Row>
                        {/* Row 5 */}
                        <Row>
                            {/* Field:1 */}
                            <Col md={9} xl={4} className='mt-3'>
                                <label className='text-muted' htmlFor="battingPads">FAMILY JERSEY</label>
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3" style={{ whiteSpace: 'nowrap' }} onChange={(e) => { formik.handleChange(e) }}>
                                        <Form.Check className='mt-3'
                                            inline
                                            label="Provided"
                                            name="familyJersey"
                                            type={type}
                                            // checked={formik.values.battingStyle === 'leftHanded'}
                                            id={`inline-${type}-Provided`}
                                            value='Provided'
                                        />
                                        <Form.Check
                                            inline
                                            label="Not Provided"
                                            name="familyJersey"
                                            type={type}
                                            id={`inline-${type}-NotProvided`}
                                            // checked={formik.values.battingStyle === 'rightHanded'}
                                            // defaultChecked={true}
                                            value="NotProvided"
                                        />
                                    </div>
                                ))}
                            </Col>
                            <Col md={{ span: 1, offset: 2 }} xl={{ span: 1, offset: 1 }} className='mt-3'>
                                <Form.Label style={{ color: '#6F7275' }}>QTY</Form.Label>
                                <Form.Control
                                    type="number"
                                    name='familyjerseyqty'
                                    style={{ width: '80px' }}
                                    min="0"
                                />
                            </Col>

                            {/* Field:2 */}
                            <Col md={9} xl={{ span: 3, offset: 1 }} className='mt-3'>
                                <label className='text-muted' htmlFor="battingPads">ARM GUARD</label>
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3" style={{ whiteSpace: 'nowrap' }} onChange={(e) => { formik.handleChange(e) }}>
                                        <Form.Check className='mt-3'
                                            inline
                                            label="Provided"
                                            name="armGuard"
                                            type={type}
                                            // checked={formik.values.battingStyle === 'leftHanded'}
                                            id={`inline-${type}-Provided`}
                                            value='Provided'
                                        />
                                        <Form.Check
                                            inline
                                            label="Not Provided"
                                            name="armGuard"
                                            type={type}
                                            id={`inline-${type}-NotProvided`}
                                            // checked={formik.values.battingStyle === 'rightHanded'}
                                            // defaultChecked={true}
                                            value="NotProvided"
                                        />
                                    </div>
                                ))}
                            </Col>
                            <Col md={{ span: 1, offset: 2 }} xl={{ span: 1, offset: 1 }} className='mt-3'>
                                <Form.Label style={{ color: '#6F7275' }}>QTY</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="armguardyqty"
                                    style={{ width: '80px' }}
                                    min="0"
                                />
                            </Col>
                        </Row>
                        {/* Row 6 */}
                        <Row>
                            {/* Field:1 */}
                            <Col md={9} xl={4} className='mt-3'>
                                <label className='text-muted' htmlFor="battingPads">THIGH GUARD</label>
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3" style={{ whiteSpace: 'nowrap' }} onChange={(e) => { formik.handleChange(e) }}>
                                        <Form.Check className='mt-3'
                                            inline
                                            label="Provided"
                                            name="thighGaurad"
                                            type={type}
                                            // checked={formik.values.battingStyle === 'leftHanded'}
                                            id={`inline-${type}-Provided`}
                                            value='Provided'
                                        />
                                        <Form.Check
                                            inline
                                            label="Not Provided"
                                            name="thighGaurad"
                                            type={type}
                                            id={`inline-${type}-NotProvided`}
                                            // checked={formik.values.battingStyle === 'rightHanded'}
                                            // defaultChecked={true}
                                            value="NotProvided"
                                        />
                                    </div>
                                ))}
                            </Col>
                            <Col md={{ span: 1, offset: 2 }} xl={{ span: 1, offset: 1 }} className='mt-3'>
                                <Form.Label style={{ color: '#6F7275' }}>QTY</Form.Label>
                                <Form.Control
                                    type="number"
                                    name='thighguardyqty'
                                    style={{ width: '80px' }}
                                    min="0"
                                />
                            </Col>

                            {/* Field:2 */}
                            <Col md={9} xl={{ span: 3, offset: 1 }} className='mt-3'>
                                <label className='text-muted' htmlFor="battingPads">ABDOMINAL GUARD</label>
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} className="mb-3" style={{ whiteSpace: 'nowrap' }} onChange={(e) => { formik.handleChange(e) }}>
                                        <Form.Check className='mt-3'
                                            inline
                                            label="Provided"
                                            name="abdominalGaurad"
                                            type={type}
                                            // checked={formik.values.battingStyle === 'leftHanded'}
                                            id={`inline-${type}-Provided`}
                                            value='Provided'
                                        />
                                        <Form.Check
                                            inline
                                            label="Not Provided"
                                            name="abdominalGaurad"
                                            type={type}
                                            id={`inline-${type}-NotProvided`}
                                            // checked={formik.values.battingStyle === 'rightHanded'}
                                            // defaultChecked={true}
                                            value="NotProvided"
                                        />
                                    </div>
                                ))}
                            </Col>
                            <Col md={{ span: 1, offset: 2 }} xl={{ span: 1, offset: 1 }} className='mt-3'>
                                <Form.Label style={{ color: '#6F7275' }}>QTY</Form.Label>
                                <Form.Control
                                    type="number"
                                    name="abdominalguardyqty"
                                    style={{ width: '80px' }}
                                    min="0"
                                />
                            </Col>
                        </Row>


                        <Col lg={12} className='my-4 col'>
                            <Button variant="primary" className='me-1 mb-2 mx-1 ' style={{ width: "130px" }} onClick={handlePreviousButton}>PREVIOUS</Button>
                            {showSaveBtn && <Button variant="success" type="submit" value="submit" className='me-1 mb-2 mx-1 ' style={{ width: "130px" }}>Save and Next</Button>}
                            {showClearBtn && <Button variant="warning" type="button" className='text-white mb-2 ' style={{ width: "130px" }} onClick={() => handleReset()}>CLEAR</Button>}
                            {!showSaveBtn && <Button variant="info" className='mx-1 update' style={{ whiteSpace: 'nowrap', width: '130px', marginTop: '-8px' }} onClick={handleUpdate}>Update</Button>}
                            {!showSaveBtn && <Button variant="dark" className='skip' style={{ whiteSpace: 'nowrap', width: '130px', marginTop: '-8px' }} onClick={handleSkip}>Skip</Button>}

                        </Col>
                    </Form>
                </Container>
            </Accordion.Body>
        </Accordion.Item>

    )
}

export default KittingDetailsForm