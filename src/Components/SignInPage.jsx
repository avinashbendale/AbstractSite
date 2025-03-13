import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './SignInPage.css'

const SignInPage = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col>
                        <div className='signinpage'>
                                <h3>Sign in</h3>
                                <p>New to Abstract?<Link>Create a new account</Link></p>
                            <div className='signinpagebox'>
                                <label>Email or username</label><br/>
                                <input type='text' className='form-control'/><br/>
                                <button className='form-control'>Continue</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default SignInPage