import React, { useState } from 'react';
// import { Card} from "react-bootstrap"
import Wiraalogo from "../../../asset/image/Wiraalogo.png";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';

import { NavLink } from 'react-router-dom';
import { IoBookOutline, IoHome, IoHomeOutline, IoMailOutline, IoNotificationsOutline, IoPersonOutline, IoSettingsOutline } from 'react-icons/io5';

const Sidebar = () => {
  const [isClicked, setIsClicked] = useState(false);
  
  const toggleIcon = () => {
    setIsClicked(!isClicked);
  };


  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial',position:'fixed'}}>

      <CDBSidebar textColor="#fff" backgroundColor="#333">
      <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
        <NavLink exact to="/" activeClassName="activeClicked">
          {/* <img  src={Wiraalogo} alt="" width={120} style={{marginLeft:'50px'}}/> */}
          <img  src={Wiraalogo} alt="" width={120} style={{marginLeft:'50px'}}/>
          </NavLink>
      </CDBSidebarHeader>

       
        <CDBSidebarContent style={{paddingLeft:'20px'}} className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/Professionalsdashboard" activeClassName="activeClicked">
              <CDBSidebarMenuItem  className="text-dark"> {isClicked ? <IoHome fontSize={25} /> : <IoHomeOutline  fontSize={25}/> } <h4 className='chh'>Home</h4></CDBSidebarMenuItem>
            </NavLink>
            
            <NavLink exact to="/UserProject" activeClassName="activeClicked">
              <CDBSidebarMenuItem  className="text-dark"><ion-icon name="briefcase-outline" ></ion-icon><h4 className='chh'>Projects</h4></CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Messagebox" >
              <CDBSidebarMenuItem  className="text-dark"> <IoMailOutline  fontSize={25}/><h4 className='chh'>Messages</h4></CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/User/Notificationss" >
              <CDBSidebarMenuItem className="text-dark"> <IoNotificationsOutline  fontSize={25}/> <h4 className='chh'>Notifications</h4></CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Learns"  activeClassName="activeClicked">
              <CDBSidebarMenuItem className="text-dark"> <IoBookOutline  fontSize={25}/> <h4 className='chh'>Learn</h4></CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Packages"  activeClassName="activeClicked">
              <CDBSidebarMenuItem className="text-dark">  <IoMailOutline  fontSize={25}/>  <h4 className='chh'>Package</h4></CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Editproflie" className='navvlink' activeClassName="activeClicked">
              <CDBSidebarMenuItem  className="text-dark">  <IoPersonOutline  fontSize={25}/> <h4 className='chh'>Profile</h4></CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/Setting"  activeClassName="activeClicked">
              <CDBSidebarMenuItem className="text-dark"><IoSettingsOutline  fontSize={25}/>  <h4 className='chh'>Settings</h4></CDBSidebarMenuItem>
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