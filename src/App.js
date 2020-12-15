import logo from "./logo.svg";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Route, Switch } from "react-router-dom";
import { TutorialsList } from "./components/tutorials-list.component";
import AddTutorial from "./components/add-tutorial.component";
import Tutorial from "./components/tutorial.component";
import AddUser from "./components/add-user.component";
import AddNews from "./components/add-news.component";
import { NewsList } from "./components/news-list.component";
import ListNews from "./components/list-news.component";
import { ListNewsByReporter } from "./components/list-reporter.component";
import NewsAdd from "./components/addnews";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <a href="/tutorials" className="navbar-brand">
          Public News Board
        </a>
        <div className="navbar-nav mr-auto">
          {/* <li className="nav-item">
            <Link to={"/tutorials"} className="nav-link">
              Tutorials
            </Link>
          </li> */}
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/adduser"} className="nav-link">
              Add User
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/listnews"} className="nav-link">
              List News
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/addnews"} className="nav-link">
              Add News
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/news/city"} className="nav-link">
              News by city
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/news/reporter"} className="nav-link">
              My News
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/addn"} className="nav-link">
              Add news using hooks
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          {/* <Route exact path={["/", "/tutorials"]} component={TutorialsList} /> */}
          <Route exact path="/add" component={AddTutorial} />
          <Route path="/tutorials/:id" component={Tutorial} />
          <Route path="/adduser" component={AddUser} />
          <Route path="/addnews" component={AddNews} />
          <Route path="/listnews" component={NewsList} />
          <Route exact path="/news/city" component={ListNews} />
          <Route exact path="/news/reporter" component={ListNewsByReporter} />
          <Route exact path="/addn" component={NewsAdd} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
