import React, { Component } from "react";
import NewsDataService from "../services/News.service";

export default class AddUser extends Component {
  constructor(props) {
    super(props);
    this.onChangefname = this.onChangefname.bind(this);
    this.onChangelname = this.onChangelname.bind(this);
    this.onChangeemail = this.onChangeemail.bind(this);
    this.onChangepassword = this.onChangepassword.bind(this);
    this.onChangeage = this.onChangeage.bind(this);
    this.onChangeaddress = this.onChangeaddress.bind(this);

    this.saveUser = this.saveUser.bind(this);
    this.newUser = this.newUser.bind(this);

    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",
      age: "",
      address: "",

      published: false,

      submitted: false,
    };
  }

  onChangefname(e) {
    this.setState({
      fname: e.target.value,
    });
  }

  onChangelname(e) {
    this.setState({
      lname: e.target.value,
    });
  }

  onChangeemail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangepassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onChangeage(e) {
    this.setState({
      age: e.target.value,
    });
  }

  onChangeaddress(e) {
    this.setState({
      address: e.target.value,
    });
  }

  saveUser() {
    let data = {
      fname: this.state.fname,
      lname: this.state.lname,
      email: this.state.email,
      password: this.state.password,
      age: this.state.age,
      address: this.state.address,

      published: false,
    };

    NewsDataService.createUser(data)
      .then(() => {
        console.log("Created new item successfully!");
        this.setState({
          submitted: true,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newUser() {
    this.setState({
      fname: "",
      lname: "",
      email: "",
      password: "",
      age: "",
      address: "",

      published: false,

      submitted: false,
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newTutorial}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="fname">First Name</label>
              <input
                type="text"
                className="form-control"
                id="fname"
                required
                value={this.state.fname}
                onChange={this.onChangefname}
                name="fname"
              />
            </div>

            <div className="form-group">
              <label htmlFor="lname">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lname"
                required
                value={this.state.lname}
                onChange={this.onChangelname}
                name="lname"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                required
                value={this.state.email}
                onChange={this.onChangeemail}
                name="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                className="form-control"
                id="password"
                required
                value={this.state.password}
                onChange={this.onChangepassword}
                name="password"
              />
            </div>

            <div className="form-group">
              <label htmlFor="age">age</label>
              <input
                type="text"
                className="form-control"
                id="age"
                required
                value={this.state.age}
                onChange={this.onChangeage}
                name="age"
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                required
                value={this.state.address}
                onChange={this.onChangeaddress}
                name="address"
              />
            </div>

            <button onClick={this.saveUser} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
