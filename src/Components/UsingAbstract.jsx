import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './UsingAbstract.css';


const UsingAbstract = () => {
    return (
        <>
            <Container fluid>
                <Row className='helprow'>
                    <Col>
                        <div className='help'>
                            <h1>
                                Using Abstract
                            </h1>
                            <p>Abstract lets you manage,version, and d</p>
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
                    <Col className='abstractcardCol'>
                        <div>
                            <h3>Using the Abstract Desktop App</h3>
                            <ul>
                                <li>Update to the newest version of Abstract</li>
                                <li> Backing Up your Work in Abstract</li>
                                <li> System requirements</li>
                                <li> Downloading the Abstract Desktop Application</li>
                                <li> The Abstract plugin</li>
                                <li>Keyboard shortcuts</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className='abstractcardCol'>
                        <div>
                            <h3>Working in Projects</h3>
                            <ul>
                                <li>Update to the newest version of Abstract</li>
                                <li> Backing Up your Work in Abstract</li>
                                <li> System requirements</li>
                                <li> Downloading the Abstract Desktop Application</li>
                                <li> The Abstract plugin</li>
                                <li>Keyboard shortcuts</li>
                            </ul>
                        </div>
                    </Col>
                    <Col className='abstractcardCol'>
                        <div>
                            <h3>Commit your work</h3>
                            <ul>
                                <li>Update to the newest version of Abstract</li>
                                <li> Backing Up your Work in Abstract</li>
                                <li> System requirements</li>
                                <li> Downloading the Abstract Desktop Application</li>
                                <li> The Abstract plugin</li>
                                <li>Keyboard shortcuts</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row style={{ paddingBottom: "50px" }}>
                    <Col className='abstractcardCol'>
                        <div>
                            <h3>Merge your work</h3>
                            <ul>
                                <li>Update to the newest version of Abstract</li>
                                <li> Backing Up your Work in Abstract</li>
                                <li> System requirements</li>
                                <li> Downloading the Abstract Desktop Application</li>
                                <li> The Abstract plugin</li>
                                <li>Keyboard shortcuts</li>
                            </ul>
                        </div>
                    </Col>
                    <Col className='abstractcardCol'>
                        <div>
                            <h3>Work with libraries
                            </h3>
                            <ul>
                                <li>Update to the newest version of Abstract</li>
                                <li> Backing Up your Work in Abstract</li>
                                <li> System requirements</li>
                                <li> Downloading the Abstract Desktop Application</li>
                                <li> The Abstract plugin</li>
                                <li>Keyboard shortcuts</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default UsingAbstract