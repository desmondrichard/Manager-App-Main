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
import { useFormik } from 'formik';
function FoodInformation({ activationKey, onActivationKeyChild, onPreviousActivationKey }) {
    //state for food type:
    const [foodType, setFoodType] = useState(null);

    const handleFoodTypeChange = (e) => {
        setFoodType(e.target.value);
    };

    //state for allergy field visibility
    const [showAllergyField, setShowAllergyField] = useState(false)

    const handleAllergyIfAnyChange = (e) => {
        setShowAllergyField(e.target.value === 'Yes')
    }


    //next btn:
    const [childNextKey, setChildNextKey] = useState("6");
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


    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     alert('submitted');
    //     onActivationKeyChild(childNextKey)
    // }

    const handlePreviousButton = () => {
        onPreviousActivationKey("4")
    }

    //Formik:
    const formik = useFormik({
        initialValues: {
            foodtype: '',
            eggiterian: '',
            seafood: '',
            redMeat: '',
            allergyIfAny: '',
            allergy: '',

        },
        onSubmit: values => {
            alert('clicked next');
            const newVal= {
                'foodtype': values.foodtype,
                'eggiterian': values.eggiterian,
                'seafood': values.seafood,
                'redMeat': values.redMeat,
                'allergyIfAny': values.allergyIfAny,
                'allergy': values.allergy
            };

            // Log the values variable
            console.log('Values11:', newVal);
            onActivationKeyChild(childNextKey);

        }
    })

    // progress Bar for static fields:
    const [progress, setProgress] = useState(0);

    function handleProgress() {
        console.log("formik values1", formik.values)
        const result = countKeysWithNonEmptyValues(formik.values);
        console.log("result for formik values:", result)
        const totalFilledFields = result;

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
                                            <Form.Check type='radio' id={`foodTypeVeg`} name='foodtype' label='Veg' value='veg' inline onChange={handleFoodTypeChange} ref={foodTypeRef} />
                                            <Form.Check type='radio' id={`foodTypeNonVeg`} name='foodtype' label='Non-Veg' value='nonveg' inline onChange={handleFoodTypeChange} ref={foodTypeRef} />
                                        </div>
                                    </label>

                                </Col>

                                {foodType === 'veg' && (
                                    <>

                                        <Col xs={12} className='inlineText mt-4'>
                                            <label htmlFor='eggiterian'>Eggiterian<br /><br />
                                                <div onChange={(e) => { formik.handleChange(e) }}>
                                                    <Form.Check type='radio' id={`eggiterianYes`} name='eggiterian' label='Yes' value='Yes' inline onChange={(e) => console.log(e.target.value)} ref={eggiterianRef} />
                                                    <Form.Check type='radio' id={`eggiterianNo`} name='eggiterian' label='No' value='No' inline onChange={(e) => console.log(e.target.value)} ref={eggiterianRef} />
                                                </div>
                                            </label>
                                        </Col>


                                        <Col xs={12} className='inlineText mt-4 d-none'>
                                            <label htmlFor='seaFood'>Sea Food<br /><br />
                                                <div onChange={(e) => { formik.handleChange(e) }}>
                                                    <Form.Check type='radio' id={`seaFoodVeg`} name='seafood' label='Yes' value='Yes' inline onChange={(e) => console.log(e.target.value)} ref={seaFoodRef} />
                                                    <Form.Check type='radio' id={`seaFoodNonVeg`} name='seafood' label='No' value='No' inline onChange={(e) => console.log(e.target.value)} ref={seaFoodRef} />
                                                </div>
                                            </label>
                                        </Col>


                                        <Col xs={12} className='inlineText mt-4 d-none'>
                                            <label htmlFor='redMeat'>Red Meat<br /><br />
                                                <div onChange={(e) => { formik.handleChange(e) }}>
                                                    <Form.Check type='radio' id={`redMeatYes`} name='redMeat' label='Yes' value='Yes' inline onChange={(e) => console.log(e.target.value)} ref={redMeatRef} />
                                                    <Form.Check type='radio' id={`redMeatNo`} name='redMeat' label='No' value='No' inline onChange={(e) => console.log(e.target.value)} ref={redMeatRef} />
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
                                                    <Form.Check type='radio' id={`seaFoodVeg`} name='seafood' label='Yes' value='Yes' inline onChange={(e) => console.log(e.target.value)} ref={seaFoodRef} />
                                                    <Form.Check type='radio' id={`seaFoodNonVeg`} name='seafood' label='No' value='No' inline onChange={(e) => console.log(e.target.value)} ref={seaFoodRef} />
                                                </div>
                                            </label>
                                        </Col>


                                        <Col xs={12} className='inlineText mt-4'>
                                            <label htmlFor='redMeat'>Red Meat<br /><br />
                                                <div onChange={(e) => { formik.handleChange(e) }}>
                                                    <Form.Check type='radio' id={`redMeatYes`} name='redMeat' label='Yes' value='Yes' inline onChange={(e) => console.log(e.target.value)} ref={redMeatRef} />
                                                    <Form.Check type='radio' id={`redMeatNo`} name='redMeat' label='No' value='No' inline onChange={(e) => console.log(e.target.value)} ref={redMeatRef} />
                                                </div>
                                            </label>
                                        </Col>


                                        <Col xs={12} className='inlineText mt-4 d-none'>
                                            <label htmlFor='eggiterian'>Eggiterian<br /><br />
                                                <div onChange={(e) => { formik.handleChange(e) }}>
                                                    <Form.Check type='radio' id={`eggiterianYes`} name='eggiterian' label='Yes' value='Yes' inline onChange={(e) => console.log(e.target.value)} ref={eggiterianRef} />
                                                    <Form.Check type='radio' id={`eggiterianNo`} name='eggiterian' label='No' value='No' inline onChange={(e) => console.log(e.target.value)} ref={eggiterianRef} />
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
                                            <Form.Check type='radio' id={`allergyIfanyY`} name='allergyIfAny' label='Yes' value='Yes' inline onChange={handleAllergyIfAnyChange} ref={allergyRef} />
                                            <Form.Check type='radio' id={`allergyIfanyN`} name='allergyIfAny' label='No' value='No' inline onChange={handleAllergyIfAnyChange} ref={allergyRef} />
                                        </div>
                                    </label>
                                </Col>

                                {showAllergyField && (
                                    <Col xs={12} className='inlineText'>
                                        <Form.Group as={Col} controlId="formText" >
                                            <Form.Control type="text" placeholder="Allergy" name="allergy" onChange={(e) => { formik.handleChange(e) }} />
                                        </Form.Group>
                                    </Col>
                                )}
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12} className='my-4 col'>
                                <Button variant="primary" className='me-1 mb-2 mx-1 ' style={{ width: "130px" }} onClick={handlePreviousButton}>PREVIOUS</Button>
                                <Button variant="success" className='me-1 mb-2 mx-1 ' style={{ width: "130px" }} type='submit'>Save and Next</Button>
                                <Button variant="warning" className='text-white mb-2 mx-1 ' style={{ width: "130px" }} onClick={handleReset}>CLEAR</Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </Accordion.Body >
        </Accordion.Item >

    )
}

export default FoodInformation