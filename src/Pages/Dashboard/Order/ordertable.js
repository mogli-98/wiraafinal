import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import "../../../Aseset/css/project.css"
import Sidenav from '../layout/Sidenav';
import Topnav from '../layout/topnav';
import orderpost from '../../../Aseset/image/orderpost.png'
import DataTable from 'react-data-table-component';
import Orderbook from '../../../Model/Order.model';
import { Link } from 'react-router-dom';
function Orderdetailsbrief() {
    const [oederTable, setoederTable] = useState([]);
    const [activeLink, setActiveLink] = useState('');
    const [status, setStatus] = useState('');

    const columns = [

        {
            name: 'Title',
            selector: (row) => row.PR_Description,
            
            cell: row => {
                // console.log(row)
                return (
                    <div style={{ 
                        "height":"20px",
                    "overflow":'hidden',
                    "text-overflow": "ellipsis",
                    borderRightColor
                    }}>
                        <Link to={`/Orderdetailsbreief/${row.PostreqID}`}>{row.PR_Description}</Link></div>
                )
            },
            maxWidth: "450px", 
                 
        },
        {
            name: 'Budget',
            selector: (row) => row.Budget,
            maxWidth: "100px",
        },
        {
            name: 'Due Date ',
            selector: (row) => row.ApplyDate,
            maxWidth: "120px",
        },
        {
            name: 'Due Date',
            selector: (row) => row.PostExpireDate,
            maxWidth: "120px",
        },
    ]
    useEffect(() => {
        const id = localStorage.getItem("id");
        Orderbook.ordertable({ id }).then((respnse) => {
            console.log(respnse.data)
            setoederTable(respnse.data)
            setStatus(respnse?.data?.PostStatus)
            console.log(status)
        })
    }, [])
    const borderRightColor = status === 'closed' ? 'red' : 'black';
    return (
        <>
            <>
                <Container fluid className='dashboard-conatiner-top' >
                    <Row>
                        <Col sm={1} xs={2} className=''>
                            <Sidenav  setActiveLink={setActiveLink} />
                        </Col>


                        <Col sm={8} xs={10} className='dashboard-conatiner-top-row '>
                            <Container className='square border border-bottom-0'>
                                <Topnav activeLinkName={activeLink} />
                                <Row>
                                    <Col >
                                        <Card className='dashboradfree-card-top mt-3'>
                                            <div className='dashboradfree-card-top-div'>
                                            <button className='freedashboard-create'><Link to='/Hiretalent'> Post a request</Link></button>
                                                <img src={orderpost} alt="" className='freedashboard-top-img' />
                                                <p ><b>Connect with qualified professionals1</b></p>
                                            </div>
                                        </Card>
                                    </Col>
                                </Row>
                                <Row>
                                    {/* <Form className='mt-2'>
                                        <Form.Control type="text" className='square rounded-pill CiSearch' placeholder="Search Project" style={{ backgroundColor: "#efefef", height: "40px" }} />
                                        
                                    </Form> */}
                                    <div className="order_post m-2" style={{border:"1px solid grey" ,width:'98%'}}>
                                        <p className='m-3'>All Orders</p>
                                    </div>
                                    <DataTable  
                                        columns={columns}
                                        data={oederTable}
                                        pagination
                                    />
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