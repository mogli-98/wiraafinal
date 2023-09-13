import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import "../../Aseset/css/learn.css";
import topbanner from "../../Aseset/image/Learn/topbanner.jpg"
import suitcase from "../../Aseset/image/Learn/suitcase.png"
import checkmark from "../../Aseset/image/Learn/checkmark.png"
import clap from "../../Aseset/image/Learn/clap.png"
import bulb12 from "../../Aseset/image/Learn/bulb12.jpg"
import Accordion from 'react-bootstrap/Accordion';
import Footor from '../../Layout/Footor';
import { Link } from 'react-router-dom'; 
import Header from '../../Layout/Header'
function Homepage() {
  return (
    <>
      <section>
        <Header/>
        <Container>
            <Row >
                <Col sm={6} xs={12}>
                    <p className='learn-top-h6 mt-3'>Build and scale your <br /> business with us</p>
                    <p className='learn-top-p'>Let us help you find the right talent.</p>
                    <p className='para_sub_top'>Find freelancers and run projects your way at the world’s work marketplace.</p>
                    <Link to='/Module'><button className='btn_apply'>Apply</button></Link>
                </Col>
                <Col sm={6} xs={12}>
                  <img src={topbanner} alt="" className='img_custom_banner mb-5' />
                </Col>
            </Row>
            <Row >
              <Col className='margin-msg'>
                <h2 className=''>Our #1 priority is to ensure our startups find verified and trustworthy professionals.
                </h2>
              </Col>
            </Row>
            <Row >
              <Col className='mt-5 font-size_grow'> 
                <h2>Grow your business with robust infrastructure</h2>
              </Col>
            </Row>
            <Row className='mt-5 card-row'>
              <Col sm={4} md={4} xs={12}>
                <Card className='learn-business-card'>
                  <img src={suitcase} alt="" className='card-img-learn'/>
                  <h3 className='card-text-1'>Apply</h3>
                  <p className='card-text-2'>If you fulfil the criteria, you can apply for the startup program.</p>
                </Card>
              </Col>
              <Col sm={4} md={4} xs={12}>
                <Card className='learn-business-card'>
                  <img src={checkmark} alt="" className='card-img-learn' />
                  <h3 className='card-text-1'>Apply</h3>
                  <p className='card-text-2'>If you fulfil the criteria, you can apply for the startup program.</p>
                </Card>
              </Col>
              <Col sm={4} md={4} xs={12}>
                <Card className='learn-business-card'>
                  <img src={clap} alt="" className='card-img-learn' />
                  <h3 className='card-text-1'>Apply</h3>
                  <p className='card-text-2'>If you fulfil the criteria, you can apply for the startup program.</p>
                </Card>
              </Col>  
            </Row>
            <Row className='mt-5 mb-5 card-row'>
              <Col sm={6} xs={12}>
                <h1 className='learn-benfit'>Benefits</h1>
                <ul className='learn-benfit-ul'>
                  <li>10 highlighted orders with 'FEATURED' tag in a top <br /> position</li>
                  <li>Direct contacts and messages with unlimited <br /> professionals</li>
                  <li>Chances of finding professionals are tripled with Startup <br /> Package</li>
                  <li>A dedicated Manager is assigned to understand your <br /> requirements</li>
                  <li> Priority customer support to help in managing and posting  requirements</li>
                </ul>
              </Col>
              <Col sm={6} xs={12}>
                 <img src={bulb12} alt="" className='learn-benfit-img' style={{paddingTop:"15px"}} />
              </Col>
            </Row>
            <Row>
              <Col>
                <h1 className='text-center learn-faq'>FAQ</h1>
              </Col>
            </Row>
            <Row className='card-row'>
              <Col>
                <Card>
                <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>What if we are not associated with any incubator?</Accordion.Header>
                  <Accordion.Body>
                    <p>Yes, you can still apply if you are not associated with any incubator. However, after reviewing your application, the team will get back to you.</p>
                  </Accordion.Body>
                </Accordion.Item>
                
              </Accordion>
                </Card>
                <Card className='mt-3'>
                  <Accordion>
                  
                  <Accordion.Item eventKey="1">
                    <Accordion.Header> What are the charges of Wiraa startup package?
                    </Accordion.Header>
                    <Accordion.Body>
                      <p>Wiraa Startup plan cost just ₹999 a year.
                                    </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  </Accordion>
                </Card>
                <Card className='mt-3'>
                  <Accordion>
                  
                  <Accordion.Item eventKey="2">
                    <Accordion.Header> How can I get a refund or cancel my service?
                    </Accordion.Header>
                    <Accordion.Body>
                    <p>In order to make a refund request, you can directly write to&nbsp;. Your amount will be refunded within 6-7 working days.hello@wiraa.com</p>
                    </Accordion.Body>
                  </Accordion.Item>
                  </Accordion>
                </Card>
              </Col>
            </Row>
        </Container>
       
      </section>
      <Footor/>
    </>
  )
}
export default Homepage;
