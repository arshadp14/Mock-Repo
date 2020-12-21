import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import "./ReporterRequest.css";
import AdminDashboardService from "../../../services/admin.service";

export const ReporterRequest = (props) => {
  const [reporterData, setRequest] = useState([]);

  useEffect(() => {
    retrievePendingUsers();
  }, []);

  //function to retrieve pending reporter's request
  const retrievePendingUsers = () => {
    AdminDashboardService.getPendingRequests()
      .then((response) => {
        setRequest(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      {/* Reporter's detailed information */}
      {reporterData.map((r) => (
        <Card className="text-center">
          <Card.Body>
            <img src="./images/avatar2.png" alt="Avatar" class="avatar"></img>
            <Card.Title>Reporter Information</Card.Title>
            <Card.Text></Card.Text>
            Name: {r.f_name} {r.l_name}
            <br />
            Email:{r.email}
            <br />
            DOB:{r.dob}
            <br />
            Certificate:{r.certificate}
            <br />
          </Card.Body>

          <Card.Footer className="text-muted">
            <button type="button" class="btn btn-outline-success">
              Accept
            </button>
            <button type="button" class="btn btn-outline-danger">
              Deny
            </button>
          </Card.Footer>
        </Card>
      ))}
    </>
  );
};