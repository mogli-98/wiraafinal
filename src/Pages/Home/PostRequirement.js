import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import "../../Aseset/css/postrequirement.css"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import WiraaLogo from '../../Aseset/image/Wiraalogo.png';
import { Link } from 'react-router-dom';
function PostRequirement() {
    return (
        <>
            <Container  >
                <Row className=''>
                    <Col sm={3}>
                        <Link to="/"><img src={WiraaLogo} alt="" className='mt-5 ' /></Link>

                    </Col>
                    <Col sm={9} className='PostRequirement-top border-top-0'>
                        <div className='square border border-top-0'>
                            <Card className='d-block d-sm-none mt-4 mb-2 shadow p-3 mb-5 bg-white rounded'>
                                <div className="mt-2 mb-2">
                                    <Link to="/"><ion-icon name="chevron-back-outline"></ion-icon></Link>
                                    <span> Post a Request</span>
                                </div>
                            </Card>
                            </div>
                            <div className="mt-5 mb-4 d-none d-sm-block">
                            <Link to="/"><ion-icon name="chevron-back-outline"></ion-icon></Link>
                                    <span> Post a Request</span>
                                </div>
                        
                    </Col>

                </Row>
                <Row >
                    <Col sm={3} className='PostRequirement2 d-none d-sm-block'>

                        <div className='container-left mt-5'>
                           <Link to='/Account/login'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-right-circle container-left-first " viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                                </svg><span className='container-left-first-span'> <b>Login</b></span>
                           </Link><br />

                            <Link to='/Account/singup'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-plus container-left-second" viewBox="0 0 16 16">
                                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                    <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                                </svg><span className='container-left-first-span'>  <b>Singup</b></span>
                            </Link>
                        </div>
                        <br />

                        <div className='container-search'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-search mt-5" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                            <h6 className=' ' style={{ color: "#008080" }}>Let the match <br /> being...</h6>.

                            <p className=''> Post a request and start
                                <br /> conversation with <br />
                                professionals</p>

                        </div>

                    </Col>
                    <Col sm={6} className="PostRequriment3">
                        <div className='middle-container border'>
                            <h4 className='text-center m-2'><b>Find talent your way</b></h4>
                            <Form className='m-4'>
                                <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Project Title: <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="red" className="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg></Form.Label>
                                    <Form.Control type="email" placeholder="I am looking for...." />
                                </Form.Group>
                                <Form.Group className="mb-2 mt-4" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Project description <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="red" className="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg></Form.Label>
                                    <Form.Control as="textarea" rows={3} placeholder="Our requriments are...." />
                                </Form.Group>
                                <Form.Group className="mb-3 mt-4" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Choose a category:<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="red" className="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg></Form.Label>
                                    <Row>
                                        <Col sm={6} className="mb-4" >

                                            <select name="cars" id="cars" style={{
                                                width: "-webkit-fill-available"
                                                , height: "40px"
                                            }}>
                                                <option value="Business">Category</option>
                                                <option value="IT">IT</option>
                                                <option value="Marketing">Marketing</option>
                                                <option value="Lifestyle">Lifestyle</option>
                                            </select>
                                        </Col>
                                        <Col sm={6} >

                                            <select name="cars" id="cars" style={{
                                                width: "-webkit-fill-available"
                                                , height: "40px"
                                            }}>
                                                <option value="Business"> Sub - Category</option>
                                                <option value="IT">IT</option>
                                                <option value="Marketing">Marketing</option>
                                                <option value="Lifestyle">Lifestyle</option>
                                            </select>
                                        </Col>
                                    </Row>
                                    <Row className='mt-4'>
                                        <Col sm={12}>

                                            <select name="cars" id="cars" style={{
                                                width: "-webkit-fill-available"
                                                , height: "40px"
                                            }}>
                                                <option value="Business">Business</option>
                                                <option value="IT">IT</option>
                                                <option value="Marketing">Marketing</option>
                                                <option value="Lifestyle">Lifestyle</option>
                                            </select>
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Form.Group className="mb-3 mt-4" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Best way for us to reach you?<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="red" className="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg></Form.Label>
                                    <Row>
                                        <Col sm={6} className="mb-4">
                                            <select name="cars" id="cars" style={{
                                                width: "-webkit-fill-available"
                                                , height: "35px"
                                            }}>
                                                <option value="Business">Country</option>
                                                <option value="IT">IT</option>
                                                <option value="Marketing">Marketing</option>
                                                <option value="Lifestyle">Lifestyle</option>
                                            </select>
                                        </Col>
                                        <Col sm={6}>
                                            <Form.Control type="email" placeholder="Phone Number" />
                                        </Col>
                                    </Row>

                                </Form.Group>
                                <Form.Group className="mb-3 mt-4" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Preferred project budget <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="red" className="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg></Form.Label>
                                    <Row>
                                        <Col sm={2} className="mb-3">

                                            <select name="cars" id="cars" style={{
                                                width: "-webkit-fill-available"
                                                , height: "40px"
                                            }}>
                                                <option value="Business">INR</option>
                                                <option value="IT">IT</option>
                                                <option value="Marketing">Marketing</option>
                                                <option value="Lifestyle">Lifestyle</option>
                                            </select>
                                        </Col>
                                        <Col sm={3} >
                                            <input type="text" placeholder='e.g 10000'
                                                style={{
                                                    width: "-webkit-fill-available"
                                                    , height: "40px"
                                                }}
                                            />
                                        </Col>
                                        <Col><p className='mt-2 text-center'><b>to</b></p></Col>
                                        <Col sm={3} className="mb-3">
                                            <input type="text" placeholder='e.g 20,000' style={{
                                                width: "-webkit-fill-available"
                                                , height: "40px"
                                            }} /></Col>
                                        <Col sm={3}>

                                            <select name="cars" id="cars" style={{
                                                width: "-webkit-fill-available"
                                                , height: "40px"
                                            }}>
                                                <option value="Business">Per Hour</option>
                                                <option value="IT">IT</option>
                                                <option value="Marketing">Marketing</option>
                                                <option value="Lifestyle">Lifestyle</option>
                                            </select>
                                        </Col>
                                    </Row>

                                </Form.Group>
                                <Form.Group className="mb-3 mt-5" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label className='mb-4'>Project Duration: *</Form.Label>
                                    <Row>
                                        <Col >
                                            <table style={{ width: "100%" }} className="table1">
                                                <tr>
                                                    <td className='tbl'><div className="box m-2">Less than 1 month</div></td>
                                                    <td><div className="box m-2">1 - 3 months</div></td>
                                                    <td> <div className="box m-2">3 - 6 months</div></td>
                                                    <td> <div className="box m-2">More than 6 months</div></td>
                                                </tr>
                                            </table>
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Form.Group className="mb-3 mt-5" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label className='mb-4'>Project Duration: *</Form.Label>
                                    <Row>
                                        <Col >
                                            <table style={{ width: "100%" }} className="table1 ">
                                                <tr>
                                                    <td className='tbl'><div className="box m-2">Immediate</div></td>
                                                    <td className='tbl'><div className="box m-2">1 Week </div></td>
                                                    <td className='tbl'> <div className="box m-2">2 week </div></td>
                                                    <td className='tbl'> <div className="box m-2">1 month</div></td>
                                                </tr>
                                            </table>
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Form.Group className="mb-3 mt-4" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Choose a category: *</Form.Label>
                                    <Row>
                                        <Col sm={6}>

                                            <select name="cars" id="cars" style={{
                                                width: "-webkit-fill-available"
                                                , height: "40px"
                                            }}>
                                                <option value="Business">Business</option>
                                                <option value="IT">IT</option>
                                                <option value="Marketing">Marketing</option>
                                                <option value="Lifestyle">Lifestyle</option>
                                            </select>
                                        </Col>
                                        <Col sm={6}>

                                            <select name="cars" id="cars" style={{
                                                width: "-webkit-fill-available"
                                                , height: "40px"
                                            }}>
                                                <option value="Business">Business</option>
                                                <option value="IT">IT</option>
                                                <option value="Marketing">Marketing</option>
                                                <option value="Lifestyle">Lifestyle</option>
                                            </select>
                                        </Col>
                                    </Row>

                                </Form.Group>

                                <Form.Group className="mb-3 mt-5" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label className='mb-4'>Type of project*</Form.Label>



                                </Form.Group>
                            </Form>
                        </div>
                    </Col>
                    <Col sm={3} className='PostRequirement4' >
                        <Card style={{ background: "#efefef " }} className="PostRequirem ">
                            <p className='text-center mt-3'><b>Contact Information</b></p>
                            <p className='m-2'>Name: <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" fill="red" class="bi bi-star-fill" viewBox="0 0 16 16">
                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg></p>
                            <InputGroup className="mb-3">

                                <Form.Control aria-label="First name" className='m-2 rounded' placeholder='Frist Name' st />
                                <Form.Control aria-label="Last name" className='m-2 rounded' placeholder='Last Name' />
                            </InputGroup>

                            <p className='m-2'>Verification:</p>
                            <InputGroup className="mb-3">
                                <Form.Control
                                    placeholder='Phone No. /Email ID'
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <Button variant="outline-secondary" id="button-addon2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cursor-fill" viewBox="0 0 16 16">
                                        <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
                                    </svg>
                                </Button>
                            </InputGroup>
                            <Container>
                                <Row className='mt-2 mb-4'>
                                    <Col ><button className=' password2' style={{ width: "-webkit-fill-available" }}>  Enter OTP</button></Col>
                                    <Col ><button className=' password' style={{ width: "-webkit-fill-available" }} >Verify</button>
                                    </Col>
                                </Row>
                            </Container>
                        </Card>
                        <span>About</span> <span>Career</span> <span>Term of services</span>
                        <span>Conatct</span> <span>FAQ</span> <span>Blog</span>
                        <span>Privacy policy</span> <span>@2022 Wiraa. All Rights Reserved</span>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default PostRequirement