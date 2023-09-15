import React,{useEffect} from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import "../../asset/css/homepage.css";
import Picture1 from '../../asset/image/Picture1.png';
import Picture2 from '../../asset/image/Picture2.png';
import Picture3 from '../../asset/image/Picture3.png';
import Picture4 from '../../asset/image/Picture4.png';
import Picture5 from '../../asset/image/Picture5.png';
import Picture6 from '../../asset/image/Picture6.png';
import Picture7 from '../../asset/image/Picture7.png';
import Picture8 from '../../asset/image/Picture8.png';
import Picture9 from '../../asset/image/Picture9.png';
import Picture10 from '../../asset/image/Picture11.png';

import Picture12 from '../../asset/image/Business.png';
import Picture13 from '../../asset/image/creativity.png';
import Picture14 from '../../asset/image/engineering.png';
import Picture15 from '../../asset/image/it.png';
import Picture16 from '../../asset/image/Lifestyle.png';
import Picture17 from '../../asset/image/megaphone.png';
import Picture18 from '../../asset/image/knowledge.png';
import Picture19 from '../../asset/image/Writing.png';

import Picture20 from '../../asset/image/Picture20.png';
import SectionBanner from '../../asset/image/Sectionbanner.jpg'
import connect from "../../asset/image/connect.png";
import negotiate from "../../asset/image/negotiate.png";
import verified from "../../asset/image/verified.png";
import { Link } from "react-router-dom";
// import WiraaStartup from './Wiraastartup';
// import { Box } from 'react-bootstrap-icons';
function Homepage() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      {/* Top-banner-section */}
      <section style={{backgroundColor:'white'}}>
        <Container fluid className='pt-5 '>
          <Row className='pt-0' >
            {/* <Col sm={1} className="mt-5" >

            </Col> */}

            <Col sm={2} className="mb-5 d-none d-sm-block" style={{paddingLeft:'10vh'}} >
              <img src={Picture1} alt="" className='p-1' style={{ width: '28vh' }} />
              <img src={Picture2} alt="" className='p-1' style={{ width: '28vh' }} />
            </Col>
            
            <Col sm={2} className="d-none d-sm-block" style={{marginTop:'18vh'}}  >
              <img src={Picture3} alt="" className='p-1' style={{ width: '28vh' }} />
              <img src={Picture4} alt="" className='p-1' style={{ width: '28vh' }} />
            </Col>
            {/* <Col sm={1} className="mt-5" >

            </Col> */}


            <Col sm={4} xs={12} >
              <p className='top-text-h1'>Discover the world's top professionals</p>
              <p className='text-disable top-text-p' style={{ fontSize: '25px', color: 'grey' }}>Hire world’s top freelancers and get work done in a safe and flexible environment.</p>
              <Link to='/Home/PostRequirement'><button className='post-request '> <b>Post a Project</b></button></Link>
              <Link to='/Home/Project'><button className='find-project '><b>Find Project</b></button></Link>
            </Col>
            {/* <Col sm={1} className="mt-5" >

            </Col> */}



            <Col sm={2} className="mb-5 d-none d-sm-block " style={{paddingLeft:'7vh'}}>
              <img src={Picture5} alt="" className='p-1' style={{ width: '28vh'}} />
              <img src={Picture6} alt="" className='p-1' style={{ width: '28vh' }} />
            </Col>
            <Col sm={2} className=" d-none d-sm-block" style={{marginTop:'18vh'}} >
              <img src={Picture7} alt="" className='p-1' style={{ width: '28vh' }} />
              <img src={Picture8} alt="" className='p-1' style={{ width: '28vh' }} />
            </Col>
            {/* <Col sm={1} className="mt-5" >
 
            </Col> */}

          </Row>
        </Container>
      </section>
      {/* TRUSTED-section */}
      <section  style={{backgroundColor:'white'}}>
        <Container className='pt-4'>
          <Row className='pt-4'>
            <Col sm={5} style={{marginTop:'30px'}} > <span className='header' >Hire top talents from  <span style={{ color: '#008080' }}>anywhere</span> </span>
              <p className='subheader' style={{backgroundColor:'ButtonHighlight',}} >We’re available on Android devices and platforms.
              </p>
            </Col>
            <Col sm={3}><img src={Picture10} alt="" style={{ width: '82%',marginTop:'30px',marginLeft:'10px' }} /></Col>
            <Col sm={4}><img src={Picture9} alt="" style={{ width: "80%",height:'100%',float:"right"}} /></Col>
          </Row>

        </Container>
      </section>
      <section style={{ backgroundColor: 'ButtonHighLight' }}>
        <Container className='pb-5'>
          <Row>
            <Col className='explore_skill'>
              <h1 className='text-center explore_skill mt-5' style={{fontSize:'45px'}}>Explore the marketplace</h1>

            </Col>
          </Row>
        </Container>
      </section>
      <section style={{ backgroundColor: 'ButtonHighLight' }}>
        <Container className='card_container'>
          <Row className='pt-5 '>
            <Col sm={3} xs={6}>
              <div className='card-box' style={{ textAlign: 'center' }}>
                <img src={Picture12} alt="" className='card-img' style={{ height:'60px',width:'60px',display: 'block', margin: 'auto' }} />
                <h1>Business</h1>
              </div>
            </Col>
            <Col sm={3} xs={6}>
              <div className='card-box' style={{ textAlign: 'center' }}
              >
                <img src={Picture13} alt="" className='card-img' style={{height:'60px',width:'60px'}} />
                <h1>Creative</h1>
              </div>
            </Col>
            <Col sm={3} xs={6}>
              <div className='card-box' style={{ textAlign: 'center' }}
              >
                <img src={Picture14} alt="" className='card-img' style={{height:'60px',width:'60px'}} />
                <h1>Engineering</h1>
              </div>
            </Col>
            <Col sm={3} xs={6}>
              <div className='card-box' style={{ textAlign: 'center' }}
              >
                <img src={Picture15} alt="" className='card-img' style={{height:'60px',width:'60px'}} />
                <h1>IT</h1>
              </div>
            </Col>
          </Row>
          <Row className='pt-5 pb-5'>
            <Col sm={3} md={3} xs={6}>
              <div className='card-box'>
                <img src={Picture16} alt="" className='card-img' style={{height:'60px',width:'60px'}} />
                <h1>Lifestyle</h1>
              </div>
            </Col>
            <Col sm={3} md={3} xs={6}>
              <div className='card-box'>
                <img src={Picture17} alt="" className='card-img' style={{height:'60px',width:'60px'}} />
                <h1>Marketing</h1>
              </div>
            </Col>
            <Col sm={3} xs={6}>
              <div className='card-box'>
                <img src={Picture18} alt="" className='card-img' style={{height:'60px',width:'60px'}} />
                <h1>Study</h1>
              </div>
            </Col>
            <Col sm={3} xs={6}>
              <div className='card-box'>
                <img src={Picture19} alt="" className='card-img' style={{height:'60px',width:'60px'}} />
                <h1>Writing</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className=''>
        <Container fluid >
          <Row className='pt-5 pb-5'>
            <Col>
              <h1 className='text-center' style={{ fontSize: '45px' }}>Hire smarter, not harder</h1>
              <p className='text-center' style={{ fontSize: '22px', color: 'grey' }}>Find, connect, and hire the best talents to work on projects without any cost</p>
            </Col>
          </Row>
          <Row className='pt-5 pb-5 hiresmart'>
            <Col sm={4}> <img src={connect} alt="" className='card-img1' />
              <h4 className='text-center mt-4'>Connect & collaborate</h4>
              <p className='text-center' style={{ fontSize: '18px', color: 'grey' }}>Post your requirement and start receiving proposals within 24 hours</p>
            </Col>
            <Col sm={4}><img src={verified} alt="" className='card-img1' />
              <h4 className='text-center mt-4' >Verified professionals</h4>
              <p className='text-center' style={{ fontSize: '18px', color: 'grey' }}>Instantly match with verified freelancers and agencies at zero commission</p>
            </Col>
            <Col sm={4}><img src={negotiate} alt="" className='card-img1' />
              <h4 className='text-center mt-4'>Negotiating the deal</h4>
              <p className='text-center' style={{ fontSize: '18px', color: 'grey' }}>Transparency and certainty of price, scope of work, quality and speed</p>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col className='mt-5'>
              <Card style={{ backgroundColor: "rgb(239, 239, 239)", border: 'none' }}>
                <Row className='m-5'>
                  <Col sm={5} style={{ textAlign: "center", marginTop: '40px' }}>
                    <h3 className='text-center' style={{ fontSize: '40px' }}>Unlock the secrets to successful freelancing</h3>
                    <p className='text-center mt-5' style={{ fontSize: '20px', fontWeight: 'medium' }}>Become a successful freelancer and learn tips and tricks from the experts to thrive in any industry.</p>

                    <button className='mt-5 home-learn' style={{color:'white'}} ><b>Start Learnings</b>
                    </button>

                  </Col>
                  <Col sm={7}>
                    <img src={Picture20} alt="" style={{ width: "90%" }} />
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row className='start_project'>

            <Col sm={5}>
              <img src={SectionBanner} style={{ width: '100%' }} alt="" />
            </Col>
            <Col sm={1}></Col>

            <Col sm={5} className=' mt-5' >
              <center>
                <h3>Ready to start your project?</h3>
                <p className='startproject_p'>Be a part of a global professional community, make friends, work independently, run your own business and choose your own clients and projects.</p>
                <br />
                <p  className='startproject_p'>Join us today and discover the freedom, flexibility, and fulfilment that come with freelancing.
                </p>
                <br /><br /><br /><br />
                <button className=''>Live your passion</button>
              </center>
            </Col>
            <Col sm={1}></Col>
          </Row>
        </Container>


      </section>

      {/* <WiraaStartup/> */}
    </>
  )
}
export default Homepage;
