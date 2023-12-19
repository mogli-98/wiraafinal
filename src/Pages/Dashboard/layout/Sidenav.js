import React ,{useState} from 'react';
import Wiraalogo from "../../../asset/image/Wiraalogo.png";
// import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
// import Popover from 'react-bootstrap/Popover';
import { IoBook, IoHomeOutline, IoMail, IoNotifications, IoPerson, IoSettingsSharp } from 'react-icons/io5';
import { IoPaperPlaneOutline } from 'react-icons/io5';
import { IoMailOutline } from 'react-icons/io5';
import { IoNotificationsOutline } from 'react-icons/io5';
import { IoPersonOutline } from 'react-icons/io5';
import { IoBookOutline } from 'react-icons/io5';
import { IoSettingsOutline } from 'react-icons/io5';
import { IoHome } from 'react-icons/io5';
import { IoPaperPlane } from 'react-icons/io5';
import "../../../asset/css/dashboard.css";

import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink,  } from 'react-router-dom';

const Sidebar = ({activekey}) => {

  const [isClicked, setIsClicked] = useState(false);
  
  // const toggleIcon = () => {
  //   setIsClicked(!isClicked);
  // };
  console.log(localStorage.getItem("AffiliateId"), 'bvbhvggvgvg')
  return (
    <>
      <div style={{  display: 'flex', height: '100vh', overflow: 'scroll initial', position: 'fixed' }} className='d-none d-sm-block'>
        <CDBSidebar textColor="#fff" backgroundColor="#333">
          <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>

            <NavLink exact to="/user/dashboard" activeClassName="active">
              <img style={{marginLeft:'50px'}} src={Wiraalogo} alt="" width={120} />
            </NavLink>
            
          </CDBSidebarHeader>

          <CDBSidebarContent className="sidebar-content" style={{paddingLeft:'20px'}}>
            <CDBSidebarMenu>
              <NavLink exact to="/user/dashboard"
                activeClassName="active"               
              >
                <CDBSidebarMenuItem className="text-dark"> {activekey === "home" ? <IoHome fontSize={25} fill='#008080'  /> : <IoHomeOutline  fontSize={25}/> } <p style={{fontSize:'25px'}}  className={`chh ${activekey === "home" ? "active" : ""}`} >Home</p></CDBSidebarMenuItem>
              </NavLink>

              <NavLink exact to="/Order" 
              
               >
                <CDBSidebarMenuItem className="text-dark ">  {activekey === "order" ? <IoPaperPlane fontSize={25} fill='#008080'  /> : <IoPaperPlaneOutline  fontSize={25}/> }<p style={{fontSize:'25px'}} className={`chh ${activekey === "order" ? "active" : ""}`}>Orders</p></CDBSidebarMenuItem>
              </NavLink>
              
              <NavLink exact to="/Message" >
                <CDBSidebarMenuItem className="text-dark">  {activekey === "message" ? <IoMail fontSize={25} fill='#008080'  /> : <IoMailOutline  fontSize={25}/> }  <p style={{fontSize:'25px'}} className={`chh ${activekey === "message" ? "active" : ""}`}>Messages</p> </CDBSidebarMenuItem>
              </NavLink>


              <NavLink exact to="/User/Notification" activeClassName="active">
                <CDBSidebarMenuItem className="text-dark"> {activekey === "notification" ? <IoNotifications fontSize={25} fill='#008080'  /> : <IoNotificationsOutline  fontSize={25}/> } <p style={{fontSize:'25px'}} className={`chh ${activekey === "notification" ? "active" : ""}`}>Notifications</p></CDBSidebarMenuItem>
              </NavLink>


              <NavLink exact to="/Profile" >
                <CDBSidebarMenuItem className="text-dark"> {activekey === "profile" ? <IoPerson fontSize={25} fill='#008080'  /> : <IoPersonOutline  fontSize={25}/> } <p style={{fontSize:'25px'}} className={`chh ${activekey === "profile" ? "active" : ""}`}>Profile</p></CDBSidebarMenuItem>
              </NavLink>


              <NavLink exact to="/ProModule" activeClassName="activeClicked">
                <CDBSidebarMenuItem className="text-dark">  {activekey === "modules" ? <IoBook fontSize={25} fill='#008080'  /> : <IoBookOutline  fontSize={25}/> } <p style={{fontSize:'25px'}} className={`chh ${activekey === "modules" ? "active" : ""}`} >Learn</p></CDBSidebarMenuItem>
              </NavLink>


             {localStorage.getItem("AffiliateId") == null ?   (<>
      datttt  
          </>):(<><NavLink exact to="/Myaffilate" >
                <CDBSidebarMenuItem className="text-dark">  {activekey === "Affilate" ? <IoHome fontSize={25} fill='#008080'  /> : <IoHomeOutline  fontSize={25}/> } <p style={{fontSize:'25px'}} className={`chh ${activekey === "package" ? "active" : ""}`}  >Affilate</p></CDBSidebarMenuItem>
              </NavLink>  
             </>)
            } 

              


              <NavLink exact to="/user/Setting" activeClassName="active">
                <CDBSidebarMenuItem className="text-dark">  {activekey === "settings" ? <IoSettingsSharp fontSize={25} fill='#008080'  /> : <IoSettingsOutline fontSize={25}/> } <p style={{fontSize:'25px'}} className={`chh ${activekey === "settings" ? "active" : ""}`} >Settings</p></CDBSidebarMenuItem>
              </NavLink>


            </CDBSidebarMenu>
          </CDBSidebarContent>


        </CDBSidebar>
      </div>
      <div>

      </div>
      </>
  );
};

export default Sidebar;



