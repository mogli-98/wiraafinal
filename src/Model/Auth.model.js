import axiosInstance from "../lib/axiosInstance";

const Auth = {

    async login(data) {
        return await axiosInstance.post(
            `/auth/login`, data);
    },
    async singUp(data) {
        return (await axiosInstance.post(
            `/auth/signup`, data));
    },
    async Profile(data) {
        return await axiosInstance.get(
            `/people/${data.userId}?page=1&per_page=15`);
    },
    async Portfolio(data) {
        return await axiosInstance.get(
            `/portfolio/all/${data.user_id}?page=1&per_page=9`);
    },
    async userProfile(data) {
        return await axiosInstance.get(
            `http://demo.wiraa.com/api/Profile/GetProfile?userId=${data.id}
            `
        );
    },
    async projectNew(data) {
        return await axiosInstance.get(
            `http://demo.wiraa.com/api/project/GetAllProjectsByNewtest?Id=0
            `
        );
    },
    async addcomments(data) {
        return (await axiosInstance.post(
            `/portfolio/addComment`, data
        ))
    },
    async Userporfiolio(data) {
        return (await axiosInstance.get(
            `/people/peopleById/${data.userId}` ))     
    },
    async GetCategory(data) {
        return (await axiosInstance.get(
            `/static/getAllCategory`
        ))
    },
    async AllComments(data) {
        return (await axiosInstance.get(
            `/portfolio/gellAllCommentByPortfolioId/1?page=1&per_page=10`
        ))
    },
 
   



}
export default Auth;