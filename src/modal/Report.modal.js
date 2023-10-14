import axiosInstance from "../lib/axiosInstance";

const ReportModal = {

    
    async CreateReport(data) {
        return (await axiosInstance.post(
            `/report/createReport`, data
        ))
    }, async Phonenumber(data) {
        return (await axiosInstance.post(
            `setting/updateNumber/`, data
        ))
    }


}
export default ReportModal;