
// import { CDBSidebar, CDBSidebarContent, CDBSidebarHeader, CDBSidebarMenu, CDBSidebarMenuItem } from 'cdbreact';
// import { useState } from 'react';
// import { NavLink, OverlayTrigger, Popover } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import Wiraalogo from "../../../asset/image/Wiraalogo.png";

// function PhoneViewSidebar() {
//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     return (
//         <>
//             {/* <Button variant="primary" onClick={handleShow}>
//                ...
//             </Button> */}
//            <img onClick={handleShow} style={{width:'40px',height:'40px'}} src={Wiraalogo} alt="" />

//             <Offcanvas show={show} onHide={handleClose}>
//                 <Offcanvas.Header closeButton>
                   
//                     <NavLink exact to="/" activeClassName="active">
//                         <img src={Wiraalogo} alt="LOGO" width={140} style={{ marginTop: "5px" }} />
//                     </NavLink>
//                 </Offcanvas.Header>
//                 <Offcanvas.Body>

//                     <div style={{ display: 'flex', overflow: 'scroll initial' }}>
//                         <CDBSidebar textColor="#fff" backgroundColor="#333">
                            

//                             <CDBSidebarContent className="sidebar-content">
//                                 <CDBSidebarMenu>
//                                     <NavLink exact to="/user/dashboard"
//                                         activeClassName="active"
//                                     >
//                                         <CDBSidebarMenuItem className="text-dark "> <ion-icon name="home-outline"></ion-icon><h4 className='chh'>Home</h4></CDBSidebarMenuItem>
//                                     </NavLink>
//                                     <NavLink exact to="/Order" activeClassName="active" >
//                                         <CDBSidebarMenuItem className="text-dark "> <ion-icon name="paper-plane-outline"></ion-icon><h4 className='chh'>Orders</h4></CDBSidebarMenuItem>
//                                     </NavLink>
             
//                                     <NavLink exact to="/Message" >
//                                         <CDBSidebarMenuItem className="text-dark"><ion-icon name="mail-outline"></ion-icon><h4 className='chh'>Messages</h4></CDBSidebarMenuItem>
//                                     </NavLink>
//                                     <NavLink exact to="/User/Notification" activeClassName="active">
//                                         <CDBSidebarMenuItem className="text-dark"><ion-icon name="notifications-outline"></ion-icon><h4 className='chh'>Notifications</h4></CDBSidebarMenuItem>
//                                     </NavLink>
//                                     <NavLink exact to="/Profile" >
//                                         <CDBSidebarMenuItem className="text-dark"><ion-icon name="person-outline"></ion-icon><h4 className='chh'>Profile</h4></CDBSidebarMenuItem>
//                                     </NavLink>
//                                     <NavLink exact to="/user/Setting" activeClassName="active">
//                                         <CDBSidebarMenuItem className="text-dark"><ion-icon name="settings-outline"></ion-icon><h4 className='chh'>Settings</h4></CDBSidebarMenuItem>
//                                     </NavLink>
//                                     {['top'].map((placement) => (
//                                         <OverlayTrigger
//                                             trigger="click"
//                                             key={placement}
//                                             placement={placement}
//                                             overlay={
//                                                 <Popover id={`popover-positioned-${placement}`}>

//                                                     <Popover.Body style={{ width: "-webkit-fill-available" }}>


//                                                         <div className=' chhh'>
//                                                             <ion-icon name="book-outline"></ion-icon><h4 className='chh'>Learn</h4>
//                                                             <ion-icon name="headset-outline"></ion-icon><h4 className='chh'>Support</h4>
//                                                             <ion-icon name="document-text-outline"></ion-icon><h4 className='chh'>Terms</h4>
//                                                             <ion-icon name="document-text-outline"></ion-icon><h4 className='chh'>Policy</h4>
//                                                             <ion-icon name="reader-outline"></ion-icon><h4 className='chh'>Blogs</h4>
//                                                             <ion-icon name="log-out-outline"></ion-icon><h4 className='chh'>Logout</h4>
//                                                         </div>

//                                                     </Popover.Body>
//                                                 </Popover>
//                                             }
//                                         >
//                                             <NavLink to="#/" onClick={placement} activeClassName="active">
//                                                 <CDBSidebarMenuItem className="text-dark"><ion-icon name="ellipsis-horizontal-circle-outline"></ion-icon><h4 className='chh'>More</h4></CDBSidebarMenuItem>
//                                             </NavLink>
//                                         </OverlayTrigger>
//                                     ))}
//                                 </CDBSidebarMenu>
//                             </CDBSidebarContent>


//                         </CDBSidebar>
//                     </div>
//                 </Offcanvas.Body>
//             </Offcanvas>
//         </>
//     );
// }

// export default PhoneViewSidebar;