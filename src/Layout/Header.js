import React from 'react';
import Wiraalogo from "../Aseset/image/Wiraalogo.png";
import { Link } from "react-router-dom";

function Navbar() {
  
  return (
    <>
      <nav className="navbar mt-4">
        <div className="left-side">
          <Link to="/"><img src={Wiraalogo} alt="Logo" className="top-img" /></Link>
        </div>
        <div className="navbar-right">
         
          <Link to='/learn'className="learn"><b>Learn</b></Link>
          <Link to='/Wiraastartup'className="startup"><b>Startup</b></Link>
          <Link to='/Account/login'><button className="navbar-button login"><b>Login</b></button></Link>
          <Link to="/Account/singup"><button className="navbar-button join"><b>Signup</b></button></Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
