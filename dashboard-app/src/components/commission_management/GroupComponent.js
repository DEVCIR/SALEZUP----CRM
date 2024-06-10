import AgentTargetValue from "./AgentTargetValue";
import PropTypes from "prop-types";

const GroupComponent = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch shadow-[0px_20px_26.4px_-6px_rgba(0,_0,_0,_0.25)] rounded-16xl bg-white box-border flex flex-col items-start justify-start pt-[26px] px-[31px] pb-[59px] gap-[45px] max-w-full z-[2] text-left text-xl text-black font-inter border-t-[3.5px] border-solid border-silver-100 ${className}`}
    >
      <div className="w-[1011px] h-[478.5px] relative shadow-[0px_20px_26.4px_-6px_rgba(0,_0,_0,_0.25)] rounded-16xl bg-white box-border hidden max-w-full border-t-[3.5px] border-solid border-silver-100" />
      <h2 className="m-0 w-[283px] relative text-inherit font-semibold font-inherit inline-block z-[1] mq450:text-base">
        Set Target : Team Leaders
      </h2>
      <div className="w-[913.8px] flex flex-row items-start justify-between gap-[20px] max-w-full text-base text-gray-100 mq900:flex-wrap">
        <div className="w-[220px] flex flex-row items-start justify-start">
          <div className="flex-1 flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
            <div className="self-stretch relative font-medium z-[2]">
              Select Team:
            </div>
          </div>
          <div className="w-[114px] flex flex-col items-start justify-start ml-[-106px] text-xs text-black">
            <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[29px] text-3xs">
              <div className="flex flex-row items-start justify-start shrink-0 [debug_commit:bf4bc93] z-[1]">
                <img
                  className="h-[33px] w-28 relative rounded-[5.99px]"
                  loading="lazy"
                  alt=""
                  src="/bg.svg"
                />
                <div className="w-[66px] relative hidden">List of Agents</div>
                <div className="w-8 relative text-xs font-medium text-green-primary text-right hidden">
                  Show
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-t-8xs rounded-b-none bg-silver-200 flex flex-row items-start justify-start pt-3.5 px-[22px] pb-1 shrink-0 [debug_commit:bf4bc93] z-[3] mt-[-33px]">
              <div className="h-[33px] w-28 relative rounded-t-8xs rounded-b-none bg-silver-200 hidden" />
              <div className="w-[59px] relative inline-block shrink-0 z-[4]">
                Inbound
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 mt-[-33px]">
              <div className="flex-1 flex flex-col items-start justify-start pt-9 pb-2.5 pr-[19px] pl-5 relative gap-[5px] shrink-0 [debug_commit:bf4bc93]">
                <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-t-8xs rounded-b-3xs bg-whitesmoke-300 box-border z-[2] border-t-[1px] border-solid border-silver-100" />
                <div className="self-stretch relative z-[3]">Outbound</div>
                <div className="w-[52px] relative inline-block z-[3]">
                  Vetting
                </div>
                <div className="w-8 relative inline-block z-[3]">BDR</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[274px] flex flex-row items-start justify-start py-0 pr-[25px] pl-0 box-border">
          <div className="flex-1 flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
            <div className="self-stretch relative font-medium z-[2]">
              Select Month:
            </div>
          </div>
          <div className="w-[122px] flex flex-col items-start justify-start ml-[-85px] text-3xs text-black">
            <div className="flex flex-row items-start justify-start z-[1]">
              <img
                className="h-[33px] w-[119px] relative rounded-[5.99px]"
                alt=""
                src="/bg-3.svg"
              />
              <div className="w-[66px] relative hidden">List of Agents</div>
              <div className="w-8 relative text-xs font-medium text-green-primary text-right hidden">
                Show
              </div>
            </div>
            <AgentTargetValue propWidth="unset" propAlignSelf="stretch" />
          </div>
        </div>
        <div className="flex flex-row items-start justify-start">
          <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
            <div className="relative font-medium inline-block min-w-[60px] z-[2]">
              Target:
            </div>
          </div>
          <div className="flex flex-col items-end justify-start gap-[257px] text-3xs text-black">
            <div className="flex flex-row items-start justify-end py-0 pr-[35px] pl-0">
              <div className="flex flex-row items-start justify-start py-0 pr-8 pl-0">
                <div className="flex flex-row items-start justify-start z-[1]">
                  <img
                    className="h-[33px] w-[114px] relative rounded-[5.99px]"
                    loading="lazy"
                    alt=""
                    src="/bg-2.svg"
                  />
                  <div className="w-[66px] relative hidden">List of Agents</div>
                  <div className="w-8 relative text-xs font-medium text-green-primary text-right hidden">
                    Show
                  </div>
                </div>
                <div className="w-[51px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border ml-[-83px] text-center text-base">
                  <div className="self-stretch relative font-medium inline-block min-w-[51px] whitespace-nowrap z-[2]">
                    $1000
                  </div>
                </div>
              </div>
            </div>
            <button className="cursor-pointer [border:none] pt-[15px] pb-3.5 pr-3 pl-[13px] bg-darkslategray rounded-4xs flex flex-row items-start justify-start z-[1] hover:bg-teal-200">
              <div className="h-[29px] w-[85.8px] relative rounded-4xs bg-darkslategray hidden" />
              <b className="h-0 relative text-mini leading-[0%] font-bold font-nunito text-white text-left inline-block min-w-[60px] z-[1]">
                Confirm
              </b>
            </button>
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
