import React, { useState, useEffect } from "react";
import NOorder from './noorder';
import Ordertable from "./ordertable";
import Orderbook from "../../../Model/Order.model";

function Order() {
  const [userData, setUserData] = useState();
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
      {userData?.length ? (
        <Ordertable />
      ) : (
        <NOorder />

      )}
    </div>
  );
}

export default Order;