import React, { useState, useEffect } from "react";
import DataService from "../services/service";
import { Link } from "react-router-dom";
import "./list-reporter.css";
import { Button, Card } from "react-bootstrap";

export const ListNews = () => {
  const [news, setNews] = useState([]);
  const [currentNews, setCurrentNews] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => {
    retrieveNews();
  }, []);

  const retrieveNews = () => {
    DataService.findAllNewsByCity()
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
        {news &&
          news.map((newss, index) => (
            <Card
              style={{ width: "15rem" }}
              className="cards"
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
      </div>
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
                <Button variant="primary">Share News</Button>
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

export default ListNews;
