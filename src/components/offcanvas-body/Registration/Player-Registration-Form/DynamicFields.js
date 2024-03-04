import React, { useState, useRef, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './DynamicFields.css'

const DynamicFields = ({ onDataUpdate, isClear }) => {
    const [fields, setFields] = useState({})
    const [optionsLabel, setOptionsLabel] = useState('')
    const bowlerA = useRef(null)
    const bowlerB = useRef(null)

    const addFields = () => {
        const kitValue = { provided: false, quantity: 0 }
        const kitKey = optionsLabel;
        console.log("kitkey", kitKey)
        setFields({
            ...fields,
            [kitKey]: kitValue

        })
        setSelectBoxContent(optionsLabel);
    }

    const [selectBoxContent, setSelectBoxContent] = useState('');

    useEffect(() => {
        onDataUpdate(fields)
    }, [fields])

    useEffect(() => {
        console.log("need to clear field value")
        setFields("")
    }, [isClear])


    return (
        <div>
            {/* {JSON.stringify(fields)} */}
            <Form className='dynamicMargin'>
                {Object?.entries(fields).map((field) => (
                    <div key={field[0]} style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ marginBottom: '10px' }}>
                            {/* <p>{JSON.stringify(field)}</p> */} {/*used to view data:*/}
                            <Row>
                                <Col xs={12}>{selectBoxContent}</Col>   {/*used to display what we selected in select field so kept in a state*/}
                                <Col xs={12} md={12} lg={7} className='dynamicRadioField'>
                                    <Form.Label>Provided</Form.Label>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>

                                        <div className='radioProvided'>
                                            <Form.Check className='radioProvidedBtn' id={field[0]} type="radio" name={`radioGroup-${field[0]}`} value='provided'
                                                onChange={(e) => {
                                                    // console.log(e)
                                                    const id = e.target.id
                                                    const checkBox = e.target.checked
                                                    setFields({
                                                        ...fields,
                                                        [id]: {
                                                            quantity: fields[id].quantity,
                                                            provided: true
                                                        }
                                                    })
                                                }}
                                            />
                                        </div>
                                        <div className='radioNotProvided'>
                                            <label htmlFor='NotProvided'>Not Provided</label>
                                            <Form.Check className='radioNotProvidedBtn' id={field[0]} type="radio" name={`radioGroup-${field[0]}`} value='notprovided'
                                                onChange={(e) => {
                                                    // console.log(e)
                                                    const id = e.target.id
                                                    const checkBox = e.target.checked
                                                    setFields({
                                                        ...fields,
                                                        [id]: {
                                                            quantity: fields[id].quantity,
                                                            provided: false
                                                        }
                                                    })
                                                }} />
                                        </div>
                                    </div>
                                </Col>
                                <Col xs={12} md={12} lg={3} className='dynamicQtyField'>
                                    <Form.Label style={{ color: '#6F7275' }}>QUANTITY</Form.Label>
                                    <Form.Control
                                        type="number"
                                        id={field[0]}
                                        style={{ width: '80px' }}
                                        min="0"
                                        max="2"
                                        onChange={(e) => {
                                            // console.log(e)
                                            const id = e.target.id
                                            const qty = e.target.value
                                            setFields({
                                                ...fields,
                                                [id]: {
                                                    provided: fields[id].provided,
                                                    quantity: qty
                                                }
                                            })
                                        }}
                                    // pass the value to parent {fields}

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
                    onChange={(e) => {
                        setOptionsLabel(e.target.value)
                        setSelectBoxContent(e.target.options[e.target.selectedIndex].text)
                    }}
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

                </Form.Control>
            </Form.Group>
            <div className='text-center my-2' >
                <Button onClick={addFields}>ADD</Button>
            </div>
        </div >
    )
}

export default DynamicFields