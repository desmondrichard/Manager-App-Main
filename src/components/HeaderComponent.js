import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Header.css';

import Menubar from './offcanvas-body/Menubar';
import Badge from 'react-bootstrap/Badge';
// import { NavLink } from 'react-router-dom';
function HeaderComponent() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className='parentDiv' style={{ height: '100%' }}>
      <Card className='bg cardBody'>
        <Card.Body>
          <Button onClick={handleShow} variant="primary"><i className="bi bi-list text-white" style={{ fontSize: '25px', fontWeight: '600', marginLeft: '-12px' }}></i></Button>
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className='bg1'>
              <Menubar />
            </Offcanvas.Body>
          </Offcanvas>
        </Card.Body>
      </Card>
    </div>
  )
}

export default HeaderComponent