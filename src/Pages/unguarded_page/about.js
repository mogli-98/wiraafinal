import React,{useEffect} from "react";
import Header from "../../Layout/Header"
import { Container, Row, Col } from "react-bootstrap";
import aboutus from "../../asset/image/aboutus.png";
import wiraa from "../../asset/image/wiraa.jpg"
import Accountfootor from "../../Layout/Accountfooter";
function Aboutus() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
   
    return (
        <>
            <div style={{ backgroundColor: 'white' }}>
                <Header />
                <Container style={{ backgroundColor: 'white' }} >
                    <Row style={{ marginTop: '30px' }}>
                        <Col sm={6} xs={12} className='aboutus'>
                            <div className="mt-5">
                                <h1 className="mb-5" style={{ fontSize: '60px' }}>About Us...</h1>
                                <p className="mt-2">Since 2018, we have been     combining creativity & technology with human emotion to create solutions & experiences that attract attention, generate meaningful conversations & gain fans.</p>
                                <p>Wiraa is the go-to resource for discovering and connecting with professionals around the globe.</p>
                                <p>We’re on a mission to build the world’s best community for professional to share, grow, and get hired.</p>
                            </div>
                        </Col>
                        <Col sm={6} xs={12}>
                            <img src={aboutus} className='mt-3' alt="" style={{ width: '-webkit-fill-available' }} />
                        </Col>
                    </Row>
                    <Row style={{ marginBottom: '30px' }}>
                        <Col sm={6} xs={12}>
                            <img src={wiraa} alt="" style={{ width: '-webkit-fill-available' }} />
                        </Col>
                        <Col sm={6} xs={12}>
                            <div className="aboutus">
                                <h1 className="mb-5 mt-5" style={{ fontSize: '60px' }} >What We Do</h1>
                                <p className="mt-2">We ease people's burdens who need help by connecting them with the professionals who provide these services. We work hard to put trust into the outsourcing experience for everyone.</p>
                                <p>Through our networking platform, clients and professionals can post articles, ask and answers questions, interact personally with each other to do work in areas such as business, design, health, IT, right through to lifestyle, marketing, study, and writing.</p>
                            </div>
                        </Col>
                    </Row>
                    {/* <Row>
                <Col sm={4}>
                    <Card>
                        <h1>Our Mission</h1>
                        <p>To bring clients and professionals together from around the globe to get work done.</p>
                    </Card>
                </Col>
            </Row> */}

                </Container>
                
            </div>
            <Accountfootor />
        </>

    )
}
export default Aboutus;