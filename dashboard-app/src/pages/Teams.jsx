import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useStateContext } from "../contexts/ContextProvider";
import { Navbar, Footer, Sidebar, ThemeSettings } from "../components";
import { useNavigate } from "react-router-dom";
import { useAdminContext } from "../contexts/AdminContextProvider";

export default function Page8() {
  const navigate = useNavigate();
  const { isAdminLoggedIn } = useAdminContext();
  if (!isAdminLoggedIn) {
    console.log("admin is not logged in");
    navigate('/admin_login');
  }
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

  const [teamData, setTeamData] = useState('')
  const [teamNames, setTeamNames] = useState([]);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [newTeamName, setNewTeamName] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [salesAgents, setSalesAgents] = useState([]);
  const [teams, setTeams] = useState([]);
  const [teamAgents, setTeamAgents] = useState({});

  const handleTeam = (e) => {
    setTeamData(e.target.value);

  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (teamData.trim() !== '') {
      try {
        const response = await axios.post('https://crmapi.devcir.co/api/teams', { team_name: teamData });
        console.log('Team added successfully:', response.data);
        window.location.reload();
        setTeamNames([...teamNames, teamData]);
        setTeamData('');
      } catch (error) {
        console.error('Error adding team:', error);
      }
    }
  };
  // ------------------------ UseEffect ------------------------------//
  useEffect(() => {
    fetch('https://crmapi.devcir.co/api/teams')
      .then(response => response.json())
      .then(data => setTeams(data))
      .catch(error => console.error('Error fetching teams:', error));
  }, []);

  const handleUpdate = async () => {
    try {
      const updatedTeams = teams.map((team) => {
        if (team.id === selectedTeam.id) {
          return { ...team, team_name: newTeamName };
        } else {
          return team;
        }
      });
      setTeams(updatedTeams);
      await axios.put(`https://crmapi.devcir.co/api/teams/${selectedTeam.id}`, {
        team_name: newTeamName,
      });
      setShowUpdateModal(false);
    } catch (error) {
      console.error("Error updating team name:", error);

    }
  };
  //   delete button of card 
  const handleDelete = async (teamId) => {
    try {
      const response = await axios.get(`https://crmapi.devcir.co/api/sales_agent/team/${teamId}`);
      const agents = response.data;
      await Promise.all(agents.map(async (agent) => {
        await axios.put(`https://crmapi.devcir.co/api/sales-agents/marium_azhar/${agent.id}`, { team_id: null });
      }));
      await axios.delete(`https://crmapi.devcir.co/api/teams/${teamId}`);
      setTeams(teams.filter((team) => team.id !== teamId));
    } catch (error) {
      console.error("Error deleting team:", error);
      if (error.response) {
        console.log("Error response data:", error.response.data);
        console.log("Error response status:", error.response.status);
      }
    }
  };
  //   delete button of card 
  const handlePlusButtonClick = (team) => {
    console.log("Team Id:", team);
    setSelectedTeam(team);
    setShowPopup(true);
  };
  // useEffect for showing the sales agent ___________
  useEffect(() => {
    fetch("https://crmapi.devcir.co/api/sales-agents")
      .then((response) => response.json())
      .then((data) => {
        const filteredData = data.filter(agent => agent.team_id === null);
        setSalesAgents(filteredData);
      })
      .catch((error) => console.error("Error fetching sales agents:", error));
  }, []);

  // useEffect for showing the sales agent ___________
  const handleAdd = (teamId) => {
    console.log('sales agent ID:', teamId);
    console.log("Team Id: ", selectedTeam);
    console.log("");
    const agentToUpdate = salesAgents.find(agent => agent.id === teamId);
    agentToUpdate.team_id = selectedTeam;
    console.log('Updated agent data:', JSON.stringify(agentToUpdate, null, 2));
    fetch(`https://crmapi.devcir.co/api/sales-agents/wajid/${teamId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(agentToUpdate),
    })
      .then(response => {
        if (response.ok) {
          console.log('Agent updated successfully');
          window.location.reload();
          alert("Agent added successfully")
          response.json().then(data => {
            console.log('Updated agent data from server:', data);
          });
        } else {
          console.error('Error updating agent:', response.statusText);
          console.log('sales agent ID:', teamId);
          console.log("Team Id: ", selectedTeam);
        }
      })
      .catch(error => {
        console.error('Error updating agent:', error);
        console.log('sales agent ID:', teamId);
        console.log("Team Id: ", selectedTeam);
      });
  };
  //   useEffect for showing signed teams
  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await fetch('https://crmapi.devcir.co/api/teams');
        const jsonData = await response.json();
        setTeams(jsonData);
      } catch (error) {
        console.error('Error fetching teams:', error);
      }
    };

    fetchTeams();
  }, []);

  useEffect(() => {
    const fetchAgentsForTeam = async (teamId) => {
      try {
        const response = await fetch(`https://crmapi.devcir.co/api/sales_agent/team/${teamId}`);
        const agents = await response.json();
        setTeamAgents((prevAgents) => ({ ...prevAgents, [teamId]: agents }));
      } catch (error) {
        console.error(`Error fetching agents for team ${teamId}:`, error);
      }
    };

    teams.forEach((team) => {
      fetchAgentsForTeam(team.id);
    });
  }, [teams]);
  //   for updating agent team_id to Null when its delete from any team
  const handleAgent = (agentId) => {
    fetch(`https://crmapi.devcir.co/api/sales-agents/marium_azhar/${agentId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        team_id: null
      })
    })
      .then(response => {
        if (response.ok) {
          window.location.reload();
          // If update was successful, update the teamAgents state to reflect the change
          const updatedAgents = teamAgents[selectedTeam.id].map(agent => {
            if (agent.id === agentId) {
              return { ...agent, team_id: null };
            }
            return agent;
          });
          setTeamAgents({
            ...teamAgents,
            [selectedTeam.id]: updatedAgents
          });
          console.log('Agent updated successfully');
        } else {
          // Handle error
          console.error('Failed to update agent');
        }
      })
      .catch(error => console.error('Error updating agent:', error));
  };
  //   for updating agent team_id to Null when its delete from any team
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
              <div className="flex flex-col h-screen">
                {/* ____________________________________________________________________________________________________________________________ */}
                <div className="flex-grow w-[40%] ml-auto mr-auto rounded-md  dark:text-black">

                  <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900 dark:text-white">
                    Welcome Teams
                  </h2>
                  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 dark:text-white dark:font-bold">
                          Enter Team Name
                        </label>
                        <div className="mt-2">
                          <input
                            id="email"
                            name="email"
                            type="text"
                            value={teamData}
                            onChange={handleTeam}
                            required
                            className="block w-full py-3 pl-4 text-gray-900 border-0 rounded-md shadow-sm dark:border-black/40 dark:border-2 dark:border-black dark:bg-white ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                          />
                        </div>
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2  bg-[#26473c] hover:bg-[#072D20]">
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <br />
                {/* ____________________________________________________________________________________________________________________________ */}
                <div className="flex-grow">
                  <div className="grid grid-cols-2 gap-4 mt-6 md:grid-cols-4">
                    {teams.map(team => (
                      <div key={team.id} className="w-full mx-5">
                        <div className="flex flex-col p-2 bg-[#DAF1DE] dark:bg-[#94a59f] rounded-lg shadow border border-gray-400 dark:border-black">
                          <div className="flex flex-col items-center text-center">
                            <div className="inline-block rounded-full ">
                            </div>
                            <h2 className="mt-2 font-semibold text-gray-800">{team.team_name}</h2>
                            {/* plus button functionality */}
                            <button
                              className="flex items-center justify-center w-10 h-10 mt-2 bg-[#305b4c] rounded-full hover:bg-[#072D20] dark:bg-[#072D20] focus:outline-none"
                              onClick={() => handlePlusButtonClick(team.id)}
                            >
                              <svg
                                className="w-6 h-6 text-white fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                              >
                                <path d="M0 0h24v24H0V0z" fill="none" />
                                <path d="M11 2v9H2v2h9v9h2v-9h9v-2h-9V2h-2z" />
                              </svg>
                            </button>
                            {/* plus button functionality */}
                          </div>
                          {/* show names which added to the team */}
                          <div className="max-w-xl p-4 mx-auto mt-4 border border-black rounded-2xl">
                            <h1 className="mb-4 text-lg font-bold dark:text-black">Team Members</h1>
                            {teamAgents[team.id] && teamAgents[team.id].map((agent, index) => (
                              <div key={index} className="flex items-center justify-between mb-2">
                                <span className="mr-2 dark:text-black">
                                  {agent.first_name} {agent.last_name}
                                </span>
                                <button className="px-2 py-1 text-white  bg-[#843a3b] hover:bg-red-800 rounded dark:bg-red-800" onClick={() => handleAgent(agent.id)}>Delete</button>
                              </div>
                            ))}
                          </div>
                          {/* show names which added to the team */}
                          <div className="flex items-center mt-4">
                            <button
                              className="flex-1 px-2 py-2 text-sm font-medium text-white rounded-md bg-[#26473c] hover:bg-[#072D20] dark:bg-[#072D20] hover:text-white"
                              onClick={() => {
                                setSelectedTeam(team);
                                setNewTeamName(team.team_name);
                                setShowUpdateModal(true);
                              }}
                            >
                              Update
                            </button>
                            <button
                              className="flex-1 px-2 py-2 ml-4 text-sm font-medium text-white rounded-md bg-[#843a3b] hover:bg-red-800 dark:bg-red-800 hover:border-2 hover:font-bold "
                              onClick={() => handleDelete(team.id)}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* PopUp for plus button */}
                  <input
                    className="modal-state"
                    id="modal-2"
                    type="checkbox" checked={showPopup} readOnly />
                  <div className="w-screen modal">
                    <label className="modal-overlay" htmlFor="modal-2" onClick={() => setShowPopup(false)}></label>
                    <div className="flex flex-col max-w-3xl gap-5 modal-content bg-white">
                      <center> <h2 className="text-xl text-black">Add Sales Agents</h2>  </center>
                      <div className="flex flex-col gap-4">
                        {salesAgents.filter(agent => agent.status === 'approved').map((agent) => (
                          <div key={agent.id} className="flex items-center justify-between mt-8">
                            <span>{agent.first_name} {agent.last_name}</span>
                            <button
                              onClick={() => handleAdd(agent.id, agent)}
                              className="btn bg-[#a2dfcb] dark:bg-[#74c7ab] text-black border-2 border-black ml-10"
                            >
                              Add
                            </button>
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-3">
                        <button className="btn btn-error btn-block bg-[#26473c] hover:bg-[#072D20] dark:bg-[#072D20]" onClick={() => setShowPopup(false)}>
                          Close
                        </button>
                      </div>
                    </div>
                  </div>;
                  {/* PopUp for plus button */}
                  {/* PopUp for update button on card */}
                  {showUpdateModal && (
                    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50">
                      <div className="modal-content bg-white border border-black">
                        <div className="flex flex-col w-full gap-5 p-7">
                          <label
                            htmlFor="modal-1"
                            className="absolute btn btn-sm btn-circle btn-ghost right-2 top-2 text-black hover:text-white"
                            onClick={() => setShowUpdateModal(false)}
                          >
                            ✕
                          </label>
                          <div className="flex flex-col gap-2">
                            <h2 className="text-2xl font-semibold text-center">Update Team Name</h2>
                            {/* <p className="max-w-xs mx-auto text-sm text-content2">Enter new team name</p> */}
                          </div>
                          <section>
                            <div className="form-group">
                              <div className="form-field">
                                <label className="font-semibold form-label text-black">Enter New Team Name</label>
                                <input
                                  placeholder="Type here"
                                  type="text"
                                  className="max-w-full input bg-white text-black"
                                  value={newTeamName}
                                  onChange={(e) => setNewTeamName(e.target.value)}
                                />
                              </div>
                              <div className="pt-5 form-field">
                                <div className="justify-between form-control">
                                  <button onClick={handleUpdate} className="w-full btn bg-[#26473c] hover:bg-[#072D20] text-white">
                                    Update Team Name
                                  </button>
                                </div>
                              </div>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                  )}
                  {/* PopUp for update button on card */}
                </div>
                {/* purple div ends */}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}