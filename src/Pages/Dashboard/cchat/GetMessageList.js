// import React, { useEffect, useState } from 'react';
// import { Container, Row, Col, Card, } from "react-bootstrap";
// import '../../../asset/css/dashboard.css'
// import Sidenav from '../layout/Sidenav';
// import Topnav from '../layout/topnav';
// import Phoneviewfooter from '../../../Layout/Phoneviewfooter';
// import { IoMailOutline } from 'react-icons/io5';
// import MessageModal from '../../../modal/Message.modal';
// // import sendLogo from "../../../asset/image/Cards/sendLogo.png";
// import image from "../../../asset/image/test1.png";
// import { user } from "./Join/Join";
// import socketIo from "socket.io-client";
// import "../cchat/Chat/Chat.css";
// // import sendLogo from "../../images/send.png";
// // import Message from "./Message/Message";
// import ReactScrollToBottom from "react-scroll-to-bottom";
// import moment from 'moment';
// let socket;
// const ENDPOINT = "https://wiraaback.azurewebsites.net/";
// function MessaagesList(props) {
//     const [getalluserchat, setGetalluserChat] = useState('');
//     const [activeTab, setActiveTab] = useState("Tab1");
//     const [Chatdetail, setChatdetails] = useState(null);
//     const fetchdata = () => {
//         const userId = localStorage.getItem("UserID");
//         MessageModal.allchatlist({ userId }).then((response) => {
//             console.log(response?.data, 'all chat list of  mesg ')
//             setGetalluserChat(response?.data)
//         }
//         )
//     }
//     const [selectedChat, setSelectedChat] = useState(null)
//     console.log(selectedChat, "selectedChat")
//     const getdetails = async (friendUserId) => {

//         setSelectedChat(friendUserId)
//         const userId = localStorage.getItem("UserID");

//         const senderId = friendUserId;
//         console.log(senderId, "hhhiiiiiiiioio")
//         MessageModal.getchatByID({ userId }, { senderId }).then((resp) => {
//             console.log(resp.data, 'semder data show')
//             setChatdetails(resp.data)
//         })
//             .catch((error) => {
//                 console.log("error => ", error)
//             })
//     }
//     const [id, setid] = useState("");
//     const [messages, setMessages] = useState([])



//     const send = () => {
//         const message = document.getElementById('chatInput').value;
//         const obj = {};
//         obj.userId = localStorage.getItem("UserID");
//         obj.senderUserId = selectedChat;
//         obj.message = message.trim();
//         obj.projectId = 1;
//         console.log("myMessage", obj, socket.id);
//         socket.emit("message", obj, socket.id);
//         // socket.emit('message', { message, id, obj });
//         console.log(selectedChat, 'send fata')
//         document.getElementById('chatInput').value = "";

//         getdetails(selectedChat)
//     }

//     console.log(messages);
//     useEffect(() => {
//         socket = socketIo(ENDPOINT, { transports: ['websocket'] });

//         socket.on('connect', () => {
//             // alert('Connected');
//             setid(socket.id);
//             console.log('jklnikhn')
//         })
//         console.log(socket);
//         socket.emit('joined', { user })



//         socket.on('userJoined', (data) => {
//             setMessages([...messages, data]);
//             console.log(data.user, data.message);
//         })

//         socket.on('leave', (data) => {
//             setMessages([...messages, data]);
//             console.log(data.user, data.message)
//         })

//         return () => {
//             socket.emit('disconnects');
//             socket.off();
//         }
//     }, [])

//     useEffect(() => {
//         socket.on('sendMessage', (data) => {
//             setMessages([...messages, data]);
//             console.log(data.user, data.message, data.id);
//         })
//         return () => {
//             socket.off();
//         }
//     }, [messages])
//     useEffect(() => {
//         console.log("getalluserchat", selectedChat);
//         fetchdata()
//         getdetails(selectedChat)

//     }, [selectedChat])
//     window.scrollTo(0, 9999);
//     return (
//         <>
//             <Container fluid className='dashboard-conatiner-top' >
//                 <Row>
//                     <Col sm={1} className='d-none d-sm-block'>
//                         <Sidenav activekey="message" />
//                     </Col>
//                     <Col style={{ padding: '0px' }} sm={8} xs={12} className='dashboard-conatiner-top-row '>
//                         <Container className='square border border-bottom-0'>
//                             <Topnav activeLink="Messages" />
//                             <Row >
//                                 <Col sm={4} className="square border-end">

