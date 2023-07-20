import React from "react";
import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import { FaAngleUp } from "@react-icons/all-files/fa/FaAngleUp";
import { NavLink  } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import { HashLink } from 'react-router-hash-link';
import { MyDiv, PTag } from '../Common/Common';
import Container from 'react-bootstrap/Container';
import Logo from "../assets/img/nanbanesg.png";
import Facebook from '../assets/img/Footer/facebook.svg';
import Twitter from '../assets/img/Footer/twitter.svg';
import Linkedin from '../assets/img/Footer/linked.svg';
function Footer(){
      const [showButton, setShowButton] = useState(false);
 
    useEffect(() => {
      window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      });
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };


    return(
        <>
        <MyDiv className="main-footer">        
        <MyDiv className="inner-page-footer links">
            <Container className="footer-container">
                <Row>
                    <Col  md={7}  className="footer footer-logo">
                    <div className="footer-bottom-info">
                        <a className="mail-us social" href="#"><img src={Logo}  /></a>	
                    </div>
                    </Col>
                    <Col  md={3} xs={6}  className="footer">
                    <div className="footer-bottom-info">
                        <h5>Pages</h5>
                            <ul className="footer-nav ms-auto">
                            {/* <li className="footer-item mx-0"><a className="footer-link" href="/about">About</a></li>
                            <li className="footer-item mx-0"><a className="footer-link" href="#">Projects </a></li>
                            <li className="footer-item mx-0"><a className="footer-link" href="#">Press</a></li> 
                            <li className="footer-item mx-0"><a className="footer-link" href="#">Contact</a></li>  */}
                            <li className="footer-item mx-0"><Nav.Link href="/about" className="footer-link">About</Nav.Link></li>
                            <li className="footer-item mx-0"><Nav.Link href="/project" className="footer-link">Projects </Nav.Link></li>
                            {/* <li className="footer-item mx-0"><NavLink to="/#industries" className="footer-link">Industries</NavLink></li>  */}
                            <li className="footer-item mx-0"><HashLink className="footer-link" smooth  to='project/#our_industries' > Industries </HashLink></li>
                            <li className="footer-item mx-0"><HashLink className="footer-link" smooth  to='about/#our-teams' > Team </HashLink></li>
                            <li className="footer-item mx-0"><Nav.Link href="/Press" className="footer-link">Press</Nav.Link></li> 
                            <li className="footer-item mx-0"><Nav.Link href="/blog" className="footer-link">Blog </Nav.Link></li>
                            {/* <li className="footer-item mx-0"><NavLink to="/contact" className="footer-link">Contact</NavLink></li>  */}
                         </ul>
                    </div>
                    </Col>
                    <Col  md={2}  xs={6}className="footer">
                    <div className="footer-bottom-info">
                        <h5>Contact</h5>
                        <ul className="footer-nav ms-auto">
                            <li className="footer-item mx-0"><a  href="/contact"  className="footer-link">Address</a></li>
                            <li className="footer-item mx-0"><a className="footer-link" href="/contact">Contact Email</a></li>
                        </ul>
                    </div>
                    </Col>  
                    </Row>
                    <Row>
                    <Col  md={7}>
                    <div className="footer-bottom-info show-for-small-only">                        
                        <a className="social-menu" href="#"><img src={Twitter}  /></a>	
                        <a className="social-menu" href="#"><img src={Linkedin}  /></a>	
                        <a className="social-menu" href="#"><img src={Facebook}  /></a>	
                    </div>
                    </Col>
                    </Row>
            </Container>
       </MyDiv>
       
       <MyDiv className="links-bottom">
        
            <Container className="footer-container">
            <MyDiv className="links-bottom-inner">
            <Row>
                    <Col  md={7}   className="footer hide-for-small-only">
                    <div className="footer-bottom-info">
                        <a className="social-menu" href="#"><img src={Twitter}  /></a>
                        <a className="social-menu" href="#"><img src={Linkedin}  /></a>	
                        <a className="social-menu" href="#"><img src={Facebook}  /></a>	                       	
                    </div>
                    </Col>  
                    
                    <Col  md={5}  className="footer">
                    <div className="footer-bottom-info footer-Privacy-part">
                     <Nav.Link  href="/privacy-policy" className="addition-menu">Privacy Policy</Nav.Link>
                     <Nav.Link  href="/terms-and-conditions" className="addition-menu">Terms & conditions</Nav.Link>
                     <Nav.Link href="/code-of-conduct" className="addition-menu">Code of conduct</Nav.Link>
                    </div>
                    </Col>      
                </Row>
                </MyDiv>
            </Container>
            
             {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          <FaAngleUp />
        </button>
      )}
       </MyDiv>
       </MyDiv>
    </>
        
    )
}
export default Footer;