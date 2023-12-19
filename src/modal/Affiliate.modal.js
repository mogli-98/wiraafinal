import axiosInstance from "../lib/axiosInstance";
const AffiliateModal = {
    async allAffi(data) {
        return (await axiosInstance.get(
            `/affiliate/visitor/${data.id}`
        ));
    },
    async Report(data) {
        return (await axiosInstance.get(
            `/affiliate/report/1`, data))
    },
    async Payout(data) {
        return (await axiosInstance.get(
            `/affiliate/payout/${data}`,
        ))
    }
}
export default AffiliateModal;