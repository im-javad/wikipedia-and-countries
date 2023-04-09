import React from "react";
import ReactDomClient from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";

const root = ReactDomClient.createRoot(document.getElementById("root"));

root.render(<App />);
