import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";
import AdminNavbar from "./Navbar/AdminNavbar";

function Index() {
  return (
    <div className="App">
      <BrowserRouter>
        <AdminNavbar></AdminNavbar>

        <Navigation></Navigation>
      </BrowserRouter>
    </div>
  );
}

export default Index;
