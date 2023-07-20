import React from "react";
import { useParams } from "react-router";
import { useEffect,useState } from "react";
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import { MyDiv, HeadingOne,HeadingTwo, HeadingThree, PTag,SpanTag,Section, HeadingFour } from '../../Common/Common';
import {FaRegCalendar } from "@react-icons/all-files/fa/FaRegCalendar";
import {FaRegClock } from "@react-icons/all-files/fa/FaRegClock";
import {FaRegComment } from "@react-icons/all-files/fa/FaRegComment";
import axios from "axios";
import parse from 'html-react-parser';
const last_segment = window.location.pathname.split('/').pop();
console.log(last_segment);


/**
 * Renders a post
 */
// read post data
const SingleblogPage = () => {
  const baseurl = 'https://nanbanesg.stellarsolutionsindia.com/admin/';
  const [pageData, setPageData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(baseurl + '/Api/blog/single_blog/' + last_segment);
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
<MyDiv className="project-view-top-banner blog-view">
        <Container>
        <Row>
            <MyDiv className="project-view-top-content">
                <MyDiv className="project-view-media-logo">
                {/* <img className="pro-media-logo" src={Nanban_chola} alt="Project img"/> */}
                </MyDiv>
                
            </MyDiv>
        </Row>
        </Container>
    </MyDiv>
        
        <MyDiv className="project-single-desc">
            <Container>
                <Row>
                {pageData.map((user) => (
                  <>
                    <MyDiv className="btarticle-data-itmes">
                      <SpanTag className="btarticle-data-list btarticle-date"> <FaRegCalendar/>{user.blog_date}</SpanTag>
                      <SpanTag className="btarticle-data-list btarticle-time"><FaRegClock/>{user.blog_time}</SpanTag>
                      <SpanTag className="btarticle-data-list btarticle-command"><FaRegComment/>
                         {"No comments"}                     
                      </SpanTag> 
                        </MyDiv>
                        <MyDiv className="our-project-cat-name">
                                {/* {Array.isArray(user.category_name) ? (
                                  user.category_name.map((item, i) => (
                                    <SpanTag key={i} className="pro-cat-list">
                                      {item.category_name}
                                    </SpanTag>
                                  ))
                                ) : (
                                  <SpanTag className="pro-cat-list">{user.category_name}</SpanTag>
                                )} */}
                                 {
                      user.category_name.split(',').map((cat_category)=> 
                      <SpanTag className="pro-cat-list">{cat_category}</SpanTag>)
                     }
                      </MyDiv>
                    <MyDiv className="project-single-title">
                        <HeadingOne>{user.blog_title}</HeadingOne>
                        {/* <HeadingFour>Lorem ipsum subtitle copy might go here</HeadingFour> */}
                    </MyDiv>
                    <MyDiv className="pro-single-contnet">
                       <p>{parse(user.blog_description)}</p> 
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

export default SingleblogPage;