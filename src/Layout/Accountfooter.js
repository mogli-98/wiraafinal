import React from 'react'
// import { Container, Row, Col } from 'react-bootstrap';
import Wiraalogo from "../asset/image/Wiraalogo.png"
import { Link } from 'react-router-dom';
// import React from 'react';
// import '../Aseset/css/Accountfootor.css' ;
import "../asset/css/accountfooter.css";
import { Col, Row } from 'react-bootstrap';


function Accountfootor() {
    return (
        <>
            <footer style={{ marginBottom: '0px', backgroundColor: 'white', width: '100%', position: "absolute" }} className="Account_footer d-flex  ">
                <div className="container d-none d-sm-block">
                    <div className="row">

                        <div className="Account_footercontent" > {/* Center the content */}

                            <Link style={{ display: 'flex', flexDirection: 'row' }} to='/'><img src={Wiraalogo} alt="LOGO" /> <span style={{ color: 'grey', fontWeight: 400, fontSize: '14px', paddingLeft: '5px' }}>@2023</span> </Link>

                            <Link to='/About Us'><p className='pt-3' >About Us</p></Link>
                            <Link to='/Termsandcondition'><p className='pt-3'>Terms & Conditions</p></Link>
                            <Link to='/PrivacyPolicy'><p className='pt-3'  >Privacy Policy</p></Link>
                            <Link to='/UserAgreement'><p className='pt-3'>Client Agreement</p></Link>
                            <Link to='/ProfessionalServiceAgreement'><p className='pt-3'>Professional Agreement</p></Link>
                            <Link to=''><p className='pt-3'>Blog</p></Link>
                            <Link to='/Career'><p className='pt-3'>Career</p></Link>
                            <Link to='/ContactComponent'><p className='pt-3'>Contact</p></Link>

                        </div>
                        {/* <div className=" Account_footercontent col-md-12 col-sm-12 " > 



                        </div> */}
                    </div>
                </div>



                <div className='container d-block d-sm-none'>

                    {/* <div className='row'>
                        <div className='col-xs-12'>
                            <Link to='/'><img src={Wiraalogo} alt="LOGO" /></Link>
                        </div>
                    </div> */}
                    {/* <div className='row'>
                        <div className='col-xs-6'>
                            <ul>
                                <li> <Link to='/About Us'><p className='pt-3' >About Us</p></Link></li>
                                <li><Link to='/About Us'><p className='pt-3'>Terms & Conditions</p></Link></li>
                                <li><Link to='/PrivacyPolicy'><p className='pt-3'  >Privacy Policy</p></Link></li>
                                <li><Link to='/UserAgreement'><p className='pt-3'>Client Agreement</p></Link></li>

                            </ul>

                        </div>
                        <div className='col-xs-6'>
                            <ul>
                                <li> <Link to='/About Us'><p className='pt-3' >About Us</p></Link></li>
                                <li><Link to='/ProfessionalServiceAgreement'><p className='pt-3'>Professional Agreement</p></Link></li>
                                <li><Link to='/Career'><p className='pt-3'  >Career</p></Link></li>
                                <li><Link to='/ContactComponent'><p className='pt-3'>Contact</p></Link></li>

                            </ul>
                        </div>
                    </div> */}

                    <Row style={{ backgroundColor: 'ButtonHighlight' }}>
                        <Col xs={4}>
                            <div className='center mt-4'>
                                <Link to='/'><img src={Wiraalogo} alt="LOGO" /></Link>
                            </div>

                        </Col>
                        <Col className='mt-4' xs={8}>
                            <p> @ 2023 Copyright</p>
                        </Col>

                        <Col xs={6}>

                            <ul>
                                <li> <Link to='/About Us'><p className='pt-3' >About Us</p></Link></li>
                                <li><Link to='/Termsandcondition'><p className='pt-3'>Terms & Conditions</p></Link></li>
                                <li><Link to='/PrivacyPolicy'><p className='pt-3'  >Privacy Policy</p></Link></li>
                                <li><Link to='/UserAgreement'><p className='pt-3'>Client Agreement</p></Link></li>

                            </ul>

                        </Col>

                        <Col xs={6}>

                            <ul>
                                <li style={{ listStyle: 'none' }}> <Link to='/About Us'><p className='pt-3' >About Us</p></Link></li>
                                <li style={{ listStyle: 'none' }}><Link to='/ProfessionalServiceAgreement'><p className='pt-3'>Professional Agreement</p></Link></li>
                                <li style={{ listStyle: 'none' }}><Link to='/Career'><p className='pt-3'  >Career</p></Link></li>
                                <li style={{ listStyle: 'none' }}><Link to='/ContactComponent'><p className='pt-3'>Contact</p></Link></li>

                            </ul>

                        </Col>


                    </Row>


                </div>
            </footer>

        </>
    )
}

export default Accountfootor;