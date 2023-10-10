import React, { useState } from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import "../../asset/css/freelanceredashboard.css";
import Sidenavbar from './layout/Sidenavbar';
import Topnavbar from './layout/topnavbar';
import bookbag from '../../asset/image/freelancerdash/bookbag.png'

import topcard2 from '../../asset/image/freelancerdash/topcard2.png'
import topcard3 from '../../asset/image/freelancerdash/topcard3.png'
import topcard4 from '../../asset/image/freelancerdash/topcard4.png'
// import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
// import Form from 'react-bootstrap/Form';
function Freelancerdashboard(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Container fluid className='dashboard-conatiner-top' >
                <Row>
                    <Col sm={1} xs={2} className=''>
                        <Sidenavbar />
                    </Col>


                    <Col sm={8} xs={10} className='dashboard-conatiner-top-row '>
                        <Container className='square border border-bottom-0'>
                            <Topnavbar />
                            <Row>
                                <Col >
                                    <Card className='dashboradfree-card-top'>
                                        <div className='dashboradfree-card-top-div'>
                                            <button className='freedashboard-create' onClick={handleShow}>Create Portfoilo</button>
                                            <img style={{ zIndex: 1000 }} src={bookbag} alt="" className='freedashboard-top-img' />
                                            <p style={{ fontSize: '20px' }}><b>Showcase your best works and achievements</b></p>
                                        </div>
                                    </Card>
                                </Col>
                            </Row>
                            <Row className='mt-5'>
                                {/* <Col sm={3} xs={6} className='pb-3'> 
                                    <Card style={{backgroundColor:"#efefef",borderStyle:'none'}}>
                                        <center>
                                            <img src={topcard1} alt=""className='mt-1' />
                                            <p style={{color:"#008080"}} className='mt-3'><b>Total Earning ₹45,000</b></p>
                                            <div className="freedash-top-text m-2">
                                                <p>Last Payment: 2 months ago</p>
                                            </div>
                                        </center>
                                    </Card>
                                </Col> */}
                                <Col sm={6} xs={6} className='pb-3'>
                                    <Card style={{ backgroundColor: "#efefef", borderStyle: 'none' }}>
                                        <center>
                                            <img src={topcard2} alt="" className='mt-4' height={40} />
                                        </center>
                                        <Row className='mt-3 mb-3 pb-1'>
                                            <Col>
                                                <div className="card-no-top ">96</div>
                                            </Col>
                                            <Col>
                                                <div className='top-dashpro'>
                                                    <span style={{ color: "#008080" }}><b>Projects</b></span><br />
                                                    <span className='thismonths' style={{ color: "#008080" }} >9 this months</span>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card>
                                </Col>
                                <Col sm={6} xs={6}>
                                    <Card style={{ backgroundColor: "#efefef", borderStyle: 'none' }}>
                                        <center>
                                            <img src={topcard3} alt="" className='mt-4' height={40} />
                                        </center>
                                        <Row className='mt-3 mb-3 pb-1'>
                                            <Col>
                                                <div className="card-no-top ">196</div>
                                            </Col>
                                            <Col>
                                                <div className='top-dashpro '>
                                                    <span style={{ color: "#008080" }} className='big'><b>Portfolios</b></span><br />
                                                    <span style={{ color: "#008080" }} className='thismonths'>32 this months</span>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card>
                                </Col>
                                {/* <Col sm={4} xs={6}> */}
                                {/* <Card style={{backgroundColor:"#efefef",borderStyle:'none'}}>
                                        <center>
                                            <img src={topcard4} alt="" className='mt-2'height={40} />
                                        </center>
                                        <Row className='mt-3 mb-3 pb-1'>
                                            <Col>
                                                <div className="card-no-top ">02</div> 
                                            </Col>
                                            <Col>
                                                <div className='top-dashpro '>
                                                    <span style={{color:"#008080"}}><b>Question</b></span><br />
                                                    <span style={{color:"#008080"}} className='small'>01 this months</span>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card> */}
                                {/* </Col> */}
                            </Row>
                            <Row>
                                <Col className='freedash-project'>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: 'none' }}>
                                        <p style={{ fontSize: '18px', color: 'black' }} className='mt-2 mb-1'>Latest Project:</p>

                                        <p className='mt-2 mb-1'>Explore all</p>

                                    </div>


                                    <div style={{ border: '2px solid lightgrey' }}>

                                        <div style={{ border: '2px solid lightgrey' }} className="latest-project-free">
                                            <span className='m-2 small'>INR 2000 - 5000 / Lump - Sum</span>
                                        </div>
                                        <p style={{ fontSize: '18px' }} className='m-2'>Chandan</p>
                                        <span style={{ fontSize: '14px' }} className='small'> Graphic Designer for brand identity</span>

                                    </div>
                                    <div style={{ border: '2px solid lightgrey' }}>

                                        <div className="latest-project-free">
                                            <span className='m-2 small'>INR 2000 - 5000 / Lump - Sum</span>
                                        </div>
                                        <p style={{ fontSize: '18px' }} className='m-2'>Chandan</p>
                                        <span style={{ fontSize: '14px' }} className=' small'> Graphic Designer for brand identity</span>

                                    </div>
                                    <div style={{ border: '2px solid lightgrey' }}>

                                        <div className="latest-project-free">
                                            <span className='m-2 small'>INR 2000 - 5000 / Lump - Sum</span>
                                        </div>
                                        <p style={{ fontSize: '18px' }} className='m-2'>Chandan</p>
                                        <span style={{ fontSize: '14px' }} className=' small'> Graphic Designer for brand identity</span>

                                    </div>
                                    <div style={{ border: '2px solid lightgrey' }}>

                                        <div className="latest-project-free">
                                            <span className='m-2 small'>INR 2000 - 5000 / Lump - Sum</span>
                                        </div>
                                        <p style={{ fontSize: '18px' }} className='m-2'>Chandan</p>
                                        <span style={{ fontSize: '14px' }} className=' small'> Graphic Designer for brand identity</span>

                                    </div>
                                </Col>
                                <Col className='freedash-project'>
                                    {/* <p className='mt-2'>Latest Questions:</p> */}
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: 'none' }}>
                                        <p style={{ fontSize: '18px', color: 'black' }} className='mt-2 mb-1'>Latest Questions:</p>

                                        <p className='mt-2 mb-1'>Explore all</p>

                                    </div>
                                    <div style={{ backgroundColor: 'ButtonHighlight' }} >

                                        <div style={{ paddingRight: '30px', border: '2px solid lightgrey' }} className="latest-question-free ">
                                            <span className='m-2'>60</span>
                                        </div>
                                        <p style={{ fontSize: '17px', marginLeft: '10px' }} className='mt-2 mb-0'>Gunagya Innovations - <span>Nutritionist</span></p>
                                        <hr style={{ color: 'lightgrey', marginTop: '0px', marginBottom: '0px' }} />
                                        <p style={{ fontSize: '13px', color: 'grey' }} className='m-1 small'> What are best signs of having a metabolism and what are <span style={{ color: 'black', fontSize: '10' }}>1 hour ago </span> </p>

                                    </div>
                                    <div style={{ backgroundColor: 'ButtonHighlight' }} >

                                        <div style={{ paddingRight: '30px' }} className="latest-question-free ">
                                            <span className='m-2'>3</span>
                                        </div>
                                        <p style={{ fontSize: '18px' }} className='m-2'>chandan</p>
                                        {/* <hr style={{color:'lightgrey'}} /> */}
                                        <hr style={{ color: 'lightgrey', marginTop: '0px', marginBottom: '0px' }} />
                                        <p style={{ fontSize: '14px', color: 'grey' }} className='m-1'> Graphic Designer for brand identity</p>

                                    </div>
                                    <div style={{ paddingRight: '30px', backgroundColor: 'ButtonHighlight', border: '2px solid lightgrey' }}>

                                        <div className="latest-question-free ">
                                            <span className='m-2'>12</span>
                                        </div>
                                        <p style={{ fontSize: '18px' }} className='m-2'>chandan</p>
                                        {/* <hr style={{color:'lightgrey'}} /> */}
                                        <hr style={{ color: 'lightgrey', marginTop: '0px', marginBottom: '0px' }} />
                                        <p style={{ fontSize: '14px', color: 'grey' }} className='m-1'> Graphic Designer for brand identity</p>

                                    </div>
                                    <div style={{ paddingRight: '30px', backgroundColor: 'ButtonHighlight', border: '2px solid lightgrey' }}>

                                        <div className="latest-question-free ">
                                            <span className='m-2'>39</span>
                                        </div>
                                        <p style={{ fontSize: '18px' }} className='m-2'>chandan</p>
                                        {/* <hr style={{color:'lightgrey'}} /> */}
                                        <hr style={{ color: 'lightgrey', marginTop: '0px', marginBottom: '0px' }} />
                                        <p style={{ fontSize: '14px', color: 'grey' }} className='m-1'> Graphic Designer for brand identity</p>

                                    </div>
                                </Col>

                            </Row>
                            <Row>
                                <Col>
                                    <Card className='m-2 lastcard-free' >
                                        <div className='last-card-freedash'>
                                            <p style={{ fontSize: '18px', fontWeight: 500, padding: '8px', paddingLeft: '30px' }} className='last-card-freedash-1 m-2'>Remaining monthly credits - 2 / 5</p>
                                            {/* <center> */}
                                            <button style={{ padding: '5px', width: '15%' }} className="freedashboard-create last-card-freedash-3">Upgrade</button>
                                            {/* </center> */}


                                            <p style={{ fontSize: '18px', fontWeight: 500, padding: '5px', paddingRight: '30px' }} className='last-card-freedash-2 m-2'>Current Package - <span style={{ color: 'bisque' }} >Basic Plan </span> </p>
                                        </div>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
                <Modal show={show} onHide={handleClose}
                    {...props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >

                    <Modal.Body>
                        <div>
                            <Container>
                                <Row>
                                    <Col sm={6}>
                                        <Card>

                                            <input id="profile-image-upload" type="file" onchange="previewFile()" />
                                            <img alt="User Pic" src="https://d30y9cdsu7xlg0.cloudfront.net/png/138926-200.png" id="profile-image1" height="200" />
                                        </Card>

                                    </Col>
                                    <Col sm={6}>
                                        <Row>
                                            <Col sm={12}>
                                                <Card>
                                                    <input id="profile-image-upload" type="file" onchange="previewFile()" />
                                                    <img alt="User Pic" src="https://d30y9cdsu7xlg0.cloudfront.net/png/138926-200.png" id="profile-image1" height="85" />
                                                </Card>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm={12}>
                                                <Card>
                                                    <input id="profile-image-upload" type="file" onchange="previewFile()" />
                                                    <img alt="User Pic" src="https://d30y9cdsu7xlg0.cloudfront.net/png/138926-200.png" id="profile-image1" height="85" />
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row className='mt-3'>
                                    <Col sm={4}>
                                        <Card>

                                            <input id="profile-image-upload" type="file" onchange="previewFile()" />
                                            <img alt="User Pic" src="https://d30y9cdsu7xlg0.cloudfront.net/png/138926-200.png" id="profile-image1" height="200" />
                                        </Card>

                                    </Col>
                                    <Col sm={4}>
                                        <Card>

                                            <input id="profile-image-upload" type="file" onchange="previewFile()" />
                                            <img alt="User Pic" src="https://d30y9cdsu7xlg0.cloudfront.net/png/138926-200.png" id="profile-image1" height="200" />
                                        </Card>

                                    </Col><Col sm={4}>
                                        <Card>

                                            <input id="profile-image-upload" type="file" onchange="previewFile()" />
                                            <img alt="User Pic" src="https://d30y9cdsu7xlg0.cloudfront.net/png/138926-200.png" id="profile-image1" height="200" />
                                        </Card>

                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div className="input-group mt-2">
                                            <textarea className="form-control" aria-label="With textarea"></textarea>
                                            <span className="input-group-text">With textarea</span>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </Modal.Body>

                </Modal>
            </Container>



        </>
    );
};

export default Freelancerdashboard;