import React, { useState, useEffect } from "react";
import { Card, Modal, Container, Row, Col, Form } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import Auth from "../Auth.model";
import { TextField } from "@mui/material";
import test1 from "../../asset/image/test1.png";
import { IoHeart, IoHeartOutline, IoChatboxOutline } from "react-icons/io5";
import ConvertImage from "../../lib/convertImage";

function ProtfolioCard(props) {
  const blobUrl =
    "https://wiraastorage.blob.core.windows.net/images/portfolioImage-1702208528349-logo192.png";

  const { data } = props;
  const [isHovered1, setIsHovered1] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [allcommentss, setallcomment] = useState();
  const [outid, setOutid] = useState([]);

  const [formData, setFormData] = useState({
    comment: "",
    postId: "",
  });

  const fetchdata = async (PostID) => {
    openCheckoutModal(PostID);
    //console.log(outid)
    const postId = PostID;
    Auth.Allcomment({ postId })
      .then((res) => {
        setallcomment(res?.data);
      })
      .catch((error) => {
        console.log("error => ", error);
      });
  };
  const openCheckoutModal = (PostID) => {
    setOutid(PostID);

    handleShow(true);
  };
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append("userProfileId", localStorage.getItem("userProfileId"));
    Auth.addcomments(formData)
      .then((res) => {
        // setallcomment([...allcommentss,res.data])

        alert("comment Add");
        event.target.reset();

        /////////////////////////////////////////////////////////////////
        Auth.Allcomment({ postId: outid })
          .then((res) => {
            setallcomment(res?.data);
          })
          .catch((error) => {
            console.log("error => ", error);
          });
      })
      .catch((error) => {
        console.log("error => ", error);
      });
  };
  const Likeadd = async (id) => {
    //console.log(outid)
    const formData = new FormData();
    formData.append("postId", id);
    formData.append("userProfileId", localStorage.getItem("userProfileId"));
    Auth.AddLike(formData)
      .then((res) => {
        // setallcomment(res.data)
        //console.log(res)
      })
      .catch((error) => {
        console.log("error => ", error);
      });
  };

  return (
    <>
      <Card
        style={{
          borderStyle: "none",
          flex: "1 1 30%",
          border: "none",
          margin: "8px",
        }}
        onMouseEnter={() => setIsHovered1(true)}
        onMouseLeave={() => setIsHovered1(false)}
      >
        <div
          className="containerhover"
          style={{
            border: isHovered1 ? "2px solid #008080" : "0px solid transparent",
            borderRadius: "5px",
          }}
          onClick={() => fetchdata(data.PostID)}
        >
          {/* <img src={`https://wiraaback.azurewebsites.net/api/v1/UserImages/Post/CropImage/${data.ImageURL}`} alt="Avatar" className="containerhoverimage " style={{ height: '200px', width: "100%", }} /> */}
          <img
            src={test1}
            alt="Avatar"
            className="containerhoverimage "
            style={{ height: "200px", width: "100%", cursor: "pointer" }}
          />
          <ConvertImage blobUrl={blobUrl} />

          {/* <div className="overlay">
                    <div className="containerhovertext">
                        {data?.AboutMe}
                    </div>
                </div> */}
        </div>
        <table className="mt-2">
          <tbody>
            <tr>
              <td style={{ width: "50%" }}>
                <p className="small ">
                  {/* <img src={test1} alt="A" className="m-1" style={{ width: "20px", height: '20px', borderRadius: "50px" }} /> */}
                  <img
                    src={`https://wiraaback.azurewebsites.net/${data.ImageURL}`}
                    alt="a"
                    className=" "
                    style={{
                      height: "20px",
                      width: "20px",
                      marginRight: "10px",
                      borderRadius: "20px",
                    }}
                  />
                  <b>
                    {data.FirstName}
                    {data.LastName}
                  </b>
                </p>
              </td>
              <td className="frloo">
                {data?.UserLiked !== 0 ? (
                  <IoHeart
                    onClick={() => {
                      Likeadd(data?.PostID);
                      console.log("data?.id", data?.PostID);
                    }}
                    fill="red"
                    style={{ cursor: "pointer" }}
                    fontSize="20px"
                  />
                ) : (
                  <IoHeartOutline
                    onClick={() => {
                      Likeadd(data?.PostID);
                      console.log("data?.id", data?.PostID);
                    }}
                    style={{ cursor: "pointer" }}
                    fontSize="20px"
                  />
                )}
                <span className="small">{data.LikeCount}</span>
                {data.CommentCount === null ? (
                  <>
                    <IoChatboxOutline
                      style={{ cursor: "pointer" }}
                      fontSize="20px"
                    />
                    <span className="  " style={{ marginLeft: "2px" }}>
                      0
                    </span>
                  </>
                ) : (
                  <>
                    <IoChatboxOutline
                      style={{ cursor: "pointer" }}
                      fontSize="20px"
                    />
                    <span className="small " style={{ marginLeft: "2px" }}>
                      {data.CommentCount}{" "}
                    </span>
                  </>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </Card>

      <Modal show={show} onHide={handleClose} size="md">
        <Modal.Body>
          <Container>
            <Row>
              <Col xs={12} sm={12}>
                <p className="small mt-1">
                  {data?.Description}{" "}
                  {data.UserLiked !== 0 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="red"
                      className="bi bi-heart-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-heart-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                      />
                    </svg>
                  )}{" "}
                  <span>{data?.LikesCount}</span>
                </p>

                <div style={{ height: "70vh", overflowY: "scroll" }}>
                  {allcommentss &&
                    allcommentss?.map((commentlist) => (
                      <div style={{ height: "30px" }}>
                        <p>
                          {" "}
                          {commentlist?.FirstName} - {commentlist?.Comment}
                        </p>
                      </div>
                    ))}
                </div>

                <div
                  style={{
                    borderRadius: "20px",
                    position: "relative",
                    marginBottom: "0px",
                  }}
                  className="mt-2"
                >
                  <form onSubmit={handleSubmit}>
                    <input
                      type="number"
                      style={{ display: "none" }}
                      name="postId"
                      value={outid}
                    />

                    <InputGroup className="mb-3 rounded-circle">
                      <Form.Control
                        placeholder="Comment here.. "
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                        onChange={handleInputChange}
                        name="comment"
                      />
                      <button
                        id="basic-addon2"
                        className="btn"
                        type="submit"
                        style={{ borderColor: "#efefef", borderWidth: "2px" }}
                      >
                        Post
                      </button>
                    </InputGroup>
                  </form>
                </div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
         
      </Modal>
    </>
  );
}
export default ProtfolioCard;
