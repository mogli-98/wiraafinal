import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import '../../Aseset/css/dashboard.css'
import Sidenav from './layout/Sidenav';
import Topnav from './layout/topnav';

function Messaages(props) {
    const [activeTab, setActiveTab] = useState("Tab1");

    const handleClick = (tab) => {
        setActiveTab(tab);
    };


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
                            <Row >
                                <Col sm={4} className="square border-end">

                                    <div className="tabs-container mt-3">
                                        <Container>
                                            <Row className='mt-3 mb-3'>
                                                <Col className='no-message'>
                                                    <div>
                                                        <button className='order-details-requirements'><ion-icon name="mail-unread-outline"></ion-icon>Professional</button>
                                                        <button className='order-details-shortlisted'><ion-icon name="ellipse"></ion-icon>Shortlisted</button>
                                                    </div>
                                                    <center>
                                                        <h4 className='mb-5'>Welcome to your
                                                            <br />Inbox
                                                        </h4>
                                                        <p className='mt-5 pt-3'>Post a request and start</p>
                                                        <p>conversation with professionals.</p>
                                                        <button className='message-post mt-5'>Post a request</button>
                                                    </center>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </div>
                                </Col>
                                <Col md={8} className="">
                                    <div className='mt-5 pt-5 no-message-show'>
                                        <center>
                                        <ion-icon name="mail-unread-outline"></ion-icon>
                                            <h4> No New  Messaages </h4>
                                        </center>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Messaages;