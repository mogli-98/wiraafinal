import axiosInstance from "../lib/axiosInstance";

const Settingupdate = {
    async Phonenumber(data){
        return( await axiosInstance.post(
            `setting/updateNumber/`,data
        ))
    }, 
    async City(data){
        return(await axiosInstance.post(
           `https://wiraa.com/api/Profile/GetCity` ,data
        ))
    },
    async addStartup(data){
        return(await axiosInstance.post(
           `/startup/addStartup` ,data
        ))
    }
}
export default Settingupdate;