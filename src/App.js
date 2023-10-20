import React from "react";
import "./App.css";
import { Navbar } from "./components/navbar";
import { Home } from "./components/home";
import { Friends } from "./components/friends";
import { Groups } from "./components/groups";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div className="App bg-light">
      <Router>
  
        <Navbar />
        <Routes>

          <Route path = "/" element = {<Home />} />
          <Route path = "/friends" element = {<Friends />} />
          <Route path = "/groups" element = {<Groups />} />

        </Routes>

      </Router>
    </div>
  );
}

export default App;
