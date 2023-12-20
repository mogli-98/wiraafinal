import React, { useState, useEffect } from "react";
import "../../../asset/css/dashboard.css";
import Portfoliocard from "../../../Model/component/Portfoliocard";
import PortfolioModal from "../../../modal/Portfolio.modal";
import { Container } from "react-bootstrap";
import Loading from "./Loading";
function Portfolio(selectedOptions) {
  const [protfoliData, setprotfoliData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  console.log("data = >", selectedOptions?.data?.value);
  const fetchdata = () => {
    console.log("called");
    const userProfileId = localStorage.getItem("userProfileId");
    try {
      if (selectedOptions?.data?.value) {
        console.log("1api");
        const subCategoryId = selectedOptions?.data?.value;
        console.log(subCategoryId, "kusch to hai");
        const userProfileId = localStorage.getItem("userProfileId");
        PortfolioModal.searchPortfolio(subCategoryId, userProfileId, page)
          .then((response) => {
            console.log(response.data, "data1");
            setprotfoliData(response.data);
            setprotfoliData((prev) => [...prev, ...response.data]);
          })
          .catch((error) => {
            console.log("error => ", error);
          });
      } else {
        console.log("2api");
        const userProfileId = localStorage.getItem("userProfileId");

        PortfolioModal.Portfolio({ userProfileId, page })
          .then((response) => {
            setprotfoliData(response.data, "data2");
            setprotfoliData((prev) => [...prev, ...response.data]);
          })
          .catch((error) => {
            console.log("error => ", error);
          });
      }
    } catch (error) {
      console.log("error => ", error);
    }
  };

  useEffect(() => {
    //console.log("here")
    fetchdata();
  }, [page]);
  const changeSelect = () => {
    setprotfoliData([]);
  };
  useEffect(() => {
    console.log("here2");
    changeSelect();
    fetchdata();
  }, [selectedOptions]);

  const handelInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);

  return (
    <>
      <Container style={{ marginBottom: "80px" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
          }}
          onClick={fetchdata}
        >
          {protfoliData?.map((pdata) => (
            <Portfoliocard data={pdata} />
          ))}
          {/* {loading && <Loading />} */}
        </div>
      </Container>
    </>
  );
}

export default Portfolio;
