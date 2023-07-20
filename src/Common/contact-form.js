import React, { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import { Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Submitarrow from '../assets/img/submit-arrow.png';
import Submitarrowmob from '../assets/img/submit-arrow-mob-white.png';
import { MyDiv, HeadingThree, HeadingFour } from '../Common/Common';
import Swal from 'sweetalert2';
import axios from "axios";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

function ContactForm() {
  const initialSchema = {
    from_name: '',
    inquiry_topic: '',
    media_outlet: '',
    deadline: '',
    reply_to: '',
    message: '',
  };

  const validationSchema = Yup.object().shape({
    from_name: Yup.string()
      .required('First Name is required *')
      .min(3, 'First Name must be at least 3 characters *')
      .max(20, 'First Name must not exceed 20 characters *'),
    inquiry_topic: Yup.string().required('Inquiry Topic is required *'),
    // media_outlet: Yup.string()
    //   .when("inquiry_topic", {
    //     is: "show",
    //     then: Yup.string()
    //       .required("Media Outlet is required *")
    //       .max(500, 'Media Outlet must not exceed 500 characters *'),
    //     otherwise: Yup.string(),
    //   }),
    // deadline: Yup.string()
    //   .when("inquiry_topic", {
    //     is: "show",
    //     then: Yup.string().required("Deadline is required *"),
    //     otherwise: Yup.string(),
    //   }),
    reply_to: Yup.string()
      .required('Email is required *')
      .email('Email is invalid *'),
    message: Yup.string()
      .required('Message is required *')
      .max(500, 'Message must not exceed 500 characters *'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: initialSchema
  });

  const onSubmit = (data) => {
    axios
      .post('https://nanbanesg.stellarsolutionsindia.com/admin/Api/contact_api/send_email', JSON.stringify(data))
      .then((response) => {
        reset();
        if (response.status === 200) {
          Swal.fire({
            text: response.data,
            icon: "success",
          });
        } else {
          Swal.fire({
            text: response.data,
            icon: "error",
          });
        }
      })
      .catch((error) => {
        console.log("Error:", error);
        Swal.fire({
          text: "An error occurred. Please try again later.",
          icon: "error",
        });
      });
  };

  const selectionValue = watch('inquiry_topic');

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
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="from_name"
                  type="text"
                  placeholder='First name, last name'
                  {...register('from_name')}
                  className={`input-text ${errors.from_name ? 'is-invalid' : ''}`}
                />
                {errors.from_name && <div className="invalid-feedback">{errors.from_name.message}</div>}
              </li>
              <li>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  name="reply_to"
                  type="email"
                  placeholder='Email Address'
                  {...register('reply_to')}
                  className={`input-text ${errors.reply_to ? 'is-invalid' : ''}`}
                />
                {errors.reply_to && <div className="invalid-feedback">{errors.reply_to.message}</div>}
              </li>
              <li>
                <Form.Label>Inquiry Topic</Form.Label>
                <select
                  name='inquiry_topic'
                  {...register('inquiry_topic')}
                  className={`inquiry_topic text-select form-control ${errors.inquiry_topic ? 'is-invalid' : ''}`}
                >
                  <option value="">Inquiry Topic</option>
                  <option value="show">Media Inquiry</option>
                  <option value="hide">General Inquiry</option>
                </select>
                {errors.inquiry_topic && <div className="invalid-feedback">{errors.inquiry_topic.message}</div>}
              </li>
              {selectionValue === 'show' && (
                <>
                  <li>
                    <Form.Label>Media Outlet</Form.Label>
                    <Form.Control
                      name="media_outlet"
                      as="textarea"
                      maxLength="500"
                      placeholder='Media Outlet *'
                      {...register('media_outlet')}
                      className={`hidden_1 input-text ${errors.media_outlet ? 'is-invalid' : ''}`}
                    />
                    {errors.media_outlet && <div className="invalid-feedback">{errors.media_outlet.message}</div>}
                  </li>
                  <li>
                    <Form.Label>Deadline</Form.Label>
                    <Form.Control
                      name="deadline"
                      type="date"
                      placeholder='Deadline'
                      {...register('deadline')}
                      className={`hidden_1 input-text ${errors.deadline ? 'is-invalid' : ''}`}
                    />
                    {errors.deadline && <div className="invalid-feedback">{errors.deadline.message}</div>}
                  </li>
                </>
              )}
              <li>
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name='message'
                  maxLength="500"
                  placeholder='Type your message *'
                  {...register('message')}
                  className={`input-text ${errors.message ? 'is-invalid' : ''}`}
                />
                {errors.message && <div className="invalid-feedback">{errors.message.message}</div>}
              </li>
            </ul>
            <Button type="submit" className="btn-submit">
              Submit
              <img className='hide-for-small-only' src={Submitarrow} alt="submit" />
              <img className='show-for-small-only' src={Submitarrowmob} alt="submit" />
            </Button>
          </Form>
        </MyDiv>
      </Container>
    </MyDiv>
  );
}

export default ContactForm;
