import React, { useState, useEffect } from "react";
import Switch from '../Dashboard/switchaccount';
import Dashborad from "../freelancerdashboard/dashboardfreelancer";
import Auth from "../../Model/Auth.model";

function SwitchAcc() {
  const [userType, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = localStorage.getItem("id");
        Auth.Portfolio({id}).then((respnse) =>{
            if(respnse.data.userType === 3)
            {
                setUserData(respnse.data.userType);
                console.log(userType)
            }
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {userType.length > 0 ? (
        < Dashborad/>
      ) : (
        <Switch  />
      )}
    </div>
  );
}

export default SwitchAcc;