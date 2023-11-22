// import React from 'react';
// import { Container, Row, Col, Card } from "react-bootstrap";

// import "../../asset/css/freelanceredashboard.css";
// import Sidenavbar from './layout/Sidenavbar';
// import Topnavbar from './layout/topnavbar';
// import Phoneviewfooter from '../../Layout/Phoneviewfooter';
// import Accordion from 'react-bootstrap/Accordion';
// import { resolvePath } from 'react-router-dom';

// function Package() {
//     // const checkoutHandler = async (amount) => {

//     //     const { data: { key } } = await axios.get("http://www.localhost:4000/api/getkey")

//     //     const { data: { order } } = await axios.post("http://localhost:4000/api/checkout", {
//     //         amount
//     //     })

//     //     const options = {
//     //         key,
//     //         amount: order.amount,
//     //         currency: "INR",
//     //         name: "6 Pack Programmer",
//     //         description: "Tutorial of RazorPay",
//     //         image: "https://avatars.githubusercontent.com/u/25058652?v=4",
//     //         order_id: order.id,
//     //         callback_url: "http://localhost:4000/api/paymentverification",
//     //         prefill: {
//     //             name: "Gaurav Kumar",
//     //             email: "gaurav.kumar@example.com",
//     //             contact: "9999999999"
//     //         },
//     //         notes: {
//     //             "address": "Razorpay Corporate Office"
//     //         },
//     //         theme: {
//     //             "color": "#121212"
//     //         }
//     //     };
//     //     const razor = new window.Razorpay(options);
//     //     razor.open();
//     // }
 

//     return (
//         <>
//             <Container fluid className='dashboard-conatiner-top' >
//                 <Row>
//                     <Col sm={1} className='d-none d-sm-block'>

//                         <Sidenavbar activekey="package" />
//                     </Col>



//                     <Col sm={8} xs={12} style={{ padding: '0px' }} className='dashboard-conatiner-top-row '>
//                         <Container className='square border border-bottom-0'>
//                             <Topnavbar activeLink="Package" />

//                             <Row >
//                                 <p style={{ fontSize: '18px', fontWeight: 500 }} className='text-center d-none d-sm-block'>Upgrade To A Curated Package To Maximise Your Business Success And Earnings!</p>
//                                 <p style={{ fontSize: '18px', fontWeight: 500 }} className='text-center d-none d-sm-block'>Change Your Plans Anytime</p>

//                                 <div className="container mt-4 d-none d-sm-block">

//                                     <table className="styled-table mb-4">
//                                         <thead>

//                                             <tr>
//                                                 <td style={{ borderLeft: 'none', borderTop: 'none' }}>
//                                                     <p style={{ color: '#008080', fontSize: '20px', fontWeight: 600 }}>Package Confirmation</p>

//                                                     <span style={{ fontWeight: 500 }}>Get quality Talents</span>
//                                                 </td>

//                                                 <td style={{ fontWeight: 600 }}>
//                                                     <p style={{ fontSize: '16px', fontWeight: 600 }}>Basic</p>
//                                                     <p style={{ color: '#008080', fontSize: '18px', fontWeight: 600 }}>Free</p>
//                                                     <p style={{ color: 'grey' }}>Fulfill your basic needs</p>
//                                                 </td>



//                                                 <td style={{ fontWeight: 600 }}>

//                                                     <p style={{ fontSize: '16px', fontWeight: 600 }}>Plus</p>
//                                                     <p style={{ color: '#008080', fontSize: '18px', fontWeight: 600 }}>₹ 499 / month</p>
//                                                     <p style={{ color: 'grey' }}>Scale your business hiring</p>
//                                                 </td>

//                                                 <td style={{ fontWeight: 600 }}>
//                                                     <p style={{ fontSize: '16px', fontWeight: 600 }}>Premium</p>
//                                                     <p style={{ color: '#008080', fontSize: '18px', fontWeight: 600 }}>₹ 4999 / month</p>
//                                                     <p style={{ color: 'grey' }}>Maximise your workforce program</p>

//                                                 </td>
//                                             </tr>


