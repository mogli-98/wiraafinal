import React from 'react';
import { Row,Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const  Topnav =({ activeLinkName } )  => { 
  
    return (
        <>
            <Row className="square border-bottom">
                <Col sm={12} >
                    <nav className="navbar mt-4 ">
                        <div className="left-side mt-1">
                            <h4><b>{ activeLinkName }</b></h4>
                        </div>
                        <div className="navbar-right1 mt-1">
                            <Link to='/Switchaccount'><button className="navbar-button switch"><b>Switch Account</b></button></Link>
                            <Link to="/Hiretalent"><button className="navbar-button hire"><b>Hire talent</b></button></Link>
                        </div>
                    </nav>
                </Col>

            </Row>
        </>
    )
}
export default Topnav