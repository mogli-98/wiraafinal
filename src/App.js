import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Pages/Account/Login';
import Singup from './Pages/Account/Singup';
import Dashboard from './Pages/Dashboard/dashboard';
import PostRequirement from './Pages/Home/PostRequirement';
import Homepage from './Pages/Landingpage/Homepage';
import StartUp from './Pages/Home/StartUp';
import { Outlet } from 'react-router';
import WithNav from './Layout/withnav';
import Project from './Pages/Home/Project';
import Profiledetails from './Pages/Dashboard/layout/profiledetails';
import Projectdetails from './Pages/Home/projectdetails';
import Index from './Pages/Learn/index';
import Setting from './Pages/Dashboard/setting';
import SwitchAccount from './Pages/Dashboard/switchaccount';
import Hiretalent from './Pages/Dashboard/hiretalent';
import Order from './Pages/Dashboard/Order/order';
// import Ordertable from './Pages/Dashboard/Order/ordertable'
import Orderdetails from './Pages/Dashboard/Order/orderdetails';
import Messaages from './Pages/Dashboard/message';
import Notification from './Pages/Dashboard/notification';
import Dashboardfreelancer from "./Pages/freelancerdashboard/dashboardfreelancer"
import Community from './Pages/freelancerdashboard/Community';
import Package from './Pages/freelancerdashboard/package';
import Orderdetailsbrief from './Pages/Dashboard/Order/orderdetailsbrief';
import Editprofile from './Pages/freelancerdashboard/editprofile';
import Quesans from './Pages/freelancerdashboard/quesans';
import Moreprof from './Pages/Dashboard/moreprof';
import Clientproject from './Pages/Dashboard/Clientproject';
import Dashprojectdetails from './Pages/Dashboard/dashporjectdetails';
import Messagedetails from './Pages/Dashboard/messagedetails';
import Projeectdetailss from './Pages/Dashboard/projectdetailss';
import Modulle from './Pages/Learn/modulle';
import Module from './Pages/Dashboard/package';
import Aboutus from './Pages/unguarded_page/about';
import Userproject from './Pages/freelancerdashboard/userproject';
import Chat from './Pages/Dashboard/cchat/Chat/Chat';

import Nonotifiy from './Pages/Dashboard/notify/Nonotify';
import Nonotifiyy from './Pages/freelancerdashboard/nootify/Nonotify';

import Notificationn from './Pages/Dashboard/notify/Notification';
import Notificationnn from './Pages/freelancerdashboard/nootify/Notification';

import Viewprofile from './Pages/Dashboard/viewprofile';
import MyAffiliations from './Pages/Affiliations/myaffi';
import Affiliate from './Pages/Affiliations/Affiliate';
import SwitchAccountt from './Pages/Account/switch';
import FreeProDetails from './Pages/freelancerdashboard/FreeProject';
import Career from './Pages/unguarded_page/career';
import WiraaStartup from './Pages/Landingpage/Wiraastartup';
import './App.css';
import PrivacyPolicy from './Pages/unguarded_page/Privacypolicy';
import ContactComponent from './Pages/unguarded_page/AccfooContactus';
import Packages from './Pages/Dashboard/package';
import ProfessionalServiceAgreement from './Pages/unguarded_page/ProfessionalAgreement';
import UserAgreement from './Pages/unguarded_page/UserAgreement';
import Unreadnotification from './Pages/Dashboard/Unreadnotification';
import Unreadnotificationn from './Pages/freelancerdashboard/Unreadnotification';
import FreeProjectdetails from './Pages/freelancerdashboard/freeproject/FreeProject';
import TermsandCondition from './Pages/unguarded_page/Termsandcondition';
import Learnwithoutlogin from './Pages/Learn/Learnwithoutlogin';
import Messagebox from './Pages/freelancerdashboard/Messagebox';
import Modulee from './Pages/freelancerdashboard/Modulee';
import Settingss from './Pages/freelancerdashboard/Settingss';
import FreeLearn from './Pages/Learn/FreeLearn';
import VerifyEmail from './Pages/Account/VerifyEmail';
import VerifyEmaill from './Pages/Account/CompleteEmail';
import Updatepassword from './Pages/Account/Updatepassword';
import PaymentSucess from './Pages/Learn/PaymentSucess';
import Checkmessage from './Pages/Dashboard/cchat/CheckMessage';
import Join from './Pages/Dashboard/cchat/Join/Join';
import UpdateEmail from './Pages/Account/UpdateEmail';

// import Nonotiftyy from './Pages/freelancerdashboard/nootify/Notification';

