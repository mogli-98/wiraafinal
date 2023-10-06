import React,{useState,useEffect} from 'react';
import {Container } from "react-bootstrap";
import '../../../asset/css/dashboard.css'
import ProfileCard from '../../../Model/component/profileCard';
import PeopleModal from '../../../modal/People.modal';
function Profile() {
    const [profileData,setProfileData] = useState([]);
    const fetchdata = () => {
            const userId  = localStorage.getItem("UserID");
            PeopleModal.Profile({userId }).then((response)=>{
            setProfileData(response.data);
            console.log(response.data)
            });
        }
        useEffect(() => {
            fetchdata();
            }, [])
    return (
        <>
          <Container >
            <div style={{
                    "display":"flex",
                    "flexWrap":"wrap",
                    "flexDirection":"row"
                }}
                onClick={fetchdata}>
                {/* <Col sm={4}> */}
                    {profileData && profileData.map((pdata)=> <ProfileCard data={pdata} /> )}
                {/* </Col> */}
            </div>
          </Container>
        </>
    )
}

export default Profile