import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {API} from "./components/API"

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/api" element={<API />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);

