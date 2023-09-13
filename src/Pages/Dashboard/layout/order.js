import React  from 'react';
import {Container,  Row, Col, Card } from "react-bootstrap";
import Sidenav from './layout/Sidenav';
import Topnav from './layout/topnav';
import Form from 'react-bootstrap/Form';

function Order() {
    
    return (
        <>
           <Container fluid>
                <Row>
                    <Col sm={2} xs={2}>
                        <Sidenav />
                    </Col>
                    <Col sm={1} xs={1}>
                    </Col>
                    <Col xs={9} sm={9} >
                        <Container >
                            <Topnav />
                            <Row className='mt-5'>
                                <Col >
                                    <Card className='m-5' style={{width:"70%",borderRadius:"25px",borderColor:"black"}}>
                                        <center>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-clipboard2-check-fill mt-4" viewBox="0 0 16 16">
                                                <path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5Z"/>
                                                <path d="M4.085 1H3.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1h-.585c.055.156.085.325.085.5V2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 2v-.5c0-.175.03-.344.085-.5Zm6.769 6.854-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708.708Z"/>
                                            </svg>
                                            <h6>
                                                No New Order!
                                            </h6>
                                            <div className='no-order'>
                                                <p><b>Connect with qualified professionals</b> <button className='no-order-button'>Post a request</button> </p> 
                                            </div>
                                        </center>
                                    </Card>
                                </Col>
                               
                            </Row>
                        </Container>
                    </Col>
                </Row>
           </Container>
        </>
    )
}

export default Order