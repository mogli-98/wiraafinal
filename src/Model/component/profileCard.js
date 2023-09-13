
import { useState,useEffect } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Auth from "../Auth.model";

function ProfileCard(props){
    const {data} = props;
    const [isHovered1, setIsHovered1] = useState(false);
    const [userpro , setuserPro] = useState([]);
    useEffect(() => {
        Auth.Myprofile().then((response)=>{
        setuserPro(response.data);
        });
    },[])
    console.log(props);
    return  <Card style=
        {{
            width: "100%",
            height: "100%",
            backgroundColor:"#efefef",
            border: isHovered1 ? "2px solid #008080" : "1px solid transparent",
            transition: "border  ease-in-out",
            "flex":"1 1 30%",
            "margin":"18px"
        }}
            onMouseEnter={() => setIsHovered1(true)}
            onMouseLeave={() => setIsHovered1(false)}
            onClick={ ()=>window.location.href=`/Profiledetails?id=${data.fkUserProfileID}`  }
        >
        <center>
        <img src={`http://demo.wiraa.com/${data.profilePic}`} alt="" className=" portfolio-image"   />
     
        </center>
        <div className=''>
            <h5 className='mt-3 text-center '><b> {data.FirstName}</b></h5>
            <p className='text-center  textstyle'>web developer</p>     
        </div>
        <Container>
            <Row className='mb-3'>
                <Col className='square border-end end-border'>
                    <div style={{ display: isHovered1 ? ' none' : 'block' }}
                    onMouseEnter={() => setIsHovered1(true)}
                    onMouseLeave={() => setIsHovered1(false)}>
                    <h6 className='text-center'>193</h6>
                    <p className='text-center' 
                    >Followers </p>
                    </div>
                    {isHovered1 && (
                    <center><Link to="Home/PostRequirement"><button style={{
                        backgroundColor:"#008080",color:"#fff",
                        borderStyle:"none",width:"70%",
                        borderRadius:"8px",marginTop:"12px"
                    }}>Follow</button></Link></center>
                    )}
                </Col>
                <Col className=''>
                    <div style={{ display: isHovered1 ? ' none' : 'block' }}
                    onMouseEnter={() => setIsHovered1(true)}
                    onMouseLeave={() => setIsHovered1(false)}>
                    <h6 className='text-center'>222</h6>
                      <p className='text-center'>Portfolio</p></div>
                    {isHovered1 && (
                        <center>
                            <button style={{
                            backgroundColor:"black",color:"#fff",
                            borderStyle:"none",width:"70%",
                            borderRadius:"8px",marginTop:"12px"
                            }}> Profile</button>
                        </center>
                    )}
                </Col>
            </Row>
            
       </Container>
    </Card>
}

export default ProfileCard