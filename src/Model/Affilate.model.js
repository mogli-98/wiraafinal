import axios from "axios";

const Affiliate = {
                                                                
    async allAffi(data) {
        return (await axios.get(
            `https://wiraaback.azurewebsites.net/api/v1/affiliate/all?page=1&per_page=10
            `
        ));
    },
    async Report(data) {
        return (await axios.get(
            `https://wiraaback.azurewebsites.net/api/v1/affiliate/report/2
            `
        ))
    }

              
}
export default  Affiliate;