import axiosInstance from "../lib/axiosInstance";

const SettingModal = {

    async Phonenumber(data) {
        return (await axiosInstance.post(
            `setting/updateNumber/`, data
        ))
    }


}
export default SettingModal;