
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useStateContext } from "../contexts/ContextProvider";
import { useAdminContext } from "../contexts/AdminContextProvider"
import { FiSettings } from "react-icons/fi";
import { Navbar, Footer, Sidebar, ThemeSettings } from "../components";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

export default function Page7() {
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
  const [competitions, setCompetitions] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [winnerName, setWinnerName] = useState("");

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/teams');
        if (!response.ok) {
          throw new Error('Failed to fetch teams data');
        }
        const data = await response.json();
        setTeams(data);
      } catch (error) {
        console.error('Error fetching teams data:', error);
      }
    };

    fetchTeams();
  }, []);

  // _______________________________________________________________________________________________________________________________

  // add mutiple teams

  const [selectedTeams1, setSelectedTeams1] = useState([]);

  function handleAddTeam(team_id) {
    setSelectedTeams1(prevTeams => [...prevTeams, team_id]);
  }

  const [selectedTeams, setSelectedTeams] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/teams');
        if (!response.ok) {
          throw new Error('Failed to fetch teams data');
        }
        const data = await response.json();
        setTeams(data);
      } catch (error) {
        console.error('Error fetching teams data:', error);
      }
    };

    fetchTeams();
  }, []);


  const handleTeam = (event, team_id) => {
    if (event.target.checked) {
      setSelectedTeams(prevTeams => [...prevTeams, team_id]); // Add team ID to selected teams state if checked
      console.log("Team ID added:", team_id);
    } else {
      setSelectedTeams(prevTeams => prevTeams.filter(id => id !== team_id)); // Remove team ID from selected teams state if unchecked
      console.log("Team ID removed:", team_id);
    }
  };

  const handleAdd = () => {
    const competition_id = firstItemId;
    const requestData = {
      competition_id: competition_id,
      team_id: JSON.stringify(selectedTeams)
    };

    console.log('Request Data:', requestData);

    axios.post('http://localhost:8000/api/competition_teams', requestData)
      .then(response => {
        console.log("Teams added successfully:", response.data);
        setSelectedTeams([]);
      })
      .catch(error => {
        console.error("Error adding teams:", error);
      });
  };

  // add mutiple teams

  // _______________________________________________________________________________________________________________________________

  // _______________________________________________________________________________________________________________________________

  // get competition id


  const [firstItemId, setFirstItemId] = useState(null);


  const handleClick = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/competition_overview');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      // Log the entire data object to the console for inspection
      console.log('API Response:', data);
      // Assuming you want to store the ID of the first item in the response
      const firstItemId = data.length > 0 ? data[0].id : null;
      // Log the ID to the console
      console.log('Competition Card ID:', firstItemId);
      // Store the ID in the component's state
      setFirstItemId(firstItemId);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setShowUpdateModal1(true);
  };
  // get competition id
  // _______________________________________________________________________________________________________________________________
  useEffect(() => {
    const fetchCompetitions = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/competition_overview");
        const data = await response.json();
        const competitionsWithTeams = [];

        for (const item of data) {
          console.log(item);

          // Assuming team_id is a JSON string representing an array of IDs
          const teamIds = JSON.parse(item.team_id);
          const teams = [];

          for (const teamId of teamIds) {
            console.log(teamId);

            try {
              const response2 = await fetch(`http://127.0.0.1:8000/api/teams/${teamId}`);
              const data2 = await response2.json();
              console.log(data2);
              teams.push(data2);
            } catch (teamError) {
              console.error(`Error fetching team ${teamId}:`, teamError);
            }
          }
          competitionsWithTeams.push({
            ...item,
            teams
          });
        }
        setCompetitions(competitionsWithTeams);
        console.log(competitionsWithTeams);
      } catch (error) {
        console.error("Error fetching competitions:", error);
      }
    };
    fetchCompetitions();
  }, []);

  // useEffect(() => {
  //   fetch("http://127.0.0.1:8000/api/competition_overview")
  //     .then((response) => response.json())
  //     .then((data) => function(){
  //       setCompetitions(data);
  //       console.log(data);
  //     })
  //     .catch((error) => console.error("Error fetching competitions:", error));
  // }, []);

  // _______________________________________________________________________________________________________________________________

  // team functionality 

  // const handleTeam = () => {  
  //   setShowUpdateModal1(true);
  // };

  //   function handleTeam(event, team_id) {
  //     setShowUpdateModal1(true);
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

  // team functionality 

  // _______________________________________________________________________________________________________________________________


  // _______________________________________________________________________________________________________________________________

  // update functionality


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

  // update functionality
  // _______________________________________________________________________________________________________________________________

  // _______________________________________________________________________________________________________________________________

  // delete button

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

  // delete button
  // _______________________________________________________________________________________________________________________________

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
                {filteredCompetitions.map((competition) => (
                  <div className="flex flex-row flex-wrap gap-5 m-2">
                    <div className=" m-2 h-fit p-5 transition-all duration-150 ease-out bg-white dark:bg-[#B2BEBA] rounded-lg shadow-lg w-80 hover:shadow-2xl hover:ease-in">
                      <h1 className="m-4 text-2xl font-bold text-center text-black/90 dark:text-black">Competition</h1>
                      <hr className="m-4 border-t-2 rounded-2xl" />
                      <p className="text-center text-black/60 dark:text-black"><strong>Prize: {competition.prize}</strong></p>
                      <hr className="m-4 border-t-2 rounded-2xl" />
                      <p className="text-center text-black/60 dark:text-black"><strong>Prize Value: {competition.prize_value}</strong></p>
                      <hr className="m-4 border-t-2 rounded-2xl" />
                      <p className="text-center text-black/60 dark:text-black"><strong>Winner: {competition.winner}</strong></p>
                      <hr className="m-4 border-t-2 rounded-2xl" />
                      <p className="text-center text-black/60 dark:text-black"><strong>Team:
                        {competition.teams.map((team, teamIndex) => (
                          <span key={teamIndex}>{team.team_name}</span>
                        ))}
                      </strong></p>
                      <hr className="m-4 border-t-2 rounded-2xl" />
                      <div className="flex justify-around mt-4">
                        <button
                          className="px-3 py-1 text-white bg-green-800 rounded-md hover:bg-green-800 focus:outline-none"
                          onClick={handleClick}
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
                ))}
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
                            onClick={handleAdd}
                            disabled={selectedTeams.length === 0} // Disable button if no teams are selected
                          >
                            Add Teams
                          </button>
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

