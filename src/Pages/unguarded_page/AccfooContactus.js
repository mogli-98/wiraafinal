import React, { useEffect } from 'react';
import "../../asset/css/AccfooContactus.css";
// import Wiraalogo from "../../Aseset/image/Wiraalogo.png";
// import Wiraaalogo from "../../Aseset/image/Wiraalogowhite.png";
import Accountfootor from '../../Layout/Accountfooter';
import Navbar from '../../Layout/Header';
import { Col, Container, Row } from 'react-bootstrap';
import { Button, TextField } from '@mui/material';

function ContactComponent() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (

    <>
      <div className="bb-full-width bb-top-menubar-logedout" style={{ backgroundColor: 'white' }}>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-6 pr-0">
              <a href="/" className="d-inline-block float-left">
              </a>
            </div>
           
          </div>
        </div>
      </div>

      <div className="bb-full-width pb-5" style={{ backgroundColor: 'white' }}>
        <div className="bb-contact-container">
          <div className="bb-full-width bb-contact-box">
            <div className="bb-full-width text-center">
              <h2 style={{padding:'20px'}} className="head-welcome bb-full-width">Contact Us</h2>
            </div>
            <Container className='mt-5'>
              <Row style={{ marginTop: '20px' }}>
                <Col sm={3}>
                  <label style={{ fontSize: '18px', fontWeight: 600, marginLeft: '20px' }}>Startup:</label>
                </Col>
                <Col sm={9}>
                  <TextField style={{ width: '100%', marginRight: '20px' }} required id="outlined-basic" placeholder='Name' size='small' variant="outlined" />
                </Col>
              </Row>
              <Row style={{ marginTop: '20px' }}>
                <Col sm={3}>
                  <label  style={{ fontSize: '18px', fontWeight: 600, marginLeft: '20px' }}>Country:</label>
                </Col>
                <Col sm={9}>
                  <TextField required style={{ width: '100%' }} id="outlined-basic" placeholder='Country' size='small' variant="outlined" />
                </Col>
              </Row>
              <Row style={{ marginTop: '20px' }}>
                <Col sm={3}>
                  <label style={{ fontSize: '18px', fontWeight: 600, marginLeft: '20px' }}>Email Id:</label>
                </Col>
                <Col sm={9}>
                  <TextField required style={{ width: '100%' }} id="outlined-basic" type='email' placeholder='Email ID' size='small' variant="outlined" />
                </Col>
              </Row>
              <Row style={{ marginTop: '20px' }}>
                <Col sm={3}>
                  <label style={{ fontSize: '18px', fontWeight: 600, marginLeft: '20px' }}>Phone no:</label>
                </Col>
                <Col sm={9}>
                  <TextField required style={{ width: '100%' }} id="outlined-basic" type='number' placeholder='Mobile no.' size='small' variant="outlined" />
                </Col>
              </Row>
              <Row style={{ marginTop: '20px', marginBottom: '20px' }}>
                <Col sm={3}>
                  <label style={{ fontSize: '18px', fontWeight: 600, marginLeft: '20px' }}>Note:</label>
                </Col>
                <Col sm={9}>
                  <TextField style={{ width: '100%' }} id="outlined-basic" type='text' placeholder='Enter Note ' size='small' variant="outlined" />
                </Col>
              </Row>
              <div fullWidth className="form-group mt-5 ">
                <Button fullWidth style={{ backgroundColor: '#008080', color: 'white' }}   >Submit</Button>
              </div>
            </Container>



           





            <div className="bb-contact-box-saprator text-center">
              <span>Or Connect With</span>
            </div>

            <div className="bb-full-width bb-contat-social-sec">
              <div className="bb-full-width">
                <div className="bb-contat-social-box">
                 
                    <i className="fab fa-instagram"></i>
              
                    <i className="fab fa-linkedin"></i>
              
                
                    <i className="fab fa-facebook"></i>
             
                </div>
              </div>
              <div className="bb-full-width text-center">
                <a href="mailto:hello@wiraa.com" className="text-info bb-mail-link">hello@wiraa.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Accountfootor />

    </>
  );
}

export default ContactComponent;
