import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListUser from "./pages/ListUser";
import DetailUser from "./pages/DetailUser";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/users" element={<ListUser />} />
        <Route path="/users/{id}" element={<DetailUser />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
