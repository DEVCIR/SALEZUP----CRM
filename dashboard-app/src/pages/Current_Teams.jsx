import PropTypes from "prop-types";
import React, { useState, useEffect } from 'react';


const Current_Teams = ({ className = "" }) => {

//   const [salesAgents, setSalesAgents] = useState([]);

  const [currentTeams, setCurrentTeams] = useState([]);



  useEffect(() => {
    fetch('http://localhost:8000/api/teams')
      .then(response => response.json())
      .then(data => {
        const activeCurrentTeams = data.filter(currentteams => currentteams.status === "active");
        setCurrentTeams(activeCurrentTeams);
      })
      .catch(error => console.error('Error fetching Current Teams:', error));
  }, []);

  return (
   
    <div
      className={`self-stretch h-[427.5px] bg-white relative shadow-[0px_20px_26.4px_-6px_rgba(0,_0,_0,_0.25)] rounded-16xl box-border max-w-full z-[2] text-center text-xs text-black font-inter border-t-[3.5px] border-solid border-silver mq1050:h-auto mq1050:min-h-[424] ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] shadow-[0px_20px_26.4px_-6px_rgba(0,_0,_0,_0.25)] rounded-16xl bg-white box-border w-full h-full hidden border-t-[3.5px] border-solid border-silver" />
      
    {/* ---------------------------------  Table ----------------------------------------- */}
   

    <div className="container mx-auto px-4 py-8 mt-24">
      
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-800 ">
          <thead>
            <tr className="[background:linear-gradient(89.05deg,_#f5f5f5,_rgba(45,_128,_133,_0.35)_88.41%)]">

            <th className="border border-gray-600 px-4 py-2">Campaign</th>
              <th className="border border-gray-600 px-4 py-2">Team </th>
              <th className="border border-gray-600 px-4 py-2">Team lead</th>
              <th className="border border-gray-600 px-4 py-2">Agents</th>
              <th className="border border-gray-600 px-4 py-2">Status</th>
             
              
              
              
           
            </tr>
          </thead>
          <tbody>
            {currentTeams.map(currentteams => (
              <tr key={currentteams.id}>
               
               <td className="border border-gray-600 px-4 py-2">{currentteams.campaign}</td>
                <td className="border border-gray-600 px-4 py-2">{currentteams.team_name}</td>
                <td className="border border-gray-600 px-4 py-2">{currentteams.team_leader_id}</td>
                <td className="border border-gray-600 px-4 py-2">{currentteams.sales_agents}</td>
                <td className="border border-gray-600 px-4 py-2">{currentteams.status}</td>
                
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>

    {/* -------------------------------------- Table ----------------------------------------------- */}


      <div className="absolute top-[128px] left-[136px] w-0 h-[254px] z-[5]" />
      <div className="absolute top-[128px] left-[266px] w-0 h-[254px] z-[7]" />
      <div className="absolute top-[128px] left-[396px] w-0 h-[254px] z-[7]" />
      <div className="absolute top-[128px] left-[527px] w-0 h-[254px] z-[7]" />
      <div className="absolute top-[128px] left-[657px] w-0 h-[254px] z-[7]" />
      <div className="absolute top-[128px] left-[788px] w-0 h-[254px] z-[7]" />
      <div className="absolute top-[128px] left-[894px] w-0 h-[254px] z-[7]" />
      <div className="absolute top-[24px] left-[40px] w-[869.3px] flex flex-col items-start justify-start gap-[18px] max-w-full text-left text-xl">
        <h2 className="m-0 w-[283px] relative text-inherit font-semibold font-inherit inline-block z-[3] text-2xl">
          Current Teams
        </h2>
        

      </div>
    </div>

    
  );
};

Current_Teams.propTypes = {
  className: PropTypes.string,
};

export default Current_Teams;
