import React, { useState } from "react";
import { Card, Modal, Form, Container, Row, Col } from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup';
import Auth from "../Auth.model";
import { TextField } from "@mui/material";
function ProtfolioCard(props) {
    const { data } = props;
    const [isHovered1, setIsHovered1] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [comment, setcomment] = useState();
    const [outid, setOutid] = useState(0)
    const isStatusTrue = useState(
        { isStatusTrue: data.UserLiked === 0 }
    )
    const [formData, setFormData] = useState({
        comment: '',
        postId: '',
    });
    const openCheckoutModal = (id) => {
        setOutid(id);
        handleShow(true);
    }
    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("userProfileId", localStorage.getItem("UserID"));
        Auth.addcomments(formData).then((res) => {
            setcomment(res.data)
            alert("comment ADD")
        })
            .catch((error) => {
                console.log("error => ", error)
            })
    }

    // const isStatusTrue = data.UserLiked === 1;
    return <>
        <Card
            style={{
                borderStyle: "none",
                flex: "1 1 30%",
                border: "none",
                margin: "8px"
            }}
            onMouseEnter={() => setIsHovered1(true)}
            onMouseLeave={() => setIsHovered1(false)}
        >
            <div className="containerhover" style={{ border: isHovered1 ? "2px solid #008080" : "0px solid transparent", borderRadius: "5px" }} onClick={() => (openCheckoutModal(data.PostID))}>
                <img src={`https://wiraa-api.azurewebsites.net/api/v1/UserImages/Post/CropImage/${data.ImageURL}`} alt="Avatar" className="containerhoverimage " style={{ height: '200px', width: "100%", }} />
                <div className="overlay">
                    <div className="containerhovertext">
                        {data?.AboutMe}
                    </div>
                </div>
            </div>
            <table className='mt-2'>
                <tbody>
                    <tr>
                        <td style={{ width: '50%' }}>
                            <p className='small '> <img src={`http://demo.wiraa.com${data.ProfilePic}`} alt="A" className="m-1" style={{ width: "20px", height: '20px', borderRadius: "50px" }} /><b>{data.FirstName}{data.LastName}</b></p>
                        </td>
                        <td className="frloo">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className={`bi bi-heart-fill ${isStatusTrue ? 'svg-default' : 'svg-red'}   `} viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                            </svg>
                            <span className='small'>{data.LikeCount}</span>
                            <ion-icon name="chatbox-ellipses-outline"  ></ion-icon> <span className='small'>{data.CommentCount}</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </Card>
        <Modal show={show} onHide={handleClose} size="lg" >
            <Modal.Body>
                <Container>
                    <Row>
                        <Col>
                        <div>
                            <img src={`http://demo.wiraa.com${data.ImageURL}`} alt="Avatar" className="m-1" style={{ width: "-webkit-fill-available", height: '220px' }} />
                            <div className="frloo">
                                <p><ion-icon name="heart-outline" ion-icon1 ></ion-icon> <span>{data?.likesCount}</span>
                                    <ion-icon name="chatbox-ellipses-outline" className="ion-icon1"></ion-icon> <span>{data.commentCount}</span></p>
                            </div>
                            <p className='small mt-4'>{data?.Description}</p>
                            <div style={{ borderRadius: "20px" }}>
                                <form onSubmit={handleSubmit} >
                                    <input type="number" style={{ display: 'none' }} name="postId" value={outid}
                                    />
                                    <InputGroup className="mb-3  rounded-circle">
                                        <TextField type="rext"
                                            placeholder="Comment Here..."
                                            aria-label="Recipient's username"
                                            aria-describedby="basic-addon2"
                                            name='comment' required
                                            size="small"
                                            onChange={handleInputChange}
                                        />
                                        <button id="basic-addon2" className="btn" type="submit" style={{ borderColor: "#efefef", borderWidth: "2px" }}>Post</button>
                                    </InputGroup>
                                </form>
                            </div>
                        </div>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
                {/* <div>
                    <img src={`http://demo.wiraa.com${data.ImageURL}`} alt="Avatar" className="m-1" style={{ width: "-webkit-fill-available", height: '220px' }} />
                    <div className="frloo">
                        <p><ion-icon name="heart-outline" ion-icon1 ></ion-icon> <span>{data?.likesCount}</span>
                            <ion-icon name="chatbox-ellipses-outline" className="ion-icon1"></ion-icon> <span>{data.commentCount}</span></p>
                    </div>
                    <p className='small mt-4'>{data?.Description}</p>
                    <div style={{borderRadius: "20px"}}>
                        <form onSubmit={handleSubmit} >
                        <input type="number" style={{display:'none'}} name="postId"  value={outid}
                           />
                            <InputGroup className="mb-3  rounded-circle">
                                <TextField type="rext"
                                    placeholder="Comment Here..."
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                    name='comment' required
                                    size="small"
                                    onChange={handleInputChange}
                                />
                                <button id="basic-addon2" className="btn" type="submit" style={{ borderColor: "#efefef", borderWidth: "2px" }}>Post</button>
                            </InputGroup>
                        </form>
                    </div>
                </div> */}
            </Modal.Body>
        </Modal>
    </>
}
export default ProtfolioCard;