import axiosInstance from "../lib/axiosInstance";

const clientBoard = {

    async community(data) {
        return (await axiosInstance.get(
            `http://demo.wiraa.com/api/Question/GetAllQuestion?userId=10191`, data
        ));
    },
    async Projectdeatils(data) {
        return (await axiosInstance.get(
            `http://demo.wiraa.com/Api/Project/GetOrderDetail?PId=1`, data
        ));
    },
    async allNotifi(data) {
        return (await axiosInstance.get(
            `https://wiraa-api.azurewebsites.net/api/v1/notification/all/${data.userProfileId}?page=1&per_page=10`, data
        ))
    },
    async userpro(data) {
        return (await axiosInstance.get(
            `http://demo.wiraa.com/api/project/GetAllProjectsByNewtest?Id=${data.id}`
        ))
    },
    async userproexpert(data) {
        return (await axiosInstance.get(
            `http://demo.wiraa.com/api/project/GetAllProjectsByExpertise?Id=${data.id}`
        ))
    },
    async datadelete(data) {
        console.log(data)
        return (await axiosInstance.get(
            `http://demo.wiraa.com/api/Notification/DeleteNotification?Id=${data.id}`
        ))
    },    
    async deleteNotice(data) {
        console.log(data)
        return (await axiosInstance.delete(
            `https://wiraa-api.azurewebsites.net/api/v1/notification/deleteAllNotifications/${data.userProfileId}`
        ))
    },
    async Unreadnotice(data) {
        console.log(data)
        return (await axiosInstance.get(
            `https://wiraa-api.azurewebsites.net/api/v1/notification/getUnreadNotifications/${data.userProfileId}?page=1&per_page=10`
        ))
    },
    async Readnotice(data) {
        console.log(data)
        return (await axiosInstance.patch(
            `https://wiraa-api.azurewebsites.net/api/v1/notification/readNotification/${data.userProfileId}/${data.notificationId}`
        ))
    }


}
export default clientBoard;