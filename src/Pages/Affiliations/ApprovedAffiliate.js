import './Report.css';
import { Container, Row, Col, Form } from 'react-bootstrap';
import React from 'react';
import './ApprovedAffiliate.css';




function ApprovedAffiliate() {
    return (

        <Container>

            <h3 className='text-center' style={{marginBottom:'50px',fontWeight:'600'}}>Affiliate Details</h3>
            <div className="box10">
                <select name="Month" id="Month" className='month' style={{color:'green',fontWeight:'600',fontSize:'1.2vmax'}} >
                    <option style={{color:'green',fontWeight:'600' }} value="Jan" >Approved</option>
                    <option style={{color:'red'}} value="feb">Not Approved</option>

                </select>

                <div className="box11">
                    Lifetime visitors:23,293
                </div>
                <div className="box12">
                    lifetime revenue Rs.39393
                </div>
                <div className="box13">
                    Download Report
                </div>
                <div className="box14">
                    Download Paouts
                </div>

            </div>


            <Row>
                <Col >
                    <Form.Group className="mb-3" controlId="formBasiclink">
                        <Form.Control style={{backgroundColor:"#efefef"}}  type="text" placeholder="Suresh Srivastav" />
                    </Form.Group>
                </Col>
                <Col >
                    <Form.Group className="mb-3" controlId="formBasiclink">
                        <Form.Control style={{backgroundColor:"#efefef"}}  type="text" placeholder="Suresh Srivastav" />
                    </Form.Group>

                </Col>

                <Col >
                    <Form.Group className="mb-3" controlId="formBasiclink">
                        <Form.Control style={{backgroundColor:"#efefef"}}  type="text" placeholder="Suresh Srivastav" />
                    </Form.Group>
                </Col>

                <Col >
                    <Form.Group className="mb-3" controlId="formBasiclink">
                        <Form.Control style={{backgroundColor:"#efefef"}}  type="text" placeholder="Suresh Srivastav" />
                    </Form.Group>
                </Col>
            </Row>



            <div className="box15">
                <div className="box16">
                    Monthly Report
                </div>
                <div className="box17">
                    <select name="Month" id="Month" className='ApprovedMonth' >
                        <option value="year" >2023</option>
                        <option value="year">2022</option>
                        <option value="year">2021</option>
                    </select>

                    <select name="Month" id="Month" className='ApprovedMonth' >
                        <option value="Jan" >Month</option>
                        <option value="feb">January</option>
                        <option value="year">Febuary</option>

                    </select>
                    Filter
                </div>

            </div>


            <div className="box18">
                <Row>
                    <Col >
                        <Form.Group className="mb-3" controlId="formBasiclink">
                            <Form.Label className='labelColor'>Affiliation Code:</Form.Label>
                            <Form.Control style={{backgroundColor:"#efefef"}}  type="text" placeholder="anshuman" />
                        </Form.Group>
                    </Col>
                    <Col >
                        <Form.Group className="mb-3" controlId="formBasiclink">
                        <Form.Label className='labelColor' >Total visitors:</Form.Label>
                            <Form.Control style={{backgroundColor:"#efefef"}}  type="text" placeholder="3144" />
                        </Form.Group>
                    </Col>
                    <Col >
                        <Form.Group className="mb-3" controlId="formBasiclink">
                        <Form.Label className='labelColor' >Paid Visitors:</Form.Label>
                            <Form.Control style={{backgroundColor:"#efefef"}}  type="text" placeholder="3100" />
                        </Form.Group>
                    </Col>
                    <Col >
                        <Form.Group className="mb-3" controlId="formBasiclink">
                        <Form.Label className='labelColor' >Unpaid Visitors: </Form.Label>
                            <Form.Control style={{backgroundColor:"#efefef"}}  type="text" placeholder="40" />
                        </Form.Group>
                    </Col>
                </Row>
            </div>



            <div className="box18">
                <Row>
                    <Col >
                        <Form.Group className="mb-3" controlId="formBasiclink">
                            <Form.Label className='labelColor'>Coupon Code:</Form.Label>
                            <Form.Control style={{backgroundColor:"#efefef"}}  type="text" placeholder="anshuman123" />
                        </Form.Group>
                    </Col>
                    <Col >
                        <Form.Group className="mb-3" controlId="formBasiclink">
                        <Form.Label className='labelColor'> Coupon Created:</Form.Label>
                            <Form.Control style={{backgroundColor:"#efefef"}}  type="text" placeholder="02/12/22" />
                        </Form.Group>
                    </Col>
                    <Col >
                        <Form.Group className="mb-3" controlId="formBasiclink">
                        <Form.Label className='labelColor'>Coupon Used:</Form.Label>
                            <Form.Control style={{backgroundColor:"#efefef"}}  type="text" placeholder="242" />
                        </Form.Group>
                    </Col>
                    <Col >
                        <Form.Group className="mb-3" controlId="formBasiclink">
                        <Form.Label className='labelColor'>Coupon Discount:(Average) </Form.Label>
                            <Form.Control style={{backgroundColor:"#efefef"}}  type="text" placeholder="10%" />
                        </Form.Group>
                    </Col>
                </Row>
            </div>


            <div className="box18">
                <Row>
                    <Col >
                        <Form.Group className="mb-3" controlId="formBasiclink">
                            <Form.Label className='labelColor'>Total Revenue:</Form.Label>
                            <Form.Control style={{backgroundColor:"#efefef"}}  type="text" placeholder="Rs.1000000" />
                        </Form.Group>
                    </Col>
                    <Col >
                        <Form.Group className="mb-3" controlId="formBasiclink">
                        <Form.Label className='labelColor'>Total Commission:</Form.Label>
                            <Form.Control style={{backgroundColor:"#efefef"}}  type="text" placeholder="RS.2000" />
                        </Form.Group>
                    </Col>
                    <Col >
                        <Form.Group className="mb-3" controlId="formBasiclink">
                        <Form.Label className='labelColor'>Total Discount:</Form.Label>
                            <Form.Control style={{backgroundColor:"#efefef"}}  type="text" placeholder="Rs.10000" />
                        </Form.Group>
                    </Col>
                    <Col >
                        <Form.Group className="mb-3" controlId="formBasiclink">
                        <Form.Label className='labelColor'>Payable: </Form.Label>
                            <Form.Control style={{backgroundColor:"#efefef"}} type="text" placeholder="10000" />
                        </Form.Group>
                    </Col>
                </Row>
            </div>            



            <center><button className='btn47 ' type="send">
                Done
            </button></center>

        </Container>


    );
}

export default ApprovedAffiliate;
