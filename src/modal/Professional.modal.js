import axiosInstance from "../lib/axiosInstance";

const Profmodal = {
                                                                
    async CreateProfessinoal(data){
        return(await axiosInstance.post(
           `/static/professinaol/createProfessional` ,data)
           )
    }

              
}
export default  Profmodal;