import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Route, Switch } from "react-router-dom";
import AddUser from "./components/Add_User.component";
import { Login } from "./components/Login";
import { ForgotPassword } from './components/Forgot_Password'
import { NewPassword } from './components/New_Password'
import AddNews from "./components/add-news.component";
import ListNews from "./components/list-news.component";
import ListNewsByReporter from "./components/list-reporter.component";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/adduser"} className="nav-link">
              Add User
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/login"} className="nav-link">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/addnews"} className="nav-link">
              Add news
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/getnewsbycity"} className="nav-link">
              News by City
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/getnewsbyreporter"} className="nav-link">
              News by Reporter
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route path="/adduser" component={AddUser} />
          <Route path="/login" component={Login} />
          <Route path="/forgotpassword" component={ForgotPassword}></Route>
          <Route path="/newpassword" component={NewPassword}></Route>
          <Route path="/addnews" component={AddNews}></Route>
          <Route path="/getnewsbycity" component={ListNews}></Route>
          <Route path="/getnewsbyreporter" component={ListNewsByReporter}></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
