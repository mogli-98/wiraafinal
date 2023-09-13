import React, { useState } from 'react'
import { Container, Row, Col,Card,Form } from 'react-bootstrap'
import '../../Aseset/css/account.css'
import Auth from '../../Model/Auth.model';
import { Link } from "react-router-dom";
import { TextField } from '@mui/material';
import wirralogo from '../../Aseset/image/Wiraalogo.png';
import Accountfooter from '../../Layout/Accountfooter'
function Singup() {
  
    const [formData, setFormData] = useState({
        firstName: '',
        lastName:'',
        contactNumber: '',
        password: '',
        email:''
      
      });
      const handleInputChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        Auth.singUp(formData)
          .then((response) => {
            console.log(response.data);
            // Display success message to the user
          })
          .catch((error) => {
            console.log(error);
            // Display error message to the user
          });
      };
  return (
    <div>
        <Container >
            <Row>
              <Col sm={3}> 
              </Col>
              <Col sm={6} className='signup mb-4 mt-5'>
                    
               <center><img src={wirralogo} alt="" className="mb-4" /></center>
                 <Card className='shadow-3 ' >
                        <h2 style={{marginTop:"20px",marginLeft:"50px"}}>Sign up</h2>
                        <span style={{marginLeft:'50px',marginTop:'-5px',color:'#008080',fontWeight:'500'}}>Sign up & connect with the people who can help</span>
                        <div className='m-5'>
                            <Form onSubmit={handleSubmit}>
                            <TextField id="outlined-basic" label=" First Name" fullWidth  placeholder=" Your First Name"  variant="outlined" size='small'  />
                            <TextField id="outlined-basic" className='mt-3' label=" Last Name" fullWidth  placeholder=" Your Last Name"  variant="outlined" size='small'  />
                            <TextField id="outlined-basic"  className='mt-3' label=" Email Id" fullWidth  placeholder=" Your  Email Id"  variant="outlined" size='small'  />
                            <TextField id="outlined-basic"  className='mt-3' label=" Password" fullWidth  placeholder=" Your Password(6+characters)"  variant="outlined" size='small'  />

                                
                                
                                <button type='submit' className='mt-3 btn' style={{width: "-webkit-fill-available" ,backgroundColor:"#008080" ,color:'white'}}><b>CREATE ACCOUNT</b></button>
                                <p  className='text-disable text-center small mt-2'><input type='checkbox' style={{marginRight:'10px'}} />Yes, I understand and agree to Wiraa Terms and Privacy Policy</p>
                                <h6 className='text-center'> <b>Already a member?  <u><Link to='/Account/login'><span className='text-primary' style={{cursor:"default"}}>Login</span></Link></u></b></h6>
                            </Form>
                        </div>
                    </Card>
                
                </Col>
                <Col sm={3}> 
              </Col>
            </Row>
        </Container>
        <Accountfooter/>
    </div>
  )
}

export default Singup
