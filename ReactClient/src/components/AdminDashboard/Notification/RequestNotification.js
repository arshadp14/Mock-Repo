import React, { useState, useEffect } from "react";
import AdminDashboardService from "../../../services/admin.service";
import "./RequestNotification.css";

export const RequestNotification = () => {
  const [users, setRequest] = useState([]);

  //Update  requests status of users
  const updateStatus = (user_id, status, mail) => {
    console.log(user_id);
    var data = JSON.stringify({
      userid: user_id,
      status: status,
      email: mail,
    });
    AdminDashboardService.updateStatus(data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
    alert("Pending request is " + status);
  };

  useEffect(() => {
    retrievePendingUsers();
  }, []);

  //function to retrieve pending requests of users
  const retrievePendingUsers = () => {
    AdminDashboardService.getPendingRequests()
      .then((response) => {
        setRequest(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div class="container">
      <div class="row">
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <div class="navbar-header">
              <ul class="nav navbar-nav">
                <li class="dropdown">
                  <a
                    href="#"
                    class="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Notification
                  </a>
                  <ul class="dropdown-menu notify-drop">
                    <div class="notify-drop-title">
                      <div class="row">
                        <div class="col-md-6 col-sm-6 col-xs-6">
                          Pending Requests*
                        </div>
                        <div class="col-md-6 col-sm-6 col-xs-6 text-right">
                          <a
                            href=""
                            class="rIcon allRead"
                            data-tooltip="tooltip"
                            data-placement="bottom"
                            title="tümü okundu."
                          >
                            <i class="fa fa-dot-circle-o"></i>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div class="drop-content">
                      {users.map((p) => (
                        <li>
                          <a href="" class="rIcon">
                            <i class="fa fa-dot-circle-o"></i>
                          </a>
                          {/* <div class="col-md-3 col-sm-3 col-xs-3">
                            <div class="notify-img">
                              <img src="../images/avatar2.png" alt=""></img>
                            </div>
                          </div> */}
                          <div class="col-md-9 col-sm-9 col-xs-9">
                            <b>
                              {" "}
                              {p.f_name} {p.l_name}
                            </b>
                            <br />
                            Email : {p.email}
                            <br />
                            Date of birth : {p.dob}
                            <br />
                            Certificate :{p.certificate}
                            <br />
                            City: {p.c_name}
                            <br />
                            <button
                              type="button"
                              class="btn btn-outline-info mr-3"
                              onClick={() =>
                                updateStatus(p.user_id, "approved", p.email)
                              }
                            >
                              Accept
                            </button>
                            <button
                              type="button"
                              class="btn btn-outline-danger"
                              onClick={() =>
                                updateStatus(p.user_id, "denied", p.email)
                              }
                            >
                              Deny
                            </button>
                          </div>
                        </li>
                      ))}
                    </div>
                    <div class="notify-drop-footer text-center">
                      <a href=""></a>
                    </div>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
