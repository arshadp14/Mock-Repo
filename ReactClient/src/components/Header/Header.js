import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div class="top-bar">
        <div>
          <div class="row d-flex align-items-center">
            <div class="col-md-6">
              <p>
                <h4>Public News Board</h4>
              </p>
            </div>
            <div class="col-md-6 ">
              <div class="d-flex justify-content-md-end justify-content-between">
                {/* Signup */}
                <div class="signup d-block d-xs-inline-block">
                  <Link to="/register" class="signup-btn">
                    {" "}
                    <i class="fa fa-user"></i>Sign up
                  </Link>
                  {/* <a
                    href="#"
                    data-toggle="modal"
                    data-target="#login-modal"
                    class="signup-btn"
                  >
                    <span class="d-block d-xs-inline-block">
                      <i class="fa fa-user"></i>Signup
                    </span>
                  </a> */}
                </div>
                {/* Login */}
                <div class="login d-block d-xs-inline-block">
                  <Link to="/login" class="login-btn">
                    {" "}
                    <i class="fa fa-sign-in"></i>Login
                  </Link>
                  {/* <a
                    href="#"
                    data-toggle="modal"
                    data-target="#login-modal"
                    class="login-btn"
                  >
                    <span class="d-block d-xs-inline-block">
                      <i class="fa fa-sign-in"></i>Login
                    </span>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
