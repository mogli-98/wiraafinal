import React from 'react';
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { useContext } from 'react';
import Wiraalogo from '../../../asset/image/Wiraalogo.png';
import { IoNotificationsOutline } from 'react-icons/io5';

const Topnav = ({ activeLink }) => {

    return (
        <>
            <Row style={{ height: '73px',top:'0px',zIndex:100 }} className="square border-bottom  d-none d-sm-block">

                <Col sm={12} >
                    <nav className="navbar mt-2 ">
                        <div className="left-side mt-1">
                            <h4 style={{marginTop:'10px',marginLeft:'20px'}}><b>{activeLink}</b></h4>
                        </div>
                        <div className="navbar-right1 mt-2 mb-2 ">
                            <Link to='/Switchacc'><button className="navbar-button switch"><b>Switch <sup style={{ color: 'red', fontWeight: 600 }}> pro</sup> </b></button></Link>
                            <Link to="/Hiretalent"><button style={{marginRight:'20px'}}  className="navbar-button hire"><b>Hire </b></button></Link>
                        </div>

                    </nav>
                </Col>

            </Row>



            <Row className="square border-bottom  d-block d-sm-none" style={{position:'fixed',top:'0px',zIndex:'1000',width:'100%',backgroundColor:'white',height:'60px'}}>

                <Col xs={12} >
                    <nav className="navbar mt-2 ">
                        <div className="left-side mt-1">

                            <img style={{ marginLeft: '20px' }} width={100} src={Wiraalogo} alt="" />



                        </div>
                        <div className="navbar-right1 mt-1 mb-1 ">
                            <Link to='/'>
                                < IoNotificationsOutline style={{ fontSize: '22px', marginRight: '20px' }} />
                            </Link>
                        </div>
                    </nav>
                </Col>

            </Row>




        </>
    )
}
export default Topnav;
