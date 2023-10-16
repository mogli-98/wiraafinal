import React, { useState, useEffect } from "react";
import Nonotifty from './Nonotifyuser'

import clientBoard from "../../../Model/clientdash";
import Notificationuser from "../notificationuser";

function Nonotiftyyuser() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userProfileId = localStorage.getItem("UserID");
    console.log(userProfileId)
    clientBoard.allNotifi({ userProfileId }).then((respnse) => {

      if (respnse?.data.length > 0) {
        setUserData(respnse?.data);
      } else {
        
      }
      setLoading(false);

    })
      .catch((error) => console.log(error));
  }, []);
 
  return (
    <div>
      {userData?.length > 0 ? (
        <Notificationuser />
      ) : (
        <Nonotifty data={userData} />
      )}
    </div>
  );
}

export default Nonotiftyyuser;