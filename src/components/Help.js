import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './Help.css';

function Help() {
    return (
        <div className='m-3'>
            <h4 style={{ fontSize: '25px' }}>FAQS</h4>
            <Accordion className='accordions' flush >
                <Accordion.Item eventKey="0" className='accordionItem mt-3' >
                    <Accordion.Header className='header-z-index'>How to register a cricket player?</Accordion.Header>
                    <Accordion.Body>
                        Fill out the cricket player registration form and submit it.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className='mt-3 accordionItem'>
                    <Accordion.Header className='header-z-index'>How much does it cost to register a cricket player?</Accordion.Header>
                    <Accordion.Body>
                        The cost of registering a cricket player varies depending on the club.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className='mt-3 accordionItem'>
                    <Accordion.Header className='header-z-index'>How long does it take to register a cricket player?</Accordion.Header>
                    <Accordion.Body>
                        It takes less than 5 minutes to register a cricket player.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className='mt-3 accordionItem'>
                    <Accordion.Header>What is substitute rule in cricket?</Accordion.Header>
                    <Accordion.Body>
                        If a fielder has been injured or become ill during the match.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4" className='mt-3 accordionItem'>
                    <Accordion.Header>Can a retired hurt batsman be replaced?</Accordion.Header>
                    <Accordion.Body>
                        They must then be replaced by a teammate who has not been dismissed.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5" className='lastAccordionItem mt-3 accordionItem open'>
                    <Accordion.Header>Why online Registrations?</Accordion.Header>
                    <Accordion.Body>
                        COVID-19 has gave us with an opportunity to test the capacity of the people
                        to fill online applications.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6" className='mt-3 accordionItem'>
                    <Accordion.Header>How do I get a cricket ID?</Accordion.Header>
                    <Accordion.Body>
                        Complete Sign Up.You will then receive a verification code to your email.
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>
        </div>
    )
}

export default Help