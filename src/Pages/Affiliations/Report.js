import './Report.css';
import { Container, Row, Col, Form } from 'react-bootstrap';
import React from 'react';




function Report() {
    return (

            <Container>

                <h3>Report</h3>
                <p>Check your monthly affiliation Report </p>

                <Row>
                    <Col sm={2}>
                        <Form.Group className="mb-3" controlId="formBasiclink">
                            <Form.Control type="text" placeholder="Suresh Srivastav" />
                        </Form.Group>
                    </Col>
                    <Col sm={2}>
                        <select name="Month" id="Month" className='month' >
                            <option value="Jan" disabled>Month</option>
                            <option value="feb">Febuary</option>
                            <option value="march">March</option>
                            <option value="April" selected>April</option>
                        </select>

                    </Col>

                    <Col sm={2}>
                        <select name="Month" id="Month" className='month' >
                            <option value="Jan" disabled>Year</option>
                            <option value="feb">Febuary</option>
                            <option value="march">March</option>
                            <option value="April" selected>April</option>
                        </select>

                    </Col>
                </Row>


                <div className='txtcntr'>

                <Row>
                    <Col sm={3}>
                        <Form.Group className="mb-3 text-center"  controlId="formBasiclink">
                            <Form.Control type="text " className='text-center' style={{ height: '80px' }} placeholder="Unpaid Affiliates" />
                        </Form.Group></Col>
                    <Col sm={3}>
                        <Form.Group className="mb-3 text-center" controlId="formBasiclink">
                            <Form.Control type="link" className='text-center' style={{ height: '80px' }} placeholder="Paid Affiliates" />
                        </Form.Group></Col>
                </Row>


                <Row>
                    <Col sm={3}>
                        <Form.Group className="mb-3" controlId="formBasiclink">
                            <Form.Control type="text" className='text-center' style={{ height: '80px' }} placeholder="Total Affiliates" />
                        </Form.Group></Col>
                    <Col sm={3}>
                        <Form.Group className="mb-3" controlId="formBasiclink">
                            <Form.Control type="link" className='text-center' style={{ height: '80px' }} placeholder="Total Commissions" />
                        </Form.Group></Col>
                </Row>
                </div>
                <button className='btn22'  type="send">
                    Done
                </button>

            </Container>


    );
}

export default Report;