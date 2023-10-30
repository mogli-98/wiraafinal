import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import '../../asset/css/account.css'
import { Link } from "react-router-dom";
import { Grid, TextField } from '@mui/material';
import wirralogo from '../../asset/image/Wiraalogo.png';
import Accountfooter from '../../Layout/Accountfooter'
import { helper } from '../../lib/helper';
// import FormControl from '@mui/material/FormControl';
// import InputLabel from '@mui/material/InputLabel';
// import OutlinedInput from '@mui/material/OutlinedInput';
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
    const form = new FormData(event.target);
    AuthModal.singUp(form).then((response) => {
      if (response.data.status === true) {
        const accessToken = response?.data?.token;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem("UserID", response.data.user.UserID);
        localStorage.setItem("userProfileId", response.data.user.UsersProfileID);
        localStorage.setItem("UserType", response.data.user.UserType);
        localStorage.setItem("FirstName", response.data.signupResult[0]?.FirstName);
        console.log(response.data);
        window.location.replace("/user/dashboard")
        console.log(response?.data)
        helper.sweetalert.toast("Registered Successfully")

      }
    })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Grid container spacing={3}>
        <Grid xs={4}></Grid>

        <Grid item xs={4}>

          <Grid> <Link to="/">

            <center><img style={{ pointer: 'cursor' }} src={wirralogo} alt="" className="mt-4 mb-4" /></center>
          </Link>
            <Card className='shadow-5 login-card' style={{ borderRadius: '10px', border: 'none', boxShadow: "0 14px 26px -12px rgb(54 191 244 / 42%), 0 4px 23px 0px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(54 165 244 / 20%);" }} >
              <h2 style={{ marginTop: "20px", marginLeft: "55px" }}>Sign up</h2>
              <span style={{ marginLeft: '55px', marginTop: '-5px', color: '#008080', fontWeight: '500' }}>Sign up & connect with the people who can help</span>

              <div className='m-4'>
                <form style={{ padding: '10px 30px' }} onSubmit={handleSubmit}>

                  <TextField id="outlined-basic" required onChange={handleInputChange} name='firstName' label=" First Name" fullWidth placeholder=" Your First Name" variant="outlined" />
                  <TextField id="outlined-basic" required onChange={handleInputChange} name='lastName' className='mt-3' label=" Last Name" fullWidth placeholder=" Your Last Name" variant="outlined" />
                  <TextField id="outlined-basic" required onChange={handleInputChange} name='email' className='mt-3 mb-3' label=" Email Id" fullWidth placeholder=" Your  Email Id" variant="outlined" />
                  <TextField
                    fullWidth
                    label="Password"
                    name="password"

                    type={showPassword ? "text" : "password"}
                    variant="outlined"
                    value={formData.password}
                    onChange={handleInputChange}

                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton onClick={handleClickShowPassword}>
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />


                  <button type='submit' className='mt-5 btn' style={{ width: "-webkit-fill-available", backgroundColor: "#008080", color: 'white' }}><b>CREATE ACCOUNT</b></button>
                  <p className='text-disable text-center small mt-2'><input required type='checkbox' style={{ marginRight: '10px', cursor: 'pointer' }} />Yes, I understand and agree to Wiraa Terms and Privacy Policy</p>
                  <h6 className='text-center'> <b>Already a member?  <u><Link to='/Account/login'><span className='text-primary' style={{ cursor: "pointer" }}>Login</span></Link></u></b></h6>
                </form>
              </div>
            </Card>
          </Grid>

          <Grid xs={4}></Grid>
        </Grid>

      </Grid>

      <Accountfooter />
    </div>
  )
}

export default Singup;
