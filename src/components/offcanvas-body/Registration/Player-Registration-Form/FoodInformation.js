import React, { useState } from 'react';
import './FoodInformation.css';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useRef } from 'react';

function FoodInformation({ activationKey, onActivationKeyChild, onPreviousActivationKey }) {
    //next btn:
    const [childNextKey, setChildNextKey] = useState("6");

    //Dynamic Radio btns:
    const [isFocused, setIsFocused] = useState(false);
    const [allergyFocused, setAllergyIsFocused] = useState(false);

    const handleFocusVeg = () => {
        setIsFocused(false);
    };

    const handleFocusNonVeg = () => {
        setIsFocused(true);

    };

    const allergyYes1 = () => {
        setAllergyIsFocused(true);
    }

    const allergyNo1 = () => {
        setAllergyIsFocused(false);
    }


    // reset form start: 
    const vegYes = useRef(false);
    const vegNo = useRef(false);
    const eggYes = useRef(false);
    const eggNo = useRef(false);
    // const meatYes = useRef(false);
    // const meatNo = useRef(false);
    const allergyYes = useRef(false);
    const allergyNo = useRef(false);
    const allergy1 = useRef("");
    //
    const seaFoodYes = useRef("");
    const seaFoodNo = useRef("");

    // for npm custom component dont use useRef instead use useState i.e for phone component
    function handleReset() {
        vegYes.current.checked = false;
        vegNo.current.checked = false;
        eggYes.current.checked = false;
        eggNo.current.checked = false;
        // meatYes.current.checked = false;
        // meatNo.current.checked = false;
        allergyYes.current.checked = false;
        allergyNo.current.checked = false;
        allergy1.current.value = "";
    }
    // reset form end: 

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('submitted');
        onActivationKeyChild(childNextKey)
    }

    const handlePreviousButton = () => {
        onPreviousActivationKey("4")
    }


    return (

        <Accordion.Item eventKey="5">
            <Accordion.Header><i className="bi bi-info-circle-fill me-1"></i><span style={{ fontWeight: '700' }}>FOOD INFORMATION</span></Accordion.Header>
            <Accordion.Body>
                <Container >
                    <Form style={{ paddingRight: '60px' }}>
                        <Row>
                            <Col md={6} style={{ whiteSpace: 'nowrap' }}>
                                <label className='text-muted me-2' htmlFor="foodtype">Allergy if any</label>
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} >
                                        <Form.Check style={{
                                            padding: '20px'
                                        }}
                                            inline
                                            label="Yes"
                                            name="allergy"
                                            type={type}
                                            id={`inline-${type}-yes`}
                                            ref={allergyYes}
                                            onFocus={allergyYes1}
                                            defaultChecked={true}
                                        />
                                        <Form.Check
                                            inline
                                            label="No"
                                            name="allergy"
                                            type={type}
                                            id={`inline-${type}-no`}
                                            ref={allergyNo}
                                            onFocus={allergyNo1}
                                        />

                                        {
                                            allergyFocused && (
                                                <div>
                                                    <Col >
                                                        <Form.Floating className="mb-2">
                                                            <Form.Control
                                                                id="allergy"
                                                                type="text"
                                                                placeholder="allergy"
                                                                ref={allergy1}
                                                            />
                                                            <label htmlFor="allergy" className='text-muted'>Allergy</label>

                                                        </Form.Floating>
                                                    </Col>
                                                </div>)

                                        }
                                    </div>
                                ))}
                            </Col>
                            <Col md={{ span: 5, offset: 1 }}>
                                <label className='text-muted' htmlFor="foodtype">Food Type</label>
                                {['radio'].map((type) => (
                                    <div key={`inline-${type}`} style={{ whiteSpace: 'nowrap' }}>
                                        <Form.Check style={{
                                            padding: '20px'
                                        }}
                                            inline
                                            label="Veg"
                                            name="foodtype"
                                            type={type}
                                            id={`inline-${type}-veg`}
                                            ref={vegYes}
                                            onFocus={handleFocusVeg}
                                            defaultChecked={true}
                                        />
                                        <Form.Check
                                            inline
                                            label="Non-Veg"
                                            name="foodtype"
                                            type={type}
                                            id={`inline-${type}-nonveg`}
                                            ref={vegNo}
                                            onFocus={handleFocusNonVeg}
                                        />
                                        {isFocused ? (
                                            <div>
                                                <Row>
                                                    <Col xs={12} lg={3} className='col col2' style={{ marginRight: '100px' }}>
                                                        <label className='text-muted' htmlFor="foodtype">Sea Food</label>
                                                        {['radio'].map((type) => (
                                                            <div key={`inline-${type}`} >
                                                                <Form.Check style={{
                                                                    padding: '20px'
                                                                }}
                                                                    inline
                                                                    label="Yes"
                                                                    name="seafood"
                                                                    type={type}
                                                                    id={`inline-${type}-yes`}
                                                                    ref={eggYes}
                                                                />
                                                                <Form.Check
                                                                    inline
                                                                    label="No"
                                                                    name="seafood"
                                                                    type={type}
                                                                    id={`inline-${type}-no`}
                                                                    defaultChecked={true}
                                                                    ref={eggNo}
                                                                />
                                                            </div>
                                                        ))}
                                                    </Col>

                                                    <Col xs={12} lg={3} className='col col2'>
                                                        <label className='text-muted' htmlFor="foodtype">Red Meat</label>
                                                        {['radio'].map((type) => (
                                                            <div key={`inline-${type}`} >
                                                                <Form.Check style={{
                                                                    padding: '20px'
                                                                }}
                                                                    inline
                                                                    label="Yes"
                                                                    name="redmeat"
                                                                    type={type}
                                                                    id={`inline-${type}-yes`}
                                                                    defaultChecked={true}
                                                                    ref={eggYes}
                                                                />
                                                                <Form.Check
                                                                    inline
                                                                    label="No"
                                                                    name="redmeat"
                                                                    type={type}
                                                                    id={`inline-${type}-no`}
                                                                    ref={eggNo}
                                                                />
                                                            </div>
                                                        ))}
                                                    </Col>

                                                </Row>
                                            </div>
                                        ) : (
                                            <div>
                                                <Col xs={12} lg={4} className='col'>
                                                    <label className='text-muted ' htmlFor="foodtype">Eggiterian</label>
                                                    {['radio'].map((type) => (
                                                        <div key={`inline-${type}`} style={{ whiteSpace: 'nowrap' }}>
                                                            <Form.Check style={{
                                                                padding: '20px'
                                                            }}
                                                                inline
                                                                label="Yes"
                                                                name="eggit"
                                                                type={type}
                                                                id={`inline-${type}-yes`}
                                                                ref={eggYes}

                                                            />
                                                            <Form.Check style={{ marginLeft: '10px' }}
                                                                inline
                                                                label="No"
                                                                name="eggit"
                                                                type={type}
                                                                id={`inline-${type}-no`}
                                                                defaultChecked={true}
                                                                ref={eggNo}
                                                            />
                                                        </div>
                                                    ))}
                                                </Col>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </Col>
                            <Col lg={12} className='my-4 col'>
                                <Button variant="primary" className='me-1 mb-2 mx-1 ' style={{ width: "130px" }} onClick={handlePreviousButton}>PREVIOUS</Button>
                                <Button variant="success" className='me-1 mb-2 mx-1 ' style={{ width: "130px" }} type='submit' onClick={(e) => handleSubmit(e)}>Save and Next</Button>
                                <Button variant="warning" className='text-white mb-2 mx-1 ' style={{ width: "130px" }} onClick={() => handleReset()}>CLEAR</Button>
                            </Col>
                        </Row>

                    </Form>
                </Container>
            </Accordion.Body>
        </Accordion.Item>

    )
}

export default FoodInformation