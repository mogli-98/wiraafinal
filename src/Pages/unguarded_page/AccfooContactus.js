import React from 'react';

import "../../Aseset/css/AccfooContactus.css";
import Wiraalogo from "../../Aseset/image/Wiraalogo.png";
import Wiraaalogo from "../../Aseset/image/Wiraalogowhite.png";
import Accountfootor from '../../Layout/Accountfooter';

function ContactComponent() {
  return (

    <>
    <div className="bb-full-width bb-top-menubar-logedout">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-6 pr-0">
            <a href="/" className="d-inline-block float-left">
              <img src={Wiraalogo} alt="Logo" className="img-fluid img-custom-header" />
            </a>
          </div>
          <div className="col-xl-3 col-6 pl-0 ml-auto">
            <ul className="join-under set_newlog float-right">
              <li><a href="/Account/Login" data-signin="signup">Login</a></li>
              <li className="active-list"><a href="/Account/Signup" data-signin="signup">Join</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="bb-full-width">
      <div className="bb-contact-container">
        <div className="bb-full-width bb-contact-box">
          <div className="bb-full-width text-center">
            <h2 className="head-welcome bb-full-width">Contact Us</h2>
          </div>
          <div className="bb-full-width">
            {/* Replace the HTML form with a React form */}
            <form className="bb-full-width" >
              <div className="form-group">
                <label className="bb-label-contact" htmlFor="name">Name</label>
                <input type="text" className="form-control bb-input-contact" id="name" placeholder="Enter your name" required />
              </div>
              <div className="form-group">
                <label className="bb-label-contact" htmlFor="contact">Contact</label>
                <input type="text" className="form-control bb-input-contact" id="contact" placeholder="Enter your mobile number" required />
              </div>
              <div className="form-group">
                <label className="bb-label-contact" htmlFor="email">Email</label>
                <input type="email" className="form-control bb-input-contact" id="email" placeholder="Enter your email" required />
              </div>
              <div className="form-group">
                <label className="bb-label-contact" htmlFor="message">Message</label>
                <textarea className="form-control bb-input-contact" id="message" placeholder="Enter your message" rows="5"></textarea>
              </div>
              <div className="form-group">
                <input type="submit" className="bb-full-width btn bb-contact-form-submit" value="Submit" />
              </div>
            </form>
          </div>

          <div className="bb-contact-box-saprator text-center">
            <span>Or Connect With</span>
          </div>

          <div className="bb-full-width bb-contat-social-sec">
            <div className="bb-full-width">
              <div className="bb-contat-social-box">
                <a href="https://instagram.com/wiraaworld" target="_blank">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/company/wiraa" target="_blank">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://www.facebook.com/wiraaworld" target="_blank">
                  <i className="fab fa-facebook"></i>
                </a>
              </div>
            </div>
            <div className="bb-full-width text-center">
              <a href="mailto:hello@wiraa.com" className="text-info bb-mail-link">hello@wiraa.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Footer */}
    {/* <div className="bb-full-width bb-footer-bfor-login">
      <div className="footer-wrap">
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <section className="widget">
                  <img src={Wiraaalogo} style={{ marginBottom: '20px', width: '100%', maxWidth: '170px' }} alt="Logo" />
                  <p className="pull-bottom-small">Connect With Experts</p>
                </section>
              </div>
              {/* Add the rest of the footer content 
            </div>
          </div>
        </footer>
      </div>
    </div> */}

    <Accountfootor/>

    </>
  );
}

export default ContactComponent;
