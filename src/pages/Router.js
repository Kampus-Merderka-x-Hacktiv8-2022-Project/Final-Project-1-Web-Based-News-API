import React from "react";
import { Route, Routes } from "react-router-dom";
import Covid19 from "pages/covid/Covid";
import Indonesia from "pages/indonesia/Indonesia";
import Programming from "pages/programming/Programming";
import Saved from "pages/saved/Saved";
import Search from "pages/search/Search";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Indonesia />} />
      <Route path="/Programming" element={<Programming />} />
      <Route path="/COVID-19" element={<Covid19 />} />
      <Route path="/Search/:searchKeyWord" element={<Search />} />
      <Route path="/Saved" element={<Saved />} />
    </Routes>
  );
}
