import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <div class="top-bar">
        <div>
          <div class="row d-flex align-items-center">
            <div class="col-md-6 d-md-block d-none">
              <p><h4>Public News Board</h4></p>
            </div>
            <div class="col-md-6">
              <div class="d-flex justify-content-md-end justify-content-between">
                
                <div class="login">
                  <a
                    href="#"
                    data-toggle="modal"
                    data-target="#login-modal"
                    class="login-btn"
                  >
                    <i class="fa fa-sign-in"></i>
                    <span class="d-none d-md-inline-block">Sign In</span>
                  </a>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </header>
  );
};
