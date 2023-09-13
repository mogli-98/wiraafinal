import React from 'react';
import '../../Aseset/css/career.css'; // Import your CSS file if you have one
import Image1 from "../../Aseset/image/aboutus.png"
import Navbar from '../../Layout/Header';
import Accountfootor from '../../Layout/Accountfooter';

function Career() {
    return (
        <>
        <Navbar/>
        <center>
    <div className="career_container">
      <center> 
        <h1 className="career-h1">Career</h1>
      </center>
      <center>
        <h2 className="career-h2">Build The Future. Come Work With Us!</h2>
      </center>

      <div className="row">
        <div className="col-sm-6">
          <img className="career-img" src={Image1} alt="" />
          <h3 className="career-h3">Make a Difference Your Way</h3>
          <p className='career-p'>Work where you’re inspired to explore your passions, where your talents are nurtured and cultivated.
            Discover what we have to offer, and what we can do together.</p>
        </div>
        <div className="col-sm-6">
          <img className="career-img" src={Image1} alt="" />
          <h3 className="career-h3">Put Your Talent To Work</h3>
          <p className='career-p'>We are a team of artists working together to help sharing knowledge as simple & easy as sharing a
            link,
            and </p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
        <img className="career-img" src={Image1} alt="" />
          <h3 className="career-h3">We Believe In Action. Community. Quality</h3>
          <p className='career-p'>It’s our mission to grow and cultivate an amazing place where people can join and learn anything
            they
            want and also can become an expert in the field they dream.</p>
        </div>
        <div className="col-sm-6">
        <img className="career-img" src={Image1} alt="" />
          <h3 className="career-h3">Thrive In An Open Work Environment</h3>
          <p className='career-p'>We believe in openness: Open sharing of ideas and complete transparency of our strategy. We
            appreciate
            diverse backgrounds, experiences, approaches, and ideas.</p>
        </div>
      </div>
    </div>
    </center>
    <div className="container1">
      <div className="row">
        <div className="col-sm-6">
          <h2 className="career-h2">Our diverse and dynamic teams work collaboratively to bring innovative educational
            services and ideas to life.</h2>
        </div>
        <div className="col-sm-6">
          {/* <img className="career-img1" src="career.jpg" alt="" /> */}
          <img className="career-img" src={Image1} alt="" />
        </div>
      </div>
    </div>

    <center>
      <h4 className="career-h4">Join us and help share knowledge to every corner of the world.
        <b> Drop us a Mail </b>: hello@wiraa.com
      </h4>
    </center>

    <Accountfootor/>

    </>
    );
}

export default Career;
