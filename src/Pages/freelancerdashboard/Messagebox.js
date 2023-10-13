import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import '../../asset/css/dashboard.css'
import Sidenav from "../freelancerdashboard/layout/Sidenavbar";
import Topnavbar from './layout/topnavbar'; 

import Phoneviewfooter from '../../Layout/Phoneviewfooter';
import { Select } from '@mui/material';
import { IoMailOutline } from 'react-icons/io5';

function Messagebox(props) {
    const [activeTab, setActiveTab] = useState("Tab1");

    const handleClick = (tab) => {
        setActiveTab(tab);
    };


    return (
        <>
            <Container fluid className='dashboard-conatiner-top' >
                <Row>
                    <Col sm={1} className='d-none d-sm-block'>
                        <Sidenav />
                    </Col>
                    <Col style={{padding:'0px'}} sm={8} xs={12} className='dashboard-conatiner-top-row '>
                        <Container className='square border border-bottom-0'>
                            <Topnavbar activeLink="Messages" />
                            <Row >
                                <Col sm={4} className="square border-end">

                                    <div className="tabs-container mt-3">
                                        <Container>
                                            <Row className='mt-3 mb-3'>
                                                <Col  className='no-message'>
                                                    {/* <div style={{height:'25px',borderRadius:'10px',border:'1px solid black'}} > */}
                                                        <input
                                                         style={{height:'25px',borderRadius:'10px',border:'1px solid black',width:'100%'}}
                                                        // style={{border:'none',width:'99%',height:'24px'}}
                                                          type="text" placeholder='Search...' />
                                                        
                                                    {/* </div> */}
                                                    <center>
                                                        <h3 className='mb-4 '>Welcome to your
                                                            <br />Inbox
                                                        </h3>
                                                        <p style={{fontSize:'18px',color:'grey'}} className='mt-3 pt-3'>Post a request and start</p>
                                                        <p style={{fontSize:'18px',color:'grey'}}>conversation with professionals.</p>
                                                        <button className='message-post mt-5'>Post a request</button>
                                                    </center>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </div>
                                </Col>
                                <Col md={8} className="">
                                    <div className='mt-5  no-message-show'>
                                        <center>
                                            {/* <ion-icon name="mail-unread-outline"></ion-icon> */}
                                            <  IoMailOutline  style={{fontSize:'50px',marginTop:'40px'}}  />
                                            <h4> No New  Messages </h4>
                                        </center>
                                    </div>
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

export default Messagebox;