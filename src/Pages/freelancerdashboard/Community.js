import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import "../../Aseset/css/freelanceredashboard.css";
import Sidenavbar from './layout/Sidenavbar';
import Topnavbar from './layout/topnavbar';
import Form from 'react-bootstrap/Form';
import DataTable from 'react-data-table-component';
import Orderbook from '../../Model/Order.model';
import { Link } from "react-router-dom";
function Community() {

    const [activeTab, setActiveTab] = useState("Tab1");
    const handleClick = (tab) => {
        setActiveTab(tab);
    };
    const [allQues, setallQues] = useState();
    const [Myquestion , setMyquestion] = useState();
    const [allanswer , getAllanswer] = useState();
    const [fillColor, setFillColor] = useState("lightgrey"); // Initial fill color, can be any valid color

  const handleButtonClick = () => {
    // Change the color on each button click
    const newColor = fillColor === "lightgrey" ? "red" : "lightgrey";
    setFillColor(newColor);
  };
    const columns = [
        {
            name: 'Professional',
            cell: row => {
                return <a href='/Quesans'>{row.userName}</a>;
            },
        },
        {
            name: 'Questions',
            selector: (row) => row.title
        },
        {
            name: 'Category',
            selector: (row) => row.category,
            
            cell: row => {
                // console.log(row)
                return (
                    <div style={{ 
                        "height":"20px",
                    "overflow":'hidden',
                    "text-overflow": "ellipsis"}}>
                        <Link to={`/Quesans/${row.questionId}`}>{row.category}</Link></div>
                    // <Route path=":id" element={<Orderdetailsbreief />} />
                   
                )
            },
            maxWidth: "450px", 
                 
        },
        {
            name: 'Response',
            selector: (row) => row.answerCount
        },
    ]
   
    useEffect(() => {
        const id = localStorage.getItem("id");
        Orderbook.community({id}).then((response) => {
            console.log(response.data);
            setallQues(response.data);

        });
    }, [])
    
    useEffect(() => {
        const id = localStorage.getItem("id");
        Orderbook.Myquestion({id}).then((response) => {
            console.log(response.data);
            getAllanswer(response.data);

        });

    }, [])
    useEffect(() => {
        const id = localStorage.getItem("id");
        Orderbook.allanswer({id}).then((response) => {
            console.log(response.data);
            setMyquestion(response.data);

        });
        
    }, [])
    return (
        <>
            <Container fluid className='dashboard-conatiner-top' >
                <Row>
                    <Col sm={1} xs={2} className=''>
                        <Sidenavbar />
                    </Col>


                    <Col sm={8} xs={10} className='dashboard-conatiner-top-row '>
                        <Container className='square border border-bottom-0'>
                            <Topnavbar />
                            <Row>
                                <Col>
                                    <Form.Control type="text" className='square rounded-pill CiSearch mt-3' placeholder="Search Project" style={{ backgroundColor: "#efefef", height:'40px' }} />
                                       <div className='mt-3 ' style={{border:"1px solid grey" ,width:'100%',height:'43px',padding:'5px'}}>
                                            <div
                                                    className={`tab  ${activeTab === "Tab1" ? "active" : ""}`}
                                                    onClick={() => handleClick("Tab1")}
                                                >
                                                    <button className='project-button userproject'>All question</button>
                                            </div>
                                            <div
                                                className={`tab  ${activeTab === "Tab2" ? "active" : ""}`}
                                                onClick={() => handleClick("Tab2")}
                                            >
                                                <button className='project-button project-button1 userproject ' >My question</button>
                                            </div>
                                            <div
                                                className={`tab  ${activeTab === "Tab3" ? "active" : ""}`}
                                                onClick={() => handleClick("Tab3")}
                                            >
                                                <button className='project-button project-button1 userproject'>My Answer</button>
                                            </div>
                                            <svg xmlns="http://www.w3.org/2000/svg" onClick={handleButtonClick} width="25" height="25" fill={fillColor} class="bi bi-heart-fill" viewBox="0 0 16 16"style={{position:'relative',float:'right'}}>
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg>
                                              
                                        </div>   
                                                                
                                    {activeTab === "Tab1" && <>
                                        <div className=''style={{border:"1px solid grey" ,width:'100%',padding:'5px'}}>
                                            <DataTable className='bordered'
                                                columns={columns}
                                                data={allQues}
                                                pagination
                                            />
                                        </div>
                                    </>
                                    }
                                    {activeTab === "Tab2" && <>
                                        <div className='' style={{border:"1px solid grey" ,width:'100%',padding:'5px'}}>
                                            <DataTable className='bordered'
                                                columns={columns}
                                                data={Myquestion}
                                                pagination
                                            />
                                        </div>
                                    </>
                                    }
                                    {activeTab === "Tab3" && <>
                                        <div className='' style={{border:"1px solid grey" ,width:'100%',padding:'5px'}}>
                                            <DataTable className='bordered'
                                                columns={columns}
                                                data={allanswer}
                                                pagination
                                            />
                                        </div>
                                    </>
                                    }
                                </Col>
                            </Row>

                        </Container>
                    </Col>
                </Row>
            </Container>



        </>
    );
};

export default Community;