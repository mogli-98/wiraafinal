import axiosInstance from "../lib/axiosInstance";

const ProjectDetail = {
                                                                
    async Allproject(data) {
        return (await axiosInstance.get(
            `/project?page=1&per_page=10
            `
        ));
    },
    async detailporject(data){
        return (await axiosInstance.get(
           `http://demo.wiraa.com/API/Project/GetProjectDetail?Id=${data}` 
        ))
    },
    async questiondetails(data){
        return (await axiosInstance.post(
            `https://wiraa.com/api/Question/QuestionDetails?Id=${data}`
        ))

    }
    
}
export default  ProjectDetail;