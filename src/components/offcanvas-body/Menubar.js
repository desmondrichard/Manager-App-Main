import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import './Menubar.css';
import { NavLink } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import { useNavigate } from 'react-router-dom';
function Menubar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.clear();//to clear session storage key,values
        navigate("/")
    }
    return (
        <div style={{ backgroundColor: 'black' }}>
            <ListGroup style={{ borderRadius: '0px' }} >
                <NavLink className='nav-bar-link text' to='/superadmindashboard'><ListGroup.Item action variant="secondary" className='py-3 a'><i className="bi bi-person-lock" style={{ fontSize: '16px' }}></i> SUPER ADMIN DASHBOARD</ListGroup.Item></NavLink>
                <NavLink className='nav-bar-link text' to='/dashboard'><ListGroup.Item action variant="secondary" className='py-3 a' ><i className="bi bi-grid-fill"></i> DASHBOARD</ListGroup.Item></NavLink>

                {/*Sub dropdown using Accordion:  */}
                <nav className='acc'>
                    <Accordion >
                        <Accordion.Item eventKey="0">
                            <Accordion.Header> <ListGroup.Item action variant="secondary" className='py-3 a' ><i className="bi bi-journal-text"></i> REGISTRATION</ListGroup.Item></Accordion.Header>
                            <Accordion.Body>
                                <NavLink className='nav-bar-link text' to='/playerregister'><ListGroup.Item action variant="secondary" className='py-3 a' style={{ whiteSpace: 'nowrap' }}><i className="bi bi-caret-right-fill"></i> PLAYER REGISTRATION</ListGroup.Item></NavLink>
                                <NavLink className='nav-bar-link text' to='/staffregister'><ListGroup.Item action variant="secondary" className='py-3 a' style={{ whiteSpace: 'nowrap' }}><i className="bi bi-caret-right-fill"></i> STAFF REGISTRATION</ListGroup.Item></NavLink>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </nav>

                <NavLink className='nav-bar-link text' to='/accessories'><ListGroup.Item action variant="secondary" className='py-3 a' ><i className="bi bi-bag-check-fill"></i> ACCESSORIES DISTRIBUTION</ListGroup.Item></NavLink>
                <NavLink className='nav-bar-link text' to='/playersauctionlist'><ListGroup.Item action variant="secondary" className='py-3 a' ><i className="bi bi-clipboard2-check-fill"></i> PLAYERS AUCTION LIST</ListGroup.Item></NavLink>
                <NavLink className='nav-bar-link text' to='/fixtures'><ListGroup.Item action variant="secondary" className='py-3 a'><i className="bi bi-geo-alt-fill"></i> FIXTURES</ListGroup.Item></NavLink>
                <NavLink className='nav-bar-link text' to='/thingstodo'><ListGroup.Item action variant="secondary" className='py-3 a'><i className="bi bi-list-check"></i> THINGS TO DO</ListGroup.Item></NavLink>
                <NavLink className='nav-bar-link text' to='/accreadiationcards'><ListGroup.Item action variant="secondary" className='py-3 a'><i className="bi bi-credit-card-2-back-fill"></i> MANAGEMENT REGISTRATION</ListGroup.Item></NavLink>
                <NavLink className='nav-bar-link text' to='/addclients'><ListGroup.Item action variant="secondary" className='py-3 a'><i className="bi bi-person-gear" style={{ fontSize: '16px' }}></i> ADD CLIENTS</ListGroup.Item></NavLink>

                {/* superadmindashboard */}
                <ListGroup.Item action variant="secondary" onClick={handleLogout} className='py-2 a' style={{ position: 'absolute', bottom: 0 }}><i className="bi bi-box-arrow-left" ></i> LOG OUT</ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default Menubar;