import React,{useState}from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import Sidenav from './layout/Sidenav';
import Topnav from './layout/topnav';
import Form from 'react-bootstrap/Form';
import Auth from '../../Model/Auth.model';
import { useEffect } from 'react';
function Hiretalent() {
    const [category , setCategory] = useState([]);
    const [GetSubCategory , setGetSubCategory] = useState([]);
    const [city , setCity] = useState([]);
    const [formData, setFormData] = useState({
    postreqID: 0,
    pR_Description: "",
    pR_FKCatID: '',
    pR_FKSubCategoryID: '',
    expertise: '',
    serviceMode: '',
    city:'',
    serviceStartDate:'',
    budget: '',
    workType: '',
    postStatus: '',
    postExpireDate: '',
    postValidity: '',
    validityStatus: '',
    userid: '',
    applyDat:'',
    preferService: '',
    directUserId: '',
    ProjectDescription:"",
    Duration:"",
    Country:"",
    MobileNo:"",

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
    Auth.GetCategory().then((response) =>{
setCategory(response.data)
console.log(response.data)

    }
    )
    }, [])
    useEffect(() => {
        Auth.GetSubCategory().then((response) =>{
            setGetSubCategory(response.data)
    console.log(response.data)
    
        }
        )
        }, [])
        
        useEffect(() => {
            Auth.City().then((response) =>{
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
                                    <Form className='m-4' onClick={handleSubmit}>
                                        <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                                            <Form.Label>Project Title: <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="red" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg></Form.Label>
                                            <Form.Control type="email" placeholder="I am looking for...." 
                                            vlue={formData.ProjectDescription}
                                            name='ProjectDescription'
                                            onChange={handleInputChange}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3 mt-4" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Project description <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="red" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg></Form.Label>
                                            <Form.Control as="textarea" rows={3} placeholder="Our requriments are...."
                                             value={formData.pR_Description}
                                             name='pR_Description'
                                             onChange={handleInputChange}
                                            />
                                        </Form.Group>
                                        <Form.Group className="mb-3 mt-4" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Choose a category:<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="red" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg></Form.Label>
                                            <Row>
                                                <Col sm={6}>

                                                    <select  id="cars" 
                                                        style={{
                                                            width: "-webkit-fill-available", 
                                                            height: "40px"                                                        
                                                        }}
                                                            value={formData.pR_FKCatID}
                                                            name='pR_FKCatID'
                                                            onChange={handleInputChange}
                                                    >
                                                        {
                                                            category && category.map((categorylist )=>
                                                              <option value={categorylist.curriculumID}>{categorylist.curriculumName}</option>)
                                                        }
                                                    </select>
                                                </Col>
                                                <Col sm={6}>
                                                    <select  id="cars" 
                                                        style={{
                                                            width:"-webkit-fill-available",
                                                            height: "40px"
                                                            }}
                                                        value={formData.pR_FKSubCategoryID}
                                                        name='pR_FKSubCategoryID'
                                                        onChange={handleInputChange}>
                                                            {
                                                                GetSubCategory && GetSubCategory.map((SubCategory) =>
                                                                <option value={SubCategory.id}> {SubCategory.gradeName}</option>
                                                                )
                                                            }
                                                    </select>
                                                </Col>
                                            </Row>
                                            <Row className='mt-4'>
                                                <Col sm={12}>   
                                                    <select name="Country" id="cars" 
                                                        style={{
                                                        width: "-webkit-fill-available", 
                                                        height: "40px",
                                                        }}
                                                    >
                                                        {city && city.map((allcont) =>
                                                           <option value="Business">{allcont.countryName}</option>
                                                        )}            
                                                    </select>
                                                </Col>
                                            </Row>
                                        </Form.Group>
                                        <Form.Group className="mb-3 mt-4" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Best way for us to reach you?<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="red" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg></Form.Label>
                                            <Row>
                                                <Col sm={6}>
                                                    <select name="cars" id="cars" style={{
                                                        width: "-webkit-fill-available"
                                                        , height: "35px"
                                                    }}>
                                                       
                                                    </select>
                                                </Col>
                                                <Col sm={6}>
                                                    <Form.Control type="text" placeholder="Phone Number"
                                                    value={formData.MobileNo}
                                                    name='MobileNo'
                                                    onChange={handleInputChange}></Form.Control>
                                                    
                                                </Col>
                                            </Row>

                                        </Form.Group>
                                        <Form.Group className="mb-3 mt-4" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Preferred project budget <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="red" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg></Form.Label>
                                            <Row>
                                                <Col sm={2}>

                                                    <select name="cars" id="cars" style={{
                                                        width: "-webkit-fill-available"
                                                        , height: "40px"
                                                    }}>
                                                        <option value="Business">INR</option>
                                                        <option value="IT">IT</option>
                                                        <option value="Marketing">Marketing</option>
                                                        <option value="Lifestyle">Lifestyle</option>
                                                    </select>
                                                </Col>
                                                <Col sm={3}>
                                                    <input type="text" placeholder='e.g 10000'
                                                        style={{
                                                            width: "-webkit-fill-available"
                                                            , height: "40px"
                                                        }}
                                                        value={formData.budget}
                                                    name='budget'
                                                    onChange={handleInputChange}
                                                    />
                                                </Col>
                                                <Col><p className='mt-2'><b>to</b></p></Col>
                                                <Col sm={3}>
                                                    <input type="text" placeholder='e.g 20,000' style={{
                                                        width: "-webkit-fill-available"
                                                        , height: "40px"
                                                    }}
                                                    value={formData.budget}
                                                    name='budget'
                                                    onChange={handleInputChange}
                                                    /></Col>
                                                <Col sm={3}>

                                                    <select name="cars" id="cars" style={{
                                                        width: "-webkit-fill-available"
                                                        , height: "40px"
                                                    }}>
                                                        <option value="Per Hour">Per Hour</option>
                                                        <option value="Per Day">Per Day</option>
                                                        
                                                    </select>
                                                </Col>
                                            </Row>

                                        </Form.Group>
                                        <p>Type of project<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="red" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg></p>
                                        <Row>
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
                                        </Row>
                                        <p className='mt-4'><b>Advanced details</b></p>
                                        <Form.Group className="mb-2 mt-4" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Preferred location:<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="red" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg></Form.Label>
                                            <Row>
                                                <Col sm={4}>
                                                    <Form.Control placeholder="Global"
                                                     value={formData.Country}
                                                     name='Country'
                                                     onChange={handleInputChange} />
                                                </Col>
                                                <Col sm={4}>
                                                    <Form.Control type="email" placeholder="Local" />
                                                </Col>
                                                <Col sm={4}>
                                                    <select name="cars" id="cars" style={{
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
                                            <Form.Label className='mb-2'>Project Duration:</Form.Label>
                                            <Row>
                                                <Col >
                                                
                                                    <Card type="radio">
                                                        <input type="radio" style={{right:'0',position:"relative",float:'right'}}/>
                                                        <p className='m-2'>  1 - 3 months </p>
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
                                                        <p className='m-2'> 6 Month  </p>
                                                    </Card>
                                                </Col>

                                            </Row>
                                        </Form.Group>
                                        <Form.Group className="mb-3 mt-4" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label className='mb-2'>Preferred service starting date:</Form.Label>
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
                                        <center> <button className='hire-button' type='submit'><b>Submit</b></button></center>
                                        </Form.Group>
                                    </Form>
                                </Col>
                                <Col sm={4} className='hiretalentlast' >
                                    <Card className='hiretalentlast' style={{ width: "-webkit-fill-available" }}>
                                        <div style={{ backgroundColor: '#efefef' }}>
                                            <div className=' '>
                                                <h5 className='hire-text' >Featured Package</h5>
                                                <p className='m-3'>Highlighted order with 'FEATURED' tag in a top position</p>
                                                <p className='m-3'>Direct phone number and email details of unlimited professionals</p>
                                                <p className='m-3'>10x changes of finding professionals with featured projects</p>
                                                <p className='m-3'>Expert Staff is assigned to understand the requirements</p>
                                                <p className='m-3'>Priority customer support in managing and finding talent</p>
                                                <center><button className='hire-upgared'>Upgarde</button></center>
                                            </div>
                                        </div>
                                    </Card>
                                    <span>About</span> <span>Career</span> <span>Term of services</span>
                                    <span>Conatct</span> <span>FAQ</span> <span>Blog</span>
                                    <span>Privacy policy</span> <span> © 2023 Wiraa. All Rights Reserved</span>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Hiretalent