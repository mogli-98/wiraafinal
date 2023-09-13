import React from 'react';
import '../../Aseset/css/Wiraastartup.css'; // Import your CSS file for styling
import { Container, Row, Col, Button } from 'react-bootstrap'; // Import Bootstrap components
import Startupimg1 from '../../Aseset/css/startupimg/wiraastartup1.jpg';
import Startupimg2 from '../../Aseset/css/startupimg/wiraastartup5.jpg';
import Startupimg3 from '../../Aseset/css/startupimg/wiraastartup4.jpg';
import Startupimg4 from '../../Aseset/css/startupimg/wiraastartup3.jpg';
import Startupimg5 from '../../Aseset/css/startupimg/wiraastartup2.jpg';
import Navbar from '../../Layout/Header';
import Accountfootor from '../../Layout/Accountfooter';
import { useState } from 'react';
import { TextField } from '@mui/material';



function WiraaStartup() {
        const [isVisible, setIsVisible] = useState(false);

    const handleButtonClick = () => {
        // Toggle the visibility state when the button is clicked
        setIsVisible(!isVisible);
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth', // Add smooth scrolling animation
        });
    };

    return (
        <>

            <div className="page">
                <Navbar />
                <Container>
                    <Row>
                        <Col md={6}>
                            <div className="text-content">
                                <h1 className='wiraastartup_h1' >IT Solutions for Startups</h1>
                                <h3 className='wiraastartup_h3' >Launch <span style={{ color: '#008080' }}>3X </span> faster and cheaper with Wiraa Assured</h3>
                                <p className='wiraastartup_p'>Wiraa Assured is aimed at helping young companies translate their disruptive ideas into market-ready software products. </p>
                                <Button className='wiraastartup_btn'
                                    onClick={handleButtonClick}
                                >Start building</Button>


                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="image-content">
                                <img className='wiraastartup_img1' src={Startupimg1} alt="My " />

                            </div>
                        </Col>
                    </Row>

                    <section className=''>
                        <Container fluid >
                            <Row className='pt-5 pb-5'>
                                <Col>
                                    <h1 className='text-center wiraastartup_h1' style={{ fontSize: '37px' }}>Grow your business with robust infrastructure </h1>
                                </Col>
                            </Row>
                            <Row className='pt-5 pb-5 hiresmart'>
                                <Col sm={4}

                                >
                                    <img style={{ height: '150px', width: '150px' }} src={Startupimg2} alt="" className='card-img1' />
                                    <h4 className='text-center mt-5' style={{ fontSize: '30px' }}>Plan Your build</h4>
                                    <p className='text-center' style={{ marginTop: '30px', width: '350px', marginLeft: '25px', fontSize: '25px', color: 'grey', textAlign: 'left', padding: '10px 40px' }}>Start by finalizing and desigining your detailed build plan at a fixed cost </p>
                                </Col>
                                <Col sm={4}>
                                    <img style={{ height: '150px', width: '150px' }} src={Startupimg3} alt="" className='card-img1' />


                                    <h4 className='text-center mt-5' style={{ fontSize: '30px' }} >90-days MVP</h4>
                                    <p className='text-center' style={{ marginTop: '30px', width: '380px', marginLeft: '25px', fontSize: '25px', color: 'grey', textAlign: 'left', padding: '10px 40px' }}>Get a custom quote to turn your build plan into a live MVP within 90 days</p>
                                </Col>
                                <Col sm={4}>
                                    <img style={{ height: '150px', width: '150px' }} src={Startupimg4} alt="" className='card-img1' />
                                    <h4 className='text-center mt-5' style={{ fontSize: '30px' }}>Wiraa Care</h4>
                                    <p className='text-center' style={{ marginTop: '30px', width: '380px', marginLeft: '25px', fontSize: '25px', color: 'grey', textAlign: 'left', padding: '10px 40px' }}>Fixed monthly subscription ensures continued growth after your MVP is delivered</p>
                                </Col>
                            </Row>
                        </Container>
                    </section>


                    <section className=''>
                        <Container fluid >
                            <Row className=''>
                                <Col>
                                    <h1 className='text-center wiraastartup_h1' style={{ fontSize: '37px' }}>Keep growing with Wira Care </h1>

                                </Col>
                            </Row>
                            <Row className='hiresmarts'>


                                <Col sm={6} style={{ padding: '0' }}
                                >
                                    <p className='startup-h6'>App development isn't a one-end-done engegement.</p>
                                    <p className='startups-h6 '>Wiraa Care is a fixed-price add-on plan that ensure your app <br /> keeps getting better and works well once your MVp is delivered. </p>

                                    <Row>
                                        <Col className='extra_content' sm={12} >

                                            <p className='startup_p'>Wiraa Care Benefits</p>
                                            <li style={{ fontSize: '18px', marginTop: '25px' }}><span style={{ fontSize: "20px", fontWeight: 600 }}>Keep you Team:</span>       <span   >Keep a team in place once your MVP in finished </span>   </li>
                                            <li style={{ fontSize: '18px', marginTop: '25px' }}> <span style={{ fontSize: "20px", fontWeight: 600 }}>Predictable Growth:</span> <span  >Fixed monthly resource allocation for new features.</span>  </li>
                                            <li style={{ fontSize: '18px', marginTop: '25px' }}>  <span style={{ fontSize: "20px", fontWeight: 600 }}>Quick Fixes:</span>       <span  > Quickly fix any bugs or downtime problems.</span> </li>
                                            <li style={{ fontSize: '18px', marginTop: '25px' }}><span style={{ fontSize: "20px", fontWeight: 600 }}> Handle More Users:</span>  <span  >On-call support for sudden usage increases</span> </li>
                                            <li style={{ fontSize: '18px', marginTop: '25px', marginBottom: '20px' }}><span style={{ fontSize: "20px", fontWeight: 600 }}>stay Updated:</span>        <span  >Regular upgrades to libraries and third-party dependencies</span>   </li>


                                        </Col>
                                    </Row>

                                </Col>
                                <Col sm={6}>
                                    <div className="imagecontent">
                                        <img className='startupimg' src={Startupimg5} alt="" />
                                    </div>
                                </Col>

                            </Row>
                        </Container>
                    </section>
                </Container>



                {/* <Modal show={show} onHide={handleClose} animation={false} size='md'>


                    <Modal.Header closeButton>
                        <Modal.Title >Startup Details</Modal.Title>
                    </Modal.Header>

                    <Container>
                        <Row style={{ marginTop: '20px' }}>
                            <Col sm={3}>
                                <label style={{ fontSize: '18px', fontWeight: 600, marginLeft: '20px' }}>Startup:</label>

                            </Col>
                            <Col sm={9}>

                               

                                <TextField style={{ width: '100%',marginRight:'20px' }} id="outlined-basic" placeholder='Name' size='small' variant="outlined" />

                            </Col>
                        </Row>




                        <Row style={{ marginTop: '20px' }}>
                            <Col sm={3}>
                                
                                <label style={{ fontSize: '18px', fontWeight: 600, marginLeft: '20px' }}>Country:</label>

                            </Col>
                            <Col sm={9}>

                                

                                <TextField style={{ width: '100%' }} id="outlined-basic" placeholder='Country' size='small' variant="outlined" />

                            </Col>
                        </Row>





                        <Row style={{ marginTop: '20px' }}>
                            <Col sm={3}>
                               
                                <label style={{ fontSize: '18px', fontWeight: 600, marginLeft: '20px' }}>Email Id:</label>

                            </Col>
                            <Col sm={9}>

                                

                                <TextField style={{ width: '100%' }} id="outlined-basic" type='email' placeholder='Email ID' size='small' variant="outlined" />



                            </Col>
                        </Row>







                        <Row style={{ marginTop: '20px' }}>
                            <Col sm={3}>
                                

                                <label style={{ fontSize: '18px', fontWeight: 600, marginLeft: '20px' }}>Phone No. :</label>

                            </Col>
                            <Col sm={9}>

                                

                                <TextField style={{ width: '100%' }} id="outlined-basic" type='number' placeholder='Mobile NO.' size='small' variant="outlined" />



                            </Col>
                        </Row>






                        <Row style={{ marginTop: '20px',marginBottom:'20px' }}>
                            <Col sm={3}>
                                
                                <label style={{ fontSize: '18px', fontWeight: 600, marginLeft: '20px' }}>Note.:</label>

                            </Col>
                            <Col sm={9}>

                                

                                <TextField style={{ width: '100%' }} id="outlined-basic" type='text' placeholder='Enter Note ' size='small' variant="outlined" />




                            </Col>
                        </Row>

                    </Container>
                    <Modal.Footer>
                        
                        <Button style={{ backgroundColor: '#008080', border: 'none' }} onClick={handleClose}>
                            Submit
                        </Button>
                    </Modal.Footer>
                </Modal> */}

                {isVisible && <center> <div style={{ width: '50%', textAlign: 'center', border: '2px solid #008080', marginTop: '50px', borderRadius: '20px', padding: '10px 50px' }}>

                    <Container>
                        <h2 style={{ marginTop: '20px' }}>Startup Details</h2>
                        <Row style={{ marginTop: '20px' }}>
                            <Col sm={3}>
                                <label style={{ fontSize: '18px', fontWeight: 600, marginLeft: '20px' }}>Startup:</label>

                            </Col>
                            <Col sm={9}>
                                <TextField style={{ width: '100%', marginRight: '20px' }} id="outlined-basic" placeholder='Name' size='small' variant="outlined" />
                            </Col>
                        </Row>

                        <Row style={{ marginTop: '20px' }}>
                            <Col sm={3}>
                                <label style={{ fontSize: '18px', fontWeight: 600, marginLeft: '20px' }}>Country:</label>
                            </Col>
                            <Col sm={9}>
                                <TextField style={{ width: '100%' }} id="outlined-basic" placeholder='Country' size='small' variant="outlined" />

                            </Col>
                        </Row>

                        <Row style={{ marginTop: '20px' }}>
                            <Col sm={3}>
                                <label style={{ fontSize: '18px', fontWeight: 600, marginLeft: '20px' }}>Email Id:</label>
                            </Col>
                            <Col sm={9}>
                                <TextField style={{ width: '100%' }} id="outlined-basic" type='email' placeholder='Email ID' size='small' variant="outlined" />
                            </Col>
                        </Row>







                        <Row style={{ marginTop: '20px' }}>
                            <Col sm={3}>
                                <label style={{ fontSize: '18px', fontWeight: 600, marginLeft: '20px' }}>Phone No. :</label>
                            </Col>
                            <Col sm={9}>
                                <TextField style={{ width: '100%' }} id="outlined-basic" type='number' placeholder='Mobile NO.' size='small' variant="outlined" />
                            </Col>
                        </Row>


                        <Row style={{ marginTop: '20px', marginBottom: '20px' }}>
                            <Col sm={3}>
                                <label style={{ fontSize: '18px', fontWeight: 600, marginLeft: '20px' }}>Note.:</label>
                            </Col>
                            <Col sm={9}>



                                <TextField multiline
                                    rows={2} fullWidth
                                    maxRows={4} id="outlined-basic" type='text' placeholder='Enter Note ' variant="outlined" />
                            </Col>
                        </Row>
                        <Row>
                            <Col>

                                <Button style={{ backgroundColor: '#008080', border: 'none', float: 'right', marginBottom: '30px' }} >
                                    Submit
                                </Button>
                            </Col>
                        </Row>
                    </Container>

                </div> </center>}
            </div>

            <Accountfootor />

        </>
    );
}

export default WiraaStartup;
