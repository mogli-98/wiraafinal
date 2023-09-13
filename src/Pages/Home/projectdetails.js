import React,{useEffect, useState} from 'react';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';
import "../../Aseset/css/project.css"
import WiraaLogo from '../../Aseset/image/Wiraalogo.png';
import { Link } from 'react-router-dom';
import clientBoard from '../../Model/clientdash';
function PostRequirement() {
    const [projectDetails , setprojectDetails] = useState([]);
    
    useEffect(() => {
        clientBoard.Projectdeatils().then((response)=>{
            console.log(response.data);
            setprojectDetails(response.data);
    
        }
        
        )
    }, [])

    return (

        <>
            <Container  >
                <Row className=''>
                    <Col sm={3}>
                        <Link to="/"><img src={WiraaLogo} alt="" className='mt-5 ' /></Link>
                    </Col>
                    <Col sm={9} className='PostRequirement-top border-top-0'>
                        <div className='square border border-top-0'>
                            <Link to="/Home/Project">
                                <Card className='d-block d-sm-none mt-4 mb-2 shadow p-3 mb-5 bg-white rounded'>
                                    <div className="mt-2 mb-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-caret-left-square-fill " viewBox="0 0 16 16">
                                            <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm10.5 10V4a.5.5 0 0 0-.832-.374l-4.5 4a.5.5 0 0 0 0 .748l4.5 4A.5.5 0 0 0 10.5 12z" />
                                        </svg>
                                        <span>Project Detailt</span>
                                    </div>
                                </Card>
                            </Link>
                            </div>
                            <div className="mt-5 mb-4 d-none d-sm-block">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-caret-left-square-fill " viewBox="0 0 16 16">
                                        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm10.5 10V4a.5.5 0 0 0-.832-.374l-4.5 4a.5.5 0 0 0 0 .748l4.5 4A.5.5 0 0 0 10.5 12z" />
                                    </svg>
                                    <span>Project Detailt</span>
                                </div>
                    </Col>
                </Row>
                <Row >
                    <Col sm={3} className='PostRequirement2 d-none d-sm-block'>
                        <div className='container-left mt-5'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-right-circle container-left-first " viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                            </svg><span className='container-left-first-span'> <b>Login</b></span><br />
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-plus container-left-second" viewBox="0 0 16 16">
                                <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                            </svg><span className='container-left-first-span'>  <b>Singup</b></span>
                        </div>
                        <br />
                        <div className='container-search'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-search mt-5" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                            <h6 className=' ' style={{ color: "#008080" }}>Let the match <br /> being...</h6>.
                            <p className=''> Post a request and start
                                <br /> conversation with <br />
                                professionals</p>
                        </div>
                    </Col>
                    <Col sm={6} className="project square border-end border-start">
                        <div className=' '>
                            <div className="project-top m-3">
                                <h6 className='text-center text-light '>Join as a professional</h6>
                            </div>
                            <Card className='m-3' style={{background: "#efefef "}}>
                                <div className=' m-3 project-details'>
                                    <p className='mt-4'><b>Tilte</b>
                                    <br />Graphic Designer for brand identity
                                    </p>
                                    
                                    <p className='mt-4'><b>Description</b>
                                        <br />
                                       {projectDetails.projectDetail['pR_Description']}
                                    </p>
                                   
                                    <p className='mt-4'><b>Category</b>
                                        <br />{projectDetails.category['curriculumName']}
                                    </p>
                                 
                                    <p className='mt-4'><b>Budget</b>
                                        <br />INR {projectDetails.projectDetail['budget']}
                                    </p>
                                  
                                </div>

                            </Card>
                           
                        </div>
                    </Col>
                    <Col sm={3} className='project-deatils4 square border-end ' >
                        <Card style={{ background: "#fff "}} className="m-3">
                           <p className='text-center mt-2'><b><u>Details</u></b></p>
                           <Table borderless>
                                <tbody>
                                    <tr>
                                        <td className='left-td'>Status</td>
                                        <td className='right-td text-success'><b>{projectDetails.projectDetail["postStatus"]}</b></td>
                                    </tr>
                                    <tr>
                                        <td className='left-td'>Name</td>
                                        <td className='right-td'><b>Suresh</b></td>
                                    </tr>
                                    <tr>
                                        <td className='left-td'>Order Date</td>
                                        <td className='right-td'><b>{projectDetails.projectDetail['serviceStartDate']}</b></td>
                                    </tr>
                                    <tr>
                                        <td className='left-td'>Due Date</td>
                                        <td className='right-td'><b>{projectDetails.projectDetail['postExpireDate']}</b></td>
                                    </tr>
                                    <tr>
                                        <td className='left-td'>Responser</td>
                                        <td className='right-td'><b>49</b></td>
                                    </tr>
                                </tbody>
                           </Table>
                        </Card>
                        <div className='mt-3 projectdetail-last'>
                            <span>About</span> <span>Career</span> <span>Term of services</span> 
                            <span>Conatct</span> <span>FAQ</span> <span>Blog</span>  
                            <span>Privacy policy</span> <span>© 2023 Wiraa. All Rights Reserved</span>       
                        </div> 
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default PostRequirement