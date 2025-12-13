import React from "react";
import HomePage from "./Pages/HomePage";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pageholder from "./Pages/Pageholder";
import Blog from "./Pages/Blog";

import BackEndReadyTogo from "./BlogPage/BackEndReadyTogo";
import ReacRouter from "./BlogPage/ReacRouter";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pageholder />}>
            <Route index element={<HomePage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/react-router" element={<ReacRouter />} />
            <Route path="/back-end-ready-togo" element={<BackEndReadyTogo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
