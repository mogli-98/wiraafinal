import React,{useState,useEffect} from 'react';
import {Container } from "react-bootstrap";
import '../../../Aseset/css/dashboard.css'
import { Link } from 'react-router-dom';
import Auth from '../../../Model/Auth.model';
import Portfoliocard from '../../../Model/component/Portfoliocard';

function Portfolio() {
    const [protfoliData,setprotfoliData] = useState([]);
   
    useEffect(() => {
        const id = localStorage.getItem("id");
       Auth.Portfolio({id}).then((response)=>{
        
        console.log(response.data);
        setprotfoliData(response.data);
       });
    }, [])
            
    
    return (
        <>
            {/* <Container > */}
            <div style={
                {
                    "display":"flex",
                    "flexWrap":"wrap",
                    "flexDirection":"row"
                }
            }>
                {/* <Col sm={4}> */}
                    {protfoliData && protfoliData.map((pdata)=> <Portfoliocard data={pdata} /> )}
                {/* </Col> */}
            </div>
          {/* </Container> */}
        </>
    )
}

export default Portfolio