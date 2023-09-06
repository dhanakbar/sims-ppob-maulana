import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";
import TopUp from "./pages/topup";
import Prepaid from "./pages/prepaid";
import Transaction from "./pages/transaction";
import Account from "./pages/account";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/topup" element={<TopUp />} />
        <Route path="/prepaid" element={<Prepaid />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
