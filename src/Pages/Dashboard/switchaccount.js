import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import Sidenav from './layout/Sidenav';
import Topnav from './layout/topnav';

import bookbulb from "../../asset/image/bookbulb.png"
import Switchform from '../../Model/switch.model';
import AllCountryList from './layout/AllCountrylist'
import AllCitylistID from './layout/AllCitylistID';
import AllCategory from './layout/AllCategory';
function SwitchAccount() {
    const [textColor, setTextColor] = useState('black');
    const [selectedOption, setSelectedOption] = useState([1]);
    const [GetSubCategory, setGetSubCategory] = useState([]);
    const [OccupaqtionList, setOccupaqtionList] = useState();
    const [AllQualificationListt, setAllQualificationListt] = useState([1]);
    const [ShowSubCategory , setShowSubcategory] =useState ()
    useEffect(() => {
        Switchform.getAllOccupationList().then((response) => {
            console.log(response.data);
            setOccupaqtionList(response.data);
        });
    }, [])
    useEffect(() => {
        Switchform.getAllQualificationList().then((response) => {
            console.log(response.data);
            setAllQualificationListt(response.data);
        });
    }, [])
    useEffect(() => {
        Switchform.Allcategory().then((response) => {
            setGetSubCategory(response.data)
            console.log(response.data)
        }
        )
    }, [])
  
    const ShowSubcatogery =(CurriculumID) => {
            console.log(CurriculumID)
            const categoryId = (CurriculumID);
            Switchform.Allsubcategory({categoryId}).then((response) => {
                setShowSubcategory(response.data)
                console.log(response.data)
               
                
            })
        }
        
      const [formdata ,setformdata] = useState({
        mobile :"",
        aboutMe :"",
        experience :"",
        countryId :"",
        cityId :'',
        occupationId :"",
        qualificationName :"",
        qualificationId :"",
        categoryId :"",
        subCategoryId:'',
        files:"",
      });
      const handleInputChange = (event) => {

        setformdata({
            ...formdata,
            [event.target.name]: event.target.value,
        });


    };
    const handleSubmit = (event) => {

        event.preventDefault();
        const form = new FormData(event.target);
        form.append("userId", localStorage.getItem("UserID"));
        form.append("userProfileId", localStorage.getItem("userProfileId"));
        
        console.log(form)
        Switchform.CreateProfessinoal(form)
            .then((response) => {
                console.log(response.data, "Add New Business");
                  
             
            })
            .catch((error) => {
                console.log(error);
            });
    };
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
                                <Col sm={8} className=" square border-end mt-4">
                                    <h5 className='text-center'>Find great works</h5>
                                    <form onSubmit={handleSubmit} className='m-4'>
                                        <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                                            <Form.Label style={{ fontSize: '18px' }}>Profile image: <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="red" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg></Form.Label>
                                            <div>
                                                <Card style={{ backgroundColor: "#efefef", border: 'none', display: 'flex', justifyContent: 'center' }}>
                                                    <p className='m-2' style={{ fontSize: '16px', marginLeft: '20px' }}>  Update your latest image  <span> <button style={{ border: 'none', padding: '7px', fontSize: '12px' }} className='swtich-upload'> <b>Update Image</b>    </button></span>  </p>
                                                </Card>
                                            </div>
                                        </Form.Group>
                                        <Row>
                                            <Col sm={6}>
                                                <Form.Group className="mb-3 mt-4" controlId="exampleForm.ControlTextarea1">
                                                    <Form.Label> <span style={{ fontSize: '18px' }}>Name:</span>  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="red" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                    </svg>
                                                    </Form.Label>
                                                    <Form.Control placeholder="Your Name" className='formborder' style={{ paddingLeft: '20px', fontSize: '17px' }} />
                                                </Form.Group>
                                            </Col>
                                            <Col sm={6}>
                                                <Form.Group className="mb-3 mt-4" controlId="exampleForm.ControlTextarea1">
                                                    <Form.Label> <span style={{ fontSize: '18px' }}>Phone No.: </span>   <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="red" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                    </svg></Form.Label>
                                                    <Form.Control placeholder="Your Phone No." name='mobile' className='formborder' style={{ paddingLeft: '20px', fontSize: '17px' }} />
                                                </Form.Group>

                                            </Col>
                                        </Row>
                                        <Form.Group className="mb-3 mt-4" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label> <span style={{ fontSize: '18px' }}>About me: </span>  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="red" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg></Form.Label>
                                            <Form.Control as="textarea" name='aboutMe' rows={3} placeholder="Please enter a headline" className='formborder' style={{ paddingLeft: '20px', fontSize: '17px' }} />
                                        </Form.Group>
                                        <Form.Group className="mb-3 mt-4" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label> <span style={{ fontSize: '18px' }}>Experience: </span>    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="red" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg>
                                                <span style={{ fontSize: '12px', color: 'grey', fontWeight: 600 }}> ( Min 25 words ) </span>  </Form.Label>
                                            <Form.Control as="textarea" name='experience' rows={3} placeholder="Please enter work experience" className='formborder' style={{ paddingLeft: '20px', fontSize: '17px' }} />
                                        </Form.Group>


                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

                                            <Row>
                                                <Col sm={6}>
                                                    <AllCountryList onSelect={setSelectedOption} />

                                                </Col>
                                                <Col sm={6}>
                                                    <AllCitylistID selectedOption={selectedOption} />
                                                </Col>
                                            </Row>

                                        </Form.Group>
                                        <Form.Group className="mb-3 " controlId="exampleForm.ControlTextarea1">

                                            <Row>
                                                <Col sm={6}>
                                                    <Form.Label> <span style={{ fontSize: '18px' }}>Occupation:</span> <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="red" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                    </svg></Form.Label>
                                                    <select id="cars"
                                                        style={{ width: "-webkit-fill-available", height: "40px", border: '2px solid lightgrey', borderRadius: "8px" }}
                                                        // onChange={handleDropdownChange}
                                                        name='qualificationName'
                                                        placeholder='Category'
                                                    >
                                                        {
                                                            OccupaqtionList && OccupaqtionList.map((listCountry) =>
                                                                <option value={listCountry.OccupationID}>{listCountry.OccupationName}</option>)
                                                        }
                                                    </select>
                                                </Col>
                                                <Col sm={6}>
                                                    <Form.Label> <span style={{ fontSize: '18px' }}> Qualification: </span> <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="red" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                    </svg></Form.Label>
                                                    <select id="cars"
                                                        style={{ width: "-webkit-fill-available", height: "40px", border: '2px solid lightgrey', borderRadius: "8px" }}
                                                        // onChange={handleDropdownChange}
                                                        name='qualificationId'
                                                        placeholder='Category'
                                                    >
                                                        {
                                                            AllQualificationListt && AllQualificationListt.map((listCountry) =>
                                                                <option value={listCountry.QualificationID}>{listCountry.QualificationName}</option>)
                                                        }
                                                    </select>                                                </Col>
                                            </Row>

                                        </Form.Group>



                                       

                                            <Row className='square border-end'>
                                               
                                           
                                            {GetSubCategory && GetSubCategory.map((categorylist) =>
                                             <Col sm={3}>
                                                    <label className='label-radio' style={{width:"100%"}}>
                                                    <input type="radio" name="categoryId" value={categorylist.CurriculumID} class=" d-none" id="demo1" />
                                            <div className='card mt-2'  onClick={() => { ShowSubcatogery(categorylist.CurriculumID) }} value={categorylist.CurriculumID}style={{ border: `2px solid lightgrey`, borderRadius: "8px",  cursor: 'pointer',}} ><center  style={{ color: textColor }}>{categorylist.CurriculumName}</center></div>
                                            </label>
                                             </Col>
                                            )}
                                        
                                               
                                            </Row>
                                            <hr/>
                                            <Row className='square border-end'>
                                               
                                           
                                               {ShowSubCategory && ShowSubCategory.map((categorylist) =>
                                                <Col sm={4}>
                                                      <label className='label-radio'  style={{width:"100%"}}>
                                                      <input type="radio" name="subcategoryId" value={categorylist.subcategoryId} class=" d-none" id="demo1" />
                                               <div className='card mt-2'  value={categorylist.subcategoryId} style={{ border: '2px solid lightgrey', borderRadius: "8px",height:'50px'}} 
                                                ><center>{categorylist.subcategoryName}</center></div>
                                              </label>
                                                </Col>
                                               )}
                                           
                                                  
                                               </Row>

                                        <center>
                                         
                                            <button style={{ fontWeight: 600, padding: '8px', marginTop: '20px', border: 'none', backgroundColor: '#008080', width: '160px', borderRadius: '8px', color: 'white' }} className=''>Submit</button>
                                           
                                        </center>
                                    </form>
                                </Col>
                                <Col sm={4} className='p-1' >
                                    <div className='last-left-span' style={{ backgroundColor: '#f5f5f5', width: "-webkit-fill-available" }} >
                                        <div className=''>
                                            <center><img style={{ height: '80px', width: '80px' }} src={bookbulb} alt="" className='switchaccount-img' />
                                                <h5 style={{ fontSize: '25px' }} className='switch-text'><b>Advance <br /> Freelancing <br /> Course</b></h5>
                                                <p style={{ fontSize: '19px', color: 'grey' }}>Polish your skills and expand<br />your knowledge base</p>

                                                <button className='switch-button'>Learn</button>
                                            </center>

                                        </div>
                                    </div>
                                    <div className='last-left-span' style={{ padding: '30px', fontSize: '16px', color: 'grey' }}>
                                        <span>About    </span> <span>Career   </span> <span>Term of services    </span>


                                        <span>Conatct    </span> <span>FAQ   </span> <span>Blog  </span>
                                        <span> Privacy policy  </span> <span> ©️ 2023 Wiraa. All Rights Reserved </span>
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

export default SwitchAccount;