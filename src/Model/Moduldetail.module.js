import axiosInstance from "../lib/axiosInstance";

const Modulelist = {
    async Modulelist(data){
        return( await axiosInstance.get(
            `/learn/courses
            `,data
        ))
    }, 
    async Modulelistdetails(data){
        return(await axiosInstance.get(
           `/learn/courses/1/modules` ,data
        ))
    }
}
export default Modulelist;