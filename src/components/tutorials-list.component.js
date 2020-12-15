import React from "react";
import Axios from "axios";

export class TutorialsList extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    // Axios.post("https://reqres.in/api/users", {
    //   name: "Nikhil",
    //   role: "developer",
    // }).then((response) => {
    //   //   alert("user is added");
    //   console.log(response.data);
    // });

    Axios.get("http://localhost:8080/api/tutorials").then((response) => {
      let users = response.data;
      this.setState({ users });
    });
  }

  render() {
    return (
      <div>
        {this.state.users.map((u) => {
          return <li>{u.title}</li>;
        })}
      </div>
    );
  }
}

