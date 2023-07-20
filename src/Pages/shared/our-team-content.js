import React from "react";
import { useEffect } from "react";
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { Row } from "react-bootstrap";
import Col from 'react-bootstrap/Col';
import { MyDiv, HeadingOne,HeadingTwo, HeadingThree, PTag,SpanTag,Section, HeadingFour } from '../../Common/Common';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Preetha from '../../assets/img/about/preetha-prabhakar.png';
import Gopala from '../../assets/img/about/gopala-krishnan.png';
import Mani from '../../assets/img/about/mani-shanmugam.png';
import Sakthi from '../../assets/img/about/sakthi-palani.png';
/*mobile*/
import Preethamob from '../../assets/img/about/preetha-prabhakar-mob.png';
import Gopalamob from '../../assets/img/about/gopala-krishnan-mob.png';
import Manimob from '../../assets/img/about/mani-shanmugam-mob.png';
import Sakthimob from '../../assets/img/about/sakthi-palani-mob.png';


function Ourteams() { 
    /*Model click fuction*/
    const [modalShow1,  setModalShow] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);
    const [modalShow3, setModalShow3] = React.useState(false); 
    const [modalShow4, setModalShow4] = React.useState(false);   

     return (
    <>       
            <Container >
                <Row className="our-profile-info">
                    <Col md={6} sm={6}>
                    <Row>
                        <Col md={5} lg={5} sm={5} className="our-pro-part">
                        <MyDiv className="our-pro-img">
			    	        <img  className="" src={Preetha} alt="Preetha Prabhakar" onClick={() => setModalShow(true)} />
                            {/* <img className="show-for-small-only" src={Preethamob} alt="Preetha Prabhakar"/> */}
                    </MyDiv>
                        </Col>
                        <Col md={7} lg={7} sm={7} className="p-sm-0 profile-mob-margin our-profile-content">
                            <MyDiv className="our-pro-details">
                            <h2 onClick={() => setModalShow(true)}>Preetha Prabhakar</h2>
                            <HeadingThree>President Nanban ESG Solutions</HeadingThree>
                            {/* <HeadingFour>Biography goes here.</HeadingFour> */}
                             <PreethaModal
                                show={modalShow1}
                                onHide={() => setModalShow(false)}
                            />
                            </MyDiv>
                        </Col>
                    </Row>

                    </Col>
                    <Col md={6} sm={6}>
                    <Row>
                        <Col md={5} lg={5} sm={5} className=" our-pro-part">
                        <MyDiv className="our-pro-img">
                        <img className="" src={Gopala} alt="Gopala Krishnan"  onClick={() => setModalShow2(true)}/>
                        {/* <img className="show-for-small-only" src={Gopalamob} alt="Gopala Krishnan"  data-toggle="modal" data-target="#gkModal"/> */}

                    </MyDiv>
                        </Col>
                        <Col md={7} lg={7} sm={7} className="p-sm-0 profile-mob-margin our-profile-content">
                            <MyDiv className="our-pro-details">
                            <h2 onClick={() => setModalShow2(true)}>Gopala Krishnan<br class="hide-for-small-only"/> ("GK")</h2>
                            <HeadingThree>Chief Executive Officer &<br class="hide-for-small-only"/> Managing Partner</HeadingThree>
                            {/* <HeadingFour>Biography goes here.</HeadingFour> */}
                            <KrishnanModal
                                show={modalShow2}
                                onHide={() => setModalShow2(false)}
                            />
                            </MyDiv>
                        </Col>
                    </Row>
                    </Col> 
                </Row>
                <Row className="our-profile-info">
                    <Col md={6} sm={6}>
                    <Row>
                        <Col md={5} lg={5} sm={5} className=" our-pro-part">
                        <MyDiv className="our-pro-img">
			    	        <img className="" src={Mani} alt="Mani Shanmugam"  onClick={() => setModalShow3(true)}/>
                            {/* <img className="show-for-small-only" src={Manimob} alt="Mani Shanmugam"/> */}
                    </MyDiv>
                        </Col>
                        <Col md={7} lg={7} sm={7}className="p-sm-0 profile-mob-margin our-profile-content">
                            <MyDiv className="our-pro-details">
                            <h2  onClick={() => setModalShow3(true)}>Mani Shanmugam</h2>
                            <HeadingThree>Chief Operating Officer &<br class="hide-for-small-only"/> Managing Partner</HeadingThree>
                            <ManiShanmugamModal
                                show={modalShow3}
                                onHide={() => setModalShow3(false)}
                            />
                            {/* <HeadingFour>Biography goes here.</HeadingFour> */}
                            </MyDiv>
                        </Col>
                    </Row>

                    </Col>
                    <Col md={6} sm={6}>
                    <Row>
                        <Col md={5} lg={5} sm={5} className=" our-pro-part">
                        <MyDiv className="our-pro-img">
                        <img className="" src={Sakthi} alt="Sakthi Palani" onClick={() => setModalShow4(true)} />
                        {/* <img className="show-for-small-only" src={Sakthimob} alt="Sakthi Palani" data-toggle="modal" data-target="#gkModal"/> */}
                    </MyDiv>
                        </Col>
                        <Col md={7} lg={7} sm={7} className="p-sm-0 profile-mob-margin our-profile-content">
                            <MyDiv className="our-pro-details">
                            <h2 onClick={() => setModalShow4(true)}>Sakthi Palani <br class="hide-for-small-only"/>Gounder</h2>
                            <HeadingThree>Chief Investment Officer &<br class="hide-for-small-only"/> Managing Partner</HeadingThree>
                            {/* <HeadingFour>Biography goes here.</HeadingFour> */}
                            <SakthiPalaniModal
                                show={modalShow4}
                                onHide={() => setModalShow4(false)}
                            />
                            </MyDiv>
                        </Col>
                    </Row>

                    </Col> 
                </Row>
            </Container>            
      </>

  );
}

