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

function Dashboard(props) {
    const [selectedOptions, setSubCategory] = useState(null);
    // const [selectedOptions, setSelectedOptions] = useState();
    const [showComponent, setShowComponent] = useState(false);
    useEffect(() => {
        Switchform.AllSubcategorynoid().then((response) =>{
            setSubCategory(response.data)
            console.log(response.data)
            
                }
                )
                }, [])
    const columns = [
        {
          name:'subcategory',
          selector: (row) => row.GradeName, 
        },
        {
            name:'ID',
            selector: (row) => row.GradeID, 
          }
    ]


      const Customstyles = {
        width:'100%',backgroundColor:'#efefef',borderRadius:'21px',borderStyle:'none'
      }
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
                                    <div className='' style={{ backgroundColor: "#efefef", borderRadius: "25px" }}>
                                       <InputGroup className='mt-4 mb-4  search-outer-container'>
                                            <Select
                                            style={Customstyles.select}
                                                options={columns}
                                                placeholder="Select color"
                                                defaultValue={selectedOptions}
                                                onChange={setSubCategory}
                                                isSearchable={true}
                                                
                                                />
                                            <div className="button-check">
                                                <div className="button1 b2 new-class-toggle " id="button-10" >
                                                    <input type="checkbox" className="checkbox"
                                                        checked={showComponent}
                                                        onChange={() => setShowComponent(!showComponent)} />
                                                    <div className="knobs">
                                                        <span>Portfolio</span>
                                                    </div>
                                                    <div className="layer"></div>
                                                </div>
                                            </div>
                                        </InputGroup>
                                    </div>
                                </Col>
                            </Row>
                            {showComponent ? <Profile /> : <Portfolio />}
                        </Container>
                    </Col>
                </Row>
            </Container>



        </>
    );
};

export default Dashboard;