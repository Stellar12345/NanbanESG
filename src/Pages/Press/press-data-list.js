import React from "react";
import { useEffect,useState } from "react";
import Container from 'react-bootstrap/Container';
import { slice } from 'lodash';
import { Link } from 'react-router-dom';
import { Button, Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import { MyDiv, HeadingOne,HeadingTwo, HeadingThree, PTag,SpanTag,Section, HeadingFour } from '../../Common/Common';
import Read_more from '../../assets/img/read-more-arrow.png';
import press_img1 from '../../assets/img/press/press-img1.png';
import axios from "axios";

import Data_press from './press-data.json';

function Press_list () {
  const baseurl = 'https://nanbanesg.stellarsolutionsindia.com/admin/';
  const [pressData, setPressData] = useState([]);

  const [loading, setLoading] = useState(false);

  const [isCompleted, setIsCompleted] = useState(false)
  const [index, setIndex] = useState(5)
  const Pressposts = slice(pressData, 0, index)

  const loadMore = () => {   
    setIndex(index + 4)
    console.log(index)
    if (index >= pressData.length) {
      setIsCompleted(true)
    } else {
      setIsCompleted(false)
      
    }
    
  }

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    setLoading(true);
          setTimeout(() => {
          setLoading(false);
        }, 1000);
    const fetchData = async () => {
      try {
        const response = await axios.get(baseurl + "Api/press");
        const jsonData = response.data;
        console.log(jsonData);
       setPressData(jsonData);
      } catch (error) {
        console.log("Error fetching API data:", error);
      }
    };
    fetchData();
  }, []);


    return (
            <>
             <Container id="our-press">
             {loading ? (
        <MyDiv className="loader-container">
      	  <SpanTag>Loading Data...</SpanTag>
        </MyDiv>
      ) : (
                <Row>
                {Pressposts.map((item) => {
                return (
                    <Col xs="6" md="3" className="press-list-item"  key={item.id}>
                    <MyDiv className="press-list-info">
                   <MyDiv className="press-list-content"  key={item.id}>
                   <Link to={"/press/"} className="">
                    <img className="industries-imags" src={baseurl +item.press_image} alt={item.press_title}/>
                   </Link>
                    <MyDiv className="press-list-categories"  key={item.id}>
                        <SpanTag>{item.category_name}</SpanTag>
                    </MyDiv>
                    <MyDiv className="Press-list-desc" key={item.id}>
                        <HeadingThree>{item.press_title}</HeadingThree>
                    </MyDiv>
                    <Link to={"/press/"+ item.press_slug} className="read-more">READ MORE<img src={Read_more} alt="READ MORE"/></Link>
                    </MyDiv>
                   </MyDiv>
                    </Col>
                     )
                    })}
                </Row>
                )}
                </Container>

               <MyDiv className="more-press-data">
                    <Container>
                        <Row>
                    {isCompleted ? (
                    <button onClick={loadMore} loading  type="button"  className="btn-more-list  disabled" >
                        That's It
                    </button>
                    ) : (
                    <button  loading  onClick={loadMore} type="button" className="btn-more-list">
                       Load more
                    </button>
                    )}
                    </Row>
                    </Container>
                </MyDiv>            
            </>

    );
  }
  
  export default Press_list;