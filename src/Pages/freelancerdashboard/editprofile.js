import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../../asset/css/dashboard.css";
import Sidenav from "./layout/Sidenavbar";
import test from "../../asset/image/test.JPG";
import Topnav from "./layout/topnavbar";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Auth from "../../Model/Auth.model";
import test1 from "../../asset/image/test1.png";
import ProfileModal from "../../modal/Profile.modal";
import Switchform from "../../Model/switch.model";
import Staticmodal from "../../modal/Static.modal";
import Phoneviewfooter from "../../Layout/Phoneviewfooter";

import { IoChatboxOutline, IoHeart, IoHeartOutline } from "react-icons/io5"; /////////Gourav
import PortfolioModal from "../../modal/Portfolio.modal"; ////////////////Gourav
import { MdDelete } from "react-icons/md"; //////////Gourav delete icon

function Editprofile() {
  const inputRef = useRef(null);
  const [AllQualificationListt, setAllQualificationListt] = useState(null);
  const [allCity, setallcity] = useState(null);
  const [Freelancer, setFreelancer] = useState([]);
  const [activeTab, setActiveTab] = useState("Tab1");
  const [selectedImage, setSelectedImage] = useState(null);

  const [getError, seterror] = useState(""); //////////////////////Gourav
  const [portfolios, setPortfolios] = useState([]); //////////////Gourav

  const handleClick = (tab) => {
    setActiveTab(tab);
  };
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [profileData, setProfileData] = useState([]);
  const fetchdata = () => {
    const userId = localStorage.getItem("UserID");
    ProfileModal.ClientProfile({ userId })
      .then((response) => {
        console.log(response.data);
        setProfileData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleimageClick = () => {
    inputRef.current.click();
  };
  useEffect(() => {
    Staticmodal.getAllQualificationList()
      .then((response) => {
        console.log(response.data);
        setAllQualificationListt(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    Staticmodal.getallCity()
      .then((response) => {
        console.log(response.data);
        setallcity(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const [formdata, setformdata] = useState({
    fName: "",
    lName: "",
    occupationId: "",
    qualificationId: "",
    cityId: "",
    about: "",
    experience: "",
    files: "",
  });
  const handleInputChange = (event) => {
    setformdata({
      ...formdata,
      [event.target.name]: event.target.value,
    });
    if (event.target.type === "file") {
      const imageFile = event.target.files[0];
      if (imageFile) {
        setSelectedImage(URL.createObjectURL(imageFile));
      }
    }
  };
  const handleSubmit = (event) => {
    console.log(event);
    event.preventDefault();
    const form = new FormData(event.target);
    form.append("userId", parseInt(localStorage.getItem("UserID")));

    ProfileModal.Updateprofile(form)
      .then((response) => {
        console.log(response.data, "Profession Form Fill Successfuly");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchdata();
  }, []);
  useEffect(() => {
    Auth.getthreeprofile()
      .then((response) => {
        console.log(response.data);
        setFreelancer(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  ////////////////////////////////////////////
  const handleClick2 = (tab, UsersProfileID) => {
    const userProfileId = UsersProfileID;
    PortfolioModal.Portfilobyid({ userProfileId })
      .then((rsp) => {
        console.log("portfilo", rsp.data);
        setPortfolios(rsp.data);
      })
      .catch((error) => {
        if (error.response?.status === 404) {
          seterror("No Portfolio found");
        } else {
          // seterror(error.message);
        }
      });
    setActiveTab(tab);
  };
  ////////////////////////////
  console.log("Gourav data check...............", portfolios);

  const deleteportFolio = async (PostID) => {
    console.log(PostID, "ragagagg");
    const userProfileId = localStorage.getItem("userProfileId");
    PortfolioModal.deletePortfolio(userProfileId, PostID).then((res) => {
      console.log(res.data);
    });
  };
  return (
    <>
      <Container fluid className="dashboard-conatiner-top">
        <Row>
          <Col sm={1} className="d-none d-sm-block">
            <Sidenav activekey="profile" />
          </Col>

          <Col
            sm={8}
            xs={12}
            style={{ padding: "0px" }}
            className="dashboard-conatiner-top-row "
          >
            <Container className="square border border-bottom-0">
              <Topnav activeLink="Profile" />

              <Row className="">
                {/* <Col sm={8} className="square border-end">
                                    <Card className='order-detail-profile mt-3' style={{ backgroundColor: "#efefef", borderRadius: "35px" }}>
                                        <div>
                                            <p className='order-detail-profile-icon'><ion-icon name="pencil-outline" onClick={handleShow1} style={{ height: '21px' }}></ion-icon></p>

                                        </div>
                                        <center>
                                            <img src={`https://wiraaback.azurewebsites.net/api/v1/${profileData?.[0]?.ProfilePic}`} alt="" className='' style={{ height: "70px", width: '70px' }} />
                                            <h6 className='mt-4'><b>{profileData?.[0]?.FirstName} {profileData?.[0]?.LastName} </b></h6><br />
                                            <p>{profileData?.[0]?.OccupationName}</p>
                                        </center>
                                        <Container>
                                            <Row className='mb-3'>
                                                <Col className='square border-end'>  {profileData?.[0]?.FollowerCount === null ? (
                                                            <h6 className='text-center'>0</h6>
                                                                ) :   <h6 className='text-center'>{profileData?.[0]?.FollowerCount}</h6>}
                                                    
                                                   
                                                    <p className='text-center'>Followers</p>
                                                </Col>
                                                <Col className='square border-start'>
                                                {profileData?.[0]?.PostCount === null ? (
                                                            <h6 className='text-center'>0</h6>
                                                                ) :   <h6 className='text-center'>{profileData?.[0]?.PostCount}</h6>}
                                                   
                                                    <p className='text-center'>Portfolio</p>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    <center><button onClick={handleShow} className='editporfile'>Edit Profile</button></center>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Card>
                                    <Card style={{borderStyle:'none',borderTopLeftRadius:"35px",borderTopRightRadius:"opx"}}>
                                        <div className='m-3'>
                                            <span><b>About</b></span>
                                            <p>
                                                {profileData?.[0]?.AboutMe}
                                            </p>
                                            <span><b>Experience:</b></span>
                                            <p>
                                                {profileData?.[0]?.ExperienceName}
                                            </p>
                                            <span><b>Qualification:</b></span>
                                            <p>{profileData?.[0]?.QualificationName}
                                            </p>
                                            <span><b>City</b></span>
                                            <p>
                                                {profileData?.[0]?.City}
                                            </p>
                                        </div>
                                    </Card>
                                </Col> */}

                <Col sm={8} className="square border-end">
                  <div
                    style={{
                      backgroundColor: "#efefef",
                      height: "56vh",
                      borderTopLeftRadius: "35px",
                      borderTopRightRadius: "35px",
                      borderBottomRightRadius: "280px 300px",
                    }}
                  >
                    <Card
                      className="order-detail-profile   d-none d-sm-block"
                      style={{
                        backgroundColor: "#efefef",
                        borderRadius: "35px",
                        borderStyle: "none",
                      }}
                    >
                      <center>
                        <img
                          src={`https://wiraaback.azurewebsites.net/api/v1/${profileData?.[0]?.ProfilePic}`}
                          alt=""
                          className=""
                          style={{
                            height: "70px",
                            width: "70px",
                            marginTop: "20px",
                          }}
                        />
                        <h6 className="mt-4">
                          <b>
                            {profileData?.[0]?.FirstName}{" "}
                            {profileData?.[0]?.LastName}{" "}
                          </b>
                        </h6>
                        <p>{profileData?.[0]?.OccupationName}</p>
                      </center>
                      <Container>
                        <Row className="mb-3">
                          <Col
                            className="square border-end"
                            style={{ borderRight: "1px solid black" }}
                          >
                            {" "}
                            {profileData?.[0]?.FollowerCount === null ? (
                              <h6 className="text-center">0</h6>
                            ) : (
                              <h6 className="text-center">
                                {profileData?.[0]?.FollowerCount}
                              </h6>
                            )}
                            <p className="text-center">Followers</p>
                          </Col>
                          <Col className="square border-start">
                            {profileData?.[0]?.PostCount === null ? (
                              <h6 className="text-center">0</h6>
                            ) : (
                              <h6 className="text-center">
                                {profileData?.[0]?.PostCount}
                              </h6>
                            )}

                            <p className="text-center">Portfolio</p>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <center>
                              <button
                                style={{ border: "none", padding: "4px 14px" }}
                                onClick={handleShow1}
                                className="editporfile"
                              >
                                {" "}
                                <span style={{ fontSize: "16px" }}>
                                  {" "}
                                  Edit Profile
                                </span>{" "}
                              </button>
                            </center>
                          </Col>
                        </Row>
                      </Container>
                    </Card>

                    <Card
                      className="order-detail-profile    d-block d-sm-none"
                      style={{
                        backgroundColor: "#efefef",
                        borderRadius: "35px",
                        border: "none",
                        borderBottomLeftRadius: "0px",
                        marginTop: "80px",
                      }}
                    >
                      <center>
                        <img
                          src={`https://wiraaback.azurewebsites.net/api/v1/${profileData?.[0]?.ProfilePic}`}
                          alt=""
                          className=""
                          style={{
                            height: "70px",
                            width: "70px",
                            marginTop: "20px",
                          }}
                        />
                        <h6 className="mt-4">
                          <b>
                            {profileData?.[0]?.FirstName}{" "}
                            {profileData?.[0]?.LastName}{" "}
                          </b>
                        </h6>
                        <p>{profileData?.[0]?.OccupationName}</p>
                      </center>
                      <Container>
                        <Row className="mb-3">
                          <Col className="square border-end">
                            {" "}
                            {profileData?.[0]?.FollowerCount === null ? (
                              <h6 className="text-center">0</h6>
                            ) : (
                              <h6 className="text-center">
                                {profileData?.[0]?.FollowerCount}
                              </h6>
                            )}
                            <p className="text-center">Followers</p>
                          </Col>
                          <Col className="square border-start">
                            {profileData?.[0]?.PostCount === null ? (
                              <h6 className="text-center">0</h6>
                            ) : (
                              <h6 className="text-center">
                                {profileData?.[0]?.PostCount}
                              </h6>
                            )}

                            <p className="text-center">Portfolio</p>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <center>
                              <button
                                style={{ border: "none", padding: "4px 12px" }}
                                onClick={handleShow1}
                                className="editporfile"
                              >
                                {" "}
                                <span style={{ fontSize: "16px" }}>
                                  {" "}
                                  Edit Profile
                                </span>
                              </button>
                            </center>
                          </Col>
                        </Row>
                      </Container>
                    </Card>

                    {/* <Card style={{ border: 'none', borderRadius: "35px" }}>
                                            <div className='m-4'>
                                                <span><b>About:</b></span>
                                                <p>
                                                    {profileData?.[0]?.AboutMe}
                                                </p>
                                                <span><b>Experience:</b></span>
                                                <p>
                                                    {profileData?.[0]?.ExperienceName}
                                                </p>
                                                <span><b>Qualification:</b></span>
                                                <p>{profileData?.[0]?.QualificationName}
                                                </p>
                                                <span><b>City:</b></span>
                                                <p>
                                                    {profileData?.[0]?.City}
                                                </p>
                                            </div>
                                        </Card> */}
                    <div className="tab-content">
                      <Card
                        style={{ borderStyle: "none", borderRadius: "35px" }}
                      >
                        <div className="mt-4 pt-2">
                          <div
                            className={`tab  ${
                              activeTab === "Tab1" ? "active" : ""
                            }`}
                            onClick={() => handleClick2("Tab1")}
                          >
                            <button
                              className={`Explore  ${
                                activeTab === "Tab1" ? "Explore-active " : ""
                              }`}
                            >
                              Info
                            </button>
                          </div>
                          <div
                            className={`tab  ${
                              activeTab === "Tab2" ? "active" : ""
                            }`}
                            onClick={() =>
                              handleClick2(
                                "Tab2",
                                profileData?.[0]?.UsersProfileID
                              )
                            }
                          >
                            <button
                              className={`Explore  ${
                                activeTab === "Tab2" ? "Explore-active " : ""
                              }`}
                            >
                              Portfoilo
                            </button>
                          </div>
                        </div>
                        {activeTab === "Tab1" && (
                          <>
                            <div className="m-4">
                              <span
                                style={{ fontSize: "16px", padding: "0px " }}
                              >
                                <b>About:</b>
                              </span>
                              <p> {profileData?.[0]?.AboutMe} </p>

                              <span style={{ fontSize: "16px" }}>
                                <b>Experience:</b>
                              </span>
                              <p>{profileData?.[0]?.ExperienceName} </p>

                              <span style={{ fontSize: "16px" }}>
                                <b>Qualification:</b>
                              </span>
                              <p>{profileData?.[0]?.QualificationName}</p>

                              <span style={{ fontSize: "16px" }}>
                                <b>City:</b>
                              </span>
                              <p>{profileData?.[0]?.City}</p>
                            </div>
                          </>
                        )}

                        {activeTab === "Tab2" && (
                          <>
                            <div
                              className="m-3"
                              style={{ backgroundColor: "white" }}
                            >
                              <center>
                                <p style={{ fontSize: "20px" }} className="m-5">
                                  {getError}
                                </p>
                              </center>
                              {portfolios &&
                                portfolios.map((userpost) => (
                                  <div>
                                    <MdDelete
                                      size={30}
                                      style={{ float: "inline-end" }}
                                      onClick={() =>
                                        deleteportFolio(userpost.PostID)
                                      }
                                    />
                                    <center>
                                      <div
                                        style={{
                                          height: "200px",
                                          width: "200px",
                                          border: "2px solid red",
                                        }}
                                      >
                                        <img
                                          src={`https://wiraaback.azurewebsites.net/${userpost.ImageURL}`}
                                          alt="Avatar"
                                          className=" m-1"
                                        />
                                      </div>
                                    </center>

                                    <center>
                                      <table className="mt-2">
                                        <tbody>
                                          <tr>
                                            <td style={{ width: "50%" }}>
                                              <p className="small ">
                                                {/* <img src={test1} alt="A" className="m-1" style={{ width: "20px", height: '20px', borderRadius: "50px" }} /> */}
                                                {/* <img src={test} alt="a" className=" " width={'20px'} /> */}
                                                <b>
                                                  {userpost.FirstName}
                                                  {userpost.LastName}
                                                </b>
                                              </p>
                                            </td>
                                            <td className="frloo">
                                              {
                                                userpost.UserLiked !== 0 ? (
                                                  <IoHeart
                                                    fill="red"
                                                    style={{
                                                      cursor: "pointer",
                                                    }}
                                                    fontSize="20px"
                                                  />
                                                ) : (
                                                  // <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" onClick={() => { Likeadd(data?.PostID); console.log("data?.id", data?.PostID) }} className='bi bi-heart-fill' viewBox="0 0 16 16" style={{ cursor: "pointer" }}>
                                                  //     <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                                  // </svg>
                                                  <IoHeartOutline
                                                    style={{
                                                      cursor: "pointer",
                                                    }}
                                                    fontSize="20px"
                                                  />
                                                )
                                                // <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" onClick={() => { Likeadd(data?.PostID); console.log("data?.id", data?.PostID) }} className='bi bi-heart-fill' viewBox="0 0 16 16" style={{ cursor: "pointer" }}>
                                                //     <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                                // </svg>
                                              }
                                              <span className="small">
                                                {userpost.LikeCount}
                                              </span>
                                              {userpost.CommentCount !== 0 ? (
                                                <>
                                                  {" "}
                                                  <IoChatboxOutline
                                                    style={{
                                                      cursor: "pointer",
                                                    }}
                                                    fontSize="20px"
                                                  />
                                                  <span className="small">
                                                    {userpost.CommentCount}{" "}
                                                  </span>
                                                </>
                                              ) : (
                                                <>
                                                  <IoChatboxOutline
                                                    style={{
                                                      cursor: "pointer",
                                                    }}
                                                    fontSize="20px"
                                                  />
                                                  <span className="">0</span>
                                                </>
                                              )}
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </center>
                                  </div>
                                ))}
                            </div>
                          </>
                        )}
                      </Card>
                    </div>
                  </div>
                </Col>

                <Col md={4} className="d-none d-sm-block">
                  <h6
                    style={{
                      fontSize: "20px",
                      marginTop: "20px",
                      marginLeft: "30px",
                    }}
                  >
                    <b>Explore</b>
                  </h6>
                  {Freelancer &&
                    Freelancer?.map((freelist) => (
                      <Card
                        className="mt-3"
                        style={{
                          border: "none",
                          backgroundColor: "#efefef",
                          borderRadius: "10px",
                        }}
                      >
                        <div className="order-details-container mt-2">
                          <img
                            style={{ height: "60px", width: "60px" }}
                            src={test}
                            alt=""
                            className="order-details-img m-3"
                          />
                          <div className="order-details-container-text">
                            <h6>
                              <b>
                                {freelist?.FirstName} {freelist?.LastName}
                              </b>
                            </h6>
                            <br />
                            <p>{freelist.OccupationName}</p>
                          </div>
                        </div>
                        <Container>
                          <Row className="mb-3">
                            <Col className="square border-end">
                              {freelist?.PostCount === null ? (
                                <h6 className="text-center">0</h6>
                              ) : (
                                <h6 className="text-center">
                                  {freelist?.PostCount}
                                </h6>
                              )}

                              <p
                                style={{
                                  fontSize: "15px",
                                  color: "grey",
                                  fontWeight: 600,
                                }}
                                className="text-center"
                              >
                                Followers
                              </p>
                            </Col>
                            <Col className="square border-start">
                              {freelist?.FollowerCount === null ? (
                                <h6 className="text-center">0</h6>
                              ) : (
                                <h6 className="text-center">
                                  {freelist.FollowerCount}
                                </h6>
                              )}
                              <p
                                style={{
                                  fontSize: "15px",
                                  color: "grey",
                                  fontWeight: 600,
                                }}
                                className="text-center"
                              >
                                Portfolio
                              </p>
                            </Col>
                          </Row>
                        </Container>
                      </Card>
                    ))}
                </Col>
                <Col sm={1}></Col>
              </Row>
            </Container>
            <Modal show={show} onHide={handleClose} className="" syu>
              <Modal.Body className="mt-5">
                <div>
                  <Form.Group
                    className="mb-2"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>About: </Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Please enter a headline"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3 mt-4"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Experience:</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Please enter work Experience"
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3 mt-4"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Row>
                      <Col sm={6}>
                        <Form.Label>Qualification:</Form.Label>
                        <select
                          name="cars"
                          id="cars"
                          style={{
                            width: "-webkit-fill-available",
                            height: "40px",
                          }}
                        >
                          <option value="Business">Your Qualification</option>
                          <option value="IT">IT</option>
                          <option value="Marketing">Marketing</option>
                          <option value="Lifestyle">Lifestyle</option>
                        </select>
                      </Col>
                      <Col sm={6}>
                        <Form.Label>City:</Form.Label>
                        <select
                          name="cars"
                          id="cars"
                          style={{
                            width: "-webkit-fill-available",
                            height: "40px",
                          }}
                        >
                          <option value="Business"> Your City</option>
                          <option value="IT">IT</option>
                          <option value="Marketing">Marketing</option>
                          <option value="Lifestyle">Lifestyle</option>
                        </select>
                      </Col>
                    </Row>
                    <center>
                      <button
                        className="mt-4"
                        style={{
                          padding: "2px",
                          borderRadius: "8px",
                          width: "25%",
                          color: "white",
                          borderStyle: "none",
                          backgroundColor: "#008080",
                        }}
                      >
                        {" "}
                        Done
                      </button>
                    </center>
                  </Form.Group>
                </div>
              </Modal.Body>
            </Modal>
            <Modal show={show1} onHide={handleClose1} style={{}}>
              <Modal.Body>
                <form onSubmit={handleSubmit}>
                  <div>
                    <center>
                      <div onClick={handleimageClick}>
                        {selectedImage ? (
                          <img
                            src={selectedImage}
                            alt=""
                            style={{
                              height: "70px",
                              width: "70px",
                              borderRadius: "50%",
                              marginBottom: "20px",
                            }}
                          />
                        ) : (
                          <img
                            src={test1}
                            alt=""
                            name
                            style={{
                              height: "70px",
                              width: "70px",
                              borderRadius: "50%",
                            }}
                          />
                        )}
                        <span
                          style={{
                            fontSize: "20px",
                            marginTop: "12px",
                            marginLeft: "50px",
                          }}
                        >
                          Change Image
                        </span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleInputChange}
                          name="files"
                          style={{ display: "none" }}
                          ref={inputRef}
                        />
                      </div>
                    </center>

                    <Form.Group
                      className="mb-1 "
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Row>
                        <Form.Label>Name: </Form.Label>
                        <Col sm={6}>
                          <Form.Group
                            className="mb-2"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Control
                              placeholder="Frist Name"
                              name="fName"
                              onChange={handleInputChange}
                            />
                          </Form.Group>
                        </Col>
                        <Col sm={6}>
                          <Form.Group
                            className="mb-2"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Control
                              placeholder="Last Name"
                              name="lName"
                              onChange={handleInputChange}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                    </Form.Group>
                  </div>
                  <div>
                    <Form.Group
                      className="mb-1"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>About: </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Please enter a headline"
                        name="about"
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-1 mt-1"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Experience:</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Please enter work Experience"
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-1 mt-1"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Row>
                        <Col sm={6}>
                          <Form.Label>Qualification:</Form.Label>
                          <select
                            name="qualificationId"
                            style={{
                              height: "35px",
                              width: "100%",
                              border: "1px solid lightgrey",
                              borderRadius: "8px",
                            }}
                          >
                            {AllQualificationListt &&
                              AllQualificationListt?.map((quallist) => (
                                <option value={quallist?.QualificationID}>
                                  {quallist?.QualificationName}
                                </option>
                              ))}
                          </select>
                        </Col>
                        <Col sm={6}>
                          <Form.Label>City:</Form.Label>
                          <select
                            name="cityId"
                            style={{
                              height: "35px",
                              width: "100%",
                              border: "1px solid lightgrey",
                              borderRadius: "8px",
                            }}
                          >
                            {allCity &&
                              allCity?.map((quallist) => (
                                <option value={quallist?.CityID}>
                                  {quallist?.CityName}
                                </option>
                              ))}
                          </select>
                        </Col>
                      </Row>
                      <center>
                        <button
                          className="mt-4"
                          style={{
                            padding: "2px",
                            borderRadius: "8px",
                            width: "25%",
                            color: "white",
                            borderStyle: "none",
                            backgroundColor: "#008080",
                          }}
                        >
                          {" "}
                          Done
                        </button>
                      </center>
                    </Form.Group>
                  </div>
                </form>
              </Modal.Body>
            </Modal>
          </Col>
        </Row>
      </Container>
      <Phoneviewfooter />
    </>
  );
}

export default Editprofile;
