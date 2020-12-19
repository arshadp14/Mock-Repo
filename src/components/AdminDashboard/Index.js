
import "bootstrap/dist/css/bootstrap.min.css";
//import { RequestNotification } from "./components/RequestNotification";

import { BrowserRouter } from "react-router-dom";
import LineGraph from "./Charts/LineGraph";
import BarGraph from "./Charts/BarGraph";
// import MostReadChart from "./Charts/MostReadChart";
import MostReadNewsBarChart from "./Charts/MostReadNewsBarChart";

//import { ReportedNewsList } from "./components/ReportedNewsList";
//import { ReporterRequest } from "./components/ReporterRequest";
import Navigation from "./Navigation"
import AdminNavbar from "./Navbar/AdminNavbar"



function Index() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <AdminNavbar></AdminNavbar> 
      
      
        {/* <ReporterRequest></ReporterRequest> */}
        {/* <RequestNotification></RequestNotification> */}
        <Navigation></Navigation> 
        {/* <ReportedNewsList></ReportedNewsList>  */}
        {/* <div className="chart">
        <LineChart></LineChart>
        <BarChart></BarChart>
        </div> */}
      
          <LineGraph></LineGraph> 
         <BarGraph></BarGraph>
          
          {/* <MostReadChart></MostReadChart> */}
         <MostReadNewsBarChart></MostReadNewsBarChart>  
       

      </BrowserRouter>
    </div>
  );
}

export default Index;