//                                     <div className="tabs-container mt-3">
//                                         <Container>
//                                             <Row className='mt-3 mb-3'>
//                                                 <Col style={{ padding: '0px' }} className='no-message'>
//                                                     {/* <div style={{height:'25px',borderRadius:'10px',backgroundColor:'ButtonHighlight',border:'1px solid black'}} > */}
//                                                     <input style={{ height: '25px', borderRadius: '10px', border: '1px solid black', width: '100%', padding: '10px 10px' }} type="text" placeholder='Search' />

//                                                     {/* </div> */}
//                                                     <div>
//                                                         {getalluserchat && getalluserchat?.map((listdata, index) =>

//                                                             <Card className='mt-2 ' style={{ backgroundColor: listdata?.isRead ? 'white' : ' #efefef', cursor: "pointer", border: 'none', display: 'flex', flexDirection: 'row', borderRadius: '20px' }} onClick={() => { getdetails(listdata?.friendUserId) }} >
//                                                                 <img style={{ borderRadius: "20px", width: '70px', height: '70px' }} src={image} alt="img" className='order-details-img p-2' />
//                                                                 <div className='p-1'>
//                                                                     <h5 style={{ margin: '0px', padding: '0px' }}>{listdata?.Firstname} {listdata?.Lastname}</h5>

//                                                                     <div
//                                                                         style={{ height: "20px", overflow: 'hidden', textOverflow: "ellipsis" }}>
//                                                                         <span style={{ fontSize: '14px' }}>{listdata?.Messagebody}</span>
//                                                                     </div>

//                                                                 </div>
//                                                             </Card>
//                                                         )}
//                                                     </div>

//                                                 </Col>
//                                             </Row>
//                                         </Container>
//                                     </div>
//                                 </Col>
//                                 <Col md={8} className="">
//                                     {
//                                         Chatdetail !== null ? (<>
//                                             <div className='box'>
//                                                 <Card className='mt-2 p-2' style={{ borderRadius: "10px", backgroundColor: '#EFEFEF', border: 'none' }}>

//                                                     <div>
//                                                         <div style={{ justifyContent: 'start', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>

//                                                             <img style={{ borderRadius: "50px", width: '50px', height: '50px' }} src={image} alt="img" className='order-details-img p-2' />

//                                                             <h5 className='p-2' >{Chatdetail[0]?.[0]?.FirstName} {Chatdetail[0]?.[0]?.LastName}</h5>

//                                                         </div>
//                                                     </div>

//                                                 </Card>
//                                                 <hr />
//                                                 {/* <ReactScrollToBottom className="chatBox" > */}
//                                                 <div style={{ height: "60vh", overflowY: "scroll", }}>
//                                                     {
//                                                         Chatdetail[1].map((chatlistdata) =>
//                                                             chatlistdata.UserId === localStorage.getItem("UserID") ? (
//                                                                 <>
//                                                                     <Card style={{ backgroundColor: 'blue', width: '45%', border: 'none' }} className='mt-2'>
//                                                                         <span style={{ padding: '10px' }} >{chatlistdata.Messagebody} </span>
//                                                                     </Card>
//                                                                     <Card style={{ fontSize: "10px", marginRight: '10px', width: '45%', border: "none", color: 'grey' }}>    {moment(chatlistdata.CreatedDate).format('DD:MM:YYYY')}  {moment(chatlistdata.CreatedDate).format('hh:mm: A')}</Card>
//                                                                 </>
//                                                             ) : (
//                                                                 <>
//                                                                     <Card style={{ backgroundColor: 'red', width: "45%", border: 'none' }} className='mt-2 '>
//                                                                         <span style={{ float: 'right' }}> {chatlistdata.Messagebody}  </span>


//                                                                     </Card>
//                                                                     <Card style={{ fontSize: "10px", marginLeft: '10px', width: '45%', border: 'none', color: 'grey' }}>  {moment(chatlistdata.CreatedDate).format('DD:MM:YYYY')}   {moment(chatlistdata.CreatedDate).format('HH:mm A')}
//                                                                     </Card>
//                                                                 </>
//                                                             )
//                                                         )
//                                                     }
//                                                 </div>
//                                                 {/* </ReactScrollToBottom> */}
//                                                 {/* <ReactScrollToBottom className="chatBox">
//                                                     {messages.map((item, i) => <Message user={item.id === id ? '' : item.user} message={item.message} classs={item.id === id ? 'right' : 'left'} />)}
//                                                 </ReactScrollToBottom> */}

