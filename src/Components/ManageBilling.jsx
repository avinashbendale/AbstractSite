import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './ManageBilling.css';

const ManageBilling = () => {
  return (
    <>
        <Container fluid>
                <Row className='helprow'>
                    <Col>
                        <div className='help'>
                            <h1>
                            Manage billing
                            </h1>
                            <p>Change subscriptions and payment details.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className='abstractcardCol'>
                        <div>
                            <h3>Manage billing
                            </h3>
                            <ul>
                                <li> Change your subscription
                                </li>
                                <li> Manage billing details</li>
                                <li> View your billing details and invoices</li>
                            </ul>
                        </div>
                    </Col>
                   <Col></Col>
                </Row>
            </Container>
    </>
  )
}

export default ManageBilling