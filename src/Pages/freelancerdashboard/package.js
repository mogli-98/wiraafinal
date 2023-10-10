import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import "../../asset/css/freelanceredashboard.css";
import Sidenavbar from './layout/Sidenavbar';
import Topnavbar from './layout/topnavbar';
import Phoneviewfooter from '../../Layout/Phoneviewfooter';

// import { Link } from "react-router-dom";
function Package() {


    return (
        <>
            <Container fluid className='dashboard-conatiner-top' >
                <Row>
                    <Col sm={1}  className='d-none d-sm-block'>
                        <Sidenavbar />
                    </Col>


                    <Col sm={8} xs={12} className='dashboard-conatiner-top-row '>
                        <Container className='square border border-bottom-0'>
                            <Topnavbar />
                            <Row >
                                {/* <div className='pricing-top-text mb-4'>
                  <p className='text-center'>Upgrade To A Curated Package To Maximise Your Business Success And Earnings!</p>
                  <p className='text-center'>Change Your Plans Anytime</p>
                </div> */}
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
                                <div className="container mt-4">

                                    <table className="styled-table">
                                        <thead>
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





                                        </tbody>
                                    </table>
                                </div>
                            </Row>

                        </Container>
                    </Col>
                </Row>
            </Container>
            <Phoneviewfooter/>
        </>
    );
};

export default Package;