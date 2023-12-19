import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Account/Login";
import Singup from "./Pages/Account/Singup";
import Dashboard from "./Pages/Dashboard/dashboard";
import PostRequirement from "./Pages/Home/PostRequirement";
import Homepage from "./Pages/Landingpage/Homepage";
import StartUp from "./Pages/Home/StartUp";
import { Outlet } from "react-router";
import WithNav from "./Layout/withnav";
import Project from "./Pages/Home/Project";
import Profiledetails from "./Pages/Dashboard/layout/profiledetails";
import Projectdetails from "./Pages/Home/projectdetails";
import Index from "./Pages/Learn/index";
import Setting from "./Pages/Dashboard/setting";
import SwitchAccount from "./Pages/Dashboard/switchaccount";
import Hiretalent from "./Pages/Dashboard/hiretalent";
import Order from "./Pages/Dashboard/Order/order";
// import Ordertable from './Pages/Dashboard/Order/ordertable'
import Orderdetails from "./Pages/Dashboard/Order/orderdetails";
import Messaages from "./Pages/Dashboard/message";
import Notification from "./Pages/Dashboard/notification";
import Dashboardfreelancer from "./Pages/freelancerdashboard/dashboardfreelancer";
import Community from "./Pages/freelancerdashboard/Community";
import Package from "./Pages/freelancerdashboard/package";
import Orderdetailsbrief from "./Pages/Dashboard/Order/orderdetailsbrief";
import Editprofile from "./Pages/freelancerdashboard/editprofile";
import Quesans from "./Pages/freelancerdashboard/quesans";
import Moreprof from "./Pages/Dashboard/moreprof";
import Clientproject from "./Pages/Dashboard/Clientproject";
import Dashprojectdetails from "./Pages/Dashboard/dashporjectdetails";
import Messagedetails from "./Pages/Dashboard/messagedetails";
import Projeectdetailss from "./Pages/Dashboard/projectdetailss";
import Modulle from "./Pages/Learn/modulle";
import Module from "./Pages/Dashboard/package";
import Aboutus from "./Pages/unguarded_page/about";
import Userproject from "./Pages/freelancerdashboard/userproject";
import Chat from "./Pages/Dashboard/cchat/Chat/Chat";
import Cookies from "js-cookie";
import Nonotifiy from "./Pages/Dashboard/notify/Nonotify";
import Nonotifiyy from "./Pages/freelancerdashboard/nootify/Nonotify";

import Notificationn from "./Pages/Dashboard/notify/Notification";
import Notificationnn from "./Pages/freelancerdashboard/nootify/Notification";

import Viewprofile from "./Pages/Dashboard/viewprofile";
import MyAffiliations from "./Pages/Affiliations/myaffi";
import Affiliate from "./Pages/Affiliations/Affiliate";
import SwitchAccountt from "./Pages/Account/switch";
import FreeProDetails from "./Pages/freelancerdashboard/FreeProject";
import Career from "./Pages/unguarded_page/career";
import WiraaStartup from "./Pages/Landingpage/Wiraastartup";
import "./App.css";
import PrivacyPolicy from "./Pages/unguarded_page/Privacypolicy";
import ContactComponent from "./Pages/unguarded_page/AccfooContactus";
import Packages from "./Pages/Dashboard/package";
import ProfessionalServiceAgreement from "./Pages/unguarded_page/ProfessionalAgreement";
import UserAgreement from "./Pages/unguarded_page/UserAgreement";
import Unreadnotification from "./Pages/Dashboard/Unreadnotification";
import Unreadnotificationn from "./Pages/freelancerdashboard/Unreadnotification";
import FreeProjectdetails from "./Pages/freelancerdashboard/freeproject/FreeProject";
import TermsandCondition from "./Pages/unguarded_page/Termsandcondition";
import Learnwithoutlogin from "./Pages/Learn/Learnwithoutlogin";
import Messagebox from "./Pages/freelancerdashboard/Messagebox";
import Modulee from "./Pages/freelancerdashboard/Modulee";
import Settingss from "./Pages/freelancerdashboard/Settingss";
import FreeLearn from "./Pages/Learn/FreeLearn";
import VerifyEmail from "./Pages/Account/VerifyEmail";
import VerifyEmaill from "./Pages/Account/CompleteEmail";
import Updatepassword from "./Pages/Account/Updatepassword";
import PaymentSucess from "./Pages/Learn/PaymentSucess";
import Checkmessage from "./Pages/Dashboard/cchat/CheckMessage";
import Join from "./Pages/Dashboard/cchat/Join/Join";
import UpdateEmail from "./Pages/Account/UpdateEmail";
import Singupcode from "./Pages/Account/Singupcode";
import AzureBlobImage from "./Pages/Dashboard/blobimg";

// import Nonotiftyy from './Pages/freelancerdashboard/nootify/Notification';

