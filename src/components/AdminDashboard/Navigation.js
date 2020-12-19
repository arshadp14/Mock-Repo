import React from 'react';
import { ReporterRequest } from './Reporter/ReporterRequest';
import { Link, Route } from 'react-router-dom';
import Switch from 'react-bootstrap/esm/Switch';
import { RequestNotification } from './Notification/RequestNotification';
import { ReportNews } from "./Reporter/ReportNews";
import { ReportedNewsList } from './Reporter/ReportedNewsList';






class Navigation extends React.Component{
    render(){
        return(
            <div> 
                {/* <Link to="/requestNotifications">Notifications</Link><br/>
                <Link to="/reporterinformation">Info</Link><br/> */}
                {/* <Link to="/reportNews">reportNews</Link><br/> */}
                <Link to="/newslistreport">List</Link><br/>
               

           <Switch>
           <Route path="/reportNews/:news_id" component={ReportNews}></Route>
           <Route path="/reporterinformation" component={RequestNotification}></Route>
           <Route path="/reporterinformation" component={ReporterRequest}></Route>
           <Route path="/newslistreport" component={ReportedNewsList}></Route>
           <Route path="/requestNotifications" component={RequestNotification}></Route>
           </Switch>
          
            </div>
        );
    }
}
export default Navigation;