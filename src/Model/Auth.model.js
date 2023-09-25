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


    async addLikes(data) {
        return (await axiosInstance.post(
            `http://demo.wiraa.com/api/Post/AddRemoveLike`
        ))
    },

    async Myprofile(data) {
        return (await axiosInstance.get(
            `http://demo.wiraa.com/api/Profile/GetProfile?userId=${data.id}`
        ))
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
    async PostRequest(data) {
        return (await axiosInstance.post(
            `http://demo.wiraa.com/api/Users/SavePostRequirement`
        ))
    },
    async GetCategory(data) {
        return (await axiosInstance.get(
            `/static/getAllCategory`
        ))
    },
    async GetSubCategory(data) {
        return (await axiosInstance.get(
            `https://wiraa.com/api/Users/GetSubCategory?catId=5`
        ))
    },
    async City(data) {
        return (await axiosInstance.get(
            `https://wiraa.com/api/Profile/GetCity`
        ))
    },
    async Allcomment(data) {
        return (await axiosInstance.get(
            `/portfolio/gellAllCommentByPortfolioId/${data.id}?page=1&per_page=5`
        ))
    }



}
export default Auth;