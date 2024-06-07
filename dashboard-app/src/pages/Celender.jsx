import React, { useState,useEffect } from "react";
import { FaPlusCircle, FaMoon, FaSun } from 'react-icons/fa';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import bcrypt from "bcryptjs";
import { useNavigate } from 'react-router-dom';
import CryptoJS from 'crypto-js';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { useStateContext } from "../contexts/ContextProvider";
import { useAdminContext } from "../contexts/AdminContextProvider"
import { FiSettings } from "react-icons/fi";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Footer, Sidebar, ThemeSettings } from "../components";
import { GiConsoleController } from "react-icons/gi";




export default function Page7(){

    const [competitions, setCompetitions] = useState([]);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const navigate = useNavigate();

    const [showUpdateModal, setShowUpdateModal] = useState(false);
  
    const [showUpdateModal1, setShowUpdateModal1] = useState(false);
  
  
    const [selectedCompetition, setSelectedCompetition] = useState(null);
    const [newTeamName, setNewTeamName] = useState("");
    const [salesOfficers, setSalesOfficers] = useState({});
    const [teamNames, setTeamNames] = useState([]);
    const [teamIds, setTeamIds] = useState({});
    const [salesAgents, setSalesAgents] = useState({});
  
  
    const [competitionsData, setCompetitionsData] = useState([]);
    const [approvedSalesAgents, setApprovedSalesAgents] = useState([]);
    const [approvedSalesOfficers, setApprovedSalesOfficers] = useState([]);
    
  
    const [winnerName, setWinnerName] = useState("");
    const [firstItemId, setFirstItemId] = useState(null);


    useEffect(() => {
      // Fetch the teams from the API
      const fetchTeams = async () => {
        try {
          const response = await axios.get('http://localhost:8000/api/teams');
          setTeams(response.data);
        } catch (error) {
          console.error('Error fetching the teams:', error);
        }
      };
  
      fetchTeams();
    }, []);
  
    useEffect(() => {
      fetch("http://localhost:8000/api/competition_overview")
        .then((response) => response.json())
        .then((data) => setCompetitions(data))
        .catch((error) => console.error("Error fetching competitions:", error));
    }, []);

    // __________________________________________________________________________________________________________________________________

    const [selectedTeamIds, setSelectedTeamIds] = useState([]);

    const handleTeam = (event, team_id) => {
      if (event.target.checked) {
        setSelectedTeamIds([...selectedTeamIds, team_id]);
      } else {
        setSelectedTeamIds(selectedTeamIds.filter(id => id !== team_id));
      }
    };


    useEffect(() => {
      console.log('Selected Team IDs:', selectedTeamIds);
    }, [selectedTeamIds]);

    // const handleAddTeams = async () => {
     
    //   const url = http://localhost:8000/api/competition_overview/${firstItemId};

    //   console.log("My Selection of teams: ",selectedTeamIds)
  
    //   try {
    //     const response = await axios.put(url, {
    //       team_ids: JSON.stringify(selectedTeamIds),
    //     });
    //     console.log('Teams added successfully:', response.data);
    //   } catch (error) {
    //     console.error('Error adding teams:', error);
    //   }
    // };
    const handleClick = (cid) => {
      // alert(cid);4
      console.log('Competition Card ID:', cid);
      setFirstItemId(cid);
      setShowUpdateModal1(true);
    };





    const handleAddTeams = () => {
      const url = `http://localhost:8000/api/competition_overview/${firstItemId}`
      const requestData = {
        
        team_id: JSON.stringify(selectedTeamIds)
      };
  
      console.log('Request Data:', requestData);
  
      axios.put(url, {
          team_id: JSON.stringify(selectedTeamIds),
        })
        .then(response => {



          console.log("Teams added successfully:", response.data);
          setSelectedTeamIds([]);
        })
        .catch(error => {
          console.error("Error adding teams:", error);
        });
    };




  //   function handleTeam(event, team_id) {
      
  //     if (event.target.checked) {
  //         console.log("Team ID:", team_id);
  //     }
  // }

    const handleTeamChange = (e) => {
      setSelectedTeam(e.target.value);
    };
  
    const [teamData, setTeamData] = useState('');
    const [teams, setTeams] = useState([]);
    const [filteredTeams, setFilteredTeams] = useState([]);
    const [selectedTeam, setSelectedTeam] = useState("");
  
  
    // useEffect(() => {
    //   // Fetch the teams from the API
    //   const fetchTeams = async () => {
    //     try {
    //       const response = await axios.get('http://localhost:8000/api/teams');
    //       setTeams(response.data);
    //     } catch (error) {
    //       console.error('Error fetching the teams:', error);
    //     }
    //   };
  
    //   fetchTeams();
    // }, []);
  
    const filterTeamsWithAgentsOrOfficers = (allTeams, agents, officers) => {
      return allTeams.filter((team) => {
        const agentsForTeam = agents.filter((agent) => agent.team_id === team.id);
        const officersForTeam = officers.filter((officer) => officer.team_id === team.id);
        return (
          (agentsForTeam.length > 0 && officersForTeam.length > 0) ||
          agentsForTeam.length > 0 ||
          officersForTeam.length > 0
        );
      });
    };
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          // Fetch teams
          const teamsResponse = await axios.get('http://localhost:8000/api/teams');
          const allTeams = teamsResponse.data;
  
          const agentsResponse = await axios.get('http://localhost:8000/api/sales-agents');
          const agents = agentsResponse.data;
          const officersResponse = await axios.get('http://localhost:8000/api/sales-officers');
          const officers = officersResponse.data;
  
          // Filter teams that have both sales agents and sales officers
          const teamsWithAgentsOrOfficers = filterTeamsWithAgentsOrOfficers(allTeams, agents, officers);
  
          setTeams(teamsWithAgentsOrOfficers);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);






    
    const filteredCompetitions = competitions.filter((competition) => {
      // Convert competition start and end times to date strings
      const competitionStartDate = new Date(competition.start_time).toISOString().split('T')[0];
      const competitionEndDate = new Date(competition.end_time).toISOString().split('T')[0];
    
      // Convert startDate and endDate to date strings
      const selectedStartDate = startDate;
      const selectedEndDate = endDate;
    
      if (selectedStartDate && selectedEndDate) {
        // Both start date and end date are selected
        return (
          competitionStartDate >= selectedStartDate &&
          competitionEndDate <= selectedEndDate
        );
      } else if (selectedStartDate && !selectedEndDate) {
        // Only start date is selected
        return (
          competitionStartDate >= selectedStartDate
        );
      } else if (!selectedStartDate && selectedEndDate) {
        // Only end date is selected
        return (
          competitionEndDate <= selectedEndDate
        );
      } else {
        // No filter selected
        return true;
      }
    });

    const handleUpdate = (competition) => {
      setSelectedCompetition(competition);
      setWinnerName(competition.winner || "");
      setShowUpdateModal(true);
    };
  
    const handleInputChange = (e) => {
      setWinnerName(e.target.value);
    };
  
  
    const handleUpdateClick = async () => {
      if (!selectedCompetition) return;
  
      try {
        const response = await axios.put(`http://localhost:8000/api/competition_overview/${selectedCompetition.id}`, {
          winner: winnerName
        });
  
        console.log('Update Response:', response.data);
  
        setCompetitions(prevCompetitions => prevCompetitions.map(comp =>
          comp.id === selectedCompetition.id ? { ...comp, winner: winnerName } : comp
        ));
  
        console.log('Winner Name:', winnerName);
        setShowUpdateModal(false);
      } catch (error) {
        console.error('Error updating winner name:', error);
      }
    };


    const handleDelete = async (id) => {
      try {
        const fieldsToDelete = {
          prize: "",
          prize_value: "",
          winner: ""
        };
  
        await axios.delete(`http://localhost:8000/api/competition_overview/${id}`, {
          data: fieldsToDelete
        });
  
        setCompetitions(competitions.filter(competition => competition.id !== id));
      } catch (error) {
        console.error("Error deleting competition:", error);
      }
    };
  
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
        <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
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
        </div>
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


              <div className="flex flex-col items-center justify-center mx-auto mt-8 ml-12 space-y-4 ju sm:flex-row sm:space-y-0 sm:space-x-4">
                <div className="flex flex-col w-1/2">
                  <label className="leading-loose dark:text-white">
                    <b>Start Date</b>
                  </label>
                  <div className="relative justify-center text-black focus-within:text-black">
                    <input
                      type="date"
                      className="w-3/4 px-4 py-2 text-black border border-gray-300 rounded-md dark:bg-white/70 focus:ring-black focus:border-black sm:text-sm focus:outline-none"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex flex-col w-1/2">
                  <label className="leading-loose dark:text-white">
                    <b>End Date</b>
                  </label>
                  <div className="relative text-black focus-within:text-black">
                    <input
                      type="date"
                      className="w-3/4 px-4 py-2 text-black border border-gray-300 rounded-md dark:bg-white/70 focus:ring-black focus:border-black sm:text-sm focus:outline-none"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                    />
                  </div>
                </div>
              </div>


              <div className="flex flex-wrap justify-center gap-4 m-4 " style={{ marginTop: "40px", marginRight: "auto" }}>


              {filteredCompetitions.map((competition) => {

                if(competition.team_id){
  const teamIds = JSON.parse(competition.team_id);
  console.log("teamid",teamIds);
  var teams2 = teamIds.map(teamId => {
    console.log(teamId);
    // const team = selectedTeamIds.find(t => t.id === teamId);
    var team1=false;
    teams.forEach(element => {
      if(element.id==teamId){
        console.log("Element is: ",element)
        team1=element.team_name;
        
      }
    });
    console.log(selectedTeamIds);console.log(team1);
    return team1 ? team1 : null;
    
  }).filter(team1 => team1 !== null);
                }else{
                  teams2="";
                }
  return (
    <div key={competition.id} className="flex flex-row flex-wrap gap-5 m-2">
      <div className="m-2 h-fit p-5 transition-all duration-150 ease-out bg-white dark:bg-[#B2BEBA] rounded-lg shadow-lg w-80 hover:shadow-2xl hover:ease-in">
        <h1 className="m-4 text-2xl font-bold text-center text-black/90 dark:text-black">Competition Id: {competition.id}</h1>
        <hr className="m-4 border-t-2 rounded-2xl" />
        <p className="text-center text-black/60 dark:text-black"><strong>Prize: {competition.prize}</strong></p>
        <hr className="m-4 border-t-2 rounded-2xl" />
        <p className="text-center text-black/60 dark:text-black"><strong>Prize Value: {competition.prize_value}</strong></p>
        <hr className="m-4 border-t-2 rounded-2xl" />
        <p className="text-center text-black/60 dark:text-black"><strong>Winner: {competition.winner}</strong></p>
        <hr className="m-4 border-t-2 rounded-2xl" />

        <p className="text-center text-black/60 dark:text-black"><strong>Added Teams: {teams2}</strong></p>
        <hr className="m-4 border-t-2 rounded-2xl" />

        <div className="flex justify-around mt-4">
          <button
            className="px-3 py-1 text-white bg-green-800 rounded-md hover:bg-green-800 focus:outline-none"
            onClick={() => handleClick(competition.id)}
          >
            Teams
          </button>

          <button
            className="px-3 py-1 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
            onClick={() => handleUpdate(competition)}
          >
            Update
          </button>
          <button
            className="px-3 py-1 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none"
            onClick={() => handleDelete(competition.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
})}





              </div>

              {showUpdateModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-[#1a1a1a] bg-opacity-50">
                  <div className="p-5 rounded-lg modal-content">
                    <div className="flex flex-col w-full gap-5 p-7">
                      <label
                        htmlFor="modal-1"
                        className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2"
                        onClick={() => setShowUpdateModal(false)}
                      >
                        ✕
                      </label>
                      <div className="flex flex-col gap-2">
                        <h2 className="text-2xl font-semibold text-center text-[#f6f6f6]">
                          Update Winner Name
                        </h2>
                      </div>

                      <section>
                        <div className="form-group">
                          <div className="form-field">
                            <label className="font-semibold form-label">
                              Enter Winner Name
                            </label>
                            <input
                              placeholder="Type here"
                              type="text"
                              className="max-w-full input"
                              value={winnerName}
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="pt-5 form-field">
                            <div className="justify-between form-control">
                              <button
                                onClick={handleUpdateClick}
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


              {/* team PopUp */}

              {showUpdateModal1 && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                  <div className="p-5 bg-[#1a1a1a] text-[#f6f6f6] rounded-lg modal-content">
                    <div className="flex flex-col w-full gap-5 p-7">
                      <label
                        htmlFor="modal-1"
                        className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2"
                        onClick={() => setShowUpdateModal1(false)}
                      >
                        ✕
                      </label>

                      <div className="flex flex-col gap-2 ">

                        <div className="flex flex-col items-center justify-center">

                        <div className="flex flex-wrap">
                            {teams.map((team) => (
                              <div key={team.id} className="flex items-center mb-2 mr-4">
                                <input
                                  type="checkbox"
                                  id={team.team_name}
                                  value={team.team_name}
                                  onChange={(e) => handleTeam(e, team.id)}
                                  className="mr-2"
                                />
                                <label htmlFor={team.team_name}>{team.team_name}</label>
                              </div>
                            ))}

                          </div>
                          




                          <button
                            className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-md cursor-pointer hover:bg-blue-600 focus:outline-none"
                            onClick={handleAddTeams}
                          >
                            Add Teams
                          </button>
                          <button onClick={() => setShowUpdateModal1(false)}>Close</button>
                        </div>











                      </div>

                    </div>
                  </div>
                </div>
              )}

              {/* team PopUp */}



            </div>



          </div>
          <Footer />
        </div>
      </div>

    </div>

    );
  }