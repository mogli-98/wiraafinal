import React, {useState,useEffect} from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import '../../../Aseset/css/dashboard.css'
import Sidenav from './Sidenav';
import test2 from "../../../Aseset/image/test2.png";
import test from "../../../Aseset/image/test.JPG";
import Topnav from './topnav';
import Auth from '../../../Model/Auth.model';

function Profiledetails(props) {
    const [activeTab, setActiveTab] = useState("Tab1");
    const [MyDetails , setMyDetails] = useState();
    const handleClick = (tab) => {
      setActiveTab(tab);
    };

    // const router = useSea();
    
    useEffect(() => {
        var url = new URLSearchParams(window.location.search)
        const id = url.get("id");
        Auth.Myprofile({id}).then((response) =>{
            console.log(response.data);
            setMyDetails(response.data);
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
                        <Container  className='square border border-bottom-0'>
                            <Topnav />
                            <Row className='mt-5'>
                            <Col sm={7}>
                                <Card className='order-detail-profile' style={{backgroundColor:"#efefef"}}>
                                        <center>
                                            <img src={test2} alt="" className='mt-5' />
                                            <h6 className='mt-4'><b>{MyDetails?.userName}</b></h6><br />
                                            <p>{MyDetails?.occupation}</p>
                                        </center>
                                        <Container>
                                            <Row className='mb-3'>
                                                <Col className='square border-end'><h6 className='text-center'>{MyDetails?.totalFollowers}</h6>
                                                    <p className='text-center'>Followers</p>
                                                </Col>
                                                <Col className='square border-start'>
                                                    <h6 className='text-center'>222</h6>
                                                    <p className='text-center'>Portfolio</p>
                                                </Col>
                                            </Row>
                                        </Container>
                                </Card>
                                    <div className="tabs-container">
                                    <Container>
                                        <Row className='mt-3 mb-3'>
                                            <Col className=''>
                                            <div
                                                className={`tab text-center ${activeTab === "Tab1" ? "active" : ""}`}
                                                onClick={() => handleClick("Tab1")}
                                                >
                                                <span className="text-center" style={{cursor:" default"}}> <b>Info</b></span>
                                            </div> 
                                            </Col>
                                            <Col className=''>
                                            <div
                                                className={`tab text-center ${activeTab === "Tab2" ? "active" : ""}`}
                                                onClick={() => handleClick("Tab2")}
                                                >
                                                <span className="text-center" style={{cursor:" default"}}> <b>Portfilo</b></span>
                                            </div> 
                                            </Col>
                                            <Col className=''> 
                                            <div
                                                className={`tab text-center ${activeTab === "Tab3" ? "active" : ""}`}
                                                onClick={() => handleClick("Tab3")}
                                                >
                                                <span className="text-center" style={{cursor:" default"}}> <b>Reviews</b></span>
                                            </div>  
                                               
                                            </Col>
                                        </Row>
                                    </Container>
                                    <div className="tab-content">
              
        
                  {activeTab === "Tab1" && <> 
                    <div className='m-3'>
                      <p><b>About</b></p>
                      <p> {MyDetails?.aboutMe}
                        </p>
                         <p><b>Experience</b></p>
                         {/* <p>{MyDetails?.experiences['description']}
                        </p> */}
                        <p><b>Qualification</b></p>
                        <p>{MyDetails?.highestQualification}</p>
                        <p><b>City</b></p>
                        {/* <p>{MyDetails?.userCity['cityName']}</p> */}
                    </div></>}
                  {activeTab === "Tab2" && <>
                    <div className='m-3'>
                    <Card  >
                        <div className="containerhover">
                            <img src={test2} alt="Avatar" className="containerhoverimage m-1" />
                            
                        </div>

                        <table>
                            <tbody>
                            <tr>
                                <td>
                                    <p><img src={test2} width={10} height={10} alt="" /> shiavm</p>
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
                            </tbody>
                        </table>
                    </Card>
                    <Card  >
                        <div className="containerhover">
                            <img src={test2} alt="Avatar" className="containerhoverimage m-1" />
                            
                        </div>

                        <table>
                            <tbody>
                            <tr>
                                <td>
                                    <p><img src={test2} width={10} height={10} alt="" /> shiavm</p>
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

                            </tr>b n  
                            </tbody>
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
                                <h6><b>Similar Profiles</b></h6>
                                <Card className='mt-5' style={{ borderRadius: "0px", backgroundColor: "#efefef" }}>
                                        
                                            <div className='order-details-container'>
                                                <img src={test} alt="" className='order-details-img m-3' />
                                                <div className='order-details-container-text'>
                                                    <h6><b>Chandan Innovation Pvt Ltd</b></h6><br />
                                                    <p>Graphic Designer</p>
                                                </div>

                                            </div>
                                            <Container>
                            <Row className='mb-3'>
                                <Col className='square border-end'><h6 className='text-center'>193</h6>
                                    <p className='text-center'>Followers</p>
                                </Col>
                                <Col className='square border-start'>
                                <h6 className='text-center'>222</h6>
                                      <p className='text-center'>Portfolio</p>
                                </Col>
                            </Row>
                        </Container>
                                     


                                        
                                </Card>
                                <Card className='mt-5' style={{ borderRadius: "0px", backgroundColor: "#efefef" }}>
                                        
                                            <div className='order-details-container'>
                                                <img src={test} alt="" className='order-details-img m-3' />
                                                <div className='order-details-container-text'>
                                                    <h6><b>Chandan Innovation Pvt Ltd</b></h6><br />
                                                    <p>Graphic Designer</p>
                                                </div>

                                            </div>
                                            <Container>
                            <Row className='mb-3'>
                                <Col className='square border-end'><h6 className='text-center'>193</h6>
                                    <p className='text-center'>Followers</p>
                                </Col>
                                <Col className='square border-start'>
                                <h6 className='text-center'>222</h6>
                                      <p className='text-center'>Portfolio</p>
                                </Col>
                            </Row>
                        </Container>
                                     


                                        
                                </Card>
                                <Card className='mt-5' style={{ borderRadius: "0px", backgroundColor: "#efefef" }}>
                                        
                                            <div className='order-details-container'>
                                                <img src={test} alt="" className='order-details-img m-3' />
                                                <div className='order-details-container-text'>
                                                    <h6><b>Chandan Innovation Pvt Ltd</b></h6><br />
                                                    <p>Graphic Designer</p>
                                                </div>

                                            </div>
                                            <Container>
                            <Row className='mb-3'>
                                <Col className='square border-end'><h6 className='text-center'>193</h6>
                                    <p className='text-center'>Followers</p>
                                </Col>
                                <Col className='square border-start'>
                                <h6 className='text-center'>222</h6>
                                      <p className='text-center'>Portfolio</p>
                                </Col>
                            </Row>
                        </Container>
                                     


                                        
                                </Card>
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

export default Profiledetails