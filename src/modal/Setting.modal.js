import axiosInstance from "../lib/axiosInstance";

const SettingModal = {

    async Phonenumber(data) {
        return (await axiosInstance.post(
            `setting/updateNumber/`, data
        ))
    }, async Blockuser(data) {
        return (await axiosInstance.post(
            `/setting/createBlockUser/${data.userProfileId}/${data.userId}`, 
        ))
    }
    , async CreateReport(data) {
        return (await axiosInstance.post(
            `/report/createReport`, data
        ))
    }



}
export default SettingModal;