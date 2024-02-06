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
        setFields([...fields, newFieldSet])
        setOptionsLabel('') // Clear input after adding fields
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
                                        {field.radios.map((radio, radioIndex) => (
                                            <div key={radio.id} style={{ marginRight: '10px', paddingRight: '30px' }}>
                                                <Form.Check
                                                    type="radio"
                                                    id={radio.id}
                                                    label={radio.label}
                                                    name={`radioGroup-${field.id}`}
                                                    ref={radioIndex === 0 ? field.radios[0] : field.radios[1]}
                                                // ref={radio.ref}
                                                />
                                            </div>
                                        ))}
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
                ))}
            </Form>
            <Form.Group controlId="optionsLabel">
                <Form.Label>Enter Label for Options:[enter text in uppercase]</Form.Label>
                <Form.Control
                    type="text"
                    value={optionsLabel}
                    onChange={(e) => setOptionsLabel(e.target.value)}
                />
            </Form.Group>
            <div className='text-center my-2' >
                <Button onClick={addFields}><i className="bi bi-plus fa-8x" style={{ fontSize: '20px', borderRadius: '30px' }}></i></Button>
            </div>
        </div>
    )
}

export default DynamicFields