import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Wiraalogowhite from "../asset/image/Wiraalogowhite.png";
import { Link } from 'react-router-dom';
function Footor() {
    return (
        <>
            <section className='bg-dark mt-5 Footer_content'>
                <Container fluid>
                    <Row className=''>
                        <Col sm={2}>
                        </Col>
                        <Col sm={2} xs={12}>
                            <center>   <Link to='/'><img src={Wiraalogowhite} alt="" className='' /></Link></center>
                            <p className='text-light footertext mb-5'>Connect With Experts</p>
                        </Col>
                        <Col sm={2} xs={6}>
                            <ul className='footerul1'>
                                <ol className='text-light'>
                                    <p>Join</p>
                                </ol>
                                <ol className='text-light'>
                                    <Link to='/About Us'> <p>About Us</p></Link>
                                </ol>

                                <ol className='text-light'>
                                    <p>Terms & Conditions</p>
                                </ol>


                            </ul>
                        </Col>
                        <Col sm={2} xs={6}>
                            <ul className='footerul1' >
                                <ol className='text-light'>
                                    <Link to='/Career'><p>Career</p></Link>

                                </ol>
                                <ol className='text-light'>
                                    <Link to='/ContactComponent'><p>Contact</p></Link>

                                </ol>
                                <ol className='text-light'>
                                    <Link to='/PrivacyPolicy'><p>Privacy Policy</p> </Link>

                                </ol>



                            </ul>
                        </Col>

                        <Col sm={2} xs={12}>
                            <h4 style={{ marginLeft: '20px' }} className='text-light'>Follow Us</h4>
                            <ul className='footerul footerul1 '>

                                {/* <ol className='text-light'> */}

                                <a href="https://www.instagram.com/wiraaworld" target='blank'> <i style={{ padding: '10px', marginLeft: '15px', fontSize: '20px' }} className="fab fa-instagram text-light" > </i> </a>



                                <a href=" https://www.linkedin.com/company/wiraa" target='blank'> <i style={{ padding: '10px', fontSize: '20px' }} className="fab fa-linkedin text-light"></i> </a>

                                <a href="https://www.facebook.com/wiraaworld" target="blank"> <i style={{ padding: '10px', fontSize: '20px' }} className="fab fa-facebook text-light"></i> </a>


                            </ul>
                        </Col>
                        <Col sm={2}>
                        </Col>
                    </Row>
                </Container>
            </section >
        </>
    )
}

export default Footor;
