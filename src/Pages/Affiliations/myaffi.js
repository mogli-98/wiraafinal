import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Form, Table, Modal } from 'react-bootstrap';
import "./MyAffiliations.css"
import Sidenav from '../Dashboard/layout/Sidenav';
import Topnav from '../Dashboard/layout/topnav';
import DataTable from 'react-data-table-component';
import AffiliateModel from '../../modal/Affiliate.modal';
function Orderdetailsbrief() {
    const [affi, setAfii] = useState();
    const [report , setReport] = useState();
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

    useEffect(() => {
        AffiliateModel.allAffi().then((respone) => {
            console.log(respone.data)
            setAfii(respone.data)

        })
    }, [])
    useEffect(() => {
        AffiliateModel.Report().then((respone) =>{
        console.log(respone.data)
        setReport(respone.data)

        })
    }, [])
const columns = [
    {
        name:"Id",
        selector: (row) => row.AffiliateId,
        width:"50px",
    },
    {
        name:"Affiliate ",
        selector: (row) => row.AffiliateCode,
    },
    {
        name:"Date ",
        selector: (row) => row.affliateStartDate,
    },
    {
        name:"Amount",
        selector: (row) => row.PayableCommission,
    },
    {
        name:"Coupon",
        selector: (row) => row.CouponCode,
    },
    {
        name:"Commission",
        selector: (row) => row.CouponTotalCommission,
    },
    {
        name:"Status",
        selector: (row) => row.ConversionStatus,
        cell: row => {
            if (row.ConversionStatus === '1') {
                return<><p style={{color:"green",fontWeight:"700"}}>Converted</p></>;
              } else if (row.ConversionStatus === '2') {
                return<><p style={{color:"red",fontWeight:"700"}}>Dropped</p></>;
              }},
            
    },

]
    const customStyles = {

    rows: {
        style: {
          border: '1px solid white', // Add a border to the table rows
        },
      },
      Cell: {
        style: {
          border: '1px solid white', // Add a border to the table rows
        },
      },
};
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
                                <Row className='mt-3'>
                                    <Col>
                                        <div className='editAffiliate'>
                                            {/* <button className='myaff_button' onClick={handleShow5}>Edit Affiliate</button> */}
                                            <button className='myaff_button'>Create Coupon</button>
                                            <button className='myaff_button' onClick={handleShow} >Report</button>
                                            {/* <p style={{float:'right' ,position:'relative'}}>₹2</p>   */}
                                            <button className='myaff_button1' onClick={handleShow2}>Payout</button>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <div className="table">
                                            <div className="table_affi">
                                                <h6 className='' style={{ color: '#008080',marginTop:'10px',marginLeft:"22px" }} onClick={handleShow4}>All Visitors</h6>
                                                <button className='butn' onClick={handleShow1} >Copy Link </button>
                                            </div>
                                            {/* <Table style={{ border: '2px solid lightgrey' }}>
                                                <thead>
                                                    <tr>
                                                        <th style={{ borderBottom: '1px solid black' }}>ID</th>
                                                        <th style={{ borderBottom: '1px solid black' }}>Affiliates</th>
                                                        <th style={{ borderBottom: '1px solid black' }}>Date</th>
                                                        <th style={{ borderBottom: '1px solid black' }}>Amount</th>
                                                        <th style={{ borderBottom: '1px solid black' }}>Coupon</th>
                                                        <th style={{ borderBottom: '1px solid black' }}>Commission</th>
                                                        <th style={{ borderBottom: '1px solid black' }}>Status</th>

                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    {affi && affi.map((listaffi) =>
                                                        <tr >
                                                            <td>{listaffi.AffiliateId}</td>
                                                            <td onClick={handleShow3}>{listaffi.AffiliateCode}</td>
                                                            <td>{listaffi.StartDate}</td>
                                                            <td>₹1999</td>
                                                            <td>0%</td>
                                                            <td>0%</td>
                                                            <td style={{ color: 'Red' }}> <b>Unpaid</b> </td>
                                                        </tr>
                                                    )}

                                                </tbody>
                                            </Table> */}
                                            <DataTable
                                            customStyles={customStyles}
                                            columns={columns}
                                            data={affi}
                                            />
                                        </div>
                                    </Col>
                                </Row>
                                <Modal show={show} onHide={handleClose}>
                                    <Container >
                                        <Row>
                                            <Col md={12}>
                                                <center>
                                                    <h3 className='mt-5'>Coupon</h3>
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
                                                    Delete
                                                </button>
                                            </center>


                                        </div>

                                    </Container>

                                </Modal>
                                <Modal show={show1} onHide={handleClose1} size='lg'>
                                    <Container >
                                        <h3 className='text-center mt-3'>Report</h3>
                                        <p  className='text-center  '>Check your monthly affiliation Report </p>
                                        <Row>
                                            <Col sm={4}>
                                                <Form.Group className="mb-3" controlId="formBasiclink" style={{width:"90%" }}>
                                                    <Form.Control type="text" placeholder="Suresh Srivastav" defaultValue={report?.[0].AffiliateCode} />
                                                </Form.Group>
                                            </Col>
                                            <Col sm={4}>
                                                <select name="Month" id="Month" className='month' style={{ width: '90%', height: '35px',marginLeft:'10px' }} >
                                                    <option value="Jan" disabled>Month</option>
                                                    <option value="feb">Febuary</option>
                                                    <option value="march">March</option>
                                                    <option value="April" selected>April</option>
                                                </select>

                                            </Col>

                                            <Col sm={4}>
                                                <select name="Month" id="Month" className='month'style={{ width: '90%', height: '35px',marginLeft:'px' }} >
                                                    <option value="Jan" disabled>Year</option>
                                                    <option value="feb">Febuary</option>
                                                    <option value="march">March</option>
                                                    <option value="April" selected>April</option>
                                                </select>

                                            </Col>
                                        </Row>


                                        <div className='txtcntr'>

                                            <Row>
                                                <Col sm={6}>
                                                    <Card>
                                                        <center>
                                                            <h5 className='mt-3'>Unpaid Affiliates</h5>
                                                            <p>{report?.[0].Dropped}</p>
                                                        </center>
                                                    </Card>
                                                </Col>
                                                <Col sm={6}>
                                                    <Card>
                                                        <center>
                                                            <h5 className='mt-3'>Paid Affiliates</h5>
                                                            <p>{report?.[0].Converted}</p>
                                                        </center>
                                                    </Card>
                                                </Col>
                                            </Row>


                                            <Row className='mt-3'>
                                                <Col sm={6}>
                                                    <Card>
                                                        <center>
                                                            <h5 className='mt-3'>Total Affiliates</h5>
                                                            <p>{report?.[0].TotalSignup}</p>
                                                        </center>
                                                    </Card>
                                                </Col>
                                                <Col sm={6}>
                                                    <Card>
                                                        <center>₹
                                                            <h5 className='mt-3'>Total Commissions</h5>
                                                            <p> ₹ {report?.[0].PayoutAmount}/-</p>
                                                        </center>
                                                    </Card>
                                                </Col>
                                            </Row>
                                        </div>
                                        <center><button className='hire mt-4 mb-4' type="send">
                                            Done
                                        </button></center>

                                    </Container>

                                </Modal>
                                <Modal show={show2} onHide={handleClose2} size='lg'>
                                    <Container>

                                        <center><h3 className='mt-3'>Payout</h3>
                                            <p>Initiate your monthly Payout </p></center>

                                        <Row>
                                            <Col sm={6}>
                                                <Form.Group className="" controlId="formBasiclink">
                                                    <Form.Control type="text" placeholder="Suresh Srivastav" />
                                                </Form.Group>
                                            </Col>
                                            <Col sm={6}>
                                                <Form.Group className="" controlId="formBasiclink">
                                                    <Form.Control type="link" placeholder="Payout no.04" />
                                                </Form.Group>
                                                </Col>
                                        </Row>
                                        <Row>
                                            <Col sm={12}>
                                                <Form.Group className="mb-3" controlId="formBasiclink">
                                                    <Form.Control type="text" style={{ height: '80px' }} placeholder="Note for payment method" />
                                                </Form.Group></Col>
                                        </Row>

                                        <center>                                        <h6>Pay <span style={{ color: '#008080' }}>Rs.4999</span>  to Suresh shrivastav</h6>
                                        </center>
                                        <Row className=' mb-5 mt-4'>
                                            <Col sm={6}>
                                                <center>
                                                    <button className='switch' type="payout">
                                                        Payout
                                                    </button>
                                                </center>
                                            </Col>

                                            <Col sm={6}>
                                                <center>
                                                    <button className='hire' type="send">
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
                                <Modal show={show4} onHide={handleClose4} size="lg">
                                    <Container>
                                        <h2 className='heading' style={{ display: 'flex', justifyContent: 'center', marginBottom: '25px' }}>Payout Details</h2>
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
                                </Modal>
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
        </>
    )
}

export default Orderdetailsbrief