import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import '../../../asset/css/dashboard.css'
import Sidenavbar from '../layout/Sidenavbar';
import Topnavbar from '../layout/topnavbar';
import bookbullb from '../../../asset/image/bookbulb.png'
import nonotifi from '../../../asset/image/nonotifi.png'
import { Link } from 'react-router-dom';
import Phoneviewfooter from '../../../Layout/Phoneviewfooter';
import Desktoploginfooter from '../../unguarded_page/Desktoploginfooter';
function Notifyuser() {

    return (
        <>
            <Container fluid className='dashboard-conatiner-top' >
                <Row>
                    <Col sm={1} className='d-none d-sm-block'>
                        <Sidenavbar  />
                    </Col>
                    <Col sm={8} xs={12} style={{padding:'0px'}} className='dashboard-conatiner-top-row '>
                        <Container className='square border border-bottom-0'>
                            <Topnavbar activeLink="Notification" />
                            <Row className=''>
                                <Col sm={8}>
                                    <div className="tabs-container">
                                        <Container>
                                            <Row style={{marginTop:'12vh'}} className=' mb-4'>
                                                <Col className=''>
                                                    {/* <div style={{ marginLeft: '10px' }}>
                                                        <button className='notifi-unread-button'> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                                                        </svg> <span style={{fontSize:'14px'}}>Unread </span>
                                                        </button>
                                                    </div> */}
                                                    <Link to='/Users/Notifications'>
                                                        <button className='notifi-unread-button' style={{ marginLeft: '22px', fontSize: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: '10px', paddingRight: '10px' }}>
                                                            <svg style={{ color: 'grey', paddingRight: '4px' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-dots" viewBox="0 0 16 16">
                                                                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                                                <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                                            </svg>
                                                            <span style={{ fontWeight: 600 }}>Unread</span></button>
                                                    </Link>
                                                </Col>
                                                <Col className=''>
                                                    <div

                                                    >
                                                        {/* <button className='notifi-delete-button'  ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                                                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1    .5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                                                        </svg>Delete</button> */}

                                                        <button style={{ marginRight: '22px', fontSize: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: '10px', paddingRight: '10px' }} className='notifi-delete-button'  >
                                                            <svg style={{ color: 'grey', paddingRight: '4px' }} xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                                                                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1    .5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                                                            </svg><span style={{ fontWeight: 600 }} >Delete</span></button>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col className='d-none d-sm-block'>
                                                    <center>
                                                        <img src={nonotifi} alt=""
                                                            style={{
                                                                position: "relative",
                                                                top: '15vh',
                                                                
                                                            }} />
                                                    </center>


                                                    <h4 className='text-center' style={{ paddingTop: '18vh', color: '#008080' }}>No New Notifications</h4>

                                                </Col>


                                                <Col className='d-block d-sm-none'>
                                                    <center>
                                                        <img src={nonotifi} alt=""
                                                            style={{
                                                                position: "relative",
                                                                top: '5vh',
                                                                
                                                            }} />
                                                    </center>


                                                    <h4 className='text-center' style={{ paddingTop: '10vh', color: '#008080' }}>No New Notifications</h4>

                                                </Col>
                                            </Row>
                                        </Container>

                                    </div>
                                </Col>
                                {/* <Col md={4} className=" square border-start" style={{ backgroundColor: "#efefef", height: '430px', borderBottomRightRadius: "30px", borderBottomLeftRadius: "30px" }}>
                                     <div className='' style={{ backgroundColor: "#efefef", width: "-webkit-fill-available", height: "20px" }}>
                                        <center>
                                            <img src={bookbulb} alt="" className='mt-5' style={{ height: '70px' }} />
                                            <h4 style={{ color: "#008080", fontFamily: "Helvetica-Bold" }} className="mt-5">Advance</h4>
                                            <h4 style={{ color: "#008080", fontFamily: "Helvetica-Bold" }}>Freelancing</h4>
                                            <h4 style={{ color: "#008080", fontFamily: "Helvetica-Bold" }}>Course</h4>
                                            <span>Polish your skills and expand</span>
                                            <span>your knowledge base</span>
                                            <br />
                                            <button className="navbar-button login mb-4 mt-4"><b> Learn </b></button>
                                        </center>
                                    </div> 
                                </Col> */}


                                <Col style={{marginTop:'12vh'}} sm={4} className='p-2' >
                                    <div className='last-left-span' style={{ backgroundColor: '#f5f5f5', width: "-webkit-fill-available" }} >
                                        <div className=''>
                                            <center><img style={{ height: '80px', width: '80px' }} src={bookbullb} alt="" className='switchaccount-img' />
                                                <h5 style={{ fontSize: '25px' }} className='switch-text'><b>Advance <br /> Freelancing <br /> Course</b></h5>
                                                <p style={{ fontSize: '19px', color: 'grey' }}>Polish your skills and expand<br />your knowledge base</p>


                                                <button style={{ padding: '8px', backgroundColor: 'black', color: 'white', borderRadius: '8px', border: 'none', marginBottom: '100px', paddingLeft: '50px', paddingRight: '50px' }} className="mt-4"><b> Learn </b></button>
                                            </center>

                                        </div>
                                    </div>

                                    {/* <div  style={{ color: 'grey', fontSize: '16px' }} className='mt-3 p-2  d-none d-sm-block'>
                                        <Link to='/About Us'  >                                             <span style={{ paddingRight: '10px', color: 'grey' }}>                                                 About </span>                                         </Link>                                         <Link to='/Career'>                                             <span style={{ paddingRight: '10px', color: 'grey' }}>Career</span>                                         </Link>
                                        <Link to='/Termsandcondition'>                                             <span style={{ color: 'grey' }}>Term of services</span>                                         </Link>
                                        <br />
                                        <Link to='/ContactComponent'>                                             <span style={{ paddingRight: '20px', color: 'grey' }}>Conatct</span>                                         </Link>

                                        <span style={{ paddingRight: '20px' }}>FAQ</span>

                                        <span style={{ paddingRight: '20px' }}>Blog</span>

                                        <Link to='/PrivacyPolicy'>
                                            <span style={{ paddingRight: '10px', color: 'grey' }}>Privacy policy</span>
                                        </Link>

                                        <span> ©️ 2023 Wiraa. All Rights Reserved</span>
                                    </div> */}

                                    <Desktoploginfooter/>




                                </Col>
                                <Col sm={1}>
                                </Col>
                            </Row>
                        </Container>

                    </Col>
                </Row>
            </Container>
            <Phoneviewfooter />

        </>
    )
}

export default Notifyuser;