function App() {
  return (
    <>
      <Outlet />
      <Router>
        <Routes>
          <Route exact element={<WithNav />}>
            <Route path="/" exact element={<Homepage />} />
          </Route>
          <Route path="/Account/singup" exact element={<Singup />} />
          <Route path="/Account/singup/:code" exact element={<Singupcode />} />
          <Route path="/Verify-Email" exact element={<VerifyEmail />} />
          <Route path="/Email-Verified" exact element={<VerifyEmaill />} />
          <Route path="/Update-Password" exact element={<Updatepassword />} />
          <Route path="/UpdateEmail" exact element={<UpdateEmail />} />
          <Route path="/Account/login" exact element={<Login />} />
          <Route
            path="/Home/PostRequirement"
            exact
            element={<PostRequirement />}
          />
          <Route path="/Home/Project" exact element={<Project />} />
          <Route
            path="/Home/Projectdetails"
            exact
            element={<Projectdetails />}
          />
          <Route
            path="/Projeectdetailss/:id"
            exact
            element={<Projeectdetailss />}
          />
          <Route path="/learn" exact element={<Index />} />
          <Route path="/Success-Payment" exact element={<PaymentSucess />} />
          <Route
            path="/Profiledetails/:id"
            exact
            element={<Profiledetails />}
          />
          <Route path="/About Us" exact element={<Aboutus />} />
          <Route path="/Career" exact element={<Career />} />
          <Route path="/PrivacyPolicy" exact element={<PrivacyPolicy />} />
          <Route
            path="/ContactComponent"
            exact
            element={<ContactComponent />}
          />
          <Route
            path="/ProfessionalServiceAgreement"
            exact
            element={<ProfessionalServiceAgreement />}
          />
          <Route
            path="/Termsandcondition"
            exact
            element={<TermsandCondition />}
          />
          <Route path="/UserAgreement" exact element={<UserAgreement />} />
          {/* User-Dashborad link */}
          <Route path="/user/dashboard" exact element={<Dashboard />} />
          {/* Order page link*/}
          <Route path="/Order" exact element={<Order />} />
          {/* <Route path='/Ordertable' exact  element={<Ordertable/>}/> */}
          <Route path="/Orderdetails/:id" exact element={<Orderdetails />} />
          <Route
            path="/Orderdetailsbreief/:id"
            exact
            element={<Orderdetailsbrief />}
          />
          {/*project page link*/}
          <Route path="/user/Project" exact element={<Clientproject />} />
          <Route
            path="/FreeProject/:id"
            exact
            element={<FreeProjectdetails />}
          />
          <Route
            path="/user/Projectdetails"
            exact
            element={<Dashprojectdetails />}
          />
          <Route path="/Home/StartUp" exact element={<StartUp />} />
          {/* Leran page link */}

          <Route path="Packages" exact element={<Packages />} />
          <Route path="/Notification" exact element={<Nonotifiy />} />

          <Route path="/Notifications" exact element={<Nonotifiyy />} />

          <Route path="/User/Notification" exact element={<Notificationn />} />
          <Route path="/Uses/Natification" exact element={<Notificationnn />} />

          <Route
            path="/User/Notifications"
            exact
            element={<Unreadnotification />}
          />
          <Route
            path="/Users/Notificationss"
            exact
            element={<Unreadnotificationn />}
          />

          <Route path="/Notification" exact element={<Notification />} />
          <Route path="/Notificationss" exact element={<Notification />} />

          <Route path="/Profile" exact element={<Viewprofile />} />
          <Route path="/Module" exact element={<Modulle />} />
          {/* <Route path='/Modulee' exact  element={<Modulee />} /> */}
          <Route path="/ProModule" exact element={<FreeLearn />} />
          <Route path="/Learrn" exact element={<Learnwithoutlogin />} />
          <Route path="/Module" exact element={<Module />} />
          <Route path="/user/Setting" exact element={<Setting />} />
          <Route path="/Settingss" exact element={<Settingss />} />

          <Route path="/Switchaccount" exact element={<SwitchAccount />} />
          <Route path="/Hiretalent" exact element={<Hiretalent />} />
          {/* <Route path='/Hiretalent' exact element={<AzureBlobImage />} /> */}
          <Route
            path="/Project/ProjectDetails"
            exact
            element={<Projectdetails />}
          />
          <Route path="/Message" exact element={<Checkmessage />} />
          <Route path="/Messagebox" exact element={<Messagebox />} />

          <Route
            path="/Professionalsdashboard"
            exact
            element={<Dashboardfreelancer />}
          />
          <Route path="/Community" exact element={<Community />} />
          <Route path="/Package" exact element={<Package />} />
          {/* <Route path ='/Editp'/> */}
          <Route path="/Editproflie" exact element={<Editprofile />} />
          <Route path="/Switchaccount-next" exact element={<Moreprof />} />
          <Route path="/Quesans/:questionId" exact element={<Quesans />} />
          <Route path="/Project" exact element={<Dashprojectdetails />} />
          <Route path="/Ordermessage" exact element={<Messagedetails />} />
          <Route path="/UserProject" exact element={<Userproject />} />
          {/* <Route path='/Chat' exact  element={<Chat />} /> */}
          <Route path="/chatt" exact element={<Join />} />
          <Route path="/chatts" exact element={<Chat />} />
          <Route path="/MyAffilate" exact element={<MyAffiliations />} />
          <Route path="/Affilate" exact element={<Affiliate />} />
          <Route path="/Switchacc" exact element={<SwitchAccountt />} />
          {/* Freelancer */}
          <Route path="/ProProjectDetails" exact element={<FreeProDetails />} />
          <Route path="/Wiraastartup" exact element={<WiraaStartup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
