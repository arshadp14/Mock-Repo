import React, { Component } from "react";
import DataService from "../services/service";
import Axios from "axios";

export default class AddNews extends Component {
  constructor(props) {
    super(props);
    this.onChangetitle = this.onChangetitle.bind(this);
    this.onChangecontent = this.onChangecontent.bind(this);
    this.onChangeimage = this.onChangeimage.bind(this);
    this.onChangeextract = this.onChangeextract.bind(this);

    this.saveNews = this.saveNews.bind(this);
    this.newNews = this.newNews.bind(this);

    this.state = {
      c_id: 1,
      u_id: 1,
      cat_id: 1,
      title: "",
      content: "",
      image: "",
      extract: "",
      read: 1,
      published: false,

      submitted: false,
      cat: [],
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

    Axios.get("http://localhost:8080/api/categories").then((response) => {
      let cat = response.data;
      this.setState({ cat });
    });
  }

  onChangetitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  onChangecontent(e) {
    this.setState({
      content: e.target.value,
    });
  }

  onChangeimage(e) {
    this.setState({
      image: e.target.value,
    });
  }

  onChangeextract(e) {
    this.setState({
      extract: e.target.value,
    });
  }

  saveNews() {
    let data = {
      c_id: 1,
      u_id: 1,
      cat_id: 1,
      title: this.state.title,
      content: this.state.content,
      image: this.state.image,
      extract: this.state.extract,
      read: 1,
      published: false,
    };

    DataService.createNews(data)
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
  // Axios.get("http://localhost:8080/api/categories").then((response) => {
  //   let categories = response.data;
  //   this.setState({ categories });
  //   console.log(categories);
  // });

  newNews() {
    this.setState({
      c_id: 1,
      u_id: 1,
      cat_id: 1,
      title: "",
      content: "",
      image: "",
      extract: "",

      published: false,

      submitted: false,
    });
  }

  render() {
    // {this.state.users.map((u) => {
    //   return <li>{u.title}</li>;
    // })}

    return (
      <div className="form-group">
        <label htmlFor="category">Select Category</label>
        <select name="category" value={this.state.cat.cat_name}>
          {this.state.cat.map((e) => {
            return (
              <option key={e.cat_id} value={e.cat_id}>
                {e.cat_name}
              </option>
            );
          })}
        </select>

        <div className="submit-form">
          {this.state.submitted ? (
            <div>
              <h4>News submitted successfully!</h4>
              <button className="btn btn-success" onClick={this.newTutorial}>
                Add
              </button>
            </div>
          ) : (
            <div>
              <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  required
                  value={this.state.title}
                  onChange={this.onChangetitle}
                  name="title"
                />
              </div>

              {/* <div>
              {this.state.categories.map((u) => {
                return <li>{u.cat_name}</li>;
              })}
            </div> */}

              <div className="form-group">
                <label htmlFor="content">Content</label>
                <textarea
                  rows="10"
                  maxlength="450"
                  type="textarea"
                  className="form-control"
                  id="content"
                  required
                  value={this.state.content}
                  onChange={this.onChangecontent}
                  name="content"
                />
              </div>

              <div className="form-group">
                <label htmlFor="image">Image</label>
                <input
                  type="file"
                  className="form-control"
                  id="image"
                  required
                  value={this.state.image}
                  onChange={this.onChangeimage}
                  name="image"
                />
              </div>

              <div className="form-group">
                <label htmlFor="extract">extract</label>
                <input
                  type="text"
                  className="form-control"
                  id="extract"
                  required
                  value={this.state.extract}
                  onChange={this.onChangeextract}
                  name="extract"
                />
              </div>

              <button onClick={this.saveNews} className="btn btn-success">
                Submit
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}
