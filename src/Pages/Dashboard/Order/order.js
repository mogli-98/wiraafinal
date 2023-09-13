import React, { useState, useEffect } from "react";
import NOorder from './noorder';
import Ordertable from "./ordertable";
import Orderbook from "../../../Model/Order.model";

function Order() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = localStorage.getItem("id");
        Orderbook.ordertable({id}).then((respnse) =>{
            if(respnse?.data)
            {
                setUserData(respnse.data.data);
            }
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {userData ? (
        <NOorder />
      ) : (
        <Ordertable data={userData} />
      )}
    </div>
  );
}

export default Order;