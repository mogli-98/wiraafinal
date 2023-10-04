import React from 'react'
// import { Container, Row, Col } from 'react-bootstrap';
import Wiraalogo from "../asset/image/Wiraalogo.png"
import { Link } from 'react-router-dom';
// import React from 'react';
// import '../Aseset/css/Accountfootor.css' ;
import "../asset/css/accountfooter.css";


function Accountfootor() {
    return (
        <>
            <footer   className="Account_footer d-flex ">
                <div  className="container">
                    <div  className="row">

                        <div  className=" Account_footercontent col-md-12 col-sm-12 " > {/* Center the content */}
                        <Link to='/'><img src={Wiraalogo} alt="LOGO" /></Link>
                            
                            <p className='pt-3' >@2023</p>
                            <Link to='/About Us'><p className='pt-3' >About Us</p></Link>
                            <Link to='/About Us'><p className='pt-3'>Terms & Conditions</p></Link>
                            <Link to='/PrivacyPolicy'><p className='pt-3'  >Privacy Policy</p></Link>
                            <Link to='/UserAgreement'><p className='pt-3'>Client Agreement</p></Link>
                            <Link to='/ProfessionalServiceAgreement'><p className='pt-3'>Professional Agreement</p></Link>
                            <Link to='/About Us'><p className='pt-3'>Blog</p></Link>
                            <Link to='/Career'><p className='pt-3'>Career</p></Link>
                            <Link to='/ContactComponent'><p className='pt-3'>Contact</p></Link>
                            
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Accountfootor;