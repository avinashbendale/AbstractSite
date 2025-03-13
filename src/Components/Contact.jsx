import React from 'react'
import Form from 'react-bootstrap/Form';
import {Row, Col } from 'react-bootstrap'
import "./Contact.css";

const Contact = () => {
    return (
        <>
            <Row>
                <Col>
                    <div className='contactbox'>
                        <div className='contact'>
                            <h3 style={{ textAlign: "center",margin:"20px"}}>Contact</h3>
                            <Form.Label htmlFor="inputPassword5">Full Name</Form.Label>
                            <Form.Control
                                type="text"
                                id="inputPassword5"
                                aria-describedby="passwordHelpBlock"
                            />
                            <Form.Label htmlFor="inputPassword5">Email</Form.Label>
                            <Form.Control
                                type="email"
                                id="inputemail"
                                aria-describedby="passwordHelpBlock"
                            />
                            <Form.Label htmlFor="inputPassword5">Message</Form.Label>
                            <Form.Control
                                type="text"
                                id="inputmsg"
                                aria-describedby="passwordHelpBlock"
                            /><br />
                            <button className='btn btn-success'>Send</button>
                        </div>
                    </div>

                </Col>
            </Row>
        </>
    )
}

export default Contact