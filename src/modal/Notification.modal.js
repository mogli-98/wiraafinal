import axiosInstance from "../lib/axiosInstance";

const NotificationModal = {

    async allNotifi(data) {
        return (await axiosInstance.get(
            `/notification/all/${data.userProfileId}?page=1&per_page=10`, data
        ))
    },
    async deleteNotice(data) {
        console.log(data)
        return (await axiosInstance.delete(
            `/notification/deleteAllNotifications/${data.userProfileId}`
        ))
    },
    async Unreadnotice(data) {
        console.log(data)
        return (await axiosInstance.get(
            `/notification/getUnreadNotifications/${data.userProfileId}?page=1&per_page=10`
        ))
    },
    async Readnotice(data) {
        console.log(data)
        return (await axiosInstance.patch(
            `/notification/readNotification/${data.userProfileId}/${data.notificationId}`
        ))
    }
    


}
export default NotificationModal;