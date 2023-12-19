import React, { useEffect } from 'react';
import "../../asset/css/AccfooContactus.css";
// import Wiraalogo from "../../Aseset/image/Wiraalogo.png";
// import Wiraaalogo from "../../Aseset/image/Wiraalogowhite.png";
import Accountfootor from '../../Layout/Accountfooter';
import Navbar from '../../Layout/Header';
import { Col, Container, Row } from 'react-bootstrap';
import { Button, Link, TextField } from '@mui/material';

function ContactComponent() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (

    <>
      <div className="bb-full-width bb-top-menubar-logedout" style={{ backgroundColor: 'white' }}>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-6 pr-0">
              <a href="/" className="d-inline-block float-left">
              </a>
            </div>

          </div>
        </div>
      </div>

      <div className="bb-full-width pb-5" style={{ backgroundColor: 'white' }}>
        <div className="bb-contact-container">
          <div className="bb-full-width bb-contact-box">
            <div className="bb-full-width text-center">
              <h2 style={{ padding: '20px', color: '#008080' }} className="head-welcome bb-full-width">Contact Us</h2>
            </div>



            <Container className='mt-5'>


              <div className='m-4'>
                <form style={{ padding: '10px 30px' }} >

                  <TextField id="outlined-basic" required name='firstName' label=" First Name" fullWidth placeholder=" Your First Name" variant="outlined" />
                  <TextField id="outlined-basic" required name='lastName' className='mt-3' label=" Last Name" fullWidth placeholder=" Your Last Name" variant="outlined" />
                  <TextField id="outlined-basic" required name='email' className='mt-3 mb-3' label=" Email Id" fullWidth placeholder=" Your  Email Id" variant="outlined" />
                  <TextField
                    fullWidth
                    label="Password"
                    name="password"

                    // type={showPassword ? "text" : "password"}
                    variant="outlined"
                  // value={formData.password}
                  // onChange={handleInputChange}

                  // InputProps={{
                  //   endAdornment: (
                  //     <InputAdornment position="end">
                  //       <IconButton onClick={handleClickShowPassword}>
                  //         {showPassword ? <VisibilityOff /> : <Visibility />}
                  //       </IconButton>
                  //     </InputAdornment>
                  //   ),
                  // }}
                  />


                  {/* <button type='submit' className='mt-5 btn' style={{ width: "-webkit-fill-available", backgroundColor: "#008080", color: 'white' }}><b>CREATE ACCOUNT</b></button> */}
                  {/* <p className='text-disable text-center small mt-2'><input required type='checkbox' style={{ marginRight: '10px', cursor: 'pointer' }} />Yes, I understand and agree to Wiraa Terms and Privacy Policy</p> */}
                  {/* <h6 className='text-center'> <b>Already a member?  <u><Link to='/Account/login'><span className='text-primary' style={{ cursor: "pointer" }}>Login</span></Link></u></b></h6> */}
                  <div fullWidth className="form-group mt-5 ">
                    <Button fullWidth style={{ backgroundColor: '#008080', color: 'white' }}   >Submit</Button>
                  </div>
                  <div>
                    <div className="bb-contact-box-saprator text-center ">
                      <span>Or Connect With</span>
                    </div>
                    {/* <div cl/assName="bb-full-width"> */}
                    <div className="bb-contat-social-box">

                      <a href="https://www.instagram.com/wiraaworld" target='blank'> <i style={{ padding: '10px' }} className="fab fa-instagram" > </i> </a>

                      <a href=" https://www.linkedin.com/company/wiraa" target='blank'> <i style={{ padding: '10px' }} className="fab fa-linkedin "></i> </a>

                      <a href="https://www.facebook.com/wiraaworld" target="blank"> <i style={{ padding: '10px' }} className="fab fa-facebook"></i> </a>

                     


                     

                      {/* </div> */}
                    </div>
                    <div className="bb-full-width text-center">

                      <a href="mailto:hello@wiraa.com" className="text-info bb-mail-link"> <span style={{color:'#00808'}} > hello@wiraa.com   </span> </a>
                    </div>



                  </div>

                </form>
              </div>

            </Container>











            <div className="bb-full-width bb-contat-social-sec">





            </div>
          </div>
        </div>
      </div>

      <Accountfootor />

    </>
  );
}

export default ContactComponent;
