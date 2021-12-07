import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../styles/global.css";
import Layout from "../containers/Layout";
import Login from "../containers/Login";
import RecoveryPass from "../containers/RecoveryPass";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/RecoveryPass" element={<RecoveryPass />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}
