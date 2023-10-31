import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';
import "../../../asset/css/project.css"
import Sidenav from '../layout/Sidenav';
import Topnav from '../layout/topnav';
import Orderbook from '../../../Model/Order.model';
import { useParams, Link } from 'react-router-dom';

import moment from 'moment';
import Phoneviewfooter from '../../../Layout/Phoneviewfooter';
import Desktoploginfooter from '../../unguarded_page/Desktoploginfooter';
import { Tooltip } from '@mui/material';
import OrderModal from '../../../modal/Order.modal';

function Orderdetailsbrief() {
    const [orderdetails, setOrderDetails] = useState(false);
    const params = useParams();

    const fetchdata = () => {

        const order_id = params.id;
        Orderbook.orderdetails({ order_id }).then((respone) => {


            setOrderDetails(respone.data)
        })
    }
    const Closeorder = () => {
        const form = new FormData();
        form.append("userId", parseInt(localStorage.getItem("UserID")));
        form.append("orderId", params.id);
        OrderModal.CLosedorder(form).then((respone) => {

            fetchdata();

        })
    }
    useEffect(() => {
        fetchdata();
    }, [])
    return (
        <>
            <>
                <Container fluid className='dashboard-conatiner-top' >
                    <Row>
                        <Col sm={1} className='d-none d-sm-block'>
                            <Sidenav activekey="order" />
                        </Col>
                        <Col style={{ padding: '0px' }} sm={8} xs={12} className='dashboard-conatiner-top-row '>
                            <Container className='square border border-bottom-0'>
                                <Topnav activeLink="Order" />
                                <Row>
                                    <Col style={{ padding: '5px' }} sm={8} xs={12} className="project square border-end border-start">
                                        <div >
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} className='m-4  '>
                                                {orderdetails?.[0]?.response === null ? (<Link to={`/Orderdetails/${params.id}`}>
                                                    <Tooltip title="No Response " placement="top">
                                                        <button style={{ border: '1px solid black', padding: '0px 6px ', }} className='order-details-requirements d-none d-sm-block' disabled >
                                                            <svg style={{ color: 'grey', paddingRight: '4px' }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-plus-fill" viewBox="0 0 16 16">
                                                                <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                            </svg>

                                                            <span style={{ fontSize: '12px', fontWeight: 600, color: 'black' }}>
                                                                Professionals
                                                            </span>


                                                        </button>

                                                        <button disabled style={{ border: '1px solid black', marginTop: '60px', marginBottom: '10px', padding: '0px 6px ' }} className='order-details-requirements d-block d-sm-none' >
                                                            <svg style={{ color: 'grey', paddingRight: '4px' }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-plus-fill" viewBox="0 0 16 16">
                                                                <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                            </svg>
                                                            <span style={{ fontSize: '12px', fontWeight: 600 }}>
                                                                Professionals
                                                            </span>

                                                        </button>
                                                    </Tooltip>
                                                </Link>) : (<Link to={`/Orderdetails/${params.id}`}>
                                                    <button style={{ border: '1px solid black', padding: '0px 6px ', }} className='order-details-requirements d-none d-sm-block' >
                                                        <svg style={{ color: 'grey', paddingRight: '4px' }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-plus-fill" viewBox="0 0 16 16">
                                                            <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                        </svg>
                                                        <span style={{ fontSize: '12px', fontWeight: 600 }}>
                                                            Professionals
                                                        </span>

                                                    </button>

                                                    <button style={{ border: '1px solid black', marginTop: '60px', marginBottom: '10px', padding: '0px 6px ' }} className='order-details-requirements d-block d-sm-none' >
                                                        <svg style={{ color: 'grey', paddingRight: '4px' }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-plus-fill" viewBox="0 0 16 16">
                                                            <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                        </svg>
                                                        <span style={{ fontSize: '12px', fontWeight: 600 }}>
                                                            Professionals
                                                        </span>

                                                    </button>
                                                </Link>)

                                                }




                                            </div>







                                            <Card className='m-1' style={{ background: "#efefef", borderStyle: 'none', borderRadius: '15px', border: 'none', boxShadow: '0px 0px 10px 5px rgba(192, 192, 192, 0.5)' }}>
                                                <div className=' m-3 project-details'>
                                                    <p><b>Title</b>
                                                        <br />{orderdetails?.[0]?.Title}
                                                    </p>
                                                    <p className='mt-4'><b>Description</b>
                                                        <br />
                                                        {orderdetails?.[0]?.ProjectDescription}
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

                                    <Col style={{ padding: '5px', marginBottom: '50px' }} sm={4} xs={12} className='project-deatils4 square border-end d-block d-sm-none ' >
                                        <Card style={{ background: "#fff", borderRadius: '20px', border: '2px solid lightgrey' }} className="mt-3 mb-3">
                                            <p className='text-center mt-4'><b style={{ fontSize: '20px', color: 'black' }}><u>Details</u></b></p>
                                            <Table borderless>
                                                <tbody>
                                                    <tr>
                                                        <td style={{ color: 'grey', paddingLeft: '20px', paddingTop: '12px' }} className='left-td'>Status :</td>
                                                        <td style={{ paddingRight: '20px', paddingTop: '12px' }} className='right-td text-success'><b>{orderdetails[0]?.Status}</b></td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ color: 'grey', paddingLeft: '20px', paddingTop: '12px' }} className='left-td'>Order Date :</td>
                                                        <td style={{ paddingRight: '20px', paddingTop: '12px' }} className='right-td'>
                                                            <b>


                                                                {moment(orderdetails[0]?.ApplyDate).format('DD/MM/YYYY')}

                                                            </b>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ color: 'grey', paddingLeft: '20px', paddingTop: '12px' }} className='left-td'>Due Date :</td>
                                                        <td style={{ paddingRight: '20px', paddingTop: '12px' }} className='right-td'>

                                                            <b>


                                                                {moment(orderdetails[0]?.DueDate).format('DD/MM/YYYY')}

                                                            </b>

                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ color: 'grey', paddingLeft: '20px', paddingTop: '12px' }} className='left-td'>Response :</td>
                                                        <td style={{ paddingRight: '20px', paddingTop: '12px' }} className='right-td'>

                                                            {orderdetails[0]?.response === null ? (
                                                                <h6 className='text-center'>0</h6>
                                                            ) : <h6 className='text-center'>{orderdetails[0]?.response}</h6>}</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ color: 'grey', paddingLeft: '20px', paddingTop: '12px' }} className='left-td'>Order Number :</td>
                                                        <td style={{ paddingRight: '20px', paddingTop: '12px' }} className='right-td'><b>{orderdetails[0]?.orderNumber}</b></td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                            {orderdetails[0]?.Status === 'Closed' ? (
                                                <button style={{ display: 'none' }}></button>
                                            ) :
                                                <center>
                                                    <button style={{ padding: '5px', width: '30%', borderRadius: '8px', color: 'white', borderStyle: 'none', backgroundColor: '#ff7e79', fontWeight: 700, marginTop: '25px' }} className='mb-4 ' onClick={Closeorder}> Close </button>
                                                </center>
                                            }
                                        </Card>



                                        <Desktoploginfooter />
                                    </Col>


                                    <Col style={{ padding: '5px', marginBottom: '50px' }} sm={4} xs={12} className='project-deatils4 square border-end d-none d-sm-block ' >
                                        <Card style={{ background: "#fff", borderRadius: '20px', border: '2px solid lightgrey' }} className="mt-3 mb-3">
                                            <p className='text-center mt-4'><b style={{ fontSize: '20px', color: 'black' }}><u>Details</u></b></p>
                                            <Table borderless>
                                                <tbody>
                                                    <tr>
                                                        <td style={{ color: 'grey', padding: '10px', paddingLeft: '20px', paddingTop: '16px' }} className='left-td'>Status :</td>
                                                        <td style={{ paddingRight: '20px', paddingTop: '16px' }} className='right-td text-success'><b>{orderdetails[0]?.Status}</b></td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ color: 'grey', padding: '10px', paddingLeft: '20px', paddingTop: '12px' }} className='left-td'>Order Date :</td>
                                                        <td style={{ paddingRight: '20px', paddingTop: '12px' }} className='right-td'>
                                                            <b>


                                                                {moment(orderdetails[0]?.ApplyDate).format('DD/MM/YYYY')}

                                                            </b>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ color: 'grey', padding: '10px', paddingLeft: '20px', paddingTop: '12px' }} className='left-td'>Due Date :</td>
                                                        <td style={{ paddingRight: '20px', paddingTop: '12px' }} className='right-td'>

                                                            <b>


                                                                {moment(orderdetails[0]?.DueDate).format('DD/MM/YYYY')}

                                                            </b>

                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ color: 'grey', padding: '10px', paddingLeft: '20px', paddingTop: '12px' }} className='left-td'>Response :</td>
                                                        <td style={{ paddingRight: '20px', paddingTop: '12px' }} className='right-td'>

                                                            {orderdetails[0]?.response === null ? (
                                                                <h6 className='text-center'>0</h6>
                                                            ) : <h6 className='text-center'>{orderdetails[0]?.response}</h6>}</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{ color: 'grey', padding: '10px', paddingLeft: '20px', paddingTop: '12px' }} className='left-td'>Order Number :</td>
                                                        <td style={{ paddingRight: '20px', paddingTop: '12px' }} className='right-td'><b>{orderdetails[0]?.orderNumber}</b></td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                            {orderdetails[0]?.Status === 'Closed' ? (
                                                <button style={{ display: 'none' }}></button>
                                            ) :
                                                <center>
                                                    <button style={{ padding: '5px', width: '30%', borderRadius: '8px', color: 'white', borderStyle: 'none', backgroundColor: '#ff7e79', fontWeight: 700, marginTop: '25px' }} className='mb-4 ' onClick={Closeorder}> Close </button>
                                                </center>
                                            }
                                        </Card>



                                        <Desktoploginfooter />
                                    </Col>


                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
                <Phoneviewfooter />
            </>
        </>
    )
}

export default Orderdetailsbrief;
