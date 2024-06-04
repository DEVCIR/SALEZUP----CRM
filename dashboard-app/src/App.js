import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";
import Page1 from "./pages/Dashboard";
import Page2 from "./pages/Sales_Officer";
import Page3 from "./pages/Sales_Agent";
import Sales_Agent_Dashboard from "./pages/Sales_Agent_Dashboard";
import {
  Ecommerce,
  Calendar,
  //  Employees,
  Stacked,
  Pyramid,
  // Customers,
  Kanban,
  Line,
  Area,
  Bar,
  Pie,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor,
} from "./pages";
import "./App.css";
import { useStateContext } from "./contexts/ContextProvider";
import Page4 from "./pages/Admin_Information";
import Page5 from "./pages/Badge";
import Page6 from "./pages/Spiff_Competition";
import Page7 from "./pages/Celender";
import Page8 from "./pages/Teams";
import Page9 from "./pages/My_Celender";
import Page10 from "./pages/Competition_Overview";
import Main_Dashboard from "./pages/Ecommerce";
import My_Home from "./pages/Home";
import Admin_login from "./pages/Admin_Login";
import Admin_Register from "./pages/Admin_Register";
import Sales_Officer_Login from "./pages/Sales_Officer_Login"
import Sales_Officer_Register from "./pages/Sales_Officer_Register";
import Sales_Agent_Login from "./pages/Sales_Agent_Login";
import Sales_Agent_Register from "./pages/Sales_Agent_Register";
import Only_Dashboard from "./Only_Dashboard";

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
          <Route path="/sales_agent_log" element={<Sales_Agent_Login />} />
          <Route path="/sales_agent_reg" element={<Sales_Agent_Register />} />
          <Route path="/sales_off_log" element={<Sales_Officer_Login />} />
          <Route path="/sales_off_reg" element={<Sales_Officer_Register />} />
          <Route path="/road_to_db" element={<Only_Dashboard />} />
          <Route path="/" element={<My_Home />} />
          <Route path="/sales_agent_dashboard" element={<Sales_Agent_Dashboard />} />
          <Route path="/My_Dashboard" element={<Main_Dashboard />} />
          <Route path="/home" element={<Page1 />} />
          <Route path="/Sales_Officer" element={<Page2 />} />
          <Route path="/Sales_Agent" element={<Page3 />} />
          <Route path="/Badge" element={<Page5 />} />
          <Route path="/Create_Spiff_Competition" element={<Page6 />} />
          <Route path="/Competition_Calender" element={<Page7 />} />
          <Route path="/Teams" element={<Page8 />} />
          <Route path="/My_Calender" element={<Page9 />} />
          <Route path="/Competition_Overview" element={<Page10 />} />
          <Route path="/kanban" element={<Kanban />} />
          <Route path="/Admin_Configuration" element={<Page4 />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/line" element={<Line />} />
          <Route path="/area" element={<Area />} />
          <Route path="/bar" element={<Bar />} />
          <Route path="/pie" element={<Pie />} />
          <Route path="/financial" element={<Financial />} />
          <Route path="/color-mapping" element={<ColorMapping />} />
          <Route path="/pyramid" element={<Pyramid />} />
          <Route path="/stacked" element={<Stacked />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;