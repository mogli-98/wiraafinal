import axiosInstance from "../lib/axiosInstance";

const MessageModal = {

    async allchatlist(data) {
        return (await axiosInstance.get(
            `/chat/getAllChats/${data.userId}`, data
        ))
    },



}
export default MessageModal;