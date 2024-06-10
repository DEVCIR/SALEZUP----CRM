import { useMemo } from "react";
import PropTypes from "prop-types";

const AgentTargetValue = ({ className = "", propWidth, propAlignSelf }) => {
  const agentTargetValueStyle = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  return (
    <div
      className={`w-[122px] flex flex-col items-start justify-start text-left text-xs text-black font-inter ${className}`}
      style={agentTargetValueStyle}
    >
      <div className="w-[119px] rounded-t-8xs rounded-b-none bg-silver-200 flex flex-row items-start justify-start pt-2.5 px-[26px] pb-2 box-border z-[5]">
        <div className="h-[33px] w-[119px] relative rounded-t-8xs rounded-b-none bg-silver-200 hidden" />
        <div className="w-[59px] relative inline-block shrink-0 z-[6]">
          January
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[3px] mt-[-33px]">
        <div className="flex-1 flex flex-col items-start justify-start py-8 px-[23px] relative gap-[3px]">
          <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-t-8xs rounded-b-3xs bg-whitesmoke-300 box-border z-[4] border-t-[1px] border-solid border-silver-100" />
          <div className="flex flex-row items-start justify-start pt-0 px-0 pb-1">
            <div className="relative inline-block min-w-[51px] z-[6]">
              February
            </div>
          </div>
          <div className="w-[52px] relative inline-block z-[5]">March</div>
          <div className="w-8 relative inline-block z-[5]">April</div>
          <div className="w-8 flex flex-row items-start justify-start pt-0 px-0 pb-[3px] box-border">
            <div className="flex-1 relative z-[5]">May</div>
          </div>
          <div className="w-[59px] flex flex-row items-start justify-start pt-0 px-0 pb-1 box-border">
            <div className="flex-1 relative z-[5]">June</div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-1">
            <div className="flex-1 relative z-[5]">July</div>
          </div>
          <div className="w-[52px] flex flex-row items-start justify-start pt-0 px-0 pb-[3px] box-border">
            <div className="flex-1 relative z-[5]">August</div>
          </div>
          <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[3px]">
            <div className="relative inline-block min-w-[63px] z-[5]">
              September
            </div>
          </div>
          <div className="w-[57px] flex flex-row items-start justify-start pt-0 px-0 pb-1 box-border">
            <div className="flex-1 relative z-[5]">October</div>
          </div>
          <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[3px]">
            <div className="relative inline-block min-w-[63px] z-[5]">
              November
            </div>
          </div>
          <div className="self-stretch relative z-[5]">December</div>
        </div>
      </div>
    </div>
  );
};

AgentTargetValue.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
};

export default AgentTargetValue;
