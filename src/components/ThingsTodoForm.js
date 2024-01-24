import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from './Header';
import Button from 'react-bootstrap/Button';
import ThingsToDoFormTab from './ThingsToDoFormTab';
function ThingsTodoForm() {
    return (
        <div>
            <Header />
            <div className='text-center'>
                <div className='playersList'>THINGS TODO FORM</div>
            </div>
            <NavLink to='/thingstodo' className='navLinks'><Button variant="primary" className='mt-3 addPlayers butn1'>
                Go Back
            </Button>
            </NavLink>
            <ThingsToDoFormTab />
        </div>
    )
}

export default ThingsTodoForm