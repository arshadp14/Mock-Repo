import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AdminDashboardService from "../../../services/admin.service";
import './ReportedNewsList.css'

export const ReportedNewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    retrieveReportedNews();
  }, []);

  //to retieve all reported news by users
  const retrieveReportedNews = () => {
    AdminDashboardService.getIssueCount()
      .then((response) => {
        setNews(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="myTable">
      <table class="table table-hover">
        <thead>
          <th scope="col">News Title</th>
          <th scope="col">Extract</th>
          <th scope="col">Count</th>
        </thead>
        <tbody>
          {news.map((n) => (
            <tr>
              <td>{n.title}</td>
              <td> {n.extract}</td>
              <td>
                {" "}
                <Link to={`/reportNews/${n.news_id}`}>
                  <span class="badge badge-primary badge-pill">{n.count}</span>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
