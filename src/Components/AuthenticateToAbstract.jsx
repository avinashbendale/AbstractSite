import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
const AuthenticateToAbstract = () => {
  return (
    <>
    <Container fluid>
                <Row className='helprow'>
                    <Col>
                        <div className='help'>
                            <h1>
                            Authenticate to Abstract
                            </h1>
                            <p>Set up and configure SSO, SCIM, and Just-in-Time provisioning.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className='abstractcardCol'>
                        <div>
                            <h3>Authenticate to Abstract
                            </h3>
                            <ul>
                                <li> Understand single sign-on
                                </li>
                                <li> Configure single sign-on using ADFS</li>
                                <li> Configure single sign-on using Amazon Web Services</li>
                                <li> Configure single sign-on using Azure AD</li>
                                <li> Configure single sign-on using Google SAML</li>
                            </ul>
                        </div>
                    </Col>
                   <Col></Col>
                </Row>
            </Container>
    </>
  )
}

export default AuthenticateToAbstract