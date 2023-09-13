import React from 'react';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import '../../../Aseset/css/dashboard.css'
import Sidenav from '../layout/Sidenav';
import test2 from "../../../Aseset/image/test2.png";
import Modal from 'react-bootstrap/Modal';
import Topnav from '../layout/topnav';
import bookbulb from '../../../Aseset/image/bookbulb.png'
import nonotifi from '../../../Aseset/image/nonotifi.png'
function Messages() {
    
    return (
        <>
            <Container fluid className='dashboard-conatiner-top' >
                <Row>
                    <Col sm={1} xs={2} className=''>
                        <Sidenav />
                    </Col>
                    <Col sm={8} xs={10} className='dashboard-conatiner-top-row '>
                        <Container className='square border border-bottom-0'>
                            <Topnav />
                            <Row className=''>
                                <Col sm={8}>
                                    <div className="tabs-container">
                                        <Container>
                                            <Row className='mt-3 mb-4'>
                                                <Col className=''>
                                                    <div
                                                       
                                                    >
                                                        <button className='notifi-unread-button'> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
</svg>Unread</button>
                                                    </div>
                                                </Col>
                                                <Col className=''>
                                                    <div
                                                      
                                                    >
                                                        <button className='notifi-delete-button'  ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                                                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1    .5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                                                        </svg>Delete</button>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                <img src={nonotifi} alt="" 
                                                style={{position:"relative",
                                                top:'15vh',
                                                left:'16vw'}} />
                                                <h4 className='text-center' style={{paddingTop:'18vh',color:'#008080'}}>No New Notifications</h4>
                                                
                                                </Col>
                                            </Row>
                                        </Container>
                                        
                                    </div>
                                </Col>
                                <Col md={4} className=" square border-start" style={{ backgroundColor: "#efefef", height: '430px', borderBottomRightRadius: "30px", borderBottomLeftRadius: "30px" }}>
                                    <div className='' style={{ backgroundColor: "#efefef", width: "-webkit-fill-available", height: "20px" }}>
                                        <center>
                                            <img src={bookbulb} alt="" className='mt-5' />
                                            <h4 style={{ color: "#008080", fontFamily: "Helvetica-Bold" }} className="mt-5">Advance</h4>
                                            <h4 style={{ color: "#008080", fontFamily: "Helvetica-Bold" }}>Freelancing</h4>
                                            <h4 style={{ color: "#008080", fontFamily: "Helvetica-Bold" }}>Course</h4>
                                            <span>Polish your skills and expand</span>
                                            <span>your knowledge base</span>
                                            <br />
                                            <button className="navbar-button login mb-4 mt-4"><b> Learn </b></button>
                                        </center>
                                    </div>
                                </Col>
                                <Col sm={1}>
                                </Col>
                            </Row>
                        </Container>

                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Messages;