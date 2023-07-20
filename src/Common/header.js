import Container from 'react-bootstrap/Container';
import { useEffect, useState } from "react";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { SpanTag,MyDiv} from './Common';
import { Row,Col} from 'react-bootstrap';
import { NavLink  } from 'react-router-dom';

import Logo from "../assets/img/nanbanesg.png";
import Line from "../assets/img/Header/line.png";
import linearrow from "../assets/img/Header/mob-line-arrow.svg";
import facebook from "../assets/img/Header/facebook-icon.png";
import twitter from "../assets/img/Header/twitter-icon.png";
import linkedin from "../assets/img/Header/linkedin-icon.png";

function Header() {
  const [expanded, setExpanded] = useState(false);

  return (
    
    <Navbar expanded={expanded} expand="lg" bg="light" variant="dark" sticky="top" className="header">
      <Container>
        <Navbar.Brand href="/">
        <img src={Logo} className="img-responsive" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
           
          </Nav>
          {/* <Nav className="menu-list">
            <Nav.Link href="#" className='home-link' >Home <SpanTag className="mob-line-arrow"> <img src={linearrow} className="line-arrow" /></SpanTag></Nav.Link>
            <Nav.Link href="/about">About <SpanTag className="mob-line-arrow" > <img src={linearrow} className="line-arrow" /></SpanTag></Nav.Link>
            <Nav.Link href="#">Projects <SpanTag className="mob-line-arrow"> <img src={linearrow} className="line-arrow" /></SpanTag></Nav.Link>
            <Nav.Link href="#">Press <SpanTag className="mob-line-arrow"> <img src={linearrow} className="line-arrow" /></SpanTag></Nav.Link>
            <Nav.Link href="#" className='mob-contact'>Contact us <SpanTag className="mob-line-arrow"> <img src={linearrow} className="line-arrow" /></SpanTag></Nav.Link>
            <Nav.Link href="#" className='gets-btn'>Get in touch<SpanTag className='line-align'><img src={Line}/></SpanTag></Nav.Link>
            </Nav> */}

          {/* <Nav className="menu-list">
            <NavLink to="/" onClick={() => setExpanded(false)} className='home-link'>Home <SpanTag className="mob-line-arrow"> <img src={linearrow} className="line-arrow" /></SpanTag></NavLink>
            <NavLink to="about" onClick={() => setExpanded(false)} >About <SpanTag className="mob-line-arrow" > <img src={linearrow} className="line-arrow" /></SpanTag></NavLink>
            <NavLink to="project" onClick={() => setExpanded(false)}>Projects <SpanTag className="mob-line-arrow"> <img src={linearrow} className="line-arrow" /></SpanTag></NavLink>
            <NavLink to="blog"  onClick={() => setExpanded(false)}>Blog <SpanTag className="mob-line-arrow"> <img src={linearrow} className="line-arrow" /></SpanTag></NavLink>
            <NavLink to="press"  onClick={() => setExpanded(false)}>Press <SpanTag className="mob-line-arrow"> <img src={linearrow} className="line-arrow" /></SpanTag></NavLink>       
            <NavLink to="/contact"  onClick={() => setExpanded(false)} className='mob-contact'>Contact us <SpanTag className="mob-line-arrow"> <img src={linearrow} className="line-arrow" /></SpanTag></NavLink>
            <NavLink to="/contact"  onClick={() => setExpanded(false)} className='gets-btn'>Get in touch<SpanTag className='line-align'><img src={Line}/></SpanTag></NavLink>
            </Nav> */}
            <Nav className="menu-list">
            <Nav.Link href="/" onClick={() => setExpanded(false)} className='home-link'>Home <SpanTag className="mob-line-arrow"> <img src={linearrow} className="line-arrow" /></SpanTag></Nav.Link>
            <Nav.Link href="/about" onClick={() => setExpanded(false)} >About <SpanTag className="mob-line-arrow" > <img src={linearrow} className="line-arrow" /></SpanTag></Nav.Link>
            <Nav.Link href="/project" onClick={() => setExpanded(false)}>Projects <SpanTag className="mob-line-arrow"> <img src={linearrow} className="line-arrow" /></SpanTag></Nav.Link>
            <Nav.Link href="/blog"  onClick={() => setExpanded(false)}>Blog <SpanTag className="mob-line-arrow"> <img src={linearrow} className="line-arrow" /></SpanTag></Nav.Link>
            <Nav.Link href="/press"  onClick={() => setExpanded(false)}>Press <SpanTag className="mob-line-arrow"> <img src={linearrow} className="line-arrow" /></SpanTag></Nav.Link>       
            <Nav.Link href="/contact"  onClick={() => setExpanded(false)} className='mob-contact'>Contact us <SpanTag className="mob-line-arrow"> <img src={linearrow} className="line-arrow" /></SpanTag></Nav.Link>
            <Nav.Link href="/contact"  onClick={() => setExpanded(false)} className='gets-btn'>Get in touch<SpanTag className='line-align'><img src={Line}/></SpanTag></Nav.Link>
            </Nav>



          <MyDiv className='mobeil-footer'>
            <Row>
              <Col xs={7}>
                <ul className='mobeil-footer-social'>
                  <li><a href="#" target="_blank"><img src={facebook} className="img-responsive" /></a></li>
                  <li><a href="#" target="_blank"><img src={twitter} className="img-responsive" /></a></li>
                  <li><a href="#" target="_blank"><img src={linkedin} className="img-responsive" /></a></li>
                </ul>
              </Col>
              <Col xs={5}>
                <div className='mob-fooet-link'>
                <Nav.Link href="/privacy-policy">Privacy Policy</Nav.Link>
                <Nav.Link href="/terms-and-conditions">Terms & conditions</Nav.Link>
                <Nav.Link href="/code-of-conduct">Code of conduct</Nav.Link>
                </div>
              </Col>
            </Row>
          </MyDiv>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;