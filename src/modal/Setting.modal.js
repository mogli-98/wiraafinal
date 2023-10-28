import axiosInstance from "../lib/axiosInstance";

const SettingModal = {

    async Phonenumber(data) {
        return (await axiosInstance.post(
            `setting/updateNumber/`, data
        ))
    }, async Phonenumber(data) {
        return (await axiosInstance.post(
            `setting/updateNumber/`, data
        ))
    }
    , async blockuser(data) {
        return (await axiosInstance.post(
            `/setting/createBlockUser/${data.userProfileId}/${data.userId}`, 
        ))
    }


}
export default SettingModal;