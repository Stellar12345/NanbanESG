import React from "react";
import {useRef} from 'react';
import { useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import HomeBanner from '../assets/img/Home/home-banner.png';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Line from "../assets/img/Header/line2.png";
import Nextsection from "../assets/img/Home/home-next-arrow.png";
import Aboutimg from '../assets/img/Home/who-are-we.png';
import Aboutimgmobile from '../assets/img/Home/who-are-we-mobile.png';
import Butnarrowmobile from '../assets/img/Header/arrow-mob-white.png';
import Arrowblack from '../assets/img/arrow-black.png';
import Arrowmobwhite from '../assets/img/arrow-mob-white.png';
import Projectimg from '../assets/img/Home/our-project.png';
import Projectimgmob from '../assets/img/Home/our-project-mobile.png';
import Submitarrow from '../assets/img/submit-arrow.png';
import Word from '../assets/img/word.svg';
import Submitarrowmob from '../assets/img/submit-arrow-mob-white.png';
import Contactform from '../Common/contact-form';
import Logo from "../assets/img/nanbanesg.png";
import { MyDiv, HeadingOne,HeadingTwo, HeadingThree, PTag,SpanTag,Section, HeadingFour } from '../Common/Common';



function Home() {

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    document.body.classList.add('home-layout')
    return () => {
       document.body.classList.remove('home-layout')
    }
 }, [])
  // const sectionOne = useRef(null)
  // const sectionOneScroll = () => sectionOne.current.scrollIntoView(); 

  // const ref = useRef(null);

  // const handleClick = () => {
  //   console.log('Hi');
  //   ref.current?.scrollIntoView({behavior: 'smooth'});
  // };

  
  return (
    <>
    <Container className="home-banner-align">
      <Row className="justify-content-center">
        <Col md={7} className="">
        <MyDiv className='banner-text '>
            {/* <HeadingTwo className="hide-for-small-only"><img src={Logo} /></HeadingTwo> */}
            {/* <HeadingTwo className="hide-for-small-only">Nanban ESG Solutions </HeadingTwo> */}
            <PTag className="hide-for-small-only"> Validating the <br /><SpanTag className='bg-color'>Sustainable Future</SpanTag> <br /> with ESG solutions</PTag>
            <PTag className="show-for-small-only"> Validating the <br /><SpanTag className='bg-color'>Sustainable</SpanTag><br /><SpanTag className='bg-color bg-color-mob-fu'>Future with</SpanTag> <br /> ESG solutions</PTag>
            <Link to="contact" className="gets banner-button">Get Funded <SpanTag className='line-align-banner'><img className='hide-for-small-only'src={Line} /> <img className='show-for-small-only'src={Butnarrowmobile} /></SpanTag> </Link>
            <img className='img-responsive word-img'src={Word} />

        </MyDiv>
        </Col>
        <Col md={5} className="home-banner-img"><img src={HomeBanner} className='img-responsive' /></Col>
        <a href="#who-are" className="bown-arrow"><img src={Nextsection} alt="arrow" /></a>
      </Row>
    </Container>
     
     <Section className="who-are-section" >
     <Container id="who-are">
      <Row>
        <HeadingThree className="titel-who-are-we hide-for-small-only">Who are we?</HeadingThree>
      </Row>
      <Row className="about-desc-full">
        <Col md={5} className="about-img-part">
        <img className="hide-for-small-only" src={Aboutimg} alt="Who are we"/>
        <img className="show-for-small-only" src={Aboutimgmobile} alt="Who are we"/>
        </Col> 
        <Col md={7} className="">
        <MyDiv className="about-desc-part">
        <HeadingThree className="titel-who-are-we show-for-small-only">About us</HeadingThree>
        <HeadingThree className="about-inner-titel">We conduct due diligence to ensure projects meet ESG Standards and upon completion, determine a funding path</HeadingThree>
          {/* <HeadingThree className="about-inner-titel">
          We conduct due diligence<br/> to ensure projects meet<br/> ESG Standards and upon<br/> completion, determine a<br/> funding path
          </HeadingThree> */}
          <p>We work with post-product companies that have an ESG focus seeking capital to commercialize their technology or solution. We conduct thorough due diligence for the purposes of determining eligibility of funding within our network. </p>
        </MyDiv>
        </Col>
      </Row>
      <Row>
        <Col md={5} className="mob-enviroment">
          <ul className="our-enviroment-list">
            <li>
              <HeadingThree>Environmental</HeadingThree>
              <p>How does your project impact various<br/> envinromental factors?</p>
            </li>
            <li>
              <HeadingThree>Sustainability</HeadingThree>
              <p>Is your project in line with best-practices<br/>in sustainability?</p>
            </li>
            <li>
              <HeadingThree>Governance</HeadingThree>
              <p>Are you ensuring that your project is being governed<br/>in a way that comply with SEC Standards?</p>
            </li>
            <li className="show-for-small-only">
            <HeadingTwo>0-100%</HeadingTwo>
              <SpanTag>Your ESG Readiness score</SpanTag>
            </li>
          </ul>

        </Col>
        <Col md={7} className="our-readiness-full-box hide-for-small-only">
        <MyDiv className="our-readiness">
          <HeadingTwo>0-100%</HeadingTwo>
          <SpanTag>Your ESG Readiness score</SpanTag>
        </MyDiv>
        </Col>
      </Row>

     </Container>

     </Section>
     <Section className="our-getin-touch">
          <Container>
            <Row>
              <MyDiv className="our-getin-touch-inner">
                <Row>
            <Col md={9}>
            <MyDiv className="our-getin-box">
              <HeadingTwo className="getin-title">Get in touch, let's<br/> work together!</HeadingTwo>
              </MyDiv>
            </Col>
            <Col md={3} className="our-right-contact">
            <MyDiv className="right-contact-btn">
            <Link to="contact"className="btn-contact">Contact Us <SpanTag className='arrow-align-banner'><img className='hide-for-small-only'src={Arrowblack} /> <img className='show-for-small-only'src={Arrowblack} /> </SpanTag> </Link>
            </MyDiv>
            </Col>
            </Row>
            </MyDiv>
            </Row>
          </Container>
     </Section>

      <Section className="our-project-part">
        <Container>
          <Row>
          <Col md={7} className="our-project-data">
            <MyDiv className="our-project-inner">
              <HeadingTwo className="our-project-title">We ensure you're audit-ready by ensuring that the project has all the necessary information to support your claims</HeadingTwo>
                <ul className="our-project-list-inner">
                  <li>
                  Executive summary of the product or project
                  </li>
                  <li>
                  Financials and metrics
                  </li>
                  <li>
                  Patent information
                  </li>
                  <li>
                  Detailed explanation of the ESG aspects of the project and how it meets the ESG standards
                  </li>
                </ul>
            </MyDiv>
          </Col>
          <Col md={5} className="our-project-img">
            <MyDiv className="our-project-img-inner">
          <img className='hide-for-small-only'src={Projectimg}  alt="project img"/>
          <img className='show-for-small-only'src={Projectimgmob} alt="project img"/>
          
          </MyDiv>
          </Col>
          </Row>
        </Container>
      </Section>

      <Section className="our-get-touch-form-bg">
      {/* <MyDiv className="our-get-touch-form">
          <Container className="our-get-touch-form-inner">
            <Row>
            <Col md={5}>
              <HeadingFour className="title-left-con">Contact</HeadingFour>
            </Col>
            <Col md={7}>
              <HeadingThree className="title-right-con">Get in touch, let's work together</HeadingThree>
            </Col>
            </Row>
            <MyDiv className="get-touch-form-box">
            <Form>
              <ul className="get-touch-form-inner">
                <li>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" className="input-text" placeholder="First name, last name"  required/>
                </li>
                <li>
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" name="email"  className="input-text" placeholder="Email Address" required />
                </li>
                <li>
                <Form.Label>Message</Form.Label>
                 <Form.Control as="textarea" name="message" className="input-textarea" placeholder="Type your message" />
                </li>
              </ul>
             <Button type="submit" className="btn-submit">Submit  <img className='hide-for-small-only' src={Submitarrow} alt="submit"/>
             <img className='show-for-small-only' src={Submitarrowmob} alt="submit"/>
             
             </Button>
            </Form>
            </MyDiv>
            
          </Container>
          </MyDiv> */}
          <Contactform/>
      </Section>    

      </>

  );
}

export default Home;
