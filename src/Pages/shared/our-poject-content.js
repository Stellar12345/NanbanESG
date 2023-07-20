import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import { Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import { MyDiv, HeadingOne,HeadingTwo, HeadingThree, PTag,SpanTag,Section, HeadingFour } from '../../Common/Common';
import Filter_icon from '../../assets/img/filter-icon.png';
import OurCholas from '../shared/our-poject-chola';
import OurVentures from '../shared/our-poject-ventures';

function Ourproject () {
    const [isVisible, setIsVisible] = useState(true);

    const changeHandler = (e) => {
        if (e.target.value != '') {
      if (e.target.value === '1') {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
}

    return (
            <>
            <MyDiv className=""> 
              <Container id="our-project" className="our-project-top-info">
            <Row>
                <Col sm={8} xs={6}>
              <MyDiv className="our-project">
                <HeadingThree>Our Projects</HeadingThree>
              </MyDiv>
              </Col>   
              <Col sm={4} xs={6}>
                <MyDiv className="top-fileter-part">
                    <SpanTag className="project-selection-fileter">Filter by division :
                    
                 {/* <Dropdown className="fileter-select">
                        <Dropdown.Toggle variant="success" id="project-fileter" >
                        Select division   <img className="filter_icon show-for-mobile-only" src={Filter_icon} alt="Filter"/>
                        </Dropdown.Toggle>
                    <Dropdown.Menu onChange={changeHandler} >
                        <Dropdown.Item eventKey="1">Nanban Chola</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Nanban Ventures </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>  */}
     
            <select  onChange={changeHandler} className="selected_option">
                <option value="" disabled selected>Select division</option>
                <option value="1">Nanban Chola</option>
                 <option value="2">Nanban Ventures</option>
            </select>
        <img className="filter_icon " src={Filter_icon} alt="Filter"/>
                    </SpanTag>
                </MyDiv>
                </Col>   
            </Row>
        </Container>
        </MyDiv>
        {isVisible ? (
            <OurCholas />

            ) : 

            <OurVentures />
            }
                    
            </>

    );
  }
  
  export default Ourproject;