//                                             <tr>
//                                                 <td style={{ color: 'grey', fontWeight: 700 }}>
//                                                     Message Credits
//                                                 </td>
//                                                 <td style={{ fontWeight: 600 }}>
//                                                     05
//                                                 </td>
//                                                 <td style={{ fontWeight: 600 }}>
//                                                     50
//                                                 </td>
//                                                 <td style={{ fontWeight: 600 }}>
//                                                     Unlimited
//                                                 </td>
//                                             </tr>

//                                             <tr>
//                                                 <td style={{ color: 'grey', fontWeight: 700 }}>
//                                                     Customer Support
//                                                 </td>
//                                                 <td style={{ fontWeight: 600 }}>
//                                                     Normal
//                                                 </td>
//                                                 <td style={{ fontWeight: 600 }}>
//                                                     Premium
//                                                 </td>
//                                                 <td style={{ fontWeight: 600 }}>
//                                                     Premium
//                                                 </td>
//                                             </tr>

//                                             <tr>
//                                                 <td style={{ color: 'grey', fontWeight: 700 }}>
//                                                     Manager Relationship
//                                                 </td>
//                                                 <td style={{ fontWeight: 600 }}>
//                                                     Not Available
//                                                 </td>
//                                                 <td style={{ fontWeight: 600 }}>
//                                                     Dedicated
//                                                 </td>
//                                                 <td style={{ fontWeight: 600 }}>
//                                                     Dedicated
//                                                 </td>
//                                             </tr>

//                                             <tr>
//                                                 <td style={{ color: 'grey', fontWeight: 700 }}>
//                                                     Payment Protection
//                                                 </td>
//                                                 <td style={{ fontWeight: 600 }}>
//                                                     Secured
//                                                 </td>
//                                                 <td style={{ fontWeight: 600 }}>
//                                                     Secured
//                                                 </td>
//                                                 <td style={{ fontWeight: 600 }}>
//                                                     Secured
//                                                 </td>
//                                             </tr>
//                                             <tr style={{ height: '40px' }}>
//                                                 <td>

//                                                 </td>
//                                                 <td>

//                                                 </td>
//                                                 <td>

//                                                 </td>
//                                                 <td>

//                                                 </td>
//                                             </tr>



//                                             <tr>
//                                                 <th>Client Dashboard</th>
//                                                 <th></th>
//                                                 <th></th>
//                                                 <th></th>
//                                             </tr>
//                                         </thead>
//                                         <tbody>

//                                             <tr>
//                                                 <td style={{ color: 'grey', fontWeight: 700 }}>
//                                                     Order Listing
//                                                 </td>
//                                                 <td style={{ fontWeight: 600 }}>
//                                                     Normal
//                                                 </td>
//                                                 <td style={{ fontWeight: 600 }}>
//                                                     Featured
//                                                 </td>
//                                                 <td style={{ fontWeight: 600 }}>
//                                                     Featured
//                                                 </td>
//                                             </tr>


//                                             <tr>
//                                                 <td style={{ color: 'grey', fontWeight: 700 }}>
//                                                     Job Posting
//                                                 </td>
//                                                 <td style={{ fontWeight: 600 }}>
//                                                     Unlimited
//                                                 </td>
//                                                 <td style={{ fontWeight: 600 }}>
//                                                     Unlimited
//                                                 </td>
//                                                 <td style={{ fontWeight: 600 }}>
//                                                     Unlimited
//                                                 </td>
//                                             </tr>



//                                             <tr style={{ height: '40px' }}>
//                                                 <td style={{ color: 'grey', fontWeight: 700 }}>
//                                                     Verified Professionals
//                                                 </td>
//                                                 <td style={{ fontWeight: 600 }}>
//                                                     Unlimited
//                                                 </td>
//                                                 <td style={{ fontWeight: 600 }}>
//                                                     Unlimited
//                                                 </td>
//                                                 <td style={{ fontWeight: 600 }}>
//                                                     Unlimited
//                                                 </td>
//                                             </tr>




//                                             <tr style={{ height: '40px' }}>

//                                                 <td>

//                                                 </td>

//                                                 <td>

//                                                 </td>


//                                                 <td>

