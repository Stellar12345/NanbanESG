import React from "react";
import { useEffect } from "react";
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Contactform from '../Common/contact-form';
import Contactformnew from '../Common/contact-form-new';
import { MyDiv, HeadingOne,HeadingTwo, HeadingThree, PTag,SpanTag,Section, HeadingFour } from '../Common/Common';
import Contactbanner from '../assets/img/contact/contact-banner.png';
import Contactbannermobile from '../assets/img/contact/contact-banner-mobile.png';
import Downarrow from '../assets/img/inner-page-arrow-down-mob.png';
import Bottombanner from '../assets/img/contact/bottom-banner.png';
import Bottombannermobile from '../assets/img/contact/bottom-banner-mobile.png';


function Contact() { 
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        document.body.classList.add('contact-layout')
        return () => {
           document.body.classList.remove('contact-layout')
        }
     }, [])
     return (
    <>
    <MyDiv className="contact-inner-page">
        <Container>
            <Row>
                <MyDiv className="con-top-title">
                    <SpanTag className="hide-for-small-only">Lorem ipsum copy might go here</SpanTag>
                    <HeadingOne className="contat-title">Contact Us</HeadingOne>
                </MyDiv>
            </Row>
            <MyDiv className="contact-banner-full">
            <Row>
                <Col md={8} >
                    <img className="contact-img hide-for-small-only" src={Contactbanner} alt="Contact Us"/>
                    <img className="contact-img show-for-small-only" src={Contactbannermobile} alt="Contact Us"/>
                </Col>
                <Col md={4} className="contact-desc-box">
                    <MyDiv  className="contact-desc">
                    <p>Touch base with our team and get started reviewing your projects to see if they meet funding requirements.</p>
                    </MyDiv>
                   
                </Col> 
            </Row>
            
            </MyDiv>
        </Container>
        
    </MyDiv>
    <MyDiv  className="down-arrow show-for-small-only">
            <a href="#contact-us"> <img className="arrow-icon" src={Downarrow} alt="arrow icon"/></a>
                    </MyDiv>
      <section className="our-get-touch-form-bg" id="contact-us">
          <Contactform/>
          {/* <Contactformnew/> */}
      </section>    

      <Section className="contact-bottom-banner">
      <Container>
        <Row>
        <MyDiv  className="bottom-banner-inner">
            <img className="bottom-banner-img hide-for-small-only" src={Bottombanner} alt="bottom banner"/>
            <img className="bottom-banner-img show-for-small-only" src={Bottombannermobile} alt="bottom banner"/>
            
        </MyDiv>
        </Row>
        </Container>
      </Section>

      </>

  );
}

export default Contact;