//                                                 <div className="inputBox mt-2">

//                                                     <input style={{ border: '1px solid lightgray' }} onKeyUp={(event) => event.key === 'Enter' ? send() : null} type="text" id="chatInput" />

//                                                     <button style={{ border: '1px solid lightgrey' }} onClick={send} className="sendBtn">

//                                                         {/* <img src={sendLogo} alt="Send" /> */}

//                                                     </button>

//                                                 </div>

//                                             </div>
//                                         </>) :
//                                             (<>
//                                                 <div className='mt-5  no-message-show'>
//                                                     <center>
//                                                         {/* <ion-icon name="mail-unread-outline"></ion-icon> */}
//                                                         <  IoMailOutline style={{ fontSize: '50px', marginTop: '40px' }} />
//                                                         <h4> Let Start Message </h4>
//                                                     </center>
//                                                 </div>
//                                             </>)
//                                     }

//                                 </Col>
//                             </Row>
//                         </Container>
//                     </Col>
//                 </Row>
//             </Container>
//             <Phoneviewfooter />

//         </>
//     )
// }

// export default MessaagesList;
///////////////////////////////////////////////////////////////////////////////////////////////////////////
// import React, { useEffect, useState } from 'react';
// import { Container, Row, Col, Card, } from "react-bootstrap";
// import '../../../asset/css/dashboard.css'
// import Sidenav from '../layout/Sidenav';
// import Topnav from '../layout/topnav';
// import Phoneviewfooter from '../../../Layout/Phoneviewfooter';
// import { IoMailOutline } from 'react-icons/io5';
// import MessageModal from '../../../modal/Message.modal';

// import { user } from "./Join/Join";
// import socketIo from "socket.io-client";
// import "../cchat/Chat/Chat.css";
// // import sendLogo from "../../images/send.png";
// import Message from "./Message/Message";
// import ReactScrollToBottom from "react-scroll-to-bottom";
// import moment from 'moment';
// let socket;

// const ENDPOINT = "https://wiraaback.azurewebsites.net/";
// function MessaagesList(props) {
//     const [getalluserchat, setGetalluserChat] = useState();
//     const [activeTab, setActiveTab] = useState("Tab1");
//     const [Chatdetail, setChatdetails] = useState(null);
//     const fetchdata = () => {
//         const userId = localStorage.getItem("UserID");
//         MessageModal.allchatlist({ userId }).then((response) => {
//             console.log(response?.data, 'jjjjjjjjjjjjjjjjjjjj')
//             setGetalluserChat(response?.data)
//         }

//         )
//     }

//     const [saurabh, setSaurabh] = useState('')
//     const Getdetails = (saurabhsingh) => {
//         const userId = localStorage.getItem("UserID");
//         const senderId = saurabhsingh;
//         console.log(saurabh, '111111')
//         MessageModal.getchatByID({ userId }, { senderId }).then((resp) => {
//             console.log(resp.data, 'jjjjj')
//             setChatdetails(resp.data)
//         })
//             .catch((error) => {
//                 console.log("error => ", error)
//             })
//     }
//     const [id, setid] = useState("");
//     const [messages, setMessages] = useState([])



//     const send = () => {
//         const message = document.getElementById('chatInput').value;
//         const obj = {};
//         obj.userId = localStorage.getItem("UserID");
//         obj.senderUserId = saurabh;
//         obj.message = message.trim();
//         obj.projectId = 1;
//         console.log("myMessage", obj, socket.id);
//         socket.emit("message", obj, socket.id);
//         // socket.emit('message', { message, id, obj });

//         document.getElementById('chatInput').value = "";
//         console.log("jkjjj", saurabh)

//         Getdetails(saurabh)
//     }

//     console.log(messages);
//     useEffect(() => {
//         socket = socketIo(ENDPOINT, { transports: ['websocket'] });

//         socket.on('connect', () => {
//             // alert('Connected');
//             setid(socket.id);
//             console.log('jklnikhn')
//         })
//         console.log(socket);
//         socket.emit('joined', { user })



