import React, { useState } from "react";
import { Card } from 'react-bootstrap'
import '../../asset/css/account.css';
import { Link } from "react-router-dom";
import { Grid } from '@mui/material';
import wirralogo from '../../asset/image/Wiraalogo.png';
import Accountfooter from '../../Layout/Accountfooter';
import VerifyEmal from "../../asset/image/Verifyemail.png";

const VerifyEmail = (dataloaclhost) => {
     // if (localStorage.getItem("sEmailVerified") === null) {
     //      window.location.replace("/")
     // }

     return (
          <>
               <div>
                    <Grid container spacing={3}>

                         <Grid sm={3}></Grid>
                         <Grid sm={6} xs={12} style={{ padding: '10px' }} className='signup  '>
                              <center> <Link to="/"> <img src={wirralogo} alt="" className="m-5 " /></Link> </center>

                              <Card className="shadow-5 login-card " size="lg" style={{ borderRadius: '8px', border: 'none', boShadow: "0 14px 26px -12px rgb(54 191 244 / 42%), 0 4px 23px 0px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(54 165 244 / 20%);" }} >
                                   <center>
                                        <p style={{ marginTop: "20px", fontSize: '30px' }}>Verify Your Email</p>
                                        <p style={{ color: 'grey' }}>Check your email & click  the link to activate your account</p>
                                        <img src={VerifyEmal} alt="" style={{ width: "100%" }} />
                                   </center>


                                   <form style={{ padding: '10px 10px' }}>
                                        <div className='mt-3' style={{ marginLeft: '40px', marginRight: '40px' }}>

                                        </div>
                                   </form>
                              </Card>
                         </Grid>

                         <Grid xs={3}></Grid>


                         <Accountfooter />

                    </Grid>
               </div>



          </>
     )



}

export default VerifyEmail;