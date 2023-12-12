import React, { useState } from 'react'
import SettingModal from '../../modal/Setting.modal';
import { helper } from '../../lib/helper';
import { Grid, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import wirralogo from '../../asset/image/Wiraalogo.png';
const UpdateEmail = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get('token');
  console.log('Token:', token);
  const [formData, setformData] = useState({
    email: '',
  })
  const handleInputChange1 = (event) => {
    setformData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const emailverify = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    SettingModal.UpdateEmail({ token }, form).then((res) => {

      helper.sweetalert.toast("Your Email is Verifiyed")
      window.location.replace("/user/Settingd")
    }).catch((error) => {
      console.log(error);
    });

  }
  return (
    <div style={{ backgroundColor: "ButtonFace" }}>
    <Grid container spacing={3}>
      <Grid sm={4}></Grid>
      <Grid sm={4} xs={12} style={{ padding: '10px' }} className='signup  '>
        <center> <Link to="/"> <img src={wirralogo} alt="" className="m-5 " /></Link> </center>
        
        <Card className="shadow-5 login-card " style={{ borderRadius: '8px', border: 'none', boxShadow: "0 14px 26px -12px rgb(54 191 244 / 42%), 0 4px 23px 0px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(54 165 244 / 20%);" }} >
          <h4 style={{ marginTop: "20px", marginLeft: "50px",marginBottom:'20px' }}>Update Email Address </h4>
          <p style={{ marginLeft: '50px', color: '#008080', fontWeight: '500',marginBottom:'0px' }}>Please, Enter Your Updated Email</p>

          <form style={{ padding: '10px 10px' }} >
            <div  style={{ marginLeft: '40px', marginRight: '40px' }}>

              <TextField id="outlined-basic" name='email' className='mb-2' label=" Email Id" fullWidth placeholder=" Your  Email Id" variant="outlined" />

              {/* <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  // size='small'
                  style={{ backgroundColor: 'white' }}
                  // type={showPassword ? "text" : "password"}
                  variant="outlined"
                  
                
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end" style={{ backgroundColor: "##E8F0FE" }}>
                        <IconButton  style={{ backgroundColor: "##E8F0FE" }}>
                          {/* {showPassword ? <VisibilityOff /> : <Visibility />} }
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />  */}

              {/* <div className="mt-2 mb-4">
                {/* <span className='text-disable text-center small '><input type='checkbox' style={{ cursor: 'pointer', marginRight: '10px', marginTop: '5px', position: "relative", float: 'left' }} /> <span style={{ cursor: 'auto' }}>  Save password  </span>  </span> */}

                {/* <span onClick={handleShow} style={{ cursor: 'pointer', marginRight: '10px', position: "relative", float: 'right' }}><u>Forget your Password</u></span> 

              </div> */}

              <button type='submit' className='mt-3 mb-4 btn' style={{ width: "-webkit-fill-available", backgroundColor: "#008080", color: 'white' }}><b>Submit</b></button>

              {/* <h6 className='text-center mb-4'> <b>Register Now <u><Link to='/Account/singup'><span className='text-primary' style={{ cursor: "pointer" }}>Signup</span></Link></u></b></h6> */}
            </div>
          </form>
        </Card>
      </Grid>
      <Grid xs={4}></Grid>
      {/* <Accountfooter /> */}
    </Grid>
  </div>
  )
}

export default UpdateEmail
