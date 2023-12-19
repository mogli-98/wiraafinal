import React, { useState, useEffect } from "react";
import Switch from '../Dashboard/switchaccount';
import Dashborad from "../freelancerdashboard/dashboardfreelancer";
import Auth from "../../Model/Auth.model";

function SwitchAcc() {
  const [userProfileId, setUserID] = useState(null);

  useEffect(() => {
    // Check if UserID exists in localStorage
    const storedUserID = localStorage.getItem('userProfileId');
    if (storedUserID) {
      setUserID(Number(storedUserID));
    }
  }, []);

  return (
    <div>
     {userProfileId === 3 ? (
        <Dashborad/>
      ): (
      
        <Switch/>
      )}

    </div>
  );
}

export default SwitchAcc;