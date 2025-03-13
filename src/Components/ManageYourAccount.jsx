import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './ManageYourAccount.css';

const ManageYourAccount = () => {
    return (
        <>
            <Container fluid>
                <Row className='helprow'>
                    <Col>
                        <div className='help'>
                            <h1>
                            Manage your account
                            </h1>
                            <p>Configure your account settings, such as your email, profile details, and password.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className='abstractcardCol'>
                        <div>
                            <h3>Get started in Abstract</h3>
                            <ul>
                                <li> Try out Abstract</li>
                                <li> The Abstract Design Workflow</li>
                                <li> Start Working In Abstract</li>
                                <li> Practice Abstract Workflow</li>
                                <li> Glossary</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default ManageYourAccount