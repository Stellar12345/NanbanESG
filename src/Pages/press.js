import React from "react";
import { useEffect } from "react";
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import { MyDiv, HeadingOne,HeadingTwo, HeadingThree, PTag,SpanTag,Section, HeadingFour } from '../Common/Common';
import Downarrow from '../assets/img/inner-page-arrow-down-mob.png';
import Press_list from '../Pages/Press/press-data-list';
import arrow_line from '../assets/img/arrow-sm-height.png';


function Press() { 
    
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
            document.body.classList.add('press-layout')
        return () => {
           document.body.classList.remove('press-layout')
        }
     }, [])
     return (
    <>
        <MyDiv className="press-banner-full">
                <MyDiv className="press-banner-inner">
                    <Container>
                        <Row>
                            <MyDiv className="press-top-title">
                            <HeadingOne>We are recognized thought-leaders and at the forefront of innovation in our industry</HeadingOne>
                            </MyDiv>
                        </Row>
                    </Container>
                </MyDiv>
                <MyDiv className="down-arrow show-for-small-only">
            <a href="#our-press"><img className="arrow-icon" src={Downarrow} alt="arrow icon"/></a>
         </MyDiv>
        </MyDiv>    
        <Section className="press-list-full">
            <MyDiv className="press-inner-box">
                 <Container>
                        <Row>
                            <MyDiv className="press-inner-title">                            
                                <HeadingThree>What they're saying</HeadingThree>
                            </MyDiv>
                        </Row>
                    </Container>
            </MyDiv>

            <MyDiv className="press-list-data">
                <Press_list/>
               </MyDiv>      
        </Section>
        <Section className="press-let-work">
            <MyDiv className="press-lets-contact">
                <Container>
                    <Row>
                        <MyDiv className="press-lets-contact-inner">
                        <HeadingThree>Get in touch, let's work together!</HeadingThree>
                        <Link to="/contact"  className="btn-contact">Contact Us <SpanTag className='arrow-align-banner'> <img className='' src={arrow_line} alt="work"/> </SpanTag> </Link>
                        </MyDiv>
                    </Row>
                </Container>
            </MyDiv>            
        </Section>

       
    </>

  );
}

export default Press;