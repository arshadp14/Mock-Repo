import React from "react";
import Axios from "axios";
import { Card, Button } from "react-bootstrap";

export class NewsList extends React.Component {
  constructor() {
    super();
    this.state = {
      news: [],
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

    Axios.get("http://localhost:8080/api/news").then((response) => {
      let news = response.data;

      this.setState({ news });
      console.log("jhjh" + JSON.stringify(this.state.news[0]));
    });
  }

  render() {
    return (
      <div>
        {this.state.news.map((n) => {
          return (
            <div>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>{n.title}</Card.Title>
                  <Card.Text>{n.content}</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>

              <li>{n.content}</li>
            </div>
          );
        })}
      </div>
    );
  }
}
