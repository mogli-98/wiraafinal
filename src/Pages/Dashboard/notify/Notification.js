import React, { useState, useEffect } from "react";
import Nonotifty from '../notify/Nonotify'
import Notification from "../notification";
import clientBoard from "../../../Model/clientdash";

function Nonotiftyy() {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const userProfileId = localStorage.getItem("UserID");
    console.log(userProfileId)
    clientBoard.allNotifi({ userProfileId }).then((respnse) => {
      setUserData(respnse?.data);
    })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {userData === null || userData?.length ? (
        // {userData?.length ? (
          <Nonotifty />
      ) : (
    
        <Notification />
      )}
    </div>
  );
}

export default Nonotiftyy;