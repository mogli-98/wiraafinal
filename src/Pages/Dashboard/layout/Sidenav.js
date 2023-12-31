import React, { useState } from "react";
import Wiraalogo from "../../../asset/image/Wiraalogo.png";
// import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
// import Popover from 'react-bootstrap/Popover';
import {
  IoBook,
  IoHomeOutline,
  IoMail,
  IoNotifications,
  IoPerson,
  IoSettingsSharp,
} from "react-icons/io5";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { IoBookOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { IoPaperPlane } from "react-icons/io5";
import "../../../asset/css/dashboard.css";

import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";

const Sidebar = ({ activekey }) => {
  const [isClicked, setIsClicked] = useState(false);

  // const toggleIcon = () => {
  //   setIsClicked(!isClicked);
  // };

  return (
    <>
      <div
        style={{
          display: "flex",
          height: "100vh",
          overflow: "scroll initial",
          position: "fixed",
        }}
        className="d-none d-sm-block"
      >
        <CDBSidebar textColor="#fff" backgroundColor="#333">
          <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
            <NavLink exact to="/user/dashboard" activeClassName="active">
              <img
                style={{ marginLeft: "50px" }}
                src={Wiraalogo}
                alt=""
                width={120}
              />
            </NavLink>
          </CDBSidebarHeader>

          <CDBSidebarContent
            className="sidebar-content"
            style={{ paddingLeft: "20px" }}
          >
            <CDBSidebarMenu>
              <NavLink exact to="/user/dashboard" activeClassName="active">
                <CDBSidebarMenuItem className="text-dark">
                  {" "}
                  {activekey === "home" ? (
                    <IoHome fontSize={25} fill="#008080" />
                  ) : (
                    <IoHomeOutline fontSize={25} />
                  )}{" "}
                  <p
                    style={{ fontSize: "25px" }}
                    className={`chh ${activekey === "home" ? "active" : ""}`}
                  >
                    Home
                  </p>
                </CDBSidebarMenuItem>
              </NavLink>

              <NavLink exact to="/Order">
                <CDBSidebarMenuItem className="text-dark ">
                  {" "}
                  {activekey === "order" ? (
                    <IoPaperPlane fontSize={25} fill="#008080" />
                  ) : (
                    <IoPaperPlaneOutline fontSize={25} />
                  )}
                  <p
                    style={{ fontSize: "25px" }}
                    className={`chh ${activekey === "order" ? "active" : ""}`}
                  >
                    Orders
                  </p>
                </CDBSidebarMenuItem>
              </NavLink>

              <NavLink exact to="/Message">
                <CDBSidebarMenuItem className="text-dark">
                  {" "}
                  {activekey === "message" ? (
                    <IoMail fontSize={25} fill="#008080" />
                  ) : (
                    <IoMailOutline fontSize={25} />
                  )}{" "}
                  <p
                    style={{ fontSize: "25px" }}
                    className={`chh ${activekey === "message" ? "active" : ""}`}
                  >
                    Messages
                  </p>{" "}
                </CDBSidebarMenuItem>
              </NavLink>

              <NavLink exact to="/User/Notification" activeClassName="active">
                <CDBSidebarMenuItem className="text-dark">
                  {" "}
                  {activekey === "notification" ? (
                    <IoNotifications fontSize={25} fill="#008080" />
                  ) : (
                    <IoNotificationsOutline fontSize={25} />
                  )}{" "}
                  <p
                    style={{ fontSize: "25px" }}
                    className={`chh ${
                      activekey === "notification" ? "active" : ""
                    }`}
                  >
                    Notifications
                  </p>
                </CDBSidebarMenuItem>
              </NavLink>

              <NavLink exact to="/Profile">
                <CDBSidebarMenuItem className="text-dark">
                  {" "}
                  {activekey === "profile" ? (
                    <IoPerson fontSize={25} fill="#008080" />
                  ) : (
                    <IoPersonOutline fontSize={25} />
                  )}{" "}
                  <p
                    style={{ fontSize: "25px" }}
                    className={`chh ${activekey === "profile" ? "active" : ""}`}
                  >
                    Profile
                  </p>
                </CDBSidebarMenuItem>
              </NavLink>

              <NavLink exact to="/ProModule" activeClassName="activeClicked">
                <CDBSidebarMenuItem className="text-dark">
                  {" "}
                  {activekey === "modules" ? (
                    <IoBook fontSize={25} fill="#008080" />
                  ) : (
                    <IoBookOutline fontSize={25} />
                  )}{" "}
                  <p
                    style={{ fontSize: "25px" }}
                    className={`chh ${activekey === "modules" ? "active" : ""}`}
                  >
                    Learn
                  </p>
                </CDBSidebarMenuItem>
              </NavLink>

              {localStorage.getItem("AffiliateId") === null ? (
                <>datttt</>
              ) : (
                <>
                  <NavLink exact to="/Myaffilate">
                    <CDBSidebarMenuItem className="text-dark">
                      {" "}
                      {activekey === "Affilate" ? (
                        <IoHome fontSize={25} fill="#008080" />
                      ) : (
                        <IoHomeOutline fontSize={25} />
                      )}{" "}
                      <p
                        style={{ fontSize: "25px" }}
                        className={`chh ${
                          activekey === "package" ? "active" : ""
                        }`}
                      >
                        Affilate
                      </p>
                    </CDBSidebarMenuItem>
                  </NavLink>
                </>
              )}

              {/* <NavLink exact to="/Myaffilate" >
                <CDBSidebarMenuItem className="text-dark">  {activekey === "Affilate" ? <IoHome fontSize={25} fill='#008080'  /> : <IoHomeOutline  fontSize={25}/> } <p style={{fontSize:'25px'}} className={`chh ${activekey === "package" ? "active" : ""}`}  >Affilate</p></CDBSidebarMenuItem>
              </NavLink> */}

              <NavLink exact to="/user/Setting" activeClassName="active">
                <CDBSidebarMenuItem className="text-dark">
                  {" "}
                  {activekey === "settings" ? (
                    <IoSettingsSharp fontSize={25} fill="#008080" />
                  ) : (
                    <IoSettingsOutline fontSize={25} />
                  )}{" "}
                  <p
                    style={{ fontSize: "25px" }}
                    className={`chh ${
                      activekey === "settings" ? "active" : ""
                    }`}
                  >
                    Settings
                  </p>
                </CDBSidebarMenuItem>
              </NavLink>
            </CDBSidebarMenu>
          </CDBSidebarContent>
        </CDBSidebar>
      </div>
      <div></div>
    </>
  );
};

export default Sidebar;

// import React, { useState } from 'react';
// import Wiraalogo from "../../../asset/image/Wiraalogo.png";
// // import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
// // import Popover from 'react-bootstrap/Popover';
// // import { IoHomeOutline } from 'react-icons/io5';
// // import { IoPaperPlaneOutline } from 'react-icons/io5';
// // import { IoMailOutline } from 'react-icons/io5';
// // import { IoNotificationsOutline } from 'react-icons/io5';
// // import { IoPersonOutline } from 'react-icons/io5';
// // import { IoBookOutline } from 'react-icons/io5';
// // import { IoSettingsOutline } from 'react-icons/io5';
// // import { IoHome } from 'react-icons/io5';
// // import { IoPaperPlane } from 'react-icons/io5';
// import "../../../asset/css/dashboard.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHome, faUser, faCog, faFile, faHeart, faEnvelope, faChartBar} from "@fortawesome/free-solid-svg-icons";

// import {
//   CDBSidebar,
//   CDBSidebarContent,
//   CDBSidebarHeader,
//   CDBSidebarMenu,
//   // CDBSidebarMenuItem,
// } from 'cdbreact';
// import { Link } from 'react-router-dom';

// const Sidebar = () => {

//   // const [isClicked, setIsClicked] = useState(false);
//   const [selectedItem, setSelectedItem] = useState(null);

//   const menuItems = [
//     { id: 1, label: "Order", icon: faHome, path: "/Order" },
//     { id: 2, label: "Message", icon: faUser, path: "/Message" },
//     { id: 3, label: "Notifications", icon: faCog, path: '/User/Notification' },
//     { id: 4, label: "Profile", icon: faFile, path: '/Profile' },
//     { id: 5, label: "Learn", icon: faHeart, path: '/Module' },
//     { id: 6, label: "Package", icon: faEnvelope, path: '/Package' },
//     { id: 7, label: "Settings", icon: faChartBar, path: '/user/Setting' },
//     // { id: 8, label: "     ", icon: faBell, path: '/' },
//     // { id: 9, label: "     ", icon: faSearch, path: '/' },
//     // { id: 10, label: "    ", icon: faComments, path: '/' },
//   ];

//   // const toggleIcon = () => {
//   //   setIsClicked(!isClicked);
//   // };
//   const handleItemClick = (itemId) => {
//     setSelectedItem(itemId);
//   };

//   return (
//     <>
//       <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial', position: 'fixed' }} className='d-none d-sm-block'>
//         <CDBSidebar textColor="#fff" backgroundColor="#333">

//           <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>

//             <Link exact to="/user/dashboard" activeClassName="active">
//               <img style={{ marginLeft: '50px' }} src={Wiraalogo} alt="" width={120} />
//             </Link>

//           </CDBSidebarHeader>

//           <CDBSidebarContent className="sidebar-content" style={{ paddingLeft: '20px' }}>
//             <CDBSidebarMenu>

//               {/*
//               <NavLink exact to="/user/dashboard"
//                 activeClassName="active"

//               >
//                 <CDBSidebarMenuItem className="text-dark "> {isClicked ? <IoHome fontSize={25} /> : <IoHomeOutline fontSize={25} />} <h4 className='chh'>Home</h4></CDBSidebarMenuItem>
//               </NavLink>

//               <NavLink exact to="/Order"

//               >
//                 <CDBSidebarMenuItem className="text-dark "> {isClicked ? <IoPaperPlane fontSize={25} /> : <IoPaperPlaneOutline fontSize={25} />}<h4 className='chh'>Orders</h4></CDBSidebarMenuItem>
//               </NavLink>

//               <NavLink exact to="/Message" >
//                 <CDBSidebarMenuItem className="text-dark"> <IoMailOutline fontSize={25} /> <h4 className='chh'>Messages</h4></CDBSidebarMenuItem>
//               </NavLink>
//               <NavLink exact to="/User/Notification" activeClassName="active">
//                 <CDBSidebarMenuItem className="text-dark"><IoNotificationsOutline fontSize={25} /> <h4 className='chh'>Notifications</h4></CDBSidebarMenuItem>
//               </NavLink>
//               <NavLink exact to="/Profile" >
//                 <CDBSidebarMenuItem className="text-dark"> <IoPersonOutline fontSize={25} /> <h4 className='chh'>Profile</h4></CDBSidebarMenuItem>
//               </NavLink>
//               <NavLink exact to="/Module" activeClassName="activeClicked">
//                 <CDBSidebarMenuItem className="text-dark"> <IoBookOutline fontSize={25} /> <h4 className='chh'>Learn</h4></CDBSidebarMenuItem>
//               </NavLink>
//               <NavLink exact to="/Package" >
//                 <CDBSidebarMenuItem className="text-dark"> <IoMailOutline fontSize={25} /> <h4 className='chh'>Package</h4></CDBSidebarMenuItem>
//               </NavLink>
//               <NavLink exact to="/user/Setting" activeClassName="active">
//                 <CDBSidebarMenuItem className="text-dark"> <IoSettingsOutline fontSize={25} /> <h4 className='chh'>Settings</h4></CDBSidebarMenuItem>
//               </NavLink> */}

//               {menuItems.map((item) => (
//                 <li key={item.id} className="nav-item">
//                   {/* <a
//                     className={`nav-link ${selectedItem === item.id ? "active" : ""}`}
//                     onClick={() => handleItemClick(item.id)}
//                   >
//                     <FontAwesomeIcon style={{ padding: '5px 10px', fontSize: '25px' }} icon={item.icon} className={selectedItem === item.id ? "active-icon" : ""} />
//                     <span style={{ fontSize: '20px', color: 'black', fontWeight: 600 }}>{item.label}</span>
//                   </a> */}

//                   <Link
//                     to={item.path}
//                     className={`nav-link ${selectedItem === item.id ? "active" : ""}`}
//                     onClick={() => handleItemClick(item.id)}
//                   >

//                     <FontAwesomeIcon style={{ padding: '5px 10px', fontSize: '25px' }}  icon={item.icon}  className={selectedItem === item.id ? "active-icon" : ""} />
//                     <span  style={{ fontSize: '20px', color: 'black', fontWeight: 600 }}>{item.label}</span>
//                   </Link>

//                 </li>
//               ))}
//             </CDBSidebarMenu>

//           </CDBSidebarContent>

//         </CDBSidebar>

//       </div>
//       <div>

//       </div>
//     </>
//   );
// };

// export default Sidebar;
