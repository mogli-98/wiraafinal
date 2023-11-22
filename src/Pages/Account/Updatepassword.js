import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import wirralogo from '../../asset/image/Wiraalogo.png'
import { TextField } from '@mui/material'
import lock from '../../asset/image/lock.png'
import AuthModal from '../../modal/Auth.modal'
import { helper } from '../../lib/helper'
const Updatepassword = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    console.log('Token:', token);
    const [formData, setFormData] = useState({
        password: '',
    });
    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const from = new FormData(event.target);
        console.log("fomr ", from);
        AuthModal.updatepassword({ token }, from).then((res) => {
            helper.sweetalert.toast("Your Email is Verifiyed")
            window.location.replace("/Account/login")
        }).catch((error) => {
            console.log(error);
        });
    }
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <center>
                            <Link to="/"> <img src={wirralogo} alt="" className="m-5 " /></Link>
                            <div className='card' style={{ width: '40%', marginTop: '2vh', borderRadius: '8px', boxShadow: "0 14px 26px -12px rgb(54 191 244 / 42%), 0 4px 23px 0px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(54 165 244 / 20%);" }}>
                                <form onSubmit={handleSubmit}>
                                    <Container>
                                        <center>
                                            <img src={lock} alt="" style={{ height: '150px', width: '150px' }} className='mt-4' />
                                        </center>
                                        <Row>
                                            <Col sm={3}></Col>
                                            <Col md={6} sm={12}>
                                                <h4 className='mt-4 mb-4' >Update Password</h4>
                                                <TextField type="text" required onChange={handleInputChange} name='password' placeholder="Enter New Password" size='small' fullWidth />
                                            </Col>
                                        </Row>
                                    </Container>
                                    <button type="submit" style={{ padding: '7px', width: '30%', backgroundColor: '#008080', borderRadius: '8px', borderStyle: 'none', color: 'white' }} className='mt-3 mb-3'><b>Submit</b></button>
                                </form>
                            </div>
                        </center>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Updatepassword
