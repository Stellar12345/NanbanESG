import React from "react";
import { useEffect } from "react";
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Contactform from '../Common/contact-form';
import Ourproject from '../Pages/shared/our-poject-content';
import Ourindustries from '../Pages/shared/our-industries-content';
import { MyDiv, HeadingOne,HeadingTwo, HeadingThree, PTag,SpanTag,Section, HeadingFour } from '../Common/Common';
import Downarrow from '../assets/img/inner-page-arrow-down-mob.png';
import Contactarrow from '../assets/img/submit-arrow-mob-white.png';


function Project() { 
    
    useEffect(() => {
       // window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        document.body.classList.add('project-layout')
        return () => {
           document.body.classList.remove('project-layout')
        }
     }, [])
     return (
    <>
       
    <MyDiv className="our-project-top-full">
            <MyDiv className="our-project-top-banner">       
                <Container>
                    <Row>
                        <MyDiv className="project-inner-title">
                            <HeadingOne>Projects we're<br/> working on that are<br/> shaping the future</HeadingOne>
                        </MyDiv>
                    </Row>
                </Container>
            </MyDiv>
        <MyDiv className="down-arrow show-for-small-only">
            <a href="#our-project-info"><img className="arrow-icon" src={Downarrow} alt="arrow icon"/></a>
         </MyDiv>
    </MyDiv>
     <Section className="our-project-full">
        <div id="our-project-info">
        <Ourproject/>
        </div>
    </Section>
    <Section className="our-lets-work">
        <MyDiv className="our-lets-work-bg">
          <Container>
            <Row className="our-lets-work-inner">
             
              
            <Col md={9} sm={8}>
            <MyDiv className="our-lets-work-box">
              <HeadingTwo className="getin-title">Get in touch, let's<br/> work together!</HeadingTwo>
              </MyDiv>
            </Col>
            <Col md={3} sm={4} className="our-lets-right-contact">
            <MyDiv className="our-lets-contact-btn">
            <Link to="/contact" className="btn-contact">Contact Us <SpanTag className='arrow-align-banner'><img className=''src={Contactarrow} /></SpanTag> </Link>
            </MyDiv>
            </Col>
           
            </Row>
          </Container>
          </MyDiv>
     </Section>

     <section className="our-industries" id="our_industries" >
        <Container >
            <Row>
            <MyDiv className="our-industries-top-title">
                <HeadingThree>Industries</HeadingThree>
            </MyDiv>
            </Row>
        </Container>
        <MyDiv className="industries-post-data">
        <Ourindustries/>
        </MyDiv>
     </section>

     <Section className="our-get-touch-form-bg">
          <Contactform/>
      </Section> 



      </>

  );
}

export default Project;