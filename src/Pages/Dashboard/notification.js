import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import '../../asset/css/dashboard.css'
import Sidenav from './layout/Sidenav';
// import test2 from "../../asset/image/test2.png";
import Topnav from './layout/topnav';
import bookbullb from '../../asset/image/bookbulb.png'
import clientBoard from '../../Model/clientdash';
import { helper } from '../../lib/helper';
import { Link } from 'react-router-dom';
import '../../asset/css/dashboard.css'
import Phoneviewfooter from '../../Layout/Phoneviewfooter';
import Desktoploginfooter from '../unguarded_page/Desktoploginfooter';
// import Topnavbar from '../freelancerdashboard/layout/topnavbar';

function Notification() {
    const [allnotifi, setallNotifi] = useState([]);
    const [activeTab, setActiveTab] = useState("Tab1");
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(true);
    const handleClick = (tab) => {
        setActiveTab(tab);
    };


    const fetchData = async () => {
        const userProfileId = localStorage.getItem("UserID");
        clientBoard.allNotifi({ userProfileId }).then((response) => {
            // localStorage.setItem('delid' ,response.data[0]['notificationID']);
            console.log(response.data)
            setallNotifi(response?.data);
            if (response?.data?.isRead === true)
                return <>

                </>

        }).catch((error) => {
            console.log("error => ", error)
        })
    }
    const onDelete = (id) => {
        helper.sweetalert.confirm('Are you sure?', "You won't be able to revert this!", "warning", true).then((result) => {
            if (result.isConfirmed) {
                const userProfileId = localStorage.getItem("UserID");
                console.log(userProfileId)
                clientBoard.deleteNotice({ userProfileId }).then((res) => {
                    console.log(res.data)
                    helper.sweetalert.toast("Deleted", 'All Notification has been delete Successfuly', 'success')
                    fetchData();
                })

            }
        }).catch((error) => {
            console.log("error => ", error)
        })
    }
    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>
            <Container fluid className='dashboard-conatiner-top' >
                <Row>
                    <Col sm={1} className='d-none d-sm-block'>
                        <Sidenav activekey="notification" />
                    </Col>
                    <Col sm={8} xs={12} style={{ padding: '0px' }} className='dashboard-conatiner-top-row '>
                        <Container className='square border border-bottom-0'>
                            <Topnav activeLink="Notifications" />
                            <Row className=''>
                                <Col sm={8}>
                                    <div className="tabs-container">
                                        <Container>
                                            <Row className='mt-3 mb-4'>
                                                <Col className=''>
                                                    <Link to='/User/Notifications'>

                                                        <button className='notifi-unread-button d-none d-sm-block' style={{ marginLeft: '22px', fontSize: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: '10px', paddingRight: '10px' }}>
                                                            <svg style={{ color: 'grey', paddingRight: '4px' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-dots" viewBox="0 0 16 16">
                                                                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                                                <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                                            </svg>
                                                            <span style={{ fontWeight: 600 }}>Unread</span>
                                                        </button>

                                                        <button className='notifi-unread-button d-block d-sm-none' style={{ marginTop: '70px', marginLeft: '22px', fontSize: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: '10px', paddingRight: '10px' }}>
                                                            <svg style={{ color: 'grey', paddingRight: '4px' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-dots" viewBox="0 0 16 16">
                                                                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                                                <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                                            </svg>
                                                            <span style={{ fontWeight: 600 }}>Unread</span>
                                                        </button>
                                                    </Link>
                                                </Col>
                                                <Col className=''>

                                                    <button className='notifi-delete-button d-none d-sm-block' style={{ marginTop: '12vh', marginRight: '22px', fontSize: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: '10px', paddingRight: '10px' }} onClick={onDelete} >
                                                        <svg style={{ color: 'grey', paddingRight: '4px' }} xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                                                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1    .5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                                                        </svg>
                                                        <span style={{ fontWeight: 600 }} >Delete</span>
                                                    </button>


                                                    <button className='notifi-delete-button d-block d-sm-none' style={{ marginTop: '70px', marginRight: '22px', fontSize: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingLeft: '10px', paddingRight: '10px' }} onClick={onDelete} >
                                                        <svg style={{ color: 'grey', paddingRight: '4px' }} xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                                                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1    .5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                                                        </svg>
                                                        <span style={{ fontWeight: 600 }} >Delete</span>
                                                    </button>

                                                </Col>
                                            </Row>
                                        </Container>
                                        <div className="tab-content">
                                            {activeTab === "Tab1" && <>
                                                <div className='m-2 '>
                                                    {allnotifi && allnotifi?.map((pdata) =>
                                                        <>
                                                            <Card style={{ backgroundColor: pdata.isRead ? 'white' : ' #efefef', border: 'none' }} >
                                                                <div>

                                                                    <p className='m-2'>
                                                                        <img src={`http://.wiraa.com/${pdata?.profilePic}`} alt="" height={40} width={40} style={{ borderRadius: "8px" }} className="m-2" /> <span style={{ fontSize: '20px' }}><b> {pdata?.FirstName}</b> </span> <span style={{ fontSize: '18px' }}>{pdata?.Comments} </span>  <span className='small text-disable m-2'><span style={{ color: 'grey', fontSize: '16px' }}>2 h  </span>   </span>
                                                                    </p>
                                                                </div>
                                                            </Card>
                                                            <hr style={{ color: 'lightgrey' }} />
                                                        </>

                                                    )}

                                                </div></>}


                                        </div>
                                    </div>
                                </Col>




                                <Col sm={4} className='p-2' >
                                    <div className='last-left-span' style={{ backgroundColor: '#f5f5f5', width: "-webkit-fill-available" }} >
                                        <div className=''>

                                            <center><img style={{ height: '80px', width: '80px' }} src={bookbullb} alt="" className='switchaccount-img' />
                                                <h5 style={{ fontSize: '25px' }} className='switch-text'><b>Advance <br /> Freelancing <br /> Course</b></h5>
                                                <p style={{ fontSize: '19px', color: 'grey' }}>Polish your skills and expand<br />your knowledge base</p>

                                                <Link to="/Module">
                                                    <button style={{ padding: '8px', backgroundColor: 'black', color: 'white', borderRadius: '8px', border: 'none', marginBottom: '100px', paddingLeft: '50px', paddingRight: '50px' }} className="mt-4"><b> Learn </b></button>
                                                </Link>
                                            </center>

                                        </div>
                                    </div>


                                    <Desktoploginfooter />


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

export default Notification;