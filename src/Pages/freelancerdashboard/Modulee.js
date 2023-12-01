import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Accordion } from 'react-bootstrap';
import "../../asset/css/postrequirement.css"
import { Link } from 'react-router-dom';
import '../../asset/css/learn.css'
// import model from '../../asset/image/model.png'
import Sidenav from '../Dashboard/layout/Sidenav';
// import Topnav from '../Dashboard/layout/topnav';
import Test from '../../asset/image/test1.png'
import LearnModal from '../../modal/Learn.modal';
import Phoneviewfooter from '../../Layout/Phoneviewfooter';
import Topnavbar from './layout/topnavbar';
import axios from 'axios';
function Modulee() {
    const [courseList, setCourseList] = useState();
    const [courseListdetails, setCourseListdetails] = useState();
    useEffect(() => {
        LearnModal.Modulelist().then((response) => {
            setCourseList(response.data)
            console.log(response.data)
        }).catch((error) => {
            console.log(error);
        });
    }, [])
    useEffect(() => {
        LearnModal.Modulelistdetails().then((response) => {
            setCourseListdetails(response.data)
            console.log(response.data)
        }).catch((error) => {
            console.log(error);
        });
    }, [])
    const checkoutHandler = async (amount) => {

        const { data: { key } } = await axios.get("http://www.localhost:4000/api/getkey")

        const { data: { order } } = await axios.post("http://localhost:4000/api/checkout", {
            amount
        })

        const options = {
            key,
            amount: order.amount,
            currency: "INR",
            name: "6 Pack Programmer",
            description: "Tutorial of RazorPay",
            image: "https://avatars.githubusercontent.com/u/25058652?v=4",
            order_id: order.id,
            callback_url: "http://localhost:4000/api/paymentverification",
            prefill: {
                name: "Wiraa",
                email: "Wiraa@example.com",
                contact: "9999999999"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#121212"
            }
        };
        const razor = new window.Razorpay(options);
        razor.open();
    }
 
    return (
        <>
            <Container fluid className='dashboard-conatiner-top ' >
                <Row>
                    <Col sm={1} xs={2} className='d-none d-sm-block'>
                        <Sidenav />
                    </Col>
                    <Col sm={8} xs={12} style={{ padding: '0px' }} className='dashboard-conatiner-top-row '>
                        <Container className='square border border-bottom-0'>
                            <Topnavbar activeLink="Learn" />
                            <Row >
                                <Col sm={8} className='scrollable squarew '  >
                                    <h4 className='d-none d-sm-block' style={{ marginTop: '12vh', padding: "15px", fontSize: "27px" }}>{courseList?.[0]?.CourseTitle}</h4>

                                    <div className='d-block d-sm-none'>
                                        <center>

                                            <iframe style={{ width: "100%", marginTop: '80px' }} src="https://www.youtube.com/embed/2yCS9tpckQw?si=p5EAKWRqvqTekf5t" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                        </center>
                                    </div>



                                    <h5 className='d-block d-sm-none pt-4 ' style={{ padding: "5px" }}>{courseList?.[0]?.CourseTitle}</h5>

                                    <p className='text-disable mt-2' style={{ padding: '15px', fontSize: "15px", color: "grey", paddingTop: "5px" }}>{courseList?.[0]?.CourseDescription}</p>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <p>
                                            <span style={{ color: "grey", fontSize: "16px" }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-globe2" viewBox="0 0 16 16" style={{ marginLeft: "18px", marginRight: "5px", color: "grey" }}>
                                                    <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z" />
                                                </svg> English</span>
                                        </p>

                                        <p>
                                            <span style={{ float: "right", marginRight: '20px' }}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-heart" viewBox="0 0 16 16">
                                                <path d="M9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h10s1 0 1-1-1-4-6-4-6 3-6 4Zm13.5-8.09c1.387-1.425 4.855 1.07 0 4.277-4.854-3.207-1.387-5.702 0-4.276Z" />
                                            </svg> 11,222 student</span>
                                        </p>

                                    </div>
                                    <Card className='mt-3 overview' style={{ backgroundColor: '#212121', color: "#fff", borderRadius: "20px" }} >
                                        <div className='m-4 p-3' >
                                            <h5 className='p-2'>Course Overview :</h5>
                                            <ul style={{ fontSize: '16px' }}>
                                                <li>Successfully step into the world of Freelancing</li>
                                                <li>Develop the skills you need to master Freelancing </li>
                                                <li>Learn what it takes to become a freelancer and win customers</li>
                                                <li>Confidently deliver your first freelance project with confidence </li>
                                                <li>To build an amazing profile that stands out and ranks organically </li>
                                                <li>Build relationsships with clients so that you can earn recurring income  </li>
                                            </ul>
                                        </div>
                                    </Card>

                                    <Row className='d-none d-sm-block'>
                                        <p className='mt-4' style={{ fontSize: "18px", paddingLeft: "35px" }}><b>Course Include :</b></p>
                                        <Col sm={12} >
                                            <Row>
                                                <Col sm={6}>
                                                    <ul style={{ paddingLeft: '40px' }}>
                                                        <li style={{ listStyle: 'none', color: 'black', fontWeight: 600, marginTop: '12px' }}>
                                                            <svg style={{ marginRight: '10px', color: 'grey' }} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                                <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                                                            </svg>

                                                            8 Freelancing modules
                                                        </li>
                                                        <li style={{ listStyle: 'none', marginTop: '10px', color: 'black', fontWeight: '600' }}>
                                                            <svg style={{ marginRight: '10px', color: 'grey' }} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
                                                                <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
                                                            </svg>
                                                            <span>Access to freelance community</span>
                                                        </li>
                                                        <li style={{ listStyle: 'none', marginTop: '10px', color: 'black', fontWeight: '600' }}>
                                                            <svg style={{ marginRight: '10px', color: 'grey' }} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-tools" viewBox="0 0 16 16">
                                                                <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0Zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708ZM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11Z" />
                                                            </svg>
                                                            Freelancing projects assistance
                                                        </li>
                                                    </ul>
                                                </Col>
                                                <Col sm={6}>
                                                    <ul>
                                                        <li style={{ listStyle: 'none', marginTop: '10px', color: 'black', fontWeight: '600' }}>
                                                            <svg style={{ marginRight: '10px', color: 'grey' }} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-view-stacked" viewBox="0 0 16 16">
                                                                <path d="M3 0h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3zm0 8h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H3z" />
                                                            </svg>

                                                            Direct client interactions</li>

                                                        <li style={{ listStyle: 'none', marginTop: '10px', color: 'black', fontWeight: '600' }}>
                                                            <svg style={{ marginRight: '10px', color: 'grey' }} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-arrows-move" viewBox="0 0 16 16">
                                                                <path fill-rule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708l2-2zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10zM.146 8.354a.5.5 0 0 1 0-.708l2-2a.5.5 0 1 1 .708.708L1.707 7.5H5.5a.5.5 0 0 1 0 1H1.707l1.147 1.146a.5.5 0 0 1-.708.708l-2-2zM10 8a.5.5 0 0 1 .5-.5h3.793l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L14.293 8.5H10.5A.5.5 0 0 1 10 8z" />
                                                            </svg>

                                                            Beginner friendly Course   </li>

                                                        <li style={{ listStyle: 'none', marginTop: '10px', color: 'black', fontWeight: '600' }}>
                                                            <svg style={{ marginRight: '10px', color: 'grey' }} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-award" viewBox="0 0 16 16">
                                                                <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
                                                                <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
                                                            </svg>

                                                            Certificate of Completion</li>
                                                    </ul>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>

                                    <Row className='d-block d-sm-none'>
                                        <p className='mt-4' style={{ fontSize: "16px", paddingLeft: "45px" }}><b>Course Include :</b></p>
                                        <Col >
                                            <ul style={{ paddingLeft: '20px' }}>
                                                <li style={{ listStyle: 'none', color: 'black', fontWeight: 600, marginTop: '12px' }}>
                                                    <svg style={{ marginRight: '10px', color: 'grey' }} xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                        <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                                                    </svg>

                                                    8 Freelancing modules
                                                </li>
                                                <li style={{ listStyle: 'none', marginTop: '10px', color: 'black', fontWeight: '600' }}>
                                                    <svg style={{ marginRight: '10px', color: 'grey' }} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
                                                        <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
                                                    </svg>
                                                    <span>Access to freelance community</span>
                                                </li>
                                                <li style={{ listStyle: 'none', marginTop: '10px', color: 'black', fontWeight: '600' }}>
                                                    <svg style={{ marginRight: '10px', color: 'grey' }} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-tools" viewBox="0 0 16 16">
                                                        <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0Zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708ZM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11Z" />
                                                    </svg>
                                                    Freelancing projects assistance
                                                </li>
                                            </ul>
                                        </Col>
                                        <Col>
                                            <ul style={{ paddingLeft: '20px' }}>
                                                <li style={{ listStyle: 'none', marginTop: '10px', color: 'black', fontWeight: '600' }}>
                                                    <svg style={{ marginRight: '10px', color: 'grey' }} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-view-stacked" viewBox="0 0 16 16">
                                                        <path d="M3 0h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3zm0 8h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H3z" />
                                                    </svg>

                                                    Direct client interactions</li>

                                                <li style={{ listStyle: 'none', marginTop: '10px', color: 'black', fontWeight: '600' }}>
                                                    <svg style={{ marginRight: '10px', color: 'grey' }} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-arrows-move" viewBox="0 0 16 16">
                                                        <path fill-rule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708l2-2zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10zM.146 8.354a.5.5 0 0 1 0-.708l2-2a.5.5 0 1 1 .708.708L1.707 7.5H5.5a.5.5 0 0 1 0 1H1.707l1.147 1.146a.5.5 0 0 1-.708.708l-2-2zM10 8a.5.5 0 0 1 .5-.5h3.793l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L14.293 8.5H10.5A.5.5 0 0 1 10 8z" />
                                                    </svg>

                                                    Beginner friendly Course   </li>

                                                <li style={{ listStyle: 'none', marginTop: '10px', color: 'black', fontWeight: '600' }}>
                                                    <svg style={{ marginRight: '10px', color: 'grey' }} xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-award" viewBox="0 0 16 16">
                                                        <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
                                                        <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
                                                    </svg>

                                                    Certificate of Completion</li>
                                            </ul>
                                        </Col>
                                    </Row>

                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <p className='mt-1 d-none d-sm-block' style={{ fontSize: "18px", paddingLeft: "28px", fontWeight: "600" }}>Course Content :</p>
                                        <p className='mt-3 d-block d-sm-none' style={{ fontSize: "14px", paddingLeft: "20px", marginRight: '20px', fontWeight: "600" }}>Course Content :</p>
                                        <p style={{ color: 'grey', paddingRight: '20px' }} >  8 Modules | 70 Lectures | 20 Hours </p>
                                    </div>



                                    <Accordion flush>
                                        {courseListdetails && courseListdetails.map((details) =>
                                            <Accordion.Item eventKey={details.UnqId}>
                                                <Accordion.Header>{details.ModuleTitle}</Accordion.Header>
                                                <Accordion.Body>
                                                    <Link to={details.ModuleURL}><img src={Test} alt="" style={{ height: "13vh", }} /></Link>{details.ModuleDescription}
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        )}

                                    </Accordion>
                                    <p className='mt-2 p-2' style={{ fontSize: '18px', color: 'black' }}> <b> Who you will learn with?</b> </p>

                                    <div style={{ marginBottom: '40px' }} ><img src={Test} alt="" style={{ height: "13vh", borderRadius: '50%', width: "13vh" }} /> <span>{courseList?.[0]?.AuthorName}</span>
                                        <br />
                                        <span style={{ marginLeft: '13vh', width: '80%' }}>{courseList?.[0]?.AuthorDescription}</span>

                                    </div>



                                </Col>

                                <Col style={{ marginTop: '12vh' }} sm={4}  >
                                    <Card className='  mb-4 shadow-2 d-none d-sm-block ' style={{ position: 'fixed', top: '20px', width: '20%', marginTop: '80px', boxShadow: '0 14px 26px -12px rgb(14 4 3 / 42%), 0 4px 23px 0px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(53 15 13 / 20%)', borderStyle: 'none' }}>


                                        <iframe src="https://www.youtube.com/embed/2yCS9tpckQw?si=p5EAKWRqvqTekf5t" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                                        <ul style={{ listStyle: "none", paddingLeft: '20px' }}>
                                            <p className='mt-2' style={{ fontSize: '16px', fontWeight: 600, color: 'black' }}> <b>This Course includes : </b>  </p>
                                            <li> <p className='small' style={{ fontSize: '14px' }}>
                                                <svg style={{ marginRight: '10px', color: 'grey' }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
                                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                    <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z" />
                                                </svg>
                                                8 freelancing modules in 12 hours</p>
                                            </li>
                                            <li> <p className="small" style={{ fontSize: '14px' }}>
                                                <svg style={{ marginRight: '10px', color: 'grey' }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
                                                    <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />
                                                </svg>
                                                Access to 100k+ freelance community</p></li>
                                            <li> <p className="small" style={{ fontSize: '14px' }}>
                                                <svg style={{ marginRight: '10px', color: 'grey' }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-view-stacked" viewBox="0 0 16 16">
                                                    <path d="M3 0h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3zm0 8h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H3z" />
                                                </svg>
                                                Upto 120 direct client interactions</p></li>
                                            <li> <p className="small" style={{ fontSize: '14px' }}>
                                                <svg style={{ marginRight: '10px', color: 'grey' }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-tools" viewBox="0 0 16 16">
                                                    <path d="M1 0 0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.27 3.27a.997.997 0 0 0 1.414 0l1.586-1.586a.997.997 0 0 0 0-1.414l-3.27-3.27a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0Zm9.646 10.646a.5.5 0 0 1 .708 0l2.914 2.915a.5.5 0 0 1-.707.707l-2.915-2.914a.5.5 0 0 1 0-.708ZM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11Z" />
                                                </svg>
                                                Freelancing projects assistance</p></li>
                                            <li>  <p className="small" style={{ fontSize: '14px' }}>
                                                <svg style={{ marginRight: '10px', color: 'grey' }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrows-move" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708l2-2zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10zM.146 8.354a.5.5 0 0 1 0-.708l2-2a.5.5 0 1 1 .708.708L1.707 7.5H5.5a.5.5 0 0 1 0 1H1.707l1.147 1.146a.5.5 0 0 1-.708.708l-2-2zM10 8a.5.5 0 0 1 .5-.5h3.793l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L14.293 8.5H10.5A.5.5 0 0 1 10 8z" />
                                                </svg>
                                                Beginner friendly course</p></li>
                                            <li><p className="small" style={{ fontSize: '14px' }}>
                                                <svg style={{ marginRight: '10px', color: 'grey' }} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-award" viewBox="0 0 16 16">
                                                    <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
                                                    <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
                                                </svg>
                                                Certificate of Completion</p></li>
                                        </ul>


                                        <div className='d-none d-sm-block' >
                                            <center>
                                                <p className='text-center'>
                                                    <span className='text-center' style={{ fontSize: '20px', color: '#008080', marginRight: '20px' }}> <b >₹1999</b> </span>
                                                    <span className='text-center pricing-tableli' style={{ fontSize: '20px', color: 'Black' }}> <b style={{ color: '#008080', marginRight: '25px' }}>₹4999 </b>
                                                    </span>
                                                </p>

                                                <button style={{ height: '35px', width: '160px', marginBottom: "40px", marginRight: '80px' }} className='model-button' onClick={() => checkoutHandler(4000)}> Buy Now</button>
                                            </center>
                                        </div>


                                        <div className='d-block d-sm-none mb-5' >
                                            <div className='p-2' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'ButtonHighlight' }} >
                                                <p style={{ display: 'flex', alignItems: 'center', paddingTop: '10px' }}>
                                                    <span style={{ fontSize: '20px', color: '#008080', marginRight: '20px' }}> <b >₹1999</b> </span>
                                                    <span className=' pricing-tableli' style={{ fontSize: '20px', color: 'Black' }}> <b style={{ color: '#008080' }}>₹4999 </b>
                                                    </span>
                                                </p>

                                                <button style={{ height: '35px', fontSize: '18px' }} className='model-button' onClick={() => checkoutHandler(4000)}> Buy Now</button>
                                            </div>
                                        </div>


                                    </Card>

                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
            <Phoneviewfooter />

        </>
    )
}

export default Modulee;