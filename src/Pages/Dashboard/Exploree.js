import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import '../../asset/css/dashboard.css'
import Sidenav from './layout/Sidenav';
import test2 from "../../asset/image/test2.png";
import test from "../../asset/image/test.JPG";
import Topnav from './layout/topnav';
import Auth from '../../Model/Auth.model';
// import More from '../../asset/image/more.png'
import { grey } from '@mui/material/colors';

function Explorepage() {
    const [activeTab, setActiveTab] = useState("Tab1");
    const [Mypotrfolio, setMyportfolio] = useState();
    const [userport, setUserPort] = useState();
    const handleClick = (tab) => {
        setActiveTab(tab);
    };

    // const router = useSea();

    // useEffect(() => {
    //     // var url = new URLSearchParams(window.location.search)
    //     // const id = url.get("id");
    //     const id = localStorage.getItem("id");
    //     Auth.Myprofile({ id }).then((response) => {
    //         console.log(response.data);
    //         setMyDetails(response.data);
    //     });
    // }, [])
    useEffect(() => {
        // var url = new URLSearchParams(window.location.search)
        // const id = url.get("id");
        const userId = localStorage.getItem("UserID");
        Auth.Userporfiolio({ userId }).then((response) => {
            console.log(response.data[0]);
            setUserPort(response.data[0]);
        });
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
                            <Row className='mt-1'>
                                <Col className=" square border-end" sm={8}>
                                    <Card className='order-detail-profile' style={{ backgroundColor: "#efefef", border: 'none', borderRadius: '40px', borderBottomLeftRadius: '0px' }}>
                                        {/* <span style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '20px', color: 'grey' }}> <img style={{ color: 'lightgrey', height: '30px', width: '30px', marginTop: '20px' }} src={More} alt="IMG" /> </span> */}
                                        <center>
                                            <img style={{ height: '100px', width: '100px' }} src={test2} alt="" className='mt-0' />
                                            <h6 style={{ fontSize: '20px' }} className='mt-4'><b>{userport?.FirstName}</b></h6><br />
                                            {/* <p>{userport?.OccupationName}</p> */}
                                        </center>
                                        <Container >
                                            <Row className='mb-3'>
                                                <Col className='square border-end'><h6 className='text-center'>{userport?.totalFollowers}</h6>
                                                    <p style={{ fontSize: '18px', fontWeight: 600, color: 'grey' }} className='text-center'>Followers</p>
                                                </Col>
                                                <Col className='square border-start'>
                                                    <h6 style={{ fontSize: '20px' }} className='text-center'>{userport?.PostCount}</h6>
                                                    <p style={{ fontSize: '18px', fontWeight: 600, color: 'grey' }} className='text-center'>Orders</p>
                                                </Col>

                                            </Row>
                                            <center>                                            <button style={{ padding: '7px', marginTop: '25px', marginBottom: '40px', backgroundColor: 'black', color: 'white', border: 'none', borderRadius: '10px', paddingLeft: '35px', paddingRight: '35px' }}> Edit Profile</button>
                                            </center>
                                        </Container>
                                    </Card>
                                    <div className="tabs-container">
                                        <Container>
                                            <Row className='mt-3 mb-3'>
                                                {/* <Col className=''>
                                                    <div
                                                        className={`tab text-center ${activeTab === "Tab1" ? "active" : ""}`}
                                                        onClick={() => handleClick("Tab1")}
                                                    >
                                                        <span className="text-center" style={{ cursor: " pointer" }}> <b>Info</b></span>
                                                    </div>
                                                </Col> */}
                                                {/* <Col className=''>
                                                    <div
                                                        className={`tab text-center ${activeTab === "Tab2" ? "active" : ""}`}
                                                        onClick={() => handleClick("Tab2")}
                                                        style={{cursor:'pointer'}}
                                                    >
                                                        <span className="text-center" style={{ cursor: " pointer" }}> <b>Portfilo</b></span>
                                                    </div>
                                                </Col> */}
                                                {/* <Col className=''>
                                                    <div
                                                        className={`tab text-center ${activeTab === "Tab3" ? "active" : ""}`}
                                                        onClick={() => handleClick("Tab3")}
                                                    >
                                                        <span className="text-center" style={{ cursor: " pointer" }}> <b>Reviews</b></span>
                                                    </div>

                                                </Col> */}
                                            </Row>
                                        </Container>
                                        <div className="tab-content">


                                            {activeTab === "Tab1" && <>
                                                <div className='m-2'>
                                                    <p style={{ fontSize: '16px' }}><b>About:</b></p>
                                                    <p> {userport?.AboutMe}
                                                    </p>
                                                    <p style={{ fontSize: '16px' }}><b>Experience:</b></p>
                                                    <p>{userport?.ExperienceName} </p>
                                                    <p style={{ fontSize: '16px' }}><b>Qualification:</b></p>
                                                    <p>{userport?.QualificationName}</p>
                                                    <p style={{ fontSize: '16px' }}><b>City:</b></p>
                                                    <p>{userport?.CityName}</p>
                                                </div></>}
                                            {activeTab === "Tab2" && <>
                                                <div className='m-3'>
                                                    {userport && userport.map((userpost) => (
                                                        <div>
                                                            <div className="containerhover">
                                                                <center>
                                                                    <img src={`http://demo.wiraa.com${userpost?.ImageURL}`} alt="Avatar" height={300} width={400} className=" m-1" />

                                                                </center>
                                                            </div>

                                                            <center>
                                                                <table>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>
                                                                                <p><img src={`http://demo.wiraa.com${userpost?.ImageURL}`} width={10} height={10} alt="" /> {userpost?.userName}</p>
                                                                            </td>
                                                                            <td className="frloo">
                                                                                <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                                                                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                                                                </svg>{userpost?.totalFollowers} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                                                                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                                                                    </svg>{userpost?.PostShareLevel}</p>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </center>
                                                        </div>
                                                    ))}
                                                </div></>}
                                            {activeTab === "Tab3" && <>
                                                <div className='m-3 order-detail-review'>
                                                    <div className='m-3'>
                                                        <h6> Vikaram Panday</h6>
                                                        <span class="fa fa-star checked"></span>
                                                        <span class="fa fa-star checked"></span>
                                                        <span class="fa fa-star checked"></span>
                                                        <span class="fa fa-star"></span>
                                                        <span class="fa fa-star"></span>
                                                        <p>Good Professional. She can do everything..</p>
                                                    </div>
                                                </div>
                                                <div className='m-3 order-detail-review'>
                                                    <div className='m-3'>
                                                        <h6> Vikaram Panday</h6>
                                                        <span class="fa fa-star checked"></span>
                                                        <span class="fa fa-star checked"></span>
                                                        <span class="fa fa-star checked"></span>
                                                        <span class="fa fa-star"></span>
                                                        <span class="fa fa-star"></span>
                                                        <p>Good Professional. She can do everything..</p>
                                                    </div>
                                                </div>
                                            </>}
                                        </div>
                                    </div>
                                </Col>
                                <Col md={4} className="">
                                    <h6 style={{ fontSize: '20px', marginTop: '20px', marginLeft: '30px' }}><b>Explore</b></h6>
                                    <Card className='mt-3' style={{ border: 'none', backgroundColor: "#efefef", borderRadius: '10px' }}>

                                        <div className='order-details-container mt-2'>
                                            <img style={{ height: '60px', width: '60px' }} src={test} alt="" className='order-details-img m-3' />
                                            <div className='order-details-container-text'>
                                                <h6><b>Chandan Innovation Pvt Ltd</b></h6><br />
                                                <p>Graphic Designer</p>
                                            </div>

                                        </div>
                                        <Container>
                                            <Row className='mb-3'>
                                                <Col className='square border-end'><h6 className='text-center'>193</h6>
                                                    <p style={{ fontSize: '15px', color: 'grey', fontWeight: 600 }} className='text-center'>Followers</p>
                                                </Col>
                                                <Col className='square border-start'>
                                                    <h6 className='text-center'>222</h6>
                                                    <p style={{ fontSize: '15px', color: 'grey', fontWeight: 600 }} className='text-center'>Portfolio</p>
                                                </Col>
                                            </Row>
                                        </Container>




                                    </Card>
                                    <Card className='mt-3' style={{ border: 'none', backgroundColor: "#efefef", borderRadius: '10px' }}>

                                        <div className='order-details-container mt-2'>
                                            <img style={{ height: '60px', width: '60px' }} src={test} alt="" className='order-details-img m-3' />
                                            <div className='order-details-container-text'>
                                                <h6><b>Chandan Innovation Pvt Ltd</b></h6><br />
                                                <p>Graphic Designer</p>
                                            </div>

                                        </div>
                                        <Container>
                                            <Row className='mb-3'>
                                                <Col className='square border-end'><h6 className='text-center'>193</h6>
                                                    <p style={{ fontSize: '15px', color: 'grey', fontWeight: 600 }} className='text-center'>Followers</p>
                                                </Col>
                                                <Col className='square border-start'>
                                                    <h6 className='text-center'>222</h6>
                                                    <p style={{ fontSize: '15px', color: 'grey', fontWeight: 600 }} className='text-center'>Portfolio</p>
                                                </Col>
                                            </Row>
                                        </Container>




                                    </Card>
                                    <Card className='mt-3' style={{ border: 'none', backgroundColor: "#efefef", borderRadius: '10px' }}>

                                        <div className='order-details-container mt-2'>
                                            <img style={{ height: '60px', width: '60px' }} src={test} alt="" className='order-details-img m-3' />
                                            <div className='order-details-container-text'>
                                                <h6><b>Chandan Innovation Pvt Ltd</b></h6><br />
                                                <p>Graphic Designer</p>
                                            </div>

                                        </div>
                                        <Container>
                                            <Row className='mb-3'>
                                                <Col className='square border-end'><h6 className='text-center'>193</h6>
                                                    <p style={{ fontSize: '15px', color: 'grey', fontWeight: 600 }} className='text-center'>Followers</p>
                                                </Col>
                                                <Col className='square border-start'>
                                                    <h6 className='text-center'>222</h6>
                                                    <p style={{ fontSize: '15px', color: 'grey', fontWeight: 600 }} className='text-center'>Portfolio</p>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Card>
                                </Col>
                                {/* <Col sm={1}>
                                </Col> */}
                            </Row>
                        </Container>

                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Explorepage;