import axios from "axios";

const Auth = {

    async login(data) {
        return (await axios.post(
            `https://wiraa-api.azurewebsites.net/api/v1/auth/login`, data
        ));
    },
    async Profile(data) {
        return (await axios.get(
            `https://wiraa-api.azurewebsites.net/api/v1/people?page=1&per_page=10`
        ));
    },
    async Portfolio(data) {
        return (await axios.get(
            `https://wiraa-api.azurewebsites.net/api/v1/portfolio/all/${data.id}?page=1&per_page=12`
        ));
    },
    async userProfile(data) {
        return (await axios.get(
            `http://demo.wiraa.com/api/Profile/GetProfile?userId=${data.id}
            `
        ));
    },
    async projectNew(data) {
        return (await axios.get(
            `http://demo.wiraa.com/api/project/GetAllProjectsByNewtest?Id=0
            `
        ));
    },
    async Otplogin(data) {
        return (await axios.get(
            `http://demo.wiraa.com/api/UserAccount/GEtLoginByMobile?contact=${data.number}&c_code=IN`
        )
        )
    },
    async singUp(data) {
        return (await axios.post(
            `https://wiraa-api.azurewebsites.net/api/v1/auth/signup`, data
        )
        )
    },
    async addLikes(data) {
        return (await axios.post(
            `http://demo.wiraa.com/api/Post/AddRemoveLike`
        ))
    },

    async Myprofile(data) {
        return (await axios.get(
            `http://demo.wiraa.com/api/Profile/GetProfile?userId=${data.id}`
        ))
    },
    async addcomments(data) {
        return (await axios.post(
            `https://wiraa-api.azurewebsites.net/api/v1/portfolio/addComment`,data
        ))
    },
    async Userporfiolio(data) {
        return (await axios.get(
            `https://wiraa-api.azurewebsites.net/api/v1/portfolio/${data.id}
                `
        ))
    },
    async PostRequest(data) {
        return (await axios.post(
            `http://demo.wiraa.com/api/Users/SavePostRequirement`
        ))
    },
    async GetCategory(data) {
        return (await axios.get(
            `https://wiraa.com/api/Users/GetCategory`
        ))
    },
    async GetSubCategory(data) {
        return (await axios.get(
            `https://wiraa.com/api/Users/GetSubCategory?catId=5`
        ))
    },
    async City(data) {
        return (await axios.get(
            `https://wiraa.com/api/Profile/GetCity`
        ))
    }



}
export default Auth;