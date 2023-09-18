import axios from "axios";

const Modulelist = {
    async Modulelist(data){
        return( await axios.get(
            `https://wiraa-api.azurewebsites.net/api/v1/learn/courses
            `,data
        ))
    }, 
    async Modulelistdetails(data){
        return(await axios.get(
           `https://wiraa-api.azurewebsites.net/api/v1/learn/courses/1/modules` ,data
        ))
    }
}
export default Modulelist;