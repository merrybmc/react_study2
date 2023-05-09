import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../About";
import Home from "../components/home/Home";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/:id" element={<About />} />
    </Routes>
  );
}
