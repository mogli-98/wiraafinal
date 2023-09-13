import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import image from '../Image/images.jpg';
import { FaBeer, FaFolder,FaAndroid,FaAngleLeft} from "react-icons/fa";




function Content() {
    return (
        <Container>
            <div className="box">
                <Row>
                    <Col sm={4}>
                        

                            
                                <Card.Title> <h2> <b> Orders Messages</b></h2>  </Card.Title>
                                <hr />

                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Button variant="outline-dark">Unread</Button>
                                    <Button variant="dark" style={{ backgroundColor: '#008080', border: 'none' }} >Running</Button>
                                </div>

                                <Card className='mt-5' style={{ borderRadius: "20px",  border: 'none',backgroundColor:"#efefef" , }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }} className='order-details-container'>
                                        <img style={{ borderRadius: "8px", width: '50px', height: '60px' }} src={image} alt="img" className='order-details-img m-3' />
                                        <div className='order-details-container-text' style={{ height: 50, lineHeight: 1 }}>
                                            <h6><b>Chandan Innovation Pvt Ltd</b>  <span> 30 min</span> </h6>


                                            <p>Hello sir, My name is Chandan & I am very...  </p>
                                        </div>

                                    </div>
                                </Card>

                                <Card className='mt-2' style={{ borderRadius: "20px", backgroundColor: "#efefef", border: 'none' }}>

                                    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', border: 'none' }} className='order-details-container'>
                                        <img style={{ borderRadius: "8px", width: '50px', height: '60px' }} src={image} alt="img" className='order-details-img m-3' />
                                        <div className='order-details-container-text' style={{ height: 50, lineHeight: 1 }}>
                                            <h6><b>Chandan Innovation Pvt Ltd</b><span> Nov 5</span> </h6>
                                            <p>Hello sir, My name is Chandan & I am very...  </p>
                                        </div>

                                    </div>
                                </Card>

                                <Card className='mt-2' style={{ borderRadius: "20px", backgroundColor: "#efefef", border: 'none' }}>

                                    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }} className='order-details-container'>
                                        <img style={{ borderRadius: "8px", width: '50px', height: '60px' }} src={image} alt="img" className='order-details-img m-3' />
                                        <div className='order-details-container-text' style={{ height: 50, lineHeight: 1 }}>
                                            <h6><b>Chandan Innovation Pvt Ltd</b> <span>2h</span></h6>
                                            <p>Hello sir, My name is Chandan & I am very proud to be part of your firm  </p>
                                        </div>

                                    </div>
                                </Card>


                            
                        

                    </Col>
                    <Col sm={8}>
                        <div className='box'>

                            {/* <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <Button variant="outline-dark" style={{ marginRight: '10px' }}>Switch Account</Button>
                                <Button variant="dark" style={{ backgroundColor: '#008080', border: 'none' }}>Hire Talents</Button>
                            </div> */}

                            <Card className='mt-1' style={{ borderRadius: "8px", border: 'none', backgroundColor: 'white' }}>

                                <div>
                                    <div style={{ justifyContent: 'start', display: 'flex', padding: '10px', }} className='order-details-container'>

                                        <h4> <img style={{ borderRadius: "50px", width: '50px', height: '50px' }} src={image} alt="img" className='order-details-img m-3' /><b>Chandan Innovation Pvt Ltd</b></h4>
                                        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems:'center',  width: '400px',    }}>

                                            <FaBeer style={{paddingRight:'10px',fontSize:'1.7vmax'}} />
                                            <FaFolder style={{paddingRight:'10px',fontSize:'1.7vmax'}} />
                                            <FaAndroid style={{paddingRight:'10px',fontSize:'1.7vmax'}}/>
                                            <FaAngleLeft style={{paddingRight:'5px',fontSize:'1.7vmax'}}/>
                                        </div>
                                    </div>

                                </div>
                            </Card>

                            <hr />






                            <Card className='mt-4' style={{ display: 'flex', width: '45%', paddingLeft: '10px', borderRadius: "8px", backgroundColor: "#efefef", border: 'none' }}>

                                <div className='order-details-container mt-2'>

                                    <p>Hello sir, My name is nsm & I am very proud to be part of your firm.  </p>

                                </div>
                            </Card>
                            <p className='small' style={{ paddingLeft: '10px' }}> Yesterday 04:35 PM </p>


                            <div className="box">

                                <Card className='mt-2' style={{ position: 'relative', float: 'right',  paddingLeft: '10px',paddingRight:'10px', borderRadius: "8px", backgroundColor: "#008080", color: 'white', border: 'none' }}>

                                    <div className='order-details-container mt-2 '>
                                        <p>Hello sir, My name is JSM & I am very much interested in work. </p>
                                    </div>
                                </Card>
                                <p className='small' style={{
                                    "position": "relative",
                                    "float": "right",
                                    "top": "8vh",
                                    "right": "-29vw"
                                }}> Yesterday 04:50 PM </p>

                            </div>

                        </div>

                    </Col>

                </Row >
            </div>

        </Container >
    );
}

export default Content;

