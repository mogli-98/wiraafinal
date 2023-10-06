import axiosInstance from "../lib/axiosInstance";

const ProfileModal = {

   
    async Followunfollow (data,data2) {
        console.log(data,data2)
        return (await axiosInstance.patch(
            `/profile/FreelancerFollowUnfollow/${data.userProfileId}/${data2.followProfileId}` , 
            
        ))
    }

}
export default ProfileModal;