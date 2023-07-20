import React from "react";
import { useEffect,useState } from "react";
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import { MyDiv, HeadingOne,HeadingTwo, HeadingThree, PTag,SpanTag,Section, HeadingFour } from '../Common/Common';
import Downarrow from '../assets/img/inner-page-arrow-down-mob.png';
import Blogbanner from '../assets/img/blog/blog-banner.png';
import arrow_line from '../assets/img/arrow-sm-height.png';

import Blogcontent from './blog/blog-content';
import Blogcontentnew from './blog/blog-content-new';

function Blog() { 
 
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
         document.body.classList.add('blog-layout')
        return () => {
           document.body.classList.remove('blog-layout')
        }
     }, [])
     return (
    <>
        <MyDiv className="blog-inner-page">
        <Container>
            <Row>
                <MyDiv className="blog-top-title">
                    <HeadingOne className="contat-title">Blog</HeadingOne>
                </MyDiv>
            </Row>
            <MyDiv className="blog-banner-full">
            <Row>
                <Col md={8} >
                    <img className="blog-img" src={Blogbanner} alt="Blog"/>
                    {/* <img className="blog-img show-for-small-only" src={Contactbannermobile} alt="Blog"/> */}
                </Col>
                <Col md={4} className="blog-desc-box">
                    <MyDiv  className="blog-desc">
                    <p>Touch base with our team and get started reviewing your projects to see if they meet funding requirements.</p>
                    </MyDiv>
                   
                </Col> 
            </Row>
            
            </MyDiv>
        </Container>
        <MyDiv  className="down-arrow show-for-small-only">
            <a href="#our-blog"> <img className="arrow-icon" src={Downarrow} alt="arrow icon"/></a>
                    </MyDiv>
    </MyDiv>   


{/* blog work*/}
    
        <MyDiv className="our-lastes-blog">
        <Blogcontent/>
        {/* <Blogcontentnew/> */}
        </MyDiv>

















       
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

export default Blog;