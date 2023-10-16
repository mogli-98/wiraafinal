import axiosInstance from "../lib/axiosInstance";

const ProjectModal = {

    async favproject(data){
        return(await axiosInstance.get(
            `/project/favorite/${data.id}`
        ))
    },
    async Allproject(data) {
        return (await axiosInstance.get(
            `/project/newestAllProject?page=1&per_page=10` , data
        ));
    },
    async getExpertiseByUserId(data) {
        return (await axiosInstance.get(
            `/project/getExpertiseByUserId/${data.userId}` , data
        ));
    },
    async getPrjectdetails(data) {
        return (await axiosInstance.get(
            `/project/getProjectDetailByProjectId/${data.projectId}` , data
        ));
    },
    async getMarkfavproject(data ) {
        
        return (await axiosInstance.post(
            `/project/addProjectToFavorite/${data.userId}/${data.projectId}`,
        ));
    } ,async getfavproject(data) {
        return (await axiosInstance.get(
            `/project/getFavorite/${data.userId}` , data
        ));
    },
    async dashboardproject(data) {
        return (await axiosInstance.get(
            `/project/newestAllProject?page=1&per_page=5` , data
        ));
    },
    async getinterestedbyid(data) {
        return (await axiosInstance.post(
            `/project/getInterestedByUserId/${data.userId}` , data
        ));
    },
    async addintrestpro(data) {
        return (await axiosInstance.post(
            `/project/addInterestToProject` , data
        ));
    },

    


                }
export default ProjectModal;