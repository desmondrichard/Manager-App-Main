import React from 'react';
import Header from './Header';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './AccreditionForm.css';
import AccreditionFormTab from './AccreditionFormTab';
import Container from 'react-bootstrap/Container';
function AccreditionForm() {
    return (
        <div>
            <Header />
            <div className='text-center'>
                <div className='playersList' style={{ whiteSpace: 'nowrap', width: '300px' }}>ACCREADIATION FORM1</div>
            </div>
            <NavLink to='/accreadiationcards' className='navLinks'><Button variant="primary" className='mt-3 addPlayers butn1'>
                Go Back
            </Button>
            </NavLink>
            <Container fluid className='py-2 mt-4 bg-light'>

            </Container>
            <AccreditionFormTab />

        </div>

    )
}

export default AccreditionForm