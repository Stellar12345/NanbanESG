import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import { Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Submitarrow from '../assets/img/submit-arrow.png';
import Submitarrowmob from '../assets/img/submit-arrow-mob-white.png';
import { MyDiv, HeadingThree, HeadingFour } from '../Common/Common';
import Swal from 'sweetalert2'
import axios from "axios";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

function Contactform() {
  const [selectedInquiryTopic, setSelectedInquiryTopic] = useState('');
  
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  
  const validationSchema = Yup.object().shape({
    from_name: Yup.string()
      .required('First Name is required *')
      .min(3, 'First Name must be at least 3 characters *')
      .max(20, 'First Name must not exceed 20 characters *'),
    inquiry_topic: Yup.string().required('Inquiry Topic is required *'),
    reply_to: Yup.string()
      .required('Email is required *')
      .email('Email is invalid *'),
    media_outlet: Yup.string()
      .when('inquiry_topic', {
        is: '1',
        then: Yup.string().required("Media Outlet is required *").max(499, 'Media Outlet must not exceed 500 characters *'),
        otherwise: Yup.string().max(499, 'Media Outlet must not exceed 500 characters *'),
      }),
    deadline: Yup.string()
      .when('inquiry_topic', {
        is: '1',
        then: Yup.string().required('Deadline is required *'),
        otherwise: Yup.string(),
      }),
    message: Yup.string().required('Message is required *').max(499, 'Message must not exceed 500 characters *'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = data => {
    axios.post('https://nanbanesg.stellarsolutionsindia.com/admin/Api/contact_api/send_email', JSON.stringify(data))
      .then((response) => {
        document.getElementById("contactform").reset();
        if (response.status === 200) {
          Swal.fire({
            text: response.data,
            icon: "success",
            type: "success"
          });
          setValue('from_name', '');
          setValue('reply_to', '');
          setValue('message', '');
          setValue('inquiry_topic', '');
          setValue('media_outlet', '');
          setValue('deadline', '');
        }
        else {
          Swal.fire({
            text: response.data,
            icon: "error",
            type: "error"
          });
        }
      });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setValue(e.target.name, value);
    if (e.target.name === 'inquiry_topic') {
      setSelectedInquiryTopic(value);
    }
  };

  return (
    <MyDiv className="our-get-touch-form">
      <Container className="our-get-touch-form-inner">
        <Row>
          <Col md={5}>
            <HeadingFour className="title-left-con">Contact</HeadingFour>
          </Col>
          <Col md={7}>
            <HeadingThree className="title-right-con">Get in touch, let's work together</HeadingThree>
          </Col>
        </Row>
        <MyDiv className="get-touch-form-box">
          <Form onSubmit={handleSubmit(onSubmit)} id='contactform' type="post">
            <ul className="get-touch-form-inner">
              <li>
                <Form.Label>Name <sup>*</sup></Form.Label>
                <Form.Control
                  name="from_name"
                  type="text"
                  onChange={handleChange}
                  placeholder='First name, last name'
                  {...register('from_name')}
                  className={`input-text ${errors.from_name ? 'is-invalid' : ''}`}
                />
                <div className="invalid-feedback">{errors.from_name?.message}</div>
              </li>
              <li>
                <Form.Label>Email Address <sup>*</sup></Form.Label>
                <Form.Control
                  name="reply_to"
                  type="email"
                  onChange={handleChange}
                  placeholder='Email Address'
                  pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}"
                  {...register('reply_to')}
                  className={`input-text ${errors.reply_to ? 'is-invalid' : ''}`}
                />
                <div className="invalid-feedback">{errors.reply_to?.message}</div>
              </li>
              <li>
                <Form.Label>Inquiry Topic <sup>*</sup></Form.Label>
                <select onChange={handleChange} name='inquiry_topic' value={selectedInquiryTopic} {...register('inquiry_topic')} className={`text-select form-control ${errors.inquiry_topic ? 'is-invalid' : ''}`}>
                  <option value="">Inquiry Topic</option>
                  <option value="1">Media Inquiry</option>
                  <option value="2">General Inquiry</option>
                </select>
                <div className="invalid-feedback">{errors.inquiry_topic?.message}</div>
              </li>
              {selectedInquiryTopic === '1' && (
                <>
                  <li>
                    <Form.Label>Media Outlet<sup>*</sup></Form.Label>
                    <Form.Control
                      name="media_outlet"
                      as="textarea"
                      maxLength="500"
                      onChange={handleChange}
                      placeholder='Media Outlet'
                      {...register('media_outlet')}
                      className={`input-text ${errors.media_outlet ? 'is-invalid' : ''}`}
                    />
                    <div className="invalid-feedback">{errors.media_outlet?.message}</div>
                  </li>
                  <li>
                    <Form.Label>Deadline<sup>*</sup></Form.Label>
                    <Form.Control
                      name="deadline"
                      type="date"
                      onChange={handleChange}
                      placeholder='Deadline'
                      {...register('deadline')}
                      className={`input-text ${errors.deadline ? 'is-invalid' : ''}`}
                    />
                    <div className="invalid-feedback">{errors.deadline?.message}</div>
                  </li>
                </>
              )}
              <li>
                <Form.Label>Message <sup>*</sup></Form.Label>
                <Form.Control
                  as="textarea"
                  name='message'
                  maxLength="500"
                  onChange={handleChange}
                  placeholder='Type your message'
                  {...register('message')}
                  className={`input-text ${errors.message ? 'is-invalid' : ''}`}
                />
                <div className="invalid-feedback">{errors.message?.message}</div>
              </li>
            </ul>
            <Button type="submit" className="btn-submit">Submit <img className='hide-for-small-only' src={Submitarrow} alt="submit" />
              <img className='show-for-small-only' src={Submitarrowmob} alt="submit" />
            </Button>
          </Form>
        </MyDiv>
      </Container>
    </MyDiv>
  );
}

export default Contactform;
