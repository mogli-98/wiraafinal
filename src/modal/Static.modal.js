import axiosInstance from "../lib/axiosInstance";

const Staticmodal = {
 

    async Allsubcategory(data){
        return(await axiosInstance.get(
           `/static/getSubcategoryByCatId/${data.categoryId}` ,data)
           )
    },
    async Allcategory(data){
        return(await axiosInstance.get(
           `/static/getAllCategory` ,data)
           )
    },
    async AllSubcategorynoid(data){
        return(await axiosInstance.get(
           `/static/getAllSubcategory` ,data)
           )
    },
    async AllCountryList(data){
        return(await axiosInstance.get(
           `/static/getAllCountry` ,data)
           )
    },
    async AllCityListId(data){
        return(await axiosInstance.get(
           `/static/getCityByCountryId/${data.countryId}` ,data)
           )
    },
    async getAllOccupationList(data){
        return(await axiosInstance.get(
           `/static/getAllOccupationList` ,data)
           )
    }
    ,
    async getAllQualificationList(data){
        return(await axiosInstance.get(
           `/static/getAllQualificationList` ,data)
           )
    },
    async getallCity(data){
        return(await axiosInstance.get(
           `/static/getAllCity` ,data)
           )
    },

}
export default Staticmodal;