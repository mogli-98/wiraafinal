
import React, { useEffect } from 'react';
// import Logo from '../../Aseset/image/Wiraalogo.png';
import '../../asset/css/Termsandcondition.css';
import Navbar from '../../Layout/Header';
import Accountfootor from '../../Layout/Accountfooter';

export default function TermsandCondition() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <div style={{backgroundColor:'white'}}>
                <Navbar />
                {/* <header class="header-index" style={{ backgroundColor: '#fff' }}>
                <div class="container">
                    <div class="row">
                        <div class="col-xl-4 col-4">
                            <a href="/"> <img src={Logo} class="img-fluid img-custom-header" /></a>

                        </div>
                        <div class="col-xl-2 col-6 ml-auto">
                            <ul class="join-under set_newlog">
                                <li><a href="/Account/Login" data-signin="signup">Login</a></li>
                                <li class="active-list"><a href="/Account/Signup" data-signin="signup">Join</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </header> */}

                <h1 className="head12">Terms And Conditions</h1 >

                <div class="container custom_width_teerms" style={{ backgroundColor: 'white' }}>
                    <div class="row">
                        <h3 class="head_connection">
                            Wiraa is an online networking community that connects its clients & professionals
                            through a variety of services that it provides to its members. This document covers the
                            terms and conditions under which these services are provided.
                        </h3>

                        <ul class="under_list_term">
                            <li>
                                Your registration as a member of Wiraa or the use of any of the features and services on Wiraa,
                                either as a registered member or as a visitor constitutes automatic acceptance of these terms and
                                conditions.
                            </li>
                            <li>
                                Wiraa reserves the right to update the terms, conditions, and notices of this agreement without
                                notice to you. It is your responsibility to periodically review the most current version of this Agreement.
                            </li>
                            <li>
                                By accessing or using the sites, content, or services, you agree to be bound by these terms of
                                service.
                            </li>
                            <li>
                                If you do not agree with any of the terms and conditions of Wiraa, do not register and you will not
                                be authorized to use Wiraa services.
                            </li>
                            <li>
                                The views expressed on the website are not those of Wiraa, and any issues in them belong to the
                                respective contributors.
                            </li>
                            <li>
                                Through the use of this site, you agree to hold Wiraa harmless and its sponsors, owners,
                                shareholders or employees against any claims.
                            </li>
                            <li>
                                You are responsible for safeguarding the password that you use to access the sites, content, and
                                services. You agree not to disclose your password to any third party. You agree to take sole
                                responsibility for any activities or actions under your password, whether or not you have authorized
                                such activities or actions.
                            </li>
                            <li>
                                You may not make any content item originating from Wiraa available for public access by any
                                means whatsoever without obtaining prior written permission from Wiraa.
                            </li>
                            <li>
                                Wiraa provides a variety of forums for its members to express themselves in the form of articles,
                                blogs, comments, reviews, and photographs. You truthfully assert that the content being contributed is
                                yours and that you own the copyright to the content.
                            </li>
                            <li>
                                The content on the website is posted by Wiraa, visitors and its members. Wiraa will attempt to
                                ensure the integrity and the accuracy of the site in the content and or services but it does not
                                guarantee that the information is accurate or complete or current. Wiraa can not be held liable for the
                                inaccuracy of any data listed on the website or any damage caused by the use of inaccurate data. It is
                                Wiraa's policy to correct any inaccuracy reported within 7 days.
                            </li>
                            <li>
                                The opinions and reviews expressed on the site belong to the users and Wiraa cannot be held liable
                                in any way about the content of the opinions and reviews. The platform allows users to express their
                                views about different agencies, professionals and clients.
                            </li>
                            <li>Wiraa should not be thought of as the authority and the final guide in your decision making. </li>
                            <li>
                                Wiraa at its sole discretion may edit, delete or block access to any content including member posted
                                content, without notice and without liability. We will, however, make reasonable efforts to inform you
                                of the changes.
                            </li>
                            <li>
                                By uploading the logo of your work or agency, you give Wiraa the right to use the logo on Wiraa
                                website as well as on any Wiraa marketing material.
                            </li>
                            <li>
                                If you are a visitor on our website and if you update any personal contact information such as phone
                                number or e-mail address, Wiraa reserves the right to contact you over Phone calls, SMS or E-mail. If
                                the intention was for our services or seeking information about our product & services, Wiraa team will
                                guide you accordingly via phone call, SMS or e-mail.
                            </li>
                        </ul>

                        <h3 class="head-connection">
                            While using the web site and engaged in any form of communication on any of the
                            forums, you agree not to:
                        </h3>

                        <ul class="under_list_term">
                            <li>
                                Post, publish or transmit any messages that is false, misleading, defamatory, harmful, threatening,
                                abusive, harassing, defamatory, invades another's privacy, offensive, promotes racism, hatred or harm
                                against any individual or group or religion or caste, infringes another's rights including any intellectual
                                property rights or copyright or trademark, violates or encourages any conduct that would violate any
                                applicable law or regulation or would give rise to civil liability.
                            </li>
                            <li>
                                Upload or post otherwise make available any content that you do not have a right to make
                                available, under any law or under contractual or fiduciary relationships.
                            </li>
                            <li>
                                Upload or post or otherwise make available any content that infringes any patent, trademark, trade
                                secret, copyright or other proprietary rights of any party. You may, however, post excerpts of
                                copyrighted material so long as they adhere to fair use guidelines.
                            </li>
                            <li>
                                Collect screen names and email addresses of members for purposes of advertisement, solicitation or
                                spam are prohibited.
                            </li>
                            <li>
                                Wiraa doesn't allow registration for agencies & organizations who are engaged in providing
                                products or services similar to that of Wiraa (or) who is engaged in the collection of data from Wiraa
                                website and sharing/utilizing it for the benefit of competitors. If there are any such registrations, Wiraa
                                reserves the right to terminate those accounts without any prior notice & without processing the refund
                                of subscription associated with those accounts. Wiraa also reserves the right to initiate any legal
                                proceedings if any ‘agencies or organizations' contravenes condition as stated above.
                            </li>
                            <li>
                                Kindly clarify your doubts before you make a payment to upgrade to any of our premium
                                membership plans to access inquiries. Once a payment is made, it cannot be refunded.
                            </li>
                            <li>
                                Before availing any of our advertising packages - Sponsored Listing, Branding Package, and Banner
                                Ad, kindly understand the benefits the packages offer. The payment made for any of our Branding
                                packages is non-refundable.
                            </li>
                            <li>
                                In case you have any doubt or query, please drop an email at hello@wiraa.com. We’ll get back to
                                you within 2 working days.
                            </li>
                            <li>
                                Attempt to probe, scan, or test the vulnerability of a website or breach any security or
                                authentication measures.
                            </li>

                            <li>Access or search the sites content or services with any engine, software, or tool. </li>

                            <li>
                                Send unsolicited email, junk mail, spam, or chain letters, or promotions or advertisements for
                                products or services.
                            </li>

                            <li>
                                Reformat or frame any portion of the web pages that are part of the Wiraa Site without a written
                                agreement.
                            </li>
                            <li>
                                Create user accounts by automated means or under false or fraudulent pretenses.
                            </li>
                            <li>
                                Post text, messages, graphics or materials that are sales offers, advertisements, or promotions for
                                products or services.
                            </li>

                            <li>
                                Wiraa reserves the right at any time and from time to time to modify or discontinue, temporarily or
                                permanently, the services with or without notice.
                            </li>
                        </ul>

                        <h3 class="head-connection">Venue Only </h3>

                        <p class="para_terms">
                            If you enter into correspondence or engage in commercial transactions with third parties in connection
                            with your use of the Wiraa service, such activity is solely between you and the applicable third party.
                            Wiraa shall have no liability, obligation or responsibility for any such activity. You hereby release
                            Wiraa from all claims arising from such activity.
                        </p>

                        <h3 class="head-connection">Listings </h3>
                        <p class="para_terms">
                            Wiraa will create listing of clients, professionals, agencies and various categories and the details,
                            including, but not limited to, the topic, pricing and related rules and financial terms will be listed on the
                            site and the application. Listings will be made publicly available via the Site, application and services.
                            You understand and agree that the placement or ranking of Listings in search results may depend on a
                            variety of factors, including, but not limited to clients preferences, ratings.
                        </p>
                        <p class="para_terms">
                            Please note that Wiraa assumes no responsibility for a client’s compliance with any agreements with or
                            duties to third parties, applicable laws, rules and regulations. Wiraa reserves the right, at any time and
                            without prior notice, to remove or disable access to any user for any reason, that Wiraa, in its sole
                            discretion, considers to be objectionable for any reason, in violation of these terms or Wiraa's thencurrent standards, trademark & branding guidelines, or otherwise harmful to the site, application or
                            services.
                        </p>
                        <p class="para_terms">
                            If you are a professional, you understand and agree that your relationship with Wiraa is limited to
                            being a Member and an independent, third-party contractor, and not an employee, agent, jointventurer or partner of Wiraa for any reason, and you act exclusively on your own behalf and for your
                            own benefit, and not on behalf of or for the benefit of Wiraa. Wiraa does not control, your offline
                            activities. As a member, you agree not to do anything to create a false impression that you are
                            endorsed by, partnering with, or acting on behalf of or for the benefit of Wiraa, including by
                            inappropriately using any Wiraa intellectual property.
                        </p>
                        <p class="para_terms">
                            When you connect or apply to become a professional, you will also be required to upload certain
                            information, such as, educational & working experiences, uploading a profile picture or verifying email
                            ID or phone number. Any member wishing to apply as a professional must meet these requirements.
                        </p>

                        <h3 class="head-connection">Ownership</h3>
                        <p class="para_terms">
                            Except for the Content submitted by members or users, the Wiraa Service and all aspects thereof,
                            including all copyrights, trademarks, and other intellectual property or proprietary rights therein, is
                            owned by Wiraa or its licensors. You acknowledge that the Wiraa and any underlying technology or
                            software used in connection with the Wiraa Service contain Wiraa's proprietary information. You may
                            not modify, reproduce, distribute, create derivative works of, publicly display or in any way exploit,
                            any of the content, software, and/or materials available on the Wiraa Site, or Wiraa Services in whole
                            or in part except as expressly provided in Wiraa's policies and procedures. Except as expressly and
                            unambiguously provided herein, Wiraa and its suppliers do not grant you any express or implied
                            rights, and all rights in the Wiraa Service not expressly granted by Wiraa to you are retained by
                            Wiraa.
                        </p>
                        <h3 class="head-connection">Fair pricing</h3>
                        <ul class="under_list_term">
                            <li>
                                Cost-effective Solutions – Our pricing is derived from the factors responsible to produce optimum results for your money paid.

                            </li>
                            <li>
                                Long Term Relationships – We believe in building business relationships which can sustain over a long period of time leading to real partnerships rather than aiming for short term profiteering.

                            </li>
                            <li>
                                Mutual Trust – We believe that your success will be our success and you have to trust us with our methods.

                            </li>
                            <li>
                                Supporting Startups – We provide a 7-day money-back guarantee to our startups under Wiraa startup package. We do not try to fool you with any hidden charges.

                            </li>
                            <li>
                                Enhancing our Services – Our pricing is based on our cost plus a reasonable profit margin to allow for continued growth and development of our business, employees and future product enhancements.

                            </li>
                            <li>
                                Our driving philosophy is that if Wiraa remains profitable, competitive and customer-focused then our future and that of our customers will be secure and prosperous. We are committed to the success of our customers and believe that your hard work is as valuable as ours.

                            </li>



                        </ul>

                        <h3 class="head-connection">Additional Terms </h3>
                        <p class="para_terms">
                            Our Site, Application and Services have different products, features and offerings, so sometimes
                            additional terms or product requirements may apply to your use of those products, features or
                            offerings. If additional terms are available for the relevant product or Services you use, those
                            additional terms become part of these Terms.
                        </p>
                        <h3 class="head-connection">Limitation of Liability</h3>
                        <p class="para_terms">
                            The site, content, and services are provided as is, without warranty or condition of any kind, either expressed or implied. in no event shall wiraa, be liable for any direct, indirect, incidental, special, punitive, consequential damages whatsoever, including, but not limited to, damages for loss of profits, goodwill, use, data, or other intangible losses resulting from the use or the inability to use our services.
                            Wiraa makes no warranty that the sites, content, or services will meet your requirements or be available on an uninterrupted, secure, or error-free basis.
                            Wiraa makes no warranty regarding the quality of any products, services, accuracy, timeliness, truthfulness, completeness or information purchased or obtained through the sites, content or services.
                        </p>

                        <h3 class="head-connection" style={{ marginBottom: '40px' }}>
                            YOU HAVE READ THESE TERMS OF USE AND AGREE TO ALL OF THE PROVISIONS
                            CONTAINED ABOVE
                        </h3>
                    </div>
                </div>

                {/* <div class="bb-full-width bb-footer-bfor-login">
                <div class="footer-wrap">
                    {/* <footer>
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-4">
                                    <section class="widget">
                                        <img src={Logo} style={{height:"40px",marginBottom:'20px'}} alt='Logo'/>
                                            <p class="pull-bottom-small">
                                                Professional Networking Platform
                                            </p>
                                            <p>
                                                <a href="page-about-us-2.html">Read More →</a> 
                                            </p>
                                    </section>
                                </div>
                                <div class="col-sm-2 col-6">
                                    <section class="widget">
                                        <div class="widget-heading">
                                             <h4>Contact Us</h4>
                                        </div>
                                        <div class="footer-contact-info">
                                            <ul>
                                                <li>
                                                    <a href="/Account/Signup"><p>&nbsp;&nbsp;&nbsp;&nbsp;Join </p></a>
                                                </li>
                                                <li>
                                                    <a href="/Home/AboutUs"><p>&nbsp;&nbsp;&nbsp;&nbsp;About </p></a>
                                                </li>
                                                <li>
                                                    <a href="http://wiraa.com/talks"><p>&nbsp;&nbsp;&nbsp;&nbsp;Talks </p></a>
                                                </li>

                                                <li>
                                                    <a href=""><p>&nbsp;&nbsp;&nbsp;&nbsp;Store</p></a>
                                                </li>



                                            </ul>
                                            <br/>

                                        </div>
                                    </section>
                                </div>
                                <div class="col-sm-2 col-6">
                                    <section class="widget">
                                        <div class="widget-heading">
                                            <h4>Contact Us</h4> 
                                        </div>
                                        <div class="footer-contact-info">
                                            <ul>

                                                <li>
                                                    <a href="/Home/career"> <p>&nbsp;&nbsp;&nbsp;&nbsp;Career</p></a>
                                                </li>

                                                <li>
                                                    <a href="/Home/contactUs">  <p>&nbsp;&nbsp;&nbsp;&nbsp;Contact</p></a>
                                                </li>



                                                <li>
                                                    <a href="/Home/faq">  <p>&nbsp;&nbsp;&nbsp;&nbsp;FAQ</p></a>
                                                </li>

                                                <li>
                                                    <a href="/Home/Terms">   <p>&nbsp;&nbsp;&nbsp;&nbsp;Terms</p></a>
                                                </li>
                                            </ul>
                                            <br/>

                                        </div>
                                    </section>
                                </div>


                                <div class="col-sm-3">
                                    <section class="widget">
                                        <div class="widget-heading">
                                            <h4>Follow Us</h4>
                                        </div>

                                        <ul class="social-icons standard">

                                            <li class="youtube"><a href="https://instagram.com/wiraaworld" target="_blank"><i class="fab fa-instagram"></i></a></li>
                                            <li class="googleplus"><a href=" https://www.linkedin.com/company/wiraa" target="_blank"><i class="fab fa-linkedin"></i></a></li>
                                            <li class="facebook"><a href="https://www.facebook.com/wiraaworld" target="_blank"><i class="fab fa-facebook"></i></a></li>
                                        </ul>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </footer> 

                </div>
            </div> */}
                
            </div>
            <Accountfootor />
        </>

    )
}



