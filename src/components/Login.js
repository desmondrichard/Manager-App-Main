import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Login.css';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';
import Image1 from 'react-bootstrap/Image';
import Image2 from 'react-bootstrap/Image';
import Image3 from 'react-bootstrap/Image';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    //to  navigate between pages:
    const navigate = useNavigate();

    // Getting input from user:
    const [LoginId, setLoginId] = useState('');
    const [password, setPwd] = useState('');
    // const [team, setTeam] = useState('');

    // Error message display:
    const [errorMessage, seterrorMessage] = useState('');
    const [successMessage, setsuccessMessage] = useState('');

    //Getting local storage:
    // const getUsername = localStorage.getItem("usernameData");
    // const getPwd = localStorage.getItem("pwdData");
    // const getTeamname = localStorage.getItem("teamnameData");

    // password show/hide:
    const [visible, setVisible] = useState(true);

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

        try {
            const response = await axios.post('https://localhost:7097/Teams/Authenticate', {
                LoginId: LoginId,
                password: password,
                // team: team
            });

            // Authentication successful, redirect or show success message

            console.log("login response:", response.data.message);
            if (response.data.message === 'Teams login success!') {
                console.log('Login success');
                setsuccessMessage('Login success!');
                notify();
                setTimeout(() => {
                    navigate("/dashboard");
                }, 3000);
            }

            // setting Local storage:
            // localStorage.setItem("usernameData", userName);
            // localStorage.setItem("pwdData", password);
            // localStorage.setItem("teamnameData", team);

            else {
                seterrorMessage('Invalid credentials');
                console.log('Invalid credentials');
            }
        } catch (error) {
            console.error('Error occurred during login:', error);
            seterrorMessage('Error occurred during login');
        }

    }

    return (
        <div style={{ paddingTop: '3%' }} className='div1' >
            <Container>
                <Card className='verticalAlign'>
                    <Row className='row1parent'>
                        <Col md={7} className='d-none d-md-block'>
                            <Image style={{ height: '100%' }} src={require('../assets/mountain1.jpeg')} fluid className='borderRadius image-fluid'></Image>
                        </Col>
                        <Col md={5}>
                            <Container className='pt-4 '>
                                {/* condition to navigate: */}

                                <Form onSubmit={(e) => handleLogin(e)}>
                                    <legend className='text-center' style={{ fontWeight: '700' }}>LOGIN</legend>
                                    <hr style={{ border: '2px solid #198754' }} />
                                    {errorMessage && <div style={{ marginBottom: '10px', color: 'red' }}>{errorMessage}</div>}
                                    {successMessage.length > 0 && (
                                        <div style={{ marginBottom: '10px', color: 'green' }}>{successMessage}</div>
                                    )}

                                    {/* username: */}
                                    <Form.Group className="mb-2" controlId="LoginId" >
                                        <Form.Label className='fontLogin'>Login ID</Form.Label>
                                        <Form.Control className='shadow-none' type="text" placeholder="Enter Login ID" value={LoginId} onChange={(e) => setLoginId(e.target.value)} />
                                    </Form.Group>

                                    {/* password: */}
                                    <Form.Group className="mb-2" controlId="PasswordLogin" >
                                        <Form.Label className='fontLogin'>Password</Form.Label>
                                        <div className='number' >
                                            <Form.Control className='input shadow-none' value={password} type={
                                                visible ? "password" : "text"}
                                                placeholder="Password" onChange={(e) => setPwd(e.target.value)} />
                                            <div className='p-2 pwd-toggle' onClick={() => setVisible(!visible)}>
                                                {visible ? <Image1 className='img11' style={{ height: '18px' }} src={require('../assets/eye-close.png')}></Image1>
                                                    : <Image2 className='img11' style={{ height: '14px' }} src={require('../assets/eye-open.png')}></Image2>}
                                            </div>
                                        </div>
                                    </Form.Group>

                                    {/* team name: */}
                                    {/* <Form.Group className="mb-1" controlId="teamname" >
                                        <Form.Label className='fontLogin'>Teamname</Form.Label>
                                        <Form.Control className='shadow-none' type="text" placeholder="Enter teamname" value={team} onChange={(e) => setTeam(e.target.value)} />
                                    </Form.Group> */}

                                    <div className="d-grid gap-2 my-2 btn1">
                                        {/* <NavLink to='/dashboard' className='navLinks'> */}
                                        <Button variant="outline-success" className='mt-2 w-100 fs-4' size="lg" type='submit'>
                                            Login
                                        </Button>
                                        {/* </NavLink> */}
                                    </div>
                                </Form>

                                {/* <div className='text-center py-2'>
                                    <p style={{ fontWeight: '500' }}>Not Registered ? <span className='text-danger signUp' style={{ fontSize: '19px', fontWeight: '500' }}><Link to='/teamssignup'>Sign Up</Link>  </span></p>
                                </div> */}
                                <div className='text-center'>
                                    <Image3 className='logo' src={require('../assets/login-pow-logo.png')} ></Image3>
                                </div>
                            </Container>
                        </Col>
                    </Row>
                </Card>
            </Container>
        </div>
    )
}

export default Login