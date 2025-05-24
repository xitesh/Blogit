import React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path={"/login"} element={<Login />}></Route>
        <Route path={"/register"} element={<Register />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