export default Ourteams;


/*Model content*/

function PreethaModal(props) {
    return (
      <Modal    {...props} size="xl" aria-labelledby="contained-modal-title-vcenter"  centered className="our-team-model-part" >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Container>
                <Row>
                    <Col md={4}  sm={4} className="our-team-model-img">
                   <img  className="" src={Preetha} alt="Preetha Prabhakar"/>
                    </Col>
                    <Col md={8} sm={8} className="out-team-model-content">
                        <HeadingThree>Preetha Prabhakar</HeadingThree>
                        <SpanTag>President Nanban ESG Solutions</SpanTag>
                        <MyDiv className="out-team-model-desc">
                            <p>Preetha is an executive serving both for-profit and nonprofit organizations. She brings more than 23 years of business acumen, leadership, technology, finance, and operations management. Her industry experience includes technology leadership roles in insurance, finance, retail, healthcare, environmental remediation, and private equity fund(s).</p>
                            <p>Preetha holds a bachelor's in Computer Science Engineering from Bharathiar University, India, and a Master of Business Administration from Franklin University. She is also a Stanford University Certified Program Manager.</p>
                            <p>With extensive experience in reengineering organizations, Preetha showcases a deep understanding of people, processes, and technology. She has significant experience evolving the operations of IT areas to be more efficient and effective. She has led many transformations of application suites through large investment programs to uplift capabilities and upgrade technology. These transformations have simplified technology stacks, improved products, and streamlined processes.</p>
                            <p>She is an accomplished leader capable of managing the full lifecycle of highly sophisticated technical projects with multimillion-dollar budgets and global deployments. In addition, she is recognized for dramatically improving organizational efficiency, profitability, and customer experience by planning, designing, and deploying highly effective systems. She also has extensive experience coaching and leading global technology teams and is respected for effectively establishing strategic partnerships throughout all enterprise levels in delivering projects and programs on time.</p>
                            <p>As an executive, one of Preetha's greatest passions is championing the conservation, revival, and replenishing of Mother Earth. She leads Nanban’s non-profit flagship project “Mothers for Mother Nature," which is focused on helping farmers around the world lead dignified lives by leading the transition to natural ways of farming free of chemicals and pesticides and by helping people from all walks of life access healthier food and save and protect our precious Mother Earth. This project is currently implemented in South India, Peru, South Africa, and Malaysia.</p>
                        </MyDiv>
                    </Col>
                </Row>
            </Container>
        </Modal.Body>
       
      </Modal>
    );
  }


  function KrishnanModal(props) {
    return (
      <Modal    {...props} size="xl" aria-labelledby="contained-modal-title-vcenter"  centered className="our-team-model-part" >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Container>
                <Row>
                    <Col md={4} sm={4} className="our-team-model-img">
                   <img  className="" src={Gopala} alt="Gopala Krishnan"/>
                    </Col>
                    <Col md={8} sm={8} className="out-team-model-content">
                        <HeadingThree>Gopala Krishnan  ("GK")</HeadingThree>
                        <SpanTag>Chief Executive Officer & Managing Partner</SpanTag>
                        <MyDiv className="out-team-model-desc">
                            <p>Before assuming the role as CEO of Nanban Group, "GK" was in several senior-level executive positions in a fortune 100 Information Technology (IT) Service company. In addition to his professional accolades, "GK" successfully developed investment strategies, collectively referred to as "GK Strategies", which are currently the catalyst responsible for Nanban's excessive growth. "GK" has used his extensive educational background in Mathematics, Statistics, Computer Science and Engineering, and MBA in Finance to develop the strategies. A true believer in philanthropy, "GK" has been generously sharing the "GK Level-1 and Level-2" system with the community for free under Nanban Foundation.</p>
                        </MyDiv>
                    </Col>
                </Row>
            </Container>
        </Modal.Body>
       
      </Modal>
    );
  }


  function ManiShanmugamModal(props) {
    return (
      <Modal    {...props} size="xl" aria-labelledby="contained-modal-title-vcenter"  centered className="our-team-model-part" >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Container>
                <Row>
                    <Col md={4} sm={4} className="our-team-model-img">
                   <img  className="" src={Mani} alt="Mani Shanmugam"/>
                    </Col>
                    <Col md={8} sm={8} className="out-team-model-content">
                        <HeadingThree>Mani Shanmugam</HeadingThree>
                        <SpanTag>Chief Operating Officer & Managing Partner</SpanTag>
                        <MyDiv className="out-team-model-desc">
                           <p>As one of Nanban's founding members, Mani brings a wealth of knowledge and expertise in operational and technical leadership, having worked for a Fortune 100 Bank. He also led the Data Analytics functions and Regulatory Audits at various financial institutions while associated with Big 4 Consulting firms. An expert in building strong relationships and trust at every level of the organization, Mani has a deep passion for people development, building self-organizing solid teams to deliver superior results, maintaining excellent customer relationships, and bringing in operational efficiency. He holds a Bachelor's Degree in Commerce and a Master's Degree in Computer Science with certifications in Data Analytics / Business Intelligence area.</p> 
                        </MyDiv>
                    </Col>
                </Row>
            </Container>
        </Modal.Body>
       
      </Modal>
    );
  }

  function SakthiPalaniModal(props) {
    return (
      <Modal    {...props} size="xl" aria-labelledby="contained-modal-title-vcenter"  centered className="our-team-model-part" >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Container>
                <Row>
                    <Col md={4}  sm={4} className="our-team-model-img">
                   <img  className="" src={Sakthi} alt="akthi Palani Gounder"/>
                    </Col>
                    <Col md={8} sm={8} className="out-team-model-content">
                        <HeadingThree>Sakthi Palani Gounder</HeadingThree>
                        <SpanTag>Chief Investment Officer & Managing Partner</SpanTag>
                        <MyDiv className="out-team-model-desc">
                          <p>
                          An innovative and respected Wealth Management Industry leader, Sakthi brings over a decade of experience in Analytics and Data management. Having led futuristic data-driven products for Investment Advisors, delivered products that helped set strategic direction in the organization.
                          </p>
                          <p>An Engineering graduate from CEG Chennai, India, and FinTech education in HarvardX, he has a passion for stocks, trading strategies, and knowledge sharing. Sakthi, the son of a farmer, is also heavily involved in the Mothers for Mother Nature project driven by Nanban Foundation.</p>
                        </MyDiv>
                    </Col>
                </Row>
            </Container>
        </Modal.Body>
       
      </Modal>
    );
  }