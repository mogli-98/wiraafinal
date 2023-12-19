import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import Sidenav from './layout/Sidenav';
import Topnav from './layout/topnav';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Phoneviewfooter from '../../Layout/Phoneviewfooter';
import { Link } from 'react-router-dom';
import { helper } from '../../lib/helper';
import SettingModal from '../../modal/Setting.modal';
import { CDBPageLink } from 'cdbreact';
import { auth } from '../Account/firebase.config';
import { getAuth, } from "firebase/auth";
import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import { toast, Toaster } from "react-hot-toast";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { CgSpinner } from "react-icons/cg";

import OtpInput from "otp-input-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function Setting() {
    const [blockuserlist, setBlockuserlist] = useState();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    const [show3, setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    const logout = () => {
        sessionStorage.clear();
        localStorage.clear();
    };
    // const handleSubmitPhone = (event) => {

    //     event.preventDefault();
    //     const form = new FormData(event.target);
    //     form.append("update_bus", localStorage.getItem("token"));

    //     Setting.editbusiness(form)
    //         .then((response) => {
    //             console.log(response.data, "yes data update");

    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // };
    const deactiveAccount = () => {
        helper.sweetalert.confirm('Are you sure?', "You won't be able to revert this!", "warning", true).then((result) => {
            if (result.isConfirmed) {

                const userId = parseInt(localStorage.getItem("UserID"));

                SettingModal.accdeactive({ userId }).then((response) => {


                    helper.sweetalert.toast("Submited", 'Your is Account deactive.')
                    sessionStorage.clear();
                    localStorage.clear();
                    window.location.replace("/")

                }).catch((error) => {
                    console.log(error);
                });
            };
        })
    }
    const [formData, setformData] = useState({
        email: '',
    })
    const handleInputChange1 = (event) => {
        setformData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };
    const CheckEmailUdation = (event) => {
        event.preventDefault();
        const form = new FormData(event.target);
        const userId = localStorage.getItem("UserID");
        SettingModal.Checkemail(userId, form).then((respnse) => {
            console.log(respnse.data)
            // setBlockuserlist(respnse.data)
            handleShow2(true)
        }).catch((error) => {
            console.log(error);
        });
    }
    const blockuser = () => {
        const userProfileId = localStorage.getItem("userProfileId");
        SettingModal.Blocklist({ userProfileId }).then((respnse) => {
            console.log(respnse.data)
            setBlockuserlist(respnse.data)
            handleShow2(true)
        }).catch((error) => {
            console.log(error);
        });
    }
    const unblockuser = (UserID) => {
        const userProfileId = localStorage.getItem("userProfileId");
        const userId = UserID;
        SettingModal.Unblockuser({ userProfileId, userId }).then((respnse) => {

            console.log('user unblock', respnse.data)
            helper.sweetalert.toast('Unblock Account')
        }).catch((error) => {
            console.log(error);
        });
    }
    useEffect(() => {

    }, [])
    const [otp, setOtp] = useState("");
    const [ph, setPh] = useState("");
    const [loading, setLoading] = useState(false);
    const [showOTP, setShowOTP] = useState(false);
    const [user, setUser] = useState(null);

    function onCaptchVerify() {
        if (!window.recaptchaVerifier) {
            console.log(auth, "authh")
            window.recaptchaVerifier = new RecaptchaVerifier(
                auth,
                "recaptcha-container",
                {
                    size: "invisible",
                    callback: (response) => {
                        onSignup();
                    },
                    "expired-callback": () => { },
                },
            );
        }
    }

    function onSignup() {
        setLoading(true);
        onCaptchVerify();

        const appVerifier = window.recaptchaVerifier;

        const formatPh = "+" + ph;

        signInWithPhoneNumber(auth, formatPh, appVerifier)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult;
                setLoading(false);
                setShowOTP(true);
                toast.success("OTP sended successfully!");
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }

    function onOTPVerify() {
        setLoading(true);
        window.confirmationResult
            .confirm(otp)
            .then(async (res) => {
                console.log(res);
                setUser(res.user);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            });
    }
    return (
        <>
            <div className='recaptcha-container' id='recaptcha-container'> </div>
            <Container fluid className='dashboard-conatiner-top' >
                <Row>

                    <Col sm={1} className='d-none d-sm-block'>
                        <Sidenav activekey="settings" />
                    </Col>


                    <Col style={{ padding: '0px' }} sm={8} xs={12} className='dashboard-conatiner-top-row  d-none d-sm-block'>
                        <Container className='square border border-bottom-0'>
                            <Topnav activeLink="Setting" />

                            <Row>
                                <Col sm={1}></Col>
                                <Col style={{ marginLeft: '10px', marginTop: '20px' }} sm={10}>

                                    <Card className='mt-2' onClick={handleShow} style={{ backgroundColor: '#D9DDDC', borderColor: "#fff", borderRadius: '10px' }}>
                                        <div className='m-1 setting-text'>
                                            <p style={{ fontSize: '15px', color: 'black', fontWeight: 600, cursor: 'pointer' }} className='mt-3 '><b>Email Address:</b></p>
                                            <p style={{ fontSize: '13px', color: 'grey', cursor: 'pointer' }} className=''>Upload Email address of your account  </p>
                                        </div>
                                    </Card>
                                </Col>
                                <Col sm={1}></Col>
                            </Row>

                            <Row>
                                <Col sm={1}></Col>
                                <Col style={{ marginLeft: '10px' }} sm={10}>
                                    <Card className='mt-2' onClick={handleShow1} style={{ backgroundColor: '#D9DDDC', borderColor: "#fff", borderRadius: '10px' }}>
                                        <div className='m-1 setting-text'>
                                            <p style={{ fontSize: '15px', color: 'black', fontWeight: 600, cursor: 'pointer' }} className='mt-3 '><b>Phone Number 1:</b></p>
                                            <p style={{ fontSize: '13px', color: 'grey', cursor: 'pointer' }} className=''>Upload Phone number in case you have trouble signing in</p>
                                        </div>
                                    </Card>
                                    
                                </Col>
                                <Col sm={1}></Col>
                            </Row>

                            <Row>

                                <Col sm={1}></Col>
                                <Col style={{ marginLeft: '10px' }} sm={10}>
                                    <Card className='mt-2' onClick={blockuser} style={{ backgroundColor: '#D9DDDC', borderColor: "#fff", borderRadius: '10px' }}>
                                        <div className='m-1 setting-text'>
                                            <p style={{ fontSize: '15px', color: 'black', fontWeight: 600, cursor: 'pointer' }} className='mt-3 '><b>Block Accounts:</b></p>
                                            <p style={{ fontSize: '13px', color: 'grey', cursor: 'pointer' }} className=''>When you block someone, that person won’t be able to follow or message you</p>
                                        </div>
                                    </Card>
                                </Col>
                                <Col sm={1}></Col>
                            </Row>

                            <Row>
                                <Col sm={1}></Col>
                                <Col style={{ marginLeft: '10px' }} sm={10}>
                                    <Card className='mt-2' onClick={deactiveAccount} style={{ backgroundColor: '#D9DDDC', borderColor: "#fff", borderRadius: '10px' }}>
                                        <div className='m-1 setting-text'>
                                            <p style={{ fontSize: '15px', color: 'black', fontWeight: 600, cursor: 'pointer' }} className='mt-3 '><b>Deactivate Account:</b></p>
                                            <p style={{ fontSize: '13px', color: 'grey', cursor: 'pointer' }} className=''>Temporarily deactivate your Wiraa account</p>
                                        </div>
                                    </Card>
                                </Col>
                                <Col sm={1}></Col>
                            </Row>
                            <Row>
                                <Col sm={1}></Col>
                                <Col sm={10} style={{ marginLeft: '10px' }}>
                                    <Card className='mt-2' onClick={handleShow3} style={{ backgroundColor: '#D9DDDC', borderColor: "#fff", borderRadius: '10px' }}>
                                        <div className='m-1 setting-text'>
                                            <p style={{ fontSize: '15px', color: 'black', fontWeight: 600, cursor: 'pointer' }} className='mt-3 '><b>Change Password:</b></p>
                                            <p style={{ fontSize: '13px', color: 'grey', cursor: 'pointer' }} className=''>Choose a strong password that you are not using anywhere</p>
                                        </div>
                                    </Card>
                                </Col>
                                <Col sm={1}></Col>
                                <Link to='/'>
                                    <button onClick={logout} style={{ float: 'right', backgroundColor: '#008080', color: 'white', border: 'none', borderRadius: '5px', padding: '4px 10px', marginTop: '5px', fontWeight: 600 }}> logout</button></Link>

                            </Row>



                        </Container>
                    </Col>



                    <Col style={{ padding: '0px' }} sm={8} xs={12} className='dashboard-conatiner-top-row d-block d-sm-none '>

                        <Container className='square border border-bottom-0'>
                            <Topnav activeLink="Setting" />

                            <Row >
                                <Col sm={1}></Col>
                                <Col style={{ marginTop: "8vh" }} sm={10}>
                                    <Card className='mt-2' onClick={handleShow1} style={{ backgroundColor: '#D9DDDC', borderColor: "#fff", borderRadius: '10px' }}>
                                        <div className='m-1 setting-text'>
                                            <p style={{ fontSize: '15px', color: 'black', fontWeight: 600, cursor: 'pointer' }} className='mt-3 '><b>Email Address:</b></p>
                                            <p style={{ fontSize: '13px', color: 'grey', cursor: 'pointer' }} className=''>Upload Email address of your account  </p>
                                        </div>
                                    </Card>
                                </Col>
                                <Col sm={1}></Col>
                            </Row>


                            <Row>
                                <Col sm={1}></Col>
                                {/* <Col sm={10}>
                                    <Card className='mt-2' onClick={handleShow1} style={{ backgroundColor: '#D9DDDC', borderColor: "#fff", borderRadius: '10px' }}>
                                        <div className='m-1 setting-text'>
                                            <p style={{ fontSize: '15px', color: 'black', fontWeight: 600, cursor: 'pointer' }} className='mt-3 '><b>Phone Number:</b></p>
                                            <p style={{ fontSize: '13px', color: 'grey', cursor: 'pointer' }} className=''>Upload Phone number in case you have trouble signing in</p>
                                        </div>
                                    </Card>
                                    <div>
                                        <input type="text" placeholder="Phone Number" onChange={(e) => setPhoneNumber(e.target.value)} />
                                        <button onClick={handleSendCode}>Send Code</button>

                                        <input type="text" placeholder="Verification Code" onChange={(e) => setVerificationCode(e.target.value)} />
                                        <button onClick={handleVerifyCode}>Verify Code</button>
                                    </div>

                                </Col> */}
                                <Col sm={1}></Col>
                            </Row>



                            <Row>
                                <Col sm={1}></Col>
                                <Col sm={10}>
                                    <Card className='mt-2' onClick={blockuser} style={{ backgroundColor: '#D9DDDC', borderColor: "#fff", borderRadius: '10px' }}>
                                        <div className='m-1 setting-text'>
                                            <p style={{ fontSize: '15px', color: 'black', fontWeight: 600, cursor: 'pointer' }} className='mt-3 '><b>Block Accounts:</b></p>
                                            <p style={{ fontSize: '13px', color: 'grey', cursor: 'pointer' }} className=''>When you block someone, that person won’t be able to follow or message you</p>
                                        </div>
                                    </Card>
                                </Col>
                                <Col sm={1}></Col>
                            </Row>

                            <Row>
                                <Col sm={1}></Col>
                                <Col sm={10}>
                                    <Card className='mt-2' onClick={deactiveAccount} style={{ backgroundColor: '#D9DDDC', borderColor: "#fff", borderRadius: '10px' }}>
                                        <div className='m-1 setting-text'>
                                            <p style={{ fontSize: '15px', color: 'black', fontWeight: 600, cursor: 'pointer' }} className='mt-3 '><b>Deactivate Account:</b></p>
                                            <p style={{ fontSize: '13px', color: 'grey', cursor: 'pointer' }} className=''>Temporarily deactivate your Wiraa account</p>
                                        </div>
                                    </Card>
                                </Col>
                                <Col sm={1}></Col>
                            </Row>

                            <Row>
                                <Col sm={1}></Col>
                                <Col sm={10}>
                                    <Card className='mt-2' onClick={handleShow3} style={{ backgroundColor: '#D9DDDC', borderColor: "#fff", borderRadius: '10px' }}>
                                        <div className='m-1 setting-text'>
                                            <p style={{ fontSize: '15px', color: 'black', fontWeight: 600, cursor: 'pointer' }} className='mt-3 '><b>Change Password:</b></p>
                                            <p style={{ fontSize: '13px', color: 'grey', cursor: 'pointer' }} className=''>Choose a strong password that you are not using anywhere</p>
                                        </div>
                                    </Card>
                                </Col>
                                <Col sm={1}></Col>


                            </Row>
                            <center>
                                <Link to='/'>
                                    <button s onClick={logout} style={{ marginBottom: '8vh', float: 'right', backgroundColor: '#008080', color: 'white', border: 'none', borderRadius: '5px', padding: '4px 10px', marginTop: '5px', fontWeight: 600 }}> logout</button>
                                </Link>
                            </center>
                        </Container>
                    </Col>
                </Row>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Body>
                        <div>
                            <form onSubmit={CheckEmailUdation} >
                                <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                                    <Form.Label style={{ fontSize: '18px' }}>Update Email </Form.Label>
                                    <Form.Control required placeholder="Please enter your update Email" name='email' onChange={handleInputChange1} />
                                </Form.Group>
                                <button style={{ float: 'right', backgroundColor: '#008080', color: 'white', border: 'none', borderRadius: '5px', padding: '4px 10px', marginTop: '5px', fontWeight: 600 }} type='submit'> Submit </button>
                            </form>
                        </div>

                    </Modal.Body>

                </Modal>


                <Modal show={show1} onHide={handleClose1}>

                    <Modal.Body>

                    <section className="bg-emerald-500 flex items-center justify-center h-screen">
                                        <div>
                                            <Toaster toastOptions={{ duration: 4000 }} />
                                            <div id="recaptcha-container"></div>
                                            {user ? (
                                                <h2 className="text-center text-white font-medium text-2xl">
                                                    👍Login Success
                                                </h2>
                                            ) : (
                                                <div className="w-80 flex flex-col gap-4 rounded-lg p-4">

                                                    {showOTP ? (
                                                        <>
                                                          
                                                            <label
                                                                htmlFor="otp"
                                                                className="font-bold text-xl text-white text-center"
                                                            >
                                                                Enter your OTP
                                                            </label>
                                                            <OtpInput
                                                                value={otp}
                                                                onChange={setOtp}
                                                                OTPLength={6}
                                                                otpType="number"
                                                                disabled={false}
                                                                autoFocus
                                                                className="opt-container "
                                                            ></OtpInput>
                                                            <button
                                                                onClick={onOTPVerify}
                                                                className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                                                            >
                                                                {loading && (
                                                                    <CgSpinner size={20} className="mt-1 animate-spin" />
                                                                )}
                                                                <span>Verify OTP</span>
                                                            </button>
                                                        </>
                                                    ) : (
                                                        <>
                                                            
                                                           
                                                           <label
                                                                htmlFor=""
                                                                className="font-bold text-xl text-white text-center"
                                                            >
                                                                Verify your phone number
                                                            </label>
                                                            <PhoneInput country={"in"} value={ph} onChange={setPh} />
                                                            <button
                                                                onClick={onSignup}
                                                                className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                                                            >
                                                                {loading && (
                                                                    <CgSpinner size={20} className="mt-1 animate-spin" />
                                                                )}
                                                                <span>Send code via SMS</span>
                                                            </button>
                                                           
                                                        </>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </section>

                    </Modal.Body>

                </Modal>
                <Modal show={show2} onHide={handleClose2} centered >

                    <Modal.Body >
                        <div >
                            <h5 className=' mt-2 mb-4
                            text-center'>Block List</h5>
                            <table className='m-3 ' style={{ width: '100%' }}>
                                <thead>
                                    <tr>
                                        <td style={{ width: '50%' }}><b> <center>User-Name</center></b>
                                        </td>
                                        <td style={{ width: '50%' }}> <b>
                                            <center> Option</center>
                                        </b>
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {blockuserlist && blockuserlist.map((list) =>
                                        <tr className='mt-5'>
                                            <td style={{ width: '50%' }}><center><span className='text-center' >{list.FirstName} {list.LastName}</span></center></td>
                                            <td style={{ width: '50%' }}><center><button style={{ backgroundColor: '#008080', borderStyle: "none", borderRadius: "5px", }}
                                                // onClick={unblockuser(list.UserID)}
                                                onClick={() => { unblockuser(list.UserID) }}
                                            > Unblock</button></center></td>
                                        </tr>)}
                                </tbody>
                            </table>

                        </div>

                    </Modal.Body>

                </Modal>
                <Modal show={show3} onHide={handleClose3}>

                    <Modal.Body>
                        <div>
                            <form  >
                                <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                                    <Form.Label style={{ fontSize: '18px' }}>Update Your Password </Form.Label>
                                    <Form.Control
                                        placeholder="Please enter your update Password"
                                        name='cl_cont'
                                        required
                                        type="number"
                                    // onChange={handleInputChange}
                                    />
                                    {/* <button className='hire' style={{ width: '100%' }}>Update Number</button> */}
                                    <button style={{ float: 'right', backgroundColor: '#008080', color: 'white', border: 'none', borderRadius: '5px', padding: '4px 10px', marginTop: '8px', fontWeight: 600 }}> Submit </button>
                                </Form.Group>

                            </form>
                        </div>

                    </Modal.Body>

                </Modal>
            </Container >


            <Phoneviewfooter />
        </>
    )
}
export default Setting;

