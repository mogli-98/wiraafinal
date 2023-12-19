import React from "react";
import { Card, Button } from 'react-bootstrap'
import '../../asset/css/account.css';
import { Link } from "react-router-dom";
import { Grid } from '@mui/material';
import wirralogo from '../../asset/image/Wiraalogo.png';
import Accountfooter from '../../Layout/Accountfooter';
import VerifyEmal from "../../asset/image/Verifyemail.png";
import AuthModal from "../../modal/Auth.modal";
import { helper } from "../../lib/helper";
const CompleteEmail = ({ dataloaclhost }) => {

     console.log('ghjkl-====>0', dataloaclhost)
     const urlParams = new URLSearchParams(window.location.search);
     const token = urlParams.get('token');
     console.log('Token:', token);

     const emailverify = () => {

          AuthModal.Verifyemailuser({ token }).then((res) => {
               if (res.data.status === true) {
                    // localStorage.setItem('accessToken', dataloaclhost.accessToken);
                    // localStorage.setItem("UserID", dataloaclhost.data.user.UserID);
                    // localStorage.setItem("userProfileId", dataloaclhost.data.user.UsersProfileID);
                    // localStorage.setItem("UserType", dataloaclhost.data.user.UserType);
                    // localStorage.setItem("FirstName", dataloaclhost.data.user.FirstName);
                    // localStorage.setItem("AffiliateId",dataloaclhost.data.user.AffiliateId);
                    // localStorage.setItem("UserType",dataloaclhost.data.user.UserType)
                    // localStorage.setItem("AffiliateCode",dataloaclhost.data.user.AffiliateCode)
                    helper.sweetalert.toast("Your Email is Verifiyed")

                    window.location.replace("/user/dashboard")
               } else {
                    window.location.replace("/")
               }
          }).catch((error) => {
               console.log(error);
          });
     }
     return (
          <>
               <div>
                    <Grid container spacing={3}>
                         <Grid sm={3}></Grid>
                         <Grid sm={6} xs={12} style={{ padding: '10px' }} className='signup  '>
                              <center> <Link to="/"> <img src={wirralogo} alt="" className="m-5 " /></Link> </center>
                              <Card className="shadow-5 login-card " size="lg" style={{ padding: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '8px', border: 'none', boShadow: "0 14px 26px -12px rgb(54 191 244 / 42%), 0 4px 23px 0px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(54 165 244 / 20%);" }} >
                                   <p style={{ fontSize: '30px' }}>Your Email is Verified</p>
                                   {/* <p style={{color:'grey'}}>Check your email & click  the link to activate your account</p> */}
                                   <img src={VerifyEmal} alt="" style={{ width: "100%" }} />
                                   <Button style={{ backgroundColor: '#008080', border: 'none', marginTop: '20px', padding: '6px 50px', fontWeight: 600 }} onClick={emailverify}> OK </Button>
                              </Card>
                         </Grid>
                         <Grid xs={3}></Grid>
                         <Accountfooter />
                    </Grid>
               </div>
          </>
     )
}

export default CompleteEmail;