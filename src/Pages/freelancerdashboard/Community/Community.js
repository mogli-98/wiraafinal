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
            name: 'category',
            selector: (row) => <Link to='/Quesans/:id'>{row.category[0]}</Link>
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
        Orderbook.community({id}).then((response) => {
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
                                    <Form.Control type="text" className='square rounded-pill CiSearch' placeholder="Search Project" style={{ backgroundColor: "#efefef" }} />
                                 
                                       <div className='mt-5 mb-5'>
                                       <div
                                            className={`tab  ${activeTab === "Tab1" ? "active" : ""}`}
                                            onClick={() => handleClick("Tab1")}
                                        >
                                            <button className='project-button userproject'>All question</button>
                                        </div>
                                        <div
                                            className={`tab  ${activeTab === "Tab1" ? "active" : ""}`}
                                            onClick={() => handleClick("Tab2")}
                                        >
                                            <button className='project-button project-button1 userproject ' >My question</button>
                                        </div>
                                        <div
                                            className={`tab  ${activeTab === "Tab1" ? "active" : ""}`}
                                            onClick={() => handleClick("Tab3")}
                                        >
                                            <button className='project-button project-button1 userproject'>My Answer</button>
                                        </div>
                                        </div>                                
                                    {activeTab === "Tab1" && <>
                                        <div className=''>
                                            <DataTable className='bordered'
                                                columns={columns}
                                                data={allQues}
                                                pagination
                                            />
                                        </div>
                                    </>
                                    }
                                    {activeTab === "Tab2" && <>
                                        <div className='m-3'>
                                            <DataTable className='bordered'
                                                columns={columns}
                                                data={Myquestion}
                                                pagination
                                            />
                                        </div>
                                    </>
                                    }
                                    {activeTab === "Tab3" && <>
                                        <div className='m-3'>
                                            <DataTable className='bordered'
                                                columns={columns}
                                                data={allQues}
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