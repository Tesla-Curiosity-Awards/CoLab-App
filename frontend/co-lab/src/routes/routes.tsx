import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Index } from "../pages/index";

export function StaticRoute() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
    </Routes>
  </BrowserRouter>
  );
}
