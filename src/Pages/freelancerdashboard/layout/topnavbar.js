import React from "react";
import { Row,Col } from "react-bootstrap";
import { Link } from "react-router-dom";
function Topnavbar() {
    return (
        <>
            <Row>
                <Col sm={12} >
                    <nav className="navbar mt-3 square border-bottom">
                        <div className="left-side">
                            <h3><b>HOME</b></h3>
                        </div>
                        <div className="navbar-right1">

                            <Link to='/Switchaccount'><button className="navbar-button switch"><b>Switch Account</b></button></Link>
                            <Link to="/Hiretalent"><button className="navbar-button hire"><b>Hire talent</b></button></Link>

                        </div>
                    </nav>
                </Col>

            </Row>
        </>
    )
}
export default Topnavbar