//                                                 </td>


//                                                 <td>

//                                                 </td>
//                                             </tr>


//                                             <tr>
//                                                 <th style={{ fontWeight: 700 }}>Professional Dashboard</th>
//                                                 <th></th>
//                                                 <th></th>
//                                                 <th></th>
//                                             </tr>


//                                             <tr>
//                                                 <td style={{ color: 'grey', fontWeight: 700 }}>
//                                                     Project Credits
//                                                 </td>
//                                                 <td style={{ fontWeight: 600 }}>
//                                                     05
//                                                 </td>
//                                                 <td style={{ fontWeight: 600 }}>
//                                                     50
//                                                 </td>
//                                                 <td style={{ fontWeight: 600 }}>
//                                                     Unlimited
//                                                 </td>
//                                             </tr>




//                                             {/* <tr>
//                                                 <td style={{ color: 'grey', fontWeight: 700 }}>
//                                                     Project Credits
//                                                 </td>
//                                                 <td style={{ fontWeight: 600 }}>
//                                                     05
//                                                 </td>
//                                                 <td style={{ fontWeight: 600 }}>
//                                                     50
//                                                 </td>
//                                                 <td style={{ fontWeight: 600 }}>
//                                                     Unlimited
//                                                 </td>
//                                             </tr> */}

//                                             <tr>
//                                                 <td style={{ color: 'grey', fontWeight: 700 }}>
//                                                     Project Commission
//                                                 </td>
//                                                 <td style={{ fontWeight: 600 }}>
//                                                     15%
//                                                 </td>
//                                                 <td style={{ fontWeight: 600 }}>
//                                                     10%
//                                                 </td>
//                                                 <td style={{ fontWeight: 600 }}>
//                                                     05%
//                                                 </td>
//                                             </tr>


//                                             <tr>
//                                                 <td style={{ color: 'grey', fontWeight: 700 }}>
//                                                     Profile Listing
//                                                 </td>
//                                                 <td style={{ fontWeight: 600 }}>
//                                                     Normal
//                                                 </td>
//                                                 <td style={{ fontWeight: 600 }}>
//                                                     Featured
//                                                 </td>
//                                                 <td style={{ fontWeight: 600 }}>
//                                                     Featured
//                                                 </td>
//                                             </tr>


//                                             <tr>
//                                                 <td style={{ color: 'grey', fontWeight: 700 }}>
//                                                     Project alert
//                                                 </td>
//                                                 <td style={{ fontWeight: 600 }}>
//                                                     Normal
//                                                 </td>
//                                                 <td style={{ fontWeight: 600 }}>
//                                                     1 hour advance alert
//                                                 </td>
//                                                 <td style={{ fontWeight: 600 }}>
//                                                     1 hour advance alert
//                                                 </td>
//                                             </tr>



//                                             <tr>
//                                                 <td style={{ color: 'grey', fontWeight: 700 }}>
//                                                     Project bookmark
//                                                 </td>
//                                                 <td style={{ fontWeight: 600 }}>

//                                                     Unlimited
//                                                     <button onClick={() => displayRazorepay(4000)}>buy</button>
//                                                 </td>
//                                                 <td style={{ fontWeight: 600 }}>
//                                                     Unlimited

//                                                     <button>buy</button>
//                                                 </td>
//                                                 <td style={{ fontWeight: 600 }}>
//                                                     Unlimited
//                                                     <button>buy</button>
//                                                 </td>
//                                             </tr>




//                                         </tbody>
//                                     </table>
//                                 </div>


//                                 <div className='d-block d-sm-none'>
//                                     <p style={{ fontSize: '18px', fontWeight: 500, marginTop: '80px' }} className='text-center'>Upgrade To A Curated Package To Maximise Your Business Success And Earnings!</p>
//                                     <p style={{ fontSize: '18px', fontWeight: 500 }} className='text-center'>Change Your Plans Anytime</p>

