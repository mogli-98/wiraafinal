import React,{useEffect, useState} from 'react';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';
import "../../Aseset/css/project.css"
import Sidenav from './layout/Sidenav';
import Topnav from './layout/topnav';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ProjectDetail from '../../Model/project.model';
function Orderdetailsbrief() {
    const [orderdetails, setOrderDetails] = useState(false);
    const params = useParams();
     
     useEffect(() => {
         console.log(params,"new data");
         ProjectDetail.detailporject(params['id']).then((respone) =>{
         console.log(respone.data)
         setOrderDetails(respone.data[0])
 
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
                        <Container  className='square border border-bottom-0'>
                            <Topnav />
                            <Row>
                            <Col sm={8} className="project square border-end border-start">
                        <div className=' '>
                           
                            <div className="project-top m-3">
                           <h6 className='text-center text-light'>Join as a professional</h6>
                                </div>
                           
                            <Card className='m-3' style={{background: "#efefef "}}>
                                <div className=' m-3 project-details'>
                                    <p className='mt-4'><b>Tilte</b>
                                    <br />{orderdetails.pR_Description}
                                    </p>
                                    
                                    <p className='mt-4'><b>Description</b>
                                        <br />
                                        {orderdetails.projectDescription}
                                    </p>
                                   
                                    <p className='mt-4'><b>Category</b>
                                        <br />{orderdetails.expertise}
                                    </p>
                                 
                                    <p className='mt-4'><b>Budget</b>
                                        <br />{orderdetails.budget}
                                    </p>
                                  
                                </div>

                            </Card>
                           
                        </div>
                    </Col>
                    <Col sm={4} className='project-deatils4 square border-end ' >
                        <Card style={{ background: "#fff "}} className="m-1">
                           <p className='text-center mt-2'><b><u>Details</u></b></p>
                           <Table borderless>
                                <tbody>
                                    <tr>
                                        <td className='left-td'>Status</td>
                                        <td className='right-td text-success'><b>{orderdetails.postStatus}</b></td>
                                    </tr>
                                    <tr>
                                        <td className='left-td'>Name</td>
                                        <td className='right-td'><b>{orderdetails.firstName}</b></td>
                                    </tr>
                                    <tr>
                                        <td className='left-td'>Order Date</td>
                                        <td className='right-td' style={{width:'100px'}}><b>{orderdetails.applyDate}</b></td>
                                    </tr>
                                    <tr>
                                        <td className='left-td'>Due Date</td>
                                        <td className='right-td' style={{width:'100px'}}><b>{orderdetails.postExpireDate}</b></td>
                                    </tr>
                                    <tr>
                                        <td className='left-td'>Responser</td>
                                        <td className='right-td'><b>{orderdetails.responseNo}</b></td>
                                    </tr>
                                </tbody>
                           </Table>
                        </Card>
                        <div className='mt-3 projectdetail-last'>
                            <span>About</span> <span>Career</span> <span>Term of services</span> 
                            <span>Conatct</span> <span>FAQ</span> <span>Blog</span>  
                            <span>Privacy policy</span> <span>© 2023 Wiraa. All Rights Reserved</span>       
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