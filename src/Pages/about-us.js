import React from "react";
import { useEffect } from "react";
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Contactform from '../Common/contact-form';
import Ourteams from '../Pages/shared/our-team-content';
import { MyDiv, HeadingOne,HeadingTwo, HeadingThree, PTag,SpanTag,Section, HeadingFour } from '../Common/Common';
import Butnarrowmobile from '../assets/img/about/btn-arrow.png';
import Aboutbanner from '../assets/img/about/about-banner-img.png';
import Aboutbannermob from '../assets/img/about/about-banner-img-mobile.png';
import Downarrow from '../assets/img/inner-page-arrow-down-mob.png';
import Bannerbottom from '../assets/img/about/about-bottom-banner.png';
import Bannerbottommmob from '../assets/img/about/about-bottom-banner-mob.png';
import Portimg1 from '../assets/img/about/port-img1.png';
import Portimg2 from '../assets/img/about/port-img2.png';
import Portimg3 from '../assets/img/about/port-img3.png';
import Portimg4 from '../assets/img/about/port-img4.png';
import Portimg5 from '../assets/img/about/port-img5.png';
import Portimg6 from '../assets/img/about/port-img6.png';
import Portimg7 from '../assets/img/about/port-img7.png';
import Portimg8 from '../assets/img/about/port-img8.png';
import Portimg9 from '../assets/img/about/port-img9.png';
import Portimg10 from '../assets/img/about/port-img10.png';
import Portimg11 from '../assets/img/about/port-img11.png';
import Portimg12 from '../assets/img/about/port-img12.png';
import Portimg13 from '../assets/img/about/port-img13.png';
import Portimg14 from '../assets/img/about/port-img14.png';
import Portimg15 from '../assets/img/about/port-img15.png';
import Portimg16 from '../assets/img/about/port-img16.png';
import Portimg17 from '../assets/img/about/port-img17.png';



