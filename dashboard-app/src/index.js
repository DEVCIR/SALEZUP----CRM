import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";
import { AdminContextProvider } from "./contexts/AdminContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <AdminContextProvider>
      <ContextProvider>
        <App />
      </ContextProvider>
    </AdminContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
