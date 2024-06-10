import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "", campaign, fullName }) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[12.8px] min-w-[159px] text-left text-base text-black font-inter ${className}`}
    >
      <div className="self-stretch relative font-medium z-[3]">{campaign}</div>
      <div className="w-[170px] flex flex-row items-start justify-start pt-[9.2px] px-3 pb-[11.7px] box-border relative z-[3] text-3xs text-black">
        <img
          className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[5.99px] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/bg.svg"
        />
        <div className="relative inline-block min-w-[108px] z-[1]">
          {fullName}
        </div>
        <div className="w-8 relative text-xs font-medium text-green-primary text-right hidden z-[2]">
          Show
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
  campaign: PropTypes.string,
  fullName: PropTypes.string,
};

export default FrameComponent2;
