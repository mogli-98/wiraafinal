import axiosInstance from "../lib/axiosInstance";
const AffiliateModal = {                                                           
    async allAffi(data) {
        return (await axiosInstance.get(
            `/affiliate/visitor/1`
        ));
    },
    async Report(data) {
        return (await axiosInstance.get(
            `/affiliate/report/1`,data))
    }             
}
export default  AffiliateModal;