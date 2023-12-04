
import axiosInstance from "../lib/axiosInstance";

const MessageModal = {

    async allchatlist(data) {
        return (await axiosInstance.get(
            `/chat/getAllChats/${data.userId}`, data
        ))
    },
    async getchatByID(userID, data) {
        console.log(userID, 'userId')
        console.log(data, "SenderUserId")
        return (await axiosInstance.get(
            `/chat/getChatById/${userID.userId}/${data.senderId}`, data))
    },



}
export default MessageModal;