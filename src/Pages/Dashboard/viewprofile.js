import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../../asset/css/dashboard.css";
import Sidenav from "./layout/Sidenav";
import Topnav from "./layout/topnav";
import test from "../../asset/image/test.JPG";

import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Auth from "../../Model/Auth.model";
import test1 from "../../asset/image/test1.png";
import ProfileModal from "../../modal/Profile.modal";
import Switchform from "../../Model/switch.model";
import Staticmodal from "../../modal/Static.modal";
import Phoneviewfooter from "../../Layout/Phoneviewfooter";
import { helper } from "../../lib/helper";
function Viewprofile() {
  const inputRef = useRef(null);
  const [AllQualificationListt, setAllQualificationListt] = useState([]);
  const [allCity, setallcity] = useState();
  const [Freelancer, setFreelancer] = useState();
  const [activeTab, setActiveTab] = useState("Tab1");
  const [selectedImage, setSelectedImage] = useState(null);

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
        console.log("Gouravvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv", response.data);
        setAllQualificationListt(response?.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    Staticmodal.AllCountryList()
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
    countryId: "",
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
    const userId = parseInt(localStorage.getItem("UserID"));
    ProfileModal.Updateprofile(form, userId)
      .then((response) => {
        console.log(response.data, "Profession Form Fill Successfuly");
        helper.sweetalert.toast("Your Profile Update Successfully");
        handleClose1(true);
        fetchdata();
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
                        marginTop: "5px",
                        backgroundColor: "#efefef",
                        borderRadius: "35px",
                        borderStyle: "none",
                      }}
                    >
                      <center>
                        <img
                          src={`https://wiraaback.azurewebsites.net/${profileData?.[0]?.ProfilePic}`}
                          alt=""
                          className="mb-3"
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
                        <Row className="mb-3 mt-3">
                          <Col
                            className=""
                            style={{ borderRight: "1px solid lightgrey" }}
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
                            {profileData?.[0]?.OrdersCount === null ? (
                              <h6 className="text-center">0</h6>
                            ) : (
                              <h6 className="text-center">
                                {profileData?.[0]?.OrdersCount}
                              </h6>
                            )}

                            <p className="text-center">Orders</p>
                          </Col>
                        </Row>
                        <Row>
                          <Col className="mt-3 mb-3">
                            <center>
                              <button
                                style={{ border: "none", padding: "6px 20px" }}
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
                      className="order-detail-profile  d-block d-sm-none"
                      style={{
                        backgroundColor: "#efefef",
                        borderRadius: "35px",
                        border: "none",
                        borderBottomLeftRadius: "0px",
                        marginTop: "70px",
                      }}
                    >
                      <center>
                        <img
                          src={`https://wiraaback.azurewebsites.net/${profileData?.[0]?.ProfilePic}`}
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
                                style={{ border: "none", padding: "4px 10px" }}
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

                    <Card style={{ border: "none", borderRadius: "35px" }}>
                      <div className="m-4">
                        <span>
                          <b>About:</b>
                        </span>
                        <p>{profileData?.[0]?.AboutMe}</p>
                        <span>
                          <b>Experience:</b>
                        </span>
                        <p>{profileData?.[0]?.ExperienceName}</p>
                        <span>
                          <b>Qualification:</b>
                        </span>
                        <p>{profileData?.[0]?.QualificationName}</p>
                        <span>
                          <b>Country:</b>
                        </span>
                        <p>{profileData?.[0]?.Country}</p>
                      </div>
                    </Card>
                  </div>
                </Col>

                <Col md={4} className=" d-none d-sm-block">
                  <h6
                    style={{
                      fontSize: "20px",
                      marginTop: "20px",
                      marginLeft: "20px",
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
                            <Col
                              className=""
                              style={{ borderRight: "1px solid lightgrey" }}
                            >
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

                            <Col
                            //  className='square border-start'
                            >
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

            <Modal size="lg" centered show={show1} onHide={handleClose1}>
              <Modal.Header
                style={{ borderBottom: "none", paddingBottom: "0px" }}
                closeButton
              ></Modal.Header>

              <Modal.Body style={{ paddingTop: "0px" }}>
                <form style={{ padding: "0px 60px" }} onSubmit={handleSubmit}>
                  <div>
                    <center>
                      <div onClick={handleimageClick}>
                        {selectedImage ? (
                          <img
                            src={selectedImage}
                            alt=""
                            style={{
                              height: "80px",
                              width: "80px",
                              borderRadius: "50%",
                            }}
                          />
                        ) : (
                          <img
                            src={test1}
                            alt=""
                            name
                            style={{
                              height: "80px",
                              width: "80px",
                              borderRadius: "50%",
                            }}
                          />
                        )}
                        {/* <span style={{ fontSize: '20px', marginTop: "12px", marginLeft: '50px' }}>Change Image</span> */}
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
                        <Card
                          className="mt-4"
                          style={{
                            backgroundColor: "#efefef",
                            border: "none",
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <p
                            className="m-2"
                            style={{
                              fontSize: "15px",
                              marginLeft: "20px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                            }}
                          >
                            {" "}
                            <span> Update your latest image </span>{" "}
                            <span>
                              <Button
                                style={{
                                  color: "white",
                                  backgroundColor: "#008080",
                                  border: "none",
                                  float: "right",
                                  fontWeight: 500,
                                  padding: "4px 30px",
                                  fontSize: "14px",
                                }}
                                class="- btn"
                              >
                                Update Image
                                <input
                                  className="inputselectfile"
                                  type="file"
                                  name="file"
                                />
                              </Button>
                            </span>
                          </p>
                        </Card>

                        <Form.Label className="mt-2">
                          Name:
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="8"
                            height="8"
                            fill="red"
                            className="bi bi-star-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                          </svg>
                        </Form.Label>
                        <Col sm={6}>
                          <Form.Group
                            className="mb-2"
                            controlId="exampleForm.ControlInput1"
                          >
                            <Form.Control
                              placeholder="Frist Name"
                              defaultValue={profileData?.[0]?.FirstName}
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
                              defaultValue={profileData?.[0]?.LastName}
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
                        defaultValue={profileData?.[0]?.AboutMe}
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-1 mt-1"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>
                        Experience:
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="8"
                          height="8"
                          fill="red"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      </Form.Label>
                      <Form.Control
                        required
                        as="textarea"
                        rows={3}
                        name="experience"
                        onChange={handleInputChange}
                        defaultValue={profileData?.[0]?.ExperienceName}
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-1 mt-1"
                      controlId="exampleForm.ControlTextarea1"
                      defaultValue={profileData?.[0]?.ExperienceName}
                    >
                      <Row>
                        <Col sm={6}>
                          <Form.Label className="mt-1">
                            Qualification:
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="8"
                              height="8"
                              fill="red"
                              className="bi bi-star-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                          </Form.Label>
                          <select
                            required
                            name="qualificationId"
                            style={{
                              height: "35px",
                              width: "100%",
                              border: "1px solid lightgrey",
                              borderRadius: "8px",
                            }}
                            // defaultValue={profileData?.[0]?.QualificationName}
                          >
                            <option value="" disabled selected>
                              Select Qualifaction
                            </option>
                            {AllQualificationListt &&
                              AllQualificationListt?.map((quallist) => (
                                <option
                                  value={quallist?.QualificationID}
                                  selected={
                                    quallist.QualificationName ==
                                    profileData?.[0]?.QualificationName
                                  }
                                >
                                  {quallist?.QualificationName}
                                </option>
                              ))}
                          </select>
                        </Col>
                        <Col sm={6}>
                          <Form.Label className="mt-1">
                            Country:
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="8"
                              height="8"
                              fill="red"
                              className="bi bi-star-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                          </Form.Label>
                          <select
                            required
                            name="countryId"
                            style={{
                              height: "35px",
                              width: "100%",
                              border: "1px solid lightgrey",
                              borderRadius: "8px",
                            }}
                          >
                            <option value="" disabled selected>
                              Select Country Name
                            </option>
                            {allCity &&
                              allCity?.map((quallist) => (
                                <option
                                  value={quallist?.CountryID}
                                  selected={
                                    quallist.CountryName ===
                                    profileData?.[0]?.Country
                                  }
                                >
                                  {quallist?.CountryName}
                                </option>
                              ))}
                          </select>
                        </Col>
                      </Row>
                      <center>
                        <button
                          className="mt-4"
                          style={{
                            padding: "6px 40px",
                            borderRadius: "8px",
                            color: "white",
                            borderStyle: "none",
                            backgroundColor: "#008080",
                            fontWeight: "bold",
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

export default Viewprofile;
