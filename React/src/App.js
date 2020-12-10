import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Route, Switch } from "react-router-dom";
import AddUser from "./components/Add_User.component";
import { Login } from "./components/Login";
import { ForgotPassword } from './components/Forgot_Password'
import { NewPassword } from './components/New_Password'

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
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route path="/adduser" component={AddUser} />
          <Route path="/login" component={Login} />
          <Route path="/forgotpassword" component={ForgotPassword}></Route>
          <Route path="/newpassword" component={NewPassword}></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
