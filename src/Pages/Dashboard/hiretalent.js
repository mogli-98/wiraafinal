import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Sidenav from "./layout/Sidenav";
import Topnav from "./layout/topnav";
import Form from "react-bootstrap/Form";
import Auth from "../../Model/Auth.model";
import { useEffect } from "react";
import Dropdown1 from "./layout/Dropdown1";
import Dropdown2 from "./layout/Dropdown2";
import Accordion from "react-bootstrap/Accordion";
import Switchform from "../../Model/switch.model";
import { helper } from "../../lib/helper";
import { Link } from "react-router-dom";
import Phoneviewfooter from "../../Layout/Phoneviewfooter";
import Desktoploginfooter from "../unguarded_page/Desktoploginfooter";
// import Input from 'cdbreact/dist/components/Input';

function Hiretalent() {
  const [selectedOption, setSelectedOption] = useState([1]);

  const [city, setCity] = useState([]);

  const handleSubmit = (event) => {
    console.log(event);
    event.preventDefault();
    const formdata = new FormData(event.target);

    const mobileNumber = formdata.get("mobile").toString();
    if (mobileNumber.length < 10) {
      formdata.set("mobile", mobileNumber);
    }

    formdata.append("userId", localStorage.getItem("UserID"));
    formdata.append("isFeatured", false);
    Auth.PostRequest(formdata)
      .then((response) => {
        console.log(response.data, "yes data update");
        helper.sweetalert.toast2(
          "Your order request is under review.",
          "Your order request is under review."
        );
        window.location.replace("/Order");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    Switchform.AllCountryList().then((response) => {
      setCity(response.data);
      console.log(response.data);
    });
  }, []);

  const [formData, setFormData] = useState({
    title: "",
    projectDescription: "",
    category: "",
    subCategory: "",
    country: "",
    mobile: "",
    currency: "",
    budgetStart: "",
    budgetEnd: "",
    workType: "",
    isFeatured: "",
    preferService: "",
    duration: "",
    city: "",
    serviceMode: "",
  });

  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);

  const titleMaxWords = 8; // Change this to your maximum word limit
  const descriptionMinWords = 8; // Change this to your minimum word limit

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

    if (
      name === "projectDescription" &&
      value.split(" ").length < descriptionMinWords
    ) {
      setDescriptionError(true);
    } else {
      setDescriptionError(false);
    }
  };
  const [radio1Checked, setRadio1Checked] = useState(false);
  const [radio2Checked, setRadio2Checked] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(false);

  const handleRadioChange = (event) => {
    const { name, checked } = event.target;

    if (name === "radio1") {
      setRadio1Checked(checked);
    } else if (name === "radio2") {
      setRadio2Checked(checked);
    }

    // Activate dropdown if both radio buttons are checked
    setDropdownActive(radio1Checked && radio2Checked);
  };

  const handleDropdownChange = (event) => {
    // Handle dropdown change here
    console.log("Dropdown value:", event.target.value);
  };
  return (
    <>
      <Container fluid className="dashboard-conatiner-top">
        <Row>
          <Col sm={1} className="d-none d-sm-block">
            <Sidenav />
          </Col>

          <Col
            sm={8}
            xs={12}
            style={{ padding: "0px" }}
            className="dashboard-conatiner-top-row "
          >
            <Container className="square border border-bottom-0">
              <Topnav activeLink="Post a Project" />
              <Row>
                <Col sm={8} className="square border-end ">
                  <h4 className="text-center  mb-4 mt-4 d-none d-sm-block ">
                    Find talent your way
                  </h4>

                  <h3
                    style={{ marginTop: "80px" }}
                    className="text-center  mb-4 d-block d-sm-none "
                  >
                    Find talent your way
                  </h3>

                  <form className="m-2" onSubmit={handleSubmit}>
                    <Form.Label style={{ fontSize: "18px" }}>
                      Project Title:{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        fill="red"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                      <span style={{ fontSize: "13px", color: "grey" }}>
                        (Max {titleMaxWords} words)
                      </span>
                    </Form.Label>

                    <Form.Control
                      style={{
                        border: "2px solid lightgrey",
                        fontSize: "16px",
                      }}
                      type="text"
                      placeholder="I am looking for...."
                      required
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                    />

                    {titleError && (
                      <p style={{ color: "red" }} className="error p-2">
                        Title exceeds word limit.
                      </p>
                    )}

                    <Form.Label
                      className="mb-2 mt-4"
                      style={{ fontSize: "18px" }}
                    >
                      Project description{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        fill="red"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>{" "}
                      <span style={{ color: "grey", fontSize: "13px" }}>
                        (Min {descriptionMinWords} words)
                      </span>
                    </Form.Label>

                    <Form.Control
                      style={{
                        border: "2px solid lightgrey",
                        fontSize: "16px",
                      }}
                      as="textarea"
                      rows={3}
                      placeholder="Our requriments are...."
                      required
                      type="text"
                      name="projectDescription"
                      value={formData.description}
                      onChange={handleInputChange}
                    />

                    {descriptionError && (
                      <p style={{ color: "red" }} className="error p-2">
                        Description is too short.
                      </p>
                    )}

                    <Form.Label
                      className="mb-3 mt-4"
                      style={{ fontSize: "18px" }}
                    >
                      Choose a category:{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        fill="red"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    </Form.Label>
                    <Row>
                      <Col sm={6} xs={6}>
                        <Dropdown1 onSelect={setSelectedOption} />
                      </Col>
                      <Col sm={6} xs={6}>
                        <Dropdown2 selectedOption={selectedOption} />
                      </Col>
                    </Row>

                    <Form.Label
                      className="mb-3 mt-4"
                      style={{ fontSize: "18px" }}
                    >
                      Best way for us to reach you ?{" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        fill="red"
                        className="bi bi-star-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                      </svg>
                    </Form.Label>
                    <Row>
                      <Col sm={6} xs={6}>
                        <select
                          id="cars"
                          style={{
                            width: "-webkit-fill-available",
                            height: "40px",
                            border: "2px solid lightgrey",
                            borderRadius: "8px",
                          }}
                          required
                          name="country"
                          placeholder="Category"
                        >
                          <option value="" disabled selected>
                            Select your Country
                          </option>
                          {city &&
                            city.map((categorylist) => (
                              <option value={categorylist.CountryID}>
                                {categorylist.CountryName}
                              </option>
                            ))}
                        </select>
                      </Col>
                      <Col sm={6} xs={6}>
                        <Form.Control
                          className="form-control-lg"
                          style={{
                            border: "2px solid lightgrey",
                            fontSize: "16px",
                          }}
                          type="tel"
                          placeholder="Phone Number"
                          required
                          name="mobile"
                          //    maxLength={10}
                          //    inputMode="numeric"
                          //    pattern="[0-9]*"

                          onChange={(e) => {
                            const numericValue = e.target.value.replace(
                              /\D/g,
                              ""
                            );
                            const truncatedMobileNumber = numericValue.slice(
                              0,
                              10
                            );
                            e.target.value = truncatedMobileNumber;
                          }}
                        ></Form.Control>
                      </Col>
                    </Row>

                    <Form.Group
                      className="mb-3 mt-4"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label style={{ fontSize: "18px" }}>
                        Preferred project budget{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="10"
                          fill="red"
                          className="bi bi-star-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      </Form.Label>
                      <Row>
                        <Col sm={2} xs={6}>
                          <select
                            className="form-control-lg"
                            name="currency"
                            id="cars"
                            requiredstyle={{
                              borderRadius: "5px",
                              border: "2px solid lightgrey",
                              width: "-webkit-fill-available",
                              height: "40px",
                              fontSize: "16px",
                            }}
                          >
                            <option value="INR">INR</option>
                            <option value="Dollar">Dollar</option>
                          </select>
                        </Col>
                        <Col sm={3} xs={6}>
                          <input
                            className="form-control-lg"
                            type="tel"
                            placeholder="e.g 10000"
                            required
                            style={{
                              borderRadius: "5px",
                              border: "2px solid lightgrey",
                              width: "-webkit-fill-available",
                              height: "40px",
                              fontSize: "16px",
                            }}
                            name="budgetStart"
                            maxLength={5}
                            onChange={(e) => {
                              const numericValue = e.target.value.replace(
                                /\D/g,
                                ""
                              );
                              // const truncatedNumber = numericValue.slice(0, 10);
                              e.target.value = numericValue;
                            }}
                          />
                        </Col>
                        <Col sm={1} xs={12}>
                          <p className="mt-2" style={{ fontSize: "18px" }}>
                            to
                          </p>
                        </Col>
                        <Col sm={3} xs={6}>
                          <input
                            required
                            className="form-control-lg"
                            type="tel"
                            placeholder="e.g 20,000"
                            style={{
                              borderRadius: "5px",
                              border: "2px solid lightgrey",
                              width: "-webkit-fill-available",
                              height: "40px",
                              fontSize: "16px",
                            }}
                            name="budgetEnd"
                            maxLength={5}
                            onChange={(e) => {
                              const numericValue = e.target.value.replace(
                                /\D/g,
                                ""
                              );
                              // const truncatedNumber = numericValue.slice(0, 10);
                              e.target.value = numericValue;
                            }}
                          />
                        </Col>
                        <Col sm={3} xs={6}>
                          <select
                            required
                            className="form-control-lg"
                            name="workType"
                            id="cars"
                            style={{
                              borderRadius: "5px",
                              border: "2px solid lightgrey",
                              width: "-webkit-fill-available",
                              height: "40px",
                              fontSize: "16px",
                            }}
                          >
                            <option value="Per Hour">Per Hour</option>
                            <option value="Per Day">Per Day</option>
                            <option value="Complete Work">Complete Work</option>
                          </select>
                        </Col>
                      </Row>
                    </Form.Group>

                    <Accordion
                      style={{ marginBottom: "20px" }}
                      defaultActiveKey="1"
                    >
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          <p style={{ fontSize: "18px" }}>
                            <b>Advanced details</b>
                          </p>{" "}
                        </Accordion.Header>
                        <Accordion.Body>
                          <Form.Group
                            className="mb-2 mt-1"
                            controlId="exampleForm.ControlTextarea1"
                          ></Form.Group>
                          <Form.Group
                            className="mb-2 mt-4"
                            controlId="exampleForm.ControlTextarea1"
                          >
                            <Form.Label
                              style={{ fontSize: "18px" }}
                              className="mb-2"
                            >
                              Project Duration:
                            </Form.Label>
                            <Row>
                              <Col sm={3} xs={6}>
                                <label>
                                  <input
                                    type="radio"
                                    name="duration"
                                    className="card-input-element"
                                  />
                                  <div
                                    style={{
                                      padding: "6px 20px",
                                      borderRadius: "6px",
                                      fontWeight: 500,
                                      border: "1px solid grey",
                                    }}
                                    class="panel panel-default card-input"
                                  >
                                    <div class="panel-heading">1 Month</div>
                                  </div>
                                </label>
                              </Col>
                              <Col sm={3} xs={6}>
                                <label>
                                  <input
                                    type="radio"
                                    name="duration"
                                    class="card-input-element"
                                  />
                                  <div
                                    style={{
                                      padding: "6px 20px",
                                      borderRadius: "6px",
                                      fontWeight: 500,
                                      border: "1px solid grey",
                                    }}
                                    class="panel panel-default card-input"
                                  >
                                    <div class="panel-heading">1-3 Month</div>
                                  </div>
                                </label>
                              </Col>
                              <Col sm={3} xs={6}>
                                <label>
                                  <input
                                    type="radio"
                                    name="duration"
                                    class="card-input-element"
                                  />
                                  <div
                                    style={{
                                      padding: "6px 10px",
                                      borderRadius: "6px",
                                      fontWeight: 500,
                                      border: "1px solid grey",
                                    }}
                                    class="panel panel-default card-input"
                                  >
                                    <div class="panel-heading">3-6 Month</div>
                                  </div>
                                </label>
                              </Col>
                              <Col sm={3} xs={6}>
                                <label>
                                  <input
                                    type="radio"
                                    name="duration"
                                    class="card-input-element"
                                  />
                                  <div
                                    style={{
                                      padding: "6px 10px",
                                      borderRadius: "6px",
                                      fontWeight: 500,
                                      border: "1px solid grey",
                                    }}
                                    class="panel panel-default card-input"
                                  >
                                    <div class="panel-heading">6 Month +</div>
                                  </div>
                                </label>
                              </Col>
                            </Row>
                          </Form.Group>

                          <Form.Group
                            className="mb-3 mt-4"
                            controlId="exampleForm.ControlTextarea1"
                          >
                            <Form.Label
                              style={{ fontSize: "18px" }}
                              className="mb-2"
                            >
                              Preferred service starting date:
                            </Form.Label>
                            <Row>
                              <Col sm={3} xs={6}>
                                <label>
                                  <input
                                    type="radio"
                                    name="preferService"
                                    class="card-input-element"
                                  />
                                  <div
                                    style={{
                                      padding: "6px 20px",
                                      borderRadius: "6px",
                                      fontWeight: 500,
                                      border: "1px solid grey",
                                    }}
                                    class="panel panel-default card-input"
                                  >
                                    <div class="panel-heading">Immediate</div>
                                  </div>
                                </label>
                              </Col>
                              <Col sm={3} xs={6}>
                                <label>
                                  <input
                                    type="radio"
                                    name="preferService"
                                    class="card-input-element"
                                  />
                                  <div
                                    style={{
                                      padding: "6px 20px",
                                      borderRadius: "6px",
                                      fontWeight: 500,
                                      border: "1px solid grey",
                                    }}
                                    class="panel panel-default card-input"
                                  >
                                    <div class="panel-heading">1 Week </div>
                                  </div>
                                </label>
                              </Col>
                              <Col sm={3} xs={6}>
                                <label>
                                  <input
                                    type="radio"
                                    name="preferService"
                                    class="card-input-element"
                                  />
                                  <div
                                    style={{
                                      padding: "6px 20px",
                                      borderRadius: "6px",
                                      fontWeight: 500,
                                      border: "1px solid grey",
                                    }}
                                    class="panel panel-default card-input"
                                  >
                                    <div class="panel-heading">2 Week</div>
                                  </div>
                                </label>
                              </Col>
                              <Col sm={3} xs={6}>
                                <label>
                                  <input
                                    type="radio"
                                    name="preferService"
                                    class="card-input-element"
                                  />
                                  <div
                                    style={{
                                      padding: "6px 20px",
                                      borderRadius: "6px",
                                      fontWeight: 500,
                                      border: "1px solid grey",
                                    }}
                                    class="panel panel-default card-input"
                                  >
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
                      <button
                        style={{
                          height: "40px",
                          borderRadius: "10px",
                          marginBottom: "20px",
                          padding: "0px 50px",
                        }}
                        className="hire-button d-none d-sm-block"
                        type="submit"
                      >
                        <b>Submit</b>
                      </button>

                      <button
                        style={{
                          height: "40px",
                          width: "180px",
                          borderRadius: "10px",
                          marginBottom: "80px",
                        }}
                        className="hire-button d-block d-sm-none"
                        type="submit"
                      >
                        <b>Submit</b>
                      </button>
                    </center>
                  </form>
                </Col>

                <Col sm={4} className="hiretalentlast  d-none d-sm-block">
                  <Card
                    className="hiretalentlast mt-2"
                    style={{ width: "-webkit-fill-available", border: "none" }}
                  >
                    <div
                      style={{
                        backgroundColor: "#efefef",
                        borderRadius: "10px",
                      }}
                    >
                      <div className=" ">
                        <h5 className="hire-text p-4 ">Featured Package</h5>

                        <p
                          className="m-3"
                          style={{ color: "black", paddingLeft: "10px" }}
                        >
                          {" "}
                          Direct chat with upto 50 professional{" "}
                        </p>
                        <p
                          className="m-3"
                          style={{ color: "black", paddingLeft: "10px" }}
                        >
                          10x changes of finding professionals with featured
                          projects
                        </p>
                        <p
                          className="m-3"
                          style={{ color: "black", paddingLeft: "10px" }}
                        >
                          Expert Staff is assigned to understand the
                          requirements
                        </p>
                        <p
                          className="m-3"
                          style={{ color: "black", paddingLeft: "10px" }}
                        >
                          Priority customer support in managing and finding
                          talents
                        </p>

                        <center>
                          <Link to="/Packages">
                            <button
                              className="hire-upgared"
                              style={{
                                fontWeight: 900,
                                height: "40px",
                                margin: "35px",
                              }}
                            >
                              Upgarde
                            </button>
                          </Link>
                        </center>
                      </div>
                    </div>
                  </Card>

                  <Desktoploginfooter />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
      <Phoneviewfooter />
    </>
  );
}

export default Hiretalent;