//         socket.on('userJoined', (data) => {
//             setMessages([...messages, data]);
//             console.log(data.user, data.message);
//         })

//         socket.on('leave', (data) => {
//             setMessages([...messages, data]);
//             console.log(data.user, data.message)
//         })

//         return () => {
//             socket.emit('disconnects');
//             socket.off();
//         }
//     }, [])

//     useEffect(() => {
//         socket.on('sendMessage', (data) => {
//             setMessages([...messages, data]);
//             console.log(data.user, data.message, data.id);
//         })
//         return () => {
//             socket.off();
//         }
//     }, [messages])
//     useEffect(() => {
//         fetchdata()
//         Getdetails(saurabh)

//     }, [saurabh,])
//     window.scrollTo(0, 9999);
//     return (
//         <>
//             <Container fluid className='dashboard-conatiner-top' >
//                 <Row>
//                     <Col sm={1} className='d-none d-sm-block'>
//                         <Sidenav activekey="message" />
//                     </Col>
//                     <Col style={{ padding: '0px' }} sm={8} xs={12} className='dashboard-conatiner-top-row '>
//                         <Container className='square border border-bottom-0'>
//                             <Topnav activeLink="Messages" />
//                             <Row >
//                                 <Col sm={4} className="square border-end">

//                                     <div className="tabs-container mt-3">
//                                         <Container>
//                                             <Row className='mt-3 mb-3'>
//                                                 <Col className='no-message'>
//                                                     {/* <div style={{height:'25px',borderRadius:'10px',backgroundColor:'ButtonHighlight',border:'1px solid black'}} > */}
//                                                     <input style={{ height: '25px', borderRadius: '10px', border: '1px solid black', width: '100%', padding: '10px 10px' }} type="text" placeholder='Search' />

//                                                     {/* </div> */}
//                                                     <div>
//                                                         {getalluserchat && getalluserchat?.map((listdata) =>

//                                                             <Card className='mt-2' style={{ backgroundColor: listdata?.isRead ? 'white' : ' #efefef', cursor: "pointer" }} onClick={() => { setSaurabh(listdata.SenderUserId) }}>
//                                                                 <div className='p-2'>
//                                                                     <p>{listdata?.Firstname} {listdata?.Lastname} ----user id{listdata?.UserId}</p>
//                                                                     <span className='small'><b>{listdata?.Messagebody}--- senderid{listdata?.SenderUserId} </b></span>
//                                                                 </div>
//                                                             </Card>
//                                                         )}
//                                                     </div>

//                                                 </Col>
//                                             </Row>
//                                         </Container>
//                                     </div>
//                                 </Col>
//                                 <Col md={8} className="">
//                                     {
//                                         Chatdetail !== null ? (<>
//                                             <div className='box'>
//                                                 <Card className='mt-2 p-2' style={{ borderRadius: "10px", backgroundColor: '#EFEFEF' }}>
//                                                     <div>
//                                                         <div style={{ justifyContent: 'start', display: 'flex', padding: '10px', }}>

//                                                             <h6>
//                                                                 {/* <img style={{ borderRadius: "50px", width: '50px', height: '50px' }} src={image} alt="img" className='order-details-img m-3' /> */}
//                                                                 <b>{Chatdetail[0]?.[0]?.FirstName} {Chatdetail[0]?.[0]?.LastName}</b></h6>

//                                                         </div>

//                                                     </div>
//                                                 </Card>
//                                                 <hr />
//                                                 <ReactScrollToBottom className="chatBox" >
//                                                     <div style={{ height: "50vh", overflowY: "scroll", }}>
//                                                         {
//                                                             Chatdetail[1].map((chatlistdata) =>
//                                                                 chatlistdata.UserId === localStorage.getItem("UserID") ? (
//                                                                     <><Card style={{ backgroundColor: 'lightcyan' }} className='mt-2'>
//                                                                         <span >{chatlistdata.Messagebody}     </span>
//                                                                         <p style={{ fontSize: "12px" }}>      {moment(chatlistdata.CreatedDate).format('hh:mm: A')}</p>
//                                                                     </Card>
//                                                                     </>
//                                                                 ) : (
//                                                                     <>
//                                                                         <Card style={{ backgroundColor: 'blue' }} className='mt-2'>
//                                                                             <span style={{ float: 'right', color: 'red' }}>{chatlistdata.Messagebody}  </span>

