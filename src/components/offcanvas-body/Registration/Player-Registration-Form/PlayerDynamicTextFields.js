import React, { useState, useRef } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Country, State, City } from 'country-state-city';
import { useEffect } from "react";
import Select from "react-select";
import Row from 'react-bootstrap/Row';
import './PlayerDynamicTextFields.css';
function PlayerDynamicTextFields() {
    // const [isFocused, setIsFocused] = useState(false); //initially other fields wont be displayed
    const inputRef = useRef(null);

    // reset address:
    // const [value0, setValue0] = useState("");
    // const [value1, setValue1] = useState();
    // const [value2, setValue2] = useState();


    // country-state-city:
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedState, setSelectedState] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);
    useEffect(() => {
        console.log(selectedCountry);
        console.log(selectedCountry?.isoCode);
        console.log(State?.getStatesOfCountry(selectedCountry?.isoCode));
    }, [selectedCountry]);


    // const handleFocus = () => {
    //     setIsFocused(true);
    // };

    return (
        // flex used
        <div>
            <Row className='row1'>
               
                        {/* country-state-city: */}
                        <Col xs={12} lg={4} className='col'>
                            <label htmlFor="country">Country:</label>
                            <Select className="dynamicSelect" style={{ zIndex: 100, outline: 'none', border: 'none' }}
                                options={Country.getAllCountries()}
                                getOptionLabel={(options) => {
                                    return options["name"];
                                }}
                                getOptionValue={(options) => {
                                    return options["name"];
                                }}
                                value={selectedCountry}
                                onChange={(item) => {
                                    setSelectedCountry(item);
                                }}
                            />

                        </Col>
                        <Col xs={12} lg={4} className='col'>
                            <label htmlFor="state">State:</label>
                            <Select style={{ zIndex: 100 }}
                                options={State?.getStatesOfCountry(selectedCountry?.isoCode)}
                                getOptionLabel={(options) => {
                                    return options["name"];
                                }}
                                getOptionValue={(options) => {
                                    return options["name"];
                                }}
                                value={selectedState}
                                onChange={(item) => {
                                    setSelectedState(item);
                                }}
                            />
                        </Col>
                        <Col xs={12} lg={4} className='col '>
                            <label htmlFor="city">City:</label>
                            <Select className="dynamicSelect" style={{ zIndex: 100 }}
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
                                    setSelectedCity(item);
                                }}
                            />
                        </Col>
            </Row>
        </div>
    );
}

export default PlayerDynamicTextFields;
