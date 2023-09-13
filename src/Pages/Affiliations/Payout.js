import './Payout.css';
import { Container, Row, Col, Form } from 'react-bootstrap';
import React from 'react';




function Payout() {
    return (

        <Container>

            <h3>Payout</h3>
            <p>Initiate your monthly Payout </p>

            <Row>
                <Col sm={2}>
                    <Form.Group className="mb-3" controlId="formBasiclink">
                        <Form.Control type="text" placeholder="Suresh Srivastav" />
                    </Form.Group></Col>
                <Col sm={2}>
                    <Form.Group className="mb-3" controlId="formBasiclink">
                        <Form.Control type="link" placeholder="Payout no.04" />
                    </Form.Group></Col>
            </Row>


            <Row>
                <Col sm={2}>

                    <select name="Month" id="Month" className='month' >
                        <option value="Jan" disabled>Month</option>
                        <option value="feb">Febuary</option>
                        <option value="march">March</option>
                        <option value="April" selected>April</option>
                    </select>
                </Col>
                <Col sm={2}>
                    <select name="Year" id="Year" className='month' >
                        <option value="Jan" disabled>Year</option>
                        <option value="feb">Febuary</option>
                        <option value="march">March</option>
                        <option value="April" selected>April</option>
                    </select>

                </Col>
            </Row>


            <Row  >
                <Col sm={4} style={{ marginTop: '15px' }}>
                    <Form.Group className="mb-3" controlId="formBasiclink">
                        <Form.Control type="text" style={{ height: '80px' }} placeholder="Note for payment method" />
                    </Form.Group></Col>
            </Row>

            <h6>Pay <span style={{ color: '#008080' }}>Rs.4999</span>  to Suresh shrivastav</h6>

            <Row className='btn40'>
                <Col sm={2}>
                    <button className='btn21'  type="payout">
                        Payout
                    </button>
                </Col>

                <Col sm={2}>
                    <button className='btn20'  type="send">
                        Send
                    </button>
                </Col>
            </Row>


        </Container>


    );
}

export default Payout;