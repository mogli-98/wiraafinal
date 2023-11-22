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
        return (await axiosInstance.get(
            `/auth/verifyEmail?token=${data.token}`, data));
    },
    async Verifyuser(data) {
        return (await axiosInstance.post(
            `/auth/verifyUser`, data));
    },
    async restpassword(data) {
        return (await axiosInstance.patch(
            `/auth/resetPassword`, data));
    },
    async updatepassword(data, password) {
        console.log(data)
        return (await axiosInstance.patch(
            `/auth/updatePassword?token=${data.token}`, password));
    }
}
export default AuthModal;