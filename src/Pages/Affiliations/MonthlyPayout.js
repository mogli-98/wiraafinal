import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { Card } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
import './MonthlyPayout.css'

function MonthlyPayout() {
    return (

        <Container className='MonthPayout'>
            <Row>
                <Col> <h3 className='text-center'>Payout</h3>
            <p className='text-center'>Initiate your Monthly Payouts</p>

            <div className="table" style={{ width: '80%', height: '60vh', marginTop: '15px', marginLeft: '30px' }}>
                <table style={{ border: '2px solid grey', width: '1200px', height: '400px' }}>
                    <tr>
                        <th style={{ borderBottom: '1px solid black' }}>Payout ID</th>
                        <th style={{ borderBottom: '1px solid black' }}>Date</th>
                        <th style={{ borderBottom: '1px solid black' }}>Month</th>
                        <th style={{ borderBottom: '1px solid black' }}>Amount</th>
                        <th style={{ borderBottom: '1px solid black' }}>Status</th>

                    </tr>

                    <tr >
                        <td>10</td>
                        <td>22-03-2023</td>
                        <td>march 23</td>
                        <td>22,000</td>
                        <td style={{ color: 'yellow' }}> <b>Processing</b> </td>
                    </tr>
                    <tr >
                        <td>9</td>
                        <td>20-02-2023</td>
                        <td>febuary 23</td>
                        <td>10,000</td>
                        <td style={{ color: 'green' }}> <b>Sucessful</b> </td>
                    </tr>
                    <tr >
                        <td>8</td>
                        <td>10-11-2022</td>
                        <td> december 22</td>
                        <td>5000</td>
                        <td style={{ color: 'green' }}> <b>Sucessful</b> </td>
                    </tr>
                    <tr >
                        <td>7</td>
                        <td>09-11-2022</td>
                        <td> October22</td>
                        <td>2500</td>
                        <td style={{ color: 'red' }}> <b>Rejected</b></td>
                    </tr>
                    <tr >
                        <td>6</td>
                        <td>06-11-2022</td>
                        <td>september 22</td>
                        <td>600</td>
                        <td style={{ color: 'green' }}> <b>Sucessful</b></td>
                    </tr>

                </table>
            </div>


            <button className='btn28' type="send">
                Current Payout
            </button> 

                </Col>
            </Row>
            

            

        </Container>

    )
}

export default MonthlyPayout;

