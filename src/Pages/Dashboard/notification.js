import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import '../../asset/css/dashboard.css'
import Sidenav from './layout/Sidenav';
import test2 from "../../asset/image/test2.png";
import Modal from 'react-bootstrap/Modal';
import Topnav from './layout/topnav';
import bookbulb from '../../asset/image/bookbulb.png'
import clientBoard from '../../Model/clientdash';
import { helper } from '../../lib/helper';


function Notification() {
    const [allnotifi, setallNotifi] = useState([]);


    const [activeTab, setActiveTab] = useState("Tab1");
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(true);

    const handleClick = (tab) => {
        setActiveTab(tab);
    };
    const Unread = async () => {
        const userProfileId = localStorage.getItem("UserID");
        clientBoard.Unreadnotice({userProfileId}).then((response) => {
            // localStorage.setItem('delid' ,response.data[0]['notificationID']);
            console.log(response.data)
            setallNotifi(response.data);
        }).catch((error) => {
            console.log("error => ", error)
        })
    }
    const Read = async (notificationId ) => {

        const userProfileId = localStorage.getItem("UserID");
      
        clientBoard.Readnotice({userProfileId ,notificationId}).then((response) => {
            // localStorage.setItem('delid' ,response.data[0]['notificationID']);
            console.log(response.data)
           alert("Notification Read Successfully")
        }).catch((error) => {
            console.log("error => ", error)
        })
    }
    const fetchData = async () => {
        const userProfileId = localStorage.getItem("UserID");
        clientBoard.allNotifi({userProfileId}).then((response) => {
            // localStorage.setItem('delid' ,response.data[0]['notificationID']);
            console.log(response.data)
            setallNotifi(response.data);
            if(response.data.isRead === true)
            return<>
            
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
                clientBoard.deleteNotice({userProfileId}).then((res) => {
                    console.log(res.data)
                    helper.sweetalert.toast("Deleted", 'All Notification has been delete Successfuly', 'success')
                    fetchData();
                })

            }
        })
    }
   useEffect(() => {
    fetchData();
   }, [])
    
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
                                                        className={`tab text-center ${activeTab === "Tab2" ? "active" : ""}`}
                                                        onClick={() => handleClick("Tab2")}
                                                    >
                                                        <button className='notifi-unread-button' onClick={Unread}> <ion-icon name="mail-unread-outline"></ion-icon>Unread</button>
                                                    </div>
                                                </Col>
                                                <Col className=''>
                                                    <div
                                                        className={`tab text-center ${activeTab === "Tab3" ? "active" : ""}`}
                                                        onClick={() => handleClick("Tab3")}
                                                    >
                                                        <button className='notifi-delete-button' onClick={onDelete} ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                                                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1    .5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                                                        </svg>Delete</button>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Container>
                                        <div className="tab-content">
                                            {activeTab === "Tab1" && <>
                                                <div className='m-3'>
                                                    {allnotifi && allnotifi.map((pdata) =>
                                                        <Card style={{ backgroundColor: pdata.isRead ? 'white' : ' #efefef' }} className='m-2'>
                                                            <div>

                                                            <p className='m-2'>
                                                                    <img src={`http://.wiraa.com/${pdata.profilePic}`} alt="" height={40} width={40} style={{ borderRadius: "8px" }} className="m-2" /> <span style={{ fontSize: '20px' }}><b> {pdata.FirstName}</b> </span> <span style={{ fontSize: '18px' }}>{pdata.Comments} </span>  <span className='small text-disable m-2'><span style={{ color: 'grey', fontSize: '16px' }}>2 h  </span>   </span>
                                                                </p>
                                                                </div>
                                                        </Card>

                                                    )}

                                                </div></>}
                                            {activeTab === "Tab2" && <>
                                                <div className='m-3'>
                                                {allnotifi && allnotifi.map((pdata) =>
                                                        <Card style={{ cursor:'pointer',backgroundColor: pdata.isRead ? '#efefef' : 'red',}} className='m-2'  onClick={() => {Read(pdata.NotificationID) }}>
                                                            <div>

                                                                <p className='m-2'> 
                                                                    <img src={`http://demo.wiraa.com/${pdata.profilePic}`} alt="" height={40} width={40} style={{ borderRadius: "8px" }} className="m-2" />{pdata.Comments}<span className='small text-disable m-2'> 2h</span> </p>
                                                            
                                                            </div>
                                                        </Card>

                                                    )}

                                                </div></>}
                                            {activeTab === "Tab3" && <>
                                                <div className='m-3'>
                                                {allnotifi && allnotifi.map((pdata) =>
                                                        <Card style={{ backgroundColor: "#efefef" }} className='m-2'>
                                                            <div>

                                                                <p className='m-2'> 
                                                                    <img src={`http://demo.wiraa.com/${pdata.profilePic}`} alt="" height={40} width={40} style={{ borderRadius: "8px" }} className="m-2" />{pdata.Comments}<span className='small text-disable m-2'> 2h</span> </p>
                                                            
                                                            </div>
                                                        </Card>

                                                    )}
                                                </div></>}
                                        </div>
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

export default Notification;