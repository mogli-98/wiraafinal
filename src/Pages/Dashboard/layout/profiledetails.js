import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Card, Modal, Button } from "react-bootstrap";
import '../../../asset/css/dashboard.css'
import Sidenav from './Sidenav';
import test2 from "../../../asset/image/test2.png";
import test from "../../../asset/image/test.JPG";
import Topnav from './topnav';
import Auth from '../../../Model/Auth.model';
import More from '../../../asset/image/more.jpeg'
// import { grey } from '@mui/material/colors';
import { Link, useParams } from 'react-router-dom';
import Phoneviewfooter from '../../../Layout/Phoneviewfooter';
import { Box, Popover, } from '@mui/material';
import SettingModal from '../../../modal/Setting.modal';
import { helper } from '../../../lib/helper';
import PortfolioModal from '../../../modal/Portfolio.modal';
import { IoChatboxOutline, IoHeart, IoHeartOutline } from 'react-icons/io5';

function Explorepage() {
    const params = useParams();
    const [activeTab, setActiveTab] = useState("Tab1");
    const [Freelancer, setFreelancer] = useState();
    const [portfolios, setPortfolios] = useState([]);
    const [MyDetails, setMyDetails] = useState();
    const [show, setShow] = useState(false);
    const [shows, setShows] = useState(false);
    const handleClose = () => setShow(false);
    const handleClose1 = () => setShows(false);
    const [getError, seterror] = useState("")
    const handleShow = () => setShow(true);
    const handleShow1 = () => setShows(true);

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClic = (event) => {
        handleClose1()
        setAnchorEl(event.currentTarget);

    };

    const handleClos = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;



    const handleClick = (tab, UsersProfileID) => {
        const userProfileId = UsersProfileID;
        PortfolioModal.Portfilobyid({ userProfileId }).then((rsp) => {
            console.log('portfilo', rsp.data)
            setPortfolios(rsp.data)

        }).catch((error) => {

            if (error.response?.status === 404) {
                seterror("No Portfolio found")
            } else {
                // seterror(error.message);
            }


        })
        setActiveTab(tab)
    };

    // const router = useSea();

    useEffect(() => {

        const userId = params.id;
        Auth.userProfile({ userId }).then((response) => {
            console.log(response.data);
            setMyDetails(response.data);
        }).catch((error) => {
            console.log(error);
            // Display error message to the user
        });
    }, [])

    useEffect(() => {
        Auth.getthreeprofile().then((response) => {
            console.log(response.data);
            setFreelancer(response.data);
        }).catch((error) => {
            console.log(error);
            // Display error message to the user
        });
    }, [])
    const Blockacc = async (UserID) => {
        const userProfileId = parseInt(localStorage.getItem("userProfileId"));
        const userId = parseInt(UserID);
        SettingModal.blockuser({ userProfileId, userId }).then((response) => {
            console.log(response.data);
            helper.sweetalert.toast("User Blocked Successfully")
            // setFreelancer(response.data);

        }).catch((error) => {
            console.log(error);
            // Display error message to the user
        });
    }
    const inputRef = useRef(null);
    const [formData, setFormData] = useState({
        feedback: '',
    });
    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });

    };

    const handleSubmit = (event) => {

        console.log(event);
        event.preventDefault();
        const formdata = new FormData(event.target);
        formdata.append("userId", localStorage.getItem("UserID"));
        SettingModal.CreateReport(formdata)
            .then((response) => {
                // console.log(response.data, "yes data update");
                helper.sweetalert.toast("Your professional dashboard request is under review  We will notify you once it's approved.")
                handleClose1();
                handleClose()
            })
            .catch((error) => {
                console.log(error);
                // Display error message to the user
            });
    };

    return (
        <>
            <Container fluid className='dashboard-conatiner-top' >
                <Row>
                    <Col sm={1} className='d-none d-sm-block'>
                        <Sidenav activekey="home" />
                    </Col>
                    <Col sm={8} xs={12} style={{ padding: '0px' }} className='dashboard-conatiner-top-row '>
                        <Container className='square border border-bottom-0'>
                            <Topnav activeLink='Explore' />

                            <Row className='mt-1'>
                                <Col className="square border-end" sm={8}>

                                    <div style={{ backgroundColor: '#efefef', height: '65vh', borderTopLeftRadius: '35px', borderTopRightRadius: '35px', borderBottomRightRadius: "370px 370px" }}>

                                        <Card className='order-detail-profile' style={{ backgroundColor: "#efefef", border: 'none', borderRadius: '35px', borderStyle: 'none' }}>
                                            <span style={{ cursor: 'pointer', display: 'flex', justifyContent: 'flex-end', marginRight: '20px', color: 'grey' }}> <img style={{ color: 'lightgrey', height: '30px', width: '30px', marginTop: '20px' }} src={More} alt="IMG" onClick={handleClic} /> </span>
                                            <center>
                                                <img style={{ height: '100px', width: '100px' }} src={test2} alt="" className='mt-0 mb-3' />

                                                <h6 style={{ fontSize: '20px' }} className='mt-2'><b>{MyDetails?.[0]?.FirstName} {MyDetails?.[0]?.LastName} </b></h6>
                                                <p>{MyDetails?.[0]?.OccupationName}</p>
                                            </center>
                                            <Container >
                                                <Row className='mb-3 mt-2'>
                                                    <Col className='square border-end ' style={{ borderRight: '1px solid black' }}>
                                                        {/* <h6 className='text-center'> */}
                                                        {MyDetails?.[0]?.FollowerCount === null ? (
                                                            <h6 className='text-center'>0</h6>
                                                        ) : <h6 className='text-center'>{MyDetails?.[0]?.FollowerCount}</h6>}


                                                        {/* {MyDetails?.[0]?.totalFollowers}</h6> */}
                                                        <p style={{ fontSize: '18px', fontWeight: 600, color: 'grey' }} className='text-center'>Followers</p>
                                                        <center>
                                                            <Link to='/Message'>
                                                                <Button style={{ marginTop: '10px', backgroundColor: '#008080', padding: '6px 30px', fontSize: '14px', border: 'none', borderRadius: '8px' }} >Chat</Button></Link>
                                                        </center>

                                                    </Col>
                                                    <Col className='square border-start'>
                                                        {MyDetails?.[0]?.PostCount === null ? (
                                                            <h6 className='text-center'>0</h6>
                                                        ) : <h6 className='text-center'>{MyDetails?.[0]?.PostCount}</h6>}
                                                        <p style={{ fontSize: '18px', fontWeight: 600, color: 'grey' }} className='text-center'>Portfoilo</p>

                                                        <center>
                                                            <Button style={{ marginTop: '10px', backgroundColor: '#000', padding: '6px 30px', fontSize: '14px', border: 'none', borderRadius: '8px', marginBottom: '15px' }} >Follow</Button>
                                                        </center>

                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Card>


                                        <div className="tab-content">


                                            <Card style={{ borderStyle: 'none', borderRadius: "35px" }}>

                                                <div className='mt-4 pt-2'>
                                                    <div
                                                        className={`tab  ${activeTab === "Tab1" ? "active" : ""}`}
                                                        onClick={() => handleClick("Tab1")}

                                                    >
                                                        <button className={`Explore  ${activeTab === "Tab1" ? "Explore-active " : ""}`} >Info</button>
                                                    </div>
                                                    <div
                                                        className={`tab  ${activeTab === "Tab2" ? "active" : ""}`}
                                                        onClick={() => handleClick("Tab2", MyDetails?.[0]?.UsersProfileID)}
                                                    >
                                                        <button className={`Explore  ${activeTab === "Tab2" ? "Explore-active " : ""}`} >Portfoilo</button>
                                                    </div>
                                                </div>
                                                {activeTab === "Tab1" && <>
                                                    <div className='m-4'>

                                                        <span style={{ fontSize: '16px', padding: '0px ' }}><b>About:</b></span>
                                                        <p> {MyDetails?.[0]?.AboutMe} </p>

                                                        <span style={{ fontSize: '16px' }}><b>Experience:</b></span>
                                                        <p>{MyDetails?.[0]?.ExperienceName} </p>

                                                        <span style={{ fontSize: '16px' }}><b>Qualification:</b></span>
                                                        <p>{MyDetails?.[0]?.QualificationName}</p>

                                                        <span style={{ fontSize: '16px' }}><b>City:</b></span>
                                                        <p>{MyDetails?.[0]?.CityName}</p>

                                                    </div>
                                                </>}


                                                {activeTab === "Tab2" && <>
                                                    <div className='m-3' style={{ backgroundColor: "white" }}>
                                                        <center>
                                                            <p style={{ fontSize: '20px' }} className='m-5'>
                                                                {getError}</p>
                                                        </center>
                                                        {portfolios && portfolios.map((userpost) => (
                                                            <div>
                                                                <div className="containerhover">
                                                                    <center>
                                                                        <img src={`https://wiraaback.azurewebsites.net/${userpost.ImageURL}`} alt="Avatar" height={300} width={300} className=" m-1" />

                                                                    </center>
                                                                </div>

                                                                <center>
                                                                    <table className='mt-2'>
                                                                        <tbody>
                                                                            <tr>
                                                                                <td style={{ width: '50%' }}>
                                                                                    <p className='small '>

                                                                                        {/* <img src={test1} alt="A" className="m-1" style={{ width: "20px", height: '20px', borderRadius: "50px" }} /> */}
                                                                                        {/* <img src={test} alt="a" className=" " width={'20px'} /> */}
                                                                                        <b>{userpost.FirstName}{userpost.LastName}</b></p>
                                                                                </td>
                                                                                <td className="frloo">

                                                                                    {userpost.UserLiked !== 0 ? (
                                                                                        <IoHeart fill="red" style={{ cursor: "pointer" }} fontSize='20px' />
                                                                                        // <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" onClick={() => { Likeadd(data?.PostID); console.log("data?.id", data?.PostID) }} className='bi bi-heart-fill' viewBox="0 0 16 16" style={{ cursor: "pointer" }}>
                                                                                        //     <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                                                                        // </svg>
                                                                                    ) :
                                                                                        <IoHeartOutline style={{ cursor: "pointer" }} fontSize='20px' />
                                                                                        // <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" onClick={() => { Likeadd(data?.PostID); console.log("data?.id", data?.PostID) }} className='bi bi-heart-fill' viewBox="0 0 16 16" style={{ cursor: "pointer" }}>
                                                                                        //     <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                                                                        // </svg>
                                                                                    }
                                                                                    <span className='small'>{userpost.LikeCount}</span>
                                                                                    {userpost.CommentCount !== 0 ? (
                                                                                        <> <IoChatboxOutline style={{ cursor: 'pointer' }} fontSize='20px' /><span className='small'>{userpost.CommentCount} </span>

                                                                                        </>
                                                                                    ) : (
                                                                                        <><IoChatboxOutline style={{ cursor: 'pointer' }} fontSize='20px' /><span className=''>0</span>
                                                                                        </>
                                                                                    )
                                                                                    }

                                                                                    {/* <IoChatboxOutline style={{cursor:'pointer'}}  fontSize='20px'/><span className='small'>{data.CommentCount} </span>
                            <ion-icon name="chatbox-ellipses-outline"   ></ion-icon>  */}
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </center>
                                                            </div>
                                                        ))}

                                                    </div>
                                                </>}


                                            </Card>

                                        </div>
                                    </div>
                                </Col>

                                <Col md={4} className="d-none d-sm-block">
                                    <h6 style={{ fontSize: '20px', marginTop: '20px', marginLeft: '20px' }}><b>Explore</b></h6>
                                    {Freelancer && Freelancer.map((freelist) =>
                                        <Card className='mt-3' style={{ border: 'none', backgroundColor: "#efefef", borderRadius: '10px' }}>

                                            <div className='order-details-container mt-2'>
                                                <img style={{ height: '60px', width: '60px' }} src={test} alt="" className='order-details-img m-3' />
                                                <div className='order-details-container-text'>
                                                    <h6><b>{freelist?.FirstName} {freelist?.LastName}</b></h6><br />
                                                    <p>{freelist.OccupationName}</p>
                                                </div>

                                            </div>
                                            <Container>
                                                <Row className='mb-3'>
                                                    <Col className='square border-end'>
                                                        {freelist?.PostCount === null ? (
                                                            <h6 className='text-center'>0</h6>
                                                        ) : <h6 className='text-center'>{freelist?.PostCount}</h6>}

                                                        <p style={{ fontSize: '15px', color: 'grey', fontWeight: 600 }} className='text-center'>Followers</p>
                                                    </Col>
                                                    <Col className='square border-start'>
                                                        {freelist?.FollowerCount === null ? (
                                                            <h6 className='text-center'>0</h6>) :
                                                            <h6 className='text-center'>{freelist.FollowerCount}</h6>}
                                                        <p style={{ fontSize: '15px', color: 'grey', fontWeight: 600 }} className='text-center'>Portfolio</p>
                                                    </Col>
                                                </Row>
                                            </Container>




                                        </Card>
                                    )}
                                </Col>

                            </Row>



                            <Popover
                                // className='d-none d-sm-block'
                                id={id}
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handleClos}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                            >


                                <Box style={{ borderRadius: '8px' }} sx={{ p: 2 }}>
                                    <Button onClick={handleShow1} style={{ padding: '5px 20px' }} variant='danger'>
                                        Report
                                    </Button>

                                    <br />
                                    <Link to='/user/dashboard'>
                                        <Button className='mt-2' style={{ padding: '5px 24px' }} variant='secondary'

                                            onClick={() => { Blockacc(MyDetails?.[0]?.UserID) }}>
                                            Block
                                        </Button>
                                    </Link>
                                </Box>

                            </Popover>

                            <Modal className='d-block d-sm-none' show={show} onHide={handleClose} size='sm' centered>
                                <Modal.Header closeButton>

                                </Modal.Header>
                                <Modal.Body>
                                    <Button onClick={handleShow1} style={{ padding: '5px 20px' }} variant='danger'>
                                        Report
                                    </Button>


                                    <br />
                                    <Button className='mt-2' style={{ padding: '5px 24px' }} variant='secondary'>
                                        Block
                                    </Button>

                                </Modal.Body>

                            </Modal>




                            <Modal className='d-none d-sm-block' show={shows} onHide={handleClose1} aria-labelledby="contained-modal-title-vcenter" size='md' centered>
                                <Modal.Header style={{ color: '#008080', fontWeight: 600 }} closeButton>
                                    <span style={{ fontSize: '20px' }}>
                                        Report
                                    </span>

                                </Modal.Header>

                                <Modal.Body>
                                    <form onSubmit={handleSubmit}>
                                        <Container>

                                            <Row>

                                                <Col sm={6}>
                                                    <div>
                                                        <img style={{ height: '190px', width: '200px', borderRadius: '5px' }} src={test} alt="" />
                                                    </div>


                                                </Col>
                                                <Col xs={6}>
                                                    {/* <div style={{width:'200px',height:'200px',border:'1px solid grey'}}> */}
                                                    <textarea style={{ borderRadius: '5px' }} name="feedback" id="" cols="25" rows="8" placeholder='Feddback'></textarea>
                                                    {/* </div> */}

                                                </Col>
                                            </Row>
                                            <Row style={{ marginTop: '10px', padding: '0px 35px' }}>
                                                <Col xs={10}></Col>
                                                <Col xs={2}>
                                                    <Button style={{ backgroundColor: '#008080', border: 'none', fontWeight: 600 }} type='submit'>
                                                        Submit
                                                    </Button>
                                                </Col>


                                            </Row>

                                        </Container>


                                    </form>

                                </Modal.Body>

                            </Modal>




                            <Modal className='d-block d-sm-none' show={shows} onHide={handleClose1} aria-labelledby="contained-modal-title-vcenter" size='md' centered>
                                <Modal.Header style={{ color: '#008080', fontWeight: 600 }} closeButton>
                                    <span style={{ fontSize: '20px' }}>
                                        Report
                                    </span>

                                </Modal.Header>
                                <Modal.Body>
                                    <form onSubmit={handleSubmit}>
                                        <Container>
                                            <Row>
                                                <Col sm={6}>
                                                    <div>
                                                        <img style={{ height: '200px', width: '320px', borderRadius: '5px' }} src={test} alt="" />
                                                    </div>


                                                </Col>
                                                <Col className='mt-2' xs={6}>
                                                    {/* <div style={{width:'200px',height:'200px',border:'1px solid grey'}}> */}
                                                    <textarea style={{ borderRadius: '5px' }} name="feedback" id="" cols="43" rows="10" placeholder='Feddback'></textarea>
                                                    {/* </div> */}

                                                </Col>
                                            </Row>
                                            <Row style={{ marginTop: '10px', padding: '0px 35px' }}>
                                                <Col xs={10}></Col>
                                                <Col xs={2}>
                                                    <Button style={{ backgroundColor: '#008080', border: 'none', fontWeight: 600 }} type='submit' >
                                                        Submit
                                                    </Button>
                                                </Col>


                                            </Row>
                                        </Container>
                                    </form>



                                </Modal.Body>

                            </Modal>






                        </Container>

                    </Col>
                </Row>
            </Container >

            <Phoneviewfooter />

        </>
    )
}

export default Explorepage;