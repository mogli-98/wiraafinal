import {Container ,Row,Col ,Table} from 'react-bootstrap';
// import { Card } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
import './MyAffiliations.css'

function MyAffiliations() {
    return (

        <Container className='MonthPayout ' style={{marginBottom:'290px'}}>


           <Row>
            <Col>
            <div className = 'editAffiliate'> 
                        
                <button className='myaff_button'>Edit Affiliate</button>    
                <button className='myaff_button'>Create Coupon</button>
                <button className='myaff_button'>Report</button>
               {/* <p style={{float:'right' ,position:'relative'}}>₹</p>   */}
                <button className='myaff_button1'>Payout</button>
                </div>
    
            </Col>
           </Row>


<Row>
    <Col>
        <div className="table">
               <div className="table_affi">
                <h4 style={{color:'#008080',paddingLeft:"55px",paddingTop:"10px"}}>All Affiliates</h4>
                
                <button className='butn'>Copy Link </button>
                </div> 
                <Table style={{ border: '2px solid lightgrey',  height: '400px' }}>
                    <thead>
                    <tr>
                        <th style={{ borderBottom: '1px solid black' }}>ID</th>
                        <th style={{ borderBottom: '1px solid black' }}>Affiliates</th>
                        <th style={{ borderBottom: '1px solid black' }}>Date</th>
                        <th style={{ borderBottom: '1px solid black' }}>Amount</th>
                        <th style={{ borderBottom: '1px solid black' }}>Coupon</th>
                        <th style={{ borderBottom: '1px solid black' }}>Commission</th>
                        <th style={{ borderBottom: '1px solid black' }}>Status</th>

                    </tr>
                    </thead>

                    <tbody>
                    <tr >
                        <td>103</td>
                        <td>Suresh Gupta</td>
                        <td>24/11/2022</td>
                        <td>₹1999</td> 
                        <td>0%</td>
                        <td>0%</td>                        
                        <td style={{ color: 'Red' }}> <b>Unpaid</b> </td>
                    </tr>
                    <tr >
                        <td>104</td>
                        <td>Ramesh Infotech</td>
                        <td>24/11/2022</td>
                        <td>₹1999</td>
                        <td>14%</td>
                        <td>6%</td>
                        <td style={{ color: 'green' }}> <b>Paid</b> </td>
                    </tr>
                    <tr >
                        <td>105</td>
                        <td>Career College Foundations</td>
                        <td>22/11/2022</td>
                        <td>₹4999</td>
                        <td>0%</td>
                        <td>0%</td>
                        <td style={{ color: 'Red' }}> <b>Unpaid</b> </td>
                    </tr>
                    <tr >
                        <td>106</td>
                        <td>Suresh Gupta</td>
                        <td>22/11/2022</td>
                        <td>₹1999</td>
                        <td>0%</td>
                        <td>0%</td>
                        <td style={{ color: 'red' }}> <b>Unpaid</b></td>
                    </tr>
                    <tr >
                        <td>107</td>
                        <td>Ramesh Infotech</td>
                        <td>22/11/2022</td>
                        <td>₹1999</td>
                        <td>14%</td>
                        <td>6%</td>
                        <td style={{ color: 'green' }}> <b>Paid</b></td>
                    </tr>

                    <tr >
                        <td>108</td>
                        <td>Career College Foundations</td>
                        <td>21/11/2022</td>
                        <td>₹ 4999</td>
                        <td>14%</td>
                        <td>6%</td>                        
                        <td style={{ color: 'green' }}> <b>Paid</b></td>
                    </tr>

                    </tbody>
                </Table>
            </div>
    </Col>
</Row>              

        </Container>
    )
}

export default MyAffiliations;