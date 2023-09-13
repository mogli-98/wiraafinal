import React, { useState, useEffect } from "react";
import Nonotifty from '../notify/Nonotify'
import Notification from "../notification";
import clientBoard from "../../../Model/clientdash";

function Nonotiftyy() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = localStorage.getItem("id");
    clientBoard.allNotifi({id}).then((respnse) =>{
       
            if(respnse?.data)
            {
                setUserData(respnse?.data);
            }
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {userData ? (
             <Notification data={userData} /> 
      ) : (
  
        <Nonotifty data={userData} />
      )}
    </div>
  );
}

export default Nonotiftyy;