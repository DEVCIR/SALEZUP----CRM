
import React, { useState, useEffect } from "react";
import { FaPlusCircle, FaMoon, FaSun } from 'react-icons/fa';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import bcrypt from "bcryptjs";
import { useNavigate } from 'react-router-dom';
import CryptoJS from 'crypto-js';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';



import { useStateContext } from "../contexts/ContextProvider";

import { FiSettings } from "react-icons/fi";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Footer, Sidebar, ThemeSettings } from "../components";


export default function Page7() {


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




  const location = useLocation();
  const { state } = location;
  const [competitionData, setCompetitionData] = useState([]);


  useEffect(() => {
    fetch('https://crmapi.devcir.co/api/spiff_competitions')
      .then(response => response.json())
      .then(data => setCompetitionData(data))
      .catch(error => console.error('Error fetching competition data:', error));
  }, []);

  return (


    <div className={currentMode === "Dark" ? "" : ""}>
      <div className="relative flex dark:bg-main-dark-bg">
        {/* <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
          <TooltipComponent content="Settings" position="Top">
            <button
              type="button"
              onClick={() => setThemeSettings(true)}
              style={{ background: currentColor, borderRadius: "50%" }}
              className="p-3 text-3xl text-w hover:drop-shadow-xl hover:bg-light-gray"
            >
              <FiSettings />
            </button>
          </TooltipComponent>
        </div> */}
        {activeMenu ? (
          <div className="fixed bg-white w-72 sidebar dark:bg-secondary-dark-bg ">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 dark:bg-[#1a1a1a6b]">
            <Sidebar />
          </div>
        )}
        <div
          className={
            activeMenu
              ? "dark:bg-[#1a1a1a6b] bg-main-bg min-h-screen md:ml-72 w-full  "
              : "bg-main-bg dark:bg-[#1a1a1a6b] w-full min-h-screen flex-2 "
          }
        >
          <div className="fixed w-full md:static bg-[#072D20] dark:bg-[#072D20] navbar ">
            <Navbar />
          </div>
          <div>
            {themeSettings && <ThemeSettings />}



            <div>


              <table className="w-full mt-16 border border-solid table-auto">
                <thead>
                  <tr className="text-white bg-[#305b4c] dark:bg-[#072D20]">

                    <th className="px-4 py-4 border-b-2 border-r-2  border-[#072D20] dark:border-white">Type</th>
                    <th className="px-4 py-4 border-b-2 border-r-2  border-[#072D20] dark:border-white">Prize</th>
                    <th className="px-4 py-4 border-b-2 border-r-2  border-[#072D20] dark:border-white">Prize Value</th>
                    <th className="px-4 py-4 border-b-2 border-r-2  border-[#072D20] dark:border-white">Team</th>
                    <th className="px-4 py-4 border-b-2 border-r-2  border-[#072D20] dark:border-white">Point</th>
                    <th className="px-4 py-4 border-b-2 border-r-2  border-[#072D20] dark:border-white" >Start Time</th>
                    <th className="px-4 py-4 border-b-2 border-r-2  border-[#072D20] dark:border-white">End Time</th>
                    <th className="px-4 py-4 border-b-2 border-r-2  border-[#072D20] dark:border-white">Duration</th>
                    <th className="px-4 py-4 border-b-2 border-r-2  border-[#072D20] dark:border-white">Winner</th>

                  </tr>
                </thead>


                <tbody >
                  {competitionData.map(entry => (
                    <tr key={entry.id}>
                      <td className="px-4 py-2 text-center  dark:border-white border-2 bg-white text-black border-[#072D20] dark:text-white dark:bg-gray-700">{entry.type}</td>
                      <td className="px-4 py-2 text-center  dark:border-white border-2 bg-white text-black border-[#072D20] dark:text-white dark:bg-gray-700">{entry.prize}</td>
                      <td className="px-4 py-2 text-center  dark:border-white border-2 bg-white text-black border-[#072D20] dark:text-white dark:bg-gray-700">{entry.prize_value}</td>
                      <td className="px-4 py-2 text-center  dark:border-white border-2 bg-white text-black border-[#072D20] dark:text-white dark:bg-gray-700">{entry.team}</td>
                      <td className="px-4 py-2 text-center  dark:border-white border-2 bg-white text-black border-[#072D20] dark:text-white dark:bg-gray-700">{entry.point}</td>
                      <td className="px-4 py-2 text-center  dark:border-white border-2 bg-white text-black border-[#072D20] dark:text-white dark:bg-gray-700">{entry.start_time}</td>
                      <td className="px-4 py-2 text-center  dark:border-white border-2 bg-white text-black border-[#072D20] dark:text-white dark:bg-gray-700">{entry.end_time}</td>
                      <td className="px-4 py-2 text-center  dark:border-white border-2 bg-white text-black border-[#072D20] dark:text-white dark:bg-gray-700">{entry.duration}</td>
                      <td className="px-4 py-2 text-center  dark:border-white border-2 bg-white text-black border-[#072D20] dark:text-white dark:bg-gray-700">{entry.winner}</td>
                    </tr>
                  ))}
                </tbody>

              </table>

            </div>



          </div>
          <Footer />
        </div>
      </div>

    </div>
  );
}