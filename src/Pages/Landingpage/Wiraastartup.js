import React from 'react';
import '../../asset/css/Wiraastartup.css'; 
import { Container, Row, Col, Button ,Modal} from 'react-bootstrap'; 
import Startupimg1 from '../../asset/css/startupimg/wiraastartup1.png';
import Startupimg2 from '../../asset/css/startupimg/wiraastartup5.png';
import Startupimg3 from '../../asset/css/startupimg/wiraastartup4.png';
import Startupimg4 from '../../asset/css/startupimg/wiraastartup3.png';
import Startupimg5 from '../../asset/css/startupimg/wiraastartup2.png';
import Navbar from '../../Layout/Header';

import Accountfootor from '../../Layout/Accountfooter';
import { useState } from 'react';
import { TextField } from '@mui/material';
import Settingupdate from '../../Model/setting.model';
import { helper } from '../../lib/helper';

function WiraaStartup() {
        const [isVisible, setIsVisible] = useState(false);

    const handleButtonClick = () => {
        // Toggle the visibility state when the button is clicked
        setIsVisible(!isVisible);
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth', // Add smooth scrolling animation
        });
    };

    const [formData, setFormData] = useState({
        startupName : '',
        country : '',
        email : '',
        phoneNo : '',
        description : '',
      
    });
    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
       
        
    };
    const handleSubmit = (event) => {
        console.log(122)
        event.preventDefault();
        const form = new FormData(event.target);
        Settingupdate.addStartup(form).then((response) => {
                console.log(response.data, "yes data update");
                helper.sweetalert.toast("StartUp add Sucessfully")
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
   <div style={{backgroundColor:'white'}}>     
   <div className="page">
                <Navbar />
                <Container>
                    <Row>
                        <Col md={6}>
                            <div className="text-content">
                                <h1 className='wiraastartup_h1' >IT Solutions for Startups</h1>
                                <h3 className='wiraastartup_h3' >Launch <span style={{ color: '#008080' }}>3X </span> faster and cheaper with Wiraa Assured</h3>
                                <p className='wiraastartup_p'>Wiraa Assured is aimed at helping young companies translate their disruptive ideas into market-ready software products. </p>
                                <Button className='wiraastartup_btn'
                                  onClick={handleShow}
                                >Start building</Button>


                            </div>
                        </Col>
                        <Col md={6}>
                            <div className="image-content">
                                <img className='wiraastartup_img1' src={Startupimg1} alt="My " />

                            </div>
                        </Col>
                    </Row>

                    <section className=''>
                        <Container fluid >
                            <Row className='pt-5 pb-5'>
                                <Col>
                                    <h1 className='text-center wiraastartup_h1' style={{ fontSize: '37px' }}>Grow your business with robust infrastructure </h1>
                                </Col>
                            </Row>
                            <Row className='pt-5 pb-5 hiresmart'>
                                <Col sm={4}

                                >
                                    <img style={{ height: '150px', width: '150px' }} src={Startupimg2} alt="" className='card-img1' />
                                    <h4 className='text-center mt-5' style={{ fontSize: '30px' }}>Plan Your build</h4>
                                    <p className='text-center' style={{ marginTop: '30px', width: '350px', marginLeft: '25px', fontSize: '25px', color: 'grey', textAlign: 'left', padding: '10px 40px' }}>Start by finalizing and desigining your detailed build plan at a fixed cost </p>
                                </Col>
                                <Col sm={4}>
                                    <img style={{ height: '150px', width: '150px' }} src={Startupimg3} alt="" className='card-img1' />


                                    <h4 className='text-center mt-5' style={{ fontSize: '30px' }} >90-days MVP</h4>
                                    <p className='text-center' style={{ marginTop: '30px', width: '380px', marginLeft: '25px', fontSize: '25px', color: 'grey', textAlign: 'left', padding: '10px 40px' }}>Get a custom quote to turn your build plan into a live MVP within 90 days</p>
                                </Col>
                                <Col sm={4}>
                                    <img style={{ height: '150px', width: '150px' }} src={Startupimg4} alt="" className='card-img1' />
                                    <h4 className='text-center mt-5' style={{ fontSize: '30px' }}>Wiraa Care</h4>
                                    <p className='text-center' style={{ marginTop: '30px', width: '380px', marginLeft: '25px', fontSize: '25px', color: 'grey', textAlign: 'left', padding: '10px 40px' }}>Fixed monthly subscription ensures continued growth after your MVP is delivered</p>
                                </Col>
                            </Row>
                        </Container>
                    </section>


                    <section className=''>
                        <Container fluid >
                            <Row className=''>
                                <Col>
                                    <h1 className='text-center wiraastartup_h1' style={{ fontSize: '37px' }}>Keep growing with Wira Care </h1>

                                </Col>
                            </Row>
                            <Row className='hiresmarts'>


                                <Col sm={6} style={{ padding: '0' }}
                                >
                                    <p className='startup-h6'>App development isn't a one-end-done engegement.</p>
                                    <p className='startups-h6 '>Wiraa Care is a fixed-price add-on plan that ensure your app <br /> keeps getting better and works well once your MVp is delivered. </p>

                                    <Row>
                                        <Col className='extra_content' sm={12} >

                                            <p className='startup_p'>Wiraa Care Benefits</p>
                                            <li style={{ fontSize: '18px', marginTop: '25px' }}><span style={{ fontSize: "20px", fontWeight: 600 }}>Keep you Team:</span>       <span   >Keep a team in place once your MVP in finished </span>   </li>
                                            <li style={{ fontSize: '18px', marginTop: '25px' }}> <span style={{ fontSize: "20px", fontWeight: 600 }}>Predictable Growth:</span> <span  >Fixed monthly resource allocation for new features.</span>  </li>
                                            <li style={{ fontSize: '18px', marginTop: '25px' }}>  <span style={{ fontSize: "20px", fontWeight: 600 }}>Quick Fixes:</span>       <span  > Quickly fix any bugs or downtime problems.</span> </li>
                                            <li style={{ fontSize: '18px', marginTop: '25px' }}><span style={{ fontSize: "20px", fontWeight: 600 }}> Handle More Users:</span>  <span  >On-call support for sudden usage increases</span> </li>
                                            <li style={{ fontSize: '18px', marginTop: '25px', marginBottom: '20px' }}><span style={{ fontSize: "20px", fontWeight: 600 }}>stay Updated:</span>        <span  >Regular upgrades to libraries and third-party dependencies</span>   </li>


                                        </Col>
                                    </Row>

                                </Col>
                                <Col sm={6}>
                                    <div className="imagecontent">
                                        <img className='startupimg' src={Startupimg5} alt="" />
                                    </div>
                                </Col>

                            </Row>
                        </Container>
                    </section>
                </Container>


                 <Modal show={show} onHide={handleClose} animation={false} >
                    <Modal.Header closeButton>
                        <Modal.Title >Startup Details</Modal.Title>

                    </Modal.Header>
                  
                    <Container>
                    <form onSubmit={handleSubmit}> 
                        <Row style={{ marginTop: '20px' }}>
                            <Col >
                                <TextField fullWidth id="outlined-basic" label="Name" placeholder='Name' size='small' variant="outlined" name='startupName' onChange={handleInputChange} required />
                            </Col>
                        </Row>
                        <Row style={{ marginTop: '20px' }}>
                            <Col >                               
                                <TextField fullWidth id="outlined-basic"label="Country" placeholder='Country' size='small' variant="outlined" name='country' onChange={handleInputChange} required/>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: '20px' }}>
                            <Col >
                                <TextField fullWidth id="outlined-basic" label="Email ID" type='email' placeholder='Email ID' size='small' variant="outlined" name='email' onChange={handleInputChange} required />
                            </Col>
                        </Row>
                        <Row style={{ marginTop: '20px' }}>
                            <Col >
                                <TextField fullWidth id="outlined-basic" label="Mobile No." type='number' placeholder='Mobile NO.' size='small' variant="outlined" name='phoneNo' onChange={handleInputChange} required />                            </Col>
                        </Row>
                        <Row style={{ marginTop: '20px',marginBottom:'20px' }}>
                            <Col >
                                 <TextField fullWidth id="outlined-basic" label="Enter Note..." type='text' placeholder='Enter Note ' size='small' variant="outlined" name='description' onChange={handleInputChange} required />
                            </Col>
                        </Row>
                        <Button style={{ backgroundColor: '#008080', border: 'none' }} type='submit'>
                            Submit
                        </Button>
                        </form>
                    </Container>
                  
                
                    <Modal.Footer>
                        
                    </Modal.Footer>
                
                </Modal>
            </div>
            <Accountfootor />
            </div>       
        </>
    );
}

export default WiraaStartup;
