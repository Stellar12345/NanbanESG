import { useEffect, useState, useMemo } from "react";
import Container from 'react-bootstrap/Container';
import { slice } from 'lodash';
import { Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { MyDiv, HeadingOne,HeadingTwo, HeadingThree, PTag,SpanTag,Section, HeadingFour } from '../Common/Common';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Read_more from '../assets/img/read-more-arrow.png';

import Filter_icon from '../assets/img/filter-icon.png';
// import allMovies from "./blog/movies.json";
import allblog from "./blog/movies.json";
import genreOptions from "./blog/genreOptions.json";

export default function Ourblogarticle() {
  const [genre, setGenre] = useState("");
  const [searchTerm, setSearchTem] = useState("");
  const blogpost = useMemo(() => {
    if (genre === "") {
      if (searchTerm === "") {
        return allblog;
      } else {
        return allblog.filter((movie) => {
          const searchFields =
            `${movie.title.toLowerCase()} ` +
            `${movie.year} ` +
            `${movie.directors.toLowerCase()}` +
            `${movie.actors.join("").toLowerCase()}` +
            `${movie.plot.toLowerCase()}`;
          return searchFields.includes(searchTerm.toLowerCase());
        });
      }
    }
    return allblog.filter((movie) => {
      const movieGenre = movie.genre.map((val) => val.toLowerCase());
      // console.log(movieGenre);
      return movieGenre.includes(genre);
      
    });
  }, [genre, searchTerm]);

  useEffect(() => {
    if (searchTerm !== "") {
      setGenre("");
    }
  }, [searchTerm]);
 
  return (
<>

<MyDiv className=""> 
<Container id="our-blog" className="our-blog-top-info">
<Row>
    <Col sm={8} xs={8}>
  <MyDiv className="our-blog">
    <HeadingThree>Latest Posts</HeadingThree>
  </MyDiv>
  </Col>   
  <Col sm={4} xs={4}>
    <MyDiv className="blog-top-fileter-part">
        <SpanTag className="blog-selection-fileter">Filter by division :
         <form>
        <select
          className="px-2 py-1 border w-40"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        >
          {genreOptions.map((option, i) => {
            return (
              <option className="py-2" value={option.value} key={i}>
                {option.label}
              </option>
            );
          })}
        </select>
        </form>
     <img className="filter_icon hide-for-mobile-only" src={Filter_icon} alt="Filter"/>
        </SpanTag>
    </MyDiv>
    </Col>   
</Row>
</Container>
</MyDiv>
<MyDiv className="blog-post-full">
        <Container>
            <Row className="blog-flex-data">
          
            {blogpost.map((blog, index) => {
                    return (
                  <Col xs="6" md="4" className="blog-post-list"   key={index}>
                                      <MyDiv className="blog-postlist-item">
                                      <Link to=" " className=""> 
                                      <img className="blog-post-img" src={require('../assets/img/blog/'+ blog.post_images)}  alt={blog.title}/>
                                     
                                      </Link>
                                              <MyDiv className="blog_cat-list">
                                                  
                                    {blog.genre.map((item, i) => {
                                      return <SpanTag key={i}>{item}</SpanTag>
                                    })}

                                              </MyDiv> 
                                              <HeadingThree>{blog.title}</HeadingThree>
                                              <Link to=" " className="read-more">READ MORE<img src={Read_more} alt="READ MORE"/></Link>
                                      </MyDiv>
                                  </Col>
                      );
                    })}
            </Row>
            </Container>
            </MyDiv>


    </>




  );
}
