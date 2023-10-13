import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import '../../asset/css/dashboard.css'
import Sidenav from './layout/Sidenavbar';
import test from "../../asset/image/test.JPG";
import Topnav from './layout/topnavbar';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Auth from '../../Model/Auth.model';
import test1 from '../../asset/image/test1.png';
import ProfileModal from '../../modal/Profile.modal';
import Switchform from '../../Model/switch.model';
import Staticmodal from '../../modal/Static.modal';
function Editprofile() {
    const inputRef = useRef(null);
    const [AllQualificationListt, setAllQualificationListt] = useState()
    const [allCity, setallcity] = useState()
    const [Freelancer, setFreelancer] = useState();
    const [activeTab, setActiveTab] = useState("Tab1");
    const [selectedImage, setSelectedImage] = useState(null);
    const handleClick = (tab) => {
        setActiveTab(tab);
    };
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    const [profileData, setProfileData] = useState([]);
    const fetchdata = () => {
        const userId  = localStorage.getItem("UserID");
        ProfileModal.ClientProfile({userId}).then((response) => {
            console.log(response.data);
            setProfileData(response.data);
        });
    }
    const handleimageClick = () => {
        inputRef.current.click();
    }
    useEffect(() => {
        Staticmodal.getAllQualificationList().then((response) => {
            console.log(response.data);
            setAllQualificationListt(response.data);
        });
    }, [])
    useEffect(() => {
        Staticmodal.getallCity().then((response) => {
            console.log(response.data);
            setallcity(response.data);
        });
    }, [])
    const [formdata, setformdata] = useState({
        fName: "",
        lName: "",
        occupationId: "",
        qualificationId: "",
        cityId: '',
        about: "",
        experience: "",
        files: "",
    });
    const handleInputChange = (event) => {
        setformdata({
            ...formdata,
            [event.target.name]: event.target.value,
        });
        if (event.target.type === "file") {
            const imageFile = event.target.files[0];
            if (imageFile) {
                setSelectedImage(URL.createObjectURL(imageFile));
            }
        }
    };
    const handleSubmit = (event) => {
        console.log(event);
        event.preventDefault();
        const form = new FormData(event.target);
        form.append("userId", parseInt(localStorage.getItem("UserID")));

        ProfileModal.Updateprofile(form ).then((response) => {
                console.log(response.data, "Profession Form Fill Successfuly");
            })
            .catch((error) => {
                console.log(error);
            });
    };
useEffect(() => {
    fetchdata();
}, [])
useEffect(() => {
    Auth.getthreeprofile().then((response) => {
        console.log(response.data);
        setFreelancer(response.data);
    });
}, [])
    return (
        <>
            <Container fluid className='dashboard-conatiner-top' >
                <Row>
                    <Col sm={1}className='d-none d-sm-block'>
                        <Sidenav />
                    </Col>


                    <Col sm={8} xs={12} className='dashboard-conatiner-top-row '>
                        <Container className='square border border-bottom-0'>
                            <Topnav activeLink="Profile" />
                            <Row className=''>
                                <Col sm={8} className="square border-end mb-3">
                                    <div  style={{backgroundColor:'#efefef',borderBottomRightRadius:"350px 350px",borderTopRightRadius:'35px ',borderTopLeftRadius:"35px",height:'57vh'}}>
                                    <Card className='order-detail-profile mt-3' style={{ backgroundColor: "#efefef", borderRadius: "35px", borderStyle:"none",borderBottomRightRadius:'35px'}}>
                                        <div>
                                            <p className='order-detail-profile-icon'><ion-icon name="pencil-outline" onClick={handleShow1} style={{ height: '21px' }}></ion-icon></p>

                                        </div>
                                        <center>
                                            <img src={`https://wiraaback.azurewebsites.net/api/v1/${profileData?.[0]?.ProfilePic}`} alt="" className='' style={{ height: "70px", width: '70px' }} />
                                            <h6 className='mt-4'><b>{profileData?.[0]?.FirstName} {profileData?.[0]?.LastName} </b></h6><br />
                                            <p>{profileData?.[0]?.OccupationName}</p>
                                        </center>
                                        <Container>
                                            <Row className='mb-3'>
                                                <Col className='square border-end'>  {profileData?.[0]?.FollowerCount === null ? (
                                                            <h6 className='text-center'>0</h6>
                                                                ) :   <h6 className='text-center'>{profileData?.[0]?.FollowerCount}</h6>}
                                                    
                                                   
                                                    <p className='text-center'>Followers</p>
                                                </Col>
                                                <Col className='square border-start'>
                                                {profileData?.[0]?.PostCount === null ? (
                                                            <h6 className='text-center'>0</h6>
                                                                ) :   <h6 className='text-center'>{profileData?.[0]?.PostCount}</h6>}
                                                   
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
                                    <Card style={{borderStyle:'none',borderTopLeftRadius:"35px",borderTopRightRadius:"opx"}}>
                                        <div className='m-3'>
                                            <span><b>About</b></span>
                                            <p>
                                                {profileData?.[0]?.AboutMe}
                                            </p>
                                            <span><b>Experience:</b></span>
                                            <p>
                                                {profileData?.[0]?.ExperienceName}
                                            </p>
                                            <span><b>Qualification:</b></span>
                                            <p>{profileData?.[0]?.QualificationName}
                                            </p>
                                            <span><b>City</b></span>
                                            <p>
                                                {profileData?.[0]?.City}
                                            </p>
                                        </div>
                                    </Card>
                                    </div>
                                </Col>

                                <Col md={4} className="">
                                    <h6 style={{ fontSize: '20px', marginTop: '20px', marginLeft: '30px' }}><b>Explore</b></h6>
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
                                                                ) :   <h6 className='text-center'>{freelist?.PostCount}</h6>}
                                        
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
                                <Col sm={1}>
                                </Col>
                            </Row>
                        </Container>
                        <Modal show={show} onHide={handleClose} className='' syu>

                            <Modal.Body className='mt-5'>
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
                                            <button className='mt-4' style={{ padding: '2px', borderRadius: '8px', width: '25%', color: 'white', borderStyle: 'none', backgroundColor: '#008080' }}> Done</button>
                                        </center>
                                    </Form.Group>
                                </div>

                            </Modal.Body>

                        </Modal>
                        <Modal show={show1} onHide={handleClose1} style={{ }}>

                            <Modal.Body>
                                <form onSubmit={handleSubmit}>
                                    
                                <div>
                                    <center>
                                        <div onClick={handleimageClick}   >
                                            {selectedImage ? <img src={selectedImage}  alt="" style={{ height: "70px", width: '70px', borderRadius: '50%', marginBottom: '20px', }}  /> :
                                                <img src={test1} alt="" name style={{ height: "70px", width: '70px', borderRadius: '50%', }} />

                                            }
                                            <span style={{ fontSize: '20px', marginTop: "12px", marginLeft: '50px' }}>Change Image</span>
                                            <input type="file" accept="image/*" onChange={handleInputChange}
                                                name='files' style={{ display: 'none' }} ref={inputRef} />

                                        </div>
                                    </center>

                                    <Form.Group className="mb-1 " controlId="exampleForm.ControlTextarea1">
                                        <Row>

                                            <Form.Label>Name </Form.Label>
                                            <Col sm={6}>
                                                <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">

                                                    <Form.Control placeholder="Frist Name"
                                                    name='fName' onChange={handleInputChange}
                                                    />
                                                </Form.Group>
                                            </Col>
                                            <Col sm={6}>
                                               
                                            </Col>
                                        </Row>

                                    </Form.Group>

                                </div>
                                <div>
                                    <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                                        <Form.Label>About </Form.Label>
                                        <Form.Control as="textarea" rows={3} placeholder="Please enter a headline"
                                        name='about'  onChange={handleInputChange} />
                                    </Form.Group>
                                    <Form.Group className="mb-1 mt-1" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Experience</Form.Label>
                                        <Form.Control as="textarea" rows={3} placeholder="Please enter work Experience" />
                                    </Form.Group>
                                    <Form.Group className="mb-1 mt-1" controlId="exampleForm.ControlTextarea1">

                                        <Row>
                                            <Col sm={6}>
                                                <Form.Label>Qualification:</Form.Label>
                                                <select name='qualificationId' style={{ height: '35px', width: '100%', border: '1px solid lightgrey', borderRadius: '8px' }}>
                                        {AllQualificationListt && AllQualificationListt.map((quallist) =>
                                        <option value={quallist.QualificationID}>{quallist.QualificationName}</option>
                                        
                                        )}
                                    </select>
                                            </Col>
                                            <Col sm={6}>
                                                <Form.Label>City:</Form.Label>
                                                <select name='cityId' style={{ height: '35px', width: '100%', border: '1px solid lightgrey', borderRadius: '8px' }}>
                                        {allCity && allCity.map((quallist) =>
                                        <option value={quallist.CityID}>{quallist.CityName}</option>
                                        
                                        )}
                                    </select>
                                            </Col>
                                        </Row>
                                        <center>
                                            <button className='mt-4' style={{ padding: '2px', borderRadius: '8px', width: '25%', color: 'white', borderStyle: 'none', backgroundColor: '#008080' }}> Done</button>
                                        </center>
                                    </Form.Group>
                                </div>
                                </form>
                            </Modal.Body>

                        </Modal>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Editprofile