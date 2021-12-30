import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddSportsman from "./components/AddSportsman";
import Sportsman from "./components/Sportsman";
import SportsmansList from "./components/SportsmansList";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/sportsmans"} className="nav-link">
              Sportsmans
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={["/", "/sportsmans"]} component={SportsmansList} />
          <Route exact path="/add" component={AddSportsman} />
          <Route path="/sportsmans/:id" component={Sportsman} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
