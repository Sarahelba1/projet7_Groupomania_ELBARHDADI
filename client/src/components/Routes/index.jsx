import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../pages/Home";
import Profil from "../../pages/Profil";
import Rules from "../../pages/Rules";

import Navbar from "../Navbar";

const index = () => {
  return (
    <div>

      <Navbar />
      <Routes>
        <Route path="/profil" element={<Profil />} />
        <Route path="/" element={<Home />} />
        <Route path="/rules" element={<Rules />} />

      </Routes>

    </div>
  );
};

export default index;
