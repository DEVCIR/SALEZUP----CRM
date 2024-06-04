import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useStateContext } from "../contexts/ContextProvider";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Navbar, Footer, Sidebar, ThemeSettings } from "../components";

export default function Page6() {
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
  const [typeData, setTypeData] = useState("");
  const [prizeData, setPrizeData] = useState('');
  const [prizevalueData, setPrizeValueData] = useState('');
  const [teamData, setTeamData] = useState('');
  const [pointData, setPointData] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [duration, setDuration] = useState('');
  const [winnerdata, setWinnerData] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [teams, setTeams] = useState([]);
  const handleType = (e) => {
    setTypeData(e.target.value);

  };

  const handlePrize = (e) => {
    setPrizeData(e.target.value);

  }

  const handlePrizeValue = (e) => {
    setPrizeValueData(e.target.value);

  }

  const handleTeam = (e) => {
    setTeamData(e.target.value);

  }

  const handlePoint = (e) => {
    setPointData(e.target.value);

  }

  const handleDuration = (e) => {
    setDuration(e.target.value);

  }

  const handleWinner = (e) => {
    setWinnerData(e.target.value);
  };


  const handleStartTimeChange = (e) => {
    const selectedStartTime = e.target.value;
    setStartTime(selectedStartTime);
    const startTimeDate = new Date(selectedStartTime + 'Z'); // Append 'Z' to ensure UTC time
    startTimeDate.setUTCMinutes(startTimeDate.getUTCMinutes() + 1);
    const formattedEndTime = startTimeDate.toISOString().slice(0, -8); // Format as "YYYY-MM-DDTHH:MM"
    setEndTime(formattedEndTime);
    updateDuration(selectedStartTime, formattedEndTime);
  }

  const handleEndTimeChange = (e) => {
    setEndTime(e.target.value);
    updateDuration(startTime, e.target.value);
  }

  const updateDuration = (start, end) => {
    const startTimestamp = Date.parse(start);
    const endTimestamp = Date.parse(end);
    if (!isNaN(startTimestamp) && !isNaN(endTimestamp)) {
      let durationMillis = Math.abs(endTimestamp - startTimestamp);
      let hours = Math.floor(durationMillis / (1000 * 60 * 60));
      let minutes = Math.floor((durationMillis % (1000 * 60 * 60)) / (1000 * 60));
      setDuration(`${hours} hours ${minutes} minutes`);
    } else {
      setDuration('');
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(typeData);
    console.log(prizeData);
    console.log(prizevalueData)
    console.log(teamData);
    console.log(pointData);
    console.log(duration);
    console.log(startTime)
    console.log(endTime)
    console.log(winnerdata)
    console.log(typeData, prizeData, teamData, pointData, startTime, endTime, duration, prizeData, winnerdata)
    try {
      const response = await axios.post('https://crmapi.devcir.co/api/spiff_competitions', {
        type: typeData,
        prize: prizeData,
        team: teamData,
        point: pointData,
        start_time: startTime,
        end_time: endTime,
        duration: duration,
        prize_value: prizevalueData,
        winner: winnerdata
      });
      console.log(typeData, prizeData, teamData, pointData, startTime, endTime, duration, prizeData, winnerdata)
      setSubmitted(true);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const handleOkayClick = () => {
    setSubmitted(false);
    window.location.reload();
  };

  useEffect(() => {
    // Fetch the teams from the API
    const fetchTeams = async () => {
      try {
        const response = await axios.get('https://crmapi.devcir.co/api/teams');
        setTeams(response.data);
      } catch (error) {
        console.error('Error fetching the teams:', error);
      }
    };

    fetchTeams();
  }, []);
  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
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
              <div class="min-h-screen   py-6 flex flex-col justify-center sm:py-12">
                <div class="relative py-3 sm:max-w-xl sm:mx-auto">
                  <div class="relative px-4 py-10 bg-[#dde2e1] dark:bg-[#B2BEBA] mx-8 md:mx-0 shadow rounded-3xl sm:p-10 border border-black">
                    <div class="max-w-md mx-auto">
                      <div class="flex items-center space-x-5">
                        <div class="block pl-2 font-semibold text-xl self-start text-black">
                          <h2 class="leading-relaxed">  <b>  Create Competitions </b>  </h2>
                        </div>
                      </div>
                      <form onSubmit={handleSubmit}>
                        <div class="divide-y divide-gray-200">
                          <div class="py-8 text-base leading-6 space-y-4 text-black sm:text-lg sm:leading-7">
                            {/* Type */}
                            <div className="flex flex-col">
                              <label className="leading-loose">  <b> Type  </b> </label>
                              <select
                                className="block w-full px-6 py-3 text-black bg-transparent border border-b border-black rounded-md bk ring-black focus:ring-black focus:border-black sm:text-sm focus:outline-none"
                                value={typeData}
                                onChange={handleType}
                                required
                              >
                                <option className="border-4 border-black" value="">Select a type</option>
                                <option value="Type 1">Type 1</option>
                                <option value="Type 2">Type 2</option>
                                <option value="Type 3">Type 3</option>
                                <option value="Type 4">Type 4</option>
                                <option value="Type 5">Type 5</option>
                              </select>
                            </div>
                            {/* Type */}
                            {/* ___________________________________________________________________________________________________________________________________________________ */}
                            {/* Prize */}
                            <div class="flex flex-col">
                              <label class="leading-loose">   <b> Prize  </b>  </label>
                              <select
                                class="block px-4 py-3 border focus:ring-black bg-transparent border-black w-full sm:text-sm rounded-md focus:outline-none text-black"
                                value={prizeData}
                                onChange={handlePrize}
                                required
                              >
                                <option value="">Select a prize</option>
                                <option value="Prize 1">Prize 1</option>
                                <option value="Prize 2">Prize 2</option>
                                <option value="Prize 3">Prize 3</option>
                                <option value="Prize 4">Prize 4</option>
                                <option value="Prize 5">Prize 5</option>
                              </select>
                            </div>
                            {/* Prize */}
                            {/* _____________________________________________________________________________________________________________________________________________________ */}
                            {/* Prize Value */}
                            <div class="flex flex-col">
                              <label class="leading-loose">   <b> Prize Value  </b>  </label>
                              <select
                                class="block px-4 py-3 border focus:ring-black bg-transparent border-black w-full sm:text-sm  rounded-md focus:outline-none text-black"
                                value={prizevalueData}
                                onChange={handlePrizeValue}
                                required
                              >
                                <option value="">Select a prize value</option>
                                <option value="Prize 1">1</option>
                                <option value="Prize 2">2</option>
                                <option value="Prize 3">3</option>
                                <option value="Prize 4">4</option>
                                <option value="Prize 5">5</option>
                              </select>
                            </div>
                            {/* Prize Value */}
                            {/* _______________________________________________________________________________________________________________________________________________________ */}
                            {/* Team */}
                            <div class="flex flex-col">
                              <label class="leading-loose"> <b>  Teams </b>  </label>
                              <select
                                class="block px-4 py-3 border bg-transparent focus:ring-black border-black w-full sm:text-sm rounded-md focus:outline-none text-black"
                                value={teamData}
                                onChange={handleTeam}
                                required
                              >
                                {/* <option  value="">Select a team</option>
              <option value="Team 1">Team 1</option>
              <option value="Team 2">Team 2</option>
              <option value="Team 3">Team 3</option>
              <option value="Team 4">Team 4</option>
              <option value="Team 5">Team 5</option> */}
                                <option className="border-4 border-green-400" value="">Select a team</option>
                                {teams.map((team) => (
                                  <option key={team.id} value={team.team_name}>{team.team_name}</option>
                                ))}
                              </select>
                            </div>
                            {/* Team */}
                            {/* ___________________________________________________________________________________________________________________________________________________________ */}
                            {/* ponts */}
                            <div class="flex flex-col">
                              <label class="leading-loose"> <b>  Points </b>  </label>
                              <select
                                class="block px-4 py-3 bg-transparent border focus:ring-black border-black w-full sm:text-sm rounded-md focus:outline-none text-black"
                                value={pointData}
                                onChange={handlePoint}
                                required
                              >
                                <option value="">Select a point</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value=" 3">3</option>
                                <option value=" 4">4</option>
                                <option value=" 5">5</option>
                              </select>
                            </div>
                            {/* ponts */}
                            {/* _____________________________________________________________________________________________________________________________________________________ */}
                            {/* time duration */}
                            <div class="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                              <div class="flex flex-col sm:w-1/2">
                                <label class="leading-loose"> <b> Start </b>    </label>
                                <div class="relative focus-within:text-gray-600 text-gray-400 ">
                                  <input
                                    type="datetime-local"
                                    class="px-4 py-3 border focus:ring-black bg-transparent border-black w-full sm:text-sm rounded-md focus:outline-none text-black"
                                    placeholder="25/02/2020"
                                    value={startTime}
                                    onChange={handleStartTimeChange}
                                  />
                                </div>
                              </div>
                              <div class="flex flex-col sm:w-1/2">
                                <label class="leading-loose">  <b>  End </b> </label>
                                <div class="relative focus-within:text-gray-600 text-gray-400">
                                  <input
                                    type="datetime-local"
                                    class="px-4 py-3 border focus:ring-black bg-transparent border-black w-full sm:text-sm rounded-md focus:outline-none text-black"
                                    placeholder="26/02/2020"
                                    value={endTime}
                                    onChange={handleEndTimeChange}
                                  />
                                </div>
                              </div>
                            </div>
                            {/* time duration */}
                            <div class="flex flex-col">
                              <label class="leading-loose"> <b>  Duration </b> </label>
                              <input type="text" class="px-4 py-3 border bg-transparent focus:ring-black border-black w-full sm:text-sm rounded-md focus:outline-none text-black"
                                id="duration"
                                value={duration}
                                readOnly
                                placeholder="Optional"
                                onChange={handleDuration}
                                required
                              />
                            </div>
                            {/* ______________________________________________________________________________________________________________*/}
                            {/* ________________________________________________________________________________________________________________ */}
                            <div class="pt-4 flex items-center space-x-4">
                              <button type="submit" class=" flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none border-4 border-black bg-[#40695b] hover:bg-[#072D20] dark:bg-[#072D20] dark:hover:bg-[#40695b] hover:text-white">
                                <b>Create</b>
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                      {submitted && (
                        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
                          <div className="p-6 bg-[#B2BEBA] rounded-md">
                            <p className="text-xl font-bold text-gray-800">Successfully submitted!</p>
                            <button onClick={handleOkayClick} className="px-4 py-2 mt-4 text-white bg-[#072D20] rounded-md focus:outline-none">Okay</button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
          <Footer />
        </div>
      </div>

    </div>


  );

}