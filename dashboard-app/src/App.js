import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";

import Admin_Register from '../src/pages/Admin_Register'
import Admin_login from '../src/pages/Admin_Login'
import Admin_Dashboard from '../src/pages/Admin_Dashboard'
import My_Home from '../src/pages/Home'


// import {
//   Ecommerce,
//   Calendar,
//   //  Employees,
//   Stacked,
//   Pyramid,
//   // Customers,
//   Kanban,
//   Line,
//   Area,
//   Bar,
//   Pie,
//   Financial,
//   ColorPicker,
//   ColorMapping,
//   Editor,
// } from "../src/pages";
import "./App.css";
import { useStateContext } from "./contexts/ContextProvider";


const App = () => {
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/admin_reg" element={<Admin_Register />} />
          <Route path="/admin_login" element={<Admin_login />} />
          
          <Route path="/" element={<My_Home />} />

          <Route path="/Admin_Dashboard" element={<Admin_Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;