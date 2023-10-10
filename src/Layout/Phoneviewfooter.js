import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Profile from '../asset/image/test2.png';

import { CDBSidebar, CDBSidebarContent, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem } from 'cdbreact';
import { useState } from 'react';
import { NavLink, OverlayTrigger, Popover } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Wiraalogo from '../asset/image/Wiraalogo.png';





export default function Phoneviewfooter() {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>

            <Card className='d-block d-sm-none' style={{ padding:'10px',border: 'none', marginTop: '10px', boxShadow: '2px 4px 4px #9E9E9E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                <Container>

                    <Row>



                        <Col xs={3}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
                            </svg>

                        </Col>

                        <Col xs={3}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                            </svg>

                        </Col>

                        <Col xs={3}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                            </svg>

                        </Col>

                        <Col xs={3}>
                            <img onClick={handleShow} style={{ width: '30px', height: '30px', borderRadius: '50%' }} src={Profile} alt="PROFILE" />

                        </Col>


                    </Row>

                </Container>

            </Card>




            <Offcanvas show={show} style={{ width: '70%' }} onHide={handleClose}>
                <Offcanvas.Header closeButton>

                    <NavLink exact to="/" activeClassName="active">
                        <img src={Wiraalogo} alt="LOGO" width={120} style={{ marginTop: "5px" }} />
                    </NavLink>
                </Offcanvas.Header>
                <Offcanvas.Body>




                    <div style={{ display: 'flex', overflow: 'scroll initial' }}>




                        <CDBSidebar textColor="#fff" backgroundColor="#333">


                            <CDBSidebarContent className="sidebar-content">
                                <CDBSidebarMenu>

                                    <CDBSidebarMenuItem className="text-dark ">
                                        {/* <ion-icon name="home-outline"></ion-icon> */}

                                        <img style={{ height: '60px', width: '60px', marginLeft: '60px', borderRadius: '50%' }} src={Profile} alt="Profile" />


                                        <h4 className='mt-2 mb-4'>Something pvt.ltd.</h4>



                                    </CDBSidebarMenuItem>

                                    <CDBSidebarMenuItem className="text-dark ">


                                        <Card style={{ padding: '6px', marginTop: '70px',border:'none',width:'90%',boxShadow:'4px 4px 4px 4px lightgrey '}}>
                                            <center>
                                                <h6 >Switch Account</h6>
                                                <h6 style={{ fontWeight: 600, color: '#008080' }}>Professional Dashboard</h6>
                                            </center>

                                        </Card>

                                    </CDBSidebarMenuItem>



                                    <NavLink exact to="/user/dashboard"
                                        activeClassName="active"
                                    >
                                        <CDBSidebarMenuItem className="text-dark mt-5 "> <ion-icon name="home-outline"></ion-icon><h4 className='chh'>Home</h4></CDBSidebarMenuItem>
                                    </NavLink>
                                    <NavLink exact href="/Order" activeClassName="active" >
                                        <CDBSidebarMenuItem className="text-dark "> <ion-icon name="paper-plane-outline"></ion-icon><h4 className='chh'>Orders</h4></CDBSidebarMenuItem>
                                    </NavLink>

                                    <NavLink exact href="/Message" >
                                        <CDBSidebarMenuItem className="text-dark"><ion-icon name="mail-outline"></ion-icon><h4 className='chh'>Messages</h4></CDBSidebarMenuItem>
                                    </NavLink>
                                    <NavLink exact href="/User/Notification" activeClassName="active">
                                        <CDBSidebarMenuItem className="text-dark"><ion-icon name="notifications-outline"></ion-icon><h4 className='chh'>Notifications</h4></CDBSidebarMenuItem>
                                    </NavLink>
                                    <NavLink exact href="/Profile" >
                                        <CDBSidebarMenuItem className="text-dark"><ion-icon name="person-outline"></ion-icon><h4 className='chh'>Profile</h4></CDBSidebarMenuItem>
                                    </NavLink>
                                    <NavLink exact href="/user/Setting" activeClassName="active">
                                        <CDBSidebarMenuItem className="text-dark"><ion-icon name="settings-outline"></ion-icon><h4 className='chh'>Settings</h4></CDBSidebarMenuItem>
                                    </NavLink>
                                    {/* {['top'].map((placement) => (
                                        <OverlayTrigger
                                            trigger="click"
                                            key={placement}
                                            placement={placement}
                                            overlay={
                                                <Popover id={`popover-positioned-${placement}`}>

                                                    <Popover.Body style={{ width: "-webkit-fill-available" }}>


                                                        <div className=' chhh'>
                                                            <ion-icon name="book-outline"></ion-icon><h4 className='chh'>Learn</h4>
                                                            <ion-icon name="headset-outline"></ion-icon><h4 className='chh'>Support</h4>
                                                            <ion-icon name="document-text-outline"></ion-icon><h4 className='chh'>Terms</h4>
                                                            <ion-icon name="document-text-outline"></ion-icon><h4 className='chh'>Policy</h4>
                                                            <ion-icon name="reader-outline"></ion-icon><h4 className='chh'>Blogs</h4>
                                                            <ion-icon name="log-out-outline"></ion-icon><h4 className='chh'>Logout</h4>
                                                        </div>

                                                    </Popover.Body>
                                                </Popover>
                                            }
                                        >
                                            <NavLink to="#/"  activeClassName="active">
                                                <CDBSidebarMenuItem className="text-dark"><ion-icon name="ellipsis-horizontal-circle-outline"></ion-icon><h4 className='chh'>More</h4></CDBSidebarMenuItem>
                                            </NavLink>
                                        </OverlayTrigger>
                                    ))} */}

                                </CDBSidebarMenu>
                            </CDBSidebarContent>


                        </CDBSidebar>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>


        </>
    )
}





