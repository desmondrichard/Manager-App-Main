import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Tab, Tabs } from 'react-bootstrap';
import Header from './Header';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ThingsToDoRepresentatives from './ThingsTodoSubForms/ThingsToDoRepresentatives';
import ThingsToDoBranding from './ThingsTodoSubForms/ThingsToDoBranding';
import ThingsToDoPhysiotherapist from './ThingsTodoSubForms/ThingsToDoPhysiotherapist';
import ThingsToDoFixtures from './ThingsTodoSubForms/ThingsToDoFixtures';
import ThingsToDoHotelAccomodation from './ThingsTodoSubForms/ThingsToDoHotelAccomodation';
import ThingsToDoMatchEquipments from './ThingsTodoSubForms/ThingsToDoMatchEquipments';
import ThingsToDoTransport from './ThingsTodoSubForms/ThingsToDoTransport';
import './ThingsToDoAddList.css';
function ThingsToDoAddList() {
    const [key, setKey] = useState("0")

    function getDataFromChild(k) {
        setKey(k);
    }

    function getPreviousKeyFromChild(k) {
        setKey(k);
    }
    return (
        <div>
            <>
                <Header />
            </>
            <div className='text-center'>
                <div className='playersList'>THINGS TODO FORM</div>
            </div>
            <NavLink to='/thingstodo' className='navLinks'><Button variant="primary" className='mt-3 addPlayers butn1'>
                Go Back
            </Button>
            </NavLink>
            <Container fluid className='p-0 mt-2'>
                <Row style={{ margin: '0px' }}>
                    <Tabs justify variant='pills' activeKey={key} className='mb-1 p-0 tab'>
                        {/* Tab:1 */}
                        <Tab eventKey='0' title='REPRESENTATIVES' >
                            {/* Tab1 content */}
                            <ThingsToDoRepresentatives activationKey={key} onChildNextActivationKey={getDataFromChild} />
                        </Tab>

                        {/* Tab:2 */}
                        <Tab eventKey='1' title='BRANDING'>
                            <ThingsToDoBranding activationKey={key} onChildNextActivationKey={getDataFromChild} onPreviousActivationKey={getPreviousKeyFromChild} />
                        </Tab>

                        {/* Tab:3 */}
                        <Tab eventKey='2' title='COACH PHYSIOTHERAPIST' style={{ whiteSpace: 'nowrap' }}>
                            <ThingsToDoPhysiotherapist activationKey={key} onChildNextActivationKey={getDataFromChild} onPreviousActivationKey={getPreviousKeyFromChild} />
                        </Tab>

                        {/* Tab:4 */}
                        <Tab eventKey='3' title='FIXTURES'>
                            <ThingsToDoFixtures activationKey={key} onChildNextActivationKey={getDataFromChild} onPreviousActivationKey={getPreviousKeyFromChild} />
                        </Tab>

                        {/* Tab:5 */}
                        <Tab eventKey='4' title='HOTEL ACCOMODATION'>
                            <ThingsToDoHotelAccomodation activationKey={key} onChildNextActivationKey={getDataFromChild} onPreviousActivationKey={getPreviousKeyFromChild} />
                        </Tab>

                        <Tab eventKey='5' title='EQUIPMENT REQUIREMENTS'>
                            <ThingsToDoMatchEquipments activationKey={key} onChildNextActivationKey={getDataFromChild} onPreviousActivationKey={getPreviousKeyFromChild} />
                        </Tab>
                        <Tab eventKey='6' title='TRANSPORT INFORMATION'>
                            <ThingsToDoTransport activationKey={key} onChildNextActivationKey={getDataFromChild} onPreviousActivationKey={getPreviousKeyFromChild} />
                        </Tab>

                    </Tabs>
                </Row>
            </Container>

        </div>
    )
}

export default ThingsToDoAddList