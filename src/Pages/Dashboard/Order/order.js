import React, { useState, useEffect } from "react";
import NOorder from './noorder';
import Ordertable from "./ordertable";
import Orderbook from "../../../Model/Order.model";

function Order() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userId = localStorage.getItem("UserID");
    Orderbook.ordertable({ userId }).then((respnse) => {
      setUserData(respnse?.data);
    })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div >
      {userData === null || userData?.length === 0? (
        <NOorder />
      ) : (
        <Ordertable />
        // <span>simgh</span>

      )}
    </div>
  );
}

export default Order;