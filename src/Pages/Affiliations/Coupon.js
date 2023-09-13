import './Coupon.css';
import { Container, Row, Col, Form } from 'react-bootstrap';
import React from 'react';


function Coupon() {
  return (
    <>
      <Container >
        
        <Row>
          <Col md={12}>
            <h3 >Coupon</h3>
            <p >Give discounts on course in exchange for a kickback</p>
          </Col>

        </Row>
        <Row>
          <Col sm={12}>
            <Form.Group className="mb-3  " style={{width:"50%"}} controlId="formBasiclink">
              <Form.Label>Your affiliation link: </Form.Label>
              <Form.Control type="text" placeholder="Enter link here.." />
            </Form.Group></Col>
        </Row>
        <Row>
          <Col><Form.Group className="mb-3"  style={{width:"50%"}} controlId="formBasiclink">
            <Form.Label>Your coupon Code: </Form.Label>
            <Form.Control type="link" placeholder="Enter link here.." />
          </Form.Group></Col>
        </Row>
        
        <Row>
          <Col sm={2}>
            <Form.Group className="mb-3"  controlId="formBasiclink">
              <Form.Label>Total commission: </Form.Label>
              <Form.Control type="text" placeholder="20%" />
            </Form.Group></Col>
          <Col sm={2}>
            <Form.Group className="mb-3"  controlId="formBasiclink">
              <Form.Label>Coupon Discount: </Form.Label>
              <Form.Control type="link" placeholder="5%" />
            </Form.Group></Col>
          <Col sm={2}>
            <Form.Group className="mb-3"  controlId="formBasiclink">
              <Form.Label>Your commission: </Form.Label>
              <Form.Control type="link" placeholder="15%" />
            </Form.Group></Col>
        </Row>

        <div className='btnHolder'>

        <button className='btn19' variant="light" type="submit">
        Delete
      </button>

        <button className='btn20' variant="light" type="submit">
        Save
      </button>
      </div>

      </Container>
    </>
  );
}

export default Coupon;