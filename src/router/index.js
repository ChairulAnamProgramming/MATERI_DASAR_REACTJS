import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { Government, Home, Infographic, Letter, News } from './../pages';

function Router() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/government" element={<Government />} />
        <Route path="/infographic" element={<Infographic />} />
        <Route path="/news" element={<News />} />
        <Route path="/letter" element={<Letter />} />
      </Routes>
  );
}

export default Router;