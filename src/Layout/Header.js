import React,{useState} from 'react';
// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Wiraalogo from "../asset/image/Wiraalogo.png";




function Header() {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <>

      {
        localStorage.getItem("accessToken") === null ? (<>
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


        </>) : (<>

          <Navbar expand="lg" xs={12} style={{ color: '#fff', padding: '20px' }}>


            <div className="left-side">
              <Link to="/"><img src={Wiraalogo} alt="Logo" className="top-img" /></Link>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">

              <Nav className="me-auto" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginLeft: '80%' }}>

                


                <Link to="/" style={{ textDecoration: 'none' }}>
                  <span
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{
                      border: 'none',
                      backgroundColor: 'transparent',
                      marginRight: '50px',
                      color: isHovered ? '#008080' : 'black', // Change color on hover
                      cursor: 'pointer',
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                    </svg>
                    <b> Back to Home </b>
                  </span>
                </Link>

              </Nav>
            </Navbar.Collapse>

          </Navbar>


        </>)
      }



    </>
  );
}

export default Header;