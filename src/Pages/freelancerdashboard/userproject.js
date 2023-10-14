import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import Sidenavbar from './layout/Sidenavbar';
import Topnavbar from './layout/topnavbar';
import Form from 'react-bootstrap/Form';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import ProjectModal from '../../modal/Project.modal';
import moment from 'moment';
import { IoHeartOutline } from 'react-icons/io5';
import Phoneviewfooter from '../../Layout/Phoneviewfooter';
function Userproject() {
    const [Userproj, setUserproj] = useState([]);
    const [Proexport, setProexport] = useState([]);
    const [activeTab, setActiveTab] = useState("Tab1");
    const [favproject, setfavproject] = useState([]);
    const [Answer ,setAnswer] = useState([]);
    const handleClick = (tab) => {
        setActiveTab(tab);
    };
    const [fillColor, setFillColor] = useState("lightgrey"); // Initial fill color, can be any valid color


    const handleButtonClick = () => {
        const userId = localStorage.getItem("UserID");
        ProjectModal.getfavproject({ userId }).then((response) => {
            setfavproject(response.data);
            // setActiveTab(tab);
            console.log(response.data)

            // const newColor = fillColor === "lightgrey" ? "red" : "lightgrey";
            // setFillColor(newColor);
        }).catch((error) => {
            console.log("error => ", error)
        })
    }

    const columns = [
        {
            name: 'Client Name',
            selector: (row) => row.FirstName,
            width:'120px'
        },


        {
            name: 'Description',
            selector: (row) => row.Description,

            cell: row => {
                // console.log(row)
                return (
                    <div style={{
                        "height": "20px",
                        "overflow": 'hidden',
                        "text-overflow": "ellipsis"
                    }}>
                        <Link to={`/FreeProject/${row.ProjectId}`}>{row.Description}</Link>
                    </div>
                    // <Route path=":id" element={<Orderdetailsbreief />} />

                )
            },
        },
        {
            name: 'Budget',
            selector: (row) => row.Budget,
        },
        {
            name: 'Date',
            selector: (row) => row.ApplyDate,
            cell: row => {
                return <div> {moment(row.ApplyDate).format('DD/MM/YYYY')} </div>
            },
        }

    ]
    useEffect(() => {
        ProjectModal.Allproject().then((response) => {
            console.log(response.data);
            setUserproj(response.data);

        }).catch((error) => {
            console.log("error => ", error)
        })
    }, [])
    useEffect(() => {
        ProjectModal.Allproject().then((response) => {
            console.log(response.data);
            setProexport(response.data);

        }).catch((error) => {
            console.log("error => ", error)
        })
    }, [])
    useEffect(() => {
        const userId = localStorage.getItem("UserID");
        ProjectModal.getExpertiseByUserId({ userId }).then((response) => {
            setProexport(response.data);
            console.log(response.data);

        }).catch((error) => {
            console.log("error => ", error)
        })
    }, [])
    useEffect(() => {
        const userId = localStorage.getItem("UserID");
        ProjectModal.getfavproject({ userId }).then((response) => {
            setfavproject(response.data);
            console.log(response.data);

        }).catch((error) => {
            console.log("error => ", error)
        })
    }, [])
    useEffect(() => {
        const userId = localStorage.getItem("UserID");
        ProjectModal.getinterestedbyid({ userId }).then((response) => {
            setAnswer(response.data);
            console.log(response.data);

        }).catch((error) => {
            console.log("error => ", error)
        })
    }, [])
    const customStyles = {

        // table:{
        //     style:{
        //         border:'1px solid lightgrey'
        //     },
        // },
        headCells: {
            style: {
                fontSize: '13px',
                fontWeight: 700,
                display: 'flex',
                justifyContent: 'center',

            },
        },
        rows: {
            style: {
                border: '1px solid lightgrey',
                fontSize: '16px',
                fontWeight: 400,
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: '#eee'
            },
        },
        Cell: {
            style: {
                border: '1px solid lightgrey',
            },
        },
    };
    return (
        <>
            <Container fluid className='dashboard-conatiner-top' >
                <Row>
                    <Col sm={1} className=' d-none d-sm-block'>
                        <Sidenavbar />
                    </Col>
                    <Col style={{ padding: '0px' }} sm={8} xs={12} className='dashboard-conatiner-top-row '>
                        <Container className='square border border-bottom-0'>
                            <Topnavbar activeLink="Project" />
                            <Row className='d-none d-sm-block'>

                                <Col sm={12} xs={12} className="PostRequriment3  ">
                                    <div className='middle-container '>
                                        <Form.Control type="text" className='square rounded-pill CiSearch mt-4 mb-4 ' placeholder="Search Project" style={{ backgroundColor: "#efefef", height: '40px' }} />
                                        <div style={{ border: "1px solid grey", width: '100%', height: '43px', padding: '5px' }}>
                                            <div
                                                className={`tab  ${activeTab === "Tab1" ? "active" : ""}`}
                                                onClick={() => handleClick("Tab1")}

                                            >
                                                <button className={`userproject  ${activeTab === "Tab1" ? "project-button " : ""}`} >Newest</button>
                                            </div>
                                            <div
                                                className={`tab  ${activeTab === "Tab2" ? "active" : ""}`}
                                                onClick={() => handleClick("Tab2")}
                                            >
                                                <button className={`userproject  ${activeTab === "Tab2" ? "project-button " : ""}`} >Expertize</button>
                                            </div>
                                            <div
                                                className={`tab  ${activeTab === "Tab4" ? "active" : ""}`}
                                                onClick={() => handleClick("Tab4")}
                                            >
                                                <button className={`userproject  ${activeTab === "Tab4" ? "project-button " : ""}`} >Accepted</button>
                                            </div>
                                            <div
                                                className={`tab  ${activeTab === "Tab3" ? "" : ""}`}
                                                onClick={() => handleClick("Tab3")}
                                            >
                                                    <IoHeartOutline   onClick={handleButtonClick} className={`${activeTab === "Tab3" ? "activesvg" : ""}`} style={{float:'right',fontSize:"25px",}}/>
                                                {/* <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill={fillColor} class="tab bi bi-heart-fill" viewBox="0 0 16 16" style={{ position: 'relative', float: 'right' }}>
                                                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                                </svg>                                          */}
                                                </div>

                                        </div>
                                        {activeTab === "Tab1" && <>
                                            <div style={{ border: "1px solid grey", width: '100%', padding: '5px' }}>
                                                <DataTable
                                                    columns={columns}
                                                    data={Userproj}
                                                    pagination
                                                    customStyles={customStyles}
                                                    noDataComponent="Add Your Business" //or your component
                                                />
                                            </div>
                                        </>
                                        }
                                        {activeTab === "Tab2" && <>
                                            <div style={{ border: "1px solid grey", width: '100%', padding: '5px' }}>
                                                <DataTable
                                                    columns={columns}
                                                    data={Proexport}
                                                    pagination
                                                    customStyles={customStyles}
                                                />
                                            </div>
                                        </>
                                        }
                                        {activeTab === "Tab3" && <>
                                            <div style={{ border: "1px solid grey", width: '100%', padding: '5px' }}>
                                                <DataTable
                                                    columns={columns}
                                                    data={favproject}
                                                    pagination
                                                    customStyles={customStyles}
                                                />
                                            </div>
                                        </>
                                        }
                                         {activeTab === "Tab4" && <>
                                            <div style={{ border: "1px solid grey", width: '100%', padding: '5px' }}>
                                                <DataTable
                                                    columns={columns}
                                                    data={Answer}
                                                    pagination
                                                    customStyles={customStyles}
                                                    noDataComponent="You didn't Answer Any Project" //or your component
                                                />
                                            </div>
                                        </>
                                        }

                                    </div>
                                </Col>
                            </Row>

                            <Row>

                                <div className='d-block d-sm-none' style={{ display: 'flex', marginTop: '20px' }}>

                                    <button style={{ border: '1px solid black', marginRight: '4px', paddingLeft: '10px', paddingRight: '10px', borderRadius: '8px', backgroundColor: 'white',fontSize:'16px' }}> <b> Newest</b></button>

                                    <button style={{ border: '1px solid black', marginRight: '4px', paddingLeft: '10px', paddingRight: '10px', borderRadius: '8px', backgroundColor: 'white',fontSize:'16px' }}> <b>Expertise </b> </button>
                                    <button style={{ border: '1px solid black', marginRight: '4px', paddingLeft: '10px', paddingRight: '10px', borderRadius: '8px', backgroundColor: 'white',fontSize:'16px' }}> <b>Answers </b> </button>

                                    <button style={{ border: '1px solid black',  paddingLeft: '10px', paddingRight: '10px', borderRadius: '8px', backgroundColor: 'white',fontSize:'16px' }}> <b> Favourites</b> </button>

                                </div>



                                <Card className='d-block d-sm-none' style={{ padding: '0px', backgroundColor: 'ButtonHighlight', Width: '100%', marginBottom: '20px', marginTop: '20px', borderRadius: '25px', borderEndEndRadius: '0px', borderEndStartRadius: '0px', border: 'none', cursor: 'pointer' }}>
                                    <Col xs={12}>
                                        {/* {oederTable && oederTable.map((tableitem) => */}
                                        {/* <Link to={`/Orderdetailsbreief/${tableitem.PostreqID}`}> */}

                                        <Card style={{ margin: '15px', padding: '10px', borderRadius: '20px', border: 'none', boxShadow: '1px 2px 1px ' }}>

                                            <h5>Heading
                                                {/* {tableitem.Title} */}
                                            </h5>

                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                                                <p style={{ fontSize: '15px' }}>
                                                    Lorem ipsum dolor, sit amet consectetur
                                                    adipisicing elit. Nisi aspernatur eligendi.
                                                </p>
                                                <span style={{ float: 'right' }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="green" class="bi bi-dot" viewBox="0 0 16 16">
                                                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                                                    </svg>
                                                </span>
                                            </div>


                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <p style={{ color: 'grey' }}>$200-$350</p>
                                                <p style={{ color: 'grey' }}> <svg style={{ color: 'grey' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stopwatch" viewBox="0 0 16 16">
                                                    <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z" />
                                                    <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z" />
                                                </svg> 22-10-2001</p>
                                            </div>

                                        </Card>
                                        {/* </Link> */}
                                        {/* )} */}


                                    </Col>

                                    <Col xs={12}>
                                        {/* {oederTable && oederTable.map((tableitem) => */}

                                        <Link
                                        // to={`/Orderdetailsbreief/${tableitem.PostreqID}`}
                                        >

                                            <Card style={{ margin: '15px', padding: '10px', borderRadius: '20px', border: 'none', boxShadow: '1px 2px 1px ' }}>

                                                <h5>Heaidngs
                                                    {/* {tableitem.CategoryId} - {tableitem.SubCategoryId} */}
                                                </h5>

                                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                                                    <p style={{ fontSize: '15px' }}>
                                                        {/* {tableitem.Title} */}
                                                    </p>
                                                    <span style={{ float: 'right' }}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="green" class="bi bi-dot" viewBox="0 0 16 16">
                                                            <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                                                        </svg>
                                                    </span>
                                                </div>


                                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    <p style={{ color: 'grey' }}>$200-$350</p>
                                                    <p style={{ color: 'grey' }}> <svg style={{ color: 'grey' }} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stopwatch" viewBox="0 0 16 16">
                                                        <path d="M8.5 5.6a.5.5 0 1 0-1 0v2.9h-3a.5.5 0 0 0 0 1H8a.5.5 0 0 0 .5-.5V5.6z" />
                                                        <path d="M6.5 1A.5.5 0 0 1 7 .5h2a.5.5 0 0 1 0 1v.57c1.36.196 2.594.78 3.584 1.64a.715.715 0 0 1 .012-.013l.354-.354-.354-.353a.5.5 0 0 1 .707-.708l1.414 1.415a.5.5 0 1 1-.707.707l-.353-.354-.354.354a.512.512 0 0 1-.013.012A7 7 0 1 1 7 2.071V1.5a.5.5 0 0 1-.5-.5zM8 3a6 6 0 1 0 .001 12A6 6 0 0 0 8 3z" />
                                                    </svg> 22-10-2001</p>
                                                </div>

                                            </Card>

                                        </Link>
                                        {/* )} */}
                                    </Col>
                                </Card>


                            </Row>



                        </Container>
                    </Col>
                </Row>
            </Container >
            <Phoneviewfooter />
        </>
    )
}

export default Userproject;