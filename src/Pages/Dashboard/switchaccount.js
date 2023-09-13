import React ,{useEffect, useState} from 'react';
import {Container, Row, Col, Card, Dropdown, Form} from "react-bootstrap";
import Sidenav from './layout/Sidenav';
import Topnav from './layout/topnav';
import { Link } from 'react-router-dom';
import bookbulb from "../../Aseset/image/bookbulb.png"
import Switchform from '../../Model/switch.model';
function SwitchAccount() {
    const [Qualifi , setQualifi] = useState([]);
    const [CityFillter , setCityFillter] = useState('');
    useEffect(() => {
        Switchform.Qualification().then((response) =>{
            console.log(response.data);
            setQualifi(response.data);
        });
    }, [])
    useEffect(() => {
        Switchform.City().then((response) =>{
            console.log(response.data);
            setCityFillter(response.data);
        });
    }, [])
    

    return (
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
                                <Col sm={8} className=" square border-end mt-2">
                                    <h5 className='text-center'>Find great works</h5>
                                <Form className='m-4'>
                                <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                                    <Form.Label><b>Profile image:</b> <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="red" className="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg></Form.Label>
                                    <div>
                                        <Card style={{backgroundColor:"#efefef"}}>
                                            <p className='m-2'>Update your latest image <button className='swtich-upload'><b>Upload Iamge</b></button></p>
                                        </Card>
                                    </div>
                                </Form.Group>
                                <Row>
                                    <Col sm={6}>
                                        <Form.Group className="mb-3 mt-4" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Name <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="red" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg></Form.Label>
                                            <Form.Control  placeholder="Your Name" className='formborder'/>
                                        </Form.Group>
                                    </Col>
                                    <Col sm={6}>
                                    <Form.Group className="mb-3 mt-4" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Occupation <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="red" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg></Form.Label>
                                            <Dropdown>
                                                <Dropdown.Toggle id="dropdown-basic" style={{backgroundColor:"#fff",color:"black",borderColor:"#797979", width:"-webkit-fill-available",float:"left"}}>
                                                    Choose occupation
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </Form.Group>
                                        
                                    </Col>
                                </Row>
                                <Form.Group className="mb-3 mt-4" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>About me: <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="red" className="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg></Form.Label>
                                    <Form.Control as="textarea" rows={3} placeholder="Please enter a headline" className='formborder' />
                                </Form.Group>
                                <Form.Group className="mb-3 mt-4" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Experience: <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="red" className="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                        (min 25 words)</Form.Label>
                                    <Form.Control as="textarea" rows={3} placeholder="Please enter work experience" className='formborder' />
                                </Form.Group>


                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    
                                    <Row>
                                        <Col sm={6}>
                                        <Form.Label>City:<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="red" className="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg></Form.Label>
                                    <Form.Control  placeholder="Enter Email ID" className='formborder' value={CityFillter} onChange={(e) => setCityFillter(e.target.value)} />
                                        </Col>
                                        <Col sm={6}>
                                        <Form.Label>Qualification:<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="red" className="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg></Form.Label>
                                    <Dropdown>
                                                <Dropdown.Toggle id="dropdown-basic" style={{backgroundColor:"#fff",color:"black",borderColor:"#797979", width:"-webkit-fill-available",float:"left"}}>
                                                    Choose occupation
                                                </Dropdown.Toggle>
                                              
                                                <Dropdown.Menu style={{height:'130px',overflowY:"scroll"}}>
                                                {Qualifi && Qualifi.map((qualdata) => <Dropdown.Item href="#/">{qualdata.qualificationName}</Dropdown.Item> )}
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </Col>
                                    </Row>
                                    
                                </Form.Group>
                                <Form.Group className="mb-3 " controlId="exampleForm.ControlTextarea1">
                                    
                                    <Row>
                                        <Col sm={6}>
                                        <Form.Label>Email ID:<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="red" className="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg></Form.Label>
                                        <Form.Control  placeholder="Enter Email ID" className='formborder' />
                                        </Col>
                                        <Col sm={6}>
                                        <Form.Label>Phone No:<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="red" className="bi bi-star-fill" viewBox="0 0 16 16">
                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                    </svg></Form.Label>
                                    <Form.Control  placeholder="Enter Phone No." className='formborder' />
                                        </Col>
                                    </Row>
                                    
                                </Form.Group>
                               <center> <Link to="/Switchaccount-next"><button className='next'>Next</button></Link></center>
                            </Form>
                                </Col>
                                <Col sm={4} >
                                    <div className='last-left-span'style={{ backgroundColor:'#f5f5f5',width:"-webkit-fill-available"}} >
                                        <div className=''>
                                            <center><img src={bookbulb} alt="" className='switchaccount-img' /> 
                                            <h5 className='switch-text'><b>Advance <br /> Freelancing <br /> Course</b></h5>
                                            <p>Polish your skills and expand<br/>your knowledge base</p>
                                            
                                            <button className='switch-button'>Learn</button>
                                            </center>    
                                        
                                        </div>
                                    </div>
                                    <div className='last-left-span'>
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
    )
}

export default SwitchAccount