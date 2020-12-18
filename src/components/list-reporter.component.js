import React, { useState, useEffect } from "react";
import DataService from "../services/service";
import { Link } from "react-router-dom";
import "./list-reporter.css";
import { Button, Card } from "react-bootstrap";

export const ListNewsByReporter = () => {
  const [news, setNews] = useState([]);
  const [currentNews, setCurrentNews] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  //   const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    retrieveNews();
  }, []);

  const retrieveNews = () => {
    DataService.findAllNewsbyReporter()
      .then((response) => {
        setNews(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const setActiveNews = (news, index) => {
    setCurrentNews(news);
    setCurrentIndex(index);
  };

  return (
    <div>
      <div className="main">
        {/* <ul className="list-group"> */}

        {/* <select className="form-control" onChange={onChangeHandler} required>
        <option defaultChecked>--Select Category--</option>
        {categories.map(({ categoryId, categoryName }) => (
          <option key={categoryId} value={categoryId}>
            {categoryName}
          </option>
        ))}
      </select> */}

        {news &&
          news.map((newss, index) => (
            <Card
              style={{ width: "15rem" }}
              className="cards"
              // className={
              //   "list-group-item " + (index === currentIndex ? "active" : "")
              // }
              onClick={() => setActiveNews(newss, index)}
              key={index}
            >
              <Card.Img
                className="image1"
                variant="top"
                src={`../images/${newss.image}`}
              />
              <Card.Text> {newss.title}</Card.Text>
            </Card>
          ))}
        {/* </ul> */}
      </div>

      {/* <select className="form-control" required>
          <option defaultChecked>--Select Category--</option>

          {news &&
            news.map((newss, index) => (
              <option
                // className={
                //   "list-group-item " + (index === currentIndex ? "active" : "")
                // }
                onClick={() => setActiveNews(newss, index)}
                key={index}
              >
                {newss.title}
              </option>
            ))}
        </select> */}

      <div className="news">
        {currentNews ? (
          <div>
            <Card style={{ width: "25rem" }}>
              <Card.Img variant="top" src={`../images/${currentNews.image}`} />
              <Card.Body>
                <Card.Title>{currentNews.title}</Card.Title>
                <Card.Text>
                  <p>
                    <strong>{currentNews.extract}</strong>
                  </p>
                </Card.Text>
                <Card.Text>{currentNews.content}</Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a News...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListNewsByReporter;
