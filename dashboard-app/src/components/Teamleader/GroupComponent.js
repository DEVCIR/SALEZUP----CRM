import PropTypes from "prop-types";
import React, { useState, useEffect } from 'react';

const GroupComponent = ({ className = "" }) => {



  const [teamLeader, setTeamLeader] = useState([]);
  const [teams, setTeams] = useState([]);
  const [teamType, setTeamType] = useState("teams");

  const [managers, setManagers] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8000/api/admin-registrations')
      .then(response => response.json())
      .then(data => setManagers(data))
      .catch(error => console.error('Error fetching teams:', error));
  }, []);


  const getManagerNameById = (id) => {
    const manager = managers.find(manager => manager.id == id);
    return manager ? manager.first_name : "Unknown";
  };

  useEffect(() => {
    fetch('http://localhost:8000/api/team_leaders')
      .then(response => response.json())
      .then(data => {
        const activeTeamLeader = data.filter(teamleader => teamleader.active === "pending");
        setTeamLeader(activeTeamLeader);
      })
      .catch(error => console.error('Error fetching Team Leader:', error));
  }, []);


  useEffect(() => {
    fetch('http://localhost:8000/api/teams')
      .then(response => response.json())
      .then(data => setTeams(data))
      .catch(error => console.error('Error fetching teams:', error));
  }, []);

  const getTeamNameById = (id) => {
    const team = teams.find(team => team.id === id);
    return team ? team.team_name : "Unknown";
  };

  const filterTeamLeaderByTeamName = (teamName) => {
    const team = teams.find(t => t.team_name === teamName);
    if (team) {
      return teamLeader.filter(teamleader => teamleader.team_id === team.id);
    }
    return [];
  };

  const renderTable = (team_leader) => (
    <table className="table-auto w-full border-collapse border border-gray-800">
      <thead>
        <tr className="[background:linear-gradient(89.05deg,_#f5f5f5,_rgba(45,_128,_133,_0.35)_88.41%)]">
          <th className="border border-gray-600 px-4 py-2">ID</th>
          <th className="border border-gray-600 px-4 py-2">Name</th>
          <th className="border border-gray-600 px-4 py-2">Surname</th>
          <th className="border border-gray-600 px-4 py-2">Team Name</th>
          <th className="border border-gray-600 px-4 py-2">Manager</th>
          <th className="border border-gray-600 px-4 py-2">Commision</th>
          <th className="border border-gray-600 px-4 py-2">Target</th>
          <th className="border border-gray-600 px-4 py-2">Target Value</th>
          <th className="border border-gray-600 px-4 py-2">Frequency</th>
          <th className="border border-gray-600 px-4 py-2">Campaign</th>
          <th className="border border-gray-600 px-4 py-2">Active</th>
          <th className="border border-gray-600 px-4 py-2">Start Date</th>
        </tr>
      </thead>
      <tbody>
        {team_leader.map((team_leader) => (
          <tr key={team_leader.id}>
            <td className="border border-gray-600 px-4 py-2">{team_leader.id}</td>
            <td className="border border-gray-600 px-4 py-2">{team_leader.name}</td>
            <td className="border border-gray-600 px-4 py-2">{team_leader.surname}</td>
            <td className="border border-gray-600 px-4 py-2">{getTeamNameById(team_leader.team_id)}</td>
            <td className="border border-gray-600 px-4 py-2">{getManagerNameById(team_leader.manager)}</td>
            <td className="border border-gray-600 px-4 py-2">{team_leader.commission}</td>
            <td className="border border-gray-600 px-4 py-2">{team_leader.target}</td>
            <td className="border border-gray-600 px-4 py-2">{team_leader.target_value}</td>
            <td className="border border-gray-600 px-4 py-2">{team_leader.frequency}</td>
            <td className="border border-gray-600 px-4 py-2">{team_leader.campaign}</td>
            <td className="border border-gray-600 px-4 py-2">{team_leader.active}</td>
            <td className="border border-gray-600 px-4 py-2">{team_leader.start_date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );


  return (
   
    <div
    className={`self-stretch h-[427.5px] bg-white relative shadow-[0px_20px_26.4px_-6px_rgba(0,_0,_0,_0.25)] rounded-16xl box-border max-w-full z-[2] text-center text-xs text-black font-inter border-t-[3.5px] border-solid border-silver mq1050:h-auto mq1050:min-h-[424] ${className}`}
  >
    <div className="container mx-auto px-4 py-8 mt-24">
      <div className="overflow-x-auto">
        {teamType === "teams" && renderTable(teamLeader)}
        {teamType === "BDR" && renderTable(filterTeamLeaderByTeamName("BDR"))}
        {teamType === "Vetting" && renderTable(filterTeamLeaderByTeamName("Vetting"))}
        {teamType === "Inbound" && renderTable(filterTeamLeaderByTeamName("Inbound"))}
        {teamType === "Outbound" && renderTable(filterTeamLeaderByTeamName("Outbound"))}
      </div>
    </div>
    <div className="absolute top-[24px] left-[40px] w-[869.3px] flex flex-col items-start justify-start gap-[18px] max-w-full text-left text-xl">
      <h2 className="m-0 w-[283px] relative text-inherit font-semibold font-inherit inline-block z-[3] text-2xl">
        Pending Team Leaders
      </h2>
      <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq1050:flex-wrap">
        <button
          onClick={() => setTeamType("teams")}
          className={`cursor-pointer [border:none] pt-[15px] px-6 pb-3.5 ${
            teamType === "teams" ? "bg-[#067457]" : "bg-green-600"
          } rounded-lg flex flex-row items-start justify-start whitespace-nowrap z-[3] hover:bg-green-300`}
        >
          <div className="h-[29px] w-[120.1px] relative rounded-4xs bg-seagreen hidden" />
          <b className="h-0 relative text-mini leading-[0%] font-bold font-nunito text-white text-left inline-block min-w-[72px] z-[1]">
            All Teams
          </b>
        </button>
        <button
          onClick={() => setTeamType("BDR")}
          className={`cursor-pointer [border:none] pt-[15px] px-6 pb-3.5 ${
            teamType === "BDR" ? "bg-[#067457]" : "bg-green-600"
          } rounded-lg flex flex-row items-start justify-start whitespace-nowrap z-[3] hover:bg-green-300`}
        >
          <div className="h-[29px] w-[120.1px] relative rounded-4xs bg-seagreen hidden" />
          <b className="h-0 relative text-mini leading-[0%] font-bold font-nunito text-white text-left inline-block min-w-[72px] z-[1]">
            BDR
          </b>
        </button>
        <button
          onClick={() => setTeamType("Vetting")}
          className={`cursor-pointer [border:none] pt-[15px] px-6 pb-3.5 ${
            teamType === "Vetting" ? "bg-[#067457]" : "bg-green-600"
          } rounded-lg flex flex-row items-start justify-start whitespace-nowrap z-[3] hover:bg-green-300`}
        >
          <div className="h-[29px] w-[120.1px] relative rounded-4xs bg-seagreen hidden" />
          <b className="h-0 relative text-mini leading-[0%] font-bold font-nunito text-white text-left inline-block min-w-[72px] z-[1]">
            Vetting
          </b>
        </button>
        <button
          onClick={() => setTeamType("Inbound")}
          className={`cursor-pointer [border:none] pt-[15px] px-6 pb-3.5 ${
            teamType === "Inbound" ? "bg-[#067457]" : "bg-green-600"
          } rounded-lg flex flex-row items-start justify-start whitespace-nowrap z-[3] hover:bg-green-300`}
        >
          <div className="h-[29px] w-[120.1px] relative rounded-4xs bg-seagreen hidden" />
          <b className="h-0 relative text-mini leading-[0%] font-bold font-nunito text-white text-left inline-block min-w-[72px] z-[1]">
            Inbound
          </b>
        </button>
        <button
          onClick={() => setTeamType("Outbound")}
          className={`cursor-pointer [border:none] pt-[15px] px-6 pb-3.5 ${
            teamType === "Outbound" ? "bg-[#067457]" : "bg-green-600"
          } rounded-lg flex flex-row items-start justify-start whitespace-nowrap z-[3] hover:bg-green-300`}
        >
          <div className="h-[29px] w-[120.1px] relative rounded-4xs bg-seagreen hidden" />
          <b className="h-0 relative text-mini leading-[0%] font-bold font-nunito text-white text-left inline-block min-w-[72px] z-[1]">
            Outbound
          </b>
        </button>
      </div>
    </div>
  </div>

  );
};



export default GroupComponent;
