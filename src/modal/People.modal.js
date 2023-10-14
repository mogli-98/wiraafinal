import axiosInstance from "../lib/axiosInstance";

const PeopleModal = {

    // async Profile(data) {
    //     return await axiosInstance.get(
    //         `/people/${data.userId}?page=1&per_page=15`);
    // },
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