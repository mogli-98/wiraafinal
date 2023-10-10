import axiosInstance from "../lib/axiosInstance";

const OrderModal = {
    async orderdetails(data){
        return(await axiosInstance.get(
            `/order/detailById/${data.order_id}`
        ))
    },
    async Interest(data){
        return(await axiosInstance.get(
            `/order/interestedProfessional/${data.orderId}`
        ))
    },async InterestAnswer(data , data2){
        return(await axiosInstance.get(
            `/order/answerOrder/${data.orderId}/${data2.proUserId}`
        ))
    },
   

}
export default OrderModal;