import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import "../../Aseset/css/freelanceredashboard.css";
import Sidenavbar from './layout/Sidenavbar';
import Topnavbar from './layout/topnavbar';

// import { Link } from "react-router-dom";
function Package() {


  return (
    <>
      <Container fluid className='dashboard-conatiner-top' >
        <Row>
          <Col sm={1} xs={2} className=''>
            <Sidenavbar />
          </Col>


          <Col sm={8} xs={10} className='dashboard-conatiner-top-row '>
            <Container className='square border border-bottom-0'>
              <Topnavbar />
              <Row >
                <div className='pricing-top-text mb-4'>
                  <p className='text-center'>Upgrade To A Curated Package To Maximise Your Business Success And Earnings!</p>
                  <p className='text-center'>Change Your Plans Anytime</p>
                </div>
              <Col sm={4} xs={12}>
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
              </Col>
              </Row>

            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Package;