import React, { useState, useRef } from 'react'
import { Button, Form } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './DynamicFields.css'

const DynamicFields = () => {
    const [fields, setFields] = useState([])
    const [optionsLabel, setOptionsLabel] = useState('')
    const bowlerA = useRef(null)
    const bowlerB = useRef(null)

    const addFields = () => {
        const newFieldSet = {
            id: fields.length,
            radioLabel: optionsLabel || 'Options',
            radios: [
                { id: `radioA-${fields.length}`, label: 'Yes' },
                { id: `radioB-${fields.length}`, label: 'No' },
            ],
            text: { id: `text-${fields.length}`, placeholder: 'Enter text' },
        }
        //

        setFields([...fields, newFieldSet])
        setOptionsLabel('') // Clear input after adding fields

        //to find selected option:
        // const selectedOption = document.querySelector(`#optionsLabel select option:checked`);
        // const fieldName = selectedOption ? selectedOption.dataset.fieldName : '';
    }

    return (
        <div>
            <Form className='dynamicMargin'>
                {fields.map((field, index) => (
                    <div key={field.id} style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ marginBottom: '10px' }}>
                            <Row>
                                <Col sm={5} md={6} lg={4} className='dynamicRadioField'>
                                    <Form.Label>{field.radioLabel}</Form.Label>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <div style={{ Right: '10px' }}> <Form.Check type="radio" id={field.radios[0].id} label={field.radios[0].label} name={`radioGroup-${field.id}`} ref={field.radios[0]} value='provided' /> </div>
                                        <div> <Form.Check type="radio" id={field.radios[1].id} label={field.radios[1].label} name={`radioGroup-${field.id}`} ref={field.radios[1]} value='notprovided' /> </div>
                                    </div>
                                </Col>
                                <Col xs={12} sm={6} md={6} lg={6} className='dynamicQtyField'>
                                    <Form.Label style={{ color: '#6F7275' }}>QUANTITY</Form.Label>
                                    <Form.Control
                                        type="number"
                                        id={field.text.id}
                                        style={{ width: '80px' }}
                                        min="0"
                                        max="2"
                                        onChange={(e) => {
                                            if (e.target.value > 0) {
                                                field.radios[0].current.checked = true
                                            } else {
                                                field.radios[1].current.checked = true
                                            }
                                        }}
                                    />
                                </Col>
                            </Row>
                        </div>
                    </div>
                ))
                }
            </Form >
            <Form.Group controlId="optionsLabel">
                {/* <Form.Label>SELECT KIT AND QUANTITY</Form.Label> */}
                <Form.Control
                    as="select"
                    value={optionsLabel}
                    onChange={(e) => setOptionsLabel(e.target.value)}
                >
                    <option value="none">Select Kit</option>
                    <option value="BATTING PADS" data-field-name="battingPads" style={{ whiteSpace: 'nowrap' }}>BATTING PADS</option>
                    <option value="BATTING GLOVES" data-field-name="battingGloves" style={{ whiteSpace: 'nowrap' }}>BATTING GLOVES</option>
                    <option value="WK GLOVES" data-field-name="wkGloves" style={{ whiteSpace: 'nowrap' }}>WK GLOVES</option>
                    <option value="WK PAD" data-field-name="wkPad" style={{ whiteSpace: 'nowrap' }}>WK PAD</option>
                    <option value="SHOULDER BAG" data-field-name="shoulderBag" style={{ whiteSpace: 'nowrap' }}>SHOULDER BAG</option>
                    <option value="SHOE BAG" data-field-name="shoeBag" style={{ whiteSpace: 'nowrap' }}>SHOE BAG</option>
                    <option value="PLAYING KIT BAG" data-field-name="playingkitBag" style={{ whiteSpace: 'nowrap' }}>PLAYING KIT BAG</option>
                    <option value="PRACTICE JERSEY" data-field-name="practicsJersey" style={{ whiteSpace: 'nowrap' }}>PRACTICE JERSEY</option>
                    <option value="FAMILY JERSEY" data-field-name="familyJersey" style={{ whiteSpace: 'nowrap' }}>FAMILY JERSEY</option>
                    <option value="ARM GUARD" data-field-name="armGuard" style={{ whiteSpace: 'nowrap' }}>ARM GUARD</option>
                    <option value="THIGH GUARD" data-field-name="thighGaurad" style={{ whiteSpace: 'nowrap' }}>THIGH GUARD</option>
                    <option value="ABDOMINAL GUARD" data-field-name="abdominalGaurad" style={{ whiteSpace: 'nowrap' }}>ABDOMINAL GUARD</option>
                    
                    {/* Radio Btn: */}
                    {/* <option value="BATTING PAD" data-field-name="battinpadqty" style={{ whiteSpace: 'nowrap' }}>BATTING PAD</option>
                    <option value="BATTING GLOVE" data-field-name="battinggloveqty" style={{ whiteSpace: 'nowrap' }}>BATTING GLOVE</option>
                    <option value="WK GLOVES" data-field-name="wkGlovesqty" style={{ whiteSpace: 'nowrap' }}>WK GLOVES</option>
                    <option value="WK PAD" data-field-name="wkpadqty" style={{ whiteSpace: 'nowrap' }}>WK PAD</option>
                    <option value="SHOULDER BAG" data-field-name="shoulderbagqty" style={{ whiteSpace: 'nowrap' }}>SHOULDER BAG</option>
                    <option value="SHOE BAG" data-field-name="shoebagqty" style={{ whiteSpace: 'nowrap' }}>SHOE BAG</option>
                    <option value="PLAYER BAG" data-field-name="playerbagqty" style={{ whiteSpace: 'nowrap' }}>PLAYER BAG</option>
                    <option value="PRACTICE JERSEY" data-field-name="practisejerseyqty" style={{ whiteSpace: 'nowrap' }}>PRACTICE JERSEY</option>
                    <option value="FAMILY JERSEY" data-field-name="familyjerseyqty" style={{ whiteSpace: 'nowrap' }}>FAMILY JERSEY</option>
                    <option value="ARM GUARD" data-field-name="armguardyqty" style={{ whiteSpace: 'nowrap' }}>ARM GUARD</option>
                    <option value="THIGH GUARD" data-field-name="thighguardyqty" style={{ whiteSpace: 'nowrap' }}>THIGH GUARD</option>
                    <option value="ABDOMINAL GUARD" data-field-name="abdominalguardyqty" style={{ whiteSpace: 'nowrap' }}>ABDOMINAL GUARD</option> */}
                </Form.Control>
            </Form.Group>
            <div className='text-center my-2' >
                <Button onClick={addFields}>ADD</Button>
            </div>
        </div >
    )
}

export default DynamicFields