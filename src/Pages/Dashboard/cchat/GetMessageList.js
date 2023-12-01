import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import '../../../asset/css/dashboard.css'
import Sidenav from '../layout/Sidenav';
import Topnav from '../layout/topnav';
import Phoneviewfooter from '../../../Layout/Phoneviewfooter';
import { Select } from '@mui/material';
import { IoMailOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import MessageModal from '../../../modal/Message.modal';

function MessaagesList(props) {
    const [getalluserchat, setGetalluserChat] = useState();
    const [activeTab, setActiveTab] = useState("Tab1");

    const handleClick = (tab) => {
        setActiveTab(tab);
    };
    const fetchdata = () => {
        const userId = localStorage.getItem("UserID");
        MessageModal.allchatlist({ userId }).then((response) => {
            console.log(response?.data, 'jjjjjjjjjjjjjjjjjjjj')
            setGetalluserChat(response?.data)
        }

        )
    }
    useEffect(() => {
        fetchdata()
    }, [])
    return (
        <>
            <Container fluid className='dashboard-conatiner-top' >
                <Row>
                    <Col sm={1} className='d-none d-sm-block'>
                        <Sidenav activekey="message" />
                    </Col>
                    <Col style={{ padding: '0px' }} sm={8} xs={12} className='dashboard-conatiner-top-row '>
                        <Container className='square border border-bottom-0'>
                            <Topnav activeLink="Messages" />
                            <Row >
                                <Col sm={4} className="square border-end">

                                    <div className="tabs-container mt-3">
                                        <Container>
                                            <Row className='mt-3 mb-3'>
                                                <Col className='no-message'>
                                                    {/* <div style={{height:'25px',borderRadius:'10px',backgroundColor:'ButtonHighlight',border:'1px solid black'}} > */}
                                                    <input style={{ height: '25px', borderRadius: '10px', border: '1px solid black', width: '100%', padding: '10px 10px' }} type="text" placeholder='Search' />

                                                    {/* </div> */}
                                                    <div>
                                                        {getalluserchat && getalluserchat.map((listdata) =>

                                                            <Card className='mt-2' style={{ backgroundColor: listdata.isRead ? 'white' : ' #efefef', }}>
                                                                <div className='p-2'>
                                                                    <p>{listdata.SenderFirstname} {listdata.SenderLastname}</p>
                                                                    <span className='small'><b>{listdata.Messagebody}</b></span>
                                                                </div>
                                                            </Card>
                                                        )}
                                                    </div>

                                                </Col>
                                            </Row>
                                        </Container>
                                    </div>
                                </Col>
                                <Col md={8} className="">
                                    <div className='mt-5  no-message-show'>
                                        <center>
                                            {/* <ion-icon name="mail-unread-outline"></ion-icon> */}
                                            <  IoMailOutline style={{ fontSize: '50px', marginTop: '40px' }} />
                                            <h4> Let Start Message </h4>
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

export default MessaagesList;