import React ,{useEffect,useState} from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import "../../Aseset/css/freelanceredashboard.css";
import Sidenavbar from './layout/Sidenavbar';
import Topnavbar from './layout/topnavbar';
import test from '../../Aseset/image/test.JPG'
import veg from '../../Aseset/image/freelancerdash/veg.png'
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import ProjectDetail from '../../Model/project.model';

function Quesans() {
    const[quesdetails, setQuesdetails] = useState(false);
    const params = useParams();
    useEffect(() => {
        console.log(params,"new data");
        ProjectDetail.questiondetails(params['questionId']).then((respone) =>{
        console.log(respone?.data)
        setQuesdetails(respone.data.data)
        })
    }, [])
    return (
        <>
            <Container fluid className='dashboard-conatiner-top' >
                <Row>
                    <Col sm={1} xs={2} className=''>
                        <Sidenavbar />
                    </Col>


                    <Col sm={8} xs={10} className='dashboard-conatiner-top-row '>
                        <Container  className='square border border-bottom-0'>
                            <Topnavbar />
                            <Row>
                                <Col sm={8}>
                                    <Card style={{borderRadius:"25px",backgroundColor:"#efefef"}} className='shadow mt-4'>
                                        <p className='m-3'><img src={test} alt="" height={40} width={40} /> Chandan Innovation
                                        </p>
                                        <p className='m-3'><b>What are the best signs of having a high metabolism?</b> <span className='small'>2 hours ago</span>
                                        </p>                                    <center>
                                            <img src={veg} alt=""  className='m-3'/>
                                        </center>
                                    </Card>
                                    <p className='m-3'><img src={test} alt=""className='quesanss-img' height={40} width={40} /> Chandan Innovation
                                        </p>
                                        <p className='m-3'>Did Nervousness, anxiety and irritability</p>
                                        <p className='m-3'>remor - typically a fine tremor of the hands and fingers
                                            <br /> Increased appetite</p>
                                        <p className='m-3'>Weight loss despite increased appetite <br />
Rapid heartbeat (tachycardia)  100 beats per minute; irregular heartbeat (especially 
atrial fibrillation) or palpitations may also occur.</p>
                                </Col>
                                <Col sm={4}>
                                    <Card className='mt-5' style={{ borderRadius: "0px", backgroundColor: "#efefef" }}>
                                        <div className='order-details-container'>
                                            <img src={test} alt="" className='order-details-img m-3' />
                                            <div className='order-details-container-text'>
                                                <h6><b>Chandan Innovation Pvt Ltd</b></h6><br />
                                                <p>Graphic Designer</p>
                                            </div>
                                        </div>
                                        <Container>
                                            <Row className='mb-3'>
                                                <Col className='square border-end'><h6 className='text-center'>193</h6>
                                                    <p className='text-center'>Followers</p>
                                                </Col>
                                                <Col className='square border-start'>
                                                    <h6 className='text-center'>222</h6>
                                                    <p className='text-center'>Portfolio</p>
                                                </Col>
                                            </Row>
                                        </Container>
                                    </Card>
                                    <div className='mt-3 qessans-span'>
                            <span>About</span> <span>Career</span> <span>Term of services</span> 
                            <span>Conatct</span> <span>FAQ</span> <span>Blog</span>  
                            <span>Privacy policy</span> <span>@2022 Wiraa. All Rights Reserved</span>       
                        </div> 
                                </Col>
                            </Row>

                        </Container>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Quesans;