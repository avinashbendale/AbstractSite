import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './ManageYourAccount.css';

const ManageOrganizationsTeamsandProjects = () => {
    return (
        <>
            <Container fluid>
                <Row className='helprow'>
                    <Col>
                        <div className='help'>
                            <h1>
                            Manage organizations, teams, and projects
                            </h1>
                            <p>Use Abstract organizations, teams, and projects to organize your people and your work.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className='abstractcardCol'>
                        <div>
                            <h3>Manage your organization
                            </h3>
                            <ul>
                                <li> How to create a new organization (for existing users)
                                </li>
                                <li> Organization overview</li>
                                <li> Joining an organization</li>
                                <li> Send an invitation</li>
                                <li> Understand seat and role types</li>
                            </ul>
                        </div>
                    </Col>
                    <Col className='abstractcardCol'>
                        <div>
                            <h3>Manage your teams
                            </h3>
                            <ul>
                                <li> Create and manage teams
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className='abstractcardCol'>
                        <div>
                            <h3>Create and manage teams
                            </h3>
                            <ul>
                                <li> Create a project</li>
                                <li> Project permissions</li>
                                <li> Organize your projects with sections</li>
                                <li> Archive or delete a project</li>
                                <li> Duplicate a project</li>
                            </ul>
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </>
    )
}

export default ManageOrganizationsTeamsandProjects