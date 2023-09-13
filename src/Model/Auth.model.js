import axios from "axios";

const Auth = {

    async login(data) {
        return (await axios.get(
            `http://demo.wiraa.com/api/UserAccount/GetLoginByPassword?contact=${data.email}&pwd=${data.password}`
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


        var config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://demo.wiraa.com/api/Users/Signup',
            headers: {
                'Content-Type': 'application/json',
                'Cookie': 'ASP.NET_SessionId=njq2covfwkss0nltjqgwzqqv'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
        return (await axios.post(
            `http://demo.wiraa.com/api/Users/Signup`, data
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