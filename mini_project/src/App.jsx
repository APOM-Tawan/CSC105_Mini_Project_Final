import { useState } from "react";
import "./App.css";
import Login from "./page/Login";
import Register from "./page/Register";
import Search from "./page/Search";
import Home from "./page/Home";
import {MusicPage}  from "./page/Music";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search" element={<Search />} />
          <Route path="/music" element={<MusicPage />} />
        </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
