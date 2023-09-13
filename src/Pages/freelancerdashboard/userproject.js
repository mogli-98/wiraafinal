import React ,{useState, useEffect}from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Sidenavbar from './layout/Sidenavbar';
import Topnavbar from './layout/topnavbar';
import Form from 'react-bootstrap/Form';
import DataTable from 'react-data-table-component';
import clientBoard from '../../Model/clientdash';
// import Orderbook from '../../Model/Order.model';
import { Link } from 'react-router-dom';
function Userproject() {

    const [Userproj, setUserproj] = useState([]);
    const [Proexport, setProexport] = useState([]);
    const [activeTab, setActiveTab] = useState("Tab1");
    const handleClick = (tab) => {
        setActiveTab(tab);
    };
    const [fillColor, setFillColor] = useState("lightgrey"); // Initial fill color, can be any valid color

    const handleButtonClick = () => {
      // Change the color on each button click
      const newColor = fillColor === "lightgrey" ? "red" : "lightgrey";
      setFillColor(newColor);
    };
    const columns = [
        {
            name: 'Client Name',
            selector: (row) => row.userName,
            maxWidth:'70px'
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
                            <Link to={`/ProProjectDetails/${row.questionId}`}>11</Link>
                          </div>
                    // <Route path=":id" element={<Orderdetailsbreief />} />
                   
                )
            },
        },
        {
            name: 'Budget',
            selector: (row) => row.designation,
        },
        {
            name: 'Date',
            selector: (row) => row.applyDate,
        }
         
    ]
    useEffect(() => {
        const id = localStorage.getItem("id");
        clientBoard.userpro({id}).then((response)=>{
        console.log(response.data);
        setUserproj(response.data);
     
    });
    }, [])
    useEffect(() => {
        const id = localStorage.getItem("id");
        clientBoard.userproexpert({id}).then((response)=>{
        console.log(response.data);
        setProexport(response.data);
     
    });
    }, [])
    // useEffect(() => {
    //     const id = localStorage.getItem("id");
    //     Orderbook.favproject({id}).then((response) =>)
    // }, [])
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
                            <Row className=''>
                                <Col sm={12} xs={12} className="PostRequriment3  ">
                                    <div className='middle-container '>
                                    <Form.Control type="text" className='square rounded-pill CiSearch mt-4 mb-4 ' placeholder="Search Project" style={{ backgroundColor: "#efefef", height:'40px' }} />
                                        <div style={{border:"1px solid grey" ,width:'100%',height:'43px',padding:'5px'}}>
                                        <div
                                            className={`tab  ${activeTab === "Tab1" ? "active" : ""}`}
                                            onClick={() => handleClick("Tab1")}
                                        >
                                            <button className='project-button userproject'>Newest</button>
                                        </div>
                                        <div
                                            className={`tab  ${activeTab === "Tab1" ? "active" : ""}`}
                                            onClick={() => handleClick("Tab2")}
                                        >
                                            <button className='project-button project-button1 userproject'>Expertize</button>
                                        </div>
                                        <div
                                            className={`tab  ${activeTab === "Tab1" ? "active" : ""}`}
                                            onClick={() => handleClick("Tab3")}
                                        >
                                            <button className='project-button project-button1 userproject'>Accepted</button>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" onClick={handleButtonClick} width="25" height="25" fill={fillColor} class="bi bi-heart-fill" viewBox="0 0 16 16"style={{position:'relative',float:'right'}}>
                                            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                                        </svg> 
                                        </div>
                                        {activeTab === "Tab1" && <>
                                            <div style={{border:"1px solid grey" ,width:'100%',padding:'5px'}}>
                                            <DataTable
                                                columns={columns}
                                                data={Userproj}
                                                pagination
                                            />
                                            </div>
                                            </>
                                        }
                                        {activeTab === "Tab2" && <>
                                        <div style={{border:"1px solid grey" ,width:'100%',padding:'5px'}}>
                                            <DataTable
                                                columns={columns}
                                                data={Proexport}
                                                pagination
                                            />
                                            </div>
                                            </>
                                        }
                                  
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Userproject;