function About() { 
    
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        document.body.classList.add('about-layout')
        return () => {
           document.body.classList.remove('about-layout')
        }
     }, [])
     return (
    <>
    <MyDiv className="about-inner-page">
        <MyDiv className="about-inner-bg">
        <Container>
            <Row>
                <MyDiv className="about-top-title">
                   
                    <HeadingOne className="about-title">A team of certified sustainability professionals & energy management experts</HeadingOne>
                </MyDiv>
            </Row>
            <MyDiv className="about-banner-full">
                
            <Row>
                <Col md={8} >
                    <img className="about-img hide-for-small-only" src={Aboutbanner} alt="About banner"/>
                    <img className="about-img show-for-small-only" src={Aboutbannermob} alt="About banner"/>
                </Col>
                <Col md={4} className="about-desc-box">
                    <MyDiv  className="about-desc">
                    <p>The word 'nanban' means 'friend' in the classic Indian language Tamil. True to its meaning, Nanban was established with the sole vision of helping the community at large attain financial freedom and supporting the underprivileged through socially-relevant initiatives.</p>
                    </MyDiv>
                    <MyDiv className="show-for-small-only">
                    <Link to="/posts" className="about-page-btn">Get Funded <SpanTag className='line-align-banner'><img className='show-for-small-only'src={Butnarrowmobile} /></SpanTag> </Link>
                    </MyDiv>
                   
                </Col> 
            </Row>
            </MyDiv>
        </Container>            
        </MyDiv>
            <MyDiv className="down-arrow show-for-small-only">
            <a href="#our-teams"><img className="arrow-icon" src={Downarrow} alt="arrow icon"/></a>
                </MyDiv>
    </MyDiv>

        <section className="our-team-full" id="our-team">
            <Container  id="our-teams">
                <Row>
                    <MyDiv className="our-teams-top-title">
                        <HeadingThree>Our Team</HeadingThree>
                    </MyDiv>
                </Row>
            </Container>
            <MyDiv className="our-portfolio-section " id="portfolio">
                 <Ourteams/>
            </MyDiv>
        </section>
        

        <Section className="our-banner-bottom">
        <Container>
            <Row>
                <MyDiv className="our-banner-inner">
                    <img className="hide-for-mobile-only" src={Bannerbottom} alt="Banner bottom"/>
                    <img className="show-for-mobile-only" src={Bannerbottommmob} alt="Banner bottom"/>
                    
                </MyDiv>
              </Row>
         </Container>
        </Section>

        <Section className="our-portfolio-info">
        <Container>
            <Row>
                <MyDiv className="our-portfolio-info-inner">
                    <MyDiv className="port-item-box">
                     <a href="javascript:void(0)" className="">
                    <img className="" src={Portimg1} alt="port-img1"/>
                    </a>
                    </MyDiv>
                    <MyDiv className="port-item-box">
                     <a href="javascript:void(0)" className="">
                    <img className="" src={Portimg2} alt="port-img2"/>
                    </a>
                    </MyDiv>
                    <MyDiv className="port-item-box">
                     <a href="javascript:void(0)" className="">
                    <img className="" src={Portimg3} alt="port-img3"/>
                    </a>
                    </MyDiv>
                    <MyDiv className="port-item-box">
                     <a href="javascript:void(0)" className="">
                    <img className="" src={Portimg4} alt="port-img4"/>
                    </a>
                    </MyDiv>
                    <MyDiv className="port-item-box">
                     <a href="javascript:void(0)" className="">
                    <img className="" src={Portimg5} alt="port-img5"/>
                    </a>
                    </MyDiv>
                    <MyDiv className="port-item-box">
                     <a href="javascript:void(0)" className="">
                    <img className="" src={Portimg6} alt="port-img6"/>
                    </a>
                    </MyDiv>
                    <MyDiv className="port-item-box">
                     <a href="javascript:void(0)" className="">
                    <img className="" src={Portimg7} alt="port-img7"/>
                    </a>
                    </MyDiv>
                    <MyDiv className="port-item-box">
                     <a href="javascript:void(0)" className="">
                    <img className="" src={Portimg8} alt="port-img8"/>
                    </a>
                    </MyDiv>
                    <MyDiv className="port-item-box">
                     <a href="javascript:void(0)" className="">
                    <img className="" src={Portimg9} alt="port-img9"/>
                    </a>
                    </MyDiv>
                    <MyDiv className="port-item-box">
                     <a href="javascript:void(0)" className="">
                    <img className="" src={Portimg10} alt="port-img10"/>
                    </a>
                    </MyDiv>
                    <MyDiv className="port-item-box">
                     <a href="javascript:void(0)" className="">
                    <img className="" src={Portimg11} alt="port-img11"/>
                    </a>
                    </MyDiv>
                    <MyDiv className="port-item-box">
                     <a href="javascript:void(0)" className="">
                    <img className="" src={Portimg12} alt="port-img12"/>
                    </a>
                    </MyDiv>
                    <MyDiv className="port-item-box">
                     <a href="javascript:void(0)" className="">
                    <img className="" src={Portimg13} alt="port-img13"/>
                    </a>
                    </MyDiv>
                    <MyDiv className="port-item-box">
                     <a href="javascript:void(0)" className="">
                    <img className="" src={Portimg14} alt="port-img14"/>
                    </a>
                    </MyDiv>
                    <MyDiv className="port-item-box">
                     <a href="javascript:void(0)" className="">
                    <img className="" src={Portimg15} alt="port-img15"/>
                    </a>
                    </MyDiv>
                    <MyDiv className="port-item-box">
                     <a href="javascript:void(0)" className="">
                    <img className="" src={Portimg16} alt="port-img16"/>
                    </a>
                    </MyDiv>
                    <MyDiv className="port-item-box">
                     <a href="javascript:void(0)" className="">
                    <img className="" src={Portimg17} alt="port-img17"/>
                    </a>
                    </MyDiv> 
                </MyDiv>
            </Row>
            </Container>

        </Section>
      <Section className="our-get-touch-form-bg">
          <Contactform/>
      </Section>    

     

      </>

  );
}

export default About;