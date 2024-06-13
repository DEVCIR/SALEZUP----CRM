import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import AgentTargetValue from "./AgentTargetValue";
import PropTypes from "prop-types";
import { useState } from "react";

const AgentTarget = ({ className = "" }) => {
  const [selectedTeam, setSelectedTeam] = useState('Inbound');

  const handleSelectChange = (event) => {
    setSelectedTeam(event.target.value);
  };

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const [selectedMonth, setSelectedMonth] = useState('');

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const [targetValue, setTargetValue] = useState('');

  const handleInputChange = (event) => {
    setTargetValue(event.target.value);
  };

  const [isAppliedToAll, setIsAppliedToAll] = useState(false);

  const handleButtonClick = () => {
    setIsAppliedToAll(!isAppliedToAll);
  };


  return (
    <div
      className={`self-stretch shadow-[0px_20px_26.4px_-6px_rgba(0,_0,_0,_0.25)] rounded-16xl bg-white box-border flex flex-col items-end justify-start pt-[22px] pb-[66px] pr-[66px] pl-[30px] gap-[103px] max-w-full z-[2] text-left text-xl text-black font-inter border-t-[3.5px] border-solid border-silver-100 ${className}`}
    >
      <div className="w-[1011px] h-[938.5px] relative shadow-[0px_20px_26.4px_-6px_rgba(0,_0,_0,_0.25)] rounded-16xl bg-white box-border hidden max-w-full border-t-[3.5px] border-solid border-silver-100" />
      <div className="self-stretch flex flex-row items-start justify-end py-0 pr-1.5 pl-0 box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[45px] max-w-full">
          <div className="w-[285px] flex flex-row items-start justify-start py-0 px-px box-border">
            <h2 className="m-0 flex-1 relative text-inherit font-semibold font-inherit z-[3] mq450:text-base">
              Set Target : Agents
            </h2>
          </div>
          <div className="flex flex-row gap-3">
            <div className="text-sm font-bold z-[4] flex items-center">
              <h1 className="text-black">Select Team: </h1>
              <select
                value={selectedTeam}
                onChange={handleMonthChange}
                className="ml-2 border border-gray-400 rounded-md px-0 py-0 bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors duration-300"
              >
                <option value="Inbound">Inbound</option>
                <option value="Outbound">Outbound</option>
                <option value="Vetting">Vetting</option>
                <option value="BDR">BDR</option>
              </select>
            </div>
            <div className="text-sm font-bold z-[4] flex items-center">
              <h1 className="text-black">Select Month: </h1>
              <select
                value={selectedMonth}
                onChange={handleSelectChange}
                className="ml-2 border border-gray-400 rounded-md px-0 py-0 bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors duration-300"
              >
                <option value="">Select Month</option>
                {months.map((month, index) => (
                  <option key={index} value={month}>{month}</option>
                ))}
              </select>
            </div>
            <div className="text-sm font-bold z-[4] flex items-center">
              <div className="inline-block min-w-[60px] z-[3]">
                <h1 className="text-black">Target:</h1>
              </div>
              <input
                type="text"
                value={targetValue}
                onChange={handleInputChange}
                className="ml-2 border border-gray-400 rounded-md w-32 py-1 bg-gray-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors duration-300"
                placeholder="Enter target"
              />
            </div>
            <div className="flex flex-col items-start justify-start gap-[2px]">
              <div className="flex-1 flex flex-row items-start justify-start pt-1 px-0 pb-0 gap-3">
                <div className="relative z-[3]">
                  <h1 className="text-black text-sm font-bold">Apply to all:</h1>
                </div>
                <div
                  className={`w-[73px] flex rounded-lg flex-row items-center justify-center py-[3px] px-[5px] box-border gap-[14px] z-[3] text-mini text-white font-nunito ${isAppliedToAll ? 'bg-green-600' : 'bg-red-600'}`}
                  onClick={handleButtonClick}
                >
                  {isAppliedToAll ? (
                    <>
                      <div className={`h-[17px] w-[17px] relative rounded-[50%] z-[1] ${isAppliedToAll ? 'bg-green-300' : 'bg-pink-300'}`} />
                      <button className="h-0 leading-[0%] text-sm font-bold inline-block z-[1]">
                        {isAppliedToAll ? 'Yes' : 'No'}
                      </button>
                    </>
                  ) : (
                    <>
                      <button className="h-0 leading-[0%] text-sm font-bold inline-block z-[1]">
                        {isAppliedToAll ? 'Yes' : 'No'}
                      </button>
                      <div className={`h-[17px] w-[17px] relative rounded-[50%] z-[1] ${isAppliedToAll ? 'bg-green-300' : 'bg-pink-300'}`} />
                    </>

                  )}
                </div>
              </div>
            </div>
          </div>
          {!isAppliedToAll && (
            <div className="w-full flex flex-col items-end justify-end">
              <div className="-mt-8">
                <div className="bg-white border rounded-lg shadow-lg p-2">
                  <table className="text-sm mt-2">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Enter Target</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Alex Parker</td>
                        <td>$8000</td>
                      </tr>
                      <tr>
                        <td>Kevin Petersen</td>
                        <td>$6000</td>
                      </tr>
                      <tr>
                        <td>David Warner</td>
                        <td>$7000</td>
                      </tr>
                      <tr>
                        <td>Smith Will</td>
                        <td>$5000</td>
                      </tr>
                      <tr>
                        <td>Sarrah John</td>
                        <td>$8000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

AgentTarget.propTypes = {
  className: PropTypes.string,
};

export default AgentTarget;