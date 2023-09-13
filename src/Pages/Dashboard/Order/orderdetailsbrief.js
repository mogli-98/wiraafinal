import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';
import "../../../Aseset/css/project.css"
import Sidenav from '../layout/Sidenav';
import Topnav from '../layout/topnav';
import Orderbook from '../../../Model/Order.model';
import { useParams } from 'react-router-dom';

function Orderdetailsbrief() {
    const [orderdetails, setOrderDetails] = useState(false);
    const params = useParams();

    useEffect(() => {
        console.log(params, "new data");
        Orderbook.orderdetails(params.id).then((respone) => {
            console.log(respone.data)
            setOrderDetails(respone.data)
        })
    }, [])

    return (
        <>
            <>
                <Container fluid className='dashboard-conatiner-top' >
                    <Row>
                        <Col sm={1} xs={2} className=''>
                            <Sidenav />
                        </Col>
                        <Col sm={8} xs={10} className='dashboard-conatiner-top-row '>
                            <Container className='square border border-bottom-0'>
                                <Topnav />
                                <Row>
                                    <Col sm={8} className="project square border-end border-start">
                                        <div >
                                            <div className='m-3 '>
                                                <button className='order-details-requirements' > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-plus-fill" viewBox="0 0 16 16">
                                                    <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                </svg>Professional</button>
                                                <button className='order-details-shortlisted'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                                                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                                </svg>Shortlisted</button>
                                            </div>
                                            <Card className='m-3' style={{ background: "#efefef", borderStyle: 'none' }}>
                                                <div className=' m-3 project-details'>
                                                    <p><b>Tilte</b>
                                                        <br />Graphic Designer for brand identity
                                                    </p>
                                                    <p className='mt-4'><b>Description</b>
                                                        <br />
                                                        {orderdetails[0]?.ProjectDescription}
                                                    </p>

                                                    <p className='pt-3'><b>Category</b>
                                                        <br />Creative - Graphic Design
                                                    </p>
                                                    <p className='mt-3'><b>Budget</b>
                                                        <br />INR {orderdetails[0]?.Budget} /-
                                                    </p>
                                                </div>
                                            </Card>
                                        </div>
                                    </Col>
                                    <Col sm={4} className='project-deatils4 square border-end ' >
                                        <Card style={{ background: "#fff " }} className="mt-3">
                                            <p className='text-center mt-2'><b><u>Details</u></b></p>
                                            <Table borderless>
                                                <tbody>
                                                    <tr>
                                                        <td className='left-td'>Status</td>
                                                        <td className='right-td text-success'><b>{orderdetails[0]?.PostStatus}</b></td>
                                                    </tr>
                                                    <tr>
                                                        <td className='left-td'>Order Date</td>
                                                        <td className='right-td'><b>{orderdetails[0]?.PostExpireDate}</b></td>
                                                    </tr>
                                                    <tr>
                                                        <td className='left-td'>Due Date</td>
                                                        <td className='right-td'><b>05/12/2022</b></td>
                                                    </tr>
                                                    <tr>
                                                        <td className='left-td'>Responser</td>
                                                        <td className='right-td'><b>49</b></td>
                                                    </tr>
                                                    <tr>
                                                        <td className='left-td'>Order Number</td>
                                                        <td className='right-td'><b>49</b></td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                            <center>
                                                <button style={{ padding: '1px', width: '30%', borderRadius: '8px', color: 'white', borderStyle: 'none', backgroundColor: 'red' }} className='mb-4'>Close </button>
                                            </center>
                                        </Card>
                                        <div className='mt-3'>
                                            <span>About</span> <span>Career</span> <span>Term of services</span>
                                            <span>Conatct</span> <span>FAQ</span> <span>Blog</span>
                                            <span>Privacy policy</span> <span>@2022 Wiraa. All Rights Reserved</span>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </>
        </>
    )
}

export default Orderdetailsbrief