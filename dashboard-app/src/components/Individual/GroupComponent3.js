import PropTypes from "prop-types";

const GroupComponent3 = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[629px] left-[4px] bg-gray-300 w-[345px] flex flex-col items-start justify-start pt-4 px-[31px] pb-[17px] box-border gap-[20px] max-w-full z-[2] text-left text-xl text-white font-nunito ${className}`}
    >
      <div className="w-[345px] h-[201px] relative bg-gray-300 hidden max-w-full" />
      <div className="w-[234.6px] flex flex-row items-start justify-start py-0 px-[5px] box-border">
        <b className="flex-1 relative z-[1] mq450:text-base">Individual</b>
      </div>
      <div className="w-[226.2px] flex flex-row items-start justify-start py-0 px-px box-border">
        <b className="flex-1 relative z-[1] mq450:text-base">Team Vs Team</b>
      </div>
      <b className="w-[224.1px] relative inline-block z-[1] mq450:text-base">
        Combined Team
      </b>
      <div className="w-[228.1px] flex flex-row items-start justify-start py-0 px-0.5 box-border">
        <b className="flex-1 relative z-[1] mq450:text-base">Head to Head</b>
      </div>
    </div>
  );
};

GroupComponent3.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent3;
