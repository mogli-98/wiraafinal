import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Form, Table, Modal, Button } from 'react-bootstrap';
import "./MyAffiliations.css"
import Sidenav from '../Dashboard/layout/Sidenav';
import Topnav from '../Dashboard/layout/topnav';
import DataTable from 'react-data-table-component';
import AffiliateModel from '../../modal/Affiliate.modal';
import moment from 'moment';
import Photo from "../../asset/image/Announcement.png";
import { helper } from '../../lib/helper';


function Orderdetailsbrief() {
    const [affi, setAfii] = useState();
    const [report, setReport] = useState();
    const [payout, setpayout] = useState();

    //model for copunn
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    //model for report
    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    //model for payout
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    //model for monthly payout
    const [show3, setShow3] = useState(false);
    const handleClose3 = () => setShow3(false);
    const handleShow3 = () => setShow3(true);

    //model for monthly payout
    const [show4, setShow4] = useState(false);
    const handleClose4 = () => setShow4(false);
    const handleShow4 = () => setShow4(true);

    //model for monthly payout
    const [show5, setShow5] = useState(false);
    const handleClose5 = () => setShow5(false);
    const handleShow5 = () => setShow5(true);

    const [linkToCopy, setLinkToCopy] = useState('');

    const handleCopyLink = () => {
        // Create a temporary input element
        const tempInput = document.createElement('input');

        const affilaiteId = localStorage.getItem("AffiliateCode");

        // Set its value to the link you want to copy
        tempInput.value = `https://wiraa.com/Account/signup/${affilaiteId}`;

        // Append it to the DOM
        document.body.appendChild(tempInput);

        // Select the text in the input
        tempInput.select();

        // Execute the 'copy' command
        document.execCommand('copy');

        // Remove the temporary input
        document.body.removeChild(tempInput);

        // You can also provide some feedback to the user (e.g., a toast or alert)

        // alert('Link copied to clipboard!');

        helper.sweetalert.toast("Link copied to clipboard!")

    };






    useEffect(() => {
        const id = localStorage.getItem("AffiliateId");
        AffiliateModel.allAffi({id}).then((respone) => {
            console.log(respone.data , "shiavmmmmmm")
            setAfii(respone.data)

        }).catch((error) => {
            console.log(error);
        });
    }, [])

    useEffect(() => {
        const id = localStorage.getItem("AffiliateId");
        AffiliateModel.Report(id).then((respone) => {
            console.log(respone.data)
            setReport(respone.data)

        }).catch((error) => {
            console.log(error);
        });
    }, [])


    useEffect(() => {
        const id = localStorage.getItem("AffiliateId");

        AffiliateModel.Payout(id).then((respone) => {
            console.log(respone.data);
            setpayout(respone.data);

        }).catch((error) => {
            console.log(error);
        });

    }, [])
    useEffect(() => {
        const id = localStorage.getItem("AffiliateId");

        AffiliateModel.Payout(id).then((respone) => {
            console.log(respone.data);
            setpayout(respone.data);

        }).catch((error) => {
            console.log(error);
        });

    }, [])




    const columns = [
        {
            name: "Id",
            cell: (row, index) => index + 1
        },

        {
            name: "Affiliates",
            selector: (row) => row.FirstName,
            cell: (row) => {
                return <div>
                    <span>{row.FirstName}</span> <span>{row.LastName}</span>
                </div>
            },
        },

        {
            name: "Date ",
            selector: (row) => row.affliateStartDate,
            cell: row => {
                return <div> {moment(row.affliateStartDate).format('DD/MM/YYYY')} </div>
            },
        },




        {
            name: "Amount",
            selector: (row) => row.ConversionStatus,
            cell: row => {
                if (row.ConversionStatus === '1') {
                    return <><p style={{ fontWeight: "400" }}>
                        ₹ 0
                    </p></>;
                }
                else if (row.ConversionStatus === '2') {
                    return <><p style={{ color: "green", fontWeight: "400" }} >₹ {row.PayableCommission}
                    </p></>;
                }
                else if (row.ConversionStatus === '3') {
                    return <><p style={{ fontWeight: "400" }}>₹ 0</p></>;
                }
            },

        },

        {
            name: "Coupon",
            selector: (row) => row.ConversionStatus,
            cell: row => {
                if (row.ConversionStatus === '1') {
                    return <><p style={{ color: "black", fontWeight: "400" }}>
                        0
                    </p></>;
                }
                else if (row.ConversionStatus === '2') {
                    return <><p style={{ color: "green", fontWeight: "400" }} > {row.CouponCode}
                    </p></>;
                }
                else if (row.ConversionStatus === '3') {
                    return <><p style={{ fontWeight: "400" }}>0 </p></>;
                }
            },

        },

        {
            name: "Commission",
            selector: (row) => row.ConversionStatus,
            cell: row => {
                if (row.ConversionStatus === '1') {
                    return <><p style={{ fontWeight: "400" }}>
                        0 %
                    </p></>;
                }
                else if (row.ConversionStatus === '2') {
                    return <><p style={{ color: "green", fontWeight: "400" }} > {row.CouponTotalCommission} %
                    </p></>;
                }
                else if (row.ConversionStatus === '3') {
                    return <><p style={{ fontWeight: "400" }}>0 %</p></>;
                }
            },

        },

        {
            name: "Status",
            selector: (row) => row.ConversionStatus,
            cell: row => {
                if (row.ConversionStatus === '1') {
                    return <><p style={{ color: "yellow", fontWeight: "700" }}>Enrolled</p></>;
                }
                else if (row.ConversionStatus === '2') {
                    return <><p style={{ color: "green", fontWeight: "700" }}>Converted</p></>;
                }
                else if (row.ConversionStatus === '3') {
                    return <><p style={{ color: "red", fontWeight: "700" }}>Dropped</p></>;
                }
            },

        },

    ]
    const customStyles = {

        rows: {
            style: {
                border: '1px solid white',
            },
        },
        Cell: {
            style: {
                border: '1px solid white',
            },
        },
    };

    return (
        <>

            <Container fluid className='dashboard-conatiner-top' >
                <Row>
                    <Col sm={1} xs={2} className=''>
                        <Sidenav activekey="Affiliate" />

                    </Col>

                    <Col sm={8} xs={10} className='dashboard-conatiner-top-row '>
                        <Container className='square border border-bottom-0'>
                            <Topnav activeLink="Affiliate" />





                            {affi !== null || affi.lenght !== 0  ? (
                                <>
                                    {/* Render UI when data is not null */}
                                    <Row className='mt-3'>
                                        <Col>
                                            <div className='editAffiliate'>
                                                {/* Commented out buttons */}
                                                {/* <button className='myaff_button' onClick={handleShow5}>Edit Affiliate</button> */}
                                                {/* <button className='myaff_button' onClick={handleShow}>Create Coupon</button> */}
                                                <button style={{ border: 'none' }} className='myaff_button' onClick={handleShow1}>Report</button>
                                                <button className='myaff_button1' onClick={handleShow2}>Payout</button>
                                            </div>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col>

                                            <div className="table">
                                                <div className="table_affi">
                                                    <h6 className='' style={{ color: '#008080', marginTop: '10px', marginLeft: "22px", cursor: 'pointer' }} >All Visitors</h6>
                                                    {/* <button className='butn'> Copy Link </button> */}


                                                    <button className='butn' onClick={handleCopyLink}> Copy Link </button>

                                                    {/* Set the link to be copied */}

                                                    {linkToCopy && (
                                                        <input
                                                            type="text"
                                                            value={linkToCopy}
                                                            style={{ position: 'absolute', left: '-9999px' }}
                                                            readOnly
                                                        />
                                                    )}

                                                </div>

                                                <DataTable
                                                    customStyles={customStyles}
                                                    columns={columns}
                                                    data={affi}
                                                />

                                            </div>

                                        </Col>

                                    </Row>
                                </>
                            ) : (
                                // Render UI when data is null
                                <div style={{ display: 'flex', justifyContent: 'center' }}>


                                    {/* <Container className="d-flex align-items-center justify-content-between mt-5"> */}

                                    <Row style={{ width: '80%' }} >

                                        <Col className='mt-5 col-12'>

                                            <Card style={{ borderRadius: "30px", border: "1px solid black", padding: "20px" }}>

                                                <Card.Body className="d-flex flex-column align-items-center justify-content-between">

                                                    <img className="w-25 mb-3" src={Photo} alt="photo" />

                                                    <Card.Title className="text-center mt-3">
                                                        <span style={{ fontWeight: "700",fontSize:'25px' }}> Celebrate a lifetime of earnings with our  </span> <span style={{ color: "#008080", fontWeight: "700",fontSize:'25px' }}>  Partner Program  </span>   
                                                    </Card.Title>

                                                    <Card.Text className="text-center txt mt-2">
                                                        <p style={{fontSize:'16px'}}>                                                       

                                                        Promote Wiraa courses, share your affiliate link with prospects
                                                        and get <br /> <strong>20%</strong> commissions when they convert to a paying customer.
                                                        It's that simple!
                                                        </p>

                                                    </Card.Text>

                                                    {/* <div className="d-flex  px-3 w-100 d-flex align-items-center justify-content-center justify-content-around" style={{background:"linear-gradient(to right, #EB5868, #087F7F)", borderRadius:"20px"}}> */}
                                                    <div className="gradiant d-none d-sm-flex align-items-center mt-2 p-2">
                                                        <div>
                                                            <h5 style={{ color: "white", fontWeight: '500', paddingTop: "10px"}}>Boost your earnings by promoting courses</h5>
                                                        </div>
                                                        <div>
                                                            {/* <Button variant="light" className="px-5" style={{color:"#087F7F", fontWeight:"500", borderRadius:"10px", paddingTop:"1px", paddingBottom:"1px"}}>
                    Copy Link
                  </Button> */}
                                                            <Button className="btnn" style={{padding:'6px 50px',fontSize:'15px'}} onClick={handleCopyLink} >
                                                                Copy Link
                                                            </Button>
                                                        </div>
                                                    </div>


                                                    <div className=" d-block d-sm-none">

                                                        <div>
                                                            {/* <Button variant="light" className="px-5" style={{color:"#087F7F", fontWeight:"500", borderRadius:"10px", paddingTop:"1px", paddingBottom:"1px"}}>
                    Copy Link
                  </Button> */}
                                                            <Button className="btnn"  onClick={handleCopyLink}>
                                                                Copy Link
                                                            </Button>
                                                        </div>
                                                    </div>

                                                </Card.Body>
                                            </Card>

                                        </Col>
                                    </Row>
                                    {/* </Container> */}


                                </div>
                            )}







                            {/* 
                            <Row className='mt-3'>
                                <Col>
                                    <div className='editAffiliate'>
                                        {/* <button className='myaff_button' onClick={handleShow5}>Edit Affiliate</button> */}
                            {/* <button className='myaff_button' onClick={handleShow}>Create Coupon</button> 
                                        <button style={{ border: 'none' }} className='myaff_button' onClick={handleShow1} >Report</button>                                
                                        <button className='myaff_button1' onClick={handleShow2}>Payout</button>
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <div className="table">
                                        <div className="table_affi">
                                            <h6 className='' style={{ color: '#008080', marginTop: '10px', marginLeft: "22px", cursor: 'pointer' }} onClick={handleShow4}>All Visitors</h6>

                                            <button className='butn'> Copy Link </button>

                                        </div>

                                        <DataTable
                                            customStyles={customStyles}
                                            columns={columns}
                                            data={affi}
                                        />
                                    </div>
                                </Col>
                            </Row> */}


                            <Modal show={show} onHide={handleClose}>
                                <Container >
                                    <Row>
                                        <Col md={12}>
                                            <button style={{ display: 'flex', flexDirection: 'row', float: 'right', border: 'none', marginTop: '10px', background: 'transparent' }} onClick={handleClose}>❌</button>
                                            <center>
                                                <h3 style={{ color: '#008080' }} className='mt-5'>Coupon</h3>
                                                <p className='mb-3'>Give discounts on course in exchange for a kickback</p>
                                            </center>
                                        </Col>

                                    </Row>
                                    <Row>
                                        <Col sm={12}>
                                            <Form.Group className="mb-3  " controlId="formBasiclink">
                                                <Form.Label>Your affiliation link: </Form.Label>
                                                <Form.Control type="text" placeholder="Enter link here.." />
                                            </Form.Group></Col>
                                    </Row>
                                    <Row>
                                        <Col><Form.Group className="mb-3" controlId="formBasiclink">
                                            <Form.Label>Your coupon Code: </Form.Label>
                                            <Form.Control type="link" placeholder="Enter link here.." />
                                        </Form.Group></Col>
                                    </Row>

                                    <Row>
                                        <Col sm={4}>
                                            <Form.Group className="mb-3" controlId="formBasiclink">
                                                <Form.Label>Total commission: </Form.Label>
                                                <Form.Control type="text" placeholder="20%" />
                                            </Form.Group></Col>
                                        <Col sm={4}>
                                            <Form.Group className="mb-3" controlId="formBasiclink">
                                                <Form.Label>Coupon Discount: </Form.Label>
                                                <Form.Control type="link" placeholder="5%" />
                                            </Form.Group></Col>
                                        <Col sm={4}>
                                            <Form.Group className="mb-3" controlId="formBasiclink">
                                                <Form.Label>Your commission: </Form.Label>
                                                <Form.Control type="link" placeholder="15%" />
                                            </Form.Group></Col>
                                    </Row>

                                    <div className='btnHolder'>

                                        <center>
                                            <button className='hire mb-5' variant="light" type="submit">
                                                Save
                                            </button>
                                        </center>
                                    </div>
                                </Container>

                            </Modal>

                            <Modal show={show1} onHide={handleClose1} size="lg">

                                <Modal.Header style={{ borderBottom: 'none', paddingBottom: '0px' }} closeButton>

                                </Modal.Header>

                                <Container className="mb-3" style={{ paddingLeft: "50px", paddingRight: "50px" }}>

                                    {/* <button
                                        onClick={handleClose1}
                                        style={{
                                            float: "inline-end",
                                            marginTop: "5px",
                                            border: "none",
                                            background: "transparent",
                                            color:'black'
                                        }}
                                        area-label = "Close"
                                    >
                                     ❌   
                                    </button> */}

                                    <h3 className="text-center mt-3" style={{ color: "#008080" }}>Report</h3>
                                    <p className="text-center" style={{ color: "gray", fontSize: "15px", fontWeight: "300" }}>
                                        Check your monthly affiliation report{" "}
                                    </p>
                                    <Row className="px-5">
                                        <Col sm={4}>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasiclink"
                                                style={{ width: "90%", borderRadius: "8px" }}
                                            >
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Suresh Srivastav"
                                                    disabled
                                                    defaultValue={report?.[0].AffiliateCode}
                                                />
                                            </Form.Group>
                                        </Col>

                                        {/* {console.log(report)} */}

                                        <Col sm={4}>
                                            <select
                                                name="Month"
                                                id="Month"
                                                className="month"
                                                style={{
                                                    width: "90%",
                                                    height: "35px",
                                                    marginLeft: "10px",
                                                    paddingLeft: '10px',
                                                    borderRadius: "8px",

                                                }}
                                            >
                                                <option value="Jan" defaultValue>
                                                    Start Date
                                                </option>
                                                {/* <option value="feb">Febuary</option>
                                                <option value="march">March</option>
                                                <option value="April" selected>
                                                    April
                                                </option> */}

                                                {report && report[0]?.StartDate.map((v, i) => {

                                                    return <option key={i} value={v}>

                                                        {moment(v).format('DD/MM/YYYY')}

                                                    </option>

                                                })

                                                }

                                            </select>

                                        </Col>

                                        <Col sm={4}>
                                            <select
                                                name="Month"
                                                id="Month"
                                                className="month"
                                                style={{
                                                    width: "90%",
                                                    height: "35px",
                                                    // marginLeft: "px",
                                                    paddingLeft: '10px',
                                                    borderRadius: '8px'
                                                }}
                                            >
                                                <option value="Jan" defaultValue>
                                                    End Date
                                                </option>

                                                {/* <option value="feb">Febuary</option>
                                                <option value="march">March</option>
                                                <option value="April" selected>
                                                    April
                                                </option> */}

                                                <option value="">

                                                    {moment(report?.EndDate).format('DD/MM/YYYY')}

                                                </option>


                                            </select>

                                        </Col>
                                    </Row>

                                    <div className="txtcntr">
                                        <Row className="px-5">
                                            <Col sm={6}>
                                                <Card>
                                                    <center>
                                                        <p className="mt-3" style={{ color: "gray", fontSize: "15px", fontWeight: 100 }}>Unpaid Visitors</p>
                                                        <p style={{ fontWeight: 400, fontSize: "20px" }}>{report?.[0].Dropped}</p>
                                                    </center>
                                                </Card>
                                            </Col>
                                            <Col sm={6}>
                                                <Card>
                                                    <center>
                                                        <p className="mt-3" style={{ color: "gray", fontSize: "15px", fontWeight: 100 }}>Paid Visitor</p>
                                                        <p style={{ fontWeight: 400, fontSize: "20px" }}>{report?.[0].Converted}</p>
                                                    </center>
                                                </Card>
                                            </Col>
                                        </Row>

                                        <Row className="mt-3 px-5">
                                            <Col sm={6}>
                                                <Card>
                                                    <center>
                                                        <p className="mt-3" style={{ color: "gray", fontSize: "15px", fontWeight: 100 }}>Total Visitor</p>
                                                        <p style={{ fontWeight: 400, fontSize: "20px" }}>{report?.[0].TotalSignup}</p>
                                                    </center>
                                                </Card>
                                            </Col>
                                            <Col sm={6}>
                                                <Card>
                                                    <center>
                                                        <p className="mt-3" style={{ color: "gray", fontSize: "15px", fontWeight: 100 }}>Total Commissions</p>
                                                        <p style={{ fontWeight: 400, fontSize: "20px" }}> ₹ {report?.[0].PayoutAmount}/-</p>
                                                    </center>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </div>
                                    <center>
                                        <button className="hire mt-4 mb-4" type="send" style={{ width: "200px", height: "40px", borderRadius: "10px" }}>
                                            Done
                                        </button>
                                    </center>
                                </Container>
                            </Modal>

                            <Modal show={show2} onHide={handleClose2} size="lg">

                                <Modal.Header style={{ borderBottom: 'none', paddingBottom: '0px' }} closeButton>

                                </Modal.Header>

                                <Container className="">

                                    {/* <button

                                        onClick={handleClose2}
                                        style={{
                                            float: "inline-end",
                                            // marginTop: "5px",
                                            border: "none",
                                            background: "transparent",
                                        }}
                                    >
                                        ❌
                                    </button> */}

                                    <center>
                                        <h3 className="mt-3" style={{ color: "#008080" }}>
                                            Payout
                                        </h3>
                                        <p style={{ color: "gray", fontSize: "15px" }}>
                                            Initiate your monthly Payout{" "}
                                        </p>
                                    </center>

                                    <Row className="px-5">
                                        <Col sm={6}>
                                            <Form.Group className="mt-3" controlId="formBasiclink">
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Suresh Srivastav"
                                                    disabled
                                                />
                                            </Form.Group>
                                        </Col>

                                        <Col sm={6}>

                                            <Form.Group className="mt-3" controlId="formBasiclink">

                                                <div style={{ border: '1px solid grey', borderRadius: '6px', padding: '5px 10px' }}>
                                                    Payout no.
                                                    {payout?.[0]?.PayoutId}
                                                </div>

                                            </Form.Group>


                                        </Col>

                                    </Row>

                                    {console.log(payout, 'hhhhhhhhhh')}

                                    <Row className="mt-4 px-5">
                                        <Col sm={12}>
                                            <Form.Group className="mb-3" controlId="formBasiclink">
                                                <Form.Control
                                                    as="textarea"
                                                    // type="text"
                                                    style={{
                                                        height: "150px",
                                                    }}
                                                    placeholder="Note for payment method"
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                    <center className="mt-4">
                                        {" "}
                                        <h6>
                                            Pay <span style={{ color: "#008080" }}>Rs.4999</span> to
                                            Suresh shrivastav
                                        </h6>
                                    </center>
                                    <Row className=" mb-5 mt-5">
                                        <Col sm={6}>
                                            <center>
                                                <button
                                                    className="switch"
                                                    type="payout"
                                                    style={{ width: "150px", height: "40px" }}
                                                >
                                                    Previous payout
                                                </button>
                                            </center>
                                        </Col>

                                        <Col sm={6}>
                                            <center>
                                                <button
                                                    className="hire"
                                                    style={{ width: "150px", height: "40px" }}
                                                    type="send"
                                                >
                                                    Send
                                                </button>
                                            </center>
                                        </Col>
                                    </Row>
                                </Container>
                            </Modal>

                            <Modal show={show3} onHide={handleClose3} size="lg">
                                <Container className='MonthPayout'>
                                    <Row>
                                        <Col> <h3 className='text-center' >Payout</h3>
                                            <p className='text-center'>Initiate your Monthly Payouts</p>

                                            <div className="table" style={{ width: '100%', marginTop: '15px' }}>
                                                <table style={{ border: '2px solid grey', width: '100%' }}>
                                                    <tr>
                                                        <th style={{ borderBottom: '1px solid black' }}>Payout ID</th>
                                                        <th style={{ borderBottom: '1px solid black' }}>Date</th>
                                                        <th style={{ borderBottom: '1px solid black' }}>Month</th>
                                                        <th style={{ borderBottom: '1px solid black' }}>Amount</th>
                                                        <th style={{ borderBottom: '1px solid black' }}>Status</th>

                                                    </tr>

                                                    <tr >
                                                        <td>10</td>
                                                        <td>22-03-2023</td>
                                                        <td>march 23</td>
                                                        <td>22,000</td>
                                                        <td style={{ color: 'yellow' }}> <b>Processing</b> </td>
                                                    </tr>
                                                    <tr >
                                                        <td>9</td>
                                                        <td>20-02-2023</td>
                                                        <td>febuary 23</td>
                                                        <td>10,000</td>
                                                        <td style={{ color: 'green' }}> <b>Sucessful</b> </td>
                                                    </tr>
                                                    <tr >
                                                        <td>8</td>
                                                        <td>10-11-2022</td>
                                                        <td> december 22</td>
                                                        <td>5000</td>
                                                        <td style={{ color: 'green' }}> <b>Sucessful</b> </td>
                                                    </tr>
                                                    <tr >
                                                        <td>7</td>
                                                        <td>09-11-2022</td>
                                                        <td> October22</td>
                                                        <td>2500</td>
                                                        <td style={{ color: 'red' }}> <b>Rejected</b></td>
                                                    </tr>
                                                    <tr >
                                                        <td>6</td>
                                                        <td>06-11-2022</td>
                                                        <td>september 22</td>
                                                        <td>600</td>
                                                        <td style={{ color: 'green' }}> <b>Sucessful</b></td>
                                                    </tr>

                                                </table>
                                            </div>


                                            <center>
                                                <button className='switch mb-5' type="send">
                                                    Current Payout
                                                </button>
                                            </center>

                                        </Col>
                                    </Row>




                                </Container>
                            </Modal>

                            {/* <Modal show={show4} onHide={handleClose4} size="lg">
                                <Container style={{padding:'20px 50px'}}>
                                    <h2 className='heading' style={{ display: 'flex', justifyContent: 'center', marginBottom: '25px',color:'#008080' }}>Payout Details</h2>
                                    <Row  >
                                        <Col xs={3} md={3}>
                                            <Card style={{ fontSize: '1.2vmax', }}>Suresh mandloi</Card>
                                        </Col>
                                        <Col xs={3} md={3}>
                                            <Card style={{ fontSize: '1.2vmax', }}>Surekha chawla</Card>

                                        </Col>
                                        <Col xs={3} md={3}>
                                            <Card style={{ fontSize: '1.2vmax', }}>
                                                kuchbhi@gmail.com
                                            </Card>
                                        </Col>
                                        <Col xs={3} md={3}>
                                            <Card style={{ fontSize: '1.2vmax', }}>
                                                7024660055
                                            </Card>
                                        </Col>
                                    </Row>


                                    <Row style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                                        <Col xs={2} md={2}>
                                            <Card style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2vmax', }}>
                                                10 <br /><span className='small'>Payout no.</span>
                                            </Card>


                                        </Col>
                                        <Col xs={2} md={2}>
                                            <Card style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2vmax', }}>
                                                2023 <br /><span className='small'>Payout Year.</span>
                                            </Card>


                                        </Col>
                                        <Col xs={2} md={2}>
                                            <Card style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2vmax', }}>March <br /> <span className='small'>Payout Month</span> </Card>
                                        </Col>
                                        <Col xs={2} md={2}>
                                            <Card style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2vmax', }} >
                                                Rs.20,000 <br /> <span className='small'>Payout Amount</span>
                                            </Card>

                                        </Col>
                                        <Col xs={4} md={4}>
                                            <Card style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.2vmax', }}>
                                                <span className='small'> Hello,my UPI ID is abcd@paytm <br /> Kindly pay as possible.</span>
                                            </Card>

                                        </Col>
                                    </Row>



                                    <div className="table" style={{ marginTop: '15px', }}>
                                        <table style={{ border: '2px solid grey', width: '100%' }}>
                                            <tr>
                                                <th style={{ borderBottom: '1px solid black' }}>Payout ID</th>
                                                <th style={{ borderBottom: '1px solid black' }}>Date</th>
                                                <th style={{ borderBottom: '1px solid black' }}>Month</th>
                                                <th style={{ borderBottom: '1px solid black' }}>Amount</th>
                                                <th style={{ borderBottom: '1px solid black' }}>Status</th>

                                            </tr>

                                            <tr >
                                                <td>10</td>
                                                <td>22-03-2023</td>
                                                <td>march 23</td>
                                                <td>22,000</td>
                                                <td style={{ color: 'yellow' }}> <b>Processing</b> </td>
                                            </tr>
                                            <tr >
                                                <td>9</td>
                                                <td>20-02-2023</td>
                                                <td>febuary 23</td>
                                                <td>10,000</td>
                                                <td style={{ color: 'green' }}> <b>Sucessful</b> </td>
                                            </tr>
                                            <tr >
                                                <td>8</td>
                                                <td>10-11-2022</td>
                                                <td> december 22</td>
                                                <td>5000</td>
                                                <td style={{ color: 'green' }}> <b>Sucessful</b> </td>
                                            </tr>
                                            <tr >
                                                <td>7</td>
                                                <td>09-11-2022</td>
                                                <td> October22</td>
                                                <td>2500</td>
                                                <td style={{ color: 'red' }}> <b>Rejected</b></td>
                                            </tr>
                                            <tr >
                                                <td>6</td>
                                                <td>06-11-2022</td>
                                                <td>september 22</td>
                                                <td>600</td>
                                                <td style={{ color: 'green' }}> <b>Sucessful</b></td>
                                            </tr>

                                        </table>
                                    </div>

                                    <div className="btn" style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '30px', }}>
                                        <select id="Month" className='mont' >
                                            <option value="Jan">Payout status</option>
                                            <option value="feb">Payout Status</option>
                                            <option value="march">Paid</option>
                                            <option value="April" selected>Unpaid</option>
                                        </select>

                                        <div> <button className='switch'  >Cancel</button>
                                            <button className='hire'>Submit</button></div>

                                    </div>


                                </Container>
                            </Modal> */}

                            <Modal show={show5} onHide={handleClose5} size="lg">
                                <Container>

                                    <h3 className='text-center' style={{ fontWeight: '600' }}>Affiliate Details</h3>
                                    <Row className='mb-4 mt-4'>
                                        <Col sm={2}>
                                            <select name="Month" id="Month" className='month' style={{ color: 'green', fontWeight: '600', fontSize: '1.2vmax' }} >
                                                <option style={{ color: 'green', fontWeight: '600' }} value="Jan" >Approved</option>
                                                <option style={{ color: 'red' }} value="feb">Not Approved</option>

                                            </select>
                                        </Col>
                                        <Col sm={3}><div className="box11">
                                            <span className='small'> Lifetime visitors:23,293</span>
                                        </div></Col>
                                        <Col sm={3}><div className="box12">
                                            <span className='small'>lifetime revenue Rs.39393</span>
                                        </div></Col>
                                        <Col sm={2}><div className="box13">
                                            <span className='small'> Download Report</span>
                                        </div></Col>
                                        <Col sm={2}><div className="box14">
                                            <span className='small'>Download Paouts</span>
                                        </div></Col>
                                    </Row>



                                    <Row>
                                        <Col>
                                            <Card>
                                                <center>
                                                    <p className='pt-2'>
                                                        Suresh Srivastav
                                                    </p>
                                                </center>
                                            </Card>

                                        </Col>
                                        <Col >
                                            <Card>
                                                <center>
                                                    <p className='pt-2'>
                                                        anshumangupta123

                                                    </p>
                                                </center>
                                            </Card>
                                        </Col>

                                        <Col >
                                            <Card>
                                                <center>
                                                    <p className='pt-2'>
                                                        sureshyadav23@gmail.com

                                                    </p>
                                                </center>
                                            </Card>
                                        </Col>

                                        <Col >
                                            <Card>
                                                <center>
                                                    <p className='pt-2'>
                                                        9874373828

                                                    </p>
                                                </center>
                                            </Card>
                                        </Col>
                                    </Row>
                                    <Row className='mt-2 mb-4'>
                                        <Col sm={2}>
                                            <div className="box16">
                                                Monthly Report
                                            </div>
                                        </Col>
                                        <Col sm={6}>
                                        </Col>
                                        <Col sm={4}>
                                            <div className="box17">
                                                <select name="Month" id="Month" className='ApprovedMonth'>
                                                    <option value="year" >2023</option>
                                                    <option value="year">2022</option>
                                                    <option value="year">2021</option>
                                                </select>
                                                <select name="Month" id="Month" className='ApprovedMonth' >
                                                    <option value="Jan" >Month</option>
                                                    <option value="feb">January</option>
                                                    <option value="year">Febuary</option>
                                                </select>
                                                Filter
                                            </div>
                                        </Col>
                                    </Row>
                                    {/* <div className="box15">
                                            <div className="box16">
                                                Monthly Report
                                            </div>
                                            <div className="box17">
                                                <select name="Month" id="Month" className='ApprovedMonth' >
                                                    <option value="year" >2023</option>
                                                    <option value="year">2022</option>
                                                    <option value="year">2021</option>
                                                </select>
                                                <select name="Month" id="Month" className='ApprovedMonth' >
                                                    <option value="Jan" >Month</option>
                                                    <option value="feb">January</option>
                                                    <option value="year">Febuary</option>
                                                </select>
                                                Filter
                                            </div>
                                        </div> */}


                                    <div className="box18">
                                        <Row>
                                            <Col >
                                                <span className='small'>Coupon code:</span>
                                                <Card>
                                                    <p>
                                                        anshumanx123

                                                    </p>
                                                </Card>
                                            </Col>
                                            <Col >
                                                <span className='small'>Total visitors:</span>
                                                <Card>
                                                    <p>
                                                        3144

                                                    </p>
                                                </Card>
                                            </Col>
                                            <Col >
                                                <span className='small'>Paid Visitors:</span>
                                                <Card>
                                                    <p>
                                                        2420

                                                    </p>
                                                </Card>
                                            </Col>
                                            <Col >
                                                <span className='small'>Unpaid Visitors:</span>
                                                <Card>
                                                    <p>
                                                        40

                                                    </p>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </div>



                                    <div className="box18">
                                        <Row>
                                            <Col >
                                                <span className='small'>Coupon code:</span>
                                                <Card>
                                                    <p>
                                                        anshumanx123

                                                    </p>
                                                </Card>
                                            </Col>
                                            <Col >
                                                <span className='small'>Coupon created:</span>
                                                <Card>
                                                    <p>
                                                        02/12/2022

                                                    </p>
                                                </Card>
                                            </Col>
                                            <Col >
                                                <span className='small'>Coupon used:</span>
                                                <Card>
                                                    <p>
                                                        242

                                                    </p>
                                                </Card>
                                            </Col>
                                            <Col >
                                                <span className='small'>Coupon discount: (Average)</span>
                                                <Card>
                                                    <p>
                                                        10%

                                                    </p>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="box18">
                                        <Row>
                                            <Col >
                                                <p>Total Revenue:</p>
                                                <Card>
                                                    <p>
                                                        Rs.1000000
                                                    </p>
                                                </Card>
                                            </Col>
                                            <Col >
                                                <p>Total Commission:</p>
                                                <Card>
                                                    <p>
                                                        Rs.1000000
                                                    </p>
                                                </Card>
                                            </Col>
                                            <Col >
                                                <p>Total Discount:</p>
                                                <Card>
                                                    <p>
                                                        Rs.1000000
                                                    </p>
                                                </Card>
                                            </Col>
                                            <Col >
                                                <p>Payable</p>
                                                <Card>
                                                    <p>
                                                        Rs.1000000
                                                    </p>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </div>



                                    <center><button className='hire mt-5 mb-5' type="send">
                                        Done
                                    </button></center>

                                </Container>
                            </Modal>



                        </Container>
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default Orderdetailsbrief;