import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
// import Button from 'react-bootstrap/Button';
import Sidenav from "../layout/Sidenav";
import Topnav from "../layout/topnav";
import test from "../../../asset/image/test.JPG";
import "../../../asset/css/dashboard.css";
import Modal from "react-bootstrap/Modal";
// import test2 from "../../../asset/image/test2.png";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import OrderModal from "../../../modal/Order.modal";
import Phoneviewfooter from "../../../Layout/Phoneviewfooter";
import PeopleModal from "../../../modal/People.modal";
import Desktoploginfooter from "../../unguarded_page/Desktoploginfooter";
import ProfileModal from "../../../modal/Profile.modal";
import { RiShareBoxLine } from "react-icons/ri";

function Orderdetails() {
  const params = useParams();
  const [interestedPeople, setInterestedPeople] = useState();
  const [getError, seterror] = useState("");
  useEffect(() => {
    console.log(params, "Orderid");
    const orderId = params.id;
    OrderModal.Interest({ orderId })
      .then((response) => {
        if (response.status === 404) {
          console.log("respone.data.status");
        } else {
          setInterestedPeople(response.data);
        }
      })
      .catch((error) => {
        if (error.response?.status === 404) {
          seterror("No Data Found");
        } else {
          seterror(error.message);
        }
      })
      .catch((error) => {
        console.log("error => ", error);
      });
  }, []);
  const [activeTab, setActiveTab] = useState("Tab1");

  const handleClick = (tab) => {
    setActiveTab(tab);
  };
  // const id = params.id;
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);
  const [answerOrders, setAnswerOrders] = useState();
  const Showanswer = async (InterestedUserId) => {
    const orderId = params.id;
    console.log(InterestedUserId);
    const proUserId = InterestedUserId;
    OrderModal.InterestAnswer({ orderId }, { proUserId })
      .then((response) => {
        console.log(response);
        setAnswerOrders(response?.data);

        handleShow(true);
      })
      .catch((error) => {
        console.log("error => ", error);
      })
      .catch((error) => {
        console.log("error => ", error);
      });
  };
  const Getpeople = async (InterestedUserId) => {
    console.log(InterestedUserId);
    const userId = InterestedUserId;
    PeopleModal.Userporfiolio({ userId })
      .then((response) => {
        console.log(response.data, "dagayyyyy");
        setAnswerOrders(response?.data);

        handleShow(true);
        if (response.data) {
        }
      })
      .catch((error) => {
        console.log("error => ", error);
      })
      .catch((error) => {
        console.log("error => ", error);
      });
  };
  const [intprofileData, setIntProfileData] = useState([]);
  const fetchdata = async (InterestedUserId) => {
    const userId = localStorage.getItem("UserID");
    ProfileModal.ClientProfile({ userId })
      .then((response) => {
        console.log(response.data);
        setIntProfileData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <Container fluid className="dashboard-conatiner-top">
        <Row>
          <Col sm={1} className="d-none d-sm-block">
            <Sidenav activekey="order" />
          </Col>

          <Col
            sm={8}
            xs={12}
            style={{ padding: "0px" }}
            className="dashboard-conatiner-top-row "
          >
            <Container className="square border border-bottom-0">
              <Topnav activeLink="Order" />
              <Row className="mt-2">
                <Col
                  sm={8}
                  style={{ padding: "0px" }}
                  className="square border-end"
                >
                  <div
                    className="m-2 d-none d-sm-block "
                    style={{ fontSize: "12px", marginTop: "12vh" }}
                  >
                    <Link to={`/Orderdetailsbreief/${params.id}`}>
                      <button
                        style={{ marginLeft: "10px", border: "1px solid grey" }}
                        className="order-details-requirements"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="svgg bi bi-person-plus-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        </svg>
                        <span>Requirements</span>{" "}
                      </button>
                    </Link>
                    {/* <button style={{ marginRight: '10px', border: '1px solid grey' }} className='order-details-shortlisted'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className=" svgg bi bi-star" viewBox="0 0 16 16">
                                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                        </svg> <span>Shortlisted</span> </button> */}
                  </div>
                  <center>
                    <p style={{ fontSize: "30px" }}>{getError}</p>
                  </center>

                  {interestedPeople &&
                    interestedPeople?.map((listintrest) => (
                      <Card
                        className="m-3 p-2"
                        style={{
                          borderRadius: "5px",
                          backgroundColor: "#efefef",
                          border: "none",
                          cursor: "pointer",
                          boxShadow:
                            "0px 0px 10px 5px rgba(192, 192, 192, 0.5)",
                        }}
                      >
                        <div className="order-details-container">
                          <img
                            src={test}
                            alt=""
                            className="order-details-img m-3"
                            s
                          />
                          <div
                            className="order-details-container-text"
                            onClick={() => {
                              fetchdata(listintrest.InterestedUserId);
                            }}
                          >
                            <p>
                              <b>
                                {listintrest?.FirstName} {listintrest?.LastName}
                              </b>
                            </p>
                            <br />
                            <p style={{ color: "grey" }}>
                              {listintrest?.OccupationName}
                            </p>
                          </div>
                          {/* <svg style={{ flo }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                                                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                                                        </svg> */}
                        </div>

                        <div className="order-details-contact">
                          <div
                            style={{
                              width: "50%",
                              border: "2px solid lightgrey",
                              padding: "2px",
                            }}
                            onClick={() => {
                              Showanswer(listintrest.InterestedUserId);
                            }}
                          >
                            <svg
                              style={{ color: "grey", paddingRight: "5px" }}
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-translate"
                              viewBox="0 0 16 16"
                            >
                              <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z" />
                              <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z" />
                            </svg>
                            <span style={{ fontSize: "12px", color: "grey" }}>
                              Answer{" "}
                            </span>
                          </div>
                          <div
                            style={{
                              width: "50%",
                              border: "2px solid lightgrey",
                              padding: "2px",
                            }}
                          >
                            <svg
                              style={{ color: "grey", paddingRight: "5px" }}
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-wechat"
                              viewBox="0 0 16 16"
                            >
                              <path d="M11.176 14.429c-2.665 0-4.826-1.8-4.826-4.018 0-2.22 2.159-4.02 4.824-4.02S16 8.191 16 10.411c0 1.21-.65 2.301-1.666 3.036a.324.324 0 0 0-.12.366l.218.81a.616.616 0 0 1 .029.117.166.166 0 0 1-.162.162.177.177 0 0 1-.092-.03l-1.057-.61a.519.519 0 0 0-.256-.074.509.509 0 0 0-.142.021 5.668 5.668 0 0 1-1.576.22ZM9.064 9.542a.647.647 0 1 0 .557-1 .645.645 0 0 0-.646.647.615.615 0 0 0 .09.353Zm3.232.001a.646.646 0 1 0 .546-1 .645.645 0 0 0-.644.644.627.627 0 0 0 .098.356Z" />
                              <path d="M0 6.826c0 1.455.781 2.765 2.001 3.656a.385.385 0 0 1 .143.439l-.161.6-.1.373a.499.499 0 0 0-.032.14.192.192 0 0 0 .193.193c.039 0 .077-.01.111-.029l1.268-.733a.622.622 0 0 1 .308-.088c.058 0 .116.009.171.025a6.83 6.83 0 0 0 1.625.26 4.45 4.45 0 0 1-.177-1.251c0-2.936 2.785-5.02 5.824-5.02.05 0 .1 0 .15.002C10.587 3.429 8.392 2 5.796 2 2.596 2 0 4.16 0 6.826Zm4.632-1.555a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0Zm3.875 0a.77.77 0 1 1-1.54 0 .77.77 0 0 1 1.54 0Z" />
                            </svg>
                            <span style={{ fontSize: "12px", color: "grey" }}>
                              chat
                            </span>
                          </div>
                        </div>
                      </Card>
                    ))}
                </Col>
                <Col sm={4}>
                  <Card
                    className="order-detail-profile   d-none d-sm-block"
                    style={{
                      backgroundColor: "#efefef",
                      borderRadius: "35px",
                      borderStyle: "none",
                    }}
                  >
                    <center style={{ position: "relative" }}>
                      <img
                        src={`https://wiraaback.azurewebsites.net/api/v1/${intprofileData?.[0]?.ProfilePic}`}
                        alt=""
                        className=""
                        style={{
                          height: "70px",
                          width: "70px",
                          marginTop: "20px",
                        }}
                      />
                      <Link
                        to={`/Profiledetails/${intprofileData?.[0]?.UserID}`}
                      >
                        <RiShareBoxLine
                          size={30}
                          style={{
                            position: "absolute",
                            top: 0,
                            right: 0,
                            margin: "10px",
                          }}
                        />
                      </Link>
                      <h6 className="mt-4">
                        <b>
                          {intprofileData?.[0]?.FirstName}{" "}
                          {intprofileData?.[0]?.LastName}{" "}
                        </b>
                      </h6>
                      <p>{intprofileData?.[0]?.OccupationName}</p>
                    </center>
                    <Container>
                      <Row className="mb-3">
                        <Col
                          className="square border-end"
                          style={{ borderRight: "1px solid black" }}
                        >
                          {" "}
                          {intprofileData?.[0]?.FollowerCount === null ? (
                            <h6 className="text-center">0</h6>
                          ) : (
                            <h6 className="text-center">
                              {intprofileData?.[0]?.FollowerCount}
                            </h6>
                          )}
                          <p className="text-center">Followers</p>
                        </Col>
                        <Col className="square border-start">
                          {intprofileData?.[0]?.PostCount === null ? (
                            <h6 className="text-center">0</h6>
                          ) : (
                            <h6 className="text-center">
                              {intprofileData?.[0]?.PostCount}
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
                                Edit Profile{" "}
                              </span>{" "}
                            </button>
                          </center>
                        </Col>
                      </Row>
                    </Container>
                  </Card>

                  <div className="tabs-container d-none d-sm-block">
                    <Container></Container>
                    <Card style={{ border: "none", borderRadius: "35px" }}>
                      <div className="m-4">
                        <span>
                          <b>About:</b>
                        </span>
                        <p>{intprofileData?.[0]?.AboutMe}</p>
                        <span>
                          <b>Experience:</b>
                        </span>
                        <p>{intprofileData?.[0]?.ExperienceName}</p>
                        <span>
                          <b>Qualification:</b>
                        </span>
                        <p>{intprofileData?.[0]?.QualificationName}</p>
                        <span>
                          <b>City:</b>
                        </span>
                        <p>{intprofileData?.[0]?.City}</p>
                      </div>
                    </Card>
                  </div>

                  <hr
                    className="d-none d-sm-block"
                    style={{ border: "2px solid grey" }}
                  />

                  {/* <div style={{ color: 'grey', fontSize: '16px' }} className='mt-3 p-2 d-none d-sm-block'>
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
                                    </div> */}
                  <Desktoploginfooter />
                </Col>
              </Row>
            </Container>

            <Modal
              show={show}
              onHide={handleClose}
              size="md"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title>
                  <span
                    style={{
                      color: "#008080",
                      fontSize: "20px",
                      fontWeight: 600,
                    }}
                  >
                    Screening Answers
                  </span>
                </Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <div>
                  <h6>
                    How many years of experience do you have in this field ?{" "}
                  </h6>
                  <p style={{ color: "grey" }}>
                    Ans - {answerOrders?.[0].YearsOfExperience} Years
                  </p>
                  <h6>Are you comfortable with my project budge ?</h6>
                  <p style={{ color: "grey" }}>
                    Ans = {answerOrders?.[0].Comfortable}
                  </p>
                  <h6>
                    We must fill this position urgently. Can you start
                    immediately ?
                  </h6>
                  <p style={{ color: "grey" }}>
                    Ans = {answerOrders?.[0].Immediately}
                  </p>
                  <h6>What is your work availability ?</h6>
                  <p style={{ color: "grey" }}>
                    Ans = {answerOrders?.[0].WorkAvailability}
                  </p>
                </div>
              </Modal.Body>
            </Modal>

            <Modal show={show1} onHide={handleClose1}>
              <Modal.Body>
                <div>
                  <p>Upgrade Pos</p>
                  <div>
                    <p>-Direct contacts with professionals</p>
                    <p>-Featured project listing</p>
                    <p>-Dedicated expert staff</p>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          </Col>
        </Row>
      </Container>
      <Phoneviewfooter />
    </>
  );
}

export default Orderdetails;
