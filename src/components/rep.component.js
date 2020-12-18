import React from "react";
import NewsAdd from "./addnews";
import { ListNewsByReporter } from "./list-reporter.component";
import { ListNews } from "./list-news.component";
import { Link, Route } from "react-router-dom";
import "./reporter.css";
import Axios from "axios";
import { Card, Container } from "react-bootstrap";

export class ReporterComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    Axios.get("http://localhost:8080/api/users").then((response) => {
      let users = response.data;
      this.setState({ users });
    });
  }

  //   return (
  //     <div>
  //       {this.state.users.map((u) => {
  //         return <li>{u.title}</li>;
  //       })}
  //     </div>
  //   );

  render() {
    return (
      <Container>
        {this.state.users.map((u) => {
          return (
            <div class="container1 emp-profile">
              <form className="profile" method="post">
                <div class="row">
                  <div class="col-md-4">
                    <div class="profile-img">
                      <img alt="" src="../images/user.png" />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="profile-head">
                      <h5>
                        {u.f_name} {u.l_name}
                      </h5>
                      <h6>{u.role}</h6>

                      <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item">
                          <a
                            class="nav-link active"
                            id="home-tab"
                            data-toggle="tab"
                            href="#"
                            role="tab"
                            aria-controls="home"
                            aria-selected="true"
                          >
                            About
                          </a>
                        </li>

                        <li class="nav-item">
                          <Link to={"/news/reporter"} className="nav-link">
                            Timeline
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-4">
                    <div class="profile-work">
                      <p>WORK LINK</p>
                      <Link to={"/news/city"} className="nav-link">
                        News near my location
                      </Link>

                      <Link to={"/news/reporter"} className="nav-link">
                        My News
                      </Link>

                      <Link to={"/addn"} className="nav-link">
                        Add news
                      </Link>
                    </div>
                  </div>
                  <div class="col-md-8">
                    <div class="tab-content profile-tab" id="myTabContent">
                      <div
                        class="tab-pane fade show active"
                        id="home"
                        role="tabpanel"
                        aria-labelledby="home-tab"
                      >
                        <div class="row">
                          <div class="col-md-6">
                            <label>Name</label>
                          </div>
                          <div class="col-md-6">
                            <p>
                              {u.f_name} {u.l_name}
                            </p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <label>Email</label>
                          </div>
                          <div class="col-md-6">
                            <p>{u.email}</p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <label>DOB</label>
                          </div>
                          <div class="col-md-6">
                            <p>{u.dob}</p>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <label>Profession</label>
                          </div>
                          <div class="col-md-6">
                            <p>{u.role}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          );
        })}
      </Container>
    );
  }
}