//                                                                             <p style={{ fontSize: "12px" }}>      {moment(chatlistdata.CreatedDate).format('HH:mm:ss A')}
//                                                                             </p>
//                                                                         </Card>
//                                                                     </>
//                                                                 )
//                                                             )
//                                                         }
//                                                     </div>
//                                                 </ReactScrollToBottom>
//                                                 {/* <ReactScrollToBottom className="chatBox">
//                                                     {messages.map((item, i) => <Message user={item.id === id ? '' : item.user} message={item.message} classs={item.id === id ? 'right' : 'left'} />)}
//                                                 </ReactScrollToBottom> */}
//                                                 <div className="inputBox">
//                                                     <input onKeyUp={(event) => event.key === 'Enter' ? send() : null} type="text" id="chatInput" />
//                                                     <button onClick={send} className="sendBtn">
//                                                         {/* <img src={sendLogo} alt="Send" /> */}
//                                                     </button>
//                                                 </div>
//                                             </div>
//                                         </>) :
//                                             (<>
//                                                 <div className='mt-5  no-message-show'>
//                                                     <center>
//                                                         {/* <ion-icon name="mail-unread-outline"></ion-icon> */}
//                                                         <  IoMailOutline style={{ fontSize: '50px', marginTop: '40px' }} />
//                                                         <h4> Let Start Message </h4>
//                                                     </center>
//                                                 </div>
//                                             </>)
//                                     }

//                                 </Col>
//                             </Row>
//                         </Container>
//                     </Col>
//                 </Row>
//             </Container>
//             <Phoneviewfooter />

//         </>
//     )
// }

// export default MessaagesList;


import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, } from "react-bootstrap";
import '../../../asset/css/dashboard.css'
import Sidenav from '../layout/Sidenav';
import Topnav from '../layout/topnav';
import Phoneviewfooter from '../../../Layout/Phoneviewfooter';
import { IoMailOutline } from 'react-icons/io5';
import MessageModal from '../../../modal/Message.modal';

import { user } from "./Join/Join";
import socketIo from "socket.io-client";
import "../cchat/Chat/Chat.css";
// import sendLogo from "../../images/send.png";
import Message from "./Message/Message";
import ReactScrollToBottom from "react-scroll-to-bottom";
import moment from 'moment';
let socket;

