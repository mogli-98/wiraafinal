import React,{useState,useEffect} from 'react';
import '../../../asset/css/dashboard.css'
import Portfoliocard from '../../../Model/component/Portfoliocard';
import PortfolioModal from '../../../modal/Portfolio.modal';
import { Container } from 'react-bootstrap';
function Portfolio() {
    const [protfoliData,setprotfoliData] = useState([]);
    const fetchdata = () => {
        const userProfileId= localStorage.getItem("userProfileId");
       PortfolioModal.Portfolio({userProfileId}).then((response)=>{
        console.log(response.data);
        setprotfoliData(response.data);
       });
    }
    useEffect(() => {
    fetchdata();
    }, [])
    return (
        <>
            <Container style={{marginBottom:'80px'}} >
            <div style={
                {
                    "display":"flex",
                    "flexWrap":"wrap",
                    "flexDirection":"row"
                }
            } onClick={fetchdata}>
                {/* <Col sm={4}> */}
                    {protfoliData && protfoliData.map((pdata)=> <Portfoliocard data={pdata} /> )}
                {/* </Col> */}
            </div>
          </Container>
        </>
    )
}

export default Portfolio