import React from "react";
import { useParams } from "react-router";
import { useEffect,useState } from "react";
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import { MyDiv, HeadingOne,HeadingTwo, HeadingThree, PTag,SpanTag,Section, HeadingFour } from '../../Common/Common';
import Nanban_chola from '../../assets/img/Project/our-project-logo1.png';
import Solar_energy from '../../assets/img/Project/solar-energy.png';
import {FaRegCalendar } from "@react-icons/all-files/fa/FaRegCalendar";
import {FaRegClock } from "@react-icons/all-files/fa/FaRegClock";
import {FaRegComment } from "@react-icons/all-files/fa/FaRegComment";
import PressBackgroundImage from '../../assets/img/press-view-banner.png';
import axios from "axios";
import parse from 'html-react-parser';
const last_segment = window.location.pathname.split('/').pop();
console.log(last_segment);

const SinglePage = () => {
  const baseurl = 'https://nanbanesg.stellarsolutionsindia.com/admin/';
  const [pageData, setPageData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(baseurl + '/Api/press/single_press/' + last_segment);
        const data = response.data;
        console.log(data);
        setPageData(data);
      } catch (error) {
        console.log("Error fetching page data:", error);
      }
    };

    fetchData();
  }, [slug]);

  if (!pageData) {
    return <div>Loading...</div>;
  }


  return (
    <>
<div className="project-view-top-banner" style={{background:`url(${PressBackgroundImage}) no-repeat no-repeat center center / cover`}}>
        <Container>
        <Row>
            <MyDiv className="project-view-top-content">
                <MyDiv className="project-view-media-logo">
                {/* <img className="pro-media-logo" src={Nanban_chola} alt="Project img"/> */}
                </MyDiv>
                
            </MyDiv>
        </Row>
        </Container>
    </div>
        
        <MyDiv className="project-single-desc">
            <Container>
                <Row>
                {pageData.map((user) => (
                  <>
                    <MyDiv className="btarticle-data-itmes">
                      <SpanTag className="btarticle-data-list btarticle-date"> <FaRegCalendar/>{user.press_date}</SpanTag>
                      <SpanTag className="btarticle-data-list btarticle-time"><FaRegClock/>{user.press_time}</SpanTag>
                      <SpanTag className="btarticle-data-list btarticle-command"><FaRegComment/>
                      </SpanTag> 
                        </MyDiv>
                    <MyDiv className="our-project-cat-name">
                    <SpanTag className="pro-cat-list">{user.category_name}</SpanTag>
                    </MyDiv>
                    <MyDiv className="project-single-title">
                        <HeadingOne>{user.press_title}</HeadingOne>
                        {/* <HeadingFour> {parse(user.press_description)}</HeadingFour> */}
                    </MyDiv>
                    <MyDiv className="pro-single-contnet">
                    {parse(user.press_description)}
                        {/* <p>{postsDatas.content}</p> */}
                    </MyDiv>
                    </>
                ))}
                
            </Row>
            </Container>
        </MyDiv>
        </>
    // <div className="post-content-view">
    //   <h1 className="title">{post.title}</h1>
    //   <content>{post.content}</content>
    // </div>
  );
}

export default SinglePage;
