import React ,{useState} from "react";
import { Container, Row, Col, Card } from 'react-bootstrap'
import '../../Aseset/css/account.css';
// import InputGroup from 'react-bootstrap/InputGroup';
import Auth from "../../Model/Auth.model";
import { Link } from "react-router-dom";
import { TextField } from '@mui/material';
import wirralogo from '../../Aseset/image/Wiraalogo.png';
import Accountfooter from '../../Layout/Accountfooter';
import { helper } from '../../lib/helper';
const Login = () => {
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
    Auth.login(form)
      .then((response) => {
        const accessToken = response?.data?.token;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem("UserID", response.data.user[0].UserID);

        window.location.replace("/user/dashboard")
        helper.sweetalert.toast("Welcome Back")
      })
      .catch((error) => {
        console.log(error);
        // Display error message to the user
      });
  };
  
    return (
      <>
        <div>
          <Container >
            <Row>
              <Col sm={3}>
              </Col>
              <Col sm={6} className='signup mb-4 mt-5'>
                <center><img src={wirralogo} alt="" className="mb-4" /></center>
                <Card className="shadow-5 login-card" style={{ boShadow: "0 14px 26px -12px rgb(54 191 244 / 42%), 0 4px 23px 0px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(54 165 244 / 20%);" }}>
                  <h2 style={{ marginTop: "20px", marginLeft: "50px" }}>Login</h2>
                  <span style={{ marginLeft: '50px', marginTop: '-5px', color: '#008080', fontWeight: '500' }}>Login now & find projects through our communitlp</span>
                  <form onSubmit={handleSubmit}>
                  <div className='m-5'>
                    <TextField id="outlined-basic" onChange={handleChange} name='email' className='mt-3' label=" Email Id" fullWidth placeholder=" Your  Email Id" variant="outlined" size='small' />
                    <TextField id="outlined-basic" onChange={handleChange} name='password' className='mt-3' label=" Password" fullWidth placeholder=" Your Password(6+characters)" variant="outlined" size='small' />



                    <button type='submit' className='mt-3 btn' style={{ width: "-webkit-fill-available", backgroundColor: "#008080", color: 'white' }}><b>LOGIN</b></button>
                    <div className="mt-4 mb-4">
                      <span className='text-disable text-center small '><input type='checkbox' style={{ marginRight: '10px', position: "relative", float: 'left' }} />Save password</span>
                      <span style={{ marginRight: '10px', position: "relative", float: 'right' }}><u>Forget your Password</u></span>
                    </div>
                    <h6 className='text-center'> <b>Already a member?  <u><Link to='/Account/login'><span className='text-primary' style={{ cursor: "default" }}>Login</span></Link></u></b></h6>
                  </div>
                  </form>
                </Card>
              </Col>
              <Col sm={3}>
              </Col>
            </Row>
          </Container>
          <Accountfooter />
        </div>

      </>
    )



}

export default Login
