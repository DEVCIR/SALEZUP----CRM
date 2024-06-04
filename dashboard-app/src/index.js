import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { ContextProvider } from "./contexts/ContextProvider";
import { SidebarContextProvider } from "./contexts/SidebarContext";

ReactDOM.render(
  <React.StrictMode>
    <SidebarContextProvider>
      <ContextProvider>
        <App />
      </ContextProvider>
    </SidebarContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
