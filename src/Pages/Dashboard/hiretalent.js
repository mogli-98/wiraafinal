import React, { useState } from 'react';
import { Container, Row, Col, Card, FormControl } from "react-bootstrap";
import Sidenav from './layout/Sidenav';
import Topnav from './layout/topnav';
import Form from 'react-bootstrap/Form';
import Auth from '../../Model/Auth.model';
import { useEffect } from 'react';
import { InputLabel, MenuItem, Select } from '@mui/material';
import Dropdown1 from './layout/Dropdown1';
import Dropdown2 from './layout/Dropdown2';
import Accordion from 'react-bootstrap/Accordion';
import Switchform from '../../Model/switch.model';
function Hiretalent() {
    const [selectedOption, setSelectedOption] = useState([1]);
    const [GetSubCategory, setGetSubCategory] = useState([]);
    const [city, setCity] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        projectDescription: '',
        category: '',
        subCategory: '',
        country: '',
        mobile: '',
        currency: '',
        budget: '',
        workType: '',
        isFeatured: '',
        preferService: '',
        duration: "",
        city: '',
        serviceMode: '',
    });
          const handleInputChange = (event) => {
            setFormData({
              ...formData,
              [event.target.name]: event.target.value,
            });
          };
        const handleSubmit = (event) => {
            console.log(event);
            event.preventDefault();
            const formdata = new FormData();
            Auth.PostRequest(formdata)
                .then((response) => {
                    console.log(response.data, "yes data update");
                    // Display success message to the user
                })
                .catch((error) => {
                    console.log(error);
                    // Display error message to the user
                });
        };


    useEffect(() => {
        Switchform.Allcategory().then((response) => {
            setGetSubCategory(response.data)
            console.log(response.data)
        }
        )
    }, [])

  
    useEffect(() => {
        Switchform.Allcitylist().then((response) => {
            setCity(response.data)
            console.log(response.data)
        })
    }, [])
   
    return (
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
                                <Col sm={8} className="square border-end ">
                                    <h3 className='text-center mt-5'>Find talent your way</h3>
                                    <form className='m-2' onSubmit={handleSubmit} >
                                        <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                                            <Form.Label style={{ fontSize: '20px' }}>Project Title: <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="red" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>  </Form.Label>
                                            <Form.Control className='form-control-lg' style={{ border: '2px solid lightgrey', fontSize: '16px' }} type="email" placeholder="I am looking for...."
                                              
                                                name='title'

                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3 mt-4" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label style={{ fontSize: '20px' }}>Project description <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="red" className="bi bi-star-fill" viewBox="0 0 16 16">


                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg> <span style={{ color: 'grey', fontSize: '10px' }}>
                                                    (Min 25 words)
                                                </span>
                                            </Form.Label>
                                            <Form.Control className='form-control-lg' style={{ border: '2px solid lightgrey', fontSize: '16px' }} as="textarea" rows={3} placeholder="Our requriments are...."
                                              
                                                name='projectDescription'

                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3 mt-4" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label style={{ fontSize: '20px' }}>Choose a category:<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="red" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg></Form.Label>
                                            <Row>
                                                <Col sm={6}>
                                                    
                                                    <Dropdown1 onSelect={setSelectedOption} />
                                                </Col>
                                                <Col sm={6}>
                                                   
                                                          <Dropdown2 selectedOption={selectedOption} />

                                                </Col>
                                            </Row>
                                          
                                        </Form.Group>
                                        <Form.Group className="mb-3 mt-4" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label style={{ fontSize: '20px' }}>Best way for us to reach you?<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="red" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg></Form.Label>
                                            <Row>
                                                <Col sm={6}>
                                                <select id="cars"
                style={{ width: "-webkit-fill-available", height: "40px" ,border: '2px solid lightgrey',borderRadius:"8px"}}
              
                name='pR_FKCatID'
                placeholder='Category'
            >
                {
                    city && city.map((categorylist) =>
                        <option value={categorylist.CountryID}>{categorylist.CountryName}</option>)
                }
            </select>

                                                </Col>
                                                <Col sm={6}>
                                                    <Form.Control className='form-control-lg' style={{ border: '2px solid lightgrey', fontSize: '16px' }} type="text" placeholder="Phone Number"
                                                        
                                                        name='MobileNo'
                                                    ></Form.Control>

                                                </Col>
                                            </Row>

                                        </Form.Group>
                                        <Form.Group className="mb-3 mt-4" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label style={{ fontSize: '20px' }}>Preferred project budget <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="red" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg></Form.Label>
                                            <Row>
                                                <Col sm={2}>

                                                    <select className='form-control-lg' name="cars" id="cars" style={{
                                                        borderRadius: '5px', border: '2px solid lightgrey',
                                                        width: "-webkit-fill-available"
                                                        , height: "40px", fontSize: '16px'
                                                    }}>
                                                        <option value="Business">INR</option>
                                                        <option value="IT">IT</option>
                                                        <option value="Marketing">Marketing</option>
                                                        <option value="Lifestyle">Lifestyle</option>
                                                    </select>

                                                    {/* <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        // value={age}
                                                        label="Age"
                                                        // onChange={handleChange}
                                                    >
                                                        <MenuItem value={10}>Ten</MenuItem>
                                                        <MenuItem value={20}>Twenty</MenuItem>
                                                        <MenuItem value={30}>Thirty</MenuItem>
                                                    </Select> */}


                                                </Col>
                                                <Col sm={3}>
                                                    <input className='form-control-lg' type="text" placeholder='e.g 10000'

                                                        style={{
                                                            borderRadius: '5px', border: '2px solid lightgrey',
                                                            width: "-webkit-fill-available"
                                                            , height: "40px", fontSize: '16px'
                                                        }}
                                                        value={formData.budget}
                                                        name='budget'

                                                    />
                                                </Col>
                                                <Col><p className='mt-2'><b style={{ fontSize: '18px' }}>to</b></p></Col>
                                                <Col sm={3}>
                                                    <input className='form-control-lg' type="text" placeholder='e.g 20,000' style={{
                                                        borderRadius: '5px', border: '2px solid lightgrey',
                                                        width: "-webkit-fill-available"
                                                        , height: "40px", fontSize: '16px'
                                                    }}
                                                        value={formData.budget}
                                                        name='budget'

                                                    /></Col>
                                                <Col sm={3}>

                                                    <select className='form-control-lg' name="cars" id="cars" style={{
                                                        borderRadius: '5px', border: '2px solid lightgrey',
                                                        width: "-webkit-fill-available"
                                                        , height: "40px", fontSize: '16px'
                                                    }}>
                                                        <option value="Per Hour">Per Hour</option>
                                                        <option value="Per Day">Per Day</option>

                                                    </select>
                                                </Col>
                                            </Row>

                                        </Form.Group>
                                        {/* <p>Type of project<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="red" className="bi bi-star-fill" viewBox="0 0 16 16"> */}
                                        {/* <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" /> */}
                                        {/* </svg></p> */}
                                        {/* <Row>
                                            <Col>
                                                <Card style={{ backgroundColor: '#f5f5f5' }}>
                                                    <div className='m-2'>
                                                        <p><b> Standard Project</b></p>
                                                        <p>Free to post, your project will go
                                                            live instantly and start receiving
                                                            within seconds.
                                                        </p>
                                                        <p><b>Free</b></p>
                                                    </div>

                                                </Card>
                                            </Col>
                                            <Col>
                                                <Card className="hiretalent-table-card">
                                                    <div className='m-2'>
                                                        <p><b> Featured Project</b></p>
                                                        <p> Get 10x more visibility and a
                                                            dedicated expert staff to help you
                                                            find the perfect talentss.
                                                        </p>
                                                        <p><b>Rs.499</b></p>
                                                    </div>

                                                </Card>
                                            </Col>
                                        </Row> */}





                                        <Accordion style={{ marginBottom: '20px' }} defaultActiveKey="0">
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header><p style={{ fontSize: '18px' }}><b>Advanced details</b></p> </Accordion.Header>
                                                <Accordion.Body>
                                                    {/* <p className='mt-4' style={{ fontSize: '18px' }}><b>Advanced details</b></p> */}
                                                    <Form.Group className="mb-2 mt-4" controlId="exampleForm.ControlTextarea1">
                                                        <Form.Label style={{ fontSize: '20px' }}>Preferred location:<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="red" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                        </svg></Form.Label>
                                                        <Row>
                                                            <Col sm={4}>
                                                                <Form.Control className='form-control-lg' placeholder="Global"
                                                                    value={formData.Country}
                                                                    name='Country'
                                                                />
                                                            </Col>
                                                            <Col sm={4}>
                                                                <Form.Control style={{ fontSize: '16px' }} className='form-control-lg' type="email" placeholder="Local" />
                                                            </Col>
                                                            <Col sm={4}>
                                                                <select className='form-control-lg' name="cars" id="cars" style={{
                                                                    borderRadius: '5px', border: '2px solid lightgrey',
                                                                    width: "-webkit-fill-available"
                                                                    , height: "35px"
                                                                }}>
                                                                    <option value="Business">City</option>
                                                                    <option value="IT">IT</option>
                                                                    <option value="Marketing">Marketing</option>
                                                                    <option value="Lifestyle">Lifestyle</option>
                                                                </select>
                                                            </Col>
                                                        </Row>

                                                    </Form.Group>
                                                    <Form.Group className="mb-2 mt-4" controlId="exampleForm.ControlTextarea1">
                                                        <Form.Label style={{ fontSize: '20px' }} className='mb-2'>Project Duration:</Form.Label>
                                                        <Row>
                                                            <Col >

                                                                <Card>
                                                                    {/* <input style={{ right: '0', position: "relative", float: 'right' }} /> */}
                                                                    <p className='m-2'>    1 month </p>
                                                                </Card>
                                                            </Col>
                                                            <Col >
                                                                <Card >
                                                                    <p className='m-2'>  1 - 3 months </p>
                                                                </Card>
                                                            </Col>
                                                            <Col >
                                                                <Card >
                                                                    <p className='m-2'> 3 - 6 months </p>
                                                                </Card>
                                                            </Col>
                                                            <Col >
                                                                <Card >
                                                                    <p className='m-2'> 6 Month   </p>
                                                                </Card>
                                                            </Col>

                                                        </Row>
                                                    </Form.Group>
                                                    <Form.Group className="mb-3 mt-4" controlId="exampleForm.ControlTextarea1">
                                                        <Form.Label style={{ fontSize: '20px' }} className='mb-2'>Preferred service starting date:</Form.Label>
                                                        <Row>
                                                            <Col >
                                                                <Card >
                                                                    <p className='m-2'> Immediate </p>
                                                                </Card>
                                                            </Col>
                                                            <Col >
                                                                <Card >
                                                                    <p className='m-2'>  1 week </p>
                                                                </Card>
                                                            </Col>
                                                            <Col >
                                                                <Card >
                                                                    <p className='m-2'> 2 week </p>
                                                                </Card>
                                                            </Col>
                                                            <Col >
                                                                <Card >
                                                                    <p className='m-2'> 1 Month  </p>
                                                                </Card>
                                                            </Col>

                                                        </Row>

                                                    </Form.Group>


                                                </Accordion.Body>

                                            </Accordion.Item>

                                        </Accordion>

                                        <center> <button style={{ height: '40px', width: '180px', borderRadius: '10px', marginBottom: '20px' }} className='hire-button' type='submit'><b>Submit</b></button></center>




                                        {/* <p className='mt-4' style={{ fontSize: '18px' }}><b>Advanced details</b></p>
                                        <Form.Group className="mb-2 mt-4" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label style={{ fontSize: '20px' }}>Preferred location:<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="red" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg></Form.Label>
                                            <Row>
                                                <Col sm={4}>
                                                    <Form.Control placeholder="Global"
                                                        value={formData.Country}
                                                        name='Country'
                                                    />
                                                </Col>
                                                <Col sm={4}>
                                                    <Form.Control type="email" placeholder="Local" />
                                                </Col>
                                                <Col sm={4}>
                                                    <select name="cars" id="cars" style={{
                                                        borderRadius: '5px', border: '2px solid lightgrey',
                                                        width: "-webkit-fill-available"
                                                        , height: "35px"
                                                    }}>
                                                        <option value="Business">City</option>
                                                        <option value="IT">IT</option>
                                                        <option value="Marketing">Marketing</option>
                                                        <option value="Lifestyle">Lifestyle</option>
                                                    </select>
                                                </Col>
                                            </Row>

                                        </Form.Group>
                                        <Form.Group className="mb-2 mt-4" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label style={{ fontSize: '20px' }} className='mb-2'>Project Duration:</Form.Label>
                                            <Row>
                                                <Col >

                                                    <Card>
                                                        
                                                        <p className='m-2'>    1 month </p>
                                                    </Card>
                                                </Col>
                                                <Col >
                                                    <Card>
                                                        <p className='m-2'>  1 - 3 months </p>
                                                    </Card>
                                                </Col>
                                                <Col >
                                                    <Card>
                                                        <p className='m-2'> 3 - 6 months </p>
                                                    </Card>
                                                </Col>
                                                <Col >
                                                    <Card>
                                                        <p className='m-2'> 6 Month   </p>
                                                    </Card>
                                                </Col>

                                            </Row>
                                        </Form.Group>
                                        <Form.Group className="mb-3 mt-4" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label style={{ fontSize: '20px' }} className='mb-2'>Preferred service starting date:</Form.Label>
                                            <Row>
                                                <Col >
                                                    <Card>
                                                        <p className='m-2'> Immediate </p>
                                                    </Card>
                                                </Col>
                                                <Col >
                                                    <Card>
                                                        <p className='m-2'>  1 week </p>
                                                    </Card>
                                                </Col>
                                                <Col >
                                                    <Card>
                                                        <p className='m-2'> 2 week </p>
                                                    </Card>
                                                </Col>
                                                <Col >
                                                    <Card>
                                                        <p className='m-2'> 1 Month  </p>
                                                    </Card>
                                                </Col>

                                            </Row>
                                            <center> <button style={{ height: '40px', width: '180px', borderRadius: '10px' }} className='hire-button' type='submit'><b>Submit</b></button></center>
                                        </Form.Group> */}

                                    </form>
                                </Col>
                                <Col sm={4} className='hiretalentlast' >
                                    <Card className='hiretalentlast mt-2' style={{ width: "-webkit-fill-available", border: 'none' }}>
                                        <div style={{ backgroundColor: '#efefef', borderRadius: '10px' }}>
                                            <div className=' '>
                                                <h5 className='hire-text p-4 ' >Featured Package</h5>
                                                {/* <p className='m-3'>Highlighted order with 'FEATURED' tag in a top position</p> */}
                                                {/* <p className='m-3'>Direct phone number and email details of unlimited professionals</p> */}
                                                <p className='m-3' style={{ color: 'black', paddingLeft: '10px' }}> Direct chat with upto 50 professional  </p>
                                                <p className='m-3' style={{ color: 'black', paddingLeft: '10px' }}>10x changes of finding professionals with featured projects</p>
                                                <p className='m-3' style={{ color: 'black', paddingLeft: '10px' }}>Expert Staff is assigned to understand the requirements</p>
                                                <p className='m-3' style={{ color: 'black', paddingLeft: '10px' }}>Priority customer support in managing and finding talents</p>
                                                <center><button className='hire-upgared' style={{ fontWeight: 900, height: '40px', margin: '35px' }}>Upgarde</button></center>
                                            </div>
                                        </div>
                                    </Card>
                                    <div style={{ color: 'grey', fontWeight: 400, padding: '20px', fontSize: "16px" }}>
                                        <span>About</span> <span>Career</span> <span>Term of services</span> <br />
                                        <span>Conatct</span> <span>FAQ</span> <span>Blog</span>
                                        <span>Privacy policy</span> <span> © 2023 Wiraa. All Rights Reserved</span>
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

export default Hiretalent;