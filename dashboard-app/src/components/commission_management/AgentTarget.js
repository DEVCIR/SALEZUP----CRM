import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import AgentTargetValue from "./AgentTargetValue";
import PropTypes from "prop-types";

const AgentTarget = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch shadow-[0px_20px_26.4px_-6px_rgba(0,_0,_0,_0.25)] rounded-16xl bg-white box-border flex flex-col items-end justify-start pt-[22px] pb-[66px] pr-[66px] pl-[30px] gap-[103px] max-w-full z-[2] text-left text-xl text-black font-inter border-t-[3.5px] border-solid border-silver-100 ${className}`}
    >
      <div className="w-[1011px] h-[938.5px] relative shadow-[0px_20px_26.4px_-6px_rgba(0,_0,_0,_0.25)] rounded-16xl bg-white box-border hidden max-w-full border-t-[3.5px] border-solid border-silver-100" />
      <div className="self-stretch flex flex-row items-start justify-end py-0 pr-1.5 pl-0 box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[45px] max-w-full">
          <div className="w-[285px] flex flex-row items-start justify-start py-0 px-px box-border">
            <h2 className="m-0 flex-1 relative text-inherit font-semibold font-inherit z-[3] mq450:text-base">
              Set Target : Agents
            </h2>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start max-w-full text-base text-gray-100">
            <div className="w-[212px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
              <div className="self-stretch relative font-medium z-[4]">
                Select Team:
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start max-w-full ml-[-112px]">
              <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[30px]">
                <div className="flex flex-row items-start justify-start z-[3] text-3xs text-black">
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
                <FormControl
                  className="h-[33px] flex-1 font-inter font-medium text-base text-gray-100 min-w-[149px] w-auto"
                  variant="standard"
                  sx={{
                    borderTopWidth: "0px",
                    borderRightWidth: "0px",
                    borderBottomWidth: "0px",
                    borderLeftWidth: "0px",
                    borderRadius: "0px 0px 0px 0px",
                    width: "28.465346534653463%",
                    height: "33px",
                    m: 0,
                    p: 0,
                    "& .MuiInputBase-root": {
                      m: 0,
                      p: 0,
                      minHeight: "33px",
                      justifyContent: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInputLabel-root": {
                      m: 0,
                      p: 0,
                      minHeight: "33px",
                      display: "inline-flex",
                    },
                    "& .MuiMenuItem-root": {
                      m: 0,
                      p: 0,
                      height: "33px",
                      display: "inline-flex",
                    },
                    "& .MuiSelect-select": {
                      m: 0,
                      p: 0,
                      height: "33px",
                      alignItems: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInput-input": { m: 0, p: 0 },
                    "& .MuiInputBase-input": {
                      color: "#1f282e",
                      fontSize: 16,
                      fontWeight: "Medium",
                      fontFamily: "Inter",
                      textAlign: "left",
                      p: "0 !important",
                    },
                  }}
                >
                  <InputLabel color="primary" />
                  <Select
                    color="primary"
                    disableUnderline
                    displayEmpty
                    IconComponent="null"
                  >
                    <MenuItem>Select Month:</MenuItem>
                  </Select>
                  <FormHelperText />
                </FormControl>
                <div className="flex flex-row items-start justify-start py-0 pr-[18px] pl-0 gap-[1px] mq450:flex-wrap">
                  <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                    <div className="relative font-medium inline-block min-w-[60px] z-[3]">
                      Target:
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 pr-7 pl-0 text-3xs text-black">
                    <div className="flex flex-row items-start justify-start z-[3]">
                      <img
                        className="h-[33px] w-[114px] relative rounded-[5.99px]"
                        loading="lazy"
                        alt=""
                        src="/bg-2.svg"
                      />
                      <div className="w-[66px] relative hidden">
                        List of Agents
                      </div>
                      <div className="w-8 relative text-xs font-medium text-green-primary text-right hidden">
                        Show
                      </div>
                    </div>
                    <div className="w-[58px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border ml-[-86px] text-center text-base">
                      <div className="self-stretch relative font-medium whitespace-nowrap z-[4]">
                        $1000
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[183px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[1px]">
                    <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0">
                      <div className="self-stretch relative font-medium z-[3]">
                        Apply to all:
                      </div>
                    </div>
                    <div className="rounded-4xs bg-darkslategray flex flex-row items-start justify-start py-[3px] pr-[5px] pl-[13px] gap-[10.6px] z-[3] text-mini text-white font-nunito">
                      <div className="h-[23px] w-[73px] relative rounded-4xs bg-darkslategray hidden" />
                      <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0">
                        <b className="h-0 relative leading-[0%] font-bold inline-block min-w-[27.4px] z-[1]">
                          Yes
                        </b>
                      </div>
                      <div className="h-[17px] w-[17px] relative rounded-[50%] bg-mediumseagreen z-[1]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[371px] flex flex-row items-start justify-between max-w-full gap-[20px] text-xs text-black mq450:flex-wrap">
                <div className="flex flex-col items-end justify-start pt-px px-0 pb-4 relative">
                  <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-t-8xs rounded-b-3xs bg-whitesmoke-300 box-border z-[4] border-t-[1px] border-solid border-silver-100" />
                  <div className="rounded-t-8xs rounded-b-none bg-silver-200 flex flex-row items-start justify-start py-[7px] pr-[27px] pl-[34px] z-[5]">
                    <div className="h-[29px] w-28 relative rounded-t-8xs rounded-b-none bg-silver-200 hidden" />
                    <div className="relative inline-block min-w-[50.1px] z-[6]">
                      Inbound
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-end py-0 px-4">
                    <div className="flex flex-col items-start justify-start gap-[7px]">
                      <div className="relative inline-block min-w-[62px] z-[6]">
                        Outbound
                      </div>
                      <div className="flex flex-col items-start justify-start gap-[3px]">
                        <div className="relative inline-block min-w-[44.2px] z-[5]">
                          Vetting
                        </div>
                        <div className="relative inline-block min-w-[27.2px] z-[5]">
                          BDR
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-72 w-[120px] relative text-center">
                  <div className="absolute top-[0px] left-[0px] rounded-t-8xs rounded-b-3xs bg-whitesmoke-300 box-border w-full h-full z-[4] border-t-[1px] border-solid border-silver-100" />
                  <div className="absolute top-[0px] left-[0px] rounded-t-8xs rounded-b-none bg-silver-200 w-[120px] flex flex-row items-start justify-start pt-2.5 px-[23px] pb-2 box-border z-[5]">
                    <div className="h-[33px] w-[120px] relative rounded-t-8xs rounded-b-none bg-silver-200 hidden" />
                    <div className="w-[59px] relative inline-block shrink-0 z-[6]">
                      January
                    </div>
                  </div>
                  <div className="absolute top-[32px] left-[23px] w-[73px] flex flex-col items-start justify-start gap-[6.6px]">
                    <div className="self-stretch relative z-[6]">February</div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[3px]">
                      <div className="w-[52px] relative inline-block z-[5]">
                        March
                      </div>
                      <div className="self-stretch flex flex-col items-start justify-start gap-[5.7px]">
                        <div className="w-8 relative inline-block z-[5]">
                          April
                        </div>
                        <div className="w-8 relative inline-block z-[5]">
                          May
                        </div>
                        <div className="w-[59px] relative inline-block z-[5]">
                          June
                        </div>
                        <div className="self-stretch relative z-[5]">July</div>
                      </div>
                    </div>
                    <div className="w-[52px] relative inline-block z-[5]">
                      August
                    </div>
                    <div className="relative inline-block min-w-[63px] z-[5]">
                      September
                    </div>
                    <div className="w-[57px] relative inline-block z-[5]">
                      October
                    </div>
                    <div className="w-[63px] relative inline-block min-w-[63px] z-[5]">
                      November
                    </div>
                  </div>
                  <div className="absolute top-[241px] left-[23px] inline-block w-[73px] z-[5]">
                    December
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[672.8px] flex flex-row items-start justify-start max-w-full text-base text-gray-100">
        <div className="w-[212px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border">
          <div className="self-stretch relative font-medium z-[4]">
            Select Month:
          </div>
        </div>
        <div className="flex-1 flex flex-col items-end justify-start max-w-full ml-[-102px] text-3xs text-black">
          <div className="self-stretch flex flex-row items-start justify-end py-0 pr-2.5 pl-0 box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-start gap-[43px] max-w-full mq700:flex-wrap">
              <div className="flex-1 flex flex-col items-start justify-start min-w-[211px] max-w-full">
                <div className="self-stretch flex flex-row items-start justify-start gap-[30px] mq700:flex-wrap">
                  <div className="flex flex-row items-start justify-start z-[3]">
                    <img
                      className="h-[33px] w-[119px] relative rounded-[5.99px]"
                      alt=""
                      src="/bg-3.svg"
                    />
                    <div className="w-[66px] relative hidden">
                      List of Agents
                    </div>
                    <div className="w-8 relative text-xs font-medium text-green-primary text-right hidden">
                      Show
                    </div>
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[2px] text-base text-gray-100">
                    <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                      <div className="relative font-medium inline-block min-w-[60px] z-[3]">
                        Target:
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start py-0 pr-[27px] pl-0 text-3xs text-black">
                      <div className="flex flex-row items-start justify-start z-[3]">
                        <img
                          className="h-[33px] w-[114px] relative rounded-[5.99px]"
                          loading="lazy"
                          alt=""
                          src="/bg-2.svg"
                        />
                        <div className="w-[66px] relative hidden">
                          List of Agents
                        </div>
                        <div className="w-8 relative text-xs font-medium text-green-primary text-right hidden">
                          Show
                        </div>
                      </div>
                      <div className="w-[61px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border ml-[-88px] text-center text-base">
                        <div className="self-stretch relative font-medium whitespace-nowrap z-[4]">
                          $1000
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <AgentTargetValue />
              </div>
              <div className="w-[184px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border min-w-[184px] text-base text-gray-100 mq700:flex-1">
                <div className="self-stretch flex flex-col items-start justify-start gap-[2px]">
                  <div className="self-stretch flex flex-row items-start justify-start gap-[2px]">
                    <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0">
                      <div className="self-stretch relative font-medium z-[3]">
                        Apply to all:
                      </div>
                    </div>
                    <div className="w-[73px] rounded-4xs bg-firebrick flex flex-row items-start justify-start py-[3px] px-[5px] box-border gap-[14px] z-[3] text-mini text-white font-nunito">
                      <div className="h-[23px] w-[73px] relative rounded-4xs bg-firebrick hidden" />
                      <div className="h-[17px] w-[17px] relative rounded-[50%] bg-gray-200 z-[1]" />
                      <div className="w-[27.4px] flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border">
                        <b className="self-stretch h-0 relative leading-[0%] font-bold inline-block z-[1]">
                          No
                        </b>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start pt-3.5 px-3.5 pb-[30px] relative gap-[11px] text-center text-2xs text-black">
                    <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-t-8xs rounded-b-3xs bg-whitesmoke-200 box-border z-[3] border-t-[1px] border-solid border-silver-100" />
                    <div className="w-[147px] h-0 flex flex-col items-start justify-start">
                      <div className="h-0 relative leading-[0%] font-medium inline-block min-w-[31px] z-[4]">
                        Name
                      </div>
                      <div className="self-stretch h-0 flex flex-row items-start justify-end">
                        <div className="h-0 relative leading-[0%] font-medium inline-block min-w-[65px] z-[4]">
                          Enter Target
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-start justify-start gap-[17px] text-left">
                      <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
                        <div className="h-0 relative leading-[0%] font-medium inline-block min-w-[65px] z-[4]">
                          Alex Parker
                        </div>
                      </div>
                      <div className="bg-silver-200 flex flex-row items-start justify-start pt-[3px] px-[18px] pb-0.5 z-[4] text-center text-4xs">
                        <div className="h-4 w-[65px] relative bg-silver-200 hidden" />
                        <div className="relative font-medium inline-block min-w-[29px] whitespace-nowrap z-[5]">
                          $8000
                        </div>
                      </div>
                    </div>
                    <div className="w-[147px] flex flex-row items-start justify-start pt-0 px-0 pb-3 box-border relative text-4xs">
                      <div className="flex-1 flex flex-col items-start justify-start pt-3 px-0 pb-0 text-left text-2xs">
                        <div className="self-stretch h-0 relative leading-[0%] font-medium inline-block z-[4]">
                          Kevin Petersen
                        </div>
                      </div>
                      <div className="bg-silver-200 flex flex-row items-start justify-start pt-[3px] px-[18px] pb-0.5 z-[5] ml-[-14px]">
                        <div className="h-4 w-[65px] relative bg-silver-200 hidden" />
                        <div className="relative font-medium inline-block min-w-[29px] whitespace-nowrap z-[6]">
                          $6000
                        </div>
                      </div>
                      <div className="!m-[0] absolute right-[0px] bottom-[-15px] bg-silver-200 flex flex-row items-start justify-start pt-[3px] px-[18px] pb-0.5 z-[5]">
                        <div className="h-4 w-[65px] relative bg-silver-200 hidden" />
                        <div className="relative font-medium inline-block min-w-[29px] whitespace-nowrap z-[6]">
                          $7000
                        </div>
                      </div>
                    </div>
                    <div className="w-[87px] flex flex-row items-start justify-start pt-0 px-0 pb-4 box-border text-left">
                      <div className="h-0 flex-1 relative leading-[0%] font-medium inline-block z-[4]">
                        David Warner
                      </div>
                    </div>
                    <div className="w-[87px] flex flex-row items-start justify-start pt-0 px-0 pb-4 box-border relative text-4xs">
                      <div className="h-0 flex-1 relative text-2xs leading-[0%] font-medium text-left inline-block z-[4]">
                        Smith Will
                      </div>
                      <div className="!m-[0] absolute top-[-12px] right-[-60px] bg-silver-200 flex flex-row items-start justify-start pt-[3px] px-[18px] pb-0.5 z-[5]">
                        <div className="h-4 w-[65px] relative bg-silver-200 hidden" />
                        <div className="relative font-medium inline-block min-w-[29px] whitespace-nowrap z-[6]">
                          $5000
                        </div>
                      </div>
                      <div className="!m-[0] absolute right-[-60px] bottom-[-15px] bg-silver-200 flex flex-row items-start justify-start pt-[3px] px-[18px] pb-0.5 z-[5]">
                        <div className="h-4 w-[65px] relative bg-silver-200 hidden" />
                        <div className="relative font-medium inline-block min-w-[29px] whitespace-nowrap z-[6]">
                          $8000
                        </div>
                      </div>
                    </div>
                    <div className="w-[87px] h-0 relative leading-[0%] font-medium text-left inline-block z-[4]">
                      Sarrah John
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="cursor-pointer [border:none] pt-[15px] pb-3.5 pr-3 pl-[13px] bg-darkslategray rounded-4xs flex flex-row items-start justify-start z-[3] hover:bg-teal-200">
            <div className="h-[29px] w-[85.8px] relative rounded-4xs bg-darkslategray hidden" />
            <b className="h-0 relative text-mini leading-[0%] font-bold font-nunito text-white text-left inline-block min-w-[60px] z-[1]">
              Confirm
            </b>
          </button>
        </div>
      </div>
    </div>
  );
};

AgentTarget.propTypes = {
  className: PropTypes.string,
};

export default AgentTarget;
