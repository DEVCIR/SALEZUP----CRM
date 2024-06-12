import PropTypes from "prop-types";

const GroupComponent = ({ className = "" }) => {
  return (
    <div
    className={`h-[362.5px] flex-1 relative shadow-[0px_20px_26.4px_-6px_rgba(0,_0,_0,_0.25)] rounded-16xl bg-white box-border max-w-full z-[2] text-left text-xl text-black font-inter border-t-[3.5px] border-solid border-silver mq1050:h-auto mq1050:min-h-[362.5] ${className}`}
  >
    <div className="absolute top-[0px] left-[0px] shadow-[0px_20px_26.4px_-6px_rgba(0,_0,_0,_0.25)] rounded-16xl bg-white box-border w-full h-full hidden border-t-[3.5px] border-solid border-silver" />
    <h2 className="m-0 absolute top-[26px] left-[47px] text-inherit font-semibold font-inherit inline-block w-80 h-6 z-[1] mq450:text-base">
      Pending Requests
    </h2>
    <div className="absolute top-[65px] left-[126px] w-0 h-[254px] z-[2]" />
    <div className="absolute top-[65px] left-[256px] w-0 h-[254px] z-[4]" />
    <div className="absolute top-[65px] left-[386px] w-0 h-[254px] z-[4]" />
    <div className="absolute top-[65px] left-[517px] w-0 h-[254px] z-[4]" />
    <div className="absolute top-[65px] left-[647px] w-0 h-[254px] z-[4]" />
    <div className="absolute top-[65px] left-[778px] w-0 h-[254px] z-[4]" />
    <div className="absolute top-[65px] left-[884px] w-0 h-[254px] z-[4]" />
    <div className="absolute top-[65px] left-[30px] w-[950px] flex flex-col items-start justify-start max-w-full text-center text-xs">
      <div className="shadow-[0px_1px_1.04px_rgba(0,_0,_0,_0.25)] rounded-[7.81px] [background:linear-gradient(89.05deg,_#f5f5f5,_rgba(45,_128,_133,_0.35)_88.41%)] overflow-x-auto flex flex-row items-start justify-start py-[11px] pr-0 pl-4 z-[1]">
        <div className="h-11 w-[950px] relative shadow-[0px_1px_1.04px_rgba(0,_0,_0,_0.25)] rounded-[7.81px] [background:linear-gradient(89.05deg,_#f5f5f5,_rgba(45,_128,_133,_0.35)_88.41%)] shrink-0 hidden z-[1]" />
        <div className="w-[147.6px] shrink-0 flex flex-col items-start justify-start pt-px pb-0 pr-[39px] pl-0 box-border">
          <div className="self-stretch flex flex-row items-start justify-start gap-[18px]">
            <div className="w-9 relative leading-[20px] inline-block shrink-0 min-w-[36px] z-[2]">
              Name
            </div>
            <div className="flex-1 relative leading-[20px] inline-block min-w-[54px] z-[3]">
              Surname
            </div>
          </div>
        </div>
        <div className="w-[116.7px] shrink-0 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border ml-[-11.6px]">
          <div className="w-[62px] relative leading-[20px] inline-block min-w-[62px] z-[2]">
            Start Date
          </div>
        </div>
        <div className="w-[93.5px] shrink-0 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border ml-[-11.6px]">
          <div className="w-[33px] relative leading-[20px] inline-block min-w-[33px] z-[2]">
            Team
          </div>
        </div>
        <div className="w-[81px] shrink-0 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border ml-[-11.6px]">
          <div className="self-stretch relative leading-[20px] inline-block min-w-[81px] z-[5]">
            Manager
          </div>
        </div>
        <div className="w-[154.2px] shrink-0 flex flex-col items-start justify-start pt-0.5 pb-0 pr-1.5 pl-0 box-border ml-[-11.6px]">
          <div className="self-stretch relative leading-[20px] z-[6]">
            Commission
          </div>
        </div>
        <div className="w-[100px] shrink-0 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border ml-[-11.6px]">
          <div className="w-[47px] relative leading-[20px] inline-block z-[7]">
            Target
          </div>
        </div>
        <div className="w-[94px] shrink-0 flex flex-col items-start justify-start pt-px pb-0 pr-[30px] pl-0 box-border ml-[-11.6px]">
          <div className="self-stretch relative leading-[20px] inline-block min-w-[64px] z-[2]">
            Frequency
          </div>
        </div>
        <div className="w-[228.2px] shrink-0 flex flex-row items-start justify-start gap-[13.6px] ml-[-11.6px]">
          <div className="w-[66px] flex flex-col items-start justify-start py-0 pr-1 pl-0 box-border">
            <div className="self-stretch relative leading-[20px] inline-block min-w-[61px] z-[5]">
              Campaign
            </div>
          </div>
          <div className="w-[39px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
            <div className="self-stretch relative leading-[20px] inline-block min-w-[39px] z-[2]">
              Active
            </div>
          </div>
          <div className="flex-1 relative text-sm leading-[20px] inline-block min-w-[96px] z-[5]">
            Resend Invite
          </div>
        </div>
      </div>
      <div className="self-stretch shadow-[0px_9px_5.4px_-2px_rgba(0,_0,_0,_0.13)] rounded-[7.81px] bg-whitesmoke-100 flex flex-col items-end justify-start pt-[11px] pb-2.5 pr-1.5 pl-0 box-border gap-[18px] max-w-full z-[1]">
        <div className="self-stretch h-[210px] relative shadow-[0px_9px_5.4px_-2px_rgba(0,_0,_0,_0.13)] rounded-[7.81px] bg-whitesmoke-100 hidden" />
        <div className="w-[923px] flex flex-row items-start justify-between gap-[20px] max-w-full mq1050:flex-wrap">
          <div className="w-[33.8px] flex flex-col items-start justify-start pt-px pb-0 pr-[5px] pl-0 box-border">
            <div className="self-stretch relative leading-[20px] inline-block min-w-[28.3px] z-[2]">
              Jack
            </div>
          </div>
          <div className="w-[47.3px] flex flex-col items-start justify-start pt-px pb-0 pr-3 pl-0 box-border">
            <div className="self-stretch relative leading-[20px] inline-block min-w-[34.6px] z-[3]">
              Smith
            </div>
          </div>
          <div className="w-[71.1px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
            <div className="self-stretch relative leading-[20px] inline-block min-w-[71.1px] z-[2]">
              01-01-2023
            </div>
          </div>
          <div className="w-[65.2px] flex flex-col items-start justify-start py-0 pr-4 pl-0 box-border">
            <div className="self-stretch relative leading-[20px] inline-block min-w-[49.2px] z-[2]">
              Inbound
            </div>
          </div>
          <div className="w-[98.6px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border">
            <div className="self-stretch relative leading-[20px] inline-block min-w-[78.4px] z-[5]">
              Shane Smart
            </div>
          </div>
          <div className="w-[64.6px] flex flex-col items-start justify-start py-0 pr-[30px] pl-0 box-border">
            <div className="self-stretch relative leading-[20px] inline-block min-w-[34.6px] whitespace-nowrap z-[5]">
              $500
            </div>
          </div>
          <div className="w-[66.6px] flex flex-col items-start justify-start py-0 pr-[25px] pl-0 box-border">
            <div className="self-stretch relative leading-[20px] inline-block min-w-[41px] whitespace-nowrap z-[2]">
              $6500
            </div>
          </div>
          <div className="w-[54.6px] flex flex-col items-start justify-start pt-px pb-0 pr-1 pl-0 box-border">
            <div className="self-stretch relative leading-[20px] inline-block min-w-[50px] z-[2]">
              Monthly
            </div>
          </div>
          <div className="w-[59.5px] flex flex-col items-start justify-start py-0 pr-1.5 pl-0 box-border">
            <div className="self-stretch relative leading-[20px] inline-block min-w-[52.9px] z-[5]">
              3 Mobile
            </div>
          </div>
          <div className="w-[24.7px] flex flex-col items-start justify-start py-0 pr-0.5 pl-0 box-border">
            <div className="w-[21.9px] relative leading-[20px] inline-block min-w-[21.9px] z-[2]">
              Yes
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0 text-left text-mini text-white font-nunito">
            <div className="rounded-4xs bg-[#013A2B] flex flex-row items-start justify-start pt-[9.3px] pb-[8.4px] pr-7 pl-[29px] z-[2]">
              <div className="h-[17.7px] w-[83px] relative rounded-4xs bg-[#013A2B] hidden" />
              <b className="h-0 relative leading-[0%] font-bold inline-block min-w-[24.5px] z-[1]">
                Yes
              </b>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-end justify-start gap-[7px] max-w-full">
          <div className="self-stretch flex flex-row items-start justify-end pt-0 pb-1 pr-[11px] pl-0 box-border max-w-full">
            <div className="h-0 flex-1 relative max-w-full z-[3]" />
          </div>
          <div className="w-[922.1px] flex flex-row flex-wrap items-start justify-start gap-[19.1px] max-w-full">
            <div className="w-[36.5px] flex flex-col items-start justify-start pt-0.5 pb-0 pr-2.5 pl-0 box-border">
              <div className="self-stretch relative leading-[20px] inline-block min-w-[26.4px] z-[2]">
                Tom
              </div>
            </div>
            <div className="w-[55.4px] flex flex-col items-start justify-start pt-0.5 pb-0 pr-3.5 pl-0 box-border">
              <div className="self-stretch relative leading-[20px] inline-block min-w-[41px] z-[3]">
                Curran
              </div>
            </div>
            <div className="w-[72.9px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
              <div className="self-stretch relative leading-[20px] inline-block min-w-[72.9px] z-[2]">
                01-06-2023
              </div>
            </div>
            <div className="w-[78.6px] flex flex-col items-start justify-start pt-px pb-0 pr-[17px] pl-0 box-border">
              <div className="self-stretch relative leading-[20px] inline-block min-w-[61.1px] z-[2]">
                Outbound
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-px pb-0 pr-[29px] pl-0 box-border min-w-[65px]">
              <div className="self-stretch relative leading-[20px] inline-block min-w-[71.1px] z-[5]">
                Jack Willow
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-px pb-0 pr-8 pl-0">
              <div className="w-[41px] relative leading-[20px] inline-block whitespace-nowrap z-[5]">
                $500
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-px pb-0 pr-[26px] pl-0">
              <div className="w-[41px] relative leading-[20px] inline-block min-w-[41px] whitespace-nowrap z-[2]">
                $3000
              </div>
            </div>
            <div className="w-[73.2px] flex flex-col items-start justify-start pt-0.5 pb-0 pr-[13px] pl-0 box-border">
              <div className="self-stretch relative leading-[20px] z-[2]">
                Monthly
              </div>
            </div>
            <div className="w-[58.5px] flex flex-col items-start justify-start pt-px pb-0 pr-5 pl-0 box-border">
              <div className="self-stretch relative leading-[20px] inline-block min-w-[38.3px] z-[5]">
                Lipton
              </div>
            </div>
            <div className="w-[31px] flex flex-col items-start justify-start pt-px pb-0 pr-[9px] pl-0 box-border">
              <div className="self-stretch relative leading-[20px] inline-block min-w-[21.9px] z-[2]">
                Yes
              </div>
            </div>
            <div className="rounded-4xs bg-[#013A2B] flex flex-row items-start justify-start pt-[9.3px] pb-[8.4px] pr-7 pl-[29px] z-[2] text-left text-mini text-white font-nunito">
              <div className="h-[17.7px] w-[83px] relative rounded-4xs bg-[#013A2B] hidden" />
              <b className="h-0 relative leading-[0%] font-bold inline-block min-w-[24.5px] z-[1]">
                Yes
              </b>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-end justify-start gap-[12px] max-w-full">
            <div className="self-stretch h-0 flex flex-row items-start justify-end py-0 pr-[11px] pl-0 box-border max-w-full">
              <div className="h-0 flex-1 relative max-w-full z-[3]" />
            </div>
            <div className="w-[924.8px] flex flex-row items-start justify-between py-0 pr-0.5 pl-0 box-border gap-[20px] max-w-full mq1050:flex-wrap">
              <div className="w-[35.6px] flex flex-col items-start justify-start pt-px pb-0 pr-1 pl-0 box-border">
                <div className="self-stretch relative leading-[20px] inline-block min-w-[31px] z-[2]">
                  Kane
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-px pb-0 pr-[11px] pl-0">
                <div className="w-[34.6px] relative leading-[20px] inline-block min-w-[34.6px] z-[3]">
                  Smith
                </div>
              </div>
              <div className="w-[72.9px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                <div className="self-stretch relative leading-[20px] inline-block min-w-[72.9px] z-[2]">
                  01-08-2023
                </div>
              </div>
              <div className="w-[62.3px] flex flex-col items-start justify-start py-0 pr-[18px] pl-0 box-border">
                <div className="self-stretch relative leading-[20px] inline-block min-w-[43.8px] z-[2]">
                  Vetting
                </div>
              </div>
              <div className="w-[98.7px] flex flex-col items-start justify-start py-0 pr-[23px] pl-0 box-border">
                <div className="self-stretch relative leading-[20px] inline-block min-w-[74.8px] z-[5]">
                  Mannie Smit
                </div>
              </div>
              <div className="w-[57.6px] flex flex-col items-start justify-start py-0 pr-[23px] pl-0 box-border">
                <div className="self-stretch relative leading-[20px] inline-block min-w-[34.6px] whitespace-nowrap z-[5]">
                  $400
                </div>
              </div>
              <div className="w-[72.6px] flex flex-col items-start justify-start py-0 pr-[18px] pl-0 box-border">
                <div className="self-stretch relative leading-[20px] inline-block min-w-[54px] z-[2]">
                  200 units
                </div>
              </div>
              <div className="w-[51px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                <div className="self-stretch relative leading-[20px] z-[2]">
                  Monthly
                </div>
              </div>
              <div className="w-[64.1px] flex flex-col items-start justify-start py-0 pr-0.5 pl-0 box-border">
                <div className="self-stretch relative leading-[20px] inline-block min-w-[62px] z-[5]">
                  Coca Cola
                </div>
              </div>
              <div className="w-[24.7px] flex flex-col items-start justify-start py-0 pr-0.5 pl-0 box-border">
                <div className="w-[21.9px] relative leading-[20px] inline-block min-w-[21.9px] z-[2]">
                  Yes
                </div>
              </div>
              <div className="rounded-4xs bg-[#013A2B] flex flex-row items-start justify-start pt-[9.3px] pb-[8.4px] pr-7 pl-[29px] z-[2] text-left text-mini text-white font-nunito">
                <div className="h-[17.7px] w-[83px] relative rounded-4xs bg-[#013A2B] hidden" />
                <b className="h-0 relative leading-[0%] font-bold inline-block min-w-[24.5px] z-[1]">
                  Yes
                </b>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full">
            <div className="w-[933px] h-0 relative max-w-full z-[3]" />
            <div className="self-stretch flex flex-col items-end justify-start gap-[8px] max-w-full">
              <div className="w-[922.1px] flex flex-row items-start justify-between gap-[20px] max-w-full mq1050:flex-wrap">
                <div className="w-[31.1px] flex flex-col items-start justify-start pt-px pb-0 pr-1 pl-0 box-border">
                  <div className="w-[26.4px] relative leading-[20px] inline-block min-w-[26.4px] z-[2]">
                    Alex
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start pt-px pb-0 pr-[9px] pl-0">
                  <div className="w-[39.2px] relative leading-[20px] inline-block min-w-[39.2px] z-[3]">
                    Parker
                  </div>
                </div>
                <div className="w-[71.1px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                  <div className="self-stretch relative leading-[20px] inline-block min-w-[71.1px] z-[2]">
                    01-10-2023
                  </div>
                </div>
                <div className="w-[67.8px] flex flex-col items-start justify-start py-0 pr-[18px] pl-0 box-border">
                  <div className="self-stretch relative leading-[20px] inline-block min-w-[49.2px] z-[2]">
                    Inbound
                  </div>
                </div>
                <div className="w-[94px] flex flex-col items-start justify-start py-0 pr-6 pl-0 box-border">
                  <div className="self-stretch relative leading-[20px] inline-block min-w-[69.3px] z-[5]">
                    Brett Sharp
                  </div>
                </div>
                <div className="w-[67.6px] flex flex-col items-start justify-start py-0 pr-7 pl-0 box-border">
                  <div className="self-stretch relative leading-[20px] whitespace-nowrap z-[5]">
                    $500
                  </div>
                </div>
                <div className="w-[61.6px] flex flex-col items-start justify-start py-0 pr-[22px] pl-0 box-border">
                  <div className="self-stretch relative leading-[20px] inline-block min-w-[39.2px] whitespace-nowrap z-[2]">
                    $6500
                  </div>
                </div>
                <div className="w-[65.9px] flex flex-col items-start justify-start pt-px pb-0 pr-[7px] pl-0 box-border">
                  <div className="self-stretch relative leading-[20px] z-[2]">
                    Monthly
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start py-0 pr-[13px] pl-0">
                  <div className="w-[38.3px] relative leading-[20px] inline-block min-w-[38.3px] z-[5]">
                    Lipton
                  </div>
                </div>
                <div className="w-[24.7px] flex flex-col items-start justify-start py-0 pr-0.5 pl-0 box-border">
                  <div className="w-[21.9px] relative leading-[20px] inline-block min-w-[21.9px] z-[2]">
                    Yes
                  </div>
                </div>
                <div className="rounded-4xs bg-[#013A2B] flex flex-row items-start justify-start pt-[8.4px] pb-[9.3px] pr-7 pl-[29px] z-[2] text-left text-mini text-white font-nunito">
                  <div className="h-[17.7px] w-[83px] relative rounded-4xs bg-[#013A2B] hidden" />
                  <b className="h-0 relative leading-[0%] font-bold inline-block min-w-[24.5px] z-[1]">
                    Yes
                  </b>
                </div>
              </div>
              <div className="self-stretch h-0 flex flex-row items-start justify-end py-0 pr-[11px] pl-0 box-border max-w-full">
                <div className="h-0 flex-1 relative max-w-full z-[3]" />
              </div>
              <div className="w-[921.2px] flex flex-row flex-wrap items-start justify-between gap-[20px] max-w-full">
                <div className="w-[32.9px] flex flex-col items-start justify-start pt-px pb-0 pr-2 pl-0 box-border">
                  <div className="self-stretch relative leading-[20px] inline-block min-w-[24.6px] z-[2]">
                    Patt
                  </div>
                </div>
                <div className="w-[47.3px] flex flex-col items-start justify-start pt-px pb-0 pr-3 pl-0 box-border">
                  <div className="self-stretch relative leading-[20px] inline-block min-w-[34.6px] z-[3]">
                    David
                  </div>
                </div>
                <div className="w-[72.9px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                  <div className="self-stretch relative leading-[20px] inline-block min-w-[72.9px] z-[2]">
                    01-05-2023
                  </div>
                </div>
                <div className="w-[67.8px] flex flex-col items-start justify-start py-0 pr-[18px] pl-0 box-border">
                  <div className="self-stretch relative leading-[20px] inline-block min-w-[49.2px] z-[2]">
                    Inbound
                  </div>
                </div>
                <div className="w-[97.8px] flex flex-col items-start justify-start py-0 pr-[26px] pl-0 box-border">
                  <div className="self-stretch relative leading-[20px] inline-block min-w-[71.1px] z-[5]">
                    Peter Smith
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start py-0 pr-[30px] pl-0">
                  <div className="w-[34.6px] relative leading-[20px] inline-block min-w-[34.6px] whitespace-nowrap z-[5]">
                    $400
                  </div>
                </div>
                <div className="w-[66.5px] flex flex-col items-start justify-start py-0 pr-[25px] pl-0 box-border">
                  <div className="self-stretch relative leading-[20px] inline-block min-w-[41px] whitespace-nowrap z-[2]">
                    $6500
                  </div>
                </div>
                <div className="w-[56.5px] flex flex-col items-start justify-start pt-px pb-0 pr-[5px] pl-0 box-border">
                  <div className="self-stretch relative leading-[20px] z-[2]">
                    Monthly
                  </div>
                </div>
                <div className="w-[60.4px] flex flex-col items-start justify-start py-0 pr-[7px] pl-0 box-border">
                  <div className="self-stretch relative leading-[20px] inline-block min-w-[52.9px] z-[5]">
                    3 Mobile
                  </div>
                </div>
                <div className="w-[25.6px] flex flex-col items-start justify-start py-0 pr-[3px] pl-0 box-border">
                  <div className="w-[21.9px] relative leading-[20px] inline-block min-w-[21.9px] z-[2]">
                    Yes
                  </div>
                </div>
                <div className="rounded-4xs bg-[#013A2B] flex flex-row items-start justify-start pt-[9.3px] pb-[8.4px] pr-7 pl-[29px] z-[2] text-left text-mini text-white font-nunito">
                  <div className="h-[17.7px] w-[83px] relative rounded-4xs bg-[#013A2B] hidden" />
                  <b className="h-0 relative leading-[0%] font-bold inline-block min-w-[24.5px] z-[1]">
                    Yes
                  </b>
                </div>
              </div>
            </div>
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
