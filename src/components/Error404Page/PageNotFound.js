import React from 'react';
import PageNotFoundImage from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import './PageNotFound.css';
import { NavLink } from 'react-router-dom';
function PageNotFound() {
    return (
        <>
            <div className='text-center mt-3'>
            <NavLink to='/dashboard' className='navLinks'><Button className='shakeMe'>Home Page</Button></NavLink>
            </div>
            <div className='text-center'>
                <PageNotFoundImage src={require('./../../assets/PageNotFound/404notfound.png')} fluid style={{ height: '90vh' }}></PageNotFoundImage>
            </div>
        </>

    )
}

export default PageNotFound