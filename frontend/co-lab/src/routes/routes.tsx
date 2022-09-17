import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Heading } from "../components/heading/heading";

export function StaticRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Heading />} />
      </Routes>
    </BrowserRouter>
  );
}
