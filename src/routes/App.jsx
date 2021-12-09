import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../styles/global.css";
import { Layout } from "../containers/Layout";
import { Login } from "../Pages/Login";
import { SendEmail } from "../Pages/SendEmail";
import { Home } from "../Pages/Home";
import { NotFound } from "../Pages/NotFound";
import { PasswordRecovery } from "../Pages/PasswordRecovery";
import { NewPassword } from "../Pages/NewPassword";
import { MyAccount } from "../Pages/MyAccount";
import { CreateAccount } from "../Pages/CreateAccount";
import { Checkout } from "../Pages/Checkout";
import { Orders } from "../Pages/Orders";

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/password-recovery" element={<PasswordRecovery />} />
            <Route path="/send-email" element={<SendEmail />} />
            <Route path="/new-password" element={<NewPassword />} />
            <Route path="/account" element={<MyAccount />} />
            <Route path="/signup" element={<CreateAccount />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}
