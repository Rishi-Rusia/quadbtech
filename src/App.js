import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Summary from "./pages/Summary";
import { Routes, Route } from "react-router-dom";
import Book from "./pages/Book";

function App() {
  return (
    <div className="App">
      <div className="header-div">
        <Navbar></Navbar>
      </div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/summary/:id" element={<Summary></Summary>}></Route>
        <Route path="/book/:id" element={<Book></Book>}></Route>
      </Routes>
    </div>
  );
}

export default App;
