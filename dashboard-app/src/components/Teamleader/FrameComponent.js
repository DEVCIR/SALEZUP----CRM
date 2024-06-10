import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <div
      className={`flex-1 shadow-[0px_20px_26.4px_-6px_rgba(0,_0,_0,_0.25)] rounded-16xl bg-white box-border flex flex-col items-end justify-start pt-7 px-[55px] pb-[63px] gap-[85px] max-w-full z-[2] text-left text-base text-gray-100 font-inter border-t-[3.5px] border-solid border-silver-100 mq750:gap-[21px] mq450:pb-[27px] mq450:box-border mq1050:gap-[42px] mq1050:pt-5 mq1050:px-[27px] mq1050:pb-[41px] mq1050:box-border ${className}`}
    >
      <div className="w-[1011px] h-[860.5px] relative shadow-[0px_20px_26.4px_-6px_rgba(0,_0,_0,_0.25)] rounded-16xl bg-white box-border hidden max-w-full border-t-[3.5px] border-solid border-silver-100" />
      <div className="self-stretch flex flex-col items-start justify-start gap-[13.2px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq1050:flex-wrap">
          <div className="w-[401px] flex flex-col items-start justify-start gap-[9px] max-w-full">
            <div className="w-[212px] relative font-medium inline-block z-[3]">
              First Name
            </div>
            <div className="self-stretch flex flex-row items-start justify-start pt-[15.3px] px-3 pb-[16.5px] relative z-[3] text-3xs text-black">
              <img
                className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[5.99px] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/bg.svg"
              />
              <div className="relative inline-block min-w-[103px] z-[1]">
                Enter your First Name
              </div>
              <div className="h-0 w-8 relative text-xs font-medium text-green-primary text-right hidden z-[2]">
                Show
              </div>
            </div>
          </div>
          <div className="w-[401px] flex flex-col items-start justify-start gap-[10px] max-w-full">
            <div className="w-[212px] relative font-medium inline-block z-[3]">
              Last Name
            </div>
            <div className="self-stretch flex flex-row items-start justify-start pt-[15.3px] px-[11px] pb-[16.5px] relative z-[3] text-3xs text-black">
              <img
                className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[5.99px] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/bg.svg"
              />
              <div className="relative inline-block min-w-[103px] z-[1]">
                Enter your Last Name
              </div>
              <div className="h-0 w-8 relative text-xs font-medium text-green-primary text-right hidden z-[2]">
                Show
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq1050:flex-wrap">
          <div className="w-[401px] flex flex-col items-start justify-start gap-[19.2px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
              <div className="w-[212px] relative font-medium inline-block z-[3]">
                Email
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-[15.3px] px-3 pb-[16.5px] relative z-[3] text-3xs text-black">
                <img
                  className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[5.99px] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/bg.svg"
                />
                <div className="relative inline-block min-w-[77px] z-[1]">
                  Enter your Email
                </div>
                <div className="h-0 w-8 relative text-xs font-medium text-green-primary text-right hidden z-[2]">
                  Show
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[23px] mq450:flex-wrap">
              <div className="flex-1 flex flex-col items-start justify-start gap-[9px] min-w-[123px]">
                <div className="relative font-medium inline-block min-w-[88px] z-[3]">
                  Start Date
                </div>
                <div className="self-stretch flex flex-row items-start justify-start pt-[15.3px] px-3 pb-[16.7px] relative z-[3] text-3xs text-black">
                  <img
                    className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[5.99px] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/bg-3.svg"
                  />
                  <div className="relative inline-block min-w-[74px] z-[1]">
                    Enter your Date
                  </div>
                  <div className="h-0 w-8 relative text-xs font-medium text-green-primary text-right hidden z-[2]">
                    Show
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start gap-[9px] min-w-[123px]">
                <div className="w-[90px] flex flex-row items-start justify-start py-0 px-px box-border">
                  <div className="flex-1 relative font-medium z-[3]">
                    Campaign
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start pt-[15.3px] px-3 pb-[16.7px] relative z-[3] text-3xs text-black">
                  <img
                    className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[5.99px] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/bg-3.svg"
                  />
                  <div className="relative inline-block min-w-[100px] z-[1]">
                    Enter your Campaign
                  </div>
                  <div className="h-0 w-8 relative text-xs font-medium text-green-primary text-right hidden z-[2]">
                    Show
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[401px] flex flex-col items-start justify-start gap-[22.2px] max-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
              <div className="w-[212px] relative font-medium inline-block z-[3]">
                Manager
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-[15.3px] px-3 pb-[16.5px] relative z-[3] text-3xs text-black">
                <img
                  className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[5.99px] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/bg.svg"
                />
                <div className="relative inline-block min-w-[94px] z-[1]">{`Enter your Manager `}</div>
                <div className="h-0 w-8 relative text-xs font-medium text-green-primary text-right hidden z-[2]">
                  Show
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
              <div className="w-[212px] relative font-medium inline-block z-[3]">
                Select Team
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-[15.3px] px-3 pb-[16.5px] relative z-[3] text-3xs text-black">
                <img
                  className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[5.99px] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/bg.svg"
                />
                <div className="relative inline-block min-w-[59px] z-[1]">
                  Select Team
                </div>
                <div className="h-0 w-8 relative text-xs font-medium text-green-primary text-right hidden z-[2]">
                  Show
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end pt-0 pb-5 pr-[31px] pl-0 box-border max-w-full text-13xl text-black font-nunito">
        <div className="flex-1 flex flex-col items-start justify-start gap-[45px] max-w-full mq450:gap-[22px]">
          <h1 className="m-0 w-96 relative text-inherit font-bold font-inherit inline-block max-w-full z-[3] mq450:text-lgi mq1050:text-7xl">
            Commission Set-up
          </h1>
          <div className="self-stretch h-[159px] relative text-sm font-inter mq1050:h-auto mq1050:min-h-[159]">
            <div className="absolute top-[0px] left-[0px] flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border gap-[46px] w-full text-3xs mq450:gap-[23px] mq1050:flex-wrap mq1050:pt-0.5 mq1050:pr-0.5 mq1050:pb-0.5 mq1050:box-border">
              <div className="flex flex-row items-start justify-start z-[3]">
                <img
                  className="h-9 w-[268px] relative rounded-[5.99px]"
                  loading="lazy"
                  alt=""
                  src="/bg-7.svg"
                />
                <div className="h-0 w-[77px] relative hidden">
                  Enter your Email
                </div>
                <div className="h-0 w-8 relative text-xs font-medium text-green-primary text-right hidden">
                  Show
                </div>
              </div>
              <div className="flex flex-col items-start justify-start py-0 pr-5 pl-0">
                <div className="flex flex-row items-start justify-start z-[3]">
                  <img
                    className="h-9 w-[143px] relative rounded-[5.99px]"
                    alt=""
                    src="/bg-8.svg"
                  />
                  <div className="h-0 w-[77px] relative hidden">
                    Enter your Email
                  </div>
                  <div className="h-0 w-8 relative text-xs font-medium text-green-primary text-right hidden">
                    Show
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-px pb-0 pr-[13px] pl-0">
                <div className="flex flex-row items-start justify-start z-[3]">
                  <img
                    className="h-9 w-[143px] relative rounded-[5.99px]"
                    alt=""
                    src="/bg-8.svg"
                  />
                  <div className="h-0 w-[77px] relative hidden">
                    Enter your Email
                  </div>
                  <div className="h-0 w-8 relative text-xs font-medium text-green-primary text-right hidden">
                    Show
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start z-[3]">
                <img
                  className="h-9 w-[143px] relative rounded-[5.99px]"
                  alt=""
                  src="/bg-8.svg"
                />
                <div className="h-0 w-[77px] relative hidden">
                  Enter your Email
                </div>
                <div className="h-0 w-8 relative text-xs font-medium text-green-primary text-right hidden">
                  Show
                </div>
              </div>
              <img
                className="h-9 w-full absolute !m-[0] top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden z-[4]"
                alt=""
                src="/rectangle-1664.svg"
              />
              <div className="h-[11px] w-[184px] absolute !m-[0] top-[calc(50%_-_5.5px)] left-[14px] text-mini font-medium text-center flex items-center justify-center z-[5]">
                Commission Opportunity
              </div>
              <div className="h-[11px] w-[102px] absolute !m-[0] top-[calc(50%_-_5.5px)] left-[316px] text-mini font-medium text-center flex items-center justify-center z-[5]">
                Frequency
              </div>
              <div className="h-[11px] w-[90px] absolute !m-[0] top-[calc(50%_-_5.5px)] right-[267px] text-mini font-medium text-center flex items-center justify-center z-[5]">
                Target
              </div>
              <div className="h-[11px] absolute !m-[0] top-[calc(50%_-_5.5px)] right-[46px] text-mini font-medium text-center flex items-center justify-center min-w-[90px] z-[5]">
                Target Value
              </div>
            </div>
            <div className="absolute top-[37px] left-[2px] w-[268px] flex flex-row items-start justify-start pt-[10.3px] px-3 pb-[10.7px] box-border z-[3] text-3xs">
              <img
                className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[5.99px] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/bg-11.svg"
              />
              <div className="relative inline-block min-w-[65px] z-[1]">
                Enter Amount
              </div>
              <div className="h-0 w-8 relative text-xs font-medium text-green-primary text-right hidden z-[2]">
                Show
              </div>
            </div>
            <div className="absolute top-[37px] left-[316px] w-[143px] flex flex-row items-end justify-start pt-1.5 pb-[34.5px] pr-2.5 pl-[11px] box-border gap-[25px]">
              <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-t-8xs rounded-b-3xs bg-whitesmoke-200 box-border z-[3] border-[1px] border-solid border-silver-100" />
              <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[10.5px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[30px]">
                  <div className="w-16 h-0 relative leading-[0%] font-medium inline-block z-[4]">
                    Month
                  </div>
                  <div className="self-stretch h-0 relative leading-[0%] font-medium inline-block z-[4]">
                    Quarter
                  </div>
                  <div className="self-stretch h-0 relative leading-[0%] font-medium inline-block z-[4]">
                    Year
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[8.5px] z-[4]">
                <div className="w-[22px] h-[21.5px] relative">
                  <img
                    className="absolute top-[2.8px] left-[2px] w-[17.9px] h-[14.6px] object-contain"
                    alt=""
                    src="/vector-64.svg"
                  />
                  <div className="absolute top-[0px] left-[0px] box-border w-full h-full z-[1] border-[2px] border-solid border-black" />
                </div>
                <input
                  className="m-0 w-[22px] h-[21.5px] relative box-border border-[2px] border-solid border-black"
                  type="checkbox"
                />
                <input
                  className="m-0 w-[22px] h-[21.5px] relative box-border border-[2px] border-solid border-black"
                  type="checkbox"
                />
              </div>
            </div>
            <div className="absolute top-[37px] left-[525px] w-[143px] flex flex-col items-start justify-start pt-1.5 px-2.5 pb-[17.3px] box-border gap-[29.5px]">
              <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-t-8xs rounded-b-3xs bg-whitesmoke-200 box-border z-[4] border-[1px] border-solid border-silver-100" />
              <div className="self-stretch flex flex-row items-end justify-start gap-[26px]">
                <div className="h-[40.5px] flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[10.5px] box-border">
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[30px]">
                    <div className="self-stretch h-0 relative leading-[0%] font-medium inline-block z-[5]">
                      Revenue
                    </div>
                    <div className="self-stretch flex-1 flex flex-row items-start justify-start py-0 pr-2.5 pl-px">
                      <div className="h-0 flex-1 relative leading-[0%] font-medium inline-block z-[5]">
                        Units
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[51.5px] w-[22px] relative z-[5]">
                  <img
                    className="absolute top-[2.8px] left-[2px] w-[17.9px] h-[14.6px] object-contain"
                    alt=""
                    src="/vector-64.svg"
                  />
                  <div className="absolute top-[0px] left-[0px] box-border w-[22px] h-[21.5px] z-[1] border-[2px] border-solid border-black" />
                  <input
                    className="m-0 absolute top-[30px] left-[0px] box-border w-[22px] h-[21.5px] border-[2px] border-solid border-black"
                    type="checkbox"
                  />
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-0 px-[29px] text-smi text-white font-nunito">
                <div className="rounded-4xs bg-darkslategray flex flex-row items-start justify-start pt-[9px] pb-[8.4px] pr-4 pl-[21px] z-[5]">
                  <div className="h-[17.7px] w-[65px] relative rounded-4xs bg-darkslategray hidden" />
                  <b className="relative leading-[0%] font-bold inline-block [transform:_rotate(-0.6deg)] min-w-[27.6px] z-[1]">
                    Add
                  </b>
                </div>
              </div>
            </div>
            <div className="absolute top-[36px] left-[727px] w-[143px] flex flex-row items-start justify-start pt-3 px-[7px] pb-[5px] box-border">
              <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-t-8xs rounded-b-3xs bg-whitesmoke-200 box-border z-[5] border-[1px] border-solid border-silver-100" />
              <div className="relative inline-block min-w-[56px] whitespace-nowrap z-[6]">
                $65,000
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="cursor-pointer [border:none] pt-7 pb-[27px] pr-[37px] pl-[38px] bg-darkslategray w-[297.1px] rounded-8xs flex flex-row items-start justify-start box-border whitespace-nowrap z-[3] hover:bg-teal-200">
        <div className="h-[75px] w-[297.1px] relative rounded-8xs bg-darkslategray hidden" />
        <b className="flex-1 relative text-base font-nunito text-white text-left z-[1]">{`Add to Team & Invite Agent`}</b>
      </button>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;