import React from 'react';
import { Container, Row, Col, Table } from "react-bootstrap";
import Sidenav from '../Dashboard/layout/Sidenav';
import Topnav from '../Dashboard/layout/topnav';

function Noorder() {

    return (
        <>
            <Container fluid className='dashboard-conatiner-top' >
                <Row>
                    <Col sm={1} xs={2} className=''>
                        <Sidenav />
                    </Col>


                    <Col sm={8} xs={10} className='dashboard-conatiner-top-row '>
                        <Container className='square border border-bottom-0'>
                            <Topnav />
                            <Row className='mt-5'>
                                <Col sm={1}></Col>
                                <Col sm={10} >
                                    <Container className='MonthPayout'>

                                        <Row>
                                            <Col>
                                                <div className="Box">
                                                    <div className="box1">
                                                        <h5>3082</h5>
                                                        <h6>Total Registered</h6>
                                                    </div>
                                                    <div className="box2">
                                                        <h5>192</h5>
                                                        <h6>Registered(this month)</h6>
                                                    </div>
                                                    <div className="box3">
                                                        <h5>19</h5>
                                                        <h6>Registered(today)</h6>
                                                    </div>
                                                    <div className="box4">
                                                        <h5>30820</h5>
                                                        <h6>Total Visitors</h6>
                                                    </div>
                                                    <div className="box5">
                                                        <h5>1920</h5>
                                                        <h6>Visitors(this month)</h6>
                                                    </div>
                                                    <div className="box6">
                                                        <h5>19</h5>
                                                        <h6>New Visitors(today)</h6>
                                                    </div>

                                                </div>




                                            </Col>

                                        </Row>


                                        <Row>
                                            <Col>
                                                <div className="table">
                                                    <div className="table_affi">

                                                        <div className='btnbtn'>
                                                            <input type="text" className='searchbtn' placeholder='Search by name...' />
                                                        </div>


                                                        <button className='butn'>Add Affiliates </button>
                                                    </div>
                                                    <Table style={{ border: '2px solid lightgrey', height: '400px' }}>
                                                        <thead>
                                                            <tr>
                                                                <th style={{ borderBottom: '1px solid black' }}>ID</th>
                                                                <th style={{ borderBottom: '1px solid black' }}>Affiliates</th>
                                                                <th style={{ borderBottom: '1px solid black' }}>Date</th>
                                                                <th style={{ borderBottom: '1px solid black' }}>Amount</th>
                                                                <th style={{ borderBottom: '1px solid black' }}>Coupon</th>
                                                                <th style={{ borderBottom: '1px solid black' }}>Commission</th>
                                                                <th style={{ borderBottom: '1px solid black' }}>Status</th>
                                                                <th style={{ borderBottom: '1PX SOLID BLACK' }}>Action</th>

                                                            </tr>
                                                        </thead>

                                                        <tbody>
                                                            <tr >
                                                                <td>103</td>
                                                                <td>Suresh Gupta</td>
                                                                <td>24/11/2022</td>
                                                                <td>₹1999</td>
                                                                <td>0%</td>
                                                                <td>0%</td>
                                                                <td style={{ color: 'Red' }}> <b>Unpaid</b> </td>
                                                                <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                                                </svg></td>

                                                            </tr>
                                                            <tr >
                                                                <td>104</td>
                                                                <td>Ramesh Infotech</td>
                                                                <td>24/11/2022</td>
                                                                <td>₹1999</td>
                                                                <td>14%</td>
                                                                <td>6%</td>
                                                                <td style={{ color: 'green' }}> <b>Paid</b> </td>
                                                                <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                                                </svg></td>

                                                            </tr>
                                                            <tr >
                                                                <td>105</td>
                                                                <td>Career College Foundations</td>
                                                                <td>22/11/2022</td>
                                                                <td>₹4999</td>
                                                                <td>0%</td>
                                                                <td>0%</td>
                                                                <td style={{ color: 'Red' }}> <b>Unpaid</b> </td>
                                                                <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                                                </svg></td>
                                                            </tr>
                                                            <tr >
                                                                <td>106</td>
                                                                <td>Suresh Gupta</td>
                                                                <td>22/11/2022</td>
                                                                <td>₹1999</td>
                                                                <td>0%</td>
                                                                <td>0%</td>
                                                                <td style={{ color: 'red' }}> <b>Unpaid</b></td>
                                                                <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                                                </svg></td>
                                                            </tr>
                                                            <tr >
                                                                <td>107</td>
                                                                <td>Ramesh Infotech</td>
                                                                <td>22/11/2022</td>
                                                                <td>₹1999</td>
                                                                <td>14%</td>
                                                                <td>6%</td>
                                                                <td style={{ color: 'green' }}> <b>Paid</b></td>
                                                                <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                                                </svg></td>
                                                            </tr>

                                                            <tr >
                                                                <td>108</td>
                                                                <td>Career College Foundations</td>
                                                                <td>21/11/2022</td>
                                                                <td>₹ 4999</td>
                                                                <td>14%</td>
                                                                <td>6%</td>
                                                                <td style={{ color: 'green' }}> <b>Paid</b></td>
                                                                <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                                                </svg></td>
                                                            </tr>

                                                        </tbody>
                                                    </Table>
                                                </div>
                                            </Col>
                                        </Row>

                                    </Container>
                                </Col>
                                <Col sm={1}></Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Noorder