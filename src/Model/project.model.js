import axios from "axios";

const ProjectDetail = {
                                                                
    async Allproject(data) {
        return (await axios.get(
            `https://wiraa-api.azurewebsites.net/api/v1/project?page=1&per_page=10
            `
        ));
    },
    async detailporject(data){
        return (await axios.get(
           `http://demo.wiraa.com/API/Project/GetProjectDetail?Id=${data}` 
        ))
    },
    async questiondetails(data){
        return (await axios.post(
            `https://wiraa.com/api/Question/QuestionDetails?Id=${data}`
        ))

    }
    
}
export default  ProjectDetail;