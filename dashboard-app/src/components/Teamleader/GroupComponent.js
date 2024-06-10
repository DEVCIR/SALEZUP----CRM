import PropTypes from "prop-types";

const GroupComponent = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 shadow-[0px_20px_26.4px_-6px_rgba(0,_0,_0,_0.25)] rounded-16xl bg-white box-border flex flex-col items-start justify-start pt-[26px] pb-[52px] pr-[21px] pl-[30px] relative gap-[15px] max-w-full z-[2] text-left text-xl text-black font-inter border-t-[3.5px] border-solid border-silver-100 ${className}`}
    >
      <div className="w-[1011px] h-[322.5px] relative shadow-[0px_20px_26.4px_-6px_rgba(0,_0,_0,_0.25)] rounded-16xl bg-white box-border hidden max-w-full z-[0] border-t-[3.5px] border-solid border-silver-100" />
      <div className="w-[354px] flex flex-row items-start justify-start py-0 px-[17px] box-border max-w-full">
        <b className="flex-1 relative font-semibold z-[1] mq450:text-base">
          Pending Requests
        </b>
      </div>
      <div className="w-0 h-[254px] absolute !m-[0] right-[144px] bottom-[0px] z-[1]" />
      <div className="w-0 h-[254px] absolute !m-[0] bottom-[0px] left-[126px] z-[3]" />
      <div className="w-[933px] h-0 absolute !m-[0] bottom-[40px] left-[30px] z-[4]" />
      <div className="w-0 h-[254px] absolute !m-[0] bottom-[0px] left-[256px] z-[5]" />
      <div className="w-0 h-[254px] absolute !m-[0] bottom-[0px] left-[386px] z-[5]" />
      <div className="w-0 h-[254px] absolute !m-[0] right-[494px] bottom-[0px] z-[5]" />
      <div className="w-0 h-[254px] absolute !m-[0] right-[364px] bottom-[0px] z-[5]" />
      <div className="w-0 h-[254px] absolute !m-[0] right-[233px] bottom-[0px] z-[5]" />
      <div className="w-0 h-[254px] absolute !m-[0] right-[127px] bottom-[0px] z-[5]" />
      <div className="self-stretch flex flex-col items-start justify-start max-w-full text-center text-xs">
        <div className="self-stretch shadow-[0px_1px_1.04px_rgba(0,_0,_0,_0.25)] rounded-[7.81px] [background:linear-gradient(89.05deg,_#f5f5f5,_rgba(45,_128,_133,_0.35)_88.41%)] overflow-x-auto flex flex-row items-start justify-start py-[11px] pr-2.5 pl-4 z-[2]">
          <div className="h-11 w-[960px] relative shadow-[0px_1px_1.04px_rgba(0,_0,_0,_0.25)] rounded-[7.81px] [background:linear-gradient(89.05deg,_#f5f5f5,_rgba(45,_128,_133,_0.35)_88.41%)] shrink-0 hidden z-[1]" />
          <div className="w-[246.5px] shrink-0 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
            <div className="w-[198px] flex flex-row items-start justify-start gap-[18px]">
              <div className="w-9 relative leading-[20px] inline-block shrink-0 min-w-[36px] z-[3]">
                Name
              </div>
              <div className="flex-[0.8438] flex flex-col items-start justify-start py-0 pr-2.5 pl-0">
                <div className="self-stretch relative leading-[20px] inline-block min-w-[54px] z-[4]">
                  Surname
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-px px-0 pb-0">
                <div className="self-stretch relative leading-[20px] inline-block min-w-[62px] z-[3]">
                  Start Date
                </div>
              </div>
            </div>
          </div>
          <div className="w-[99.5px] shrink-0 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border ml-[-5.4px]">
            <div className="w-[33px] relative leading-[20px] inline-block min-w-[33px] z-[3]">
              Team
            </div>
          </div>
          <div className="w-[62.6px] shrink-0 flex flex-col items-start justify-start pt-px pb-0 pr-2 pl-0 box-border ml-[-5.4px]">
            <div className="self-stretch relative leading-[20px] inline-block min-w-[54px] z-[6]">
              Manager
            </div>
          </div>
          <div className="w-[148px] shrink-0 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border ml-[-5.4px]">
            <div className="self-stretch relative leading-[20px] z-[6]">
              Commission
            </div>
          </div>
          <div className="w-[93.8px] shrink-0 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border ml-[-5.4px]">
            <div className="w-[47px] relative leading-[20px] inline-block z-[7]">
              Target
            </div>
          </div>
          <div className="w-[87.8px] shrink-0 flex flex-col items-start justify-start pt-px pb-0 pr-[23px] pl-0 box-border ml-[-5.4px]">
            <div className="self-stretch relative leading-[20px] inline-block min-w-[64px] z-[3]">
              Frequency
            </div>
          </div>
          <div className="w-[228.2px] shrink-0 flex flex-row items-start justify-start gap-[13.6px] ml-[-5.4px]">
            <div className="w-[66px] flex flex-col items-start justify-start py-0 pr-1 pl-0 box-border">
              <div className="self-stretch relative leading-[20px] inline-block min-w-[61px] z-[6]">
                Campaign
              </div>
            </div>
            <div className="w-[39px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
              <div className="self-stretch relative leading-[20px] inline-block min-w-[39px] z-[3]">
                Active
              </div>
            </div>
            <div className="flex-1 relative text-sm leading-[20px] inline-block min-w-[96px] z-[6]">
              Resend Invite
            </div>
          </div>
        </div>
        <div className="self-stretch shadow-[0px_9px_5.4px_-2px_rgba(0,_0,_0,_0.13)] rounded-[7.81px] bg-whitesmoke-100 flex flex-col items-end justify-start pt-[11px] pb-7 pr-4 pl-0 box-border gap-[18px] max-w-full z-[2]">
          <div className="self-stretch h-[158px] relative shadow-[0px_9px_5.4px_-2px_rgba(0,_0,_0,_0.13)] rounded-[7.81px] bg-whitesmoke-100 hidden" />
          <div className="w-[923px] flex flex-row items-start justify-between gap-[20px] max-w-full mq1050:flex-wrap">
            <div className="w-[33.8px] flex flex-col items-start justify-start pt-px pb-0 pr-[5px] pl-0 box-border">
              <div className="self-stretch relative leading-[20px] inline-block min-w-[28.3px] z-[3]">
                Mike
              </div>
            </div>
            <div className="w-[47.3px] flex flex-col items-start justify-start pt-px pb-0 pr-3 pl-0 box-border">
              <div className="self-stretch relative leading-[20px] inline-block min-w-[34.6px] z-[4]">
                Smith
              </div>
            </div>
            <div className="w-[71.1px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
              <div className="self-stretch relative leading-[20px] inline-block min-w-[71.1px] z-[3]">
                01-01-2023
              </div>
            </div>
            <div className="w-[63.2px] flex flex-col items-start justify-start py-0 pr-3.5 pl-0 box-border">
              <div className="self-stretch relative leading-[20px] inline-block min-w-[49.2px] z-[3]">
                Inbound
              </div>
            </div>
            <div className="w-[99.6px] flex flex-col items-start justify-start pt-px pb-0 pr-[21px] pl-0 box-border">
              <div className="self-stretch relative leading-[20px] z-[6]">
                Jake Right
              </div>
            </div>
            <div className="w-[63.6px] flex flex-col items-start justify-start py-0 pr-[25px] pl-0 box-border">
              <div className="self-stretch relative leading-[20px] inline-block min-w-[38px] whitespace-nowrap z-[6]">
                $1000
              </div>
            </div>
            <div className="w-[68.6px] flex flex-col items-start justify-start py-0 pr-[18px] pl-0 box-border">
              <div className="self-stretch relative leading-[20px] inline-block min-w-[50px] whitespace-nowrap z-[3]">
                $60,000
              </div>
            </div>
            <div className="w-[54.6px] flex flex-col items-start justify-start pt-px pb-0 pr-1 pl-0 box-border">
              <div className="self-stretch relative leading-[20px] inline-block min-w-[50px] z-[3]">
                Monthly
              </div>
            </div>
            <div className="w-[59.5px] flex flex-col items-start justify-start py-0 pr-1.5 pl-0 box-border">
              <div className="self-stretch relative leading-[20px] inline-block min-w-[52.9px] z-[6]">
                3 Mobile
              </div>
            </div>
            <div className="w-[24.7px] flex flex-col items-start justify-start py-0 pr-0.5 pl-0 box-border">
              <div className="w-[21.9px] relative leading-[20px] inline-block min-w-[21.9px] z-[3]">
                Yes
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-px px-0 pb-0 text-left text-mini text-white font-nunito">
              <div className="rounded-4xs bg-darkslategray flex flex-row items-start justify-start pt-[9.3px] pb-[8.4px] pr-7 pl-[29px] z-[3]">
                <div className="h-[17.7px] w-[83px] relative rounded-4xs bg-darkslategray hidden" />
                <b className="h-0 relative leading-[0%] font-bold inline-block min-w-[24.5px] z-[1]">
                  Yes
                </b>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[7px] max-w-full">
            <div className="w-[933px] flex flex-row items-start justify-start pt-0 px-0 pb-1 box-border max-w-full">
              <div className="h-0 flex-1 relative max-w-full z-[4]" />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-5 box-border max-w-full">
              <div className="flex-1 flex flex-row items-start justify-start gap-[19.1px] max-w-full mq1050:flex-wrap">
                <div className="w-[38.4px] flex flex-col items-start justify-start pt-px pb-0 pr-2 pl-0 box-border">
                  <div className="self-stretch relative leading-[20px] inline-block min-w-[30px] z-[3]">
                    John
                  </div>
                </div>
                <div className="w-[55.4px] flex flex-col items-start justify-start pt-0.5 pb-0 pr-3.5 pl-0 box-border">
                  <div className="self-stretch relative leading-[20px] z-[4]">
                    Roger
                  </div>
                </div>
                <div className="w-[72.9px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                  <div className="self-stretch relative leading-[20px] inline-block min-w-[72.9px] z-[3]">
                    01-06-2023
                  </div>
                </div>
                <div className="w-[78.6px] flex flex-col items-start justify-start pt-px pb-0 pr-[17px] pl-0 box-border">
                  <div className="self-stretch relative leading-[20px] inline-block min-w-[61.1px] z-[3]">
                    Outbound
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-start justify-start pt-0.5 pb-0 pr-[29px] pl-0 box-border min-w-[65px]">
                  <div className="self-stretch relative leading-[20px] z-[6]">
                    Jake Right
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pt-px pb-0 pr-[31px] pl-0">
                  <div className="w-[41px] relative leading-[20px] inline-block whitespace-nowrap z-[6]">
                    $1000
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pt-px pb-0 pr-[19px] pl-0">
                  <div className="relative leading-[20px] inline-block min-w-[49px] whitespace-nowrap z-[3]">
                    $30,000
                  </div>
                </div>
                <div className="w-[73.2px] flex flex-col items-start justify-start pt-0.5 pb-0 pr-[13px] pl-0 box-border">
                  <div className="self-stretch relative leading-[20px] z-[3]">
                    Monthly
                  </div>
                </div>
                <div className="w-[58.5px] flex flex-col items-start justify-start pt-px pb-0 pr-5 pl-0 box-border">
                  <div className="self-stretch relative leading-[20px] inline-block min-w-[38.3px] z-[6]">
                    Lipton
                  </div>
                </div>
                <div className="w-[31px] flex flex-col items-start justify-start pt-px pb-0 pr-[9px] pl-0 box-border">
                  <div className="self-stretch relative leading-[20px] inline-block min-w-[21.9px] z-[3]">
                    Yes
                  </div>
                </div>
                <div className="rounded-4xs bg-darkslategray flex flex-row items-start justify-start pt-[9.3px] pb-[8.4px] pr-7 pl-[29px] z-[3] text-left text-mini text-white font-nunito">
                  <div className="h-[17.7px] w-[83px] relative rounded-4xs bg-darkslategray hidden" />
                  <b className="h-0 relative leading-[0%] font-bold inline-block min-w-[24.5px] z-[1]">
                    Yes
                  </b>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-end justify-start gap-[12px] max-w-full">
              <div className="self-stretch h-0 flex flex-row items-start justify-end py-0 pr-[11px] pl-0 box-border max-w-full">
                <div className="h-0 flex-1 relative max-w-full z-[4]" />
              </div>
              <div className="w-[929px] flex flex-row items-start justify-between py-0 pr-px pl-0 box-border gap-[20px] max-w-full mq1050:flex-wrap">
                <div className="w-[41px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                  <div className="self-stretch relative leading-[20px] inline-block min-w-[41px] z-[3]">
                    Sarrah
                  </div>
                </div>
                <div className="w-[47.6px] flex flex-col items-start justify-start pt-px pb-0 pr-[13px] pl-0 box-border">
                  <div className="self-stretch relative leading-[20px] z-[4]">
                    Will
                  </div>
                </div>
                <div className="w-[76px] flex flex-col items-start justify-start pt-px pb-0 pr-[3px] pl-0 box-border">
                  <div className="self-stretch relative leading-[20px] inline-block min-w-[72.9px] z-[3]">
                    01-08-2023
                  </div>
                </div>
                <div className="w-[63.5px] flex flex-col items-start justify-start py-0 pr-[19px] pl-0 box-border">
                  <div className="self-stretch relative leading-[20px] inline-block min-w-[43.8px] z-[3]">
                    Vetting
                  </div>
                </div>
                <div className="w-[99.9px] flex flex-col items-start justify-start pt-px pb-0 pr-[25px] pl-0 box-border">
                  <div className="self-stretch relative leading-[20px] z-[6]">
                    Jake Right
                  </div>
                </div>
                <div className="w-[58.8px] flex flex-col items-start justify-start py-0 pr-6 pl-0 box-border">
                  <div className="self-stretch relative leading-[20px] inline-block min-w-[34.6px] whitespace-nowrap z-[6]">
                    $800
                  </div>
                </div>
                <div className="w-[73.8px] flex flex-col items-start justify-start py-0 pr-3 pl-0 box-border">
                  <div className="self-stretch relative leading-[20px] inline-block min-w-[61px] z-[3]">
                    1000 units
                  </div>
                </div>
                <div className="w-[51px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                  <div className="self-stretch relative leading-[20px] z-[3]">
                    Monthly
                  </div>
                </div>
                <div className="w-[65.3px] flex flex-col items-start justify-start py-0 pr-[3px] pl-0 box-border">
                  <div className="self-stretch relative leading-[20px] inline-block min-w-[62px] z-[6]">
                    Coca Cola
                  </div>
                </div>
                <div className="w-[25.9px] flex flex-col items-start justify-start py-0 pr-1 pl-0 box-border">
                  <div className="self-stretch relative leading-[20px] inline-block min-w-[21.9px] z-[3]">
                    Yes
                  </div>
                </div>
                <div className="rounded-4xs bg-darkslategray flex flex-row items-start justify-start pt-[9.3px] pb-[8.4px] pr-7 pl-[29px] z-[3] text-left text-mini text-white font-nunito">
                  <div className="h-[17.7px] w-[83px] relative rounded-4xs bg-darkslategray hidden" />
                  <b className="h-0 relative leading-[0%] font-bold inline-block min-w-[24.5px] z-[1]">
                    Yes
                  </b>
                </div>
              </div>
            </div>
            <div className="w-[933px] h-0 relative max-w-full z-[4]" />
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
