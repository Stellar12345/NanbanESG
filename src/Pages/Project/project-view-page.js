import React from "react";
import { useEffect } from "react";
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import { MyDiv, HeadingOne,HeadingTwo, HeadingThree, PTag,SpanTag,Section, HeadingFour } from '../../Common/Common';
import Nanban_chola from '../../assets/img/Project/our-project-logo1.png';
import Solar_energy from '../../assets/img/Project/solar-energy.png';
import products from '../shared/industries-data.json';

function Projectview() { 
    const last_segment = window.location.pathname.split('/').pop();
    console.log(last_segment)
    useEffect(() => {
        document.body.classList.add('project-view-layout')
        return () => {
           document.body.classList.remove('project-view-layout')
        }        
     }, [])
     return (
    <>
    <MyDiv className="project-view-top-banner">
        <Container>
        <Row>
            <MyDiv className="project-view-top-content">
                <MyDiv className="project-view-media-logo">
                <img className="pro-media-logo" src={Nanban_chola} alt="Project img"/>
                </MyDiv>
                
            </MyDiv>
        </Row>
        </Container>
    </MyDiv>
        
        <MyDiv className="project-single-desc">
            <Container>
                <Row>
                    <MyDiv className="our-project-cat-name">
                        <SpanTag className="pro-cat-list">Category</SpanTag>
                        <SpanTag className="pro-cat-list">Category2</SpanTag>
                    </MyDiv>
                    <MyDiv className="project-single-title">
                        <HeadingOne>Industrial Solar Energy Project</HeadingOne>
                        <HeadingFour>Lorem ipsum subtitle copy might go here</HeadingFour>
                    </MyDiv>
                    <MyDiv className="pro-single-contnet">
                        <p>Nanban, a leading ESG company, has recently taken a big step forward in its mission to promote sustainability and responsibility in the business world. With the launch of a series of new ESG initiatives, Nanban's executives have rallied around this important cause and the achieved remarkable success.</p>
                        <p>
                            <img src={Solar_energy} alt="Solar Energy"/>
                            The new initiatives focus on three main areas: environmental sustainability, social responsibility, and corporate governance. To drive progress in each of these areas, Nanban has implemented a range of innovative strategies and technologies, including advanced data analytics and machine learning algorithms.
                        </p>
                        <p>One of the most significant achievements resulting from these new initiatives is the substantial reduction in Nanban's carbon footprint.</p>
                        <p>By investing in renewable energy sources and optimizing its supply chain, Nanban has cut its greenhouse gas emissions by over 50% in the last year alone. This has not only helped to protect the environment, but also resulted in significant cost savings for the company.</p>
                    <div className="quotes-notes-message">
                            <Row>
                                <Col md={6} sm={6}>
                                    <p>By investing in renewable energy sources and optimizing its supply chain, Nanban has cut its greenhouse gas emissions by over 50% in the last year alone. This has not only helped to protect the environment, but also resulted in </p>
                                </Col>
                                <Col md={6} sm={6} className="quotes-notes">
                                    <h3 className="">“Extended quote from client from project, lorem ipsum sic dolor et al quote from relevant news source.”</h3>
                                    <span><a href="javascript:void(0)" className="quotes-link">Source linked here</a></span>
                                </Col>
                            </Row>
                    </div>
                    <p>In addition to its environmental efforts, Nanban has also made great strides in promoting social responsibility. Through partnerships with local communities and non-profit organizations, Nanban has launched several initiatives to support education, healthcare, and other important social causes. These initiatives have had a tangible impact on people's lives and helped to foster greater social cohesion and economic development.</p>
                    <p>Finally, Nanban has also made significant progress in improving its corporate governance practices. By prioritizing transparency and accountability, Nanban has earned the trust and confidence of its stakeholders, including investors, customers, and employees. This has led to increased profitability, better risk management, and improved employee satisfaction.</p>
                    </MyDiv>
            </Row>
            </Container>
        </MyDiv>





















      </>

  );
 
}

export default Projectview;





