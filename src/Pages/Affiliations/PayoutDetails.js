import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
import  './PayoutDetails.css'

function PayoutDetail() {
  return (
    <Container>
      <h2 className='heading' style={{display:'flex',justifyContent:'center',marginBottom:'25px'}}>Payout Details</h2>
      <Row  >
        <Col   xs={4} md={3}>
          <Card style={{fontSize:'1.2vmax',padding:'10px',width:'260px',marginLeft:'25px' }}>Suresh mandloi</Card>
                  </Col>
        <Col  xs={6} md={3}>
          <Card style={{fontSize:'1.2vmax',padding:'10px',width:'260px' }}>Surekha chawla</Card>

                  </Col>
        <Col  xs={6} md={3}>
            <Card style={{fontSize:'1.2vmax',padding:'10px',width:'260px' }}>
            kuchbhi@gmail.com    
            </Card>
            </Col>
        <Col  xs={6} md={3}>
         <Card  style={{fontSize:'1.2vmax',padding:'10px',width:'260px' }}>
         7024660055
         </Card>
        </Col>
      </Row>


    <Row style={{display:'flex',justifyContent:'center',marginTop:'30px'}}>
        <Col   xs={6} md={2}>
            <Card style={{display:'flex',justifyContent:'center',alignItems:'center',fontSize:'1.2vmax',padding:'10px',marginLeft:'15px',width:'200px'}}>
               10 <br />Payout no. 
            </Card>

          
                  </Col>
        <Col   xs={6} md={2}>
            <Card style={{ display:'flex',justifyContent:'center',alignItems:'center',fontSize:'1.2vmax',padding:'10px',marginLeft:'15px',width:'200px'}}>
                2023 <br />Payout Year.
            </Card>
            

                  </Col>
        <Col   xs={6} md={2}>
            <Card style={{ display:'flex',justifyContent:'center',alignItems:'center',fontSize:'1.2vmax',padding:'10px',marginLeft:'15px',width:'200px'}}>March <br /> Payout Month </Card>
             </Col>
        <Col  xs={6} md={2}>
            <Card style={{ display:'flex',justifyContent:'center',alignItems:'center',fontSize:'1.2vmax',padding:'10px',marginLeft:'15px',width:'200px'}} >
                Rs.20,000 <br /> Payout Amount
            </Card>
           
        </Col>
        <Col   xs={6} md={4}>
            <Card style={{ display:'flex',justifyContent:'center',alignItems:'center',fontSize:'1.2vmax',padding:'10px',marginLeft:'15px',width:'350px'}}>
                   Hello,my UPI ID is abcd@paytm <br /> Kindly pay as possible.
            </Card>
          
        </Col>
      </Row>



      <div className="table" style={{width:'80%',height:'60vh',marginTop:'15px',marginLeft:'30px'}}>
            <table style={{ border:'2px solid grey',width:'1200px',height:'400px'}}>
                <tr>
                    <th style={{borderBottom:'1px solid black'}}>Payout ID</th>
                    <th style={{borderBottom:'1px solid black'}}>Date</th>
                    <th style={{borderBottom:'1px solid black'}}>Month</th>
                    <th style={{borderBottom:'1px solid black'}}>Amount</th>
                    <th style={{borderBottom:'1px solid black'}}>Status</th>

                </tr>
                
                        <tr >
                            <td>10</td> 
                            <td>22-03-2023</td>
                            <td>march 23</td>
                            <td>22,000</td>
                            <td style={{color:'yellow'}}> <b>Processing</b> </td>
                        </tr>
                        <tr >
                            <td>9</td> 
                            <td>20-02-2023</td>
                            <td>febuary 23</td>
                            <td>10,000</td>
                            <td style={{color:'green'}}> <b>Sucessful</b> </td>
                        </tr>
                        <tr >
                            <td>8</td> 
                            <td>10-11-2022</td>
                            <td> december 22</td>
                            <td>5000</td>
                            <td style={{color:'green'}}> <b>Sucessful</b> </td>
                        </tr>
                        <tr >
                            <td>7</td> 
                            <td>09-11-2022</td>
                            <td> October22</td>
                            <td>2500</td>
                            <td style={{color:'red'}}> <b>Rejected</b></td>
                        </tr>
                        <tr >
                            <td>6</td> 
                            <td>06-11-2022</td>
                            <td>september 22</td>
                            <td>600</td>
                            <td style={{color:'green'}}> <b>Sucessful</b></td>
                        </tr>
                    
            </table>
        </div>

        <div className="btn" style={{display:'flex', justifyContent:'space-between', marginLeft:'30px',width:'1200px'}}>
        <select  id="Month" className='mont' >
                        <option value="Jan">Payout status</option>
                        <option value="feb">Payout Status</option>
                        <option value="march">Paid</option>
                        <option value="April" selected>Unpaid</option>
                    </select>
        
             <div> <button className='btn02' style={{marginRight:'20px'}} >Cancel</button>
             <button className='btn03'>Submit</button></div>
             
             </div>          

      
    </Container>
  );
}

export default PayoutDetail;