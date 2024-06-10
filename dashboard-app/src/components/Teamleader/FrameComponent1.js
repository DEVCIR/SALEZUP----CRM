import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch shadow-[0px_20px_26.4px_-6px_rgba(0,_0,_0,_0.25)] rounded-16xl bg-white box-border flex flex-col items-start justify-start pt-[25px] pb-14 pr-[22px] pl-10 relative gap-[29px] max-w-full z-[2] text-left text-xl text-black font-inter border-t-[3.5px] border-solid border-silver-100 mq450:pt-5 mq450:pb-9 mq450:box-border ${className}`}
    >
      <div className="w-[1011px] h-[413.5px] relative shadow-[0px_20px_26.4px_-6px_rgba(0,_0,_0,_0.25)] rounded-16xl bg-white box-border hidden max-w-full z-[0] border-t-[3.5px] border-solid border-silver-100" />
      <h2 className="m-0 w-[283px] relative text-inherit font-semibold font-inherit inline-block z-[3] mq450:text-base">
        Current Team Leaders
      </h2>
      <div className="w-[869.3px] flex flex-row items-start justify-between max-w-full gap-[20px] mq1050:flex-wrap">
        <button className="cursor-pointer [border:none] pt-[15px] px-6 pb-3.5 bg-seagreen rounded-4xs flex flex-row items-start justify-start whitespace-nowrap z-[3] hover:bg-lightseagreen">
          <div className="h-[29px] w-[120.1px] relative rounded-4xs bg-seagreen hidden" />
          <b className="h-0 relative text-mini leading-[0%] font-bold font-nunito text-white text-left inline-block min-w-[72px] z-[1]">
            All Teams
          </b>
        </button>
        <div className="flex flex-row items-start justify-start gap-[58px] max-w-full mq750:flex-wrap mq750:gap-[29px]">
          <button className="cursor-pointer [border:none] pt-[15px] px-[30px] pb-3.5 bg-darkslategray rounded-4xs flex flex-row items-start justify-start z-[3] hover:bg-teal-200">
            <div className="h-[29px] w-[120.1px] relative rounded-4xs bg-darkslategray hidden" />
            <b className="h-0 relative text-mini leading-[0%] font-bold font-nunito text-white text-left inline-block min-w-[60px] z-[1]">
              Inobund
            </b>
          </button>
          <button className="cursor-pointer [border:none] pt-[15px] px-[23px] pb-3.5 bg-darkslategray rounded-4xs flex flex-row items-start justify-start z-[3] hover:bg-teal-200">
            <div className="h-[29px] w-[120.1px] relative rounded-4xs bg-darkslategray hidden" />
            <b className="h-0 relative text-mini leading-[0%] font-bold font-nunito text-white text-left inline-block min-w-[74px] z-[1]">
              Outbound
            </b>
          </button>
          <button className="cursor-pointer [border:none] pt-[15px] px-[34px] pb-3.5 bg-darkslategray rounded-4xs flex flex-row items-start justify-start z-[3] hover:bg-teal-200">
            <div className="h-[29px] w-[120.1px] relative rounded-4xs bg-darkslategray hidden" />
            <b className="h-0 relative text-mini leading-[0%] font-bold font-nunito text-white text-left inline-block min-w-[52px] z-[1]">
              Vetting
            </b>
          </button>
          <button className="cursor-pointer [border:none] pt-[15px] pb-3.5 pr-[43px] pl-11 bg-darkslategray rounded-4xs flex flex-row items-start justify-start z-[3] hover:bg-teal-200">
            <div className="h-[29px] w-[120.1px] relative rounded-4xs bg-darkslategray hidden" />
            <b className="h-0 relative text-mini leading-[0%] font-bold font-nunito text-white text-left inline-block min-w-[33px] z-[1]">
              BDR
            </b>
          </button>
        </div>
      </div>
      <div className="w-0 h-[254px] absolute !m-[0] bottom-[12.5px] left-[136px] z-[5]" />
      <div className="w-0 h-[254px] absolute !m-[0] bottom-[12.5px] left-[266px] z-[7]" />
      <div className="w-0 h-[254px] absolute !m-[0] bottom-[12.5px] left-[396px] z-[7]" />
      <div className="w-0 h-[254px] absolute !m-[0] right-[484px] bottom-[12.5px] z-[7]" />
      <div className="w-0 h-[254px] absolute !m-[0] right-[354px] bottom-[12.5px] z-[7]" />
      <div className="w-0 h-[254px] absolute !m-[0] right-[223px] bottom-[12.5px] z-[7]" />
      <div className="w-0 h-[254px] absolute !m-[0] right-[117px] bottom-[12.5px] z-[7]" />
      <div className="self-stretch flex flex-col items-start justify-start max-w-full text-center text-xs">
        <div className="self-stretch shadow-[0px_1px_1.04px_rgba(0,_0,_0,_0.25)] rounded-[7.81px] [background:linear-gradient(89.05deg,_#f5f5f5,_rgba(45,_128,_133,_0.35)_88.41%)] flex flex-row items-start justify-start py-[11px] px-4 box-border max-w-full [row-gap:20px] z-[3] mq1050:flex-wrap">
          <div className="h-11 w-[949px] relative shadow-[0px_1px_1.04px_rgba(0,_0,_0,_0.25)] rounded-[7.81px] [background:linear-gradient(89.05deg,_#f5f5f5,_rgba(45,_128,_133,_0.35)_88.41%)] hidden max-w-full z-[1]" />
          <div className="w-[141.4px] flex flex-col items-start justify-start pt-px pb-0 pr-[33px] pl-0 box-border">
            <div className="self-stretch flex flex-row items-start justify-start gap-[18px]">
              <a className="[text-decoration:none] w-9 relative leading-[20px] text-[inherit] inline-block shrink-0 min-w-[36px] z-[4]">
                Name
              </a>
              <div className="flex-1 relative leading-[20px] inline-block min-w-[54px] z-[6]">
                Surname
              </div>
            </div>
          </div>
          <div className="w-[110.5px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border ml-[-5.4px]">
            <a className="[text-decoration:none] w-[62px] relative leading-[20px] text-[inherit] inline-block min-w-[62px] z-[4]">
              Start Date
            </a>
          </div>
          <div className="w-[99.5px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border ml-[-5.4px]">
            <div className="w-[33px] relative leading-[20px] inline-block min-w-[33px] z-[4]">
              Team
            </div>
          </div>
          <div className="w-[62.6px] flex flex-col items-start justify-start pt-px pb-0 pr-2 pl-0 box-border ml-[-5.4px]">
            <div className="self-stretch relative leading-[20px] inline-block min-w-[54px] z-[8]">
              Manager
            </div>
          </div>
          <div className="w-[148px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border ml-[-5.4px]">
            <a className="[text-decoration:none] self-stretch relative leading-[20px] text-[inherit] z-[8]">
              Commission
            </a>
          </div>
          <div className="w-[93.8px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border ml-[-5.4px]">
            <div className="w-[47px] relative leading-[20px] inline-block z-[9]">
              Target
            </div>
          </div>
          <div className="w-[87.8px] flex flex-col items-start justify-start pt-px pb-0 pr-[23px] pl-0 box-border ml-[-5.4px]">
            <div className="self-stretch relative leading-[20px] inline-block min-w-[64px] z-[4]">
              Frequency
            </div>
          </div>
          <div className="w-[118.6px] flex flex-row items-start justify-start gap-[18.6px] ml-[-5.4px]">
            <div className="flex-1 relative leading-[20px] inline-block min-w-[61px] shrink-0 z-[8]">
              Campaign
            </div>
            <div className="w-[39px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
              <div className="self-stretch relative leading-[20px] inline-block min-w-[39px] z-[4]">
                Active
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch shadow-[0px_9px_5.4px_-2px_rgba(0,_0,_0,_0.13)] rounded-[7.81px] bg-whitesmoke-100 flex flex-col items-start justify-start pt-[11px] pb-0 pr-4 pl-0 box-border gap-[40px] max-w-full z-[4] mq750:gap-[20px]">
          <div className="self-stretch h-[170px] relative shadow-[0px_9px_5.4px_-2px_rgba(0,_0,_0,_0.13)] rounded-[7.81px] bg-whitesmoke-100 hidden" />
          <div className="self-stretch flex flex-col items-end justify-start gap-[18px] max-w-full">
            <div className="w-[917px] flex flex-row items-start justify-end py-0 px-[5px] box-border max-w-full">
              <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq1050:flex-wrap">
                <div className="w-[33.8px] flex flex-col items-start justify-start pt-px pb-0 pr-[5px] pl-0 box-border">
                  <div className="self-stretch relative leading-[20px] inline-block min-w-[28.3px] z-[5]">
                    Mike
                  </div>
                </div>
                <div className="w-[47.3px] flex flex-col items-start justify-start pt-px pb-0 pr-3 pl-0 box-border">
                  <div className="self-stretch relative leading-[20px] inline-block min-w-[34.6px] z-[6]">
                    Smith
                  </div>
                </div>
                <div className="w-[71.1px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                  <div className="self-stretch relative leading-[20px] inline-block min-w-[71.1px] z-[5]">
                    01-01-2023
                  </div>
                </div>
                <div className="w-[63.2px] flex flex-col items-start justify-start py-0 pr-3.5 pl-0 box-border">
                  <div className="self-stretch relative leading-[20px] inline-block min-w-[49.2px] z-[5]">
                    Inbound
                  </div>
                </div>
                <div className="w-[99.6px] flex flex-col items-start justify-start pt-px pb-0 pr-[21px] pl-0 box-border">
                  <div className="self-stretch relative leading-[20px] z-[8]">
                    Jake Right
                  </div>
                </div>
                <div className="w-[63.6px] flex flex-col items-start justify-start py-0 pr-[25px] pl-0 box-border">
                  <div className="self-stretch relative leading-[20px] inline-block min-w-[38px] whitespace-nowrap z-[8]">
                    $1000
                  </div>
                </div>
                <div className="w-[68.6px] flex flex-col items-start justify-start py-0 pr-[18px] pl-0 box-border">
                  <div className="self-stretch relative leading-[20px] inline-block min-w-[50px] whitespace-nowrap z-[5]">
                    $60,000
                  </div>
                </div>
                <div className="w-[54.6px] flex flex-col items-start justify-start pt-px pb-0 pr-1 pl-0 box-border">
                  <div className="self-stretch relative leading-[20px] inline-block min-w-[50px] z-[5]">
                    Monthly
                  </div>
                </div>
                <div className="w-[59.5px] flex flex-col items-start justify-start py-0 pr-1.5 pl-0 box-border">
                  <div className="self-stretch relative leading-[20px] inline-block min-w-[52.9px] z-[8]">
                    3 Mobile
                  </div>
                </div>
                <div className="w-[41.1px] flex flex-col items-start justify-start py-0 pr-[19px] pl-0 box-border">
                  <div className="self-stretch relative leading-[20px] inline-block min-w-[21.9px] z-[5]">
                    Yes
                  </div>
                </div>
                <div className="w-[50px] flex flex-row items-start justify-start relative text-left text-mini text-white font-nunito">
                  <div className="h-[29px] w-[63.7px] absolute !m-[0] bottom-[-14px] left-[-19px] rounded-4xs bg-darkslategray z-[5]" />
                  <div className="flex-1 flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
                    <b className="self-stretch h-0 relative leading-[0%] font-bold inline-block z-[6]">
                      Edit
                    </b>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full">
              <div className="self-stretch h-0 relative z-[6]" />
              <div className="self-stretch flex flex-col items-end justify-start gap-[7px] max-w-full">
                <div className="w-[918px] flex flex-row items-start justify-end py-0 px-[5px] box-border max-w-full">
                  <div className="flex-1 flex flex-row items-start justify-start gap-[19.1px] max-w-full mq1050:flex-wrap">
                    <div className="w-[38.4px] flex flex-col items-start justify-start py-0 pr-2 pl-0 box-border">
                      <div className="self-stretch relative leading-[20px] inline-block min-w-[30px] z-[5]">
                        John
                      </div>
                    </div>
                    <div className="w-[55.4px] flex flex-col items-start justify-start pt-px pb-0 pr-3.5 pl-0 box-border">
                      <div className="self-stretch relative leading-[20px] z-[6]">
                        Roger
                      </div>
                    </div>
                    <div className="w-[72.9px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                      <div className="self-stretch relative leading-[20px] inline-block min-w-[72.9px] z-[5]">
                        01-06-2023
                      </div>
                    </div>
                    <div className="w-[78.6px] flex flex-col items-start justify-start py-0 pr-[17px] pl-0 box-border">
                      <div className="self-stretch relative leading-[20px] inline-block min-w-[61.1px] z-[5]">
                        Outbound
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start pt-px pb-0 pr-[29px] pl-0 box-border min-w-[65px]">
                      <div className="self-stretch relative leading-[20px] z-[8]">
                        Jake Right
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start py-0 pr-[31px] pl-0">
                      <div className="w-[41px] relative leading-[20px] inline-block whitespace-nowrap z-[8]">
                        $1000
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start py-0 pr-[19px] pl-0">
                      <div className="relative leading-[20px] inline-block min-w-[49px] whitespace-nowrap z-[5]">
                        $30,000
                      </div>
                    </div>
                    <div className="w-[73.2px] flex flex-col items-start justify-start pt-px pb-0 pr-[13px] pl-0 box-border">
                      <div className="self-stretch relative leading-[20px] z-[5]">
                        Monthly
                      </div>
                    </div>
                    <div className="w-[58.5px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border">
                      <div className="self-stretch relative leading-[20px] inline-block min-w-[38.3px] z-[8]">
                        Lipton
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start py-0 pr-[25px] pl-0">
                      <div className="w-[21.9px] relative leading-[20px] inline-block min-w-[21.9px] z-[5]">
                        Yes
                      </div>
                    </div>
                    <div className="w-[50px] flex flex-row items-start justify-start relative text-left text-mini text-white font-nunito">
                      <div className="h-[29px] w-[63.7px] absolute !m-[0] bottom-[-14px] left-[-19px] rounded-4xs bg-darkslategray z-[5]" />
                      <div className="flex-1 flex flex-col items-start justify-start pt-2 px-0 pb-0">
                        <b className="self-stretch h-0 relative leading-[0%] font-bold inline-block z-[6]">
                          Edit
                        </b>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-0 relative z-[6]" />
              </div>
              <div className="self-stretch flex flex-col items-end justify-start gap-[7px] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[5px] pl-[15px] box-border max-w-full">
                  <div className="flex-1 flex flex-row items-start justify-between py-0 pr-px pl-0 box-border max-w-full gap-[20px] mq1050:flex-wrap">
                    <div className="w-[41px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                      <div className="self-stretch relative leading-[20px] inline-block min-w-[41px] z-[5]">
                        Sarrah
                      </div>
                    </div>
                    <div className="w-[47.6px] flex flex-col items-start justify-start pt-px pb-0 pr-[13px] pl-0 box-border">
                      <div className="self-stretch relative leading-[20px] z-[6]">
                        Will
                      </div>
                    </div>
                    <div className="w-[76px] flex flex-col items-start justify-start pt-px pb-0 pr-[3px] pl-0 box-border">
                      <div className="self-stretch relative leading-[20px] inline-block min-w-[72.9px] z-[5]">
                        01-08-2023
                      </div>
                    </div>
                    <div className="w-[63.5px] flex flex-col items-start justify-start py-0 pr-[19px] pl-0 box-border">
                      <div className="self-stretch relative leading-[20px] inline-block min-w-[43.8px] z-[5]">
                        Vetting
                      </div>
                    </div>
                    <div className="w-[99.9px] flex flex-col items-start justify-start pt-px pb-0 pr-[25px] pl-0 box-border">
                      <div className="self-stretch relative leading-[20px] z-[8]">
                        Jake Right
                      </div>
                    </div>
                    <div className="w-[58.8px] flex flex-col items-start justify-start py-0 pr-6 pl-0 box-border">
                      <div className="self-stretch relative leading-[20px] inline-block min-w-[34.6px] whitespace-nowrap z-[8]">
                        $800
                      </div>
                    </div>
                    <div className="w-[73.8px] flex flex-col items-start justify-start py-0 pr-3 pl-0 box-border">
                      <div className="self-stretch relative leading-[20px] inline-block min-w-[61px] z-[5]">
                        1000 units
                      </div>
                    </div>
                    <div className="w-[51px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                      <div className="self-stretch relative leading-[20px] z-[5]">
                        Monthly
                      </div>
                    </div>
                    <div className="w-[65.3px] flex flex-col items-start justify-start py-0 pr-[3px] pl-0 box-border">
                      <div className="self-stretch relative leading-[20px] inline-block min-w-[62px] z-[8]">
                        Coca Cola
                      </div>
                    </div>
                    <div className="w-[42.3px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border">
                      <div className="self-stretch relative leading-[20px] inline-block min-w-[21.9px] z-[5]">
                        Yes
                      </div>
                    </div>
                    <div className="w-[50px] flex flex-row items-start justify-start relative text-left text-mini text-white font-nunito">
                      <div className="h-[29px] w-[63.7px] absolute !m-[0] bottom-[-14px] left-[-19px] rounded-4xs bg-darkslategray z-[5]" />
                      <div className="flex-1 flex flex-col items-start justify-start pt-2.5 px-0 pb-0">
                        <b className="self-stretch h-0 relative leading-[0%] font-bold inline-block z-[6]">
                          Edit
                        </b>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-0 relative z-[6]" />
              </div>
            </div>
          </div>
          <div className="self-stretch h-0 relative z-[6]" />
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