// import React, { useState, useEffect } from "react";
// import { useLocation } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import { useStateContext } from "../contexts/ContextProvider";
// import { Navbar, Footer, Sidebar, ThemeSettings } from "../components";
// import { useAdminContext } from "../contexts/AdminContextProvider";


// export default function Page7() {
//   const navigate = useNavigate();


//   const {
//     setCurrentColor,
//     setCurrentMode,
//     currentMode,
//     activeMenu,
//     currentColor,
//     themeSettings,
//     setThemeSettings,
//   } = useStateContext();


//   useEffect(() => {
//     const currentThemeColor = localStorage.getItem("colorMode");
//     const currentThemeMode = localStorage.getItem("themeMode");
//     if (currentThemeColor && currentThemeMode) {
//       setCurrentColor(currentThemeColor);
//       setCurrentMode(currentThemeMode);
//     }
//   }, []);




//   const location = useLocation();
//   const { state } = location;
//   const [competitionData, setCompetitionData] = useState([]);


//   useEffect(() => {
//     fetch('http://localhost:8000/api/spiff_competitions')
//       .then(response => response.json())
//       .then(data => setCompetitionData(data))
//       .catch(error => console.error('Error fetching competition data:', error));
//   }, []);

//   const { isAdminLoggedIn } = useAdminContext();
//   if (!isAdminLoggedIn) {
//     console.log("admin is not logged in");
//     navigate('/admin_login');
//     return (
//       <div className="flex items-center justify-center h-screen bg-white">
//         <h1 className="text-4xl text-green-900 text-bold">Redirecting to Login Page...</h1>
//       </div>
//     );
//   }

//   return (


