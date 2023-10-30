import React, { useState } from 'react';
// import { Card} from "react-bootstrap"
import Wiraalogo from "../../../asset/image/Wiraalogo.png";
// import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
// import Popover from 'react-bootstrap/Popover';

import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';

import { Link, NavLink } from 'react-router-dom';
import { IoBook, IoBookOutline, IoBriefcase, IoBriefcaseOutline, IoHome, IoHomeOutline, IoMail, IoMailOutline, IoNotifications, IoNotificationsOutline, IoPerson, IoPersonOutline, IoSettingsOutline, IoSettingsSharp } from 'react-icons/io5';

const Sidebar = ({ activekey }) => {
  const [isClicked, setIsClicked] = useState(false);

  const toggleIcon = () => {
    setIsClicked(!isClicked);
  };


  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial', position: 'fixed' }}>

      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
          <NavLink exact to="" activeClassName="activeClicked">
            <Link to="/Professionalsdashboard">
              <img src={Wiraalogo} alt="" width={120} style={{ marginLeft: '50px' }} />
            </Link>



            {/* <img  src={Wiraalogo} alt="" width={120} style={{marginLeft:'50px'}}/> */}
          </NavLink>
        </CDBSidebarHeader>


        <CDBSidebarContent style={{ paddingLeft: '20px' }} className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/Professionalsdashboard" activeClassName="activeClicked">
              <CDBSidebarMenuItem className="text-dark"> {activekey === "home" ? <IoHome fontSize={25} fill='#008080' /> : <IoHomeOutline fontSize={25} />} <p style={{ fontSize: '25px' }} className={`chh ${activekey === "home" ? "active" : ""}`} >Home</p></CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/UserProject" activeClassName="activeClicked">
              <CDBSidebarMenuItem className="text-dark"> {activekey === "projects" ? <IoBriefcase fontSize={25} fill='#008080' /> : <IoBriefcaseOutline fontSize={25} />} <p style={{ fontSize: '25px' }} className={`chh ${activekey === "projects" ? "active" : ""}`}>Projects</p></CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Messagebox" activeClassName="activeClicked">
              <CDBSidebarMenuItem className="text-dark"> {activekey === "message" ? <IoMail fontSize={25} fill='#008080' /> : <IoMailOutline fontSize={25} />} <p style={{ fontSize: '25px' }} className={`chh ${activekey === "message" ? "active" : ""}`}  >Messages</p></CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Notifications" activeClassName="activeClicked">
              <CDBSidebarMenuItem className="text-dark"> {activekey === "notification" ? <IoNotifications fontSize={25} fill='#008080' /> : <IoNotificationsOutline fontSize={25} />} <p style={{ fontSize: '25px' }} className={`chh ${activekey === "notification" ? "active" : ""}`}  >Notifications</p></CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/ProModule" activeClassName="activeClicked">
              <CDBSidebarMenuItem className="text-dark"> {activekey === "learn" ? <IoBook fontSize={25} fill='#008080' /> : <IoBookOutline fontSize={25} />} <p style={{ fontSize: '25px' }} className={`chh ${activekey === "learn" ? "active" : ""}`}  >Learn</p></CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Package" activeClassName="activeClicked">
              <CDBSidebarMenuItem className="text-dark"> {activekey === "package" ? <IoBriefcase fontSize={25} fill='#008080' /> : <IoBriefcaseOutline fontSize={25} />}  <p style={{ fontSize: '25px' }} className={`chh ${activekey === "package" ? "active" : ""}`}  >Package</p></CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Editproflie" className='navvlink' activeClassName="activeClicked">
              <CDBSidebarMenuItem className="text-dark">  {activekey === "profile" ? <IoPerson fontSize={25} fill='#008080' /> : <IoPersonOutline fontSize={25} />}<p style={{ fontSize: '25px' }} className={`chh ${activekey === "profile" ? "active" : ""}`}  >Profile</p></CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Settingss" activeClassName="activeClicked">
              <CDBSidebarMenuItem className="text-dark">{activekey === "settings" ? <IoSettingsSharp fontSize={25} fill='#008080' /> : <IoSettingsOutline fontSize={25} />}  <p style={{ fontSize: '25px' }} className={`chh ${activekey === "settings" ? "active" : ""}`}  >Settings</p></CDBSidebarMenuItem>
            </NavLink>
            {/* {['top'].map((placement) => (
        <OverlayTrigger
          trigger="click"
          key={placement}
          placement={placement}
          overlay={
            <Popover id={`popover-positioned-${placement}`}>
              
              <Popover.Body style={{width:"-webkit-fill-available"}}>
               
               
               <div className=' chhh'>
               <ion-icon name="book-outline"></ion-icon><h4 className='chh'>Learn</h4>
               <ion-icon name="headset-outline"></ion-icon><h4 className='chh'>Support</h4>
               <ion-icon name="document-text-outline"></ion-icon><h4 className='chh'>Terms</h4>
               <ion-icon name="document-text-outline"></ion-icon><h4 className='chh'>Policy</h4>
               <ion-icon name="reader-outline"></ion-icon><h4 className='chh'>Blogs</h4>
               <ion-icon name="log-out-outline"></ion-icon><h4 className='chh'>Logout</h4>
               </div>
              
              </Popover.Body>
            </Popover>
          }
        >
            <NavLink   to="#/"  activeClassName="activeClicked">
              <CDBSidebarMenuItem  className="text-dark"><ion-icon name="ellipsis-horizontal-circle-outline"></ion-icon><h4 className='chh'>More</h4></CDBSidebarMenuItem>
            </NavLink>
            </OverlayTrigger>
      ))} */}
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;