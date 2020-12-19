import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.min.css';
import { Link, Route, Switch } from "react-router-dom";
import Main from "./components/AllNews/main";
import SearchByCategories from "./components/AllNews/SearchByCategories";
import Tech from "./components/AllNews/tech";
import AllNews from "./components/AllNews/AllNews";
import FullPage from "./components/AllNews/Layout/FullPage"

import ListNews from "./components/ReporterNews/ReporterCityNews";
import { ListNewsByReporter } from "./components/ReporterNews/ReporterNews";
import NewsAdd from "./components/AddNews/AddNews";
import { Login } from "./components/Login/Login";
import { NewPassword } from "./components/Password/New_Password";
import { ForgotPassword } from "./components/Password/Forgot_Password";
import { ReporterComponent } from "./components/ReporterDashboard/ReporterDashboard";

import { Provider } from "react-redux";
import Store from "./store/store";
import SearchByCity from "./components/AllNews/SearchByCity";
import { Header } from "./components/Header/Header";
import {Footer}  from "./components/Footer/Footer"
import Index from "./components/AdminDashboard/Index";
import RegisterUser from "./components/Register/RegisterUser";

function App() {
  return (
    <Provider store={Store}>
      <div className="App">
        <Header></Header>
        <nav>
          <ul>{/* <li><Link to="/">ReactReduxHooks</Link></li> */}</ul>
          <ul>
            <li>
              <Link to="/AllNews">Home</Link>
            </li>

            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Sign up</Link>
            </li>
            <li>
              <Link to="/reporter">Reporter</Link>
            </li>
            
          </ul>
        </nav>

        <main>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/SearchByCity" component={SearchByCity} />
            <Route exact path="/tech" component={Tech} />
            <Route exact path="/AllNews" component={AllNews} />
            <Route
              exact
              path="/SearchByCategories"
              component={SearchByCategories}
            />
            <Route exact path="/FullPage/:news_id" component={FullPage}/>
            <Route path="/login" component={Login} />
            <Route path="/reporter" component={ReporterComponent}></Route>
            <Route exact path="/news/city" component={ListNews} />
            <Route exact path="/news/reporter" component={ListNewsByReporter} />
            <Route exact path="/addn" component={NewsAdd} />
            <Route path="/login" component={Login} />
            <Route path="/forgotpassword" component={ForgotPassword}></Route>
            <Route path="/newpassword" component={NewPassword}></Route>
            <Route path="/admin" component={Index}></Route>
            <Route path="/register" component={RegisterUser}></Route>
          </Switch>
        </main>
        <Footer></Footer>
      </div>
      
    </Provider>
  );
}

export default App;
