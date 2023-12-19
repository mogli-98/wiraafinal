import axiosInstance from "../lib/axiosInstance";

const PeopleModal = {

    async dataKye(data) {
        return (await axiosInstance.get(
            `/payment/paymentCheckout`))
            
    },
    async datavalue(data) {
        return await axiosInstance.get(
            `paymenr/paymentVerification`);
    }
}
export default PeopleModal;