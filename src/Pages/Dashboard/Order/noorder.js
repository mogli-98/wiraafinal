import React from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import Sidenav from '../layout/Sidenav';
import Topnav from '../layout/topnav';
import { Link } from 'react-router-dom';
import Phoneviewfooter from '../../../Layout/Phoneviewfooter';
function Noorder() {

    return (
        <>
            <Container fluid className='dashboard-conatiner-top' >
                <Row>
                    <Col sm={1}  className='d-none d-sm-block'>
                        <Sidenav />
                    </Col>
                    <Col sm={8} xs={12} className='dashboard-conatiner-top-row '>
                        <Container className='square border border-bottom-0'>
                            <Topnav activeLink="Order" />
                            <Row className='mt-5'>
                                <Col sm={1}></Col>
                                <Col sm={10} >
                                    <center>
                                        <Card className='' style={{ borderRadius: "40px", border: "2px solid black", marginTop: "50px",padding:'20px'}}>
                                            <center>
                                                <svg style={{color:'grey'}} xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-clipboard2-check-fill mt-4" viewBox="0 0 16 16">
                                                    <path d="M10 .5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5.5.5 0 0 1-.5.5.5.5 0 0 0-.5.5V2a.5.5 0 0 0 .5.5h5A.5.5 0 0 0 11 2v-.5a.5.5 0 0 0-.5-.5.5.5 0 0 1-.5-.5Z" />
                                                    <path d="M4.085 1H3.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1h-.585c.055.156.085.325.085.5V2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 2v-.5c0-.175.03-.344.085-.5Zm6.769 6.854-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708.708Z" />
                                                </svg>
                                                <h4 className='mb-4 mt-4' style={{ fontFamily: "Helvetica-Bold",fontSize:'25px',fontWeight:600 }}>
                                                    <b>No New Order!</b>
                                                </h4>
                                                <div className='no-order mb-5 mt-2 pt-2'>
                                                    <p><b style={{fontSize:'22px'}}>Connect with qualified professionals</b> <button  className='no-order-button'> <Link style={{color:'#008080'}} to="/Hiretalent">Post a Project</Link></button> </p>
                                                </div>
                                            </center>
                                        </Card>
                                    </center>
                                </Col>
                                <Col sm={1}></Col>
                            </Row>
                        </Container>
                        <Phoneviewfooter/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Noorder;