import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import Image1 from 'react-bootstrap/Image';
import Image2 from 'react-bootstrap/Image';
import Image3 from 'react-bootstrap/Image';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function SuperAdminLogin() {
    //to  navigate between pages:
    const navigate = useNavigate();

    //session storage:
    const getUsername = sessionStorage.getItem("userName");


    // Getting input from user:
    const [userName, setUsername] = useState(getUsername || '');
    const [password, setPwd] = useState('');


    // Error message display:
    const [errorMessage, seterrorMessage] = useState('');
    const [successMessage, setsuccessMessage] = useState('');




    //Getting local storage:
    // const getUsername = localStorage.getItem("adminusernameData");
    // const getPwd = localStorage.getItem("adminpwdData");

    // password show/hide:
    const [visible, setVisible] = useState(true);

    //setting dynamic button variant className:
    const [buttonVariant, setButtonVariant] = useState("outline-success");

    //React-Toastify:
    const notify = () => toast.success('Successfully Logged in!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const handleLogin = async (e) => {
        e.preventDefault();
        setsuccessMessage('');
        seterrorMessage('')
        // if (username !== 'admin' || pwd !== 'admin12') {
        //     seterrorMessage('Invalid username or password');
        // } else {
        //     localStorage.setItem("adminusernameData", "admin");
        //     localStorage.setItem("adminpwdData", "admin12");

        // }

        try {
            const response = await axios.post('http://192.168.1.135/Manager-App-API/SuperAdminAuthenticate', {
                userName: userName,
                password: password,

            });

            // Authentication successful, redirect or show success message
            console.log("login response:", response.data.message);
            if (response.data.message === 'SuperAdmin login success!') { //print message received in above console in if condition else wont be navigated to dashboard
                console.log('Login success');
                setsuccessMessage('Login success!');
                // setButtonVariant("outline-success")
                sessionStorage.setItem('userName', userName);
                notify();
                //setting timeout  for navigation after 3 seconds for notify to work:
                setTimeout(() => {
                    navigate("/dashboard");
                }, 2000);
            }

            else {
                seterrorMessage('Invalid credentials');
                console.log('Invalid credentials');
                setButtonVariant("outline-danger")
            }
        } catch (error) {
            console.error('Error occurred during login:', error);
            seterrorMessage('Error occurred during login');
            setButtonVariant("outline-danger")
        }

    }

    //session storage:

    return (
        <div style={{ paddingTop: '3%' }} className='div1' >
            <Container>
                <Card className='verticalAlign'>
                    <Row className='row1parent'>
                        <Col md={7} className='d-none d-md-block'>
                            <Image style={{ height: '100%' }} src={require('../../assets/mountain1.jpeg')} fluid className='borderRadius image-fluid'></Image>
                        </Col>
                        <Col md={5}>
                            <Container className='pt-4 '>
                                {/* condition to navigate: */}

                                <Form onSubmit={(e) => handleLogin(e)}>
                                    <legend className='text-center' style={{ fontWeight: '700' }}>SUPER ADMIN LOGIN</legend>
                                    <hr style={{ border: '2px solid #198754' }} />
                                    {errorMessage && <div style={{ marginBottom: '10px', color: 'red' }}>{errorMessage}</div>}
                                    {successMessage.length > 0 && (
                                        <div style={{ marginBottom: '10px', color: 'green' }}>{successMessage}</div>
                                    )}

                                    {/* username: */}
                                    <Form.Group className="mb-2" controlId="Username1" >
                                        <Form.Label className='fontLogin'>Username</Form.Label>
                                        <Form.Control className='shadow-none' value={userName} type="text" placeholder="Enter username" onChange={(e) => setUsername(e.target.value)} />
                                    </Form.Group>

                                    {/* password: */}
                                    <Form.Group className="mb-2" controlId="Passwords" >
                                        <Form.Label className='fontLogin'>Password</Form.Label>
                                        <div className='number' >
                                            <Form.Control className='input shadow-none' value={password} type={
                                                visible ? "password" : "text"}
                                                placeholder="Password" onChange={(e) => setPwd(e.target.value)} />
                                            <div className='p-2 pwd-toggle' onClick={() => setVisible(!visible)}>
                                                {visible ? <Image1 className='img11' style={{ height: '18px' }} src={require('../../assets/eye-close.png')}></Image1>
                                                    : <Image2 className='img11' style={{ height: '14px' }} src={require('../../assets/eye-open.png')}></Image2>}
                                            </div>
                                        </div>

                                    </Form.Group>

                                    <div className="d-grid gap-2 my-2 btn1">
                                        {/* <NavLink to='/dashboard' className='navLinks'> */}
                                        <Button variant={buttonVariant} className='mt-2 w-100 fs-4' size="lg" type='submit'>
                                            Login
                                        </Button>
                                        {/* </NavLink> */}
                                    </div>
                                </Form>

                                {/* <div className='text-center py-2'>
                                    <p style={{ fontWeight: '500' }}>Not Registered ? <span className='text-danger signUp' style={{ fontSize: '19px', fontWeight: '500' }}><Link to='/superadminsignup'>Sign Up</Link>  </span></p>
                                </div> */}
                                <div className='text-center'>
                                    <Image3 className='logo' src={require('../../assets/login-pow-logo.png')} ></Image3>
                                </div>
                            </Container>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </div>
    )
}

export default SuperAdminLogin