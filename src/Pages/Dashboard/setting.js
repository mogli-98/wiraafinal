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


// import InputGroup from 'react-bootstrap/InputGroup';
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
    const [FormData, setFormData] = useState({
        number: '',
    })
    const handleInputChange = (event) => {
        setFormData({
            ...FormData,
            [event.target.name]: event.target.value,
        });
    };
    const logout = () => {
        sessionStorage.clear();
        localStorage.clear();
    };
    const handleSubmitPhone = (event) => {

        event.preventDefault();
        const form = new FormData(event.target);
        form.append("update_bus", localStorage.getItem("token"));

        Setting.editbusiness(form)
            .then((response) => {
                console.log(response.data, "yes data update");

            })
            .catch((error) => {
                console.log(error);
            });
    };
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

    const blockuser = () => {
        const userProfileId = localStorage.getItem("userProfileId");
        SettingModal.Blocklist({ userProfileId }).then((respnse) => {
            handleShow2(true)
            console.log(respnse.data)
            setBlockuserlist(respnse.data)
        }).catch((error) => {
            console.log(error);
            // Display error message to the user
        });
    }
    const unblockuser = (UserID) => {
        const userProfileId = localStorage.getItem("userProfileId");
        const userId = UserID;
        SettingModal.Unblockuser({ userProfileId, userId }).then((respnse) => {

            console.log('user unblock', respnse.data)
            helper.sweetalert.toast('Unblock Account')
        });
    }
    useEffect(() => {
        blockuser()
    }, [])
    return (
        <>
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
                                            <p style={{ fontSize: '15px', color: 'black', fontWeight: 600, cursor: 'pointer' }} className='mt-3 '><b>Phone Number:</b></p>
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
                                    <Card className='mt-2' onClick={handleShow2} style={{ backgroundColor: '#D9DDDC', borderColor: "#fff", borderRadius: '10px' }}>
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
                                <Col sm={10}>
                                    <Card className='mt-2' onClick={handleShow2} style={{ backgroundColor: '#D9DDDC', borderColor: "#fff", borderRadius: '10px' }}>
                                        <div className='m-1 setting-text'>
                                            <p style={{ fontSize: '15px', color: 'black', fontWeight: 600, cursor: 'pointer' }} className='mt-3 '><b>Phone Number:</b></p>
                                            <p style={{ fontSize: '13px', color: 'grey', cursor: 'pointer' }} className=''>Upload Phone number in case you have trouble signing in</p>
                                        </div>
                                    </Card>
                                </Col>
                                <Col sm={1}></Col>
                            </Row>



                            <Row>
                                <Col sm={1}></Col>
                                <Col sm={10}>
                                    <Card className='mt-2' onClick={{ blockuser }} style={{ backgroundColor: '#D9DDDC', borderColor: "#fff", borderRadius: '10px' }}>
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
                            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                                <Form.Label style={{ fontSize: '18px' }}>Update Email </Form.Label>
                                <Form.Control required placeholder="Please enter your update Email" />
                            </Form.Group>
                            <button style={{ float: 'right', backgroundColor: '#008080', color: 'white', border: 'none', borderRadius: '5px', padding: '4px 10px', marginTop: '5px', fontWeight: 600 }}> Submit </button>

                        </div>

                    </Modal.Body>

                </Modal>


                <Modal show={show1} onHide={handleClose1}>

                    <Modal.Body>
                        <div>
                            <form onClick={handleSubmitPhone} >
                                <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                                    <Form.Label style={{ fontSize: '18px' }}>Update Phone Number: </Form.Label>
                                    <Form.Control
                                   
                                        placeholder="Please enter your update Phone Number"
                                        name='cl_cont'
                                        required
                                        type="number"
                                        onChange={handleInputChange}
                                    />
                                    {/* <button className='hire' style={{ width: '100%' }}>Update Number</button> */}
                                    <button style={{ float: 'right', backgroundColor: '#008080', color: 'white', border: 'none', borderRadius: '5px', padding: '4px 10px', marginTop: '8px', fontWeight: 600 }}> Submit </button>
                                </Form.Group>

                            </form>
                        </div>

                    </Modal.Body>

                </Modal>
                <Modal show={show2} onHide={handleClose2}>

                    <Modal.Body>
                        <div>
                            <h5 className=' mt-2 mb-4
                            text-center'>Block List</h5>
                            <table>
                                <thead>
                                    <tr>
                                        <td><b> User-Name</b>
                                        </td>
                                        <td> <b>
                                            Option
                                        </b>
                                        </td>
                                    </tr>
                                </thead>
                                <tbody className='mt-4'>
                                    {blockuserlist && blockuserlist.map((list) =>
                                        <tr>
                                            <td style={{ width: "50vh" }}>{list.FirstName} {list.LastName}</td>
                                            <td><button style={{ backgroundColor: '#008080', borderStyle: "none", borderRadius: "5px" }}
                                                // onClick={unblockuser(list.UserID)}
                                                onClick={() => { unblockuser(list.UserID) }}
                                            > Unblock</button></td>
                                        </tr>)}
                                </tbody>
                            </table>

                        </div>

                    </Modal.Body>

                </Modal>
                <Modal show={show3} onHide={handleClose3}>

                    <Modal.Body>
                        <div>
                            <form onClick={handleSubmitPhone} >
                                <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                                    <Form.Label style={{ fontSize: '18px' }}>Update Your Password </Form.Label>
                                    <Form.Control
                                        placeholder="Please enter your update Password"
                                        name='cl_cont'
                                        required
                                        type="number"
                                        onChange={handleInputChange}
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