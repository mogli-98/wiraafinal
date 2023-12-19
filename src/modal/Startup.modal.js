import axiosInstance from "../lib/axiosInstance";

const StartupModal = {
 

    async addStartup(data){
        return(await axiosInstance.post(
           `/startup/addStartup` ,data
        ))
    }

}
export default StartupModal;