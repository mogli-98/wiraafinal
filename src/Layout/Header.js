import React from 'react';
import Wiraalogo from "../asset/image/Wiraalogo.png";
import { Link } from "react-router-dom";

function Navbar() {
  
  return (
    <>
      <nav className="navbar pt-4" style={{backgroundColor:'white'}}>
        <div className="left-side">
          <Link to="/"><img src={Wiraalogo} alt="Logo" className="top-img" /></Link>
        </div>
        <div className="navbar-right">
         
          <Link to='/learn'className="learn"><button style={{ border:'none',backgroundColor:'transparent'}}><b> Learn </b></button></Link>
          <Link to='/Wiraastartup'className="startup"> <button style={{ border:'none',backgroundColor:'transparent'}}><b>Startup</b> </button> </Link>
          <Link to='/Account/login'><button className="navbar-button login"><b>Login</b></button></Link>
          <Link to="/Account/singup"><button className="navbar-button join"><b>Signup</b></button></Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar;