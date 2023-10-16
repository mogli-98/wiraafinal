
import React ,{useState}from 'react';
import Wiraalogo from "../../../asset/image/Wiraalogo.png";
// import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
// import Popover from 'react-bootstrap/Popover';
import { IoHomeOutline } from 'react-icons/io5';
import { IoPaperPlaneOutline } from 'react-icons/io5';
import { IoMailOutline } from 'react-icons/io5';
import { IoNotificationsOutline } from 'react-icons/io5';
import { IoPersonOutline } from 'react-icons/io5';
import { IoBookOutline } from 'react-icons/io5';
import { IoSettingsOutline } from 'react-icons/io5';
import { IoHome } from 'react-icons/io5';
import { IoPaperPlane } from 'react-icons/io5';
import "../../../asset/css/dashboard.css"
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink,  } from 'react-router-dom';

const Sidebar = () => {

  const [isClicked, setIsClicked] = useState(false);
  
  const toggleIcon = () => {
    setIsClicked(!isClicked);
  };
  
  return (
    <>
      <div style={{  display: 'flex', height: '100vh', overflow: 'scroll initial', position: 'fixed' }} className='d-none d-sm-block'>
        <CDBSidebar textColor="#fff" backgroundColor="#333">
          <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
            <NavLink exact to="/" activeClassName="active">
              <img style={{marginLeft:'50px'}} src={Wiraalogo} alt="" width={120} />
            </NavLink>
          </CDBSidebarHeader>

          <CDBSidebarContent className="sidebar-content" style={{paddingLeft:'20px'}}>
            <CDBSidebarMenu>
              <NavLink exact to="/user/dashboard"
                activeClassName="active"
                onClick={toggleIcon}
              >
                <CDBSidebarMenuItem className="text-dark "> {isClicked ? <IoHome fontSize={25} /> : <IoHomeOutline  fontSize={25}/> } <h4 className='chh'>Home</h4></CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/Order"  onClick={toggleIcon} >
                <CDBSidebarMenuItem className="text-dark "> {isClicked ? <IoPaperPlane fontSize={25} /> : <IoPaperPlaneOutline  fontSize={25}/> }<h4 className='chh'>Orders</h4></CDBSidebarMenuItem>
              </NavLink>
              {/* <Link exact to="/user/Project"  >
              <CDBSidebarMenuItem  className="text-dark"><ion-icon name="briefcase-outline" ></ion-icon><h4 className='chh'>Projects</h4></CDBSidebarMenuItem>
            </Link> */}
              <NavLink exact to="/Message" >
                <CDBSidebarMenuItem className="text-dark"> <IoMailOutline  fontSize={25}/> <h4 className='chh'>Messages</h4></CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/User/Notification" activeClassName="active">
                <CDBSidebarMenuItem className="text-dark"><IoNotificationsOutline  fontSize={25}/> <h4 className='chh'>Notifications</h4></CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/Profile" >
                <CDBSidebarMenuItem className="text-dark"> <IoPersonOutline  fontSize={25}/> <h4 className='chh'>Profile</h4></CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/Module" activeClassName="activeClicked">
                <CDBSidebarMenuItem className="text-dark"> <IoBookOutline  fontSize={25}/> <h4 className='chh'>Learn</h4></CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/Package" >
                <CDBSidebarMenuItem className="text-dark"> <IoMailOutline  fontSize={25}/> <h4 className='chh'>Package</h4></CDBSidebarMenuItem>
              </NavLink>
              <NavLink exact to="/user/Setting" activeClassName="active">
                <CDBSidebarMenuItem className="text-dark"> <IoSettingsOutline  fontSize={25}/> <h4 className='chh'>Settings</h4></CDBSidebarMenuItem>
              </NavLink>
            </CDBSidebarMenu>
          </CDBSidebarContent>


        </CDBSidebar>
      </div>
      <div>

      </div></>
  );
};

export default Sidebar;