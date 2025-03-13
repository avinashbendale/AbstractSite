import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { FaRegCircleQuestion } from "react-icons/fa6";

import './AbstractSupport.css'

const AbstractSupport = () => {
  return (
    <>
      <Container fluid>
                <Row className='helprow'>
                    <Col>
                        <div className='help'>
                            <h1>
                            Contact Support
                            </h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className='contactsupport'>
                        <div>
                            <p style={{border:"1px solid black",paddingLeft:"10px",borderRadius:"3px",background:"NavajoWhite  "}}>Support hours are Monday-Friday 05:00-18:00 Pacific Time. We observe all U.S. holidays.</p>
                            <h3>Contact support
                            </h3>
                            <ol>
                                <li>  While signed in to Abstract, select the Support icon.
                                </li>
                                <li> Select Contact Support. </li>
                                <li> On the Contact Support page, choose the Topic you want to contact Support about, write a Subject for your message, and enter a Description of your issue</li>
                                <li> If you have files you want to give Support, such as bug reports or screenshots, click Browse files... and choose them from your computer.</li>
                                <li> When you're done, click Send to Support</li>
                            </ol>
                            <h3>Ask questions about subscriptions and billing
                            </h3>
                            <p style={{border:"1px solid black",paddingLeft:"10px",borderRadius:"3px",background:"NavajoWhite  "}}>* Admins can manage and update billing information on behalf of their Organization directly from the web app, including adding more contributor seats, managing billing details, and locating invoices.</p>
                            <p>
                            For security purposes, Support can only assist with billing matters if you are an admin or can provide credit card information to verify your identity. If you want to use card information to verify your identity, you need to provide:
                            </p>
                            <ul>
                                <li>  The name on the credit card on file.
                                </li>
                                <li> The last four digits of the card number
                                </li>
                                <li> The card expiration date
                                </li>
                                <li> A screenshot of the last charge that Abstract made to the card
                                </li>
                            </ul>
                            <p>If you aren't an admin and can't provide the card information mentioned above, locate your admin within the web or desktop application. Have this person contact Support with your questions.</p>
                            <h3>Make a sales inquiry</h3>
                            <p>Are you a software reseller? Please get in touch with our Sales Team.</p>
                            <p>If you're part of an Enterprise plan and want to discuss an upcoming renewal, please contact your customer success manager directly.</p>
                        </div>
                    </Col>
                    <Col className='contactsupport'>
                        <div>
                            <h3>Contact support
                            </h3>
                            <ul>
                                <li> Ask questions about subscriptions and billing
                                </li>
                                <li> Make a sales inquiry</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col>
                        <div className="helpbutton">
                            <button><FaRegCircleQuestion />Help</button>
                        </div>
                    </Col>
                </Row>
            </Container>
    </>
  )
}

export default AbstractSupport

