import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
export default class App extends Component {
  render() {
    return(
     <div>
       <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<News pageSize={11} country="us" category="General"/>}></Route>
      <Route path="/Business"element={<News pageSize={11} country="us" category="Business"/>}></Route>
      <Route path="/Entertainment"element={<News pageSize={11} country="us" category="Entertainment"/>}></Route>
      <Route path="/Health"element={<News pageSize={11} country="us" category="Health"/>}></Route>
      <Route path="/Science"element={<News pageSize={11} country="us" category="Science"/>}></Route>
      <Route path="/Sports"element={<News pageSize={11} country="us" category="Sports"/>}></Route>
      <Route path="/Technology"element={<News pageSize={11} country="us" category="Technology"/>}></Route>
        </Routes>
      </Router>
    </div>
    )
  }
}