function App() {
  return (
    <>
      <Outlet />
      <Router>
        <Routes>
          <Route element={<WithNav />}>
            <Route path='/' element={<Homepage />} />
          </Route >
          <Route path='/Account/singup' element={<Singup />} />
          <Route path='/Verify-Email' element={<VerifyEmail />} />
          <Route path='/Email-Verified' element={<VerifyEmaill />} />
          <Route path='/Update-Password' element={<Updatepassword />} />
          <Route path='/UpdateEmail' element={<UpdateEmail />} />
          <Route path='/Account/login' element={<Login />} />
          <Route path="/Home/PostRequirement" element={<PostRequirement />} />
          <Route path='/Home/Project' element={<Project />} />
          <Route path='/Home/Projectdetails' element={<Projectdetails />} />
          <Route path='/Projeectdetailss/:id' element={<Projeectdetailss />} />
          <Route path='/learn' element={<Index />} />
          <Route path='/Success-Payment' element={<PaymentSucess />} />
          <Route path='/Profiledetails/:id' element={<Profiledetails />} />
          <Route path='/About Us' element={<Aboutus />} />
          <Route path='/Career' element={<Career />} />
          <Route path='/PrivacyPolicy' element={<PrivacyPolicy />} />
          <Route path='/ContactComponent' element={<ContactComponent />} />
          <Route path='/ProfessionalServiceAgreement' element={<ProfessionalServiceAgreement />} />
          <Route path='/Termsandcondition' element={<TermsandCondition />} />
          <Route path='/UserAgreement' element={<UserAgreement />} />
          {/* User-Dashborad link */}
          <Route path='/user/dashboard' element={<Dashboard />} />
          {/* Order page link*/}
          <Route path='/Order' element={<Order />} />
          {/* <Route path='/Ordertable' element={<Ordertable/>}/> */}
          <Route path='/Orderdetails/:id' element={<Orderdetails />} />
          <Route path='/Orderdetailsbreief/:id' element={<Orderdetailsbrief />} />
          {/*project page link*/}
          <Route path='/user/Project' element={<Clientproject />} />
          <Route path='/FreeProject/:id' element={<FreeProjectdetails />} />
          <Route path='/user/Projectdetails' element={<Dashprojectdetails />} />
          <Route path='/Home/StartUp' element={<StartUp />} />
          {/* Leran page link */}

          <Route path='Packages' element={<Packages />} />
          <Route path='/Notification' element={<Nonotifiy />} />

          <Route path='/Notifications' element={<Nonotifiyy />} />


          <Route path='/User/Notification' element={<Notificationn />} />
          <Route path='/Uses/Natification' element={<Notificationnn />} />

          <Route path='/User/Notifications' element={<Unreadnotification />} />
          <Route path='/Users/Notificationss' element={<Unreadnotificationn />} />

          <Route path='/Notification' element={<Notification />} />
          <Route path='/Notificationss' element={<Notification />} />


          <Route path='/Profile' element={<Viewprofile />} />
          <Route path='/Module' element={<Modulle />} />
          {/* <Route path='/Modulee' element={<Modulee />} /> */}
          <Route path='/ProModule' element={<FreeLearn />} />
          <Route path='/Learrn' element={<Learnwithoutlogin />} />
          <Route path='/Module' element={<Module />} />
          <Route path='/user/Setting' element={<Setting />} />
          <Route path='/Settingss' element={<Settingss />} />

          <Route path='/Switchaccount' element={<SwitchAccount />} />
          <Route path='/Hiretalent' element={<Hiretalent />} />
          <Route path='/Project/ProjectDetails' element={<Projectdetails />} />
          <Route path='/Message' element={<Checkmessage />} />
          <Route path='/Messagebox' element={<Messagebox />} />

          <Route path='/Professionalsdashboard' element={<Dashboardfreelancer />} />
          <Route path='/Community' element={<Community />} />
          <Route path='/Package' element={<Package />} />
          {/* <Route path ='/Editp'/> */}
          <Route path='/Editproflie' element={<Editprofile />} />
          <Route path='/Switchaccount-next' element={<Moreprof />} />
          <Route path='/Quesans/:questionId' element={<Quesans />} />
          <Route path='/Project' element={<Dashprojectdetails />} />
          <Route path='/Ordermessage' element={<Messagedetails />} />
          <Route path='/UserProject' element={<Userproject />} />
          {/* <Route path='/Chat' element={<Chat />} /> */}
          <Route path='/chatt' element={<Join />} />
          <Route path='/chatts' element={<Chat />} />
          <Route path='/MyAffilate' element={<MyAffiliations />} />
          <Route path='/Affilate' element={<Affiliate />} />
          <Route path='/Switchacc' element={<SwitchAccountt />} />
          {/* Freelancer */}
          <Route path='/ProProjectDetails' element={<FreeProDetails />} />
          <Route path='/Wiraastartup' element={<WiraaStartup />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
