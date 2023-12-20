import axiosInstance from "../lib/axiosInstance";
const PortfolioModal = {
  async addcomments(data) {
    return await axiosInstance.post(`/portfolio/addComment`, data);
  },
  async Portfolio(data) {
    console.log("dattaaa----------------->", data);
    return await axiosInstance.get(
      `/portfolio/all/${data.userProfileId}?page=${data.page}&per_page=9`
    );
  },
  async Allcomment(data) {
    return await axiosInstance.get(
      `/portfolio/gellAllCommentByPortfolioId/${data.postId}?page=1&per_page=5`,
      data
    );
  },
  async AddLike(data) {
    return await axiosInstance.patch(`/portfolio/addLikeUnlike`, data);
  },
  async addPortfolio(data) {
    return await axiosInstance.post(`/portfolio/addPortfolio`, data);
  },
  async searchPortfolio(data) {
    console.log(data, "AARA HAI DATA");
    return await axiosInstance.get(
      `/portfolio/subCategory/${data.subCategoryId}/${data.userProfileId}?page=${data.page}&per_page=10`,
      data
    );
  },
  async Portfilobyid(data) {
    console.log(data);
    return await axiosInstance.get(
      `/portfolio/byId/${data.userProfileId}?page=1&per_page=10`,
      data
    );
  },
  async deletePortfolio(userProfileId, PostID) {
    console.log("Check api.............", userProfileId, PostID);
    // console.log(data)
    return await axiosInstance.delete(
      `/portfolio/deletePortfolio/${userProfileId}/${PostID}`
    );
  },
};
export default PortfolioModal;
