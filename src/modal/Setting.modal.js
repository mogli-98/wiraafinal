import axiosInstance from "../lib/axiosInstance";

const SettingModal = {

    async Phonenumber(data) {
        return (await axiosInstance.post(
            `setting/updateNumber/`, data
        ))
    }, async CreateReport(data) {
        return (await axiosInstance.post(
            `/report/createReport`, data
        ))
    }
    , async blockuser(data, data1) {
        console.log(data1, data, 'hhhhh')
        return (await axiosInstance.post(
            `/setting/createBlockUser/${data.userProfileId}/${data1.userId}`,
        ))
    }
    , async accdeactive(data) {
        return (await axiosInstance.patch(
            `/setting/deactivateAccountbyId/${data.userId}`,
        ))
    }, async Blocklist(data) {
        return (await axiosInstance.get(
            `/setting/getBlockedAccountById/${data.userProfileId}   `, data
        ))
    }
    , async Unblockuser(data) {
        console.log(data)
        return (await axiosInstance.delete(
            `/setting/UnblockUserById/${data.userProfileId}/${data.userId}`,
        ))
    }, async Checkemail(userId, data) {
        console.log(userId, data)
        return (await axiosInstance.patch(
            `/setting/checkEmailUpdation/${userId}`, data,
        ))
    }, async UpdateEmail(data) {
        console.log(data)
        return (await axiosInstance.patch(
            `/setting/updateEmail`, data,
        ))
    }


}
export default SettingModal;