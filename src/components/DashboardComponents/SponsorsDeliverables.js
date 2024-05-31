import React from 'react';
import Header from '../Header';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function SponsorsDeliverables() {
    return (
        <div>
            <Header />
            <div className='text-center'>
                <div className='playersList' style={{ whitespace: 'nowrap', minWidth: '350px' }}>ADD SPONSOR DELIVERABLES</div>
            </div>
            <Row className='mt-2'>
                <Col xs={4} style={{ marginTop: '-5px' }}>
                    <NavLink to='/dashboard' className='navLinks'><Button variant="primary" className='mt-3 addPlayers butn1'>
                        Go Back
                    </Button>
                    </NavLink>
                </Col>
            </Row>
        </div>
    )
}

export default SponsorsDeliverables