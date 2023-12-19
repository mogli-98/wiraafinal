import axiosInstance from "../lib/axiosInstance";
const Orderbook =
{
    async community(data) {
        return (await axiosInstance.get(
            `http://demo.wiraa.com/api/Question/GetAllQuestion?userId=${data.id}`
        ));
    },
    async Myquestion(data) {
        return( await axiosInstance.get(
            `http://demo.wiraa.com/api/Question/GetMyQuestion?userId=${data.id}`
        ))
    },
    async ordertable(data){
        return (await axiosInstance.get(
            `/order/allOrders/${data.userId}?page=1&per_page=10`,data
        ))
    },
    async orderdetails(data){
        return(await axiosInstance.get(
            `/order/detailById/${data.order_id}`
        ))
    },
    async allanswer(data){
        return(await axiosInstance.get(
            `http://demo.wiraa.com/api/Question/GetMyAnswer?userId=${data.id}`
        ))
    }
    ,async favproject(data){
        return(await axiosInstance.get(
            `/project/favorite/${data.id}`
        ))
    },async Interest(data){
        return(await axiosInstance.get(
            `/order/interestedProfessional/${data.orderId}`
        ))
    },async InterestAnswer(data , data2){
        return(await axiosInstance.get(
            `/order/answerOrder/${data.orderId}/${data2.proUserId}`
        ))
    }

 
}
export default Orderbook