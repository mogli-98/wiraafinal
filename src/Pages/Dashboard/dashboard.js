import React, { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Sidenav from "./layout/Sidenav";
import '../../asset/css/dashboard.css'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Portfolio from './layout/portfolio';
import Profile from './layout/profile';
import Topnav from './layout/topnav';
import { useEffect } from 'react';
import Switchform from '../../Model/switch.model';
import Select from "react-select";
import { Link } from 'react-router-dom';
import Phoneviewfooter from '../../Layout/Phoneviewfooter';

function Dashboard(props) {
    const handleChange = (selectedOption) => {
        console.log('Selected option:', selectedOption);
        // You can perform any action with the selectedOption here
      };
    const [options, setSubCategory] = useState([]);
    // const [selectedOptions, setSelectedOptions] = useState();
    const [showComponent, setShowComponent] = useState(false);
    useEffect(() => {
        Switchform.AllSubcategorynoid().then((response) => {
            const apiOptions = response.data.map(item => ({
                value: item.GradeID,
                label: item.GradeName,
              }));
            setSubCategory(apiOptions)
            console.log(response.data)

        }
        )
    }, [])


    return (
        <>
            <Container fluid className='dashboard-conatiner-top' >
                <Row>
                    <Col sm={1} className='d-none d-sm-block'>
                        <Sidenav />
                    </Col>
                    <Col sm={8} xs={12} className='dashboard-conatiner-top-row '>
                        <Container className='square border border-bottom-0'>
                            <Topnav />





                            <Row>

                                <Col className='d-block d-sm-none'>

                                    <div>
                                        <Link to="/Hiretalent">


                                            <button className='mt-4 mb-4 p-3' style={{ width: '100%', border: 'none', borderRadius: '8px', backgroundColor: '#008080' }} >
                                                <span style={{ fontWeight: '600', color: 'white' }}>
                                                    Post a request - Hire talents
                                                </span>
                                            </button>
                                        </Link>

                                    </div>

                                </Col>


                                <Col className='d-none d-sm-block'>
                                    <div style={{ display: "flex", backgroundColor: '#efefef', borderRadius: "30px" }} className='mt-4 mb-4'>

                                        <div style={{ backgroundColor: "#efefef", borderRadius: "30px", width: '100%' }}>
                                            <InputGroup style={{ borderStyle: 'none' }} className='  search-outer-container'>

                                                <Select
                                                    options={options}
                                                    isClearable
                                                    className='d-none d-sm-block'
                                                    styles={{
                                                        border: 'none',
                                                        display: 'flex',


                                                        clearIndicator: () => ({
                                                            color: 'red',

                                                        }),
                                                        control: () => ({
                                                            border: 'none', paddingTop: '5px', paddingLeft: '20px', display: 'flex', width: '600px'

                                                        }),
                                                        dropdownIndicator: () => ({
                                                            display: 'none'
                                                        })
                                                    }}
                                                />
                                            </InputGroup>

                                        </div>


                                        <div className="button-check" style={{ float: 'right' }}>
                                            <div style={{ float: 'right' }} className="button1 b2 new-class-toggle " id="button-10" >
                                                <input type="checkbox" className="checkbox"
                                                    checked={showComponent}
                                                    onChange={() => setShowComponent(!showComponent)} />
                                                <div className="knobs">
                                                    <span>Portfolio</span>
                                                </div>
                                                <div className="layer"></div>
                                            </div>
                                        </div>

                                    </div>
                                </Col>
                                <div className='d-block d-sm-none'>

                                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }} className='mt-1 mb-1'>

                                        <div style={{ float: 'left' }}>
                                            <p style={{fontSize:'20px',fontWeight:'bold',marginTop:'6px'}}> <u>Explore </u> </p>
                                        </div>

                                        {/* <div className=''>

                                            

                                            <button
                                                className='m-1 p-2'
                                                style={{ float: 'right', fontSize: '12px', border: '1px solid grey', background: 'black', color: 'white', fontWeight: 500, borderRadius: '8px' }}>
                                                People
                                            </button>


                                            <button
                                                className='m-1 p-2'
                                                style={{ float: 'right', fontSize: '12px', border: '1px solid grey', background: 'none', fontWeight: 500, borderRadius: '8px' }}>
                                                Portfolio
                                            </button>

                                        </div> */}

                                        <div className="button-check" style={{ float: 'right',height:'40px' }}>
                                            <div style={{ float: 'right' }} className="button1 b2 new-class-toggle " id="button-10" >
                                                <input type="checkbox" className="checkbox"
                                                    checked={showComponent}
                                                    onChange={() => setShowComponent(!showComponent)} />
                                                <div className="knobs">
                                                    <span>Portfolio</span>
                                                </div>
                                                <div className="layer"></div>
                                            </div>
                                        </div>




                                    </div>



                                    <div className='mt-2 mb-2 ' style={{ backgroundColor: "#efefef", borderRadius: "10px", width: '100%', height: '35px' }}>
                                        <InputGroup style={{ borderStyle: 'none' }} className='  search-outer-container'>

                                            <Select
                                                options={options}
                                                isClearable
                                                className='d-block d-sm-none'
                                                styles={{
                                                    border: 'none',
                                                    display: 'flex',


                                                    clearIndicator: () => ({
                                                        color: 'red',

                                                    }),
                                                    control: () => ({
                                                        border: 'none', display: 'flex', width: '260px'

                                                    }),
                                                    dropdownIndicator: () => ({
                                                        display: 'none'
                                                    })
                                                }}
                                            />
                                        </InputGroup>

                                    </div>

                                </div>
                            </Row>
                            {showComponent ? <Profile /> : <Portfolio />}
                        </Container>
                        <Phoneviewfooter />
                    </Col>
                </Row>

            </Container>

        </>
    );
};

export default Dashboard;