import React, { useState } from "react";
import { useEffect } from "react";
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { Button, Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import { MyDiv, HeadingOne,HeadingTwo, HeadingThree, PTag,SpanTag,Section, HeadingFour } from '../../Common/Common';
import Filter_icon from '../../assets/img/filter-icon.png';
import Pro_1 from '../../assets/img/Project/pro-1.png';
import Pro_2 from '../../assets/img/Project/pro-2.png';
import Pro_3 from '../../assets/img/Project/pro-3.png';
import Viewproject_icon from '../../assets/img/view-project.png';
import Viewprojectblack_icon from '../../assets/img/view-project-black.png';
import Nanban_Venture from '../../assets/img/Project/nv-logo.png';

function OurVenture () {

    return (
            <>
<MyDiv className="our-filter-project-data">
<Container>
    <Row>
        <Col sm={6} className="our-latest-pro-data">
            <MyDiv className="our-latest-pro-inner">
                    <MyDiv className="our-latest-pro-media">
                    <img className="pro-media-img" src={Pro_1} alt="Project img"/> 
                    </MyDiv>
                    <MyDiv className="our-latest-pro-content">
                        <HeadingThree>Project Title 1</HeadingThree>
                        <MyDiv className="pro-media-logo-img">
                        <img className="pro-media-logo" src={Nanban_Venture} alt="Project img"/>
                        </MyDiv>
                        <MyDiv className="pro-media-desc">
                        <p>A successful project with widespread impact lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea. </p>
                        <p>Commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </MyDiv>
                    </MyDiv>
            </MyDiv>
        </Col>
        <Col sm={6} className="our-poject-list-info">
            <Row>
            <Col sm={6}  xs={6} className="list-item">
                <MyDiv className="our-poject-list-inner">
                   <MyDiv className="our-poject-list-desc">
                        <MyDiv className="pro-list-categories">
                            <SpanTag>Carbon</SpanTag>
                            <SpanTag>Impact</SpanTag>
                            
                        </MyDiv>
                        <MyDiv className="pro-list-desc">
                          <HeadingThree>Carbon Project1</HeadingThree>
                          <p>A successful project with widespread impact</p>
                          <MyDiv className="view-btn">
                          <a href="javascript:void(0)" className="btn-view-pro">View Project <img className="view-more-icon" src={Viewproject_icon} alt="Viewproject icon"/></a>
                          </MyDiv>
                          </MyDiv>

                    </MyDiv> 
                </MyDiv>
            </Col>
            <Col sm={6} xs={6} className="list-item">
            <MyDiv className="our-poject-list-inner our-pro-media-list-type">
                <MyDiv className="our-poject-list-media">
                <img className="media-img" src={Pro_2} alt="Project img"/> 
                </MyDiv>
                   <MyDiv className="our-poject-list-desc">
                       
                        <MyDiv className="pro-list-categories">
                            <SpanTag>Solar</SpanTag>
                            <SpanTag>Infra</SpanTag>
                            
                        </MyDiv>
                        <MyDiv className="pro-list-desc">
                          <HeadingThree>Solar Project1</HeadingThree>
                          <p>A successful project with widespread imapact</p>
                          <MyDiv className="view-btn">
                            <a href="project/solar" className="btn-view-pro">View Project <img className="view-more-icon" src={Viewprojectblack_icon} alt="Viewproject icon"/></a>
                            </MyDiv>
                          </MyDiv>
                    
                    </MyDiv> 
                </MyDiv>

            </Col>
           
            <Col sm={6} xs={6} className="list-item">
            <MyDiv className="our-poject-list-inner our-pro-media-list-type">
                <MyDiv className="our-poject-list-media">
                <img className="media-img" src={Pro_3} alt="Project img"/> 
                </MyDiv>
                   <MyDiv className="our-poject-list-desc">
                        <MyDiv className="pro-list-categories">
                            <SpanTag>Wind</SpanTag>
                            <SpanTag>Infra</SpanTag>
                            
                        </MyDiv>
                        <MyDiv className="pro-list-desc">
                          <HeadingThree>Housing Project1</HeadingThree>
                          <p>A successful project with widespread imapact</p>
                          <MyDiv className="view-btn">
                            <a href="javascript:void(0)" className="btn-view-pro">View Project <img className="view-more-icon" src={Viewprojectblack_icon} alt="Viewproject icon"/></a>
                            </MyDiv>
                          {/* <a href="#" className="btn-view-pro">View Project <img className="view-more-icon" src={Viewproject_icon} alt="Viewproject icon"/></a> */}
                          </MyDiv>

                    </MyDiv> 
                </MyDiv>
                </Col>
                <Col sm={6}  xs={6} className="list-item">
                    <MyDiv className="our-poject-list-inner">
                        <MyDiv className="our-poject-list-desc">
                                <MyDiv className="pro-list-categories">
                                    <SpanTag>Carbon</SpanTag>
                                    <SpanTag>Impact</SpanTag>
                                </MyDiv>
                                <MyDiv className="pro-list-desc">
                                <HeadingThree>Wind Project1</HeadingThree>
                                <p>A successful project with widespread impact</p>
                                <MyDiv className="view-btn">
                                <a href="javascript:void(0)" className="btn-view-pro">View Project <img className="view-more-icon" src={Viewproject_icon} alt="Viewproject icon"/></a>
                                </MyDiv>
                                </MyDiv>
                        </MyDiv> 
                    </MyDiv>
                </Col> 
            </Row>
        </Col>
    </Row>
<Row>
     <MyDiv className="more-project-list">
        {/* <Button className="btn-more">load more</Button> */}
    </MyDiv> 
</Row>

</Container>

</MyDiv>

    
            </>

    );
  }
  
  export default OurVenture;