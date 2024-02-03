import React from 'react';
import Header from './Header';
import { NavLink } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './DashboardPlayGroundViewCard.css';


function DashboardPlayGroundViewCard() {

    //
    

    return (
        <div>
            <Header />
            <div className='headerBtn my-3'>
                <h5 className='headingTag'>PLAYGROUNDS-LIST</h5>
            </div>
            <div>
                <Row>
                    <Col lg={3} className='mb-2'>
                        <NavLink to='/dashboard' className='navLinks'>
                            <Button variant="primary" style={{ fontWeight: 'bold' }}>Go Back</Button>
                        </NavLink>
                    </Col>
                </Row>
            </div>
           
        </div>
    )
}

export default DashboardPlayGroundViewCard

