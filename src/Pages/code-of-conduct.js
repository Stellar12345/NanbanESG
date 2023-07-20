import React from "react";
import { useEffect } from "react";
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col';

import { MyDiv, HeadingOne,HeadingTwo, HeadingThree, PTag,SpanTag,Section, HeadingFour } from '../Common/Common';

function Codeofconduct() { 
    useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        document.body.classList.add('codeofconduct-layout')
        return () => {
           document.body.classList.remove('codeofconduct-layout')
        }
     }, [])
     return (
    <>
     <MyDiv className="code-of-conduct-banner">
      <HeadingOne>Code of Conduct</HeadingOne>
     </MyDiv>
     
     <MyDiv className="code-of-conduct-content">
      <Container>
         <Row>
            <MyDiv className="code-of-conduct-desc">
                <p>
                At Nanban, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and disclose your information when you use our website and services.   
                </p>
                <HeadingThree>What information do we collect?</HeadingThree>
                <p>When you visit our website, we may collect certain information about your device, such as your IP address, browser type, and operating system. We also collect information about how you use our website, such as the pages you view and the links you click on.</p>
                <p>If you sign up for our services, we may collect additional information about you, such as your name, email address, and phone number.</p>
                <HeadingThree>How do we use your information?</HeadingThree>
                <p>We use your information to provide you with our services, communicate with you, and improve our website and services. We may also use your information to send you marketing communications about our products and services, but you can opt out of these communications at any time.</p>
                <p>We do not sell or rent your personal information to third parties. However, we may share your information with our service providers, such as hosting providers and payment processors, who help us provide our services.</p>
                <p>We may also disclose your information if required by law or to protect our rights or the rights of others.</p>
                <HeadingThree>How do we protect your information?</HeadingThree>
                <p>We use industry-standard security measures to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or method of electronic storage is completely secure, so we cannot guarantee absolute security.</p>
                <HeadingThree>Your rights</HeadingThree>
                <p>You have the right to access, correct, or delete your personal information that we hold.</p>
            </MyDiv>
         </Row>
      </Container>

     

     </MyDiv>
      </>

  );
}

export default Codeofconduct;