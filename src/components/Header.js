import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Menubar from './offcanvas-body/Menubar';
import Badge from 'react-bootstrap/Badge';
import './Header1.css';
import { useNavigate } from 'react-router-dom';

function Header() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //
    const navigate = useNavigate();
    // const [logout, setLogout] = useState(false)

    function handleLogout(e) {
        e.preventDefault();
        console.log("clicked logout")
        localStorage.clear();
        // window.location.reload();
        navigate("/")
    }


    return (
        <div className='parentDiv bg fixed'>
            <>
                <Button onClick={handleShow} variant="primary" className='btn1'><i className="bi bi-list text-white" style={{ fontSize: '25px', fontWeight: '600', marginLeft: '-12px' }}></i></Button>
                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title></Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className='bg1'>
                        <Menubar />
                    </Offcanvas.Body>
                </Offcanvas>
            </>

            <h2 className='text-white text-center font1'>MANAGER APPLICATION</h2>
            <span>
                <Button variant="primary" className='btn1'><i className="bi bi-bell-fill " style={{ fontSize: '20px' }}></i><sup><Badge bg="danger">9</Badge></sup> <span className="visually-hidden">unread messages</span></Button>
                {/* <NavLink to='/'> */}
                <Button className='btn2' type='submit' onClick={handleLogout}><i className="bi bi-box-arrow-right" style={{ fontSize: '24px' }}></i></Button>
                {/* </NavLink> */}
            </span>

        </div >
    )
}

export default Header