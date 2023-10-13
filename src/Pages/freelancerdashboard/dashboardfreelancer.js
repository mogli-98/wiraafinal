import React, { useState ,useRef ,useEffect} from 'react';
import { Container, Row, Col, Card,Form } from "react-bootstrap";
import "../../asset/css/freelanceredashboard.css";
import Sidenavbar from './layout/Sidenavbar';
import Topnavbar from './layout/topnavbar';
import bookbag from '../../asset/image/freelancerdash/bookbag.png'

import topcard2 from '../../asset/image/freelancerdash/topcard2.png'
import topcard3 from '../../asset/image/freelancerdash/topcard3.png'
import topcard4 from '../../asset/image/freelancerdash/topcard4.png'
// import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Phoneviewfooter from '../../Layout/Phoneviewfooter';
import PortfolioModal from '../../modal/Portfolio.modal';
import Staticmodal from '../../modal/Static.modal';
import { helper } from '../../lib/helper';
// import Form from 'react-bootstrap/Form';
function Freelancerdashboard(props) {
    const handleimageClick = () => {
        inputRef.current.click();
    }
    const inputRef = useRef(null);
    const [allCity, setallcity] = useState()
    const [selectedImage, setSelectedImage] = useState(null);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {
        Staticmodal.AllSubcategorynoid().then((response) => {
            console.log(response.data);
            setallcity(response.data);
        });
    }, [])
    const [formdata, setformdata] = useState({
        subCategoryId: "",
        description: "",
        files: '',
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
        form.append( "userProfileId", localStorage.getItem("userProfileId"));
        PortfolioModal.addPortfolio(form ).then((response) => {
                console.log(response.data, "data");
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <>
            <Container fluid className='dashboard-conatiner-top d-none d-sm-block ' >
                <Row>
                    <Col sm={1} className='d-none d-sm-block'>
                        <Sidenavbar />
                    </Col>


                    <Col sm={8} xs={12} className='dashboard-conatiner-top-row '>
                        <Container className='square border border-bottom-0'>
                            <Topnavbar activeLink="Home" />
                            <Row>
                                <Col >
                                    <Card className='dashboradfree-card-top'>
                                        <div className='dashboradfree-card-top-div'>
                                            <button style={{ marginLeft: '40px' }} className='freedashboard-create' onClick={handleShow}>Create Portfoilo</button>
                                            <img style={{ zIndex: 1000 }} src={bookbag} alt="" className='freedashboard-top-img' />
                                            <p style={{ fontSize: '20px' }}><b>Showcase your best works and achievements</b></p>
                                        </div>
                                    </Card>
                                </Col>
                            </Row>
                            <Row className='mt-5'>

                                <Col sm={6} xs={6} className='pb-3'>
                                    <Card style={{ backgroundColor: "#efefef", borderStyle: 'none' }}>
                                        <center>
                                            <img src={topcard2} alt="" className='mt-4' height={40} />
                                        </center>
                                        <Row className='mt-3 mb-3 pb-1'>
                                            <Col>
                                                <div className="card-no-top ">96</div>
                                            </Col>
                                            <Col>
                                                <div className='top-dashpro'>
                                                    <span style={{ color: "#008080" }}><b>Projects</b></span><br />
                                                    <span className='thismonths' style={{ color: "#008080" }} >9 this months</span>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card>
                                </Col>
                                <Col sm={6} xs={6}>
                                    <Card style={{ backgroundColor: "#efefef", borderStyle: 'none' }}>
                                        <center>
                                            <img src={topcard3} alt="" className='mt-4' height={40} />
                                        </center>
                                        <Row className='mt-3 mb-3 pb-1'>
                                            <Col>
                                                <div className="card-no-top ">196</div>
                                            </Col>
                                            <Col>
                                                <div className='top-dashpro '>
                                                    <span style={{ color: "#008080" }} className='big'><b>Portfolios</b></span><br />
                                                    <span style={{ color: "#008080" }} className='thismonths'>32 this months</span>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card>
                                </Col>

                            </Row>


                            <Row>
                                <Col className='freedash-project'>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: 'none' }}>
                                        <p style={{ fontSize: '16px', color: 'black' }} className='mt-2 mb-1'>Latest Project:</p>

                                        <p className='mt-2 mb-1'>Explore all</p>

                                    </div>


                                    <div style={{ border: '2px solid lightgrey' }}>

                                        <div style={{ border: '2px solid lightgrey' }} className="latest-project-free">
                                            <span className='m-2 small'>INR 2000 - 5000 / Lump - Sum</span>
                                        </div>
                                        <p style={{ fontSize: '18px' }} className='m-2'>Chandan</p>
                                        <span style={{ fontSize: '14px' }} className='small'> Graphic Designer for brand identity</span>

                                    </div>
                                    <div style={{ border: '2px solid lightgrey' }}>

                                        <div className="latest-project-free">
                                            <span className='m-2 small'>INR 2000 - 5000 / Lump - Sum</span>
                                        </div>
                                        <p style={{ fontSize: '18px' }} className='m-2'>Chandan</p>
                                        <span style={{ fontSize: '14px' }} className=' small'> Graphic Designer for brand identity</span>

                                    </div>
                                    <div style={{ border: '2px solid lightgrey' }}>

                                        <div className="latest-project-free">
                                            <span className='m-2 small'>INR 2000 - 5000 / Lump - Sum</span>
                                        </div>
                                        <p style={{ fontSize: '18px' }} className='m-2'>Chandan</p>
                                        <span style={{ fontSize: '14px' }} className=' small'> Graphic Designer for brand identity</span>

                                    </div>
                                    <div style={{ border: '2px solid lightgrey' }}>

                                        <div className="latest-project-free">
                                            <span className='m-2 small'>INR 2000 - 5000 / Lump - Sum</span>
                                        </div>
                                        <p style={{ fontSize: '18px' }} className='m-2'>Chandan</p>
                                        <span style={{ fontSize: '14px' }} className=' small'> Graphic Designer for brand identity</span>

                                    </div>
                                </Col>
                                <Col className='freedash-project'>
                                    {/* <p className='mt-2'>Latest Questions:</p> */}
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: 'none' }}>
                                        <p style={{ fontSize: '16px', color: 'black' }} className='mt-2 mb-1'>Latest Questions:</p>

                                        <p className='mt-2 mb-1'>Explore all</p>

                                    </div>
                                    <div style={{ backgroundColor: 'ButtonHighlight' }} >

                                        <div style={{ paddingRight: '30px', border: '2px solid lightgrey' }} className="latest-question-free ">
                                            <span className='m-2'>60</span>
                                        </div>
                                        <p style={{ fontSize: '17px', marginLeft: '10px' }} className='mt-2 mb-0'>Gunagya Innovations - <span>Nutritionist</span></p>
                                        <hr style={{ color: 'lightgrey', marginTop: '0px', marginBottom: '0px' }} />
                                        <p style={{ fontSize: '13px', color: 'grey' }} className='m-1 small'> What are best signs of having a metabolism and what are <span style={{ color: 'black', fontSize: '10' }}>1 hour ago </span> </p>

                                    </div>
                                    <div style={{ backgroundColor: 'ButtonHighlight' }} >

                                        <div style={{ paddingRight: '30px' }} className="latest-question-free ">
                                            <span className='m-2'>3</span>
                                        </div>
                                        <p style={{ fontSize: '18px' }} className='m-2'>chandan</p>
                                        {/* <hr style={{color:'lightgrey'}} /> */}
                                        <hr style={{ color: 'lightgrey', marginTop: '0px', marginBottom: '0px' }} />
                                        <p style={{ fontSize: '14px', color: 'grey' }} className='m-1'> Graphic Designer for brand identity</p>

                                    </div>
                                    <div style={{ paddingRight: '30px', backgroundColor: 'ButtonHighlight', border: '2px solid lightgrey' }}>

                                        <div className="latest-question-free ">
                                            <span className='m-2'>12</span>
                                        </div>
                                        <p style={{ fontSize: '18px' }} className='m-2'>chandan</p>
                                        {/* <hr style={{color:'lightgrey'}} /> */}
                                        <hr style={{ color: 'lightgrey', marginTop: '0px', marginBottom: '0px' }} />
                                        <p style={{ fontSize: '14px', color: 'grey' }} className='m-1'> Graphic Designer for brand identity</p>

                                    </div>
                                    <div style={{ paddingRight: '30px', backgroundColor: 'ButtonHighlight', border: '2px solid lightgrey' }}>

                                        <div className="latest-question-free ">
                                            <span className='m-2'>39</span>
                                        </div>
                                        <p style={{ fontSize: '18px' }} className='m-2'>chandan</p>
                                        {/* <hr style={{color:'lightgrey'}} /> */}
                                        <hr style={{ color: 'lightgrey', marginTop: '0px', marginBottom: '0px' }} />
                                        <p style={{ fontSize: '14px', color: 'grey' }} className='m-1'> Graphic Designer for brand identity</p>

                                    </div>
                                </Col>

                            </Row>
                            <Row>

                                <Col>
                                    <Card className='m-2 lastcard-free' >
                                        <div className='last-card-freedash' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'centere' }}>
                                            <p style={{ fontSize: '18px', fontWeight: 500, padding: '8px', paddingLeft: '30px' }} className='last-card-freedash-1 m-2'>Remaining monthly credits - 2 / 5</p>

                                            <center>
                                                <button style={{ padding: '5px', paddingLeft: '20px', paddingRight: '20px' }} className="freedashboard-create last-card-freedash-3">Upgrade</button>
                                            </center>

                                            <p style={{ fontSize: '18px', fontWeight: 500, padding: '5px', paddingRight: '30px' }} className='last-card-freedash-2 m-2'>Current Package - <span style={{ color: 'bisque' }} >Basic Plan </span> </p>
                                        </div>
                                    </Card>

                                </Col>

                            </Row>
                        </Container>
                    </Col>
                </Row>
                <Modal show={show} onHide={handleClose}
                    {...props}
                    
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >

                    <Modal.Body>
                        <div>
                            <Container>
                                <form onSubmit={handleSubmit}>
                                <Row>
                                    <Col sm={12}>
                                       
                                        <center>
                                        <div onClick={handleimageClick} className=''  >
                                            {selectedImage ? <img src={selectedImage} className='mt-4' alt="" style={{ height: "40vh", width: '42vh', }}  /> :
                                                <img src={topcard4} alt="" className='mt-4' name style={{ height: "42vh", width: '42vh', }} />

                                            }
                                            
                                            <input type="file" accept="image/*" onChange={handleInputChange}
                                                name='files' style={{ display: 'none' }} ref={inputRef} />

                                        </div>
                                    </center>
                                    

                                    </Col>
                                    </Row>
                                    <Row className='' >
                                      

                                    <Col sm={6}>
                                        
                                        <Card className='mt-4'>
                                            <Form.Control as="textarea" rows={3} placeholder="Enter Portfolio Description"
                                                name='description' />
                                        </Card> 
                                    </Col>
                                    <Col sm={6}>
                                               
                                                <select name='subCategoryId' style={{ height: '35px', width: '100%', border: '1px solid lightgrey', borderRadius: '8px' }}   className='mt-4'>
                                        {allCity && allCity.map((quallist) =>
                                        <option value={quallist.GradeID}>{quallist.GradeName}</option>
                                        
                                        )}
                                    </select>
                                    <button className=' mt-2' 
                                    style={{backgroundColor:'#008080',color:'#fff',textAlign:"center",borderRadius:"8px",height:"40px",width:'100%',borderStyle:'none'}}
                                    >  Upload </button>
                                            </Col>
                                </Row>
                                </form>
                               
                            </Container>
                        </div>
                    </Modal.Body>

                </Modal>
            </Container>


            <Container fluid className='dashboard-conatiner-top d-block d-sm-none'>

                <Row>
                    <Topnavbar />

                    <Col xs={12}>

                        <Card style={{ marginTop: '80px' }} className='dashboradfree-card-top  '>
                            <div className='dashboradfree-card-top-div'>
                                <p style={{ marginLeft: '10px' }} onClick={handleShow}>Create Portfoilo</p>

                                <img style={{ zIndex: 1000, marginRight: '10px', marginTop: '15px' }} src={bookbag} alt="" className='freedashboard-top-img' />

                            </div>
                            <p style={{ marginLeft: '15px', color: 'white', fontSize: '14px' }} >Showcase your best works and achievements</p>
                        </Card>
                    </Col>
                </Row>

                <Row className='mt-5'>

                    <Col sm={6} xs={6} className='pb-3'>
                        <Card style={{ backgroundColor: "#efefef", borderStyle: 'none' }}>
                            <center>
                                <img src={topcard2} alt="" className='mt-4' height={40} />
                            </center>
                            <center>
                                <p className='mt-3' style={{ color: "#008080", fontSize: '18px' }}><b>Projects</b></p>
                                <p style={{ margin: '0px', color: '#008080', fontSize: '18px' }} > <b>96 </b> </p>

                                <button style={{ color: "#fff", backgroundColor: '#008080', borderRadius: '8px', border: 'none', marginBottom: '20px', marginTop: '20px', paddingLeft: '10px', paddingRight: '10px' }} >9 this months</button>
                            </center>

                        </Card>
                    </Col>


                    <Col sm={6} xs={6} className='pb-3'>
                        <Card style={{ backgroundColor: "#efefef", borderStyle: 'none' }}>
                            <center>
                                <img src={topcard3} alt="" className='mt-4' height={40} />
                            </center>
                            <center>
                                <p className='mt-3' style={{ color: "#008080", fontSize: '18px' }}><b>Portfolios</b></p>

                                <p style={{ margin: '0px', color: '#008080', marginBottom: '20px', fontSize: '18px' }} > <b>32</b> </p>
                                <button style={{ color: "#fff", backgroundColor: '#008080', borderRadius: '8px', border: 'none', marginBottom: '20px', paddingLeft: '10px', paddingRight: '10px' }} >32 this months</button>
                            </center>

                        </Card>
                    </Col>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: 'none',padding:'0px 20px' }}>
                        <p style={{ fontSize: '18px', color: 'black' }} className='mt-2 mb-1'> <u> Latest Project: </u>  </p>

                        <p className='mt-2 mb-1' style={{ color: 'grey', fontSize: '16px' }}>Explore all</p>

                    </div>

                    <div>

                        <Card style={{ padding: '10px', borderRadius: '20px', border: 'none' ,boxShadow: '0px 0px 10px 5px rgba(192, 192, 192, 0.5)' }}>

                            <h5> Heading </h5>

                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                                <p style={{ fontSize: '15px' }}>
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Nisi aspernatur eligendi.
                                </p>
                                <span style={{ float: 'right' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="green" class="bi bi-dot" viewBox="0 0 16 16">
                                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                                    </svg>
                                </span>
                            </div>


                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <p style={{ color: 'grey' }}>$200-$350</p>
                                <p style={{ color: 'grey' }}> <svg style={{ color: 'grey' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stopwatch" viewBox="0 0 16 16">
                                    <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z" />
                                    <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z" />
                                </svg> 22-10-2001</p>
                            </div>

                        </Card>

                    </div>




                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: 'none',padding:'0px 20px' }}>
                        <p style={{ fontSize: '18px', color: 'black' }} className='mt-2 mb-1'> <u> Latest Questions: </u>  </p>

                        <p className='mt-2 mb-1' style={{ color: 'grey', fontSize: '16px' }}>Explore all</p>

                    </div>


                    <div>
                        <Card style={{ padding: '10px', borderRadius: '20px', border: 'none',  boxShadow: '0px 0px 10px 5px rgba(192, 192, 192, 0.5)' }}>

                            <h5> Heading </h5>

                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                                <p style={{ fontSize: '15px' }}>
                                    Lorem ipsum dolor, sit amet consectetur
                                    adipisicing elit. Nisi aspernatur eligendi.
                                </p>
                                <span style={{ float: 'right' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="green" class="bi bi-dot" viewBox="0 0 16 16">
                                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                                    </svg>
                                </span>
                            </div>


                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <p style={{ color: 'grey' }}>$200-$350</p>
                                <p style={{ color: 'grey' }}> <svg style={{ color: 'grey' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stopwatch" viewBox="0 0 16 16">
                                    <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z" />
                                    <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z" />
                                </svg> 22-10-2001</p>
                            </div>

                        </Card>
                    </div>


                </Row>



                <Row>

                    <Col>
                        <Card style={{ marginBottom: '80px' }} className='mt-4  lastcard-free' >
                            <div className='last-card-freedash' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'centere' }}>

                                <p style={{ fontSize: '18px', fontWeight: 500, padding: '5px', paddingRight: '30px' }} className='last-card-freedash-2 m-2'>Current Package - <span style={{ color: 'bisque' }} >Basic Plan </span> </p>
                                <p style={{ fontSize: '14px', fontWeight: 500, padding: '8px', paddingLeft: '10px', backgroundColor: 'white', color: 'black', margin: '50px', border: 'none', borderRadius: '8px' }} className='last-card-freedash-1 m-2'> <center> Remaining Monthly credits  </center>  <b style={{ fontSize: '15px' }}> <center> 2 / 5 </center>   </b>   </p>

                                {/* <center>
                                    <button style={{ padding: '5px', paddingLeft: '20px', paddingRight: '20px' }} className="freedashboard-create last-card-freedash-3">Upgrade</button>
                                </center> */}


                            </div>
                        </Card>

                    </Col>

                </Row>




            </Container >


            <Phoneviewfooter />



        </>
    );
};

export default Freelancerdashboard;