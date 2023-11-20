import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Table, Modal, Button } from 'react-bootstrap';
import "../../../asset/css/project.css"
import Sidenavbar from '../layout/Sidenavbar';
import Topnavbar from '../layout/topnavbar';
import Orderbook from '../../../Model/Order.model';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { helper } from '../../../lib/helper'
import ProjectModal from '../../../modal/Project.modal';
import Phoneviewfooter from '../../../Layout/Phoneviewfooter';
import Desktoploginfooter from '../../unguarded_page/Desktoploginfooter';
import { IoHeartOutline } from 'react-icons/io5';
function FreeProjectdetails() {
    const [orderdetails, setOrderDetails] = useState(false);
    const params = useParams();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        const projectId = params.id;
        ProjectModal.getPrjectdetails({ projectId }).then((respone) => {
            console.log(respone.data)
            setOrderDetails(respone.data)
        }).catch((error) => {
            console.log(error);
        });
    }, [])
    const Markfav = async (id) => {
        console.log(id)
        const userId = parseInt(localStorage.getItem("UserID"));
        const projectId = id;
        ProjectModal.getMarkfavproject({ userId, projectId }).then((response) => {
            console.log(response.data)
        }).catch((error) => {
            console.log("error => ", error)
        })
    }
    const [formData, setFormData] = useState({
        experience: '',
        comfortable: '',
        immediately: '',
        availabality: '',
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
        form.append("userId", localStorage.getItem("UserID"));
        form.append("projectId", params.id);
        console.log(form)
        ProjectModal.addintrestpro(form)
            .then((response) => {

                helper.sweetalert.toast("Your interested Add Successfully")
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (

        <>
            <Container fluid className='dashboard-conatiner-top' >
                <Row>
                    <Col sm={1} className='d-none d-sm-block'>
                        <Sidenavbar activekey="projects" />
                    </Col>
                    <Col sm={8} xs={12} style={{ padding: '0px' }} className='dashboard-conatiner-top-row '>
                        <Container className='square border border-bottom-0'>
                            <Topnavbar activeLink="Project" />

                            <Row>
                                <Col sm={8} style={{ padding: '0px' }} className="project square border-end border-start">
                                    <div className='mt-3'>
                                        <div style={{ padding: '0px 20px' }} className='d-none d-sm-block '>
                                            <button style={{ border: '1px solid black' }} className='order-details-requirements' onClick={handleShow} >

                                                <span style={{ fontSize: '12px', fontWeight: 600 }}>
                                                    Show interested
                                                </span>

                                            </button>
                                            {/* <IoHeartOutline onClick={() => { Markfav(params.id) }} /> */}
                                            <svg style={{ color: 'grey', marginRight: '5px', paddingRight: '4px' }} xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="red" className="bi bi-star order-details-shortlisted" viewBox="0 0 16 16" onClick={() => { Markfav(params.id) }}>
                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                            </svg>
                                        </div>


                                        <div style={{ marginTop: '80px', padding: '0px 20px' }} className=' d-block d-sm-none'>
                                            <button style={{ border: '1px solid black' }} className='order-details-requirements' onClick={handleShow} >

                                                <span style={{ fontSize: '12px', fontWeight: 600 }}>
                                                    Show interested
                                                </span>

                                            </button>
                                            <svg style={{ color: 'grey', marginRight: '5px', paddingRight: '4px' }} xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="red" className="bi bi-star order-details-shortlisted" viewBox="0 0 16 16" onClick={() => { Markfav(params.id) }}>
                                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                            </svg>
                                        </div>



                                        <Card className='m-3' style={{ background: "#efefef", borderStyle: 'none', borderRadius: '15px', border: 'none', boxShadow: '0px 0px 10px 5px rgba(192, 192, 192, 0.5)' }}>
                                            <div className=' m-3 project-details'>
                                                <p><b>Tilte</b>
                                                    <br />{orderdetails?.[0]?.Title}
                                                </p>
                                                <p className='mt-4'><b>Description</b>
                                                    <br />
                                                    {orderdetails?.[0]?.Description}
                                                </p>

                                                <p className='pt-3'><b>Category</b>
                                                    <br />{orderdetails?.[0]?.Category}
                                                </p>
                                                <p className='mt-3'><b>Budget</b>
                                                    <br />INR {orderdetails?.[0]?.Budget} /-
                                                </p>
                                            </div>
                                        </Card>
                                    </div>
                                </Col>
                                <Col sm={4} className='project-deatils4 square border-end ' >
                                    <Card className='p-2' style={{ background: "#fff", border: '1px lightgrey solid', borderRadius: '15px' }} >
                                        <p className='text-center mt-2'><b><u>Details</u></b></p>
                                        <Table borderless>
                                            <tbody>
                                                <tr>
                                                    <td className='left-td'>Status</td>
                                                    <td className='right-td text-success'><b>{orderdetails?.[0]?.Status}</b></td>
                                                </tr>
                                                <tr>
                                                    <td className='left-td'>Name</td>
                                                    <td className='right-td '><b>{orderdetails?.[0]?.FirstName} {orderdetails?.[0]?.LastName}</b></td>
                                                </tr>
                                                <tr>
                                                    <td className='left-td'>Order Date</td>
                                                    <td className='right-td'><b>
                                                        {moment(orderdetails?.[0]?.ApplyDate).format('DD-MM-YYYY')}
                                                    </b></td>
                                                </tr>
                                                <tr>
                                                    <td className='left-td'>Due Date</td>
                                                    <td className='right-td'><b>
                                                        {moment(orderdetails?.[0]?.DueDate).format('DD-MM-YYYY')}
                                                    </b></td>
                                                </tr>
                                                <tr>
                                                    <td className='left-td'>Response</td>
                                                    <td className='right-td'><b>{orderdetails?.[0]?.Response}</b></td>
                                                </tr>

                                            </tbody>
                                        </Table>

                                    </Card>
                                    {/* <div className='mt-3 d-none d-sm-block'>
                                        <span>About</span> <span>Career</span> <span>Term of services</span>
                                        <span>Conatct</span> <span>FAQ</span> <span>Blog</span>
                                        <span>Privacy policy</span> <span>@2022 Wiraa. All Rights Reserved</span>
                                    </div> */}

                                    <Desktoploginfooter />
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>


                <Modal className='d-none d-sm-block' show={show} onHide={handleClose}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered>
                    <Modal.Header closeButton>
                        <Modal.Title style={{ color: '#008080' }}>Screening Questions</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Card style={{ margin: '10px' }}>
                            <h6 style={{ marginTop: '6px', marginLeft: '10px' }}>Q.How many year of experience do you have this feild?</h6>

                            <input style={{ width: '200px', margin: '10px' }} type='text' />
                        </Card>
                        <Card style={{ margin: '10px' }}>
                            <h6 style={{ marginTop: '6px', marginLeft: '10px' }} >Q.Are you comfortable with my project budge? </h6>

                            <div style={{ display: 'flex', margin: '10px' }}>

                                <input type='checkbox' /><span style={{ marginLeft: '15px', fontWeight: 500 }}>I am comfortable</span>
                                <input style={{ marginLeft: '20px' }} type='checkbox' /> <span style={{ marginLeft: '10px', fontWeight: 500 }}>I want to negotiate</span>
                                <input style={{ marginLeft: '20px' }} type='checkbox' /> <span style={{ marginLeft: '10px', fontWeight: 500 }}>First i want to understand the project</span>

                            </div>

                        </Card>


                        <Card style={{ margin: '10px' }}>

                            <h6 style={{ marginTop: '6px', marginLeft: '10px' }}>Q.What is your work availability?</h6>

                            <div style={{ display: 'flex', margin: '10px' }}>

                                <input type='checkbox' /><span style={{ marginLeft: '15px', fontWeight: 500 }}>Full-time</span>
                                <input style={{ marginLeft: '20px' }} type='checkbox' /> <span style={{ marginLeft: '10px', fontWeight: 500 }}>Part-time</span>
                                <input style={{ marginLeft: '20px' }} type='checkbox' /> <span style={{ marginLeft: '10px', fontWeight: 500 }}>Weekends</span>
                                <input style={{ marginLeft: '20px' }} type="checkbox" /> <span style={{ marginLeft: '10px', fontWeight: 500 }}> Not fixed</span>

                            </div>

                        </Card>
                        <Card style={{ margin: '10px' }}>


                            <h6 style={{ marginTop: '6px', marginLeft: '10px' }}>Q.We must fill this position urgently. Can you start immediately?</h6>



                            <div style={{ display: 'flex', margin: '10px' }}>

                                <input type='checkbox' /><span style={{ marginLeft: '15px', fontWeight: 500 }}>I can start immediately</span>
                                <input style={{ marginLeft: '20px' }} type='checkbox' /> <span style={{ marginLeft: '10px', fontWeight: 500 }}>I can start from next week</span>
                                <input style={{ marginLeft: '20px' }} type='checkbox' /> <span style={{ marginLeft: '10px', fontWeight: 500 }}>I can start from next month</span>

                            </div>





                        </Card>
                    </Modal.Body>
                    <Modal.Footer style={{ padding: '5px 25px' }}>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button style={{ backgroundColor: '#008080', color: 'white' }} onClick={handleClose}>
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>



                <Modal className='d-block d-sm-none' show={show} onHide={handleClose}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered>
                    <Modal.Header closeButton>
                        <Modal.Title style={{ color: '#008080' }}>Screening Questions</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ padding: '0px' }}>
                        <Card style={{ margin: '10px' }}>
                            <h6 style={{ marginTop: '6px', marginLeft: '10px' }}>Q.How many year of experience do you have this feild?</h6>

                            <input style={{ width: '300px', margin: '10px' }} type='text' />
                        </Card>
                        <Card style={{ margin: '10px' }}>
                            <h6 style={{ marginTop: '6px', marginLeft: '10px' }} >Q.Are you comfortable with my project budge? </h6>

                            <div style={{ display: 'flex', margin: '10px' }}>
                                <input style={{ marginLeft: '15px' }} type='checkbox' /><span style={{ marginLeft: '15px', fontWeight: 500 }}>I am comfortable </span>


                            </div>
                            <div style={{ display: 'flex', margin: '5px' }}>
                                <input style={{ marginLeft: '20px' }} type='checkbox' /> <span style={{ marginLeft: '10px', fontWeight: 500 }}>I want to negotiate</span>


                            </div>

                            <div style={{ display: 'flex', margin: '5px' }}>
                                <input style={{ marginLeft: '20px' }} type='checkbox' /> <span style={{ marginLeft: '10px', fontWeight: 500 }}>First i want to understand the project</span>

                            </div>

                        </Card>


                        <Card style={{ margin: '10px' }}>

                            <h6 style={{ marginTop: '6px', marginLeft: '10px' }}>Q.What is your work availability?</h6>

                            <div style={{ display: 'flex', margin: '10px' }}>

                                <input style={{ marginLeft: '15px' }} type='checkbox' /><span style={{ marginLeft: '15px', fontWeight: 500 }}>Full-time</span>


                            </div>

                            <div style={{ display: 'flex', margin: '5px' }}>


                                <input style={{ marginLeft: '20px' }} type='checkbox' /> <span style={{ marginLeft: '10px', fontWeight: 500 }}>Part-time</span>


                            </div>

                            <div style={{ display: 'flex', margin: '5px' }}>


                                <input style={{ marginLeft: '20px' }} type='checkbox' /> <span style={{ marginLeft: '10px', fontWeight: 500 }}>Weekends</span>


                            </div>

                            <div style={{ display: 'flex', margin: '5px' }}>

                                <input style={{ marginLeft: '20px' }} type="checkbox" /> <span style={{ marginLeft: '10px', fontWeight: 500 }}> Not fixed</span>

                            </div>


                        </Card>



                        <Card style={{ margin: '10px' }}>


                            <h6 style={{ marginTop: '6px', marginLeft: '10px' }}>Q.We must fill this position urgently. Can you start immediately?</h6>



                            <div style={{ display: 'flex', margin: '10px' }}>
                                <input style={{ marginLeft: '15px' }} type='checkbox' /><span style={{ marginLeft: '15px', fontWeight: 500 }}>I can start immediately</span>

                            </div>

                            <div style={{ display: 'flex', margin: '5px' }}>

                                <input style={{ marginLeft: '20px' }} type='checkbox' /> <span style={{ marginLeft: '10px', fontWeight: 500 }}>I can start from next week</span>

                            </div>

                            <div style={{ display: 'flex', margin: '5' }}>

                                <input style={{ marginLeft: '20px' }} type='checkbox' /> <span style={{ marginLeft: '10px', fontWeight: 500 }}>I can start from next month</span>
                            </div>


                        </Card>


                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button style={{ backgroundColor: '#008080' }} onClick={handleClose}>
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>



            </Container>
            <Phoneviewfooter />
        </>

    )
}

export default FreeProjectdetails;