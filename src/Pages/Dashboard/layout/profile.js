import React,{useState,useEffect} from 'react';
import {Container } from "react-bootstrap";
import '../../../asset/css/dashboard.css'
import { Link } from 'react-router-dom';
import Auth from '../../../Model/Auth.model';

import ProfileCard from '../../../Model/component/profileCard';
function Profile() {
   
    const [profileData,setProfileData] = useState([]);

    useEffect(() => {
        const userId  = localStorage.getItem("UserID");
       Auth.Profile({userId }).then((response)=>{
        setProfileData(response.data);
        console.log(response.data)
       });
    }, [])
    

    return (
        
        <>
          <Container >
            <div style={
                {
                    "display":"flex",
                    "flexWrap":"wrap",
                    "flexDirection":"row"
                }
            }>
                {/* <Col sm={4}> */}
                    {profileData && profileData.map((pdata)=> <ProfileCard data={pdata} /> )}
                {/* </Col> */}
            </div>
          </Container>
        </>
    )
}

export default Profile