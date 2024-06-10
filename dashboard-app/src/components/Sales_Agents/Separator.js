import PropTypes from "prop-types";

const Separator = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch h-[427.5px] relative shadow-[0px_20px_26.4px_-6px_rgba(0,_0,_0,_0.25)] rounded-16xl bg-white box-border max-w-full z-[2] text-center text-xs text-black font-inter border-t-[3.5px] border-solid border-silver mq1050:h-auto mq1050:min-h-[424] ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] shadow-[0px_20px_26.4px_-6px_rgba(0,_0,_0,_0.25)] rounded-16xl bg-white box-border w-full h-full hidden border-t-[3.5px] border-solid border-silver" />
      <div className="absolute top-[128px] left-[40px] w-[949px] flex flex-col items-start justify-start max-w-full">
        <div className="self-stretch shadow-[0px_1px_1.04px_rgba(0,_0,_0,_0.25)] rounded-[7.81px] [background:linear-gradient(89.05deg,_#f5f5f5,_rgba(45,_128,_133,_0.35)_88.41%)] overflow-x-auto flex flex-row items-start justify-start py-[11px] px-4 z-[3]">
          <div className="h-11 w-[949px] relative shadow-[0px_1px_1.04px_rgba(0,_0,_0,_0.25)] rounded-[7.81px] [background:linear-gradient(89.05deg,_#f5f5f5,_rgba(45,_128,_133,_0.35)_88.41%)] shrink-0 hidden z-[1]" />
          <div className="w-[141.4px] shrink-0 flex flex-col items-start justify-start pt-px pb-0 pr-[33px] pl-0 box-border">
            <div className="self-stretch flex flex-row items-start justify-start gap-[18px]">
              <div className="w-9 relative leading-[20px] inline-block shrink-0 min-w-[36px] z-[4]">
                Name
              </div>
              <div className="flex-1 relative leading-[20px] inline-block min-w-[54px] z-[6]">
                Surname
              </div>
            </div>
          </div>
          <div className="w-[110.5px] shrink-0 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border ml-[-5.4px]">
            <div className="w-[62px] relative leading-[20px] inline-block min-w-[62px] z-[4]">
              Start Date
            </div>
          </div>
          <div className="w-[86.3px] shrink-0 flex flex-col items-start justify-start pt-px px-0 pb-0 box-border ml-[-5.4px]">
            <div className="w-[33px] relative leading-[20px] inline-block min-w-[33px] z-[4]">
              Team
            </div>
          </div>
          <div className="w-[75px] shrink-0 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border ml-[-5.4px]">
            <div className="self-stretch relative leading-[20px] inline-block min-w-[75px] z-[8]">
              Team Leader
            </div>
          </div>
          <div className="w-[148px] shrink-0 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border ml-[-5.4px]">
            <div className="self-stretch relative leading-[20px] z-[9]">
              Commission
            </div>
          </div>
          <div className="w-[93.8px] shrink-0 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border ml-[-5.4px]">
            <div className="w-[47px] relative leading-[20px] inline-block z-[10]">
              Target
            </div>
          </div>
          <div className="w-[87.8px] shrink-0 flex flex-col items-start justify-start pt-px pb-0 pr-[23px] pl-0 box-border ml-[-5.4px]">
            <div className="self-stretch relative leading-[20px] inline-block min-w-[64px] z-[4]">
              Frequency
            </div>
          </div>
          <div className="w-[118.6px] shrink-0 flex flex-row items-start justify-start gap-[18.6px] ml-[-5.4px]">
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
        <div className="self-stretch shadow-[0px_9px_5.4px_-2px_rgba(0,_0,_0,_0.13)] rounded-[7.81px] bg-whitesmoke-100 flex flex-col items-end justify-start pt-[11px] pb-2.5 pr-4 pl-0 box-border gap-[18px] max-w-full z-[4]">
          <div className="self-stretch h-[210px] relative shadow-[0px_9px_5.4px_-2px_rgba(0,_0,_0,_0.13)] rounded-[7.81px] bg-whitesmoke-100 hidden" />
          <div className="w-[917px] flex flex-row items-start justify-end py-0 px-[5px] box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq1050:flex-wrap">
              <div className="w-[33.8px] flex flex-col items-start justify-start pt-px pb-0 pr-[5px] pl-0 box-border">
                <div className="self-stretch relative leading-[20px] inline-block min-w-[28.3px] z-[5]">
                  Jack
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
              <div className="w-[100.6px] flex flex-col items-start justify-start pt-px pb-0 pr-[22px] pl-0 box-border">
                <div className="self-stretch relative leading-[20px] inline-block min-w-[78.4px] z-[8]">
                  Shane Smart
                </div>
              </div>
              <div className="w-[64.6px] flex flex-col items-start justify-start py-0 pr-[30px] pl-0 box-border">
                <div className="self-stretch relative leading-[20px] inline-block min-w-[34.6px] whitespace-nowrap z-[8]">
                  $500
                </div>
              </div>
              <div className="w-[66.6px] flex flex-col items-start justify-start py-0 pr-[25px] pl-0 box-border">
                <div className="self-stretch relative leading-[20px] inline-block min-w-[41px] whitespace-nowrap z-[5]">
                  $6500
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
              <div className="w-[916.1px] flex flex-row items-start justify-end py-0 px-[5px] box-border max-w-full">
                <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[19.1px] max-w-full">
                  <div className="w-[36.5px] flex flex-col items-start justify-start pt-px pb-0 pr-2.5 pl-0 box-border">
                    <div className="self-stretch relative leading-[20px] inline-block min-w-[26.4px] z-[5]">
                      Tom
                    </div>
                  </div>
                  <div className="w-[55.4px] flex flex-col items-start justify-start pt-px pb-0 pr-3.5 pl-0 box-border">
                    <div className="self-stretch relative leading-[20px] inline-block min-w-[41px] z-[6]">
                      Curran
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
                    <div className="self-stretch relative leading-[20px] inline-block min-w-[71.1px] z-[8]">
                      Jack Willow
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start py-0 pr-8 pl-0">
                    <div className="w-[41px] relative leading-[20px] inline-block whitespace-nowrap z-[8]">
                      $500
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start py-0 pr-[26px] pl-0">
                    <div className="w-[41px] relative leading-[20px] inline-block min-w-[41px] whitespace-nowrap z-[5]">
                      $3000
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
              <div className="w-[918.8px] flex flex-row items-start justify-end py-0 px-[5px] box-border max-w-full">
                <div className="flex-1 flex flex-row items-start justify-between py-0 pr-0.5 pl-0 box-border max-w-full gap-[20px] mq1050:flex-wrap">
                  <div className="w-[35.6px] flex flex-col items-start justify-start pt-px pb-0 pr-1 pl-0 box-border">
                    <div className="self-stretch relative leading-[20px] inline-block min-w-[31px] z-[5]">
                      Kane
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-px pb-0 pr-[11px] pl-0">
                    <div className="w-[34.6px] relative leading-[20px] inline-block min-w-[34.6px] z-[6]">
                      Smith
                    </div>
                  </div>
                  <div className="w-[72.9px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                    <div className="self-stretch relative leading-[20px] inline-block min-w-[72.9px] z-[5]">
                      01-08-2023
                    </div>
                  </div>
                  <div className="w-[62.3px] flex flex-col items-start justify-start py-0 pr-[18px] pl-0 box-border">
                    <div className="self-stretch relative leading-[20px] inline-block min-w-[43.8px] z-[5]">
                      Vetting
                    </div>
                  </div>
                  <div className="w-[98.7px] flex flex-col items-start justify-start pt-px pb-0 pr-[23px] pl-0 box-border">
                    <div className="self-stretch relative leading-[20px] inline-block min-w-[74.8px] z-[8]">
                      Mannie Smit
                    </div>
                  </div>
                  <div className="w-[57.6px] flex flex-col items-start justify-start py-0 pr-[23px] pl-0 box-border">
                    <div className="self-stretch relative leading-[20px] inline-block min-w-[34.6px] whitespace-nowrap z-[8]">
                      $400
                    </div>
                  </div>
                  <div className="w-[72.6px] flex flex-col items-start justify-start py-0 pr-[18px] pl-0 box-border">
                    <div className="self-stretch relative leading-[20px] inline-block min-w-[54px] z-[5]">
                      200 units
                    </div>
                  </div>
                  <div className="w-[51px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                    <div className="self-stretch relative leading-[20px] z-[5]">
                      Monthly
                    </div>
                  </div>
                  <div className="w-[64.1px] flex flex-col items-start justify-start py-0 pr-0.5 pl-0 box-border">
                    <div className="self-stretch relative leading-[20px] inline-block min-w-[62px] z-[8]">
                      Coca Cola
                    </div>
                  </div>
                  <div className="w-[41.1px] flex flex-col items-start justify-start py-0 pr-[19px] pl-0 box-border">
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
            <div className="self-stretch flex flex-col items-end justify-start gap-[8px] max-w-full">
              <div className="w-[916.1px] flex flex-row items-start justify-end py-0 px-[5px] box-border max-w-full">
                <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq1050:flex-wrap">
                  <div className="w-[31.1px] flex flex-col items-start justify-start pt-px pb-0 pr-1 pl-0 box-border">
                    <div className="w-[26.4px] relative leading-[20px] inline-block min-w-[26.4px] z-[5]">
                      Alex
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-px pb-0 pr-[9px] pl-0">
                    <div className="w-[39.2px] relative leading-[20px] inline-block min-w-[39.2px] z-[6]">
                      Parker
                    </div>
                  </div>
                  <div className="w-[71.1px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                    <div className="self-stretch relative leading-[20px] inline-block min-w-[71.1px] z-[5]">
                      01-10-2023
                    </div>
                  </div>
                  <div className="w-[67.8px] flex flex-col items-start justify-start py-0 pr-[18px] pl-0 box-border">
                    <div className="self-stretch relative leading-[20px] inline-block min-w-[49.2px] z-[5]">
                      Inbound
                    </div>
                  </div>
                  <div className="w-[94px] flex flex-col items-start justify-start pt-px pb-0 pr-6 pl-0 box-border">
                    <div className="self-stretch relative leading-[20px] inline-block min-w-[69.3px] z-[8]">
                      Brett Sharp
                    </div>
                  </div>
                  <div className="w-[67.6px] flex flex-col items-start justify-start py-0 pr-7 pl-0 box-border">
                    <div className="self-stretch relative leading-[20px] whitespace-nowrap z-[8]">
                      $500
                    </div>
                  </div>
                  <div className="w-[61.6px] flex flex-col items-start justify-start py-0 pr-[22px] pl-0 box-border">
                    <div className="self-stretch relative leading-[20px] inline-block min-w-[39.2px] whitespace-nowrap z-[5]">
                      $6500
                    </div>
                  </div>
                  <div className="w-[65.9px] flex flex-col items-start justify-start pt-px pb-0 pr-[7px] pl-0 box-border">
                    <div className="self-stretch relative leading-[20px] z-[5]">
                      Monthly
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start py-0 pr-[13px] pl-0">
                    <div className="w-[38.3px] relative leading-[20px] inline-block min-w-[38.3px] z-[8]">
                      Lipton
                    </div>
                  </div>
                  <div className="w-[41.1px] flex flex-col items-start justify-start py-0 pr-[19px] pl-0 box-border">
                    <div className="self-stretch relative leading-[20px] inline-block min-w-[21.9px] z-[5]">
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
              <div className="w-[915.2px] flex flex-row items-start justify-end py-0 px-[5px] box-border max-w-full">
                <div className="flex-1 flex flex-row flex-wrap items-start justify-between max-w-full gap-[20px]">
                  <div className="w-[32.9px] flex flex-col items-start justify-start pt-px pb-0 pr-2 pl-0 box-border">
                    <div className="self-stretch relative leading-[20px] inline-block min-w-[24.6px] z-[5]">
                      Patt
                    </div>
                  </div>
                  <div className="w-[47.3px] flex flex-col items-start justify-start pt-px pb-0 pr-3 pl-0 box-border">
                    <div className="self-stretch relative leading-[20px] inline-block min-w-[34.6px] z-[6]">
                      David
                    </div>
                  </div>
                  <div className="w-[72.9px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                    <div className="self-stretch relative leading-[20px] inline-block min-w-[72.9px] z-[5]">
                      01-05-2023
                    </div>
                  </div>
                  <div className="w-[67.8px] flex flex-col items-start justify-start py-0 pr-[18px] pl-0 box-border">
                    <div className="self-stretch relative leading-[20px] inline-block min-w-[49.2px] z-[5]">
                      Inbound
                    </div>
                  </div>
                  <div className="w-[97.8px] flex flex-col items-start justify-start pt-px pb-0 pr-[26px] pl-0 box-border">
                    <div className="self-stretch relative leading-[20px] inline-block min-w-[71.1px] z-[8]">
                      Peter Smith
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start py-0 pr-[30px] pl-0">
                    <div className="w-[34.6px] relative leading-[20px] inline-block min-w-[34.6px] whitespace-nowrap z-[8]">
                      $400
                    </div>
                  </div>
                  <div className="w-[66.5px] flex flex-col items-start justify-start py-0 pr-[25px] pl-0 box-border">
                    <div className="self-stretch relative leading-[20px] inline-block min-w-[41px] whitespace-nowrap z-[5]">
                      $6500
                    </div>
                  </div>
                  <div className="w-[56.5px] flex flex-col items-start justify-start pt-px pb-0 pr-[5px] pl-0 box-border">
                    <div className="self-stretch relative leading-[20px] z-[5]">
                      Monthly
                    </div>
                  </div>
                  <div className="w-[60.4px] flex flex-col items-start justify-start py-0 pr-[7px] pl-0 box-border">
                    <div className="self-stretch relative leading-[20px] inline-block min-w-[52.9px] z-[8]">
                      3 Mobile
                    </div>
                  </div>
                  <div className="w-[42px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border">
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
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[128px] left-[136px] w-0 h-[254px] z-[5]" />
      <div className="absolute top-[128px] left-[266px] w-0 h-[254px] z-[7]" />
      <div className="absolute top-[128px] left-[396px] w-0 h-[254px] z-[7]" />
      <div className="absolute top-[128px] left-[527px] w-0 h-[254px] z-[7]" />
      <div className="absolute top-[128px] left-[657px] w-0 h-[254px] z-[7]" />
      <div className="absolute top-[128px] left-[788px] w-0 h-[254px] z-[7]" />
      <div className="absolute top-[128px] left-[894px] w-0 h-[254px] z-[7]" />
      <div className="absolute top-[24px] left-[40px] w-[869.3px] flex flex-col items-start justify-start gap-[18px] max-w-full text-left text-xl">
        <h2 className="m-0 w-[283px] relative text-inherit font-semibold font-inherit inline-block z-[3] mq450:text-base">
          Current Agents
        </h2>
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq1050:flex-wrap">
          <button className="cursor-pointer [border:none] pt-[15px] px-6 pb-3.5 bg-seagreen rounded-4xs flex flex-row items-start justify-start whitespace-nowrap z-[3] hover:bg-lightseagreen">
            <div className="h-[29px] w-[120.1px] relative rounded-4xs bg-seagreen hidden" />
            <b className="h-0 relative text-mini leading-[0%] font-bold font-nunito text-white text-left inline-block min-w-[72px] z-[1]">
              All Teams
            </b>
          </button>
          <nav className="m-0 flex flex-row items-start justify-start gap-[58px] max-w-full whitespace-nowrap mq750:flex-wrap">
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
          </nav>
        </div>
      </div>
    </div>
  );
};

Separator.propTypes = {
  className: PropTypes.string,
};

export default Separator;
