import axiosInstance from "../lib/axiosInstance";

const AuthModal = {

    async login(data) {
        return await axiosInstance.post(
            `/auth/login`, data);
    },
    async singUp(data) {
        return (await axiosInstance.post(
            `/auth/signup`, data));
    },
    async Verifyemailuser(data) {
        return (await axiosInstance.post(
            `/auth/signup`, data));
    },
    async Verifyuser(data) {
        return (await axiosInstance.post(
            `/auth/verifyUser`, data));
    }
}
export default AuthModal;