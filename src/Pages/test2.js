import React, { Component } from 'react';
import { render } from 'react-dom';
import { MyDiv, HeadingOne,HeadingTwo, HeadingThree, PTag,SpanTag,Section, HeadingFour } from '../Common/Common';
import { Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useEffect, useState, useMemo } from "react";
import { slice } from 'lodash';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Read_more from '../assets/img/read-more-arrow.png';
import { Link } from 'react-router-dom';
import Blogbanner from '../assets/img/blog/blog-banner.png';
import arrow_line from '../assets/img/arrow-sm-height.png';
import Downarrow from '../assets/img/inner-page-arrow-down-mob.png';

import Filter_icon from '../assets/img/filter-icon.png';
var that;
class Test2 extends Component {

  
  constructor() {
    super();
    this.state = {
      fullDataSet: [],
      searchDataSet: [],
      tableHead: [],
      tableBody: [],
      partNumber: 5
    };
    this.dataSet = this.dataSet.bind(this);
    this.seeMore = this.seeMore.bind(this);
    this.search = this.search.bind(this);
  }

  dataSet() {
    fetch(`https://nanbanesg.stellarsolutionsindia.com/blog-data.json`)
      .then(function (response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
     
      .then(function (response) {
        that.setState({
          fullDataSet: response,
          searchDataSet: response.datalist,
          tableHead: response.headlist,
          tableBody: response.datalist.slice(0, that.state.partNumber),

        });
      });
      
  }
  seeMoreShowControl() {
    setTimeout(function () {
      if (that.state.searchDataSet.length > that.state.tableBody.length) {
        that.setState({
          showMoreButton: "d-b"
        })
      } else {
        that.setState({
          showMoreButton: "d-n"
        })
      }
    }, 100);
  }
  seeMore() {
    that.setState({
      partNumber: that.state.partNumber + 5,
    });
    setTimeout(function () {
      that.setState({
        tableBody: that.state.searchDataSet.slice(0, that.state.partNumber)
      })
    }, 100);
    that.seeMoreShowControl();
  }
  search(event) {
    if (event.target.value == "") {
      that.setState({
        partNumber: 10,
        searchDataSet: that.state.fullDataSet.datalist,
        tableBody: that.state.fullDataSet.datalist.slice(0, 5)
      })
      that.seeMoreShowControl();
      return false;
    }
    var objects = that.state.fullDataSet.datalist;
    var filter = event.target.value.toLowerCase();
    var filtered = [];
    var newIndex = 0;
    var keys = Object.keys(objects);
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (objects.hasOwnProperty(key) === true) {
        var object = objects[key];
        var objectAsString = JSON.stringify(object).toLowerCase();
        // if (key.toLowerCase().indexOf(filter) > -1 || objectAsString.indexOf(filter) > -1) {
        if (objectAsString.indexOf(filter) > -1) {
          filtered[newIndex] = object;
          newIndex++;
        }
      }
    }
    that.setState({
      tableBody: filtered.slice(0, 5),
      searchDataSet: filtered
    });
    that.seeMoreShowControl();
  }
  sortAsc(index) {
    var newArray = that.state.searchDataSet.sort(function (a, b) { return a.list[index] - b.list[index] });
    that.setState({
     // partNumber: 10,
      searchDataSet: newArray,
      tableBody: newArray.slice(0, that.state.partNumber)
    })
  }
  sortDesc(index) {
    var newArray = that.state.searchDataSet.sort(function (a, b) { return b.list[index] - a.list[index] });
    that.setState({
     // partNumber: 10,
      searchDataSet: newArray,
      tableBody: newArray.slice(0, that.state.partNumber)
    })
  }
  sortLetter(index, type) {
    var sortList = that.state.searchDataSet;
    var newArray = sortList.sort(function (a, b) {
      var nameA = a.list[index].toUpperCase();
      var nameB = b.list[index].toUpperCase();
      if (type == "asc") {
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      } else {
        if (nameB < nameA) {
          return -1;
        }
        if (nameB > nameA) {
          return 1;
        }
      }

      return 0;
    });

    that.setState({
      searchDataSet: newArray,
      tableBody: newArray.slice(0, that.state.partNumber)
    })
  }
  sortTable(index, event) {
    var elements = document.getElementsByClassName("order");
    for (var i = 0; i < elements.length; i++) {
      if (i != index) {
        elements[i].setAttribute("data-type", "desc");
        elements[i].getElementsByClassName("up")[0].classList.remove("activeArrow");
         elements[i].getElementsByClassName("down")[0].classList.remove("activeArrow");
      }
    }
    var type = event.target.getAttribute("data-type");
    if (type == "asc") {
      event.target.classList.add('name');
      event.target.getElementsByClassName("down")[0].classList.remove("activeArrow");
      event.target.getElementsByClassName("up")[0].classList.add("activeArrow");
      event.target.setAttribute("data-type", "desc")
    } else {
      event.target.getElementsByClassName("up")[0].classList.remove("activeArrow");
      event.target.getElementsByClassName("down")[0].classList.add("activeArrow");
      event.target.classList.add('name');
      event.target.setAttribute("data-type", "asc")
    }
    if (!isNaN(that.state.fullDataSet.datalist[index].list[index])) {
      if (type == "asc") {
        that.sortAsc(index);
      } else {
        that.sortDesc(index);
      }
    } else {
      that.sortLetter(index, type);
    }
  }
  componentWillMount() {
    that = this;
    this.dataSet();
  }
  
  render() {

    return (
      
      <>
       <MyDiv className="blog-layout">
      
     <MyDiv className="our-lastes-blog">
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
            <select id="myInput"  className="selected_option" onChange={this.search.bind(this)}  >
              <option value=''>-- Select Category --</option>
              <option value='Wind'>Wind</option>
              <option value='Solar'>Solar</option>
              <option value='Carbon'>Carbon</option>

              </select>
             <img className="filter_icon hide-for-mobile-only" src={Filter_icon} alt="Filter"/>
            </SpanTag>
        </MyDiv>
        </Col>   
    </Row>
    </Container>
    </MyDiv>

        {/* <input type="text" id="myInput" onKeyUp={this.search.bind(this)} placeholder="Search" /> */}
        <MyDiv className="blog-post-full">
        <Container>
        <Row className="blog-flex-data">
        {this.state.tableBody.map((blog, index) => {
         return (
            <Col xs="6" md="4" className="blog-post-list" key={index}>
            <MyDiv className="blog-postlist-item">
            <Link to=" " className=""> 
            <img className="blog-post-img" src={require('../assets/img/blog/'+ blog.post_images)}  alt={blog.title}/>
            </Link>
                    <MyDiv className="blog_cat-list">
                    {blog.Cat.map((item, i) => {
                      return <SpanTag key={i}>{item}</SpanTag>
                    })}

                    {/* <SpanTag>{blog.Cat}</SpanTag> */}
                    </MyDiv> 
                    <HeadingThree>{blog.title}</HeadingThree>
                    <Link to=" " className="read-more">READ MORE<img src={Read_more} alt="READ MORE"/></Link>
            </MyDiv>
             </Col>
            );
            })}
        <div className={"seemoreButton " + this.state.showMoreButton} onClick={this.seeMore}>Load More</div>
        </Row>
        
      </Container>
      </MyDiv>

      </MyDiv>
      </MyDiv>
      </>
    );
  }
}
export default Test2;