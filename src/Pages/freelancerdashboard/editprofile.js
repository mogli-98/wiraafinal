import React, { useState ,useEffect} from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import '../../Aseset/css/dashboard.css'
import Sidenav from './layout/Sidenavbar';
import test from "../../Aseset/image/test.JPG";
import Topnav from './layout/topnavbar';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Auth from '../../Model/Auth.model';
function Editprofile() {
    const [activeTab, setActiveTab] = useState("Tab1");

    const handleClick = (tab) => {
        setActiveTab(tab);
    };

    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

 const [profileData,setProfileData] = useState([]);

    useEffect(() => {
        const id = localStorage.getItem("id");
        // localStorage.getItem("id");
       Auth.userProfile({id}).then((response)=>{
        
        console.log(response.data);
        setProfileData(response.data);
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
                            <Row className=''>
                                <Col sm={8} className="square border-end">
                                    <Card className='order-detail-profile mt-3' style={{ backgroundColor: "#efefef",borderRadius:"35px"}}>  
                                        <div>
                                        <p className='order-detail-profile-icon'><ion-icon name="pencil-outline"  onClick={handleShow1}style={{height:'21px'}}></ion-icon></p>

                                        </div>
                                        <center>
                                            <img src={`https://wiraa.com/${profileData.profilePic}`} alt="" className=''style={{height:"70px" ,width:'70px'}} />
                                            <h6 className='mt-4'><b>{profileData.name} {profileData.lName} </b></h6><br />
                                            <p>Graphic Designer</p>
                                        </center>
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
                                            <Row>
                                                <Col>
                                                    <center><button onClick={handleShow} className='editporfile'>Edit Profile</button></center>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Card>
                                    <Card>
                                        <div className='m-3'>
                                            <p><b>About</b></p>
                                            <span>I love to make friends and interact with new people. My hobbies are debugging
                                                code, developing applications, reading good books and of course, listening music
                                                and watching movies.</span>
                                            <p><b>Experience:</b></p>
                                            {
                                            profileData && profileData?.experiences?.map((expre) => 
                                            <span><b>{expre?.title}</b>
                                            <br/>
                                            {expre?.description}
                                            </span> )}
                                            <p><b>Qualification:</b></p>
                                            <span>{profileData.highestQualification}
                                            </span>
                                        </div>
                                    </Card>
                                </Col>

                                <Col md={4} className="">
                                    <h6><b>Similar Profiles</b></h6>
                                    <Card className='mt-5' style={{ borderRadius: "8px", backgroundColor: "#efefef" }}>

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
                        <Modal show={show} onHide={handleClose} className='mt-5' syu>

                            <Modal.Body  className='mt-5'>
                                <div>
                                    <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                                        <Form.Label>About </Form.Label>
                                        <Form.Control as="textarea" rows={3} placeholder="Please enter a headline" />
                                    </Form.Group>
                                    <Form.Group className="mb-3 mt-4" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Experience</Form.Label>
                                        <Form.Control as="textarea" rows={3} placeholder="Please enter work Experience" />
                                    </Form.Group>
                                    <Form.Group className="mb-3 mt-4" controlId="exampleForm.ControlTextarea1">

                                        <Row>
                                            <Col sm={6}>
                                                <Form.Label>Qualification:</Form.Label>
                                                <select name="cars" id="cars" style={{
                                                    width: "-webkit-fill-available"
                                                    , height: "40px"
                                                }}>
                                                    <option value="Business">Your Qualification</option>
                                                    <option value="IT">IT</option>
                                                    <option value="Marketing">Marketing</option>
                                                    <option value="Lifestyle">Lifestyle</option>
                                                </select>
                                            </Col>
                                            <Col sm={6}>
                                                <Form.Label>City:</Form.Label>
                                                <select name="cars" id="cars" style={{
                                                    width: "-webkit-fill-available"
                                                    , height: "40px"
                                                }}>
                                                    <option value="Business"> Your City</option>
                                                    <option value="IT">IT</option>
                                                    <option value="Marketing">Marketing</option>
                                                    <option value="Lifestyle">Lifestyle</option>
                                                </select>
                                            </Col>
                                        </Row>
                                      <center>
                                      <button className='mt-4' style={{padding:'2px',borderRadius:'8px',width:'25%',color:'white',borderStyle:'none',backgroundColor:'#008080'}}> Done</button>
                                      </center>
                                    </Form.Group>
                                </div>

                            </Modal.Body>

                        </Modal>
                        <Modal show={show1} onHide={handleClose1} style={{marginTop:'16vh'}}>

                            <Modal.Body>
                                <div>   <center>
                                
                                            <img src={`https://wiraa.com/${profileData.profilePic}`} alt="" style={{height:'100px',width:'100px',borderRadius:'50px',marginTop:'20px'}}/>
                                    </center>                              
                                    <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlTextarea1">
                                        <Row>
                                        <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                                    <Form.Label><b>Profile image:</b> <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="red" className="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg></Form.Label>
                                    <div>
                                        <Card style={{backgroundColor:"#efefef"}}>
                                            <p className='m-2'>Update your latest image <button type='file' className='swtich-upload'><b>Upload Iamge</b></button></p>
                                        </Card>
                                    </div>
                                </Form.Group>
                                        <Form.Label>Name </Form.Label>
                                            <Col sm={6}>
                                                <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                                                    
                                                    <Form.Control  placeholder="Frist Name" />
                                                </Form.Group>
                                            </Col>
                                            <Col sm={6}>
                                                <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                                                    
                                                    <Form.Control  placeholder="Last Name" />
                                                </Form.Group>
                                            </Col>
                                        </Row>

                                    </Form.Group>
                                    
                                </div>

                            </Modal.Body>

                        </Modal>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Editprofile