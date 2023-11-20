import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import "../../../asset/css/project.css"
import Sidenav from '../layout/Sidenav';
import Topnav from '../layout/topnav';
import orderpost from '../../../asset/image/orderpost.png';
import DataTable from 'react-data-table-component';
import Orderbook from '../../../Model/Order.model';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Phoneviewfooter from '../../../Layout/Phoneviewfooter';
import { Tooltip } from '@mui/material';



function Orderdetailsbrief() {
    const [oederTable, setoederTable] = useState([]);
    const [activeLink, setActiveLink] = useState('');
    const [status, setStatus] = useState('');


    const customStyles = {

        table: {
            style: {
                border: '1px solid lightgrey'
            },
        },
        headCells: {
            style: {
                fontSize: '18px',
                fontWeight: 700,
                display: 'flex',
                justifyContent: 'center',
                // textAlign: 'center',
                // border:'1px solid grey'
                // border: '1px solid #000', 
            },
        },
        rows: {
            style: {
                border: '1px solid lightgrey',
                fontSize: '14px',
                fontWeight: 400,
                display: 'flex',
                // justifyContent: 'center',

                backgroundColor: '#eee'
            },
        },
        Cell: {
            style: {
                border: '1px solid lightgrey',
                paddingLeft: '30px',
                // justifyContent: 'center',
                // display: 'flex',
            },
        },
    };



    const columns = [
        {
            name: 'Title',
            selector: (row) => row.Title,
            cell: row => {
                return (
                    <div style={{
                        "height": "20px",
                        "overflow": 'hidden',
                        "text-overflow": "ellipsis",

                    }}>
                        <Tooltip title={row.ApprovalStatus} placement="top">
                            <Link to={`/Orderdetailsbreief/${row.PostreqID}`}>{row.Title}</Link>  </Tooltip></div>
                )
            },
            width: "370px",
        },
        {
            name: 'Budget',
            selector: (row) => row.Budget,

            cell: row => {
                return <>
                    <span >₹ {row.Budget}</span>
                </>
            }
        },
        {
            name: 'Order Date ',
            selector: (row) => row.ApplyDate,
            cell: row => {
                return <div> {moment(row.ApplyDate).format('DD/MM/YYYY')} </div>
            },

        },
        {
            name: 'Due Date',
            selector: (row) => row.DueDate,
            cell: row => {
                return <div> {moment(row.DueDate).format('DD/MM/YYYY')} </div>
            },
            width: "140px",
        },
        {
            name: '',
            selector: (row) => row.Status,
            width: "60px",
            cell: row => {
                if (row.Status === 'Closed') {
                    return <><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="red" class="bi bi-dot" viewBox="0 0 16 16">
                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                    </svg></>;
                } else if (row.Status === 'Active') {
                    return <><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="green" class="bi bi-dot" viewBox="0 0 16 16">
                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                    </svg></>;
                }
            },
        },
    ]
    useEffect(() => {
        const userId = localStorage.getItem("UserID");
        Orderbook.ordertable({ userId }).then((respnse) => {
            console.log(respnse.data)
            setoederTable(respnse?.data)
            setStatus(respnse?.data?.PostStatus)

        }).catch((error) => {
            setoederTable([])
            console.log(error);
            // Display error message to the user
        });
    }, [])
    const conditionalRowStyles = [
        {
            when: row => row.ApprovalStatus === "Under Review",
            style: ({
                backgroundColor: 'white',


            }),
        },
    ];
    return (

        <>
            <Container fluid className='dashboard-conatiner-top' >
                <Row>
                    <Col sm={1} className='d-none d-sm-block'>
                        <Sidenav activekey="order" />
                    </Col>
                    <Col sm={8} xs={12} className='dashboard-conatiner-top-row' style={{ padding: '0px' }} >
                        <Col className='d-block d-sm-none'>

                            <div>
                                <Link to="/Hiretalent">


                                    <button className='mb-4 p-3' style={{ width: '100%', border: 'none', borderRadius: '8px', backgroundColor: '#008080', marginTop: '80px' }} >
                                        <span style={{ fontWeight: '600', color: 'white' }}>
                                            Post a request - Hire talents
                                        </span>
                                    </button>
                                </Link>

                            </div>

                        </Col>
                        <Container className='square border border-bottom-0 d-none d-sm-block'>
                            <Topnav activeLink="Orders" />

                            <Row>

                                <Col  >
                                    <Card className='dashboradfree-card-top mt-3'>
                                        <div className='dashboradfree-card-top-div'>
                                            <Link style={{ color: '#008080' }} to='/Hiretalent'>
                                                <button style={{ marginLeft: '30px', padding: '4px 35px' }} className='freedashboard-create'>Post a request</button>
                                            </Link>

                                            <img src={orderpost} alt="" className='freedashboard-top-img' />
                                            <p ><b style={{ fontSize: '20px' }}>Connect with qualified professionals</b></p>
                                        </div>
                                    </Card>
                                </Col>
                            </Row>
                            <Row style={{ marginTop: '18px' }}>
                                {/* <Form className='mt-2'>
                                        <Form.Control type="text" className='square rounded-pill CiSearch' placeholder="Search Project" style={{ backgroundColor: "#efefef", height: "40px" }} />
                                        
                                    </Form> */}
                                <div className="order_post mt-2" style={{ border: "1px solid grey", width: '97.8%', marginLeft: '11px' }}>
                                    <p style={{ fontSize: '20px', color: '#008080', fontWeight: 600 }} className='m-3'>All Orders</p>
                                </div>
                                <DataTable
                                    customStyles={customStyles}
                                    columns={columns}
                                    data={oederTable.length > 0 ? oederTable : ""}
                                    pagination
                                    conditionalRowStyles={conditionalRowStyles}
                                />
                            </Row>
                        </Container>



                        <Row>




                            <Card className='d-block d-sm-none' style={{ marginBottom: '50px', padding: '0px', backgroundColor: 'ButtonHighlight', Width: '100%', borderRadius: '25px', borderEndEndRadius: '0px', borderEndStartRadius: '0px', border: 'none', cursor: 'pointer' }}>
                                <Col xs={12}>
                                    {oederTable.length > 0 && oederTable.map((tableitem, index) =>
                                        <Link to={`/Orderdetailsbreief/${tableitem.PostreqID}`} key={index}>

                                            <Card style={{ margin: '15px', padding: '10px', borderRadius: '20px', border: 'none', boxShadow: '0px 0px 10px 5px rgba(192, 192, 192, 0.5)' }}>

                                                <h5>{tableitem?.Title}</h5>

                                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                                                    <p style={{ fontSize: '15px' }}>
                                                        Lorem ipsum dolor, sit amet consectetur
                                                        adipisicing elit. Nisi aspernatur eligendi.
                                                    </p>
                                                    <span style={{ float: 'right' }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="green" class="bi bi-dot" viewBox="0 0 16 16">
                                                            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                                                        </svg>
                                                    </span>
                                                </div>


                                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    <p style={{ color: 'grey' }}>$200-$350</p>
                                                    <p style={{ color: 'grey' }}> <svg style={{ color: 'grey' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stopwatch" viewBox="0 0 16 16">
                                                        <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z" />
                                                        <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z" />
                                                    </svg> 22-10-2001</p>
                                                </div>

                                            </Card>
                                        </Link>
                                    )}


                                </Col>


                            </Card>

                        </Row>




                    </Col>
                </Row>
            </Container >
            <Phoneviewfooter />
        </>

    )
}

export default Orderdetailsbrief;
