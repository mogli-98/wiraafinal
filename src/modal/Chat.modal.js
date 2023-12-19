import axiosInstance from "../lib/axiosInstance";
const ChatModal = {                                                           

    async CreateChat(data , data1) {
        return (await axiosInstance.post(
            `/chat/createChat/${data.userId}/${data1.senderId}`,))
    }             
}
export default  ChatModal;