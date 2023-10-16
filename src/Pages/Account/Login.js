import React, { useState } from "react";
import { Container, Row, Col, Card, Modal } from 'react-bootstrap'
import '../../asset/css/account.css';
import { Link } from "react-router-dom";
import { Button, TextField } from '@mui/material';
import wirralogo from '../../asset/image/Wiraalogo.png';
import Accountfooter from '../../Layout/Accountfooter';
import { helper } from '../../lib/helper';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
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
        window.location.replace("/user/dashboard")
        console.log( response?.data)
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
        <Container style={{ height: '92.6vh' }} >
          <Row>
            <Col sm={3}>
            </Col>
            <Col sm={6} xs={12} style={{padding:'10px'}} className='signup  '>
              <center> <Link to="/"> <img src={wirralogo} alt="" className="mb-5" /></Link> </center>
              <Card className="shadow-5 login-card" style={{ border: 'none', boShadow: "0 14px 26px -12px rgb(54 191 244 / 42%), 0 4px 23px 0px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(54 165 244 / 20%);" }}>
                <h2 style={{ marginTop: "20px", marginLeft: "50px" }}>Login</h2>
                <span style={{ marginLeft: '50px', marginTop: '-5px', color: '#008080', fontWeight: '500' }}>Login now & find projects through our community</span>
                <form onSubmit={handleSubmit}>
                  <div className='m-5'>
                    <TextField id="outlined-basic" onChange={handleChange} name='email' className='mt-3 mb-3' label=" Email Id" fullWidth placeholder=" Your  Email Id" variant="outlined" size='small' />
                    {/* <TextField id="outlined-basic" onChange={handleChange} name='password' className='mt-3' label=" Password" fullWidth placeholder=" Your Password(6+characters)" variant="outlined" size='small' /> */}


                    <FormControl  fullWidth variant="outlined">
                      <InputLabel  htmlFor="outlined-adornment-password">Password</InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                            >
                              {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="Password"
                        size="small"
                        fullWidth
                        onChange={handleChange} name='password'
                      />
                    </FormControl>
                    <div className="mt-2 mb-4">
                      <span className='text-disable text-center small '><input type='checkbox' style={{ marginRight: '10px', marginTop: '5px', position: "relative", float: 'left' }} />Save password</span>
                      <span onClick={handleShow} style={{ cursor: 'pointer', marginRight: '10px', position: "relative", float: 'right' }}><u>Forget your Password</u></span>
                    </div>

                    <button type='submit' className='mt-3 mb-4 btn' style={{ width: "-webkit-fill-available", backgroundColor: "#008080", color: 'white' }}><b>LOGIN</b></button>

                    <h6 className='text-center'> <b>Register Now <u><Link to='/Account/singup'><span className='text-primary' style={{ cursor: "default" }}>Signup</span></Link></u></b></h6>
                  </div>
                </form>
              </Card>
            </Col>




            <Col sm={3}>
            </Col>
          </Row>
        </Container>




      </div>

      <Accountfooter />



      <Modal show={show} onHide={handleClose}>



        <Card className="shadow-5 login-card" style={{ border: 'none', boShadow: "0 14px 26px -12px rgb(54 191 244 / 42%), 0 4px 23px 0px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(54 165 244 / 20%);" }}>
          {/* <center className="mt-5"><img src={wirralogo} alt="" className="mb-2" /></center> */}
          <h2 className="mt-5 mb-2" style={{ marginLeft: "50px" }}>Reset password</h2>
          <span style={{ marginLeft: '50px', color: '#008080', fontWeight: '500' }}>Let me first find your account </span>
          <form onSubmit={handleSubmit}>
            <div className='m-5'>
              <TextField id="outlined-basic" onChange={handleChange} name='email' className='mt-3' label=" Email Id" fullWidth placeholder=" Your  Email Id" variant="outlined" />
              {/* <TextField id="outlined-basic" onChange={handleChange} name='password' className='mt-3' label=" Password" fullWidth placeholder=" Your Password(6+characters)" variant="outlined" size='small' /> */}



              {/* <button type='submit' className='mt-5 btn' style={{ width: "-webkit-fill-available", backgroundColor: "#008080", color: 'white' }}><b>Reset Password</b></button> */}
              <div fullWidth style={{ backgroundColor: 'pink' }} className="mt-4 mb-4">
                {/* <span className='text-disable text-center small '><input type='checkbox' style={{ marginRight: '10px', marginTop: '5px', position: "relative", float: 'left' }} />Save password</span> */}
                {/* <span onClick={handleShow} style={{ cursor: 'pointer', marginRight: '10px', position: "relative", float: 'right' }}><u>Forget your Password</u></span> */}
                <Button style={{ backgroundColor: '#008080', color: 'white' }} fullWidth >Reset Password</Button>
              </div>
              <h6 className='text-center mt-5'> <Link to='/Account/login'><b style={{ cursor: 'pointer' }}>Back to Login <u>
                {/* <span className='text-primary' style={{ cursor: "default" }}>Login</span> */}
              </u></b></Link>  </h6>
            </div>
          </form>
        </Card>

      </Modal>

    </>
  )



}

export default Login
