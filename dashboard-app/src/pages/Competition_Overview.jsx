import React, { useState, useEffect } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { Navbar, Footer, Sidebar, ThemeSettings } from "../components";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useAdminContext } from "../contexts/AdminContextProvider";

export default function Page10() {
  const navigate = useNavigate();

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

  const [competitions, setCompetitions] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedCompetition, setSelectedCompetition] = useState(null);
  const [newTeamName, setNewTeamName] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/api/spiff_competitions")
      .then((response) => response.json())
      .then((data) => setCompetitions(data))
      .catch((error) => console.error("Error fetching competitions:", error));
  }, []);

  const handleUpdate = () => {
    console.log(`Updating team: ${newTeamName}`);
    setShowUpdateModal(false);
  };
  const handleDelete = async (id) => {
    try {
      const fieldsToDelete = {
        team: "",
        prize: "",
        prize_value: "",
        winner: ""
      };
      await axios.delete(`http://localhost:8000/api/spiff_competitions/${id}`, {
        data: fieldsToDelete
      });
      setCompetitions(competitions.filter(competition => competition.id !== id));
    } catch (error) {
      console.error("Error deleting competition:", error);
    }
  };
  const filteredCompetitions = competitions.filter((competition) => {
    const competitionStartDate = new Date(competition.start_time).toISOString().split('T')[0];
    const competitionEndDate = new Date(competition.end_time).toISOString().split('T')[0];
    const selectedStartDate = startDate;
    const selectedEndDate = endDate;
    if (selectedStartDate && selectedEndDate) {
      return (
        competitionStartDate >= selectedStartDate &&
        competitionEndDate <= selectedEndDate
      );
    } else if (selectedStartDate && !selectedEndDate) {
      return (
        competitionStartDate >= selectedStartDate
      );
    } else if (!selectedStartDate && selectedEndDate) {
      return (
        competitionEndDate <= selectedEndDate
      );
    } else {
      return true;
    }
  });

  const { isAdminLoggedIn } = useAdminContext();
  if (!isAdminLoggedIn) {
    console.log("admin is not logged in");
    navigate('/admin_login');
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <h1 className="text-4xl text-green-900 text-bold">Redirecting to Login Page...</h1>
      </div>
    );
  }

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
          <div className="flex items-center justify-center mt-20">
            {themeSettings && <ThemeSettings />}
            <div className="w-full">
              <div className="flex flex-col items-center mt-8 ml-2 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <div className="flex flex-col w-full">
                  <label className="leading-loose dark:text-white">
                    <b>Start Date</b>
                  </label>
                  <div className="relative justify-center text-black focus-within:text-black">
                    <input
                      type="date"
                      className="w-3/4 px-4 py-2 text-black border border-gray-600 bg-[#DAF1DE] rounded-md focus:ring-black focus:border-black sm:text-sm focus:outline-none"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <label className="leading-loose dark:text-white">
                    <b>End Date</b>
                  </label>
                  <div className="relative text-black focus-within:text-black">
                    <input
                      type="date"
                      className="w-3/4 px-4 py-2 text-black border border-gray-600 bg-[#DAF1DE]  rounded-md focus:ring-black focus:border-black sm:text-sm focus:outline-none"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="grid justify-center grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4" style={{ marginTop: "40px", marginRight: "auto" }}>
                {filteredCompetitions.map((competition) => (
                  <div className="bg-gradient-to-r from-[#072D20] to-emerald-600 to-90% w-64 h-72 m-4 static rounded-lg" key={competition.id}>
                    <div className="absolute m-2 transition-all duration-150 ease-out bg-[#B2BEBA] rounded-lg shadow-lg w-64 pb-3 hover:m-0 hover:shadow-2xl hover:ease-in">
                      <h1 className="m-4 text-2xl font-bold text-center text-black/90 dark:text-black">Team: {competition.team}</h1>
                      <hr className="m-4 border-t-2 border-gray-400 rounded-2xl" />
                      <p className="text-center text-black/60 dark:text-black"><strong>Prize: {competition.prize}</strong></p>
                      <hr className="m-4 border-t-2 border-gray-400 rounded-2xl" />
                      <p className="text-center text-black/60 dark:text-black"><strong>Prize Value: {competition.prize_value}</strong></p>
                      <hr className="m-4 border-t-2 border-gray-400 rounded-2xl" />
                      <p className="text-center text-black/60 dark:text-black"><strong>Winner:</strong></p>
                      <hr className="m-4 border-t-2 border-gray-400 rounded-2xl" />
                      <div className="flex items-center justify-center mt-4">
                        <button
                          className=" px-2 py-2 w-18 mr-8 text-sm font-medium text-white rounded-md bg-[#26473c] hover:bg-[#072D20] dark:bg-[#072D20]"
                          onClick={() => {
                            setShowUpdateModal(true);
                          }}
                        >
                          Update
                        </button>
                        <button
                          className="w-18 px-2 py-2 text-sm font-medium text-white rounded-md bg-[#843a3b] hover:bg-red-800 dark:bg-red-800"
                          onClick={() => handleDelete(competition.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
      {showUpdateModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="modal-content bg-white dark:bg-[#B2BEBA] rounded-lg p-5">
            <div className="flex flex-col w-full gap-5 p-7">
              <label
                htmlFor="modal-1"
                className="absolute text-black btn btn-sm btn-circle btn-ghost right-2 top-2 hover:text-white"
                onClick={() => setShowUpdateModal(false)}
              >
                ✕
              </label>
              <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-semibold text-center">
                  Update Winner Name
                </h2>
              </div>
              <section>
                <div className="form-group">
                  <div className="form-field">
                    <label className="font-semibold text-black form-label">
                      Enter Winner Name
                    </label>
                    <input
                      placeholder="Type here"
                      type="text"
                      className="max-w-full input bg-white dark:bg-[#B2BEBA] text-black"
                    />
                  </div>
                  <div className="pt-5 form-field">
                    <div className="justify-between form-control">
                      <button
                        className="w-full btn bg-[#26473c] hover:bg-[#072D20] text-white"
                      >
                        Update Winner Name
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}