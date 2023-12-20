import axiosInstance from "../lib/axiosInstance";

const MessageModal = {
  async allchatlist(data) {
    return await axiosInstance.get(`/chat/getAllChats/${data.userId}`, data);
  },
  async getchatByID(userID, data) {
    console.log(userID, "userId");
    console.log(data, "SenderUserId");
    return await axiosInstance.get(
      `/chat/getChatById/${userID.userId}/${data.senderId}`,
      data
    );
  },

  async messagedlt(userId, senderId) {
    // console.log("userID>>>>>>>>>", userID);
    // console.log("senderID>>>>>>>", data);
    return await axiosInstance.delete(`/chat/deleteChat/${userId}/${senderId}`);
  },
};
export default MessageModal;
