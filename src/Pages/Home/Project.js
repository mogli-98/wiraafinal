import React ,{useEffect, useState}from 'react';
import { Container, Row, Col,Card } from 'react-bootstrap';
import "../../Aseset/css/postrequirement.css"
import Form from 'react-bootstrap/Form';
import WiraaLogo from '../../Aseset/image/Wiraalogo.png';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import DataTable from 'react-data-table-component';
import Orderbook from '../../Model/Order.model';
function Project() {

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
        },
        {
            name: 'Description',
            selector: (row) => row.title
        },
        {
            name: 'Budget',
            selector: (row) => <Link to='/Quesans/:id'>{row.category[0]}</Link>
        },
        {
            name: 'Date',
            selector: (row) => row.answerCount
        },
    ]

    useEffect(() => {
        const id = localStorage.getItem("id");
        Orderbook.community({ id }).then((response) => {
            console.log(response.data);
            setallQues(response.data);

        });
    }, [])
    useEffect(() => {
        const id = localStorage.getItem("id");
        Orderbook.community({ id }).then((response) => {
            console.log(response.data);
            setMyquestion(response.data);

        });
    }, [])
   
    return (
        <>
            <Container  >
                <Row className=''>
                    <Col sm={3}>
                        <Link to="/"><img src={WiraaLogo} alt="" className='mt-5 ' /></Link>

                    </Col>
                    <Col sm={9} className='PostRequirement-top  square border border-top-0'>
                        <div className=''>
                            <Card className='d-block d-sm-none mt-4 mb-2 shadow p-3 mb-5 bg-white rounded'>
                                <div className="mt-2 mb-2">
                                    
                                    <span> Project</span>
                                </div>
                            </Card>
                            <div className="mt-5 mb-4 d-none d-sm-block">
                                    
                                    <span> Project</span>
                                </div>
                            </div>
                           
                        
                    </Col>

                </Row>
                <Row >
                    <Col sm={3} className='PostRequirement2 d-none d-sm-block '>

                    <div className='container-left mt-5'>
                           <Link to='/Account/login'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-right-circle container-left-first " viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                                </svg><span className='container-left-first-span'> <b>Login</b></span>
                           </Link><br />

                            <Link to='/Account/singup'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-person-plus container-left-second" viewBox="0 0 16 16">
                                    <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                    <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" />
                                </svg><span className='container-left-first-span'>  <b>Singup</b></span>
                            </Link>
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
                    <Col sm={9} xs={12} className="PostRequriment3  square border-start square border-end">
                        <div className='middle-container '>

                            <Form className='m-2'>

                                {/* <Form.Control type="text"  className='square rounded-pill CiSearch' placeholder="Search Project"  style={{backgroundColor:"#efefef",height:"40px"}}/>
                                <Table responsive className="table table-bordered mt-4 project-table table-responsive">
                                    <thead>
                                        <tr style={{borderColor:"black"}}> 
                                            <td colSpan="4">
                                                <button className='project-button'>Newest</button>
                                            </td>
                                        </tr>
                                        <tr className='table-header square border-start square border-end'>
                                            <th scope="col">Client</th>
                                            <th scope="col" >Description</th>
                                            <th scope="col">Budget</th>
                                            <th scope="col">Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style={{backgroundColor:"rgb(255, 153, 0, .5)"}}>
                                            <td style={{borderLeftColor:"green",borderLeftWidth:"3px"}}><Link to="/Home/Projectdetails">Suresh</Link></td>
                                            <td>Content writer to convert videos in content</td>
                                            <td className='text-center'>₹18,000 - ₹25,000</td>
                                            <td>24/11/2022</td>
                                        </tr>
                                        <tr style={{backgroundColor:"#efefef"}}>
                                            <td style={{borderLeftColor:"red",borderLeftWidth:"3px"}}>Prachi info</td>
                                            <td>Copywriter /UXWriter/ContentCreator </td>
                                            <td className='text-center'>₹10,100-₹20,000</td>
                                            <td>24/1/2023</td>
                                        </tr>
                                        <tr style={{backgroundColor:"#efefef"}}>
                                            <td style={{borderLeftColor:"green",borderLeftWidth:"3px"}}>Marketwiser</td>
                                            <td>Full Stack Mobile Developer with Flutter</td>
                                            <td className='text-center'>₹10,100-₹20,000</td>
                                            <td>24/9/2022</td>
                                        </tr>
                                        <tr style={{backgroundColor:"#efefef"}}>
                                            <td style={{borderLeftColor:"green",borderLeftWidth:"3px"}}>Chandan</td>
                                            <td>We are looking for a Flutter Developer who could respone...</td>
                                            <td className='text-center'>$100-$200</td>
                                            <td>24/12/2022</td>
                                        </tr>
                                        <tr style={{backgroundColor:"#efefef"}}>
                                            <td style={{borderLeftColor:"green",borderLeftWidth:"3px"}}>Priyanka</td>
                                            <td>ICO/IEm/IDO Developer for Secure Blockchain</td>
                                            <td className='text-center'>₹100010-₹5059565</td>
                                            <td>2/11/2022</td>
                                        </tr>
                                        <tr style={{backgroundColor:"#efefef"}}>
                                            <td style={{borderLeftColor:"green",borderLeftWidth:"3px"}}>Gunagya</td>
                                            <td>Content writer to wrtie blogs for our sports website.</td>
                                            <td className='text-center'>$18-$10</td>
                                            <td>1/2/2023</td>
                                        </tr>
                                    </tbody>
                                </Table> */}
                                <DataTable className='bordered'
                                                columns={columns}
                                                data={allQues}
                                                pagination
                                                theme='border'
                                            />


                            </Form>
                        </div>
                    </Col>

                </Row>
            </Container>
        </>
    )
}

export default Project