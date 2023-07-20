import React from "react";
import { useEffect,useState } from "react";
import Container from 'react-bootstrap/Container';
import { slice } from 'lodash';
import { Link } from 'react-router-dom';
import { Button, Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import { MyDiv, HeadingOne,HeadingTwo, HeadingThree, PTag,SpanTag,Section, HeadingFour } from '../../Common/Common';
import Round_arrow from '../../assets/img/round-arrow-icon.png';
import Industries_img from '../../assets/img/industries/industries-desktop1.png';
import Industries_img_mob from '../../assets/img/industries/industries-mobile.png';
import Real_estate_img from '../../assets/img/industries/real-estate-desktop.png';
import Real_estate_img_mob from '../../assets/img/industries/real-estate-mobile.png';


import Data_industries from './industries-data.json';

function Ourindustries () {
  const [isCompleted, setIsCompleted] = useState(false)
  const [index, setIndex] = useState(6)
  const initialPosts = slice(Data_industries, 0, index)

  const loadMore = () => {

    setIndex(index + 2)
    console.log(index)
    if (index >= Data_industries.length) {
      setIsCompleted(true)
    } else {
      setIsCompleted(false)
    }
  }
  useEffect(() => {
  //  getData()
  }, [])
    return (
            <>
            <div className="our-industries-list-info" >
              
            <Container >
                <Row>
                {initialPosts.map((item) => {
        return (
                <Col sm={6}  xs={6} className="industries-list-item"  key={item.id}>
                        <MyDiv className="industries-list-item-inner">
                            <MyDiv className="industries-list-item-media"  key={item.id}>
                            {/* <img className="industries-imags" src={require('../../assets/img/industries/'+ item.post_images)} alt="Project img"/> */}
                            <img className="industries-imags hide-for-mobile-only" src={require('../../assets/img/industries/'+ item.post_images)} alt={item.title}/>
                            <img className="industries-imags show-for-mobile-only" src={require('../../assets/img/industries/'+ item.post_images_mobile)} alt={item.title}/>

                            </MyDiv>
                            <MyDiv className="industries-list">
                                <MyDiv className="industries-cat">
                                {
                                    item.Type.split(',').map((cat_type)=> 
                                   
                                <SpanTag>{cat_type}</SpanTag>)
                                }
                                {/* <SpanTag>Renew</SpanTag>
                                <SpanTag>Renew</SpanTag> */}
                                </MyDiv>
                                <MyDiv className="industries-desc" key={item.id}>
                                <HeadingThree>{item.title} </HeadingThree>
                                {/* <a href="javascript:void(0)" className="in-more-icon"><img src={Round_arrow} alt="view industries"/></a> */}
                                
                                <Link to={"/industries/" + item.slug} className="in-more-icon"><img src={Round_arrow} alt="view industries"/></Link>
                                </MyDiv>
                                <MyDiv className="industries-sm-content">
                                   <p>{item.content}</p>                                 
                                </MyDiv>
                            </MyDiv>
                        </MyDiv>
                    </Col>
                     )
                    })}
                </Row>
            </Container>
                    <MyDiv className="more-industries-data">
                    <Container>
                        <Row>
                    {isCompleted ? (
                    <button onClick={loadMore}  type="button"  className="btn-more-list  disabled" >
                        That's It
                    </button>
                    ) : (
                    <button onClick={loadMore} type="button" className="btn-more-list">
                       load more
                    </button>
                    )}
                    </Row>
                    </Container>
                </MyDiv>
            </div>


           
            </>

    );
  }
  
  export default Ourindustries;