import axios from  "axios";
const Orderbook =
{
    async community(data) {
        return (await axios.get(
            `http://demo.wiraa.com/api/Question/GetAllQuestion?userId=${data.id}`
        ));
    },
    async Myquestion(data) {
        return( await axios.get(
            `http://demo.wiraa.com/api/Question/GetMyQuestion?userId=${data.id}`
        ))
    },
    async ordertable(data){
        return (await axios.get(
            `https://wiraa-api.azurewebsites.net/api/v1/order/all/${data.id}?page=1&per_page=10`
        ))
    },
    async orderdetails(data){
        return(await axios.get(
            `https://wiraa-api.azurewebsites.net/api/v1/order/${data}`
        ))
    },
    async allanswer(data){
        return(await axios.get(
            `http://demo.wiraa.com/api/Question/GetMyAnswer?userId=${data.id}`
        ))
    }
    ,async favproject(data){
        return(await axios.get(
            `https://wiraa-api.azurewebsites.net/api/v1/project/favorite/${data.id}`
        ))
    }
 
}
export default Orderbook