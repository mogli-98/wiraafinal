import axios from "axios";

const Switchform = {
    async Qualification(data){
        return( await axios.post(
            `http://demo.wiraa.com/api/Profile/FillQualification`
        ))
    }, 
    async City(data){
        return(await axios.post(
           `https://wiraa.com/api/Profile/GetCity` 
        ))
    }
}
export default Switchform;