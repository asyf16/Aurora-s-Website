import "./App.css";
import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import Works from "./components/pages/Works";
import Sound from "./components/Sound";

function App() {
  return (
    <>
        <Router>
          <Nav />
          <Sound />
          <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/portfolio" exact element={<Portfolio />}></Route>
            <Route path="/contact" exact element={<Contact />}></Route>
            <Route path="/works" exact element={<Works />}></Route>
          </Routes>
        </Router>
    </>
  );
}

export default App;
