import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import "../../../asset/css/dashboard.css";
import ProfileCard from "../../../Model/component/profileCard";
import PeopleModal from "../../../modal/People.modal";
import Loading from "./Loading";
function Profile(selectedOptions) {
  const [profileData, setProfileData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  console.log("data = >", selectedOptions?.data?.value);
  const fetchdata = () => {
    console.log("called");
    const userProfileId = localStorage.getItem("userProfileId");
    try {
      if (selectedOptions?.data?.value) {
        console.log("1api");
        const subCategoryId = selectedOptions?.data?.value;
        const userProfileId = localStorage.getItem("userProfileId");
        PeopleModal.SearchProfile({ subCategoryId, userProfileId, page })
          .then((response) => {
            console.log(response.data);
            setProfileData(response.data);
            setProfileData((prev) => [...prev, ...response.data]);
          })
          .catch((error) => {
            console.log("error => ", error);
          });
      } else {
        console.log("2api");
        const userId = localStorage.getItem("UserID");
        PeopleModal.Profile({ userId })
          .then((response) => {
            setProfileData(response.data);
            setProfileData((prev) => [...prev, ...response.data]);
          })
          .catch((error) => {
            console.log("error => ", error);
          });
      }
    } catch (error) {
      console.log("error => ", error);
    }
  };

  useEffect(() => {
    //console.log("here")
    fetchdata();
  }, [page]);
  const changeSelect = () => {
    setProfileData([]);
  };
  useEffect(() => {
    console.log("here2");
    changeSelect();
    fetchdata();
  }, [selectedOptions]);

  const handelInfiniteScroll = async () => {
    // console.log("scrollHeight" + document.documentElement.scrollHeight);
    // console.log("innerHeight" + window.innerHeight);
    // console.log("scrollTop" + document.documentElement.scrollTop);
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);

        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);

  // const fetchdata = () => {
  //         const userId  = localStorage.getItem("UserID");
  //         PeopleModal.Profile({userId }).then((response)=>{
  //         setProfileData(response.data);
  //         console.log(response.data)
  //         });
  //     }
  //     useEffect(() => {
  //         fetchdata();
  //         }, [])
  return (
    <>
      <Container style={{ marginBottom: "80px", padding: "0px" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
          }}
          onClick={fetchdata}
        >
          {/* <Col sm={4}> */}
          {profileData &&
            profileData.map((pdata) => <ProfileCard data={pdata} />)}
          {/* </Col> */}
        </div>
      </Container>
    </>
  );
}

export default Profile;
