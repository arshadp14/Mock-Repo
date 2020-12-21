import React from "react";
import "./AdminNavbar.css";
import Navbar from "react-bootstrap/Navbar";
import "./AdminNavbar.css";
import { Link, Redirect, useHistory } from "react-router-dom";

const AdminNavbar = () => {
  const history = useHistory();
  const Logout = () => {
    sessionStorage.clear();
    history.push("/AllNews");
    // return <Redirect to="/login"></Redirect>;
  };

  return (
    <div className="admin-navbar">
      <Navbar bg="dark" variant="dark">
        <img src="../images/adminAvatar.jpg" alt="logo" class="logo"></img>
        <Navbar.Brand href="#home">Admin-Dashboard</Navbar.Brand>

        <nav class="navbar  navbar-expand-sm ml-auto">
          <ul class="navbar-nav">
            <li class="nav-item"></li>

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
              <Link className="link" onClick={Logout}>
                Logout
                {/* <button type="button" class="btn btn-dark" onClick={Logout}>
                  Logout
                </button> */}
              </Link>
            </li>
          </ul>
        </nav>
      </Navbar>
    </div>
  );
};
export default AdminNavbar;
