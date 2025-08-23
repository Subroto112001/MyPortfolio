import React from "react";
import HomePage from "./Pages/HomePage";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pageholder from "./Pages/Pageholder";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pageholder />}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
