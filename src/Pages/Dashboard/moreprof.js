import React  from 'react';
import {Container,  Row, Col, Card } from "react-bootstrap";
import Sidenav from './layout/Sidenav';
import Topnav from './layout/topnav';
import bookbulb from '../../Aseset/image/bookbulb.png'


function Moreprof() {
    
    return (
        <>
           <Container fluid className='dashboard-conatiner-top' >
                <Row>
                    <Col sm={1} xs={2} className=''>
                        <Sidenav />
                    </Col>


                    <Col sm={8} xs={10} className='dashboard-conatiner-top-row square border-start square border-end'>
                        <Container  >
                            <Topnav />
                            <Row >
                                <Col sm={8} >
                                    <Container className='moreprof'>
                                        <Row className='square border-end'>
                                        <p className='mt-4 mb-4'><b>Select your expertise</b></p> 
                                            <Col>
                                                <Card style={{backgroundColor:"Lightgrey",borderColor:"black"}}>
                                                    <p>Bussines</p>
                                                </Card>
                                            </Col>
                                            <Col>
                                                <Card style={{borderColor:"black"}}>
                                                    <p>Creative</p>
                                                </Card>
                                            </Col>
                                            <Col>
                                            <Card style={{borderColor:"black"}}>
                                                    <p>Engineering</p>
                                                </Card>
                                            </Col>
                                            <Col>
                                            <Card style={{borderColor:"black"}}>
                                                    <p>IT</p>
                                                </Card>
                                            </Col>
                                        </Row>
                                        <Row className=' square border-end'>
                                        <Col className='mt-3'>
                                        <Card style={{borderColor:"black"}}>
                                                    <p>Lifestyle</p>
                                                </Card>
                                            </Col>
                                            <Col className='mt-3'>
                                            <Card style={{borderColor:"black"}}>
                                                    <p>Marketing</p>
                                                </Card>
                                            </Col>
                                            <Col className='mt-3'>
                                            <Card style={{borderColor:"black"}}>
                                                    <p>Study</p>
                                                </Card>
                                            </Col>
                                            <Col className='mt-3'>
                                            <Card style={{borderColor:"black"}}>
                                                    <p>Writing</p>
                                                </Card>
                                            </Col>
                                        </Row>
                                        <hr className='mt-5' />
                                        <Row >
                                            <Col className='mt-5 pt-3'>
                                                <Card style={{background:"#efefef",borderColor:"black"}}>
                                                    <p>Accounting & Finance</p>
                                                </Card>
                                            </Col>
                                            <Col className='mt-5 pt-3'>
                                            <Card style={{background:"#efefef",borderColor:"black"}}>
                                                    <p>Bussiness Consulting</p>
                                                </Card>
                                            </Col>
                                            <Col className='mt-5 pt-3'>
                                            <Card style={{borderColor:"black"}}>
                                                    <p>Customer Support</p>
                                                </Card>
                                            </Col>
                                        </Row>
                                        <Row className=''>
                                        <Col className='pt-4'>
                                        <Card style={{borderColor:"black"}}>
                                                    <p> Yoga</p>
                                                </Card>
                                            </Col>
                                            <Col className='pt-4'>
                                            <Card style={{borderColor:"black"}}>
                                                    <p> Sport</p>
                                                </Card>
                                            </Col>
                                            <Col className=' pt-4'>
                                            <Card style={{borderColor:"black"}}>
                                                    <p> Dance</p>
                                                </Card>
                                            </Col>
                                            <Col className=' pt-4'>
                                            <Card style={{borderColor:"black"}}>
                                                    <p> Fitness</p>
                                                </Card>
                                            </Col>
                                        </Row>
                                        <center><button  className='moreprof-submit'>Submit</button></center>
                                    </Container>
                                   
                                </Col>
                               <Col sm={4} >
                                    <div style={{backgroundColor:'#efefef'}} className="moreprof-advance"> 
                                        <center>
                                            <img src={bookbulb} alt=""  className='mt-5 mb-3'/>
                                            <h2>Advance</h2>
                                            <h2>Freelancing</h2>
                                            <h2>Course</h2>
                                            <p>Polish your skill and expand</p>
                                            <p>your knowledege base</p>
                                            <button className='moreprof-learn'>Learn</button>
                                        </center>
                                    </div>
                               </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
           </Container>
        </>
    )
}

export default Moreprof