import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Sidenav from "./layout/Sidenav";
import '../../Aseset/css/dashboard.css'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Portfolio from './layout/portfolio';
import Profile from './layout/profile';
import Topnav from './layout/topnav';

// import { Link } from "react-router-dom";
function Dashboard(props) {
    const [showComponent, setShowComponent] = useState(false);
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
                            <Row>
                                <Col>
                                    <div className='' style={{ backgroundColor: "#efefef", borderRadius: "25px" }}>
                                        <InputGroup className='mt-4 mb-4  search-outer-container'>
                                            <Form.Control
                                                placeholder="&#xF002; Search Portfolio"
                                                aria-label="Search Portfolio"
                                                className='searchbox'
                                                style={{ backgroundColor: "#efefef" }}
                                            />
                                            <div className="button-check">
                                                <div className="button1 b2 new-class-toggle " id="button-10" >
                                                    <input type="checkbox" className="checkbox"
                                                        checked={showComponent}
                                                        onChange={() => setShowComponent(!showComponent)} />
                                                    <div className="knobs">
                                                        <span>Portfolio</span>
                                                    </div>
                                                    <div className="layer"></div>
                                                </div>
                                            </div>
                                        </InputGroup>
                                    </div>
                                </Col>
                            </Row>
                            {showComponent ? <Profile /> : <Portfolio />}
                        </Container>
                    </Col>
                </Row>
            </Container>



        </>
    );
};

export default Dashboard;