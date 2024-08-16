import React from "react";
import ReactDOM from "react-dom/client";

//CSS
import "./index.css";
import "./css/About.css";
import "./css/Contact.css";
import "./css/Home.css";
import "./css/NavFooter.css";
import "./css/NotFound.css";
import "./css/Products.css";
import "./css/Root.css";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
