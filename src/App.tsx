import React, { useState } from "react";

import Navbar from "./components/Navbar";
import Start from "./components/Start";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Categories from "./components/Categories";
import Home from "./components/Home";
import { globalContext } from "./context/Context";

type globalContext = {};

const App = () => {
  const [amount, setAmount] = useState<any>(10);
  const [category, setCategory] = useState<string>("");
  const [difficulty, setDifficulty] = useState<string>("");

  return (
    <globalContext.Provider
      value={{ amount, setAmount }}
      // value={{
      //   amount: [amount, setAmount],
      //   category: [category, setCategory],
      //   difficulty: [difficulty, setDifficulty],
      // }}
      // value={[
      //   amount,
      //   setAmount,
      //   category,
      //   setCategory,
      //   difficulty,
      //   setDifficulty,
      // ]}
    >
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
    </globalContext.Provider>
  );
};

export default App;