//     <div className={currentMode === "Dark" ? "" : ""}>
//       <div className="relative flex dark:bg-main-dark-bg">
//         {/* <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
//           <TooltipComponent content="Settings" position="Top">
//             <button
//               type="button"
//               onClick={() => setThemeSettings(true)}
//               style={{ background: currentColor, borderRadius: "50%" }}
//               className="p-3 text-3xl text-w hover:drop-shadow-xl hover:bg-light-gray"
//             >
//               <FiSettings />
//             </button>
//           </TooltipComponent>
//         </div> */}
//         {activeMenu ? (
//           <div className="fixed bg-white w-72 sidebar dark:bg-secondary-dark-bg ">
//             <Sidebar />
//           </div>
//         ) : (
//           <div className="w-0 dark:bg-[#1a1a1a6b]">
//             <Sidebar />
//           </div>
//         )}
//         <div
//           className={
//             activeMenu
//               ? "dark:bg-[#1a1a1a6b] bg-main-bg min-h-screen md:ml-72 w-full  "
//               : "bg-main-bg dark:bg-[#1a1a1a6b] w-full min-h-screen flex-2 "
//           }
//         >
//           <div className="fixed w-full md:static bg-[#072D20] dark:bg-[#072D20] navbar ">
//             <Navbar />
//           </div>
//           <div>
//             {themeSettings && <ThemeSettings />}



//             <div className="mt-20">
//               <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
//                 <div className="overflow-x-auto">
//                   <table className="min-w-full">
//                     <colgroup>
//                       <col />
//                       <col />
//                       <col />
//                       <col />
//                       <col />
//                       <col />
//                       <col />
//                       <col />
//                       <col />
//                     </colgroup>
//                     <thead>
//                       <tr className="text-white bg-[#305b4c] dark:bg-[#072D20]">
//                         <th className="px-4 py-4 border-b-2 border-r-2  border-[#072D20] dark:border-white">Type</th>
//                         <th className="px-4 py-4 border-b-2 border-r-2  border-[#072D20] dark:border-white">Prize</th>
//                         <th className="px-4 py-4 border-b-2 border-r-2  border-[#072D20] dark:border-white">Prize Value</th>
//                         <th className="px-4 py-4 border-b-2 border-r-2  border-[#072D20] dark:border-white">Team</th>
//                         <th className="px-4 py-4 border-b-2 border-r-2  border-[#072D20] dark:border-white">Point</th>
//                         <th className="px-4 py-4 border-b-2 border-r-2  border-[#072D20] dark:border-white" >Start Time</th>
//                         <th className="px-4 py-4 border-b-2 border-r-2  border-[#072D20] dark:border-white">End Time</th>
//                         <th className="px-4 py-4 border-b-2 border-r-2  border-[#072D20] dark:border-white">Duration</th>
//                         <th className="px-4 py-4 border-b-2 border-r-2  border-[#072D20] dark:border-white">Winner</th>
//                       </tr>
//                     </thead>
//                     <tbody >
//                       {competitionData.map(entry => (
//                         <tr key={entry.id}>
//                           <td className="px-4 py-2 text-center  dark:border-white border-2 bg-white text-black border-[#072D20] dark:text-white dark:bg-gray-700">{entry.type}</td>
//                           <td className="px-4 py-2 text-center  dark:border-white border-2 bg-white text-black border-[#072D20] dark:text-white dark:bg-gray-700">{entry.prize}</td>
//                           <td className="px-4 py-2 text-center  dark:border-white border-2 bg-white text-black border-[#072D20] dark:text-white dark:bg-gray-700">{entry.prize_value}</td>
//                           <td className="px-4 py-2 text-center  dark:border-white border-2 bg-white text-black border-[#072D20] dark:text-white dark:bg-gray-700">{entry.team}</td>
//                           <td className="px-4 py-2 text-center  dark:border-white border-2 bg-white text-black border-[#072D20] dark:text-white dark:bg-gray-700">{entry.point}</td>
//                           <td className="px-4 py-2 text-center  dark:border-white border-2 bg-white text-black border-[#072D20] dark:text-white dark:bg-gray-700">{entry.start_time}</td>
//                           <td className="px-4 py-2 text-center  dark:border-white border-2 bg-white text-black border-[#072D20] dark:text-white dark:bg-gray-700">{entry.end_time}</td>
//                           <td className="px-4 py-2 text-center  dark:border-white border-2 bg-white text-black border-[#072D20] dark:text-white dark:bg-gray-700">{entry.duration}</td>
//                           <td className="px-4 py-2 text-center  dark:border-white border-2 bg-white text-black border-[#072D20] dark:text-white dark:bg-gray-700">{entry.winner}</td>
//                         </tr>
//                       ))}
//                     </tbody>

//                   </table>
//                 </div>
//               </div>
//             </div>



//           </div>
//           <Footer />
//         </div>
//       </div>

//     </div>
//   );
// }
