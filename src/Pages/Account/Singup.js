import React, { useState } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import '../../asset/css/account.css'
import { Link } from "react-router-dom";
import { TextField } from '@mui/material';
import wirralogo from '../../asset/image/Wiraalogo.png';
import Accountfooter from '../../Layout/Accountfooter'
import { helper } from '../../lib/helper';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AuthModal from '../../modal/Auth.modal';

function Singup() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    password: '',
    email: ''

  });
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    AuthModal.singUp(formData)
      .then((response) => {
        if (response.data.status === true) {
          const accessToken = response?.data?.token;
          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem("UserID", response.data?.signupResult[0]?.UserID);
          localStorage.setItem("userProfileId", response.data.signupResult[0]?.UsersProfileID);
          localStorage.setItem("UserType", response.data.signupResult[0]?.UserType);
          console.log(response.data);
          helper.sweetalert.toast("Registered Successfully")
          window.location.replace("/user/dashboard")
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Container >
        <Row>
          <Col sm={3}>
          </Col>
          <Col sm={6} style={{padding:'10px'}} className='signup mb-3 mt-2'>

            <center><img src={wirralogo} alt="" className="mb-4" /></center>
            <Card className='shadow-3 ' >
              <h2 style={{ marginTop: "20px", marginLeft: "50px" }}>Sign up</h2>
              <span style={{ marginLeft: '50px', marginTop: '-5px', color: '#008080', fontWeight: '500' }}>Sign up & connect with the people who can help</span>
              <div className='m-5'>
                <form onSubmit={handleSubmit}>
                  <TextField id="outlined-basic" required onChange={handleInputChange} name='firstName' label=" First Name" fullWidth placeholder=" Your First Name" variant="outlined" size='small' />
                  <TextField id="outlined-basic" required onChange={handleInputChange} name='lastName' className='mt-3' label=" Last Name" fullWidth placeholder=" Your Last Name" variant="outlined" size='small' />
                  <TextField id="outlined-basic" required onChange={handleInputChange} name='email' className='mt-3 mb-3' label=" Email Id" fullWidth placeholder=" Your  Email Id" variant="outlined" size='small' />
                  <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
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
                      onChange={handleInputChange} name='password'
                    />
                  </FormControl>

                  <button type='submit' className='mt-3 btn' style={{ width: "-webkit-fill-available", backgroundColor: "#008080", color: 'white' }}><b>CREATE ACCOUNT</b></button>
                  <p className='text-disable text-center small mt-2'><input type='checkbox' style={{ marginRight: '10px' }} />Yes, I understand and agree to Wiraa Terms and Privacy Policy</p>
                  <h6 className='text-center'> <b>Already a member?  <u><Link to='/Account/login'><span className='text-primary' style={{ cursor: "default" }}>Login</span></Link></u></b></h6>
                </form>
              </div>
            </Card>

          </Col>
          <Col sm={3}>
          </Col>
        </Row>
      </Container>
      <Accountfooter />
    </div>
  )
}

export default Singup
