import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import '../../Aseset/css/dashboard.css'
import Sidenav from './layout/Sidenav';
import Topnav from './layout/topnav';
import Form from 'react-bootstrap/Form';
import DataTable from 'react-data-table-component';
import Orderbook from '../../Model/Order.model';
import { Link } from "react-router-dom";
import ProjectDetail from '../../Model/project.model';
function Userproject() {

    const [activeTab, setActiveTab] = useState("Tab1");
    const handleClick = (tab) => {
        setActiveTab(tab);
    };
    const [allQues, setallQues] = useState();
    const [Myquestion, setMyquestion] = useState();
    const columns = [
        {
            name: 'Clinet',
            cell: row => {
                return <a href='/Quesans'>{row.userName}</a>;

            },
            maxWidth:'100px'
        },
        {
            name: 'Description',
            selector: (row) => row.ProjectDescription,
            maxWidth:'500px',
            cell: row => {
                // console.log(row)
                return (
                    <div style={{ 
                        "height":"20px",
                    "overflow":'hidden',
                    "text-overflow": "ellipsis"}}>
                        <Link to={`/Projeectdetailss/${row.PostreqID}`}>{row.ProjectDescription}</Link></div>
                    // <Route path=":id" element={<Orderdetailsbreief />} />
                   
                )
            },
        },
        {
            name: 'Budget',
            selector: (row) => row.Budget,
            maxWidth:'100px'
        },
        {
            name: 'Date',
            selector: (row) => row.ApplyDate,
            maxWidth:'100px'
        },
    ]

    useEffect(() => {
        ProjectDetail.Allproject().then((response) => {
            console.log(response.data);
            setallQues(response.data);

        });
    }, [])
    useEffect(() => {
        const id = localStorage.getItem("id");
        ProjectDetail.Allproject().then((response) => {
            console.log(response.data);
            setMyquestion(response.data);

        });
    }, [])
    return (
        <>
            <Container fluid className='dashboard-conatiner-top' >
                <Row>
                    <Col sm={1} xs={2} className=''>
                        <Sidenav />
                    </Col>


                    <Col sm={8} xs={10} className='dashboard-conatiner-top-row '>
                        <Container className='square border border-bottom-0'>
                            <Topnav />
                            <Row>
                                <Col>
                                    <Form.Control type="text" className=' mt-3 square rounded-pill CiSearch' placeholder="Search Project" style={{ backgroundColor: "#efefef", height: "45px" }} />

                                    <div className='mt-1 mb-5' style={{border:'2px solid #efefef' ,height:'50px'}}>
                                        <div
                                            className={`tab  ${activeTab === "Tab1" ? "active" : ""}`}
                                            onClick={() => handleClick("Tab1")}
                                        >
                                            <button className='project-button userproject m-2'>Newest</button>
                                        </div>
                                        {/* <div
                                            className={`tab  ${activeTab === "Tab1" ? "active" : ""}`}
                                            onClick={() => handleClick("Tab2")}

                                        >
                                            <button className='project-button project-button1 m-2 userproject'>Expertize</button>
                                        </div>
                                        <div
                                            className={`tab  ${activeTab === "Tab1" ? "active" : ""}`}
                                            onClick={() => handleClick("Tab3")}
                                        >
                                            <button className='project-button project-button1 userproject m-2'>Accepte</button>
                                        </div> */}
                                    </div>
                                    {activeTab === "Tab1" && <>
                                        <div className=''>
                                            <DataTable className='bordered'
                                                columns={columns}
                                                data={allQues}
                                                pagination
                                                theme='border'
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

export default Userproject;