import React,{useState} from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import Sidenav from './layout/Sidenav';
import Topnav from './layout/topnav';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
function Setting() { 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
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
                            <Row>
                            <Col sm={2}></Col>
                                <Col sm={10}>
                                    <Card className=' mt-5' onClick={handleShow} style={{ backgroundColor: '#D9DDDC', width: "80%",borderColor:"#fff"  }}>
                                        <div className='m-2 setting-text'>
                                            <p className='mt-3'><b>Email Address:</b></p>
                                            <p>Upload Email address of your account
                                            </p>
                                        </div>
                                    </Card>
                                </Col>
                                
                            </Row>
                            <Row>
                            <Col sm={2}></Col>
                                <Col sm={10}>
                                    <Card className='mt-3'onClick={handleShow1} style={{ backgroundColor: '#D9DDDC', width: "80%",borderColor:"#fff"  }}>
                                        <div className='m-2 setting-text'>
                                            <p className='mt-3'><b>Phone Number:</b></p>
                                            <p>Upload Phone number in case you have trouble signing in</p>
                                        </div>
                                    </Card>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col sm={2}></Col>
                                <Col sm={10}>
                                    <Card className='mt-3' onClick={handleShow2} style={{ backgroundColor: '#D9DDDC', width: "80%",borderColor:"#fff"  }}>
                                        <div className='m-2 setting-text'>
                                            <p className='mt-3'><b>Change Password:</b></p>
                                            <p>Choose a strong password that you are not using anywhere</p>
                                        </div>
                                    </Card>
                                </Col>
                                
                            </Row>
                            <Row>
                            <Col sm={2}></Col>
                                <Col sm={10}>
                                    <Card className='mt-3' style={{ backgroundColor: '#D9DDDC', width: "80%" ,borderColor:"#fff" }}>
                                        <div className='m-2 setting-text'>
                                            <p className='mt-3'><b>Block Accounts:</b></p>
                                            <p>When you block someone, that person won’t be able to follow or message you</p>
                                        </div>
                                    </Card>
                                </Col>
                                
                            </Row>
                            <Row>
                                <Col sm={2}></Col>
                                <Col sm={10}>
                                    <Card className='mt-3' style={{ backgroundColor: '#D9DDDC', width: "80%",borderColor:"#fff" }}>
                                        <div className='m-2 setting-text'>
                                            <p className='mt-3'><b>Deactivate Account:</b></p>
                                            <p>Temporarily deactivate your Wiraa account</p>
                                        </div>
                                    </Card>
                                </Col>
                                
                            </Row>
                        </Container>
                    </Col>
                </Row>
            <Modal show={show} onHide={handleClose}>
                            <Modal.Body>
                                <div>
                                    <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Update Email </Form.Label>
                                        <Form.Control  placeholder="Please enter your update Email" />
                                    </Form.Group>
                                    
                                </div>

                            </Modal.Body>

                        </Modal>
                        <Modal show={show1} onHide={handleClose1}>

                            <Modal.Body>
                                <div>
                                    <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Update Phone Number: </Form.Label>
                                        <Form.Control  placeholder="Please enter your update Phone Number" />
                                    </Form.Group>
                                    
                                </div>

                            </Modal.Body>

                        </Modal><Modal show={show2} onHide={handleClose2}>

<Modal.Body>
    <div>
        <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
            <Form.Label>Change Password </Form.Label>
            <Form.Control  placeholder="Change Password" />
        </Form.Group>
        
    </div>

</Modal.Body>

</Modal>
            </Container>
        </>
    )
}

export default Setting;