const ENDPOINT = "https://wiraaback.azurewebsites.net/";
function MessaagesList(props) {
    const [getalluserchat, setGetalluserChat] = useState();
    const [activeTab, setActiveTab] = useState("Tab1");
    const [Chatdetail, setChatdetails] = useState(null);
    const fetchdata = () => {
        const userId = localStorage.getItem("UserID");
        MessageModal.allchatlist({ userId }).then((response) => {
            console.log(response?.data, 'jjjjjjjjjjjjjjjjjjjj')
            setGetalluserChat(response?.data)
        }

        )
    }

    const [saurabh, setSaurabh] = useState(null)
    const Getdetails = () => {
        const userId = localStorage.getItem("UserID");
        const senderId = saurabh;
        MessageModal.getchatByID({ userId }, { senderId }).then((resp) => {
            console.log(resp.data, 'jjjjj')
            setChatdetails(resp.data)
        })
            .catch((error) => {
                console.log("error => ", error)
            })
    }
    const [id, setid] = useState("");
    const [messages, setMessages] = useState([])



    const send = () => {
        const message = document.getElementById('chatInput').value;
        const obj = {};
        obj.userId = localStorage.getItem("UserID");
        obj.senderUserId = saurabh;
        obj.message = message.trim();
        obj.projectId = 1;
        obj.file =
            console.log("myMessage", obj, socket.id);
        socket.emit("message", obj, socket.id);
        // socket.emit('message', { message, id, obj });

        document.getElementById('chatInput').value = "";
        console.log("jkjjj", saurabh)

        Getdetails(saurabh)
    }

    console.log(messages);
    useEffect(() => {
        socket = socketIo(ENDPOINT, { transports: ['websocket'] });

        socket.on('connect', () => {
            alert('Connected');
            setid(socket.id);
            console.log('jklnikhn')
        })
        console.log(socket);
        socket.emit('joined', { user })



        socket.on('userJoined', (data) => {
            setMessages([...messages, data]);
            console.log(data.user, data.message);
        })

        socket.on('leave', (data) => {
            setMessages([...messages, data]);
            console.log(data.user, data.message)
        })

        return () => {
            socket.emit('disconnects');
            socket.off();
        }
    }, [])

    useEffect(() => {
        socket.on('sendMessage', (data) => {
            setMessages([...messages, data]);
            console.log(data.user, data.message, data.id);
        })
        return () => {
            socket.off();
        }
    }, [messages])
    useEffect(() => {
        fetchdata()
        Getdetails(saurabh)

    }, [saurabh])
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
                                                        {getalluserchat && getalluserchat?.map((listdata) =>

                                                            <Card className='mt-2' style={{ backgroundColor: listdata?.isRead ? 'white' : ' #efefef', cursor: "pointer" }} onClick={() => { setSaurabh(listdata.friendUserId) }}>

                                                                <div className='p-1'>
                                                                    <h5 style={{ margin: '0px', padding: '0px' }}>{listdata?.Firstname} {listdata?.Lastname}</h5>

                                                                    <div
                                                                        style={{ height: "20px", overflow: 'hidden', textOverflow: "ellipsis" }}>
                                                                        <span style={{ fontSize: '14px' }}>{listdata?.Messagebody}</span>
                                                                    </div>

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
                                    {
                                        Chatdetail !== null ? (<>
                                            <div className='box'>
                                                <Card className='mt-2 p-2' style={{ borderRadius: "10px", backgroundColor: '#EFEFEF' }}>
                                                    <div>
                                                        <div style={{ justifyContent: 'start', display: 'flex', padding: '10px', }}>

                                                            <h6>
                                                                {/* <img style={{ borderRadius: "50px", width: '50px', height: '50px' }} src={image} alt="img" className='order-details-img m-3' /> */}
                                                                <b>{Chatdetail[0]?.[0]?.FirstName} {Chatdetail[0]?.[0]?.LastName}</b></h6>

                                                        </div>

                                                    </div>
                                                </Card>
                                                <hr />
                                                <ReactScrollToBottom className="chatBox">
                                                    <div style={{ height: "50vh", overflowY: "scroll" }}>
                                                        {
                                                            Chatdetail[1].map((chatlistdata) =>
                                                                chatlistdata.UserId === localStorage.getItem("UserID") ? (
                                                                    <>
                                                                        <div>
                                                                            <Card style={{ backgroundColor: 'lightcyan', width: "40%", float: "right" }} className='mt-2'>
                                                                                <span >{chatlistdata.Messagebody}     </span>


                                                                            </Card>
                                                                        </div>
                                                                        <div>
                                                                            <span style={{ fontSize: "12px", float: "right" }}>      {moment(chatlistdata.CreatedDate).format('hh:mm: A')}</span>

                                                                        </div>

                                                                        <br />
                                                                        <br />
                                                                    </>
                                                                ) : (
                                                                    <>
                                                                        <Card style={{ backgroundColor: '#f0f2f5', width: "40%" }} className='mt-2'>
                                                                            <span style={{ float: 'right', color: 'red' }}>{chatlistdata.Messagebody}  </span>


                                                                        </Card>
                                                                        <p style={{ fontSize: "12px" }}>      {moment(chatlistdata.CreatedDate).format('HH:mm:ss A')}</p>
                                                                    </>
                                                                )
                                                            )
                                                        }
                                                    </div>
                                                </ReactScrollToBottom>

                                                {/* {messages.map((item, i) => <Message user={item.id === id ? '' : item.user} message={item.message} classs={item.id === id ? 'right' : 'left'} />)}
                                            </ReactScrollToBottom> */} 
                                            <div className="inputBox">
                                                <input onKeyUp={(event) => event.key === 'Enter' ? send() : null} type="text" id="chatInput" />
                                                <button onClick={send} className="sendBtn">
                                                    Send
                                                </button>

                                            </div>
                                        </div>
                                </>) :
                                (<>
                                    <div className='mt-5  no-message-show'>
                                        <center>
                                            {/* <ion-icon name="mail-unread-outline"></ion-icon> */}
                                            <  IoMailOutline style={{ fontSize: '50px', marginTop: '40px' }} />
                                            <h4> Let Start Message </h4>
                                        </center>
                                    </div>
                                </>)
                                    }

                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container >
            <Phoneviewfooter />

        </>
    )
}

export default MessaagesList;