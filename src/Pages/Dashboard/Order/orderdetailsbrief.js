import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';
import "../../../asset/css/project.css"
import Sidenav from '../layout/Sidenav';
import Topnav from '../layout/topnav';
import Orderbook from '../../../Model/Order.model';
import { useParams ,Link } from 'react-router-dom';
import moment from 'moment';
import {helper} from '../../../lib/helper'
function Orderdetailsbrief() {
    const [orderdetails, setOrderDetails] = useState(false);
    const [interested ,setInterested] =useState()
    const [buttonName, setButtonName] = useState('Professionals');
    const params = useParams();

    useEffect(() => {
        console.log(params, "new data");
        const order_id = params.id;
        Orderbook.orderdetails({order_id}).then((respone) => {
            console.log(respone.data)
            setOrderDetails(respone.data)
        })
    }, [])
    const onDELETE = (orderNumber) => {
        helper.sweetalert.confirm('Are you sure?', "You won't closed the order", "warning", true).then((result) => {
            if (result.isConfirmed) {
        const formdata = new FormData();

        formdata.append("removeHoliday", localStorage.getItem("token"));
        formdata.append("bus_id", localStorage.getItem("selecteoption"));
       
        Orderbook.removeholiday(formdata).then((res) => {
            console.log(res.data)

     
         
           
        }).catch((error) => {
            console.log("error => ", error)
        })
    }
})
}
const interestedPeople = async () => {
    
    setButtonName('Data Changed');
    const orderId  = params.id;
   
    Orderbook.interestedProfessinal({orderId }).then((res) => {
        // setHolioday(res.data.data.holidays)
        console.log(res.data)
        if (res.data.lenght !== 0) {
            setInterested();
            setButtonName('Requirements');
          } else {
            setOrderDetails();
            setButtonName('Professionals');
          }
    }).catch((error) => {
        console.log("error => ", error)
    })
}
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
                                        <Link to={`/Orderdetails/${params.id}`}>
                                                <button style={{border:'1px solid black'}} className='order-details-requirements' > 
                                                <svg style={{color:'grey',paddingRight:'4px'}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-plus-fill" viewBox="0 0 16 16">
                                                    <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                                </svg>
                                                <span style={{fontSize:'12px',fontWeight:600}}>
                                                     Professionals 
                                                </span>
                                               
                                                </button>
                                        </Link>
                                                <button  style={{border:'1px solid black'}} className='order-details-shortlisted'>
                                                    <svg style={{color:'grey',marginRight:'5px',paddingRight:'4px'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                                                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                                </svg>
                                                <span style={{fontSize:'12px',fontWeight:600}}>
                                                       Shortlisted
                                                </span>
                                               
                                                </button>
                                            </div>
                                            <Card className='m-3' style={{ background: "#efefef", borderStyle: 'none',borderRadius:'15px',border:'none',boxShadow:'8px 8px 8px -5px' }}>
                                                <div className=' m-3 project-details'>
                                                    <p><b>Tilte</b>
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
                                    <Col sm={4} className='project-deatils4 square border-end ' >
                                        <Card style={{ background: "#fff " }} className="mt-3">
                                            <p className='text-center mt-2'><b><u>Details</u></b></p>
                                            <Table borderless>
                                                <tbody>
                                                    <tr>
                                                        <td className='left-td'>Status</td>
                                                        <td className='right-td text-success'><b>{orderdetails?.[0]?.Status}</b></td>
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
                                                        <td className='left-td'>Responser</td>
                                                        <td className='right-td'><b>{orderdetails?.[0]?.response}</b></td>
                                                    </tr>
                                                    <tr>
                                                        <td className='left-td'>Order Number</td>
                                                        <td className='right-td'><b>{orderdetails?.[0]?.orderNumber}</b></td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                            <center>
                                                <button onClick={() => (onDELETE(orderdetails?.[0]?.orderNumber))} style={{padding: '1px', width: '33%', borderRadius: '8px', color: 'white', borderStyle: 'none', backgroundColor: '#ff7e79' ,fontWeight:'500'}} className='mb-4'>Close </button>
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

export default Orderdetailsbrief;