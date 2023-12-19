import axiosInstance from "../lib/axiosInstance";

const PeopleModal = {

    async userProfile(data, data1) {
        console.log(data, data1, 'data')
        return (await axiosInstance.get(
            `/people/peopleById/${data.userProfileId}/${data1.searchUserId}`, data
        ));
    },
    async Userporfiolio(data) {
        return (await axiosInstance.get(
            `/people/peopleById/${data.userId}`))

    },
    async Profile(data) {
        return await axiosInstance.get(
            `/people/getAllPeople/${data.userId}?page=1&per_page=9`);
    },
    async SearchProfile(data) {
        return await axiosInstance.get(
            `/people/subcategory/${data.subcategoryId}/${data.userProfileId}?page=${data.page}&per_page=9`);
    },
}
export default PeopleModal;