//                                     <Card style={{ backgroundColor: '#FAEBD7', border: 'none', marginBottom: '30px', padding: '30px 0px' }}>
//                                         <Row>
//                                             <Col xs={12}>
//                                                 <center>
//                                                     <p style={{ fontSize: '20px', marginTop: '10px' }}>  <b style={{ backgroundColor: 'white', padding: '6px 10px', borderRadius: '5px' }}>Basic </b>  </p>
//                                                     <p style={{ fontSize: '24px', color: '#008080' }}> <b>Free</b>  </p>
//                                                     <p style={{ color: 'grey', fontSize: '16px' }}>Fulfill your basic needs</p>
//                                                 </center>


//                                             </Col>
//                                             <Col xs={12}>
//                                                 <center>

//                                                     <div style={{ borderRadius: '8px', display: 'flex', width: '90%', backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
//                                                         <p style={{ fontSize: '17px' }}>Message Credits  </p>
//                                                         <p style={{ fontSize: '17px' }}>05   </p>
//                                                     </div>

//                                                     <div style={{ marginTop: '10px', borderRadius: '8px', display: 'flex', width: '90%', backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
//                                                         <p style={{ fontSize: '17px' }}>Customer Support  </p>
//                                                         <p style={{ fontSize: '17px' }}>Yes   </p>
//                                                     </div>

//                                                     <div style={{ marginTop: '10px', borderRadius: '8px', display: 'flex', width: '90%', backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
//                                                         <p style={{ fontSize: '17px' }}>Relationship Manager  </p>
//                                                         <p style={{ fontSize: '17px' }}>No support  </p>
//                                                     </div>

//                                                     <div style={{ marginTop: '10px', marginBottom: '10px', borderRadius: '8px', display: 'flex', width: '90%', backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
//                                                         <p style={{ fontSize: '17px' }}>Payment Protection </p>
//                                                         <p style={{ fontSize: '17px' }}>Secured   </p>
//                                                     </div>

//                                                     <div>

//                                                         <Accordion style={{ margin: '10px 10px' }} defaultActiveKey="1">
//                                                             <Accordion.Item eventKey="0">
//                                                                 <Accordion.Header><p style={{ fontSize: '18px', height: '10px' }}><b>Client Dashboard</b></p> </Accordion.Header>

//                                                                 <Accordion.Body>

//                                                                     <div style={{ borderRadius: '8px', display: 'flex', backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
//                                                                         <p style={{ fontSize: '17px' }}> Order Listing  </p>
//                                                                         <p style={{ fontSize: '17px' }}>Normal   </p>
//                                                                     </div>

//                                                                     <div style={{ borderRadius: '8px', display: 'flex', backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
//                                                                         <p style={{ fontSize: '17px' }}> Job Posting  </p>
//                                                                         <p style={{ fontSize: '17px' }}>Unlimited   </p>
//                                                                     </div>

//                                                                     <div style={{ borderRadius: '8px', display: 'flex', backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
//                                                                         <p style={{ fontSize: '17px' }}>Verified Professional  </p>
//                                                                         <p style={{ fontSize: '17px' }}>Unlimited   </p>
//                                                                     </div>


//                                                                 </Accordion.Body>
//                                                             </Accordion.Item>

//                                                         </Accordion>


//                                                         <Accordion style={{ margin: '10px 10px' }} defaultActiveKey="1">
//                                                             <Accordion.Item eventKey="0">
//                                                                 <Accordion.Header><p style={{ fontSize: '18px', height: '10px' }}><b>Professional Dashboard</b></p> </Accordion.Header>

//                                                                 <Accordion.Body>

//                                                                     <div style={{ borderRadius: '8px', display: 'flex', backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
//                                                                         <p style={{ fontSize: '17px' }}> Project credits  </p>
//                                                                         <p style={{ fontSize: '17px' }}>05   </p>
//                                                                     </div>

//                                                                     <div style={{ borderRadius: '8px', display: 'flex', backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
//                                                                         <p style={{ fontSize: '17px' }}>  Project Commision  </p>
//                                                                         <p style={{ fontSize: '17px' }}>15%   </p>
//                                                                     </div>

//                                                                     <div style={{ borderRadius: '8px', display: 'flex', backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
//                                                                         <p style={{ fontSize: '17px' }}>Project  Listing   </p>
//                                                                         <p style={{ fontSize: '17px' }}>Normal  </p>
//                                                                     </div>

