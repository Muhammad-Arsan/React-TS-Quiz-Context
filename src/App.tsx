import React, { SetStateAction, useState } from "react";

import Navbar from "./components/Navbar";
import Start from "./components/Start";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Categories from "./components/Categories";
import Home from "./components/Home";
import { globalContext } from "./context/Context";
import { UserContextProvider } from "./context/categoryContext";

const App = () => {
  return (
    <UserContextProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/categories" element={<Categories />} />
        </Routes>
        <Routes>
          <Route path="/start" element={<Start />} />
        </Routes>
      </Router>
    </UserContextProvider>
  );
};

export default App;
