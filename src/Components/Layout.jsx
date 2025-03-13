import React from 'react'
import { Outlet, Link } from "react-router-dom";
import { Row, Col } from 'react-bootstrap';
import "./Layout.css";
import logo from '../assets/logo.jpg';


const Layout = () => {
    return (
        <>
            <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px" }}>
                <ul style={{ display: "flex", listStyle: "none", margin: 0, padding: 0 }}>
                    <li>
                        <img src={logo} style={{ width: "40px", height: "40px", marginRight: "10px" }} />
                    </li>
                    <li>
                        <Link to="/" className="link">Home</Link>
                    </li>
                    <li>
                        <Link to="/blogs" className="link">Blogs</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="link">Contact</Link>
                    </li>
                </ul>
                <div style={{ display: "flex", gap: "10px", alignItems: "center", fontWeight:"10px"}}>
                    <input type="text" className="form-control inputbox" placeholder="Search" style={{ padding: "10px 40px", borderRadius: "4px", border: "1px solid #ccc" }} />
                    <button className="requestbutton">Submit a request</button>
                    <button className="signin"><Link to="/signinpage" className='signlink'>Sign in</Link></button>
                </div>
            </nav>

            <Outlet />
            <div>
                <Row className="footer">
                    <Col>
                        <h3>Abstract</h3>
                        <ul className='link'>
                            <li> <Link to="/" className="link">Start Trial</Link></li>
                            <li> <Link to="/" className="link">Pricing</Link></li>
                            <li> <Link to="/" className="link">Download</Link></li>
                        </ul>
                    </Col>
                    <Col>
                    <h3>Resources</h3>
                        <ul className='link'>
                            <li> <Link to="/" className="link">Blog</Link></li>
                            <li> <Link to="/" className="link">Help Cnter</Link></li>
                            <li> <Link to="/" className="link">Release Notes</Link></li>
                            <li> <Link to="/" className="link">Status</Link></li>
                        </ul>
                    </Col>
                    <Col>
                    <h3>Community</h3>
                        <ul className='link'>
                            <li> <Link to="/" className="link">Twitter</Link></li>
                            <li> <Link to="/" className="link">Linkedin</Link></li>
                            <li> <Link to="/" className="link">Facebook</Link></li>
                            <li> <Link to="/" className="link">Podcast</Link></li>
                        </ul>
                    </Col>
                    <Col>
                    <h3>Company</h3>
                        <ul className='link'>
                            <li> <Link to="/" className="link">About Us</Link></li>
                            <li> <Link to="/" className="link">Care</Link></li>
                            <li> <Link to="/" className="link">Legal</Link></li>
                        </ul>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Layout