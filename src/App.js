import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Articles from "./components/Articles";
import HomePage from "./components/HomePage";
import SingleArticle from "./components/SingleArticle"


function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
      </Routes>
    </div>
  );
}

export default App;
