import axios from "axios";

const clientBoard = {
                                                                
    async community(data) {
        return (await axios.get(
            `http://demo.wiraa.com/api/Question/GetAllQuestion?userId=10191`
        ));
    },
    async Projectdeatils(data) {
        return (await axios.get(
            `http://demo.wiraa.com/Api/Project/GetOrderDetail?PId=1`
        ));
    },
    async allNotifi(data){
        return (await axios.get(
            `http://demo.wiraa.com/api/Notification/GetNotifications?Id=${data.id}`
        ))
    },
    async userpro(data){
        return( await axios.get(
            `http://demo.wiraa.com/api/project/GetAllProjectsByNewtest?Id=${data.id}`
        ))
    },
    async userproexpert(data){
        return(await axios.get(
            `http://demo.wiraa.com/api/project/GetAllProjectsByExpertise?Id=${data.id}`
        ))
    },
    async datadelete(data){
        console.log(data)
        return(await axios.get(
            `http://demo.wiraa.com/api/Notification/DeleteNotification?Id=${data.id}`
        ))
    }

    
}
export default  clientBoard;