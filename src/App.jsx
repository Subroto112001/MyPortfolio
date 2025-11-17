import React from "react";
import HomePage from "./Pages/HomePage";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pageholder from "./Pages/Pageholder";
import Blog from "./Pages/Blog";
import ReacRoter from "./BlogPage/ReacRoter";
import BackEndReadyTogo from "./BlogPage/BackEndReadyTogo";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pageholder />}>
            <Route index element={<HomePage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/react-router" element={<ReacRoter />} />
            <Route path="/back-end-ready-togo" element={<BackEndReadyTogo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
