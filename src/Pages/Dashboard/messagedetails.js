import React, { useState } from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import '../../Aseset/css/dashboard.css'
import Sidenav from './layout/Sidenav';
import Topnav from './layout/topnav';
import test from '../../Aseset/image/test.JPG'
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
                                                </Col>
                                            </Row>

                                        </Container>
                                    </div>
                                    <Container>
                                        <Row>
                                            <Col>
                                                <Card>
                                                    <p className='m-3'><img src={test} alt="" height={30} width={30} />Chandan Innovations </p>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Col>
                                <Col md={8} className="">
                                    <div >
                                        <div>

                                            <p style={{ marginTop: "10px" }}> <img src={test} style={{ borderRadius: "30px", height: '30px', width: '30px', marginLeft: "-5px" }} alt="" /> Chandan Innovation</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div>
                                        <div class="message-blue">
                                            <p class="message-content1">This is an awesome message!</p>
                                            <div class="message-timestamp-left">SMS 13:37</div>
                                        </div>

                                        <div class="message-orange">
                                            <p class="message-content1">I agree that your message is awesome!</p>
                                            <div class="message-timestamp-right">SMS 13:37</div>
                                        </div>

                                        <div class="message-blue">
                                            <p class="message-content1">Thanks!</p>
                                            <div class="message-timestamp-left">SMS 13:37</div>
                                        </div>
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