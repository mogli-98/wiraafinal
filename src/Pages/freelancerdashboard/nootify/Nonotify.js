import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import '../../../asset/css/dashboard.css'
import Sidenavbar from '../../freelancerdashboard/layout/Sidenavbar';
// import Topnav from '../layout/topnav';
import bookbullb from '../../../asset/image/bookbulb.png'
import nonotifi from '../../../asset/image/nonotifi.png'
import { Link } from 'react-router-dom';
import Phoneviewfooter from '../../../Layout/Phoneviewfooter';
import Desktoploginfooter from '../../unguarded_page/Desktoploginfooter';
import Topnavbar from '../../freelancerdashboard/layout/topnavbar';
function Messages() {

    return (
        <>
            <Container fluid className='dashboard-conatiner-top' >
                <Row>
                    <Col sm={1} className='d-none d-sm-block'>
                        <Sidenavbar  activekey="notification" />
                    </Col>
                    <Col sm={8} xs={12} style={{padding:'0px'}} className='dashboard-conatiner-top-row '>
                        <Container className='square border border-bottom-0'>
                            <Topnavbar activeLink="Notification" />
                            <Row className=''>
                                <Col sm={8}>
                                    <div className="tabs-container">
                                        <Container>
                                            <Row  className=' mt-4 mb-4'>
                                                <Col className=''>
                                                    
                                                    <Link to='/Users/Notificationss '>
                                                        <button className='notifi-unread-button' style={{ marginLeft: '22px', fontSize: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: '10px', paddingRight: '10px' }}>
                                                            <svg style={{ color: 'grey', paddingRight: '4px' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-dots" viewBox="0 0 16 16">
                                                                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                                                <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                                            </svg>
                                                            <span style={{ fontWeight: 600 }}>Unread</span></button>
                                                    </Link>
                                                </Col>
                                                <Col className=''>
                                                    <div >
                                                       

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
                              

                                <Col  sm={4} className='p-2' >
                                    <div className='last-left-span' style={{ backgroundColor: '#f5f5f5', width: "-webkit-fill-available" }} >
                                        <div className=''>
                                            <center><img style={{ height: '80px', width: '80px' }} src={bookbullb} alt="" className='switchaccount-img' />
                                                <h5 style={{ fontSize: '25px' }} className='switch-text'><b>Advance <br /> Freelancing <br /> Course</b></h5>
                                                <p style={{ fontSize: '19px', color: 'grey' }}>Polish your skills and expand<br />your knowledge base</p>


                                                <button style={{ padding: '8px', backgroundColor: 'black', color: 'white', borderRadius: '8px', border: 'none', marginBottom: '100px', paddingLeft: '50px', paddingRight: '50px' }} className="mt-4"><b> Learn </b></button>
                                            </center>

                                        </div>
                                    </div>

                                    
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

export default Messages;