//                                                                     <div style={{ borderRadius: '8px', display: 'flex', backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
//                                                                         <p style={{ fontSize: '17px' }}>Project alert </p>
//                                                                         <p style={{ fontSize: '17px' }}>Normal  </p>
//                                                                     </div>

//                                                                     <div style={{ borderRadius: '8px', display: 'flex', backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
//                                                                         <p style={{ fontSize: '17px' }}>Project Bookmark</p>
//                                                                         <p style={{ fontSize: '17px' }}>Unlimited   </p>
//                                                                     </div>


//                                                                 </Accordion.Body>
//                                                             </Accordion.Item>

//                                                         </Accordion>


//                                                     </div>

//                                                     <button style={{ border: 'none', borderRadius: '8px', padding: '8px 30px', backgroundColor: 'white', marginTop: '20px', fontSize: "18px", fontWeight: 600 }}>
//                                                         Select

//                                                     </button>



//                                                 </center>
//                                             </Col>

//                                         </Row>
//                                     </Card>

//                                     <Card style={{ backgroundColor: '#E6E6FA', border: 'none', marginBottom: '30px', padding: '30px 0px' }}>
//                                         <Row>
//                                             <Col xs={12}>
//                                                 <center>
//                                                     <p style={{ fontSize: '20px', marginTop: '10px' }}>  <b style={{ backgroundColor: 'white', padding: '6px 10px', borderRadius: '5px' }}>Plus </b>  </p>
//                                                     <p style={{ fontSize: '24px', color: '#008080' }}> <b>₹499 / Month</b>  </p>
//                                                     <p style={{ color: 'grey', fontSize: '16px' }}>Scale yuor business hiring</p>
//                                                 </center>


//                                             </Col>
//                                             <Col xs={12}>
//                                                 <center>

//                                                     <div style={{ borderRadius: '8px', display: 'flex', width: '90%', backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
//                                                         <p style={{ fontSize: '17px' }}>Message Credits  </p>
//                                                         <p style={{ fontSize: '17px' }}>50   </p>
//                                                     </div>

//                                                     <div style={{ marginTop: '10px', borderRadius: '8px', display: 'flex', width: '90%', backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
//                                                         <p style={{ fontSize: '17px' }}>Customer Support  </p>
//                                                         <p style={{ fontSize: '17px' }}>Premium   </p>
//                                                     </div>

//                                                     <div style={{ marginTop: '10px', borderRadius: '8px', display: 'flex', width: '90%', backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
//                                                         <p style={{ fontSize: '17px' }}>Relationship Manager  </p>
//                                                         <p style={{ fontSize: '17px' }}>Dedicated  </p>
//                                                     </div>

//                                                     <div style={{ marginTop: '10px', marginBottom: '10px', borderRadius: '8px', display: 'flex', width: '90%', backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
//                                                         <p style={{ fontSize: '17px' }}>Payment Protection </p>
//                                                         <p style={{ fontSize: '17px' }}>Secured </p>
//                                                     </div>

//                                                     <div>

//                                                         <Accordion style={{ margin: '10px 10px' }} defaultActiveKey="1">
//                                                             <Accordion.Item eventKey="0">
//                                                                 <Accordion.Header><p style={{ fontSize: '18px', height: '10px' }}><b>Client Dashboard</b></p> </Accordion.Header>

//                                                                 <Accordion.Body>

//                                                                     <div style={{ borderRadius: '8px', display: 'flex', backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
//                                                                         <p style={{ fontSize: '17px' }}> Order Listing  </p>
//                                                                         <p style={{ fontSize: '17px' }}>Featured   </p>
//                                                                     </div>

//                                                                     <div style={{ borderRadius: '8px', display: 'flex', backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
//                                                                         <p style={{ fontSize: '17px' }}> Job Posting  </p>
//                                                                         <p style={{ fontSize: '17px' }}>Unlimited   </p>
//                                                                     </div>

//                                                                     <div style={{ borderRadius: '8px', display: 'flex', backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
//                                                                         <p style={{ fontSize: '17px' }}>Verified Professional  </p>
//                                                                         <p style={{ fontSize: '17px' }}>Unlimited   </p>
//                                                                     </div>


