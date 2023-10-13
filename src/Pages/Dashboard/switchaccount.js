import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import Sidenav from './layout/Sidenav';
import Topnav from './layout/topnav';
import bookbulb from "../../asset/image/bookbulb.png"
import Switchform from '../../Model/switch.model';
import AllCountryList from './layout/AllCountrylist'
import AllCitylistID from './layout/AllCitylistID';
import Phoneviewfooter from '../../Layout/Phoneviewfooter';

function SwitchAccount() {
    const [selectedOption, setSelectedOption] = useState([1]);
    const [GetSubCategory, setGetSubCategory] = useState([]);
    const [OccupaqtionList, setOccupaqtionList] = useState();
    const [AllQualificationListt, setAllQualificationListt] = useState();
    const [ShowSubCategory, setShowSubcategory] = useState()
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

    const ShowSubcatogery = (CurriculumID) => {
        console.log(CurriculumID)
        const categoryId = (CurriculumID);
        Switchform.Allsubcategory({ categoryId }).then((response) => {
            setShowSubcategory(response.data)
            console.log(response.data)


        })
    }

    const [formdata, setformdata] = useState({
        mobile: "",
        aboutMe: "",
        experience: "",
        countryId: "",
        cityId: '',
        occupationId: "",
        // qualificationName: "",
        qualificationId: "",
        categoryId: "",
        subCategoryId: '',
        files: "",
    });
    const handleInputChange = (event) => {

        setformdata({
            ...formdata,
            [event.target.name]: event.target.value,
        });
    };
    const handleSubmit = (event) => {

        console.log(event);
        event.preventDefault();

        const form = new FormData(event.target);
        form.append("userId", parseInt(localStorage.getItem("UserID")));
        form.append("userProfileId", parseInt(localStorage.getItem("userProfileId")));
        // form.append("occupationId", parseInt("occupationId"));
        Switchform.CreateProfessinoal(form).then((response) => {
            console.log(response.data, "Profession Form Fill Successfuly");
        })
            .catch((error) => {
                console.log(error);
            });
    };
    const [selectedButton, setSelectedButton] = useState(null);
    const [selectedButon, setSelectedButon] = useState(null);
    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName);
    };

    const handleButonClick = (buttonName) => {
        setSelectedButon(buttonName);
    };

    return (
        <>
            <Container fluid className='dashboard-conatiner-top' >
                <Row>
                    <Col sm={1} className='d-none d-sm-block'>
                        <Sidenav />
                    </Col>
                    <Col sm={8} xs={12} style={{padding:'0px'}} className='dashboard-conatiner-top-row '>
                        <Container className='square border border-bottom-0'>
                            <Topnav />
                            <Row>
                                <Col sm={8} style={{padding:'0px'}} className=" square border-end mt-4">
                                    <h5 className='text-center d-none d-sm-block'>Find great works</h5>
                                    <h5 style={{marginTop:'70px'}} className='text-center d-block d-sm-none'>Find great works</h5>
                                    <form onSubmit={handleSubmit} className='m-4'>
                                        <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                                            <Form.Label style={{ fontSize: '16px' }}>Profile image: <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="red" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg></Form.Label>
                                            <div>
                                                <Card style={{ backgroundColor: "#efefef", border: 'none', display: 'flex', justifyContent: 'center' }}>
                                                    <p className='m-2' style={{ fontSize: '15px', marginLeft: '20px',display:'flex',alignItems:'center',justifyContent:'space-between' }}>  <span > Update your latest image </span>  <span>

                                                        <Button style={{ color: 'white', backgroundColor: '#008080', border: 'none', float: 'right', fontWeight: 500,paddingLeft:'20px',paddingRight:'20px' }} class="- btn">
                                                            Upload
                                                            <input className='inputselectfile' type="file" name="file" />
                                                        </Button>
                                                        {/* <button style={{ border: 'none', padding: '7px', fontSize: '12px' }} className='swtich-upload'> <b>Update Image</b>    </button> */}


                                                    </span>  </p>

                                                </Card>
                                            </div>
                                        </Form.Group>
                                        <Row>
                                            <Col sm={6}>
                                                <Form.Group className="mb-3 mt-4" controlId="exampleForm.ControlTextarea1">
                                                    <Form.Label> <span style={{ fontSize: '16px' }}>Name:</span>  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="red" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                    </svg>
                                                    </Form.Label>
                                                    <Form.Control placeholder="Your Name"
                                                        className='formborder' style={{ paddingLeft: '20px', fontSize: '15px' }} />
                                                </Form.Group>

                                            </Col>
                                            <Col sm={6}>
                                                <Form.Group className="mb-3 mt-4 d-none d-sm-block" controlId="exampleForm.ControlTextarea1">
                                                    <Form.Label> <span style={{ fontSize: '16px' }}>Phone No.: </span>   <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="red" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                    </svg></Form.Label>
                                                    <Form.Control
                                                        onChange={handleInputChange}
                                                        placeholder="Your Phone No." name='mobile' className='formborder' style={{ paddingLeft: '20px', fontSize: '15px' }} />
                                                </Form.Group>


                                                <Form.Group className="mb-3 mt-2 d-block d-sm-none" controlId="exampleForm.ControlTextarea1">
                                                    <Form.Label> <span style={{ fontSize: '16px' }}>Phone No.: </span>   <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="red" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                    </svg></Form.Label>
                                                    <Form.Control
                                                        onChange={handleInputChange}
                                                        placeholder="Your Phone No." name='mobile' className='formborder' style={{ paddingLeft: '20px', fontSize: '17px' }} />
                                                </Form.Group>

                                            </Col>
                                        </Row>

                                        <Form.Label> <span style={{ fontSize: '16px' }}>About me: </span>  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="red" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg></Form.Label>

                                        <Form.Control onChange={handleInputChange} as="textarea" name='aboutMe' rows={3} placeholder="Please enter a headline" className='formborder' style={{ paddingLeft: '20px', fontSize: '15px' }} />

                                        <Form.Label style={{ marginTop: '20px' }}> <span style={{ fontSize: '16px' }}>Experience: </span>    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="red" className="bi bi-star-fill" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                        </svg>
                                            <span style={{ fontSize: '12px', color: 'grey', fontWeight: 600 }}> ( Min 25 words ) </span>
                                        </Form.Label>
                                        <Form.Control onChange={handleInputChange} as="textarea" name='experience' rows={3} placeholder="Please enter work experience" className='formborder' style={{ paddingLeft: '20px', fontSize: '17px' }} />



                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Row className='mt-4 mb-2'>
                                                <Col sm={6}>

                                                    <Form.Label> <span style={{ fontSize: '16px' }}> Country: </span>  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="red" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                    </svg></Form.Label>
                                                    <AllCountryList  onSelect={setSelectedOption} />
                                                </Col>


                                                <Col sm={6}>

                                                    <Form.Label className='d-none d-sm-block'> <span style={{ fontSize: '16px' }}>City: </span>  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="red" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                    </svg></Form.Label>

                                                    <Form.Label className='d-block d-sm-none mt-2'> <span style={{ fontSize: '16px' }}>City: </span>  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="red" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                    </svg></Form.Label>

                                                    <AllCitylistID  selectedOption={selectedOption} />
                                                </Col>
                                            </Row>

                                        </Form.Group>
                                        <Form.Group className="mb-3 " controlId="exampleForm.ControlTextarea1">

                                            <Row>
                                                <Col sm={6}>
                                                    <Form.Label> <span style={{ fontSize: '16px' }}>Occupation:</span> <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="red" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                    </svg></Form.Label>
                                                    <select id="cars"
                                                        style={{ width: "-webkit-fill-available", height: "40px", border: '2px solid lightgrey', borderRadius: "8px",padding:'4px' }}
                                                        // onChange={handleDropdownChange}
                                                        name='occupationId'
                                                        onChange={handleInputChange}
                                                        placeholder='Category'
                                                    >
                                                        {
                                                            OccupaqtionList && OccupaqtionList.map((listCountry) =>
                                                                <option value={listCountry.OccupationID}>{listCountry.OccupationName}</option>)
                                                        }
                                                    </select>
                                                </Col>
                                                <Col sm={6}>
                                                    <Form.Label className='d-none d-sm-block'> <span style={{ fontSize: '16px' }}> Qualification: </span> <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="red" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                    </svg></Form.Label>

                                                    <Form.Label className='d-block d-sm-none mt-2'> <span style={{ fontSize: '16px' }}> Qualification: </span> <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="red" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                    </svg></Form.Label>


                                                    <select id="cars"
                                                        onChange={handleInputChange}
                                                        style={{ width: "-webkit-fill-available", height: "40px", border: '2px solid lightgrey', borderRadius: "8px",padding:'4px' }}
                                                        // onChange={handleDropdownChange}
                                                        name='qualificationId'
                                                        placeholder='Category'
                                                    >
                                                        {
                                                            AllQualificationListt && AllQualificationListt.map((listCountry) =>
                                                                <option value={listCountry.QualificationID}>{listCountry.QualificationName}</option>)
                                                        }
                                                    </select>
                                                </Col>
                                            </Row>

                                        </Form.Group>
                                        <Row className='square border-end'>
                                            {GetSubCategory && GetSubCategory.map((categorylist, index) =>
                                                <Col sm={3} xs={4}>
                                                    <label className='label-radio' style={{ width: "100%" }}>
                                                        <input type="radio" onChange={handleInputChange} name="categoryId" value={categorylist.CurriculumID} class=" d-none " id="demo1" />
                                                        <div className='card mt-2' onClick={() => (ShowSubcatogery(categorylist.CurriculumID), handleButtonClick(categorylist.CurriculumName))} value={categorylist.CurriculumID} style={{ border: `2px solid lightgrey`, borderRadius: "8px", cursor: 'pointer', backgroundColor: selectedButton === categorylist.CurriculumName ? 'lightgrey' : '' }} ><center >{categorylist.CurriculumName}</center></div>
                                                    </label>
                                                </Col>
                                            )}
                                        </Row>
                                        <hr />
                                        <Row className='square border-end'>
                                            {ShowSubCategory && ShowSubCategory.map((categorylist, index) =>
                                                <Col sm={4} xs={5}>
                                                    <label className='label-radio' style={{ width: "100%" }}>
                                                        <input type="radio" onChange={handleInputChange} name="subcategoryId" value={categorylist.subcategoryId} class=" d-none" id="demo1" />
                                                        <div className='card mt-2' onClick={() => (handleButonClick(categorylist.subcategoryId))} value={categorylist.subcategoryId} style={{ border: '2px solid lightgrey', borderRadius: "8px", backgroundColor: selectedButon === categorylist.subcategoryId ? 'lightgrey' : '' }}
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
                                    {/* <div className='last-left-span' style={{ padding: '30px', fontSize: '16px', color: 'grey' }}>
                                        <span>About    </span> <span>Career   </span> <span>Term of services    </span>


                                        <span>Conatct    </span> <span>FAQ   </span> <span>Blog  </span>
                                        <span> Privacy policy  </span> <span> ©️ 2023 Wiraa. All Rights Reserved </span>
                                    </div> */}






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

export default SwitchAccount;