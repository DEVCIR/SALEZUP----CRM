import PropTypes from "prop-types";
import React, { useState, useEffect } from 'react';


const FrameComponent1 = ({ className = "" }) => {

  const [teamLeader, setTeamLeader] = useState([]);



  useEffect(() => {
    fetch('http://localhost:8000/api/team_leaders')
      .then(response => response.json())
      .then(data => {
        const activeTeamLeader = data.filter(teamleader => teamleader.active === "approved");
        setTeamLeader(activeTeamLeader);
      })
      .catch(error => console.error('Error fetching team leader:', error));
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
              <th className="border border-gray-600 px-4 py-2">ID</th>
              <th className="border border-gray-600 px-4 py-2">Name</th>
              <th className="border border-gray-600 px-4 py-2">Surname</th>
              <th className="border border-gray-600 px-4 py-2">Start Date</th>
              <th className="border border-gray-600 px-4 py-2">Team ID</th>
              <th className="border border-gray-600 px-4 py-2">Manager</th>
              <th className="border border-gray-600 px-4 py-2">Commission</th>
              <th className="border border-gray-600 px-4 py-2">Target</th>
              <th className="border border-gray-600 px-4 py-2">Frequency</th>
              <th className="border border-gray-600 px-4 py-2">Campaign</th>
              <th className="border border-gray-600 px-4 py-2">Active</th>
              
           
            </tr>
          </thead>
          <tbody>
            {teamLeader.map(teamleader => (
              <tr key={teamleader.id}>
                <td className="border border-gray-600 px-4 py-2">{teamleader.id}</td>
                <td className="border border-gray-600 px-4 py-2">{teamleader.name}</td>
                <td className="border border-gray-600 px-4 py-2">{teamleader.surname}</td>
                <td className="border border-gray-600 px-4 py-2">{teamleader.start_date}</td>
                <td className="border border-gray-600 px-4 py-2">{teamleader.team_id}</td>
                <td className="border border-gray-600 px-4 py-2">{teamleader.manager}</td>
                <td className="border border-gray-600 px-4 py-2">{teamleader.commission}</td>
                <td className="border border-gray-600 px-4 py-2">{teamleader.target}</td>
                <td className="border border-gray-600 px-4 py-2">{teamleader.frequency}</td>
                <td className="border border-gray-600 px-4 py-2">{teamleader.campaign}</td>
                <td className="border border-gray-600 px-4 py-2">{teamleader.active}</td>
                
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
          Current Team Leaders
        </h2>
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq1050:flex-wrap">
          <button className="cursor-pointer [border:none] pt-[15px] px-6 pb-3.5 bg-seagreen rounded-4xs flex flex-row items-start justify-start whitespace-nowrap z-[3] hover:bg-lightseagreen">
            <div className="h-[29px] w-[120.1px] relative rounded-4xs bg-seagreen hidden" />
            <b className="h-0 relative text-mini leading-[0%] font-bold font-nunito text-black text-left inline-block min-w-[72px] z-[1]">
              All Teams
            </b>
          </button>
          <nav className="m-0 flex flex-row items-start justify-start gap-[58px] max-w-full whitespace-nowrap mq750:flex-wrap">
            <button className="cursor-pointer [border:none] pt-[15px] px-[30px] pb-3.5 bg-darkslategray rounded-4xs flex flex-row items-start justify-start z-[3] hover:bg-teal-200">
              <div className="h-[29px] w-[120.1px] relative rounded-4xs bg-darkslategray hidden" />
              <b className="h-0 relative text-mini leading-[0%] font-bold font-nunito text-black text-left inline-block min-w-[60px] z-[1]">
                Inobund
              </b>
            </button>
            <button className="cursor-pointer [border:none] pt-[15px] px-[23px] pb-3.5 bg-darkslategray rounded-4xs flex flex-row items-start justify-start z-[3] hover:bg-teal-200">
              <div className="h-[29px] w-[120.1px] relative rounded-4xs bg-darkslategray hidden" />
              <b className="h-0 relative text-mini leading-[0%] font-bold font-nunito text-black text-left inline-block min-w-[74px] z-[1]">
                Outbound
              </b>
            </button>
            <button className="cursor-pointer [border:none] pt-[15px] px-[34px] pb-3.5 bg-darkslategray rounded-4xs flex flex-row items-start justify-start z-[3] hover:bg-teal-200">
              <div className="h-[29px] w-[120.1px] relative rounded-4xs bg-darkslategray hidden" />
              <b className="h-0 relative text-mini leading-[0%] font-bold font-nunito text-black text-left inline-block min-w-[52px] z-[1]">
                Vetting
              </b>
            </button>
            <button className="cursor-pointer [border:none] pt-[15px] pb-3.5 pr-[43px] pl-11 bg-darkslategray rounded-4xs flex flex-row items-start justify-start z-[3] hover:bg-teal-200">
              <div className="h-[29px] w-[120.1px] relative rounded-4xs bg-darkslategray hidden" />
              <b className="h-0 relative text-mini leading-[0%] font-bold font-nunito text-black text-left inline-block min-w-[33px] z-[1]">
                BDR
              </b>
            </button>
          </nav>
        </div>
      </div>
    </div>

    
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
