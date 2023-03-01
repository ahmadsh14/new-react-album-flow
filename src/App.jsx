import "./App.css";
import React from "react";
import Layout from "./layouts/Index";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";

axios.interceptors.response.use(
  (res) => res,
  (err) => {
    if (
      err?.response?.status === 401 &&
      !window.location.href.includes("login")
    ) {
      window.location.href = `/login?returnUrl=${encodeURIComponent(
        window.location.href.replace(window.location.origin, "")
      )}`;
    } else throw err;
  }
);

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
