import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const App = React.lazy(() => import("./App"));

const container = document.getElementById("root");
createRoot(container).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
