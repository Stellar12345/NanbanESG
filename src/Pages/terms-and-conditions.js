import React from "react";
import { useEffect } from "react";
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col';

import { MyDiv, HeadingOne,HeadingTwo, HeadingThree, PTag,SpanTag,Section, HeadingFour } from '../Common/Common';

function Termscontent() { 
    useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        document.body.classList.add('terms-layout')
        return () => {
           document.body.classList.remove('terms-layout')
        }
     }, [])
     return (
    <>
     <MyDiv className="terms-and-condition-banner">
     <Container>
         <Row>
      <HeadingOne>Terms & Conditions</HeadingOne>
      </Row>
      </Container>
     </MyDiv>
     
     <MyDiv className="terms-and-condition-content">
      <Container>
         <Row>
            <MyDiv className="terms-and-condition-desc">
                <p>
                The Service provided by the Owner allows Users to run a series of technological tools in a self-service manner, allowing them to generate legal documents based on Users' input for their online activities (eg. website, mobile app, etc.). 
                </p>
                <p>
                As part of its Service, the Owner allows Users to generate, host and keep one or more document templates up to date online. Under no circumstance will Nanban's staff or any counsel assist Users in making the correct choice or in drafting the correct custom clauses.
                </p>
                <p>
                It is therefore the Users' sole responsibility to pick the correct choices for their respective scenario or activity, to verify compatibility of the generated documents with applicable law and to ensure that their activity complies with all applicable legal provisions.
                </p>
                <p>
                In light of the above, the Service offered by Nanban cannot be regarded as, nor does it substitute any legal advice given by a professional or expert.   
                </p>
                <HeadingThree>Data of Users on Nanban site</HeadingThree>
                <p>
                In order to understand how personal data is processed, Users may read the complete Nanban privacy policy.
                </p>
                <HeadingThree>Liability</HeadingThree>
                <p>
                Content available on <a href="http://www.Nanban.com">Nanban.com</a> and documents generated using the Service are intended for general information purposes only. Although all clauses and provisions inside the generator database have been drafted by a team of highly qualified legal experts and regularly undergo reviews and updates, documents are generated in a fully automated manner. 
                </p>
                <p>
                Therefore do not constitute or substitute the rendering of legal advice, nor does any assistance and customer support provided by Nanban establish an attorney-client relationship. 
                </p>
                <p>
                This is why, despite all efforts in offering the best possible service, Nanban cannot guarantee generated documents to be fully compliant with applicable law. Users should therefore not rely upon documents generated using Nanban without seeking legal advice from an attorney licensed in the relevant jurisdiction(s).
                </p>
            </MyDiv>
         </Row>
      </Container>

     

     </MyDiv>
      </>

  );
}

export default Termscontent;