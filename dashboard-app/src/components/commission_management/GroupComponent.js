import { useState } from "react";
import AgentTargetValue from "./AgentTargetValue";
import PropTypes from "prop-types";

const GroupComponent = ({ className = "" }) => {

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
              Set Target : Team Leaders
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
          </div>
        </div>
      </div>

    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent;