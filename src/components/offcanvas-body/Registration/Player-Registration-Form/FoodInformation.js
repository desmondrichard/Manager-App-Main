import React, { useEffect, useState } from 'react';
import './FoodInformation.css';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useRef } from 'react';
import ProgressBarWithLabel from '../ProgressBarWithLabel';
import axios from 'axios';
import { useFormik } from 'formik';

function StaffFoodInformation({ activationKey, onActivationKeyChild, onPreviousActivationKey, showPutData, showSaveBtn, showClearBtn, handlePrevClick, previousClk, showSkipBtn }) {
    const [childNextKey, setChildNextKey] = useState("6");

    //state for food type:
    const [foodType, setFoodType] = useState(null);
    const [egg, setEgg] = useState(null);
    const [seaFood, setSeaFood] = useState(null);
    const [redMeat, setReadMeat] = useState(null);
    const [allergyIf, setAllergyIf] = useState(null);

    const handleFoodTypeChange = (e) => {
        setFoodType(e.target.value);

    };

    const handleEggiterian = (e) => {
        setEgg(e.target.value);
    };

    const handleSeaFood = (e) => {
        setSeaFood(e.target.value);
    }

    const handleRedMeat = (e) => {
        setReadMeat(e.target.value);
    }

    const handleAllergyIf = (e) => {
        setAllergyIf(e.target.value)
        handleAllergyIfAnyChange(e)
    }

    //state for allergy field visibility
    const [showAllergyField, setShowAllergyField] = useState(false)

    const handleAllergyIfAnyChange = (e) => {
        setShowAllergyField(e.target.value === 'Yes')
    }


    useEffect(() => {
        console.log("foodType2", showPutData)
        setFoodType(showPutData.foodtype)
        setSeaFood(showPutData.seaFood)

        formik.setFieldValue("allergy", showPutData.allergy);
        if (showPutData.allergyIfAny === "Yes") {
            setShowAllergyField(true)
        }
        // let countA = 0;
        // if (showPutData.allergy) {
        //     countA += 1
        // }
        // if (showPutData.foodtype) {
        //     countA += 1
        // }
        // if (showPutData.allergyIfAny) {
        //     countA += 1
        // }
        // if (showPutData.redMeat) {
        //     countA += 1
        // }
        // if (showPutData.seaFood) {
        //     countA += 1
        // }
        //add logic based percentage
    }, [])

    //ref hook:
    const foodTypeRef = useRef(null);
    const seaFoodRef = useRef(null);
    const redMeatRef = useRef(null);
    const eggiterianRef = useRef(null);
    const allergyRef = useRef(null);

    function handleReset() {
        const foodTypeRadios = document.getElementsByName('foodtype');  //getElementsByName:must be same as db name else null error
        const seaFoodRadios = document.getElementsByName('seafood');
        const redMeatRadios = document.getElementsByName('redMeat');
        const eggiterianRadios = document.getElementsByName('eggiterian');
        const allergyRadios = document.getElementsByName('allergyIfAny');

        for (let i = 0; i < foodTypeRadios.length; i++) {
            foodTypeRadios[i].checked = false;
        }

        for (let i = 0; i < seaFoodRadios.length; i++) {
            seaFoodRadios[i].checked = false;
        }

        for (let i = 0; i < redMeatRadios.length; i++) {
            redMeatRadios[i].checked = false;
        }

        for (let i = 0; i < eggiterianRadios.length; i++) {
            eggiterianRadios[i].checked = false;
        }

        for (let i = 0; i < allergyRadios.length; i++) {
            allergyRadios[i].checked = false;
        }

        //
        setFoodType(null);
        setShowAllergyField(false);
        formik.resetForm();
        setProgress(0);
    }


    const handlePreviousButton = () => {
        onPreviousActivationKey("4")
        handlePrevClick(true)
        // handlePrevClick(false)
    }

    //Formik:
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            foodtype: '',
            eggiterian: '',
            seafood: '',
            redMeat: '',
            allergyIfAny: '',
            allergy: '',

        },
        onSubmit: values => {
            // alert('clicked next');
            const newValues = {
                'foodType': values.foodtype,
                'eggiterian': values.eggiterian,
                'seafood': values.seafood,
                'redMeat': values.redMeat,
                'allergyIfAny': values.allergyIfAny,
                'allergy': values.allergy
            };

            // Log the values variable
            console.log('Values11:', newValues);
            axios.post('https://localhost:7097/FoodInformationModel', newValues)
                .then(response => {
                    console.log(response.data);
                    onActivationKeyChild(childNextKey);
                    console.log("newvaluesFoodsuccess", newValues)

                })
                .catch(error => {
                    console.error(error.message);
                    console.log("newvaluesFoodfail", newValues)

                });
        }
    })

    // Log the values variable
    //   console.log('Values11:', newVal);
    //   onActivationKeyChild(childNextKey);

    // progress Bar for static fields:
    const [progress, setProgress] = useState(0);

    function handleProgress() {
        console.log("formikvalues1", formik.values)
        const result = countKeysWithNonEmptyValues(formik.values);
        console.log("result for formik values:", result)
        const totalFilledFields = result;
        console.log("totalFilledFields", totalFilledFields)

        //calc formula
        let newProgress = ((totalFilledFields / 5) * 100).toFixed();
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
                obj[key] !== '' &&
                obj[key] !== 0
            )
                //incremented count by 2(40%) if foodtype='veg' [or] AllergyIfAny='No':
                if ((key === 'foodtype' && obj[key] === 'veg') || (key === 'allergyIfAny' && obj[key] === 'No')) {
                    count += 2;
                } else {
                    count++;
                }

        }
        //To dynamically remove progress count and set eggiterian as empty if nonveg is selected:
        if (obj.foodtype === 'nonveg' && (obj.eggiterian === 'Yes' || obj.eggiterian === 'No')) {
            obj.eggiterian = "";
            count = count - 1;
        }
        if (obj.foodtype === 'veg' && (obj.seafood === 'Yes' || obj.seafood === 'No') && (obj.redMeat === 'Yes' || obj.redMeat === 'No')) {
            obj.seafood = "";
            obj.redMeat = "";
            count = count - 1;
        }

        console.log("count", count)
        return count;
    }

    function handleSkip() {
        onActivationKeyChild(childNextKey)
        handlePrevClick(true)
    }

    //update
    function handleUpdate() {
        const newFormikValues = {
            foodtype: formik.values.foodtype || showPutData.foodType,
            eggiterian: formik.values.eggiterian || showPutData.eggiterian,
            seafood: formik.values.seafood || showPutData.seafood,
            redMeat: formik.values.redMeat || showPutData.redMeat,
            allergyIfAny: formik.values.allergyIfAny || showPutData.allergyIfAny,
            allergy: formik.values.allergy || showPutData.allergy,

            
        };

        //
        if (formik.values.allergyIfAny === 'No') {
            newFormikValues.allergy = 'None';
        } else if (formik.values.allergyIfAny === 'Yes' && formik.values.allergy === '') {
            // Preserve existing allergy value if allergyIfAny is Yes but allergy field is empty
            formik.values.allergy = showPutData.allergy;
        }

        // Update redMeat field only if foodType is nonveg
        if (formik.values.foodtype === 'veg') {
            newFormikValues.redMeat = showPutData.redMeat;
        }

        //
        // formik.setFieldValue("foodtype", newFormikValues.foodtype);
        // formik.setFieldValue("eggiterian", newFormikValues.eggiterian);
        // formik.setFieldValue("seafood", newFormikValues.seafood);
        // formik.setFieldValue("redMeat", newFormikValues.redMeat);
        // formik.setFieldValue("allergyIfAny", newFormikValues.allergyIfAny);
        // formik.setFieldValue("allergy", newFormikValues.allergy);
        // Update formik values with the new values
        formik.setValues({
            ...formik.values,
            ...formik.values.allergyIfAny === 'No' ? { allergy: 'None' } : {},
            ...formik.values.foodtype === 'veg' ? { redMeat: newFormikValues.redMeat } : {},
            ...formik.values.allergyIfAny === 'Yes' && formik.values.allergy === '' ? { allergy: showPutData.allergy } : {},
        });

        axios.put(`https://localhost:7097/FoodInformationModel/${showPutData.alldataplayerId}`, formik.values, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (response.status === 200) {
                    console.log("UpdationData: ", response.data);
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

    useEffect(() => {
        handleProgress();
    }, [formik.values])

    return (

        <Accordion.Item eventKey="5">
            <Accordion.Header><i className="bi bi-info-circle-fill me-1"></i><span style={{ fontWeight: '700' }}>FOOD INFORMATION</span><ProgressBarWithLabel progressValue={progress} /></Accordion.Header>
            <Accordion.Body>
                <Container >
                    <Form style={{ paddingRight: '60px' }} onSubmit={formik.handleSubmit}>
                        <Row>
                            <Col xs={12} md={6} style={{ marginRight: '50px' }}>
                                <Col xs={12} className='inlineText'>
                                    <label htmlFor='foodType'>Food Type<br /><br />
                                        <div onChange={(e) => { formik.handleChange(e) }}>
                                            <Form.Check type='radio' id={`foodTypeVeg`} name='foodtype' label='Veg' value='veg' inline onChange={handleFoodTypeChange} ref={foodTypeRef} checked={foodType === 'veg'} />
                                            {console.log("foodType", foodType)}
                                            <Form.Check type='radio' id={`foodTypeNonVeg`} name='foodtype' label='Non-Veg' value='nonveg' inline onChange={handleFoodTypeChange} ref={foodTypeRef} checked={foodType === 'nonveg'} />
                                        </div>
                                    </label>

                                </Col>

                                {foodType === 'veg' && (
                                    <>

                                        <Col xs={12} className='inlineText mt-4'>
                                            <label htmlFor='eggiterian'>Eggiterian<br /><br />
                                                <div onChange={(e) => { formik.handleChange(e) }}>
                                                    <Form.Check type='radio' id={`eggiterianYes`} name='eggiterian' label='Yes' value='Yes' inline onChange={handleEggiterian} ref={eggiterianRef} checked={showPutData.eggIterian === 'Yes' || egg === 'Yes'} />
                                                    <Form.Check type='radio' id={`eggiterianNo`} name='eggiterian' label='No' value='No' inline onChange={handleEggiterian} ref={eggiterianRef} checked={showPutData.eggIterian === 'No' || egg === 'No'} />
                                                </div>
                                            </label>
                                        </Col>


                                        <Col xs={12} className='inlineText mt-4 d-none'>
                                            <label htmlFor='seaFood'>Sea Food<br /><br />
                                                <div onChange={(e) => { formik.handleChange(e) }}>
                                                    <Form.Check type='radio' id={`seaFoodVeg`} name='seafood' label='Yes' value='Yes' inline onChange={handleSeaFood} ref={seaFoodRef} checked={showPutData.seafood === 'Yes' || seaFood === 'Yes'} />
                                                    <Form.Check type='radio' id={`seaFoodNonVeg`} name='seafood' label='No' value='No' inline onChange={handleSeaFood} ref={seaFoodRef} checked={showPutData.seafood === 'No' || seaFood === 'No'} />
                                                </div>
                                            </label>
                                        </Col>


                                        <Col xs={12} className='inlineText mt-4 d-none'>
                                            <label htmlFor='redMeat'>Red Meat<br /><br />
                                                <div onChange={(e) => { formik.handleChange(e) }}>
                                                    <Form.Check type='radio' id={`redMeatYes`} name='redMeat' label='Yes' value='Yes' inline onChange={handleRedMeat} ref={redMeatRef} checked={showPutData.redMeat === 'Yes' || redMeat === 'Yes'} />
                                                    <Form.Check type='radio' id={`redMeatNo`} name='redMeat' label='No' value='No' inline onChange={handleRedMeat} ref={redMeatRef} checked={showPutData.redMeat === 'No' || redMeat === 'No'} />
                                                </div>
                                            </label>
                                        </Col>

                                    </>
                                )}
                                {foodType === 'nonveg' && (
                                    <>
                                        <Col xs={12} className='inlineText mt-4'>
                                            <label htmlFor='seaFood'>Sea Food<br /><br />
                                                <div onChange={(e) => { formik.handleChange(e) }}>
                                                    <Form.Check type='radio' id={`seaFoodVeg`} name='seafood' label='Yes' value='Yes' inline onChange={handleSeaFood} ref={seaFoodRef} checked={showPutData.seafood === 'Yes' || seaFood === 'Yes'} />
                                                    <Form.Check type='radio' id={`seaFoodNonVeg`} name='seafood' label='No' value='No' inline onChange={handleSeaFood} ref={seaFoodRef} checked={showPutData.seafood === 'No' || seaFood === 'No'} />
                                                </div>
                                            </label>
                                        </Col>

                                        <Col xs={12} className='inlineText mt-4'>
                                            <label htmlFor='redMeat'>Red Meat<br /><br />
                                                <div onChange={(e) => { formik.handleChange(e) }}>
                                                    <Form.Check type='radio' id={`redMeatYes`} name='redMeat' label='Yes' value='Yes' inline onChange={handleRedMeat} ref={redMeatRef} checked={showPutData.redMeat === 'Yes' || redMeat === 'Yes'} />
                                                    <Form.Check type='radio' id={`redMeatNo`} name='redMeat' label='No' value='No' inline onChange={handleRedMeat} ref={redMeatRef} checked={showPutData.redMeat === 'No' || redMeat === 'No'} />
                                                </div>
                                            </label>
                                        </Col>

                                        <Col xs={12} className='inlineText mt-4 d-none'>
                                            <label htmlFor='eggiterian'>Eggiterian<br /><br />
                                                <div onChange={(e) => { formik.handleChange(e) }}>
                                                    <Form.Check type='radio' id={`eggiterianYes`} name='eggiterian' label='Yes' value='Yes' inline onChange={handleEggiterian} ref={eggiterianRef} checked={showPutData.eggiterian === 'Yes' || egg === 'Yes'} />
                                                    <Form.Check type='radio' id={`eggiterianNo`} name='eggiterian' label='No' value='No' inline onChange={handleEggiterian} ref={eggiterianRef} checked={showPutData.eggiterian === 'No' || egg === 'No'} />
                                                </div>
                                            </label>
                                        </Col>
                                    </>
                                )}
                            </Col>
                            {/*Column Splitting: */}
                            <Col xs={12} md={4}>
                                <Col xs={12} className='inlineText allergyMargin'>
                                    <label htmlFor='allergyIfany'>Allergy If Any<br /><br />
                                        <div onChange={(e) => { formik.handleChange(e) }}>
                                            <Form.Check type='radio' id={`allergyIfanyY`} name='allergyIfAny' label='Yes' value='Yes' inline onChange={handleAllergyIf} ref={allergyRef} checked={showPutData.allergyIfAny === 'Yes' || allergyIf === 'Yes'} />
                                            <Form.Check type='radio' id={`allergyIfanyN`} name='allergyIfAny' label='No' value='No' inline onChange={handleAllergyIf} ref={allergyRef} checked={showPutData.allergyIfAny === 'No' || allergyIf === 'No'} />
                                        </div>
                                    </label>
                                </Col>
                                {console.log("showAllergyField", showAllergyField)}
                                {showAllergyField && (
                                    <Col xs={12} className='inlineText'>
                                        <Form.Group as={Col} controlId="formText" >
                                            {/* formik.get or create state and set onchange*/}
                                            <Form.Control type="text" placeholder="Allergy" name="allergy" onChange={(e) => { formik.handleChange(e) }} value={formik.values.allergy || ''} />
                                        </Form.Group>
                                    </Col>
                                )}
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12} className='my-4 col'>
                                {console.log("previousClkBtn", previousClk, showSkipBtn)}
                                {previousClk && <Button variant="primary" className='me-1 mx-1 previousP' style={{ width: "130px", marginTop: '-7px' }} onClick={handlePreviousButton}>Previous</Button>}
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

export default StaffFoodInformation