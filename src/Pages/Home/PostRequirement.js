import React, { useState } from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
// import Sidenav from './layout/Sidenav';
// import Topnav from './layout/topnav';
import Form from 'react-bootstrap/Form';
import Auth from '../../Model/Auth.model';
import { useEffect } from 'react';
import Dropdown1 from '../../Pages/Dashboard/layout/Dropdown1';
import Dropdown2 from '../../Pages/Dashboard/layout/Dropdown2';
import Accordion from 'react-bootstrap/Accordion';
import Switchform from '../../Model/switch.model';
import { helper } from '../../lib/helper';
import { Link } from 'react-router-dom';
import Phoneviewfooter from '../../Layout/Phoneviewfooter';
import orderpost from "../../asset/image/orderpost.png";
import Wiraalogo from '../../asset/image/Wiraalogo.png';

function PostRequirement() {
    const [selectedOption, setSelectedOption] = useState([1]);
    // const [GetSubCategory, setGetSubCategory] = useState([]);
    const [city, setCity] = useState([]);
    // const [formData, setFormData] = useState({
    //     title: '',
    //     projectDescription: '',
    //     category: '',
    //     subCategory: '',
    //     country: '',
    //     mobile: '',
    //     currency: '',
    //     budgetStart: '',
    //     budgetEnd: '',
    //     workType: '',
    //     isFeatured: '',
    //     preferService: '',
    //     duration: "",
    //     city: '',
    //     serviceMode: '',
    // });
    // const handleInputChange = (event) => {
    //     setFormData({
    //         ...formData,
    //         [event.target.name]: event.target.value,
    //     });
    // };
    const handleSubmit = (event) => {
        event.preventDefault();
        window.location.replace("/Account/login")
    };

    useEffect(() => {
        Switchform.AllCountryList().then((response) => {
            setCity(response.data)
            console.log(response.data)
        })
    }, [])



    const [formData, setFormData] = useState({
        title: "",
        description: "",
        category: '',
        subCategory: '',
        country: '',
        mobile: '',
        currency: '',
        budgetStart: '',
        budgetEnd: '',
        workType: '',
        isFeatured: '',
        preferService: '',
        duration: "",
        city: '',
        serviceMode: '',
    });

    const [titleError, setTitleError] = useState(false);
    const [descriptionError, setDescriptionError] = useState(false);

    const titleMaxWords = 8; // Change this to your maximum word limit
    const descriptionMinWords = 20;       // Change this to your minimum word limit

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        validateInput(name, value);
    };



    const validateInput = (name, value) => {
        if (name === "title" && value.split(" ").length > titleMaxWords) {
            setTitleError(true);
        } else {
            setTitleError(false);
        }

        if (name === "description" && value.split(" ").length < descriptionMinWords) {
            setDescriptionError(true);
        } else {
            setDescriptionError(false);
        }
    };





    return (
        <>
            <Container fluid className='dashboard-conatiner-top ' >
                <Row>
                    <Col sm={1} className='d-none d-sm-block'>

                        <div style={{ marginLeft: '60px', display: 'flex', height: '100vh', overflow: 'scroll initial', position: 'fixed' }} className='d-none d-sm-block'>

                            <Link to="/">
                                <img className='mt-4 p-2' style={{ marginLeft: '20px' }} width={120} src={Wiraalogo} alt="Logo" />
                            </Link>

                            <div style={{ marginLeft: '18px', marginTop: '40px' }}>
                                <Link to='/Account/login'>
                                    <svg style={{ color: 'grey' }} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-arrow-right-circle container-left-first " viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                                    </svg><span
                                        // className='container-left-first-span'
                                        style={{ fontSize: '25px', marginLeft: '30px' }}>Login</span>
                                </Link><br />

                                <Link to='/Account/singup'>
                                    <svg style={{ color: 'grey' }} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-plus container-left-second" viewBox="0 0 16 16">
                                        <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                        <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                                    </svg><span
                                        // className='container-left-first-span'
                                        style={{ fontSize: '25px', marginLeft: '20px' }}>  Signup </span>
                                </Link>
                            </div>


                            <div style={{ marginLeft: '25px', marginTop: '70px' }}>
                                <center>
                                    <img src={orderpost} alt="" />
                                </center>

                            </div>
                            <div style={{ marginTop: '30px' }}>
                                <p className='p-1' style={{ margin: '10px', color: '#008080', fontSize: '25px', marginLeft: '30px' }}> <b>Let the match  <br />begin...</b> </p>

                                <p className='p-1' style={{ color: 'grey', fontSize: '18px', margin: '10px' }}>Post a request and start <br /> <center>conversation with</center>  <center> peofessionals</center> </p>
                            </div>
                        </div>
                    </Col>


                    <Col sm={8} xs={12} style={{ padding: '0px' }} className='dashboard-conatiner-top-row square border border-bottom-0'>
                        <Container className='square  border-bottom'>

                            <div className="mt-4 square  border-bottom">
                                <Link to="/"><ion-icon name="chevron-back-outline "></ion-icon></Link>
                                <span style={{ fontSize: '27px', fontWeight: 600 }}> Post a Request</span>
                            </div>

                            <Row>
                                <Col sm={8} className="square border-end ">
                                    <h4 style={{ marginTop: '8vh' }} className='text-center  mb-4 d-none d-sm-block '>Find talent your way</h4>

                                    <h3 style={{ marginTop: '80px' }} className='text-center  mb-4 d-block d-sm-none '>Find talent your way</h3>
                                    <form className='m-2' onSubmit={handleSubmit} >

                                        <Form.Label style={{ fontSize: '18px' }}>Project Title: <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="red" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg> <span style={{ fontSize: '13px', color: 'grey' }}>(Max {titleMaxWords} words)
                                            </span>   </Form.Label>

                                        {/* <Form.Control
                                            style={{ border: '2px solid lightgrey', fontSize: '16px' }}
                                            type="text" placeholder="I am looking for...."
                                            required
                                            name='title'
                                        /> */}

                                        <Form.Control
                                            style={{ border: '2px solid lightgrey', fontSize: '16px' }}
                                            type="text" placeholder="I am looking for...."
                                            required
                                            name='title'
                                            value={formData.title}
                                            onChange={handleInputChange}

                                        />

                                        {titleError && <p style={{ color: 'red' }} className="error p-2">Title exceeds word limit.</p>}

                                        <Form.Label className="mb-3 mt-4" style={{ fontSize: '18px' }}>Project description <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="red" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg> <span style={{ color: 'grey', fontSize: '13px' }}>
                                                (Min  {descriptionMinWords} words)
                                            </span>
                                        </Form.Label>

                                        {/* <Form.Control
                                            style={{ border: '2px solid lightgrey', fontSize: '16px' }} as="textarea" rows={3} placeholder="Our requriments are...."
                                            required
                                            name='projectDescription'
                                        /> */}

                                        <Form.Control
                                            style={{ border: '2px solid lightgrey', fontSize: '16px' }} as="textarea" rows={3} placeholder="Our requriments are...."
                                            required
                                            type='text'
                                            name='description'
                                            value={formData.description}
                                            onChange={handleInputChange}

                                        />


                                        {descriptionError && <p style={{ color: 'red' }} className="error p-2">Description is too short.</p>}




                                        <Form.Label className='mb-3 mt-4' style={{ fontSize: '18px' }}>Choose a category:<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="red" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg></Form.Label>
                                        <Row>
                                            <Col sm={6} xs={6} >

                                                <Dropdown1 onSelect={setSelectedOption} />
                                            </Col>
                                            <Col sm={6} xs={6} >

                                                <Dropdown2 selectedOption={selectedOption} />

                                            </Col>
                                        </Row>

                                        <Form.Label className='mb-3 mt-4' style={{ fontSize: '18px' }}>Best way for us to reach you?<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="red" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg></Form.Label>
                                        <Row>
                                            <Col sm={6} xs={6}>
                                                <select id="cars"
                                                    style={{ width: "-webkit-fill-available", height: "40px", border: '2px solid lightgrey', borderRadius: "8px" }}

                                                    name='country'
                                                    placeholder='Category'
                                                >
                                                    <option value="" disabled selected>Select your Category</option>
                                                    {
                                                        city && city.map((categorylist) =>
                                                            <option value={categorylist.CountryID}>{categorylist.CountryName}</option>)
                                                    }
                                                </select>
                                            </Col>
                                            <Col sm={6} xs={6}>
                                                <Form.Control className='form-control-lg' style={{ border: '2px solid lightgrey', fontSize: '16px' }} type="text" placeholder="Phone Number"

                                                    name='mobile'
                                                ></Form.Control>

                                            </Col>
                                        </Row>


                                        <Form.Group className="mb-3 mt-4" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label style={{ fontSize: '18px' }}>Preferred project budget <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="red" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg></Form.Label>
                                            <Row>
                                                <Col sm={2} xs={6}>

                                                    <select className='form-control-lg' name="currency" id="cars" style={{
                                                        borderRadius: '5px', border: '2px solid lightgrey',
                                                        width: "-webkit-fill-available"
                                                        , height: "40px", fontSize: '16px'
                                                    }}>
                                                        <option value="INR">INR</option>
                                                        <option value="Dollar">Dollar</option>
                                                    </select>




                                                </Col>
                                                <Col sm={3} xs={6}>
                                                    <input className='form-control-lg' type="text" placeholder='e.g 10000'

                                                        style={{
                                                            borderRadius: '5px', border: '2px solid lightgrey',
                                                            width: "-webkit-fill-available"
                                                            , height: "40px", fontSize: '16px'
                                                        }}


                                                        name='budgetStart'

                                                    />
                                                </Col>
                                                <Col sm={1} xs={12}><p className='mt-2' style={{ fontSize: '18px' }}>to</p></Col>
                                                <Col sm={3} xs={6}>
                                                    <input className='form-control-lg' type="text" placeholder='e.g 20,000' style={{
                                                        borderRadius: '5px', border: '2px solid lightgrey',
                                                        width: "-webkit-fill-available"
                                                        , height: "40px", fontSize: '16px'
                                                    }}

                                                        name='budgetEnd'

                                                    /></Col>
                                                <Col sm={3} xs={6}>

                                                    <select className='form-control-lg' name="workType" id="cars" style={{
                                                        borderRadius: '5px', border: '2px solid lightgrey',
                                                        width: "-webkit-fill-available"
                                                        , height: "40px", fontSize: '16px'
                                                    }}>
                                                        <option value="Per Hour">Per Hour</option>
                                                        <option value="Per Day">Per Day</option>
                                                        <option value="Complete Work">Complete Work</option>
                                                    </select>
                                                </Col>
                                            </Row>

                                        </Form.Group>



                                        <Accordion style={{ marginBottom: '20px' }} defaultActiveKey="1">
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header><p style={{ fontSize: '18px' }}><b>Advanced details</b></p> </Accordion.Header>
                                                <Accordion.Body>

                                                    <Form.Group className="mb-2 mt-4" controlId="exampleForm.ControlTextarea1">
                                                        <Form.Label style={{ fontSize: '18px' }}>Preferred location:

                                                        </Form.Label>
                                                        <Row >

                                                            <Col sm={4} xs={6}>

                                                                <label>
                                                                    <input type="radio" name="serviceMode" class="card-input-element" />

                                                                    <div style={{ padding: '6px 20px', borderRadius: '6px', fontWeight: 500, border: '1px solid grey ' }} class="panel panel-default card-input">
                                                                        <div class="panel-heading">Global</div>

                                                                    </div>

                                                                </label>

                                                            </Col>



                                                            <Col sm={4} xs={6}>


                                                                <label>
                                                                    <input type="radio" name="serviceMode" class="card-input-element" />

                                                                    <div style={{ padding: '6px 20px', borderRadius: '6px', fontWeight: 500, border: '1px solid grey' }} class="panel panel-default card-input">
                                                                        <div class="panel-heading">Local</div>

                                                                    </div>

                                                                </label>

                                                            </Col>



                                                            <Col sm={4} xs={12}>
                                                                <select className='form-control-lg mt-2' name="cars" id="cars" style={{
                                                                    borderRadius: '5px', border: '2px solid lightgrey',
                                                                    width: "-webkit-fill-available"
                                                                    , height: "35px", fontSize: '16px'
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
                                                        <Form.Label style={{ fontSize: '18px' }} className='mb-2'>Project Duration:</Form.Label>
                                                        <Row>
                                                            <Col sm={3} xs={6} >

                                                                <label>
                                                                    <input type="radio" name="duration" class="card-input-element" />
                                                                    <div style={{ padding: '6px 20px', borderRadius: '6px', fontWeight: 500, border: '1px solid grey' }} class="panel panel-default card-input">
                                                                        <div class="panel-heading">1 Month</div>
                                                                    </div>
                                                                </label>

                                                            </Col>
                                                            <Col sm={3} xs={6} >


                                                                <label>
                                                                    <input type="radio" name="duration" class="card-input-element" />
                                                                    <div style={{ padding: '6px 20px', borderRadius: '6px', fontWeight: 500, border: '1px solid grey' }} class="panel panel-default card-input">
                                                                        <div class="panel-heading">1-3 Month</div>
                                                                    </div>
                                                                </label>



                                                            </Col>
                                                            <Col sm={3} xs={6}>


                                                                <label>
                                                                    <input type="radio" name="duration" class="card-input-element" />
                                                                    <div style={{ padding: '6px 10px', borderRadius: '6px', fontWeight: 500, border: '1px solid grey' }} class="panel panel-default card-input">
                                                                        <div class="panel-heading">3-6 Month</div>
                                                                    </div>
                                                                </label>
                                                            </Col>
                                                            <Col sm={3} xs={6} >

                                                                <label>
                                                                    <input type="radio" name="duration" class="card-input-element" />
                                                                    <div style={{ padding: '6px 10px', borderRadius: '6px', fontWeight: 500, border: '1px solid grey' }} class="panel panel-default card-input">
                                                                        <div class="panel-heading">6 Month +</div>
                                                                    </div>
                                                                </label>


                                                            </Col>

                                                        </Row>


                                                    </Form.Group>



                                                    <Form.Group className="mb-3 mt-4" controlId="exampleForm.ControlTextarea1">
                                                        <Form.Label style={{ fontSize: '18px' }} className='mb-2'>Preferred service starting date:</Form.Label>
                                                        <Row>
                                                            <Col sm={3} xs={6} >


                                                                <label>
                                                                    <input type="radio" name="preferService" class="card-input-element" />
                                                                    <div style={{ padding: '6px 20px', borderRadius: '6px', fontWeight: 500, border: '1px solid grey' }} class="panel panel-default card-input">
                                                                        <div class="panel-heading">Immediate</div>
                                                                    </div>
                                                                </label>
                                                            </Col>
                                                            <Col sm={3} xs={6}>



                                                                <label>
                                                                    <input type="radio" name="preferService" class="card-input-element" />
                                                                    <div style={{ padding: '6px 20px', borderRadius: '6px', fontWeight: 500, border: '1px solid grey' }} class="panel panel-default card-input">
                                                                        <div class="panel-heading">1 Week </div>
                                                                    </div>
                                                                </label>
                                                            </Col>
                                                            <Col sm={3} xs={6}>



                                                                <label>
                                                                    <input type="radio" name="preferService" class="card-input-element" />
                                                                    <div style={{ padding: '6px 20px', borderRadius: '6px', fontWeight: 500, border: '1px solid grey' }} class="panel panel-default card-input">
                                                                        <div class="panel-heading">2 Week</div>
                                                                    </div>
                                                                </label>
                                                            </Col>
                                                            <Col sm={3} xs={6}>


                                                                <label>
                                                                    <input type="radio" name="preferService" class="card-input-element" />
                                                                    <div style={{ padding: '6px 20px', borderRadius: '6px', fontWeight: 500, border: '1px solid grey' }} class="panel panel-default card-input">
                                                                        <div class="panel-heading">1 Month</div>
                                                                    </div>
                                                                </label>
                                                            </Col>

                                                        </Row>

                                                    </Form.Group>


                                                </Accordion.Body>

                                            </Accordion.Item>

                                        </Accordion>




                                        <center>

                                            <button style={{ height: '40px', width: '180px', borderRadius: '10px', marginBottom: '20px' }} className='hire-button d-none d-sm-block' type='submit'><b>Submit</b></button>
                                            <button style={{ height: '40px', width: '180px', borderRadius: '10px', marginBottom: '80px' }} className='hire-button d-block d-sm-none' type='submit'><b>Submit</b></button>


                                        </center>





                                    </form>
                                </Col>
                                <Col style={{ marginTop: '6vh' }} sm={4} className='hiretalentlast  d-none d-sm-block' >
                                    <Card className='hiretalentlast mt-2' style={{ width: "-webkit-fill-available", border: 'none' }}>
                                        <div style={{ backgroundColor: '#efefef', borderRadius: '10px' }}>
                                            <div className=' '>
                                                <h5 className='hire-text p-4 ' >Featured Package</h5>

                                                <p className='m-3' style={{ color: 'black', paddingLeft: '10px' }}> Direct chat with upto 50 professional  </p>
                                                <p className='m-3' style={{ color: 'black', paddingLeft: '10px' }}>10x changes of finding professionals with featured projects</p>
                                                <p className='m-3' style={{ color: 'black', paddingLeft: '10px' }}>Expert Staff is assigned to understand the requirements</p>
                                                <p className='m-3' style={{ color: 'black', paddingLeft: '10px' }}>Priority customer support in managing and finding talents</p>
                                                <center>
                                                    <Link to="/Account/login">
                                                        <button className='hire-upgared' style={{ fontWeight: 900, height: '40px', margin: '35px' }}>Upgarde</button>
                                                    </Link>
                                                </center>
                                            </div>
                                        </div>
                                    </Card>



                                    <div style={{ color: 'grey', fontSize: '16px' }} className='mt-3 p-2'>
                                        <Link to='/About Us'  >
                                            <span style={{ paddingRight: '10px', color: 'grey' }}>
                                                About </span>
                                        </Link>
                                        <Link to='/Career'>
                                            <span style={{ paddingRight: '10px', color: 'grey' }}>Career</span>
                                        </Link>

                                        <Link to='/Termsandcondition'>
                                            <span style={{ color: 'grey' }}>Term of services</span>
                                        </Link>

                                        <br />

                                        <Link to='/ContactComponent'>
                                            <span style={{ paddingRight: '20px', color: 'grey' }}>Conatct</span>
                                        </Link>

                                        <span style={{ paddingRight: '20px' }}>FAQ</span>

                                        <span style={{ paddingRight: '20px' }}>Blog</span>

                                        <Link to='/PrivacyPolicy'>
                                            <span style={{ paddingRight: '10px', color: 'grey' }}>Privacy policy</span>
                                        </Link>

                                        <span> ©️ 2023 Wiraa. All Rights Reserved</span>
                                    </div>
                                </Col>
                            </Row>





                        </Container>
                    </Col>
                </Row>
            </Container>
            <Phoneviewfooter />


        </>
    )
}

export default PostRequirement;











