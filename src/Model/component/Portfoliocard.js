import React, { useState } from "react";
import { Card, Modal, Form } from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup';
import Auth from "../Auth.model";
function ProtfolioCard(props) {
    const { data } = props;
    const [isHovered1, setIsHovered1] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [comment, setcomment] = useState();
    const [outid, setOutid] = useState(0)
    const [formData, setFormData] = useState({
        comment:'',
        postId:'',
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
        const formData = {
            userProfileId: parseInt(localStorage.getItem("id")),
            postId:parseInt(event.target.postIdtemp.value),
            comment: event.target.comment.value
        }
        Auth.addcomments(formData).then((res) => {
            setcomment(res.data)
            alert ("comment ADD")
        })
        .catch((error) => {
            console.log("error => ", error)
        })
    }

    return <>
    <Card 
        onClick={() => (openCheckoutModal(data.PostID))}
        style={{
            borderStyle: "none",
            flex: "1 1 30%",
            border: "none",
            margin: "8px"
            }}
        onMouseEnter={() => setIsHovered1(true)}
        onMouseLeave={() => setIsHovered1(false)}
    >
        <div className="containerhover" style={{ border: isHovered1 ? "2px solid #008080" : "0px solid transparent", borderRadius: "5px" }}>
            <img src={`http://demo.wiraa.com${data.ImageURL}`} alt="Avatar" className="containerhoverimage " style={{ height: '200px', width: "100%", }} />
            <div className="overlay">
                <div className="containerhovertext">
                    {data?.AboutMe}
                </div>
            </div>
        </div>
        <table className='mt-2'>
            <tbody>
                <tr>
                    <td>
                        <p className='small '> <img src={`http://demo.wiraa.com${data.ProfilePic}`} alt="Avatar" className="m-1" style={{ width: "20px", height: '20px', borderRadius: "50px" }} /><b>{data.FirstName}{data.LastName}</b></p>
                    </td>
                    <td className="frloo">
                        <ion-icon name="heart-outline"></ion-icon> <span className='small'>{data.likesCount}</span>
                        <ion-icon name="chatbox-ellipses-outline"  ></ion-icon> <span className='small'>{data.commentCount}</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </Card>
        <Modal show={show} onHide={handleClose} >
            <Modal.Body>
                <div>
                    <img src={`http://demo.wiraa.com${data.ImageURL}`} alt="Avatar" className="m-1" style={{ width: "-webkit-fill-available", height: '220px' }} />
                    <div className="frloo">
                        <p><ion-icon name="heart-outline" ion-icon1 ></ion-icon> <span>{data?.likesCount}</span>
                            <ion-icon name="chatbox-ellipses-outline" className="ion-icon1"></ion-icon> <span>{data.commentCount}</span></p>
                    </div>
                    <p className='small mt-4'>{data?.Description}</p>
                    <div style={{borderRadius: "20px"}}>
                        <form onSubmit={handleSubmit} >
                        <input type="number" style={{display:'none'}} name="postIdtemp"  value={outid}
                           />
                            <InputGroup className="mb-3  rounded-circle">
                                <input type="rext"
                                    placeholder="Comment Here..."
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                    name='comment'
                                    onChange={handleInputChange}
                                />
                                <button id="basic-addon2" className="btn" type="submit" style={{ borderColor: "#efefef", borderWidth: "2px" }}>Post</button>
                            </InputGroup>
                        </form>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    </>
}
export default ProtfolioCard;