import React from "react";
import { Row,Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import Wiraalogo from "../../../asset/image/Wiraalogo.png";

function Topnavbar({ activeLink }) {
    return (
        <>
            <Row style={{height: '73px',top:'0px',zIndex:100 }} className="d-none d-sm-block  border-bottom">
                <Col sm={12} >
                    <nav className="navbar mt-2 ">
                        <div className="left-side mt-1">
                            <h4 style={{marginTop:'10px',marginLeft:'20px'}}><b>{activeLink}</b></h4>
                        </div>
                        <div className="navbar-right1 mt-2 mb-2">

                            <Link to='/Switchaccount'><button className="navbar-button switch"><b>Switch </b></button></Link>
                            <Link to="/Hiretalent"><button style={{marginRight:'20px'}}  className="navbar-button hire"><b>Hire </b></button></Link>

                        </div>
                    </nav>
                </Col>

            </Row>

            <Row className="square border-bottom  d-block d-sm-none" style={{position:'fixed',top:'0px',zIndex:'1000',width:'100%',backgroundColor:'white',height:'70px'}}>

                <Col  xs={12} >
                    <nav className="navbar mt-2 ">
                        <div className="left-side mt-1">

                            <img width={100} src={Wiraalogo} alt="" />



                        </div>
                        <div className="navbar-right1 mt-1 mb-1 ">
                            {/* <Link to='/Switchacc'><button className="navbar-button switch"><b>Switch  </b></button></Link> */}
                            {/* <Link to="/Hiretalent"><button className="navbar-button hire"><b>Hire </b></button></Link> */}
                            <Link to='/'><svg style={{color:'grey',marginRight:'20px'}} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
                                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                            </svg>  </Link>
                        </div>
                    </nav>
                </Col>

            </Row>
        </>
    )
}
export default Topnavbar;