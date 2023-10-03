import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import Sidenav from '../layout/Sidenav';
import Topnav from '../layout/topnav';
import test from "../../../asset/image/test.JPG";
import "../../../asset/css/dashboard.css"
import Modal from 'react-bootstrap/Modal';
import test2 from "../../../asset/image/test2.png";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Orderbook from '../../../Model/Order.model';
function Orderdetails() {
    const params = useParams();
    const [interestedPeople, setInterestedPeople]  =useState()
    useEffect(() => {
        console.log(params, "Orderid");
        const orderId = params.id;
        Orderbook.Interest({orderId}).then((respone) => {
            if(respone.data.status === false)
            // console.log(respone.data.status)

            {
                window.location.replace(`/Orderdetails/${params.id}`)
            }
        else{ setInterestedPeople(respone.data)}
           
        })
    }, [])
    const [activeTab, setActiveTab] = useState("Tab1");

    const handleClick = (tab) => {
        setActiveTab(tab);
    };
    const GoBackpage = () => {
        const order_id = params.id
        console.log(order_id)
    }
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    const [answerOrders , setAnswerOrders] = useState()
    const Showanswer = async (InterestedUserId) => {
        const orderId = params.id
        console.log(InterestedUserId)
        const proUserId = InterestedUserId;
        Orderbook.InterestAnswer({orderId},{proUserId}).then((response) => {
                console.log(response.data)  
                setAnswerOrders(response.data);
                handleShow(true);
            }).catch((error) => {
            console.log("error => ", error)
        })
    }
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
                            <Row className='mt-2'>
                                <Col sm={8} className="square border-end">
                                    <div className='m-2 ' style={{ fontSize: '12px' }}>
                                    <Link to={`/Orderdetailsbreief/${params.id}`}>
                                        <button style={{ marginLeft: '10px', border: '1px solid grey', width: '20%' }} className='order-details-requirements' onClick={GoBackpage} >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="svgg bi bi-person-plus-fill" viewBox="0 0 16 16">
                                                <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                            </svg>
                                            <span >Requirements</span>  </button></Link>

                                        <button style={{ marginRight: '10px', border: '1px solid grey', width: '20%' }} className='order-details-shortlisted'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className=" svgg bi bi-star" viewBox="0 0 16 16">
                                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                        </svg> <span>Shortlisted</span> </button>
                                    </div>
                                    {interestedPeople && interestedPeople?.map((listintrest) =>
                                         <Card className='m-3 p-2' style={{ borderRadius: "5px", backgroundColor: "#efefef", border: 'none', cursor: 'pointer', boxShadow: '8px 8px 8px -5px' }}>
                                         <div className='order-details-container'>
                                             <img src={test} alt="" className='order-details-img m-3' />
                                             <div className='order-details-container-text'>
                                                 <h6><b>{listintrest?.FirstName} {listintrest?.LastName}</b></h6><br />
                                                 <p style={{ color: 'grey' }}>{listintrest?.OccupationName}r</p>
                                             </div>
                                             <svg style={{ marginLeft: '280px' }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                                                 <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                             </svg>
                                         </div>
 
                                         <div className='order-details-contact'>
                                             {/* <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                                                 <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                             </svg> Contact</div> */}
                                             <div style={{ width: '50%', border: '2px solid lightgrey', padding: '2px' }}  onClick={() => { Showanswer(listintrest.InterestedUserId) }}>
                                                 <svg style={{ color: 'grey', paddingRight: '5px' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-translate" viewBox="0 0 16 16">
                                                     <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z" />
                                                     <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z" />
                                                 </svg>
                                                 <span style={{ fontSize: '12px', color: 'grey' }}>Answer </span>
                                             </div>
                                             <div style={{ width: '50%', border: '2px solid lightgrey', padding: '2px' }}>
                                                 <svg style={{ color: 'grey', paddingRight: '5px' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-wechat" viewBox="0 0 16 16">
                                                     <path d="M11.176 14.429c-2.665 0-4.826-1.8-4.826-4.018 0-2.22 2.159-4.02 4.824-4.02S16 8.191 16 10.411c0 1.21-.65 2.301-1.666 3.036a.324.324 0 0 0-.12.366l.218.81a.616.616 0 0 1 .029.117.166.166 0 0 1-.162.162.177.177 0 0 1-.092-.03l-1.057-.61a.519.519 0 0 0-.256-.074.509.509 0 0 0-.142.021 5.668 5.668 0 0 1-1.576.22ZM9.064 9.542a.647.647 0 1 0 .557-1 .645.645 0 0 0-.646.647.615.615 0 0 0 .09.353Zm3.232.001a.646.646 0 1 0 .546-1 .645.645 0 0 0-.644.644.627.627 0 0 0 .098.356Z" />
                                                     <path d="M0 6.826c0 1.455.781 2.765 2.001 3.656a.385.385 0 0 1 .143.439l-.161.6-.1.373a.499.499 0 0 0-.032.14.192.192 0 0 0 .193.193c.039 0 .077-.01.111-.029l1.268-.733a.622.622 0 0 1 .308-.088c.058 0 .116.009.171.025a6.83 6.83 0 0 0 1.625.26 4.45 4.45 0 0 1-.177-1.251c0-2.936 2.785-5.02 5.824-5.02.05 0 .1 0 .15.002C10.587 3.429 8.392 2 5.796 2 2.596 2 0 4.16 0 6.826Zm4.632-1.555a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0Zm3.875 0a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0Z" />
                                                 </svg>
                                                 <span style={{ fontSize: '12px', color: 'grey' }}>chat</span>
 
                                             </div>
 
 
 
 
                                         </div>
                                     </Card>
 
                                    )}
                               




                                </Col>
                                <Col sm={4}>
                                    <Card className='order-detail-profile m-0 p-0' style={{ backgroundColor: "#efefef", border: 'none' }}>
                                        <div style={{ margin: '10px' }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ height: '20px', width: '20px', float: 'right' }} width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
                                                <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
                                            </svg>

                                        </div>

                                        <center>
                                            <img src={test} alt="" className='mt-2' />
                                            <h6 className='mt-4 mb-0'><b>Chandan Innovation Pvt Ltd</b></h6>
                                            <p className='mt-0'>Graphic Designer</p>
                                        </center>
                                        <Container>
                                            <Row className='mb-3'>
                                                <Col className='square border-end'><h6 style={{ fontSize: '16px', fontWeight: 600 }} className='text-center'>193</h6>
                                                    <p style={{ color: 'grey' }} className='text-center'>Followers</p>
                                                </Col>
                                                <Col className='square border-start'>
                                                    <h6 style={{ fontSize: '16px', fontWeight: 600 }} className='text-center'>222</h6>
                                                    <p style={{ color: 'grey' }} className='text-center'>Portfolio</p>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Card>

                                    <div className="tabs-container">
                                        <Container>
                                            {/* <Row className='mt-3 mb-3'>
                                                <Col className=''>
                                                    <div
                                                        className={`tab text-center ${activeTab === "Tab1" ? "active" : ""}`}
                                                        onClick={() => handleClick("Tab1")}
                                                    >
                                                        <span className="text-center" style={{ cursor: " default" }}> <b>Info</b></span>
                                                    </div>
                                                </Col>
                                                <Col className=''>
                                                    <div
                                                        className={`tab text-center ${activeTab === "Tab2" ? "active" : ""}`}
                                                        onClick={() => handleClick("Tab2")}
                                                    >
                                                        <span className="text-center" style={{ cursor: " default" }}> <b>Portfilo</b></span>
                                                    </div>
                                                </Col>
                                                <Col className=''>
                                                    <div
                                                        className={`tab text-center ${activeTab === "Tab3" ? "active" : ""}`}
                                                        onClick={() => handleClick("Tab3")}
                                                    >
                                                        <span className="text-center" style={{ cursor: " default" }}> <b>Reviews</b></span>
                                                    </div>

                                                </Col>
                                            </Row> */}
                                        </Container>
                                        <div className="tab-content">
                                            {activeTab === "Tab1" && <>
                                                <div className='mt-3'>
                                                    <p className='mb-0' style={{}}><b>About :</b></p>
                                                    <p> love to make friends and interact with new people. My
                                                        hobbies are debugging code, developing applications,
                                                        reading good books and of course, listening music and
                                                        watching movies.
                                                    </p>
                                                    <p className='mb-0'><b>Experience :</b></p>
                                                    <p>I am passionate about crafting impactful experiences
                                                        and digital marketing strategies at the intersection of
                                                        brand and product. I have worked in London, Hong
                                                        Kong and in Shanghai for companies such as the
                                                        Adidas, L'Oreal, Pfizer and Danone
                                                    </p>
                                                    <p className='mb-0'><b>Qualification :</b></p>
                                                    <p>Masters of Technology</p>
                                                    <p className='mb-0'><b>City :</b></p>
                                                    <p>Mumbai - Maharashtra</p>

                                                </div></>}

                                            {activeTab === "Tab2" && <>
                                                <div className='m-3'>
                                                    <Card  >
                                                        <div className="containerhover">
                                                            <img src={test2} alt="Avatar" className="containerhoverimage m-1" />

                                                        </div>

                                                        <table>
                                                            <tr>
                                                                <td>
                                                                    <p><img src={test} width={10} height={10} alt="" /> shiavm</p>
                                                                </td>
                                                                <td className="frloo">
                                                                    <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                                                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                                                    </svg>223 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                                                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                                                        </svg>223</p>
                                                                </td>
                                                            </tr>
                                                            <tr>

                                                            </tr>
                                                        </table>
                                                    </Card>
                                                    <Card  >
                                                        <div className="containerhover">
                                                            <img src={test2} alt="Avatar" className="containerhoverimage m-1" />

                                                        </div>

                                                        <table>
                                                            <tr>
                                                                <td>
                                                                    <p><img src={test} width={10} height={10} alt="" /> shiavm</p>
                                                                </td>
                                                                <td className="frloo">
                                                                    <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                                                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                                                    </svg>223 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                                                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                                                        </svg>223</p>
                                                                </td>
                                                            </tr>
                                                            <tr>

                                                            </tr>
                                                        </table>
                                                    </Card>
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
                                                        <p>Good Professional. He can do everything..</p>
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
                                    <hr style={{ border: '2px solid grey' }} />


                                    <div style={{ color: 'grey', fontSize: '16px' }} className='mt-3 p-2'>
                                        <Link to='/About Us'  >
                                            <span style={{ paddingRight: '10px', color: 'grey' }}>
                                                About </span>
                                        </Link>
                                        <Link to='/Career'>
                                            <span style={{ paddingRight: '10px', color: 'grey' }}>Career</span>
                                        </Link>

                                        <Link to='/Termsandcondition'>
                                            <span style={{ color: 'grey' }}>Term of services</span>
                                        </Link>

                                        <br />

                                        <Link to='/ContactComponent'>
                                            <span style={{ paddingRight: '20px', color: 'grey' }}>Conatct</span>
                                        </Link>

                                        <span style={{ paddingRight: '20px' }}>FAQ</span>

                                        <span style={{ paddingRight: '20px' }}>Blog</span>

                                        <Link to='/PrivacyPolicy'>
                                            <span style={{ paddingRight: '10px', color: 'grey' }}>Privacy policy</span>
                                        </Link>

                                        <span> ©️ 2023 Wiraa. All Rights Reserved</span>
                                    </div>


                                </Col>

                            </Row>
                        </Container>
                    </Col>

                    <Modal show={show} onHide={handleClose}>

                        <Modal.Body>
                            <div>
                                <p>Screening Answers</p>
                                <div>
                                    <p><b>Q.How many years of experience do you have in</b></p>
                                    <p>Ans = {answerOrders?.YearsOfExperience} Years</p>
                                    <p><b>Q.Are you comfortable with my project budge?</b></p>
                                    <p>Ans = {answerOrders?.Comfortable}</p>
                                    <p><b>Q.We must fill this position urgently. Can you start immediately?</b></p>
                                    <p>Ans ={answerOrders?.Immediately}</p>
                                    <p><b>Q.What is your work availability?</b></p>
                                    <p>Ans ={answerOrders?.WorkAvailability}</p>
                                </div>
                            </div>

                        </Modal.Body>

                    </Modal>
                    <Modal show={show1} onHide={handleClose1}>

                        <Modal.Body>
                            <div>
                                <p>Upgrade Pos</p>
                                <div>
                                    <p>-Direct contacts with professionals</p>
                                    <p>-Featured project listing</p>
                                    <p>-Dedicated expert staff</p>

                                </div>
                            </div>

                        </Modal.Body>

                    </Modal>
                </Row>
            </Container>
        </>
    )
}

export default Orderdetails;