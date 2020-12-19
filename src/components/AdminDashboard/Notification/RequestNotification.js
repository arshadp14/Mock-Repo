import React, { useState, useEffect } from "react";
import AdminDashboardService from "../../../services/admin.service";
import './RequestNotification.css';
export const RequestNotification = () => {

  const [users, setRequest] = useState([]);
 // const [statusvariable, setStatus] = useState("");


  const updateStatus=(user_id,status,mail)=> {
    //alert("in update status  " + status);
   console.log(user_id)
    var data=JSON.stringify({
    userid:user_id,
      status:status,
      email:mail
    })
    AdminDashboardService.updateStatus(data)
      .then((response) => {
        // setStatus(response.data);
        console.log(response.data);

      })
      .catch((e) => {
        console.log(e);
      });
      
  }





  useEffect(() => {
    retrievePendingUsers();
    updateStatus();
  }, []);



  const retrievePendingUsers = () => {

    AdminDashboardService.getPendingRequests()
      .then((response) => {
        setRequest(response.data);
        // console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });


  }

  //const [flag,setFlag]=useState(false); 





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
                    Notification (<b>2</b>)
                  </a>
                  <ul class="dropdown-menu notify-drop">
                    <div class="notify-drop-title">
                      <div class="row">
                        <div class="col-md-6 col-sm-6 col-xs-6">
                          Pending Requests(<b>2</b>)
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
                          <div class="col-md-3 col-sm-3 col-xs-3">
                            <div class="notify-img">
                              <img src="../images/avatar2.png" alt=""></img>
                            </div>
                          </div>
                          <div class="col-md-9 col-sm-9 col-xs-9">
                            <b> {p.f_name} {p.l_name}</b>

                            <br />
                          Email : {p.email}
                            <br />
                          Date of birth : {p.dob}
                            <br />
                          Certificate :{p.certificate}
                            <br />
                          City: {p.c_name}


                            <br />
                            <button type="button" class="btn btn-outline-info mr-3" onClick={() => updateStatus(p.user_id,"approved",p.email)}>Accept</button>
                            <button type="button" class="btn btn-outline-danger" onClick={() => updateStatus(p.user_id,"denied",p.email)}>Deny</button>
                            <a href="" class="rIcon">
                              <i class="fa fa-dot-circle-o"></i>
                            </a>

                            {/* <p class="time"><Link to={{pathname:`/reporterinformation`, aboutProps:{p}}}>More Information</Link></p> */}

                          </div>

                        </li>



                      ))}

                      {/* 
                      <li>
                        <div class="col-md-3 col-sm-3 col-xs-3">
                        <div class="notify-img">
                            <img src="../images/avatar3.jpg" alt=""></img>
                          </div>
                        </div>
                        <div class="col-md-9 col-sm-9 col-xs-9 pd-l0">
                          <a href="">Ahmet</a> yorumladı.{" "}
                          <a href="">Çicek bahçeleri...</a>{" "}
                          <a href="" class="rIcon">
                            <i class="fa fa-dot-circle-o"></i>
                          </a>
                          <p>Lorem ipsum sit dolor amet consilium.</p>
                          <p class="time">1 Saat önce</p>
                        </div>
                      </li> */}
                      {/* <li>
                        <div class="col-md-3 col-sm-3 col-xs-3">
                          <div class="notify-img">
                            <img src="http://placehold.it/45x45" alt=""></img>
                          </div>
                        </div>
                        <div class="col-md-9 col-sm-9 col-xs-9 pd-l0">
                          <a href="">Ahmet</a> yorumladı.{" "}
                          <a href="">Çicek bahçeleri...</a>{" "}
                          <a href="" class="rIcon">
                            <i class="fa fa-dot-circle-o"></i>
                          </a>
                          <p>Lorem ipsum sit dolor amet consilium.</p>
                          <p class="time">29 Dakika önce</p>
                        </div>
                      </li>
                      <li>
                        <div class="col-md-3 col-sm-3 col-xs-3">
                          <div class="notify-img">
                            <img src="http://placehold.it/45x45" alt=""></img>
                          </div>
                        </div>
                        <div class="col-md-9 col-sm-9 col-xs-9 pd-l0">
                          <a href="">Ahmet</a> yorumladı.{" "}
                          <a href="">Çicek bahçeleri...</a>{" "}
                          <a href="" class="rIcon">
                            <i class="fa fa-dot-circle-o"></i>
                          </a>
                          <p>Lorem ipsum sit dolor amet consilium.</p>
                          <p class="time">Dün 13:18</p>
                        </div>
                      </li>
                      <li>
                        <div class="col-md-3 col-sm-3 col-xs-3">
                          <div class="notify-img">
                            <img src="http://placehold.it/45x45" alt=""></img>
                          </div>
                        </div>
                        <div class="col-md-9 col-sm-9 col-xs-9 pd-l0">
                          <a href="">Ahmet</a> yorumladı.{" "}
                          <a href="">Çicek bahçeleri...</a>{" "}
                          <a href="" class="rIcon">
                            <i class="fa fa-dot-circle-o"></i>
                          </a>
                          <p>Lorem ipsum sit dolor amet consilium.</p>
                          <p class="time">2 Hafta önce</p>
                        </div>
                      </li> */}
                    </div>
                    <div class="notify-drop-footer text-center">
                      <a href="">
                        {/* <i class="fa fa-eye"></i> */}
                      </a>
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
