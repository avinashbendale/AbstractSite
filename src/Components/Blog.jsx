import React from 'react'
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Container, Row, Col } from 'react-bootstrap'
import './Blog.css';
import logo from '../assets/sea.jpg';

const Blog = () => {
    return (
        <>
            <Container>
                <h3 className='py-3 mx-4'>New Blogs</h3>
                <Row>
                    <Col md={8}>
                        <div className='blogcard'>
                            <Card style={{ width: 'auto' }}>
                                <Card.Img variant="top" src={logo} style={{height:"150px"}}/>
                                <Card.Body>
                                    <Card.Title>TITLE HEADING</Card.Title>
                                    <p>Title description, Dec 7, 2017</p>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">More</Button>
                                </Card.Body>
                            </Card>
                        </div>

                    </Col>
                    <Col md={4}>
                        <div className='blogcard'>
                            <Card style={{ width: 'auto' }}>
                                <Card.Img variant="top" src={logo} style={{height:"150px"}}/>
                                <Card.Body>
                                    <Card.Title>TITLE HEADING</Card.Title>
                                    <p>Title description, Dec 7, 2017</p>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">More</Button>
                                </Card.Body>
                            </Card>
                        </div>

                    </Col>
                </Row>
                <Row>
                    <Col md={8}>
                        <div className='blogcard'>
                            <Card style={{ width: 'auto' }}>
                                <Card.Img variant="top" src={logo} style={{height:"150px"}}/>
                                <Card.Body>
                                    <Card.Title>TITLE HEADING</Card.Title>
                                    <p>Title description, Dec 7, 2017</p>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">More</Button>
                                </Card.Body>
                            </Card>
                        </div>

                    </Col>
                    <Col md={4}>
                        <div className='blogcard'>
                            <Card style={{ width: 'auto' }}>
                                <Card.Img variant="top" src={logo} style={{height:"150px"}}/>
                                <Card.Body>
                                    <Card.Title>TITLE HEADING</Card.Title>
                                    <p>Title description, Dec 7, 2017</p>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">More</Button>
                                </Card.Body>
                            </Card>
                        </div>

                    </Col>
                </Row>
                <Row>
                    <Col md={8}>
                        <div className='blogcard'>
                            <Card style={{ width: 'auto' }}>
                                <Card.Img variant="top" src={logo} style={{height:"150px"}}/>
                                <Card.Body>
                                    <Card.Title>TITLE HEADING</Card.Title>
                                    <p>Title description, Dec 7, 2017</p>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">More</Button>
                                </Card.Body>
                            </Card>
                        </div>

                    </Col>
                    <Col md={4}>
                        <div className='blogcard'>
                            <Card style={{ width: 'auto' }}>
                                <Card.Img variant="top" src={logo} style={{height:"150px"}}/>
                                <Card.Body>
                                    <Card.Title>TITLE HEADING</Card.Title>
                                    <p>Title description, Dec 7, 2017</p>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">More</Button>
                                </Card.Body>
                            </Card>
                        </div>

                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Blog