import React from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import "../../asset/css/freelanceredashboard.css";
import Sidenavbar from './layout/Sidenavbar';
import Topnavbar from './layout/topnavbar';
import Phoneviewfooter from '../../Layout/Phoneviewfooter';
// import { Form } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import { Form } from 'react-router-dom';

// import { Link } from "react-router-dom";
function Package() {


    return (
        <>
            <Container fluid className='dashboard-conatiner-top' >
                <Row>
                    <Col sm={1} className='d-none d-sm-block'>
                        <Sidenavbar />
                    </Col>


                    <Col sm={8} xs={12} style={{ padding: '0px' }} className='dashboard-conatiner-top-row '>
                        <Container className='square border border-bottom-0'>
                            <Topnavbar activeLink="Package" />
                            <Row >
                                <p style={{ fontSize: '18px', fontWeight: 500 }} className='text-center d-none d-sm-block'>Upgrade To A Curated Package To Maximise Your Business Success And Earnings!</p>
                                <p style={{ fontSize: '18px', fontWeight: 500 }} className='text-center d-none d-sm-block'>Change Your Plans Anytime</p>
                                {/* <div className='pricing-top-text mb-4'>
                  <p className='text-center'>Upgrade To A Curated Package To Maximise Your Business Success And Earnings!</p>
                  <p className='text-center'>Change Your Plans Anytime</p>
                </div> */}
                                {/* <Col sm={4} xs={12}>
                                {/* <Col sm={4} xs={12}>
                <div className='pricing-table1 pricing-table  '> 
                <ul className='pt-2'>
                      <li><b>Basic</b></li>
                      <li>
                        <div className='priceidiv priceidiv1'>
                          <p>Free</p>
                          <p className='small priceidiv2'>₹99</p>
                        </div>
                      </li>
                      
                      <li>5 Connects</li>
                      <li>Unlimited Project Bookmarks</li>
                      <li>Normal Customer Support</li>
                      <li className='pricing-tableli'>1 Hour Advance Project Alerts</li>
                      <li className='pricing-tableli'>Faster Project Alerts</li>
                      <li className='pricing-tableli'>Promote Your Own Website</li>
                      <li className='pricing-tableli'>Get Suggested To Clinets</li>
                      <button><b>Select</b></button>
                      </ul>  
                </div>
              </Col>
              <Col sm={4} xs={12}>
                <div className='pricing-table2 pricing-table  '> 
                  <ul className='pt-2'>
                      <li ><b>Plus</b></li>
                      <li>
                      <div className='priceidiv'>
                        <p>₹499 / month</p>
                        </div>
                      </li>
                     
                      <li>50 Connects</li>
                      <li>Unlimited Project Bookmarks</li>
                      <li>Premium Customer Support</li>
                      <li>1 Hour Advance Project Alerts</li>
                      <li>Faster Project Alerts</li>
                      <li>Promote Your Own Website</li>
                      <li>Get Suggested To Clinets</li>
                      <button><b>Select</b></button>
                      </ul>  
                </div>
              </Col>
              <Col sm={4} xs={12}>
                <div className='pricing-table3 pricing-table  '> 
                   
                    <ul className='pt-2'>
                      <li><b>Premium</b></li>
                      <li>
                      <div className='priceidiv'>
                          <p>₹4,999 / year</p>
                          
                        </div>
                      </li>
                     
                      <li>Unlimited Connects</li>
                      <li>Unlimited Project Bookmarks</li>
                      <li>Normal Customer Support</li>
                      <li>1 Hour Advance Project Alerts</li>
                      <li>Faster Project Alerts</li>
                      <li>Promote Your Own Website</li>
                      <li>Get Suggested To Clinets</li>
                      <button><b>Select</b></button>
                      </ul>  
                </div>
              </Col> */}
                                <div className="container mt-4 d-none d-sm-block">



                                    <table className="styled-table mb-4">
                                        <thead>


                                            <tr>
                                                <td style={{ borderLeft: 'none', borderTop: 'none' }}>
                                                    <p style={{ color: '#008080', fontSize: '20px', fontWeight: 600 }}>Package Confirmation</p>

                                                    <span style={{ fontWeight: 500 }}>Get quality Talents</span>
                                                </td>

                                                <td style={{ fontWeight: 600 }}>
                                                    <p style={{ fontSize: '16px', fontWeight: 600 }}>Basic</p>
                                                    <p style={{ color: '#008080', fontSize: '18px', fontWeight: 600 }}>Free</p>
                                                    <p style={{ color: 'grey' }}>Fulfill your basic needs</p>
                                                </td>



                                                <td style={{ fontWeight: 600 }}>
                                                    {/* <p>Best value get your team up!</p> */}
                                                    <p style={{ fontSize: '16px', fontWeight: 600 }}>Plus</p>
                                                    <p style={{ color: '#008080', fontSize: '18px', fontWeight: 600 }}>₹ 499 / month</p>
                                                    <p style={{ color: 'grey' }}>Scale your business hiring</p>
                                                </td>

                                                <td style={{ fontWeight: 600 }}>
                                                    <p style={{ fontSize: '16px', fontWeight: 600 }}>Premium</p>
                                                    <p style={{ color: '#008080', fontSize: '18px', fontWeight: 600 }}>₹ 4999 / month</p>
                                                    <p style={{ color: 'grey' }}>Maximise your workforce program</p>

                                                </td>
                                            </tr>


                                            <tr>
                                                <td style={{ color: 'grey', fontWeight: 700 }}>
                                                    Message Credits
                                                </td>
                                                <td style={{ fontWeight: 600 }}>
                                                    05
                                                </td>
                                                <td style={{ fontWeight: 600 }}>
                                                    50
                                                </td>
                                                <td style={{ fontWeight: 600 }}>
                                                    Unlimited
                                                </td>
                                            </tr>

                                            <tr>
                                                <td style={{ color: 'grey', fontWeight: 700 }}>
                                                    Customer Support
                                                </td>
                                                <td style={{ fontWeight: 600 }}>
                                                    Normal
                                                </td>
                                                <td style={{ fontWeight: 600 }}>
                                                    Premium
                                                </td>
                                                <td style={{ fontWeight: 600 }}>
                                                    Premium
                                                </td>
                                            </tr>

                                            <tr>
                                                <td style={{ color: 'grey', fontWeight: 700 }}>
                                                    Manager Relationship
                                                </td>
                                                <td style={{ fontWeight: 600 }}>
                                                    Not Available
                                                </td>
                                                <td style={{ fontWeight: 600 }}>
                                                    Dedicated
                                                </td>
                                                <td style={{ fontWeight: 600 }}>
                                                    Dedicated
                                                </td>
                                            </tr>

                                            <tr>
                                                <td style={{ color: 'grey', fontWeight: 700 }}>
                                                    Payment Protection
                                                </td>
                                                <td style={{ fontWeight: 600 }}>
                                                    Secured
                                                </td>
                                                <td style={{ fontWeight: 600 }}>
                                                    Secured
                                                </td>
                                                <td style={{ fontWeight: 600 }}>
                                                    Secured
                                                </td>
                                            </tr>
                                            <tr style={{ height: '40px' }}>
                                                <td>

                                                </td>
                                                <td>

                                                </td>
                                                <td>

                                                </td>
                                                <td>

                                                </td>
                                            </tr>





                                            <tr>
                                                <th>Client Dashboard</th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {/* {Array.from({ length: 11 }, (_, rowIndex) => (
            <tr key={rowIndex}>
                {Array.from({ length: 4 }, (_, colIndex) => (
                    <td key={colIndex}>Data {rowIndex * 4 + colIndex + 1}</td>
                ))}
            </tr>
        ))} */}
                                            <tr>
                                                <td style={{ color: 'grey', fontWeight: 700 }}>
                                                    Order Listing
                                                </td>
                                                <td style={{ fontWeight: 600 }}>
                                                    Normal
                                                </td>
                                                <td style={{ fontWeight: 600 }}>
                                                    Featured
                                                </td>
                                                <td style={{ fontWeight: 600 }}>
                                                    Featured
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{ color: 'grey', fontWeight: 700 }}>
                                                    Order Listing
                                                </td>
                                                <td style={{ fontWeight: 600 }}>
                                                    Normal
                                                </td>
                                                <td style={{ fontWeight: 600 }}>
                                                    Featured
                                                </td>
                                                <td style={{ fontWeight: 600 }}>
                                                    Featured
                                                </td>
                                            </tr>

                                            <tr>
                                                <td style={{ color: 'grey', fontWeight: 700 }}>
                                                    Job Posting
                                                </td>
                                                <td style={{ fontWeight: 600 }}>
                                                    Unlimited
                                                </td>
                                                <td style={{ fontWeight: 600 }}>
                                                    Unlimited
                                                </td>
                                                <td style={{ fontWeight: 600 }}>
                                                    Unlimited
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{ color: 'grey', fontWeight: 700 }}>
                                                    Job Posting
                                                </td>
                                                <td style={{ fontWeight: 600 }}>
                                                    Unlimited
                                                </td>
                                                <td style={{ fontWeight: 600 }}>
                                                    Unlimited
                                                </td>
                                                <td style={{ fontWeight: 600 }}>
                                                    Unlimited
                                                </td>
                                            </tr>


                                            <tr style={{ height: '40px' }}>
                                                <td style={{ color: 'grey', fontWeight: 700 }}>
                                                    Verified Professionals
                                                </td>
                                                <td style={{ fontWeight: 600 }}>
                                                    Unlimited
                                                </td>
                                                <td style={{ fontWeight: 600 }}>
                                                    Unlimited
                                                </td>
                                                <td style={{ fontWeight: 600 }}>
                                                    Unlimited
                                                </td>
                                            </tr>
                                            <tr style={{ height: '40px' }}>
                                                <td style={{ color: 'grey', fontWeight: 700 }}>
                                                    Verified Professionals
                                                </td>
                                                <td style={{ fontWeight: 600 }}>
                                                    Unlimited
                                                </td>
                                                <td style={{ fontWeight: 600 }}>
                                                    Unlimited
                                                </td>
                                                <td style={{ fontWeight: 600 }}>
                                                    Unlimited
                                                </td>
                                            </tr>

                                            <tr style={{ height: '40px' }}>
                                                <td>
                                            <tr style={{ height: '40px' }}>
                                                <td>

                                                </td>
                                                <td>
                                                </td>
                                                <td>

                                                </td>
                                                <td>
                                                </td>
                                                <td>

                                                </td>
                                                <td>
                                                </td>
                                                <td>

                                                </td>
                                            </tr>
                                                </td>
                                            </tr>

                                            <tr>
                                                <th style={{ fontWeight: 700 }}>Professional Dashboard</th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                            </tr>
                                            <tr>
                                                <th style={{ fontWeight: 700 }}>Professional Dashboard</th>
                                                <th></th>
                                                <th></th>
                                                <th></th>
                                            </tr>

                                            <tr>
                                                <td style={{ color: 'grey', fontWeight: 700 }}>
                                                    Project Credits
                                                </td>
                                                <td style={{ fontWeight: 600 }}>
                                                    05
                                                </td>
                                                <td style={{ fontWeight: 600 }}>
                                                    50
                                                </td>
                                                <td style={{ fontWeight: 600 }}>
                                                    Unlimited
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{ color: 'grey', fontWeight: 700 }}>
                                                    Project Credits
                                                </td>
                                                <td style={{ fontWeight: 600 }}>
                                                    05
                                                </td>
                                                <td style={{ fontWeight: 600 }}>
                                                    50
                                                </td>
                                                <td style={{ fontWeight: 600 }}>
                                                    Unlimited
                                                </td>
                                            </tr>

                                            <tr>
                                                <td style={{ color: 'grey', fontWeight: 700 }}>
                                                    Project Commission
                                                </td>
                                                <td style={{ fontWeight: 600 }}>
                                                    15%
                                                </td>
                                                <td style={{ fontWeight: 600 }}>
                                                    10%
                                                </td>
                                                <td style={{ fontWeight: 600 }}>
                                                    05%
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{ color: 'grey', fontWeight: 700 }}>
                                                    Project Commission
                                                </td>
                                                <td style={{ fontWeight: 600 }}>
                                                    15%
                                                </td>
                                                <td style={{ fontWeight: 600 }}>
                                                    10%
                                                </td>
                                                <td style={{ fontWeight: 600 }}>
                                                    05%
                                                </td>
                                            </tr>

                                            <tr>
                                                <td style={{ color: 'grey', fontWeight: 700 }}>
                                                    Profile Listing
                                                </td>
                                                <td style={{ fontWeight: 600 }}>
                                                    Normal
                                                </td>
                                                <td style={{ fontWeight: 600 }}>
                                                    Featured
                                                </td>
                                                <td style={{ fontWeight: 600 }}>
                                                    Featured
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{ color: 'grey', fontWeight: 700 }}>
                                                    Profile Listing
                                                </td>
                                                <td style={{ fontWeight: 600 }}>
                                                    Normal
                                                </td>
                                                <td style={{ fontWeight: 600 }}>
                                                    Featured
                                                </td>
                                                <td style={{ fontWeight: 600 }}>
                                                    Featured
                                                </td>
                                            </tr>

                                            <tr>
                                                <td style={{ color: 'grey', fontWeight: 700 }}>
                                                    Project alert
                                                </td>
                                                <td style={{ fontWeight: 600 }}>
                                                    Normal
                                                </td>
                                                <td style={{ fontWeight: 600 }}>
                                                    1 hour advance alert
                                                </td>
                                                <td style={{ fontWeight: 600 }}>
                                                    1 hour advance alert
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{ color: 'grey', fontWeight: 700 }}>
                                                    Project alert
                                                </td>
                                                <td style={{ fontWeight: 600 }}>
                                                    Normal
                                                </td>
                                                <td style={{ fontWeight: 600 }}>
                                                    1 hour advance alert
                                                </td>
                                                <td style={{ fontWeight: 600 }}>
                                                    1 hour advance alert
                                                </td>
                                            </tr>

                                            <tr>
                                                <td style={{ color: 'grey', fontWeight: 700 }}>
                                                    Project bookmark
                                                </td>
                                                <td style={{ fontWeight: 600 }}>
                                                    Unlimited
                                                </td>
                                                <td style={{ fontWeight: 600 }}>
                                                    Unlimited
                                                </td>
                                                <td style={{ fontWeight: 600 }}>
                                                    Unlimited
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{ color: 'grey', fontWeight: 700 }}>
                                                    Project bookmark
                                                </td>
                                                <td style={{ fontWeight: 600 }}>
                                                    Unlimited
                                                </td>
                                                <td style={{ fontWeight: 600 }}>
                                                    Unlimited
                                                </td>
                                                <td style={{ fontWeight: 600 }}>
                                                    Unlimited
                                                </td>
                                            </tr>





                                        </tbody>
                                    </table>
                                </div>


                                <div className='d-block d-sm-none'>
                                    <p style={{ fontSize: '18px', fontWeight: 500, marginTop: '80px' }} className='text-center'>Upgrade To A Curated Package To Maximise Your Business Success And Earnings!</p>
                                    <p style={{ fontSize: '18px', fontWeight: 500 }} className='text-center'>Change Your Plans Anytime</p>

                                    <Card style={{ backgroundColor: 'ButtonHighlight', border: 'none',marginBottom:'30px',padding:'30px 0px' }}>
                                        <Row>
                                            <Col xs={12}>
                                                <center>
                                                    <p style={{ fontSize: '20px',  marginTop: '10px' }}>  <b style={{backgroundColor:'white',padding:'6px 10px',borderRadius:'5px'}}>Basic </b>  </p>
                                                    <p style={{ fontSize: '24px', color: '#008080' }}> <b>Free</b>  </p>
                                                    <p style={{ color: 'grey', fontSize: '16px' }}>Fulfill your basic needs</p>
                                                </center>


                                            </Col>
                                            <Col xs={12}>
                                                <center>
                                                    
                                                    <div style={{ borderRadius: '8px', display: 'flex', width: '90%', backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
                                                        <p style={{ fontSize: '17px' }}>Message Credits  </p>
                                                        <p style={{ fontSize: '17px' }}>05   </p>
                                                    </div>

                                                    <div style={{ marginTop: '10px', borderRadius: '8px', display: 'flex', width: '90%', backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
                                                        <p style={{ fontSize: '17px' }}>Customer Support  </p>
                                                        <p style={{ fontSize: '17px' }}>Yes   </p>
                                                    </div>

                                                    <div style={{ marginTop: '10px', borderRadius: '8px', display: 'flex', width: '90%', backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
                                                        <p style={{ fontSize: '17px' }}>Relationship Manager  </p>
                                                        <p style={{ fontSize: '17px' }}>No support  </p>
                                                    </div>

                                                    <div style={{ marginTop: '10px', marginBottom: '10px', borderRadius: '8px', display: 'flex', width: '90%', backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
                                                        <p style={{ fontSize: '17px' }}>Payment Protection </p>
                                                        <p style={{ fontSize: '17px' }}>Secured   </p>
                                                    </div>

                                                    <div>

                                                        <Accordion style={{ margin: '10px 10px' }} defaultActiveKey="1">
                                                            <Accordion.Item eventKey="0">
                                                                <Accordion.Header><p style={{ fontSize: '18px',height:'10px' }}><b>Client Dashboard</b></p> </Accordion.Header>

                                                                <Accordion.Body>

                                                                    <div style={{ borderRadius: '8px', display: 'flex',  backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
                                                                        <p style={{ fontSize: '17px' }}> Order Listing  </p>
                                                                        <p style={{ fontSize: '17px' }}>Normal   </p>
                                                                    </div>

                                                                    <div style={{ borderRadius: '8px', display: 'flex',  backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
                                                                        <p style={{ fontSize: '17px' }}> Job Posting  </p>
                                                                        <p style={{ fontSize: '17px' }}>Unlimited   </p>
                                                                    </div>

                                                                    <div style={{ borderRadius: '8px', display: 'flex',  backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
                                                                        <p style={{ fontSize: '17px' }}>Verified Professional  </p>
                                                                        <p style={{ fontSize: '17px' }}>Unlimited   </p>
                                                                    </div>


                                                                </Accordion.Body>
                                                            </Accordion.Item>

                                                        </Accordion>


                                                        <Accordion style={{ margin: '10px 10px' }} defaultActiveKey="1">
                                                            <Accordion.Item eventKey="0">
                                                                <Accordion.Header><p style={{ fontSize: '18px',height:'10px' }}><b>Professional Dashboard</b></p> </Accordion.Header>

                                                                <Accordion.Body>

                                                                    <div style={{ borderRadius: '8px', display: 'flex',  backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
                                                                        <p style={{ fontSize: '17px' }}> Project credits  </p>
                                                                        <p style={{ fontSize: '17px' }}>05   </p>
                                                                    </div>

                                                                    <div style={{ borderRadius: '8px', display: 'flex',  backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
                                                                        <p style={{ fontSize: '17px' }}>  Project Commision  </p>
                                                                        <p style={{ fontSize: '17px' }}>15%   </p>
                                                                    </div>

                                                                    <div style={{ borderRadius: '8px', display: 'flex',  backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
                                                                        <p style={{ fontSize: '17px' }}>Project  Listing   </p>
                                                                        <p style={{ fontSize: '17px' }}>Normal  </p>
                                                                    </div>

                                                                    <div style={{ borderRadius: '8px', display: 'flex',  backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
                                                                        <p style={{ fontSize: '17px' }}>Project alert </p>
                                                                        <p style={{ fontSize: '17px' }}>Normal  </p>
                                                                    </div>

                                                                    <div style={{ borderRadius: '8px', display: 'flex',  backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
                                                                        <p style={{ fontSize: '17px' }}>Project Bookmark</p>
                                                                        <p style={{ fontSize: '17px' }}>Unlimited   </p>
                                                                    </div>


                                                                </Accordion.Body>
                                                            </Accordion.Item>

                                                        </Accordion>


                                                    </div>


                                                  
                                                </center>
                                            </Col>                                         

                                        </Row>
                                    </Card>



                                    <Card style={{ backgroundColor: 'ButtonHighlight', border: 'none',marginBottom:'30px' }}>
                                        <Row>
                                            <Col xs={12}>
                                                <center>
                                                    <p style={{ fontSize: '18px', fontWeight: 600, marginTop: '10px' }}> Plus </p>
                                                    <p style={{ fontSize: '20px', color: '#008080' }}> <b>Free</b>  </p>
                                                    <p style={{ color: 'grey', fontSize: '16px' }}>Fulfill your basic needs</p>
                                                </center>


                                            </Col>
                                            <Col xs={12}>
                                                <center>
                                                    
                                                    <div style={{ borderRadius: '8px', display: 'flex', width: '90%', backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
                                                        <p style={{ fontSize: '17px' }}>Message Credits  </p>
                                                        <p style={{ fontSize: '17px' }}>05   </p>
                                                    </div>

                                                    <div style={{ marginTop: '10px', borderRadius: '8px', display: 'flex', width: '90%', backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
                                                        <p style={{ fontSize: '17px' }}>Customer Support  </p>
                                                        <p style={{ fontSize: '17px' }}>Yes   </p>
                                                    </div>

                                                    <div style={{ marginTop: '10px', borderRadius: '8px', display: 'flex', width: '90%', backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
                                                        <p style={{ fontSize: '17px' }}>Relationship Manager  </p>
                                                        <p style={{ fontSize: '17px' }}>No support  </p>
                                                    </div>

                                                    <div style={{ marginTop: '10px', marginBottom: '10px', borderRadius: '8px', display: 'flex', width: '90%', backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
                                                        <p style={{ fontSize: '17px' }}>Payment Protection </p>
                                                        <p style={{ fontSize: '17px' }}>Secured   </p>
                                                    </div>

                                                    <div>

                                                        <Accordion style={{ margin: '10px 10px' }} defaultActiveKey="1">
                                                            <Accordion.Item eventKey="0">
                                                                <Accordion.Header><p style={{ fontSize: '18px',height:'10px' }}><b>Client Dashboard</b></p> </Accordion.Header>

                                                                <Accordion.Body>

                                                                    <div style={{ borderRadius: '8px', display: 'flex',  backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
                                                                        <p style={{ fontSize: '17px' }}> Order Listing  </p>
                                                                        <p style={{ fontSize: '17px' }}>Normal   </p>
                                                                    </div>

                                                                    <div style={{ borderRadius: '8px', display: 'flex',  backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
                                                                        <p style={{ fontSize: '17px' }}> Job Posting  </p>
                                                                        <p style={{ fontSize: '17px' }}>Unlimited   </p>
                                                                    </div>

                                                                    <div style={{ borderRadius: '8px', display: 'flex',  backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
                                                                        <p style={{ fontSize: '17px' }}>Verified Professional  </p>
                                                                        <p style={{ fontSize: '17px' }}>Unlimited   </p>
                                                                    </div>


                                                                </Accordion.Body>
                                                            </Accordion.Item>

                                                        </Accordion>


                                                        <Accordion style={{ margin: '10px 10px' }} defaultActiveKey="1">
                                                            <Accordion.Item eventKey="0">
                                                                <Accordion.Header><p style={{ fontSize: '18px',height:'10px' }}><b>Professional Dashboard</b></p> </Accordion.Header>

                                                                <Accordion.Body>

                                                                    <div style={{ borderRadius: '8px', display: 'flex',  backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
                                                                        <p style={{ fontSize: '17px' }}> Project credits  </p>
                                                                        <p style={{ fontSize: '17px' }}>05   </p>
                                                                    </div>

                                                                    <div style={{ borderRadius: '8px', display: 'flex',  backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
                                                                        <p style={{ fontSize: '17px' }}>  Project Commision  </p>
                                                                        <p style={{ fontSize: '17px' }}>15%   </p>
                                                                    </div>

                                                                    <div style={{ borderRadius: '8px', display: 'flex',  backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
                                                                        <p style={{ fontSize: '17px' }}>Project  Listing   </p>
                                                                        <p style={{ fontSize: '17px' }}>Normal  </p>
                                                                    </div>

                                                                    <div style={{ borderRadius: '8px', display: 'flex',  backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
                                                                        <p style={{ fontSize: '17px' }}>Project alert </p>
                                                                        <p style={{ fontSize: '17px' }}>Normal  </p>
                                                                    </div>

                                                                    <div style={{ borderRadius: '8px', display: 'flex',  backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
                                                                        <p style={{ fontSize: '17px' }}>Project Bookmark</p>
                                                                        <p style={{ fontSize: '17px' }}>Unlimited   </p>
                                                                    </div>


                                                                </Accordion.Body>
                                                            </Accordion.Item>

                                                        </Accordion>


                                                    </div>


                                                  
                                                </center>
                                            </Col>                                         

                                        </Row>
                                    </Card>



                                    <Card style={{ backgroundColor: 'ButtonHighlight', border: 'none',marginBottom:'80px' }}>
                                        <Row>
                                            <Col xs={12}>
                                                <center>
                                                    <p style={{ fontSize: '18px', fontWeight: 600, marginTop: '10px' }}> Premium </p>
                                                    <p style={{ fontSize: '20px', color: '#008080' }}> <b>Free</b>  </p>
                                                    <p style={{ color: 'grey', fontSize: '16px' }}>Fulfill your basic needs</p>
                                                </center>


                                            </Col>
                                            <Col xs={12}>
                                                <center>
                                                    
                                                    <div style={{ borderRadius: '8px', display: 'flex', width: '90%', backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
                                                        <p style={{ fontSize: '17px' }}>Message Credits  </p>
                                                        <p style={{ fontSize: '17px' }}>05   </p>
                                                    </div>

                                                    <div style={{ marginTop: '10px', borderRadius: '8px', display: 'flex', width: '90%', backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
                                                        <p style={{ fontSize: '17px' }}>Customer Support  </p>
                                                        <p style={{ fontSize: '17px' }}>Yes   </p>
                                                    </div>

                                                    <div style={{ marginTop: '10px', borderRadius: '8px', display: 'flex', width: '90%', backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
                                                        <p style={{ fontSize: '17px' }}>Relationship Manager  </p>
                                                        <p style={{ fontSize: '17px' }}>No support  </p>
                                                    </div>

                                                    <div style={{ marginTop: '10px', marginBottom: '10px', borderRadius: '8px', display: 'flex', width: '90%', backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
                                                        <p style={{ fontSize: '17px' }}>Payment Protection </p>
                                                        <p style={{ fontSize: '17px' }}>Secured   </p>
                                                    </div>

                                                    <div>

                                                        <Accordion style={{ margin: '10px 10px' }} defaultActiveKey="1">
                                                            <Accordion.Item eventKey="0">
                                                                <Accordion.Header><p style={{ fontSize: '18px',height:'10px' }}><b>Client Dashboard</b></p> </Accordion.Header>

                                                                <Accordion.Body>

                                                                    <div style={{ borderRadius: '8px', display: 'flex',  backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
                                                                        <p style={{ fontSize: '17px' }}> Order Listing  </p>
                                                                        <p style={{ fontSize: '17px' }}>Normal   </p>
                                                                    </div>

                                                                    <div style={{ borderRadius: '8px', display: 'flex',  backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
                                                                        <p style={{ fontSize: '17px' }}> Job Posting  </p>
                                                                        <p style={{ fontSize: '17px' }}>Unlimited   </p>
                                                                    </div>

                                                                    <div style={{ borderRadius: '8px', display: 'flex',  backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
                                                                        <p style={{ fontSize: '17px' }}>Verified Professional  </p>
                                                                        <p style={{ fontSize: '17px' }}>Unlimited   </p>
                                                                    </div>


                                                                </Accordion.Body>
                                                            </Accordion.Item>

                                                        </Accordion>


                                                        <Accordion style={{ margin: '10px 10px' }} defaultActiveKey="1">
                                                            <Accordion.Item eventKey="0">
                                                                <Accordion.Header><p style={{ fontSize: '18px',height:'10px' }}><b>Professional Dashboard</b></p> </Accordion.Header>

                                                                <Accordion.Body>

                                                                    <div style={{ borderRadius: '8px', display: 'flex',  backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
                                                                        <p style={{ fontSize: '17px' }}> Project credits  </p>
                                                                        <p style={{ fontSize: '17px' }}>05   </p>
                                                                    </div>

                                                                    <div style={{ borderRadius: '8px', display: 'flex',  backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
                                                                        <p style={{ fontSize: '17px' }}>  Project Commision  </p>
                                                                        <p style={{ fontSize: '17px' }}>15%   </p>
                                                                    </div>

                                                                    <div style={{ borderRadius: '8px', display: 'flex',  backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
                                                                        <p style={{ fontSize: '17px' }}>Project  Listing   </p>
                                                                        <p style={{ fontSize: '17px' }}>Normal  </p>
                                                                    </div>

                                                                    <div style={{ borderRadius: '8px', display: 'flex',  backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
                                                                        <p style={{ fontSize: '17px' }}>Project alert </p>
                                                                        <p style={{ fontSize: '17px' }}>Normal  </p>
                                                                    </div>

                                                                    <div style={{ borderRadius: '8px', display: 'flex',  backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
                                                                        <p style={{ fontSize: '17px' }}>Project Bookmark</p>
                                                                        <p style={{ fontSize: '17px' }}>Unlimited   </p>
                                                                    </div>


                                                                </Accordion.Body>
                                                            </Accordion.Item>

                                                        </Accordion>


                                                    </div>


                                                  
                                                </center>
                                            </Col>                                         

                                        </Row>
                                    </Card>

                                </div>

                            </Row>

                        </Container>
                    </Col>
                </Row>
            </Container>
            <Phoneviewfooter />
        </>
    );
};

export default Package;