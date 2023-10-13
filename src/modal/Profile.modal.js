import axiosInstance from "../lib/axiosInstance";

const ProfileModal = {

   
    async Followunfollow (data,data2) {
        console.log(data,data2)
        return (await axiosInstance.patch(
            `/profile/FreelancerFollowUnfollow/${data.userProfileId}/${data2.followProfileId}`
            
        ))
    },
    async Updateprofile(data, userId) {
        console.log(data)
        return (await axiosInstance.patch(
            `/profile/updateProfile/${userId}`,data
            
        ))
    },
    async freelancerprofile(data) {
        console.log(data)
        return (await axiosInstance.get(
            `/profile/professionalMyProfile/${data.userId}`,
            
        ))
    },
    async ClientProfile(data) {
        console.log(data)
        return (await axiosInstance.get(
            `/profile/clientMyProfile/${data.userId}`,
            
        ))
    }

}
export default ProfileModal;