//                                                                 </Accordion.Body>
//                                                             </Accordion.Item>

//                                                         </Accordion>


//                                                         <Accordion style={{ margin: '10px 10px' }} defaultActiveKey="1">
//                                                             <Accordion.Item eventKey="0">
//                                                                 <Accordion.Header><p style={{ fontSize: '18px', height: '10px' }}><b>Professional Dashboard</b></p> </Accordion.Header>

//                                                                 <Accordion.Body>

//                                                                     <div style={{ borderRadius: '8px', display: 'flex', backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
//                                                                         <p style={{ fontSize: '17px' }}> Project credits  </p>
//                                                                         <p style={{ fontSize: '17px' }}>50   </p>
//                                                                     </div>

//                                                                     <div style={{ borderRadius: '8px', display: 'flex', backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
//                                                                         <p style={{ fontSize: '17px' }}>  Project Commision  </p>
//                                                                         <p style={{ fontSize: '17px' }}>10%   </p>
//                                                                     </div>

//                                                                     <div style={{ borderRadius: '8px', display: 'flex', backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
//                                                                         <p style={{ fontSize: '17px' }}>Project  Listing   </p>
//                                                                         <p style={{ fontSize: '17px' }}>Featured  </p>
//                                                                     </div>

//                                                                     <div style={{ borderRadius: '8px', display: 'flex', backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
//                                                                         <p style={{ fontSize: '17px' }}>Project alert </p>
//                                                                         <p style={{ fontSize: '17px' }}>1 hour advance alert  </p>
//                                                                     </div>

//                                                                     <div style={{ borderRadius: '8px', display: 'flex', backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
//                                                                         <p style={{ fontSize: '17px' }}>Project Bookmark</p>
//                                                                         <p style={{ fontSize: '17px' }}>Unlimited   </p>
//                                                                     </div>


//                                                                 </Accordion.Body>
//                                                             </Accordion.Item>

//                                                         </Accordion>


//                                                     </div>

//                                                     <button style={{ border: 'none', borderRadius: '8px', padding: '8px 30px', backgroundColor: 'white', marginTop: '20px', fontSize: "18px", fontWeight: 600 }}>
//                                                         Select

//                                                     </button>



//                                                 </center>
//                                             </Col>

//                                         </Row>
//                                     </Card>


//                                     <Card style={{ backgroundColor: '#f6d7d7', border: 'none', marginBottom: '80px', padding: '30px 0px' }}>
//                                         <Row>
//                                             <Col xs={12}>
//                                                 <center>
//                                                     <p style={{ fontSize: '20px', marginTop: '10px' }}>  <b style={{ backgroundColor: 'white', padding: '6px 10px', borderRadius: '5px' }}>Premium </b>  </p>
//                                                     <p style={{ fontSize: '24px', color: '#008080' }}> <b> ₹4999 / Month </b>  </p>
//                                                     <p style={{ color: 'grey', fontSize: '16px' }}>Maximise your workforce program</p>
//                                                 </center>


//                                             </Col>
//                                             <Col xs={12}>
//                                                 <center>

//                                                     <div style={{ borderRadius: '8px', display: 'flex', width: '90%', backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
//                                                         <p style={{ fontSize: '17px' }}>Message Credits  </p>
//                                                         <p style={{ fontSize: '17px' }}>Unlimited   </p>
//                                                     </div>

//                                                     <div style={{ marginTop: '10px', borderRadius: '8px', display: 'flex', width: '90%', backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
//                                                         <p style={{ fontSize: '17px' }}>Customer Support  </p>
//                                                         <p style={{ fontSize: '17px' }}> Premium </p>
//                                                     </div>

//                                                     <div style={{ marginTop: '10px', borderRadius: '8px', display: 'flex', width: '90%', backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
//                                                         <p style={{ fontSize: '17px' }}>Relationship Manager  </p>
//                                                         <p style={{ fontSize: '17px' }}> Dedicated  </p>
//                                                     </div>

