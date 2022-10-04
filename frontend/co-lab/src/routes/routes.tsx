import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SetupForm, Index, LinkInfo } from "../pages";

export function StaticRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/setup" element={<SetupForm />} />
        <Route path="/session-info" element={<LinkInfo />} />
      </Routes>
    </BrowserRouter>
  );
}
