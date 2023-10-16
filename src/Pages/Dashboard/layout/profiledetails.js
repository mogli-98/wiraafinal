import React, { useState, useEffect ,useRef} from 'react';
import { Container, Row, Col, Card, Modal, Button } from "react-bootstrap";
import '../../../asset/css/dashboard.css'
import Sidenav from './Sidenav';
import test2 from "../../../asset/image/test2.png";
import test from "../../../asset/image/test.JPG";
import Topnav from './topnav';
import Auth from '../../../Model/Auth.model';
import More from '../../../asset/image/more.jpeg'
import { useParams } from 'react-router-dom';
import SettingModal from '../../../modal/Setting.modal';
import {helper} from '../../../lib/helper'
function Explorepage() {
    const params = useParams();
    const inputRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [activeTab, setActiveTab] = useState("Tab1");
    const [Freelancer, setFreelancer] = useState();
    const [MyDetails, setMyDetails] = useState();
    const [show, setShow] = useState(false);
    const [shows, setShows] = useState(false);
    const handleClose = () => setShow(false);
    const handleClose1 = () => setShows(false);

    const handleShow = () => setShow(true);
    const handleShow1 = () => setShows(true);

    const handleClick = (tab) => {
        setActiveTab(tab);
    };

  
    useEffect(() => {
        const userId = params.id;
        Auth.userProfile({ userId }).then((response) => {
            console.log(response.data);
            setMyDetails(response.data);
        });
    }, []);
    useEffect(() => {
        Auth.getthreeprofile().then((response) => {
            console.log(response.data);
            setFreelancer(response.data);
        });
    }, []);
    const Userblock = () =>{
        const userId = MyDetails[0]?.UserID;
        console.log(userId)
        const userProfileId = parseInt(localStorage.getItem("userProfileId"));
        SettingModal.Blockuser({userProfileId , userId}).then((response) => {
            helper.sweetalert.toast("User bBocked Sccessfully")
            console.log('response', response );
        })

    }
    const [formData, setFormData] = useState({
        files: '',
        feedback: '',
    });
    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
        if (event.target.type === "file") {
            const imageFile = event.target.files[0];
            if (imageFile) {
                setSelectedImage(URL.createObjectURL(imageFile));
            }
        }
    };
    const handleimageClick = () => {
        inputRef.current.click();
    }
    const handleSubmit = (event) => {

        console.log(event);
        event.preventDefault();
        const formdata = new FormData(event.target);
        formdata.append("userId", localStorage.getItem("UserID"));
        SettingModal.CreateReport(formdata)
            .then((response) => {
                // console.log(response.data, "yes data update");
                helper.sweetalert.toast("Your professional dashboard request is under review  We will notify you once it's approved.")
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
                        <Sidenav />
                    </Col>
                    <Col sm={8} xs={12} style={{ padding: '0px' }} className='dashboard-conatiner-top-row '>
                        <Container className='square border border-bottom-0'>
                            <Topnav activeLink='Explore' />
                            <Row className='mt-1'>
                                <Col style={{ marginTop: '12vh' }} className="square border-end" sm={8}>
                                    <div style={{ backgroundColor: '#efefef', height: '55vh', borderTopLeftRadius: '35px', borderTopRightRadius: '35px', borderBottomRightRadius: "370px 370px" }}>
                                        <Card className='order-detail-profile' style={{ backgroundColor: "#efefef", border: 'none', borderRadius: '35px',borderStyle:'none' }}>
                                            <span style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '20px', color: 'grey' }}> <img style={{ color: 'lightgrey', height: '30px', width: '30px', marginTop: '20px' }} src={More} alt="IMG" onClick={handleShow} /> </span>
                                            <center>
                                                <img style={{ height: '100px', width: '100px' }} src={test2} alt="" className='mt-0' />
                                                <h6 style={{ fontSize: '20px' }} className='mt-2'><b>{MyDetails?.[0]?.FirstName}</b></h6>
                                                <p>{MyDetails?.[0]?.OccupationName}</p>
                                            </center>
                                            <Container >
                                                <Row className='mb-3'>
                                                    <Col className='square border-end'>
                                                        {/* <h6 className='text-center'> */}
                                                        {MyDetails?.[0]?.FollowerCount === null ? (
                                                            <h6 className='text-center'>0</h6>
                                                        ) : <h6 className='text-center'>{MyDetails?.[0]?.FollowerCount}</h6>}


                                                        {/* {MyDetails?.[0]?.totalFollowers}</h6> */}
                                                        <p style={{ fontSize: '18px', fontWeight: 600, color: 'grey' }} className='text-center'>Followers</p>
                                                    </Col>
                                                    <Col className='square border-start'>
                                                        {MyDetails?.[0]?.PostCount === null ? (
                                                            <h6 className='text-center'>0</h6>
                                                        ) : <h6 className='text-center'>{MyDetails?.[0]?.PostCount}</h6>}
                                                        <p style={{ fontSize: '18px', fontWeight: 600, color: 'grey' }} className='text-center'>Orders</p>
                                                    </Col>
                                                </Row>
                                            </Container>
                                        </Card>                        
                                        <div className="tab-content">


                                               <Card style={{borderStyle:'none',borderRadius:"35px"}}>
                                               <div className='m-5'>
                                                    <p style={{ fontSize: '16px' }}><b>About:</b></p>
                                                    <p> {MyDetails?.[0]?.AboutMe}
                                                    </p>
                                                    <p style={{ fontSize: '16px' }}><b>Experience:</b></p>
                                                    <p>{MyDetails?.[0]?.ExperienceName} </p>
                                                    <p style={{ fontSize: '16px' }}><b>Qualification:</b></p>
                                                    <p>{MyDetails?.[0]?.QualificationName}</p>
                                                    <p style={{ fontSize: '16px' }}><b>City:</b></p>
                                                    <p>{MyDetails?.[0]?.CityName}</p>
                                                </div>
                                               </Card>
                                            {/* {activeTab === "Tab2" && <>
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
                                                </div>
                                            </>} */}

                                        </div>

                              
                                </div>

                                </Col>

                                <Col style={{ marginTop: '9vh' }} md={4} className="d-none d-sm-block">
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

                            <Modal className='d-none d-sm-block' show={show} onHide={handleClose} size='sm'>
                                <Modal.Header closeButton>

                                </Modal.Header>
                                <Modal.Body>
                                     <Button onClick={handleShow1}  style={{padding:'5px 20px'}} variant='danger'>
                                        Report
                                     </Button>
                                    

                                    <br />
                                    <Button className='mt-2' style={{padding:'5px 24px'}} variant='secondary' onClick={Userblock} >
                                        Block
                                    </Button>
                                    
                                </Modal.Body>

                            </Modal>


                            <Modal className='d-block d-sm-none' show={show} onHide={handleClose} size='sm' centered>
                                <Modal.Header closeButton>

                                </Modal.Header>
                                <Modal.Body>
                                     <Button onClick={handleShow1}  style={{padding:'5px 20px'}} variant='danger'>
                                        Report
                                     </Button>
                                    

                                    <br />
                                    <Button className='mt-2' style={{padding:'5px 24px'}} variant='secondary'>
                                        Block
                                    </Button>
                                    
                                </Modal.Body>

                            </Modal>




                            <Modal className='d-none d-sm-block' show={shows} onHide={handleClose1} aria-labelledby="contained-modal-title-vcenter" size='md' centered>
                                <Modal.Header style={{color:'#008080',fontWeight:600}} closeButton>
                                    <span style={{fontSize:'20px'}}>
                                        Report
                                    </span>                                    

                                </Modal.Header>
                                <Modal.Body>

                                    <Container>
                                        <form onSubmit={handleSubmit}>
                                        <Row>
                                            <Col sm={6}>
                                                <div onClick={handleimageClick}   >
                                                {selectedImage ? <img src={selectedImage} alt="" style={{ height: "190px", width: '190px', borderRadius: '8%', marginBottom: '20px', }} /> :
                                                    <img src={test} alt="" name style={{ height: "190px", width: '190px', borderRadius: '8%', }} />

                                                }
                                                {/* <span style={{ fontSize: '20px', marginTop: "12px", marginLeft: '50px' }}>Change Image</span> */}
                                                <input type="file" accept="image/*" onChange={handleInputChange}
                                                    name='files' style={{ display: 'none' }} ref={inputRef} />

                                            </div>
                                                

                                            </Col>
                                            <Col xs={6}>
                                                {/* <div style={{width:'200px',height:'200px',border:'1px solid grey'}}> */}
                                                    <textarea style={{borderRadius:'5px'}} name="feedback" id="" cols="25" rows="8" placeholder='Feddback'></textarea>
                                                {/* </div> */}
                                                
                                            </Col>
                                        </Row>
                                       
                                        <Row style={{marginTop:'10px',padding:'0px 35px'}}>
                                            <Col xs={10}></Col>
                                            <Col  xs={2}>
                                                <Button style={{backgroundColor:'#008080',border:'none',fontWeight:600}} type='submit' >
                                                Submit
                                            </Button>
                                            </Col>
                                            
                                            
                                        </Row>
                                        </form> 
                                    </Container>


                                     
                                    
                                </Modal.Body>

                            </Modal>




                            <Modal className='d-block d-sm-none' show={shows} onHide={handleClose1} aria-labelledby="contained-modal-title-vcenter" size='md' centered>
                                <Modal.Header style={{color:'#008080',fontWeight:600}} closeButton>
                                    <span style={{fontSize:'20px'}}>
                                        Report
                                    </span>                                    

                                </Modal.Header>
                                <Modal.Body>

                                    <Container>
                                        <Row>
                                            <Col sm={6}>
                                                <div>
                                                    <img style={{height:'200px',width:'320px',borderRadius:'5px'}} src={test} alt="" />
                                                </div>
                                                

                                            </Col>
                                            <Col className='mt-2' xs={6}>
                                                {/* <div style={{width:'200px',height:'200px',border:'1px solid grey'}}> */}
                                                    <textarea style={{borderRadius:'5px'}} name="Feedback" id="" cols="43" rows="10" placeholder='Feddback'></textarea>
                                                {/* </div> */}
                                                
                                            </Col>
                                        </Row>
                                        <Row style={{marginTop:'10px',padding:'0px 35px'}}>
                                            <Col xs={10}></Col>
                                            <Col  xs={2}>
                                                <Button style={{backgroundColor:'#008080',border:'none',fontWeight:600}} >
                                                Submit
                                            </Button>
                                            </Col>
                                            
                                            
                                        </Row>
                                    </Container>


                                     
                                    
                                </Modal.Body>

                            </Modal>






                        </Container>

                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Explorepage;