
import { useState } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProfileModal from "../../modal/Profile.modal";

function ProfileCard(props) {
    const { data } = props;
    const [isHovered1, setIsHovered1] = useState(false);


    // console.log(props);
    const fetchdata = (UsersProfileID) => {
        console.log(UsersProfileID)
        const followProfileId = UsersProfileID;
        console.log(followProfileId)
        const userProfileId = localStorage.getItem("userProfileId");
        ProfileModal.Followunfollow({ userProfileId }, { followProfileId }).then((response) => {

            console.log(response.data);
            // setprotfoliData(response.data);
        });
    }

    return <Card style=
        {{

            height: "100%",
            backgroundColor: "#efefef",
            border: isHovered1 ? "2px solid #008080" : "1px solid transparent",
            transition: "border  ease-in-out",
            "flex": "1 1 30%",
            "margin": "8px"
        }}
        onMouseEnter={() => setIsHovered1(true)}
        onMouseLeave={() => setIsHovered1(false)}
    // onClick={ ()=>window.location.href=`/Profiledetails/${data.UserID}`  }
    >
        <center>
            <img src={`http://demo.wiraa.com/${data.profilePic}`} alt="" className=" portfolio-image" />

        </center>
        <div className=''>
            <h5 className='mt-3 text-center '><b> {data.FirstName} {data.LastName}</b></h5>
            <p className='text-center  textstyle'>{data.OccupationName}</p>
        </div>
        <Container>
            <Row className='mb-3'>
                <Col className='square border-end end-border'>
                    <div style={{ display: isHovered1 ? ' none' : 'block' }}
                        onMouseEnter={() => setIsHovered1(true)}
                        onMouseLeave={() => setIsHovered1(false)}>
                        {data.FollowerCount === null ? (
                            <h6 className='text-center'>0</h6>
                        ) : <h6 className='text-center'>{data.FollowerCount}</h6>}
                        {/* <h6 className='text-center'>{data.FollowerCount}</h6> */}
                        <p className='text-center'
                        >Followers </p>
                    </div>
                    {isHovered1 && (
                        data.IsFollow === 1 ? (
                            <center>
                                {/* <Link to="Home/PostRequirement"> */}
                                <button style={{
                                    backgroundColor: "#008080", color: "#fff",
                                    borderStyle: "none", padding: '4px', width: '100%',
                                    borderRadius: "8px", marginTop: "12px"
                                }}
                                    onClick={() => { fetchdata(data.UsersProfileID) }}
                                >Unfollow</button></center>
                        ) : <center>
                            <button style={{
                                backgroundColor: "#008080", color: "#fff",
                                borderStyle: "none", padding: '4px', width: '100%',
                                borderRadius: "8px", marginTop: "12px"
                            }} onClick={() => { fetchdata(data.UsersProfileID) }}
                            >Follow</button></center>


                    )}
                </Col>
                <Col className=''>
                    <div style={{ display: isHovered1 ? ' none' : 'block' }}
                        onMouseEnter={() => setIsHovered1(true)}
                        onMouseLeave={() => setIsHovered1(false)}>
                        {data.PostCount === null ? (
                            <h6 className='text-center'>0</h6>
                        ) : <h6 className='text-center'>{data.PostCount}</h6>}

                        <p className='text-center'>Portfolio</p></div>

                    {isHovered1 && (
                        <center>
                            <Link to={`/Profiledetails/${data.UserID}`}>
                                <button style={{
                                    backgroundColor: "black", color: "#fff",
                                    borderStyle: "none", padding: '4px', width: '100%',
                                    borderRadius: "8px", marginTop: "12px"
                                }}> Profile</button></Link>
                        </center>
                    )}
                </Col>
            </Row>

        </Container>
    </Card>
}

export default ProfileCard;