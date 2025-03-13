import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { CgArrowLongRight } from "react-icons/cg";
import l1 from '../assets/icon.png';
import l2 from '../assets/l2.png';
import l3 from '../assets/l3.png';
import l4 from '../assets/l4.png';

import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Container fluid>
        <Row className='helprow'>
          <Col>
            <div className='help'>
              <h1>
                How can we help?
              </h1>
              <input type='text' placeholder='Search' className='form-control'/>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className='abstractcardCol'>
            <div className='abstractcard'>
              <img
                src={l2}
                alt="logo"
              />
              </div>
            </Col>
            <Col className='abstractcardCol'>
            <div>
              <h3>Using Abstract</h3>
              <p>Abstract lets you manage, version, and document your designs in one place.</p>
              <span><Link to="/UsingAbstract" className='link'>Learn More <CgArrowLongRight /></Link>
              </span>
            </div>
          </Col>
          <Col className='abstractcardCol'>
            <div className='abstractcard'>
              <img
                src={l3}
                alt="logo"
              />
              </div>
            </Col>
            <Col className='abstractcardCol'>
            <div>
              <h3>Manage your account</h3>
              <p>Configure your account settings, such as your email, profile details, and password.</p>
              <Link to="/ManageYourAccount" className='link'>Learn More <CgArrowLongRight /></Link>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className='abstractcardCol'>
            <div className='abstractcard'>
              <img
                src={l4}
                alt="logo"
              />
              </div>
            </Col>
            <Col className='abstractcardCol'>
            <div>
              <h3>Manage organizations, teams, and projects</h3>
              <p>Use Abstract organizations, teams, and projects to organize your people and your work.</p>
              <Link to="/ManageOrganizationsTeamsandProjects" className='link'>Learn More <CgArrowLongRight /></Link>
            </div>
          </Col>
          <Col className='abstractcardCol'>
            <div className='abstractcard'>
              <img
                src={l1}
                alt="logo"
              />
              </div>
            </Col>
            <Col className='abstractcardCol'>
            <div>
              <h3>Manage billing</h3>
              <p>Change subscriptions and payment details.</p>
              <Link to="/ManageBilling" className='link'>Learn More <CgArrowLongRight /></Link>
            </div>
          </Col>
        </Row>
        <Row style={{paddingBottom:"50px"}}>
          <Col className='abstractcardCol'>
            <div className='abstractcard'>
              <img
                src={l2}
                alt="logo"
              />
              </div>
            </Col>
            <Col className='abstractcardCol'>
            <div>
              <h3>Authenticate to Abstract
              </h3>
              <p>Set up and configure SSO, SCIM, and Just-in-Time provisioning.</p>
              <Link to="/AuthenticateToAbstract" className='link'>Learn More <CgArrowLongRight /></Link>
            </div>
          </Col>
          <Col className='abstractcardCol'>
            <div className='abstractcard'>
              <img
                src={l3}
                alt="logo"
              />
              </div>
            </Col>
            <Col className='abstractcardCol'>
            <div>
              <h3>
              Abstract support</h3>
              <p>Get in touch with a human.</p>
              <Link to="/AbstractSupport" className='link'>Learn More <CgArrowLongRight /></Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home