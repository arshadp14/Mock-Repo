import React from "react";
import "./AdminNavbar.css";
import Navbar from "react-bootstrap/Navbar";
import "./AdminNavbar.css";
import { Link, Redirect } from "react-router-dom";





const AdminNavbar = () => {
  return (
    <div className="admin-navbar">
      <Navbar bg="dark" variant="dark">
        <img src="../images/adminAvatar.jpg" alt="logo" class="logo"></img>
        <Navbar.Brand href="#home">Admin-Dashboard</Navbar.Brand>
        {/* <RequestNotification></RequestNotification> */}
        <nav class="navbar  navbar-expand-sm ml-auto">
          <ul class="navbar-nav">
            <li class="nav-item">
             
            </li>
           
            <li class="nav-item ">
              <Link className="link" to="/requestNotifications">
                Notifications
              </Link>
            </li>
            <li class="nav-item ">
            <Link className="link" to={`/home`}>
               Home
              </Link>
            </li>
            <li class="nav-item">
            <Link className="link" to={`/logout`}>
              
              <Redirect to="/home"></Redirect>
               Logout
              </Link>
            </li>
          </ul>
        </nav>

        {/* <Nav className="ml-auto" >

          <RequestNotification id="id1"></RequestNotification>*/}
        {/* 
          <Nav.Link><Link to={`/requestNotifications`}>
          Notifications
          </Link></Nav.Link>   */}

        {/* <Nav.Link  href="#home">Home</Nav.Link>
          <Nav.Link className="ml-auto" href="#pricing">Logout</Nav.Link>
        </Nav>  */}
      </Navbar>

    </div>
  );
};
export default AdminNavbar;