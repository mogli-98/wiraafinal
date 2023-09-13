import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap'
import '../../Aseset/css/account.css';
// import InputGroup from 'react-bootstrap/InputGroup';
import Auth from "../../Model/Auth.model";
import { Link } from "react-router-dom";
import { TextField } from '@mui/material';
import wirralogo from '../../Aseset/image/Wiraalogo.png';
import Accountfooter from '../../Layout/Accountfooter';

class Login extends React.Component {

  handleClick = (tab) => {
    this.setState({ activeTab: tab });
  };

  constructor(props) {
    super(props);
    this.state = {
      activeTab: "Tab1",
      // formData:{
      email: '',
      password: ''
      // }
    }
  }

  onSubmit = async () => {
    try {
      let response = await Auth.login(this.state);

      if (response.status) {
        if (response.data.status === true) {
          // sessionStorage.setItem("id", response.data.userInfo['userID']);
          localStorage.setItem("id", response.data.userInfo['userID']);

          window.location.replace("/user/dashboard")
        }

      }
    } catch (e) {
      console.log(e);
    }
  }
  onOtp = async () => {
    try {
      let response = await Auth.Otplogin(this.state);
      console.log(response.data);
      if (response.status) {
        if (response.data.status === true) {
          // sessionStorage.setItem("id", response.data.userInfo['userID']);
          localStorage.setItem("id", response.data.userInfo['userID']);

          window.location.replace("/user/dashboard")
        }
      }
    } catch (e) {
      console.log(e);
    }
  }
  render() {
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

                  <div className='m-5'>
                    <TextField id="outlined-basic" className='mt-3' label=" Email Id" fullWidth placeholder=" Your  Email Id" variant="outlined" size='small' />
                    <TextField id="outlined-basic" className='mt-3' label=" Password" fullWidth placeholder=" Your Password(6+characters)" variant="outlined" size='small' />



                    <button type='submit' className='mt-3 btn' style={{ width: "-webkit-fill-available", backgroundColor: "#008080", color: 'white' }}><b>LOGIN</b></button>
                    <div className="mt-4 mb-4">
                      <span className='text-disable text-center small '><input type='checkbox' style={{ marginRight: '10px', position: "relative", float: 'left' }} />Save password</span>
                      <span style={{ marginRight: '10px', position: "relative", float: 'right' }}><u>Forget your Password</u></span>
                    </div>
                    <h6 className='text-center'> <b>Already a member?  <u><Link to='/Account/login'><span className='text-primary' style={{ cursor: "default" }}>Login</span></Link></u></b></h6>
                  </div>
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


}

export default Login
