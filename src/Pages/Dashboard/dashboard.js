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
                    <Col sm={1} className=''>
                        <Sidenav />
                    </Col>
                    <Col sm={8} xs={12} className='dashboard-conatiner-top-row '>
                        <Container className='square border border-bottom-0'>
                            <Topnav />
                            <Row>
                                <Col>
                                    <div style={{ display: "flex", backgroundColor: '#efefef', borderRadius: "30px", border: "1px solid black" }} className='mt-4 mb-4'>

                                        <div style={{ backgroundColor: "#efefef", borderRadius: "30px", width: '100%' }} className='d-none d-sm-block'>
                                            <InputGroup style={{ borderStyle: 'none' }} className='  search-outer-container'>

                                                <Select
                                                    options={options}
                                                    isClearable
                                                    onChange={handleChange}
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
                            </Row>
                            {showComponent ? <Profile /> : <Portfolio />}
                        </Container>
                        <Phoneviewfooter/>
                    </Col>
                </Row>
               
            </Container>



        </>
    );
};

export default Dashboard;