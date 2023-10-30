import React, { useState } from "react";
import { Container, Row, Col, Card, Modal } from 'react-bootstrap'
import '../../asset/css/account.css';
import { Link } from "react-router-dom";
import { Button, Grid, TextField } from '@mui/material';
import wirralogo from '../../asset/image/Wiraalogo.png';
import Accountfooter from '../../Layout/Accountfooter';
import { helper } from '../../lib/helper';
// import FormControl from '@mui/material/FormControl';
// import InputLabel from '@mui/material/InputLabel';
// import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AuthModal from "../../modal/Auth.modal";
const Login = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    AuthModal.login(form).then((response) => {
      if (response.data.status === true) {
        const accessToken = response?.data?.token;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem("UserID", response.data.user.UserID);
        localStorage.setItem("userProfileId", response.data.user.UsersProfileID);
        localStorage.setItem("UserType", response.data.user.UserType);
        localStorage.setItem("FirstName", response.data.user.FirstName);
        console.log(response.data);
        window.location.replace("/user/dashboard")
        console.log(response?.data)
        helper.sweetalert.toast("Welcome Back")

      }
    })
      .catch((error) => {
        helper.sweetalert.toast1("Incorrect username or password.")
        // Display error message to the user
      });
  };

  return (
    <>
      <div>
        <Grid container spacing={3}>
          {/* <Container style={{ height: '92.6vh' }} > */}

          <Grid sm={4}></Grid>
          <Grid sm={4} xs={12} style={{ padding: '10px' }} className='signup  '>
            <center> <Link to="/"> <img src={wirralogo} alt="" className="m-5 " /></Link> </center>
            <Card className="shadow-5 login-card " style={{ borderRadius: '8px', border: 'none', boShadow: "0 14px 26px -12px rgb(54 191 244 / 42%), 0 4px 23px 0px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(54 165 244 / 20%);" }} >
              <h2 style={{ marginTop: "20px", marginLeft: "50px" }}>Login</h2>
              <p style={{ marginLeft: '50px', color: '#008080', fontWeight: '500' }}>Login now & find projects through our community </p>

              <form style={{ padding: '10px 10px' }} onSubmit={handleSubmit}>
                <div className='mt-3' style={{ marginLeft: '40px', marginRight: '40px' }}>
                  <TextField id="outlined-basic" onChange={handleChange} name='email' className='mb-3' label=" Email Id" fullWidth placeholder=" Your  Email Id" variant="outlined" />




                  <TextField
                    fullWidth
                    label="Password"
                    name="password"
                    // size='small'
                    style={{ backgroundColor: 'white' }}
                    type={showPassword ? "text" : "password"}
                    variant="outlined"
                    value={formData.password}
                    onChange={handleChange}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end" style={{ backgroundColor: "##E8F0FE" }}>
                          <IconButton onClick={handleClickShowPassword} style={{ backgroundColor: "##E8F0FE" }}>
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />

                  <div className="mt-2 mb-4">
                    <span className='text-disable text-center small '><input type='checkbox' style={{ cursor: 'pointer', marginRight: '10px', marginTop: '5px', position: "relative", float: 'left' }} /> <span style={{ cursor: 'auto' }}>  Save password  </span>  </span>

                    <span onClick={handleShow} style={{ cursor: 'pointer', marginRight: '10px', position: "relative", float: 'right' }}><u>Forget your Password</u></span>

                  </div>

                  <button type='submit' className='mt-3 mb-4 btn' style={{ width: "-webkit-fill-available", backgroundColor: "#008080", color: 'white' }}><b>LOGIN</b></button>

                  <h6 className='text-center mb-4'> <b>Register Now <u><Link to='/Account/singup'><span className='text-primary' style={{ cursor: "pointer" }}>Signup</span></Link></u></b></h6>
                </div>
              </form>
            </Card>
          </Grid>

          <Grid xs={4}></Grid>


          <Accountfooter />
          {/* </Container> */}
        </Grid>
      </div>





      <Modal centered show={show} onHide={handleClose}>



        <Card className="shadow-5 login-card" style={{ borderRadius: '10px', border: 'none', boShadow: "0 14px 26px -12px rgb(54 191 244 / 42%), 0 4px 23px 0px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(54 165 244 / 20%);" }}>
          <h2 className="mt-5 mb-2" style={{ marginLeft: "50px" }}>Reset password</h2>
          <span style={{ marginLeft: '50px', color: '#008080', fontWeight: '500' }}>Let me first find your account </span>
          <form onSubmit={handleSubmit}>
            <div style={{ padding: '5px 30px' }} className='m-4'>
              <TextField id="outlined-basic" onChange={handleChange} name='email' label=" Email Id" fullWidth placeholder=" Your  Email Id" variant="outlined" />

              <div fullWidth style={{ backgroundColor: 'pink' }} className="mt-4 mb-4">

                <Button style={{ backgroundColor: '#008080', color: 'white' }} fullWidth >Reset Password</Button>
              </div>

              <h6 className='text-center mt-5'> <b onClick={handleClose} style={{ cursor: 'pointer' }}><u> Back to Login

              </u></b>  </h6>
            </div>
          </form>
        </Card>

      </Modal>

    </>
  )



}

export default Login;
