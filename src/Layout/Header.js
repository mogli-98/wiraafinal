// import React from 'react';

// import { Link } from "react-router-dom";



// function Navbar() {

//   return (
//     <>
//       <nav className="navbar pt-4" style={{backgroundColor:'white'}}>
//         <div className="left-side">
//           <Link to="/"><img src={Wiraalogo} alt="Logo" className="top-img" /></Link>
//         </div>
//         <div className="navbar-right">

//           <Link to='/Module'className="learn"><button style={{ border:'none',backgroundColor:'transparent'}}><b> Learn </b></button></Link>
//           <Link to='/Wiraastartup'className="startup"> <button style={{ border:'none',backgroundColor:'transparent'}}><b>Startup</b> </button> </Link>
//           <Link to='/Account/login'><button className="navbar-button login"><b>Login</b></button></Link>
//           <Link to="/Account/singup"><button className="navbar-button join"><b>Signup</b></button></Link>
//         </div>
//       </nav>
//     </>
//   )
// }

// export default Navbar;







// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Wiraalogo from "../asset/image/Wiraalogo.png";




function Header() {
  return (
    <>
      <Navbar expand="lg" xs={12} style={{ color: '#fff', padding: '20px' }}>

        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <div className="left-side">
          <Link to="/"><img src={Wiraalogo} alt="Logo" className="top-img" /></Link>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">

          <Nav className="me-auto" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginLeft: '98%' }}>

            <Link to='/Learrn' className="learn"><button style={{ border: 'none', backgroundColor: 'transparent', marginRight: '20px' }}><b> Learn </b></button></Link>
            <Link to='/Wiraastartup' className="startup"> <button style={{ border: 'none', backgroundColor: 'transparent', marginRight: '20px' }}><b>Startup</b> </button> </Link>
            <Link to='/Account/login'><button className="navbar-button login headerloginbutton" ><b>Login</b></button></Link>
            <Link to="/Account/singup"><button className="navbar-button join headersignupbutton d-none d-sm-block " style={{ marginRight: '60px' }}><b>Signup</b></button></Link>
            <Link to="/Account/singup"><button className="navbar-button join headersignupbutton d-block d-sm-none " ><b>Signup</b></button></Link>


          </Nav>
        </Navbar.Collapse>

      </Navbar>

    </>
  );
}

export default Header;