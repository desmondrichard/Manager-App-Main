import React from 'react';
import { Tab, Tabs, Container } from "react-bootstrap";
import SuperAdminLogin from './SuperAdmin/SuperAdminLogin';
import Login from './Login';

function LoginSignup() {
    return (
        <div>
            <Container>
                <Tabs defaultActiveKey="Other" id="uncontrolled-tab-example">
                    <Tab eventKey="Other" title="OTHER">
                        <Login />
                    </Tab>
                    <Tab eventKey="SuperAdmin" title="SUPER ADMIN">
                        <SuperAdminLogin />
                    </Tab>

                </Tabs>
            </Container>
        </div>
    )
}

export default LoginSignup
