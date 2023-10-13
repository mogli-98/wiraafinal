import React from 'react';
import { Container, Row, Col, Card, Table } from "react-bootstrap";
import "../../asset/css/freelanceredashboard.css";
import Sidenavbar from './layout/Sidenavbar';
import Topnavbar from './layout/topnavbar';

function FreeProDetails() {


  return (
    <>
      <Container fluid className='dashboard-conatiner-top' >
        <Row>
          <Col sm={1} xs={2} className=''>
            <Sidenavbar />
          </Col>


          <Col sm={8} xs={10} className='dashboard-conatiner-top-row '>
            <Container className='square border border-bottom-0'>
              <Topnavbar activeLink="Project" />
              <Row >
                <Col sm={8} className="project square border-end border-start">
                  <div className=' '>
                    <div className=" m-3">
                      <button style={{borderRadius:'8px',backgroundColor:'green',borderStyle:'none' ,width:'40%',color:'white',padding:'5px'}}>Show Interest</button>
                      <button style={{borderRadius:'8px',backgroundColor:'red',borderStyle:'none' ,width:'40%',position:'relative',float:'right',color:'white',padding:'5px'}}>Not Interest</button>
                    </div>
                    <Card className='m-3' style={{ background: "#efefef " }}>
                      <div className=' m-3 project-details'>
                        <p className='mt-4'><b>Tilte</b>
                          <br />Graphic Designer for brand identity
                        </p>

                        <p className='mt-4'><b>Description</b>
                          <br />
                          Our company is in need of a graphic designer for building our brand identity.
                          We are currently in the process of rebranding. We already have the logo
                          ready, so what we need is the design of a memorandum, visuals for social
                          networks, and other similar things. We need something elegant, simple, but
                          effective.
                        </p>

                        <p className='mt-4'><b>Category</b>
                          <br />Creative - Graphic Design
                        </p>

                        <p className='mt-4'><b>Budget</b>
                          <br />INR 2000 - 5000 / Lump-sum
                        </p>

                      </div>

                    </Card>

                  </div>
                </Col>
                <Col sm={4} className='project-deatils4 square border-end ' >
                  <Card style={{ background: "#fff " }} className="m-2">
                    <p className='text-center mt-2'><b><u>Details</u></b></p>
                    <Table borderless>
                      <tbody>
                        <tr>
                          <td className='left-td'>Status</td>
                          <td className='right-td text-success'><b>Active</b></td>
                        </tr>
                        <tr>
                          <td className='left-td'>Name</td>
                          <td className='right-td'><b>Suresh</b></td>
                        </tr>
                        <tr>
                          <td className='left-td'>Order Date</td>
                          <td className='right-td'><b>06/11/2022</b></td>
                        </tr>
                        <tr>
                          <td className='left-td'>Due Date</td>
                          <td className='right-td'><b>05/12/2022</b></td>
                        </tr>
                        <tr>
                          <td className='left-td'>Responser</td>
                          <td className='right-td'><b>49</b></td>
                        </tr>
                      </tbody>
                    </Table>
                  </Card>
                  <div className='mt-3 projectdetail-last'>
                    <span>About</span> <span>Career</span> <span>Term of services</span>
                    <span>Conatct</span> <span>FAQ</span> <span>Blog</span>
                    <span>Privacy policy</span> <span>© 2023 Wiraa. All Rights Reserved</span>
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

export default FreeProDetails;