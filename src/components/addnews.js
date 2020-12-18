import React, { useState } from "react";
import DataService from "../services/service";

const NewsAdd = () => {
  const initialNewsState = {
    id: null,
    c_id: null,
    u_id: null,
    cat_id: null,
    title: "",
    content: "",
    image: "",
    extract: "",
    read: null,

    published: false,
  };
  const [news, setNews] = useState(initialNewsState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNews({ ...news, [name]: value });
  };

  const saveNews = () => {
    var data = {
      c_id: 1,
      u_id: 1,
      cat_id: 1,
      title: news.title,
      content: news.description,
      image: news.image,
      extract: news.extract,
      read: 1,
      published: false,
    };

    DataService.createNews(data)
      .then((response) => {
        setNews({
          id: response.data.id,
          c_id: 1,
          u_id: 1,
          cat_id: 1,
          title: response.data.title,
          content: response.data.content,
          image: response.data.image,
          extract: response.data.extract,
          read: 1,
          published: response.data.published,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const newNews = () => {
    setNews(initialNewsState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newNews}>
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
              value={news.title}
              onChange={handleInputChange}
              name="title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="title">Content</label>
            <textarea
              className="form-control"
              rows="10"
              maxlength="450"
              id="content"
              required
              value={news.content}
              onChange={handleInputChange}
              name="content"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Image</label>
            <input
              type="file"
              className="form-control"
              id="image"
              required
              value={news.image}
              onChange={handleInputChange}
              name="image"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Extract</label>
            <input
              type="text"
              className="form-control"
              id="extract"
              required
              value={news.extract}
              onChange={handleInputChange}
              name="extract"
            />
          </div>

          <button onClick={saveNews} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default NewsAdd;
