import React from "react";
import { useParams } from "react-router";
import { useEffect } from "react";
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import { MyDiv, HeadingOne,HeadingTwo, HeadingThree, PTag,SpanTag,Section, HeadingFour } from '../../Common/Common';
import Nanban_chola from '../../assets/img/Project/our-project-logo1.png';
import Solar_energy from '../../assets/img/Project/solar-energy.png';
/**
 * Renders a post
 */
// read post data
const postsData = require("../shared/industries-data.json");
export default function Industries() {
  
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
     }, [])
  var { slug } = useParams(),
    post = findPostBySlug(slug);

  return (
    
    <>
<MyDiv className="project-view-top-banner">
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
            <Container >
                <Row>
                    <MyDiv className="our-project-cat-name">
                                 {post.Type.split(',').map((cat_type)=> 
                                    <SpanTag className="pro-cat-list">{cat_type}</SpanTag>)
                                    }
                        {/* <SpanTag className="pro-cat-list">Category</SpanTag>
                        <SpanTag className="pro-cat-list">Category2</SpanTag> */}
                    </MyDiv>
                    <MyDiv className="project-single-title">
                        <HeadingOne>{post.title}</HeadingOne>
                        {/* <HeadingFour>Lorem ipsum subtitle copy might go here</HeadingFour> */}
                    </MyDiv>
                    <MyDiv className="pro-single-contnet">
                        <p>{post.content}</p>
                    </MyDiv>
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

function findPostBySlug(slug) {
  return postsData.find(o => o.slug === slug);
}
