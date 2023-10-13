import axiosInstance from "../lib/axiosInstance";
const PortfolioModal = {
    async addcomments(data) {
        return (await axiosInstance.post(
            `/portfolio/addComment`, data
        ))
    },  async Portfolio(data) {
        return await axiosInstance.get(
            `/portfolio/all/${data.userProfileId}?page=1&per_page=9`);
    },
    async Allcomment(data) {
        return (await axiosInstance.get(
            `/portfolio/gellAllCommentByPortfolioId/${data.postId}?page=1&per_page=5` , data
        ))
    },
    async AddLike(data) {
        return (await axiosInstance.patch(
            `/portfolio/addLikeUnlike`,data
        ))
    },
    async addPortfolio(data) {
        return (await axiosInstance.post(
            `/portfolio/addPortfolio`,data
        ))
    }
}
export default PortfolioModal;