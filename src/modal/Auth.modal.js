import axiosInstance from "../lib/axiosInstance";

const AuthModal = {

    async login(data) {
        return await axiosInstance.post(
            `/auth/login`, data);
    },
    async singUp(data) {
        return (await axiosInstance.post(
            `/auth/signup`, data));
    }
}
export default AuthModal;