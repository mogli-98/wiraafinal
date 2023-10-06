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
    async getMarkfavproject(data , data2) {
        return (await axiosInstance.get(
            `/project/addProjectToFavorite/${data.uid}/${data.pid}` , data
        ));
    }
    


                }
export default ProjectModal;