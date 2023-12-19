import React, { useState, useEffect } from "react";
import MessageModal from "../../../modal/Message.modal";
import MessaagesList from "./GetMessageList";
import MessaagesNolist from "../message";

function Checkmessage() {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const userId = localStorage.getItem("UserID");
        MessageModal.allchatlist({ userId }).then((response) => {
            setUserData(response?.data);
            console.log(response.data, '0000000000000000000')
        })
            .catch((error) => console.log(error));
    }, []);

    return (
        <div >
            {userData === null || userData?.length === null ? (
                <MessaagesNolist />
            ) : (

                <MessaagesList />
                // <span>simgh</span>

            )}
        </div>
    );
}

export default Checkmessage;