//                                                     <div style={{ marginTop: '10px', marginBottom: '10px', borderRadius: '8px', display: 'flex', width: '90%', backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
//                                                         <p style={{ fontSize: '17px' }}>Payment Protection </p>
//                                                         <p style={{ fontSize: '17px' }}>Secured   </p>
//                                                     </div>

//                                                     <div>

//                                                         <Accordion style={{ margin: '10px 10px' }} defaultActiveKey="1">
//                                                             <Accordion.Item eventKey="0">
//                                                                 <Accordion.Header><p style={{ fontSize: '18px', height: '10px' }}><b>Client Dashboard</b></p> </Accordion.Header>

//                                                                 <Accordion.Body>

//                                                                     <div style={{ borderRadius: '8px', display: 'flex', backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
//                                                                         <p style={{ fontSize: '17px' }}> Order Listing  </p>
//                                                                         <p style={{ fontSize: '17px' }}>Featured   </p>
//                                                                     </div>

//                                                                     <div style={{ borderRadius: '8px', display: 'flex', backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
//                                                                         <p style={{ fontSize: '17px' }}> Job Posting  </p>
//                                                                         <p style={{ fontSize: '17px' }}>Unlimited   </p>
//                                                                     </div>

//                                                                     <div style={{ borderRadius: '8px', display: 'flex', backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
//                                                                         <p style={{ fontSize: '17px' }}>Verified Professional  </p>
//                                                                         <p style={{ fontSize: '17px' }}>Unlimited   </p>
//                                                                     </div>


//                                                                 </Accordion.Body>
//                                                             </Accordion.Item>

//                                                         </Accordion>


//                                                         <Accordion style={{ margin: '10px 10px' }} defaultActiveKey="1">
//                                                             <Accordion.Item eventKey="0">
//                                                                 <Accordion.Header><p style={{ fontSize: '18px', height: '10px' }}><b>Professional Dashboard</b></p> </Accordion.Header>

//                                                                 <Accordion.Body>

//                                                                     <div style={{ borderRadius: '8px', display: 'flex', backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
//                                                                         <p style={{ fontSize: '17px' }}> Project credits  </p>
//                                                                         <p style={{ fontSize: '17px' }}>Unlimited   </p>
//                                                                     </div>

//                                                                     <div style={{ borderRadius: '8px', display: 'flex', backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
//                                                                         <p style={{ fontSize: '17px' }}>  Project Commision  </p>
//                                                                         <p style={{ fontSize: '17px' }}>05%   </p>
//                                                                     </div>

//                                                                     <div style={{ borderRadius: '8px', display: 'flex', backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
//                                                                         <p style={{ fontSize: '17px' }}>Project  Listing   </p>
//                                                                         <p style={{ fontSize: '17px' }}>Featured  </p>
//                                                                     </div>

//                                                                     <div style={{ borderRadius: '8px', display: 'flex', backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
//                                                                         <p style={{ fontSize: '17px' }}>Project alert </p>
//                                                                         <p style={{ fontSize: '17px' }}>1 hour advance alert </p>
//                                                                     </div>

//                                                                     <div style={{ borderRadius: '8px', display: 'flex', backgroundColor: 'white', justifyContent: 'space-between', paddingLeft: '20px', paddingRight: '20px', height: '30px', paddingTop: '3px' }}>
//                                                                         <p style={{ fontSize: '17px' }}>Project Bookmark</p>
//                                                                         <p style={{ fontSize: '17px' }}>Unlimited   </p>
//                                                                     </div>


//                                                                 </Accordion.Body>
//                                                             </Accordion.Item>

//                                                         </Accordion>


//                                                     </div>
//                                                     <button style={{ border: 'none', borderRadius: '8px', padding: '8px 30px', backgroundColor: 'white', marginTop: '20px', fontSize: "18px", fontWeight: 600 }}>
//                                                         Select

//                                                     </button>



//                                                 </center>
//                                             </Col>

//                                         </Row>
//                                     </Card>


//                                 </div>

//                             </Row>

//                         </Container>
//                     </Col>
//                 </Row>
//             </Container>
//             <Phoneviewfooter />
//         </>
//     );
// };

// export default Package;