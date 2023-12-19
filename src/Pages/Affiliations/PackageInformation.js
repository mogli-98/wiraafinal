
import { Form, Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import './PackageInformation.css';


function PackageInformation() {
  return (

    <Container>
      <Row>
        <Col>
          <h2>Package Information</h2>
          <Form>

            <Form.Group className="mb-4" controlId="formBasicName">
              <Form.Label>Name:</Form.Label>
              <Form.Control type="Name" placeholder="Enter Your Name" />
            </Form.Group>


            <Form.Group className="mb-4" controlId="formBasicEmail">
              <Form.Label>Email address:</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPhone">
              <Form.Label>Phone No:</Form.Label>
              <Form.Control type="phone" placeholder="Mobile no." />
            </Form.Group>

            <div className="coupen">
              <Form.Group className="mb-5" controlId="formBasicPhone">

                <Form.Control type="phone" className='frmcntrl'  placeholder="Enter your name" />
                
              </Form.Group>
              <button className='btn10' type="Apply">
                  Apply
                </button>
            </div>



            <div className="total">
              <h4>Total</h4> <p className='rupee'>Rs.1999</p>

            </div>


            <button className='btn12' type="submit">
              Done
            </button>
          </Form>
          <p className='paragraph'> By submitting your order,you agree to the Terms of Service and privacy policy.</p>
        </Col>

      </Row>


    </Container>

  );
}

export default PackageInformation;