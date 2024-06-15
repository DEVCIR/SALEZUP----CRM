import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
} from "@mui/material";
import PropTypes from "prop-types";

const GroupComponent1 = ({ className = "" }) => {
  return (
    <div className={`shadow-[0px_20px_26.4px_-6px_rgba(0,_0,_0,_0.25)] rounded-16xl w-[95%] box-border items-center justify-between p-5 relative z-[2] text-center text-sm text-black border-t-[3.5px] border-solid border-silver-100 flex-wrap ${className}`}>
      <div className="w-80 flex flex-col items-start justify-start box-border">
        <b className="font-semibold z-[1]">
          Information
        </b>
      </div>
      <div className="flex flex-row items-start justify-between max-w-full gap-[20px] text-base text-gray-100 mq950:flex-wrap">
        <div className="w-[401px] flex flex-col items-start justify-start pt-[9px] px-0 pb-0 box-border min-w-[401px] max-w-full mq700:min-w-full mq950:flex-1">
          <div className=" flex flex-col items-start justify-start gap-[18.6px]">
            <div className="w-[302px] flex flex-row items-start justify-between gap-[20px]">
              <div className="w-[97px] relative font-medium inline-block shrink-0 z-[1]">
                Start Date
              </div>
              <div className="w-[97px] relative font-medium inline-block shrink-0 z-[1]">
                End Date
              </div>
            </div>
            <div className=" flex flex-row items-end justify-start [row-gap:20px] mq700:flex-wrap">
              <div className="flex-1 flex flex-col items-start justify-start gap-[32.4px] min-w-[138px]">
                <FormControl
                  className="w-[196px] h-11 relative font-inter text-3xs text-black"
                  variant="standard"
                  sx={{
                    borderColor: "#f5f5f5",
                    borderStyle: "SOLID",
                    borderTopWidth: "0px",
                    borderRightWidth: "0px",
                    borderBottomWidth: "0px",
                    borderLeftWidth: "0px",
                    backgroundColor: "#f5f5f5",
                    borderRadius: "5.99px",
                    width: "92.45283018867924%",
                    height: "44px",
                    m: 0,
                    p: 0,
                    "& .MuiInputBase-root": {
                      m: 0,
                      p: 0,
                      minHeight: "44px",
                      justifyContent: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInputLabel-root": {
                      m: 0,
                      p: 0,
                      minHeight: "44px",
                      display: "inline-flex",
                    },
                    "& .MuiMenuItem-root": {
                      m: 0,
                      p: 0,
                      height: "44px",
                      display: "inline-flex",
                    },
                    "& .MuiSelect-select": {
                      m: 0,
                      p: 0,
                      height: "44px",
                      alignItems: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInput-input": { m: 0, p: 0 },
                    "& .MuiInputBase-input": {
                      color: "#000",
                      fontSize: 10,
                      fontWeight: "Regular",
                      fontFamily: "Inter",
                      textAlign: "left",
                      p: "0 !important",
                      marginLeft: "12px",
                    },
                  }}
                >
                  <InputLabel color="primary" />
                  <Select
                    color="primary"
                    disableUnderline
                    displayEmpty
                    IconComponent={() => (
                      <img
                        width="13px"
                        height="6px"
                        src="/calendar-icon.svg"
                        style={{ marginRight: "19px" }}
                      />
                    )}
                  >
                    <MenuItem>05/March/2024</MenuItem>
                  </Select>
                  <FormHelperText />
                </FormControl>
                <div className=" flex flex-col items-start justify-start gap-[15px]">
                  <div className=" h-6 relative font-medium inline-block shrink-0 z-[1]">
                    Set Start Time
                  </div>
                  <div className=" flex flex-col items-start justify-start text-3xs text-black">
                    <div className="flex flex-row items-start justify-start z-[1]">
                      <img
                        className="h-11 w-[196px] relative rounded-[5.99px]"
                        alt=""
                        src="/bg-21.svg"
                      />
                      <div className="h-0 w-[77px] relative hidden">
                        Enter your Email
                      </div>
                      <div className="h-0 w-8 relative text-xs font-medium text-green-primary text-right hidden">
                        Show
                      </div>
                    </div>
                    <div className=" flex flex-col items-start justify-start pt-[22px] px-0 pb-[79px] relative gap-[19px] text-base">
                      <div className=" relative font-medium text-gray-100 z-[1]">
                        Contest Formula
                      </div>
                      <div className="flex flex-row items-start justify-start z-[1] text-3xs">
                        <img
                          className="h-11 w-[196px] relative rounded-[5.99px]"
                          loading="lazy"
                          alt=""
                          src="/bg-21.svg"
                        />
                        <div className="h-0 w-[77px] relative hidden">
                          Enter your Email
                        </div>
                        <div className="h-0 w-8 relative text-xs font-medium text-green-primary text-right hidden">
                          Show
                        </div>
                      </div>
                      <div className="w-[66px] !m-[0] absolute h-full top-[0px] right-[16px] bottom-[0px] flex flex-row items-start justify-start pt-[5px] px-[3px] pb-2.5 box-border gap-[6px] z-[2] text-xs">
                        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-t-8xs rounded-b-3xs bg-whitesmoke-400 box-border border-[1px] border-solid border-silver-100" />
                        <div className="h-[169px] w-[25px] relative">
                          <div className="absolute top-[0px] left-[6px] z-[1]">
                            <p className="[margin-block-start:0] [margin-block-end:7px]">
                              09
                            </p>
                            <p className="[margin-block-start:0] [margin-block-end:7px]">
                              10
                            </p>
                            <p className="[margin-block-start:0] [margin-block-end:7px]">
                              11
                            </p>
                            <p className="[margin-block-start:0] [margin-block-end:7px]">
                              12
                            </p>
                            <p className="[margin-block-start:0] [margin-block-end:7px]">
                              13
                            </p>
                            <p className="[margin-block-start:0] [margin-block-end:7px]">
                              14
                            </p>
                            <p className="[margin-block-start:0] [margin-block-end:7px]">
                              15
                            </p>
                            <p className="m-0">16</p>
                          </div>
                          <div className="absolute top-[20px] left-[0px] bg-gray-400 w-[25px] h-[19px] z-[2]" />
                        </div>
                        <div className="h-[169px] w-[25px] relative">
                          <div className="absolute top-[0px] left-[5px] z-[1]">
                            <p className="[margin-block-start:0] [margin-block-end:7px]">
                              59
                            </p>
                            <p className="[margin-block-start:0] [margin-block-end:7px]">
                              00
                            </p>
                            <p className="[margin-block-start:0] [margin-block-end:7px]">
                              01
                            </p>
                            <p className="[margin-block-start:0] [margin-block-end:7px]">
                              02
                            </p>
                            <p className="[margin-block-start:0] [margin-block-end:7px]">
                              03
                            </p>
                            <p className="[margin-block-start:0] [margin-block-end:7px]">
                              04
                            </p>
                            <p className="[margin-block-start:0] [margin-block-end:7px]">
                              05
                            </p>
                            <p className="m-0">06</p>
                          </div>
                          <div className="absolute top-[20px] left-[0px] bg-gray-400 w-[25px] h-[19px] z-[2]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[196px] flex flex-col items-start justify-start gap-[35px] min-w-[196px] ml-[-7px] text-3xs text-black mq450:ml-0 mq700:flex-1">
                <div className=" h-11 relative">
                  <div className="absolute top-[0px] left-[0px] w-full flex flex-row items-start justify-start pt-[15.3px] px-3 pb-[16.7px] box-border h-full z-[1]">
                    <img
                      className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-[5.99px] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/bg-21.svg"
                    />
                    <div className="relative inline-block min-w-[73px] z-[1]">
                      10/March/2024
                    </div>
                    <div className="h-0 w-8 relative text-xs font-medium text-green-primary text-right hidden z-[2]">
                      Show
                    </div>
                  </div>
                  <img
                    className="absolute top-[19px] left-[168px] w-[13px] h-1.5 z-[2]"
                    alt=""
                    src="/calendar-icon.svg"
                  />
                </div>
                <div className="flex flex-col items-start justify-start gap-[16.4px] text-base text-gray-100">
                  <div className="w-[138px] relative font-medium inline-block z-[1]">
                    Set Finish Time
                  </div>
                  <div className="flex flex-col items-end justify-start text-3xs text-black">
                    <div className="flex flex-row items-start justify-start z-[1]">
                      <img
                        className="h-11 w-[196px] relative rounded-[5.99px]"
                        alt=""
                        src="/bg-21.svg"
                      />
                      <div className="h-0 w-[77px] relative hidden">
                        Enter your Email
                      </div>
                      <div className="h-0 w-8 relative text-xs font-medium text-green-primary text-right hidden">
                        Show
                      </div>
                    </div>
                    <div className="w-[68px] flex flex-row items-start justify-end py-0 px-px box-border mt-[-0.4px] text-xs">
                      <div className="flex-1 flex flex-row items-start justify-start pt-[5px] px-[3px] pb-2.5 relative gap-[6px] z-[2]">
                        <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-t-8xs rounded-b-3xs bg-whitesmoke-400 box-border border-[1px] border-solid border-silver-100" />
                        <div className="h-[169px] w-[25px] relative">
                          <div className="absolute top-[0px] left-[6px] z-[1]">
                            <p className="[margin-block-start:0] [margin-block-end:7px]">
                              09
                            </p>
                            <p className="[margin-block-start:0] [margin-block-end:7px]">
                              10
                            </p>
                            <p className="[margin-block-start:0] [margin-block-end:7px]">
                              11
                            </p>
                            <p className="[margin-block-start:0] [margin-block-end:7px]">
                              12
                            </p>
                            <p className="[margin-block-start:0] [margin-block-end:7px]">
                              13
                            </p>
                            <p className="[margin-block-start:0] [margin-block-end:7px]">
                              14
                            </p>
                            <p className="[margin-block-start:0] [margin-block-end:7px]">
                              15
                            </p>
                            <p className="m-0">16</p>
                          </div>
                          <div className="absolute top-[20px] left-[0px] bg-gray-400 w-[25px] h-[19px] z-[2]" />
                        </div>
                        <div className="h-[169px] w-[25px] relative">
                          <div className="absolute top-[0px] left-[5px] z-[1]">
                            <p className="[margin-block-start:0] [margin-block-end:7px]">
                              59
                            </p>
                            <p className="[margin-block-start:0] [margin-block-end:7px]">
                              00
                            </p>
                            <p className="[margin-block-start:0] [margin-block-end:7px]">
                              01
                            </p>
                            <p className="[margin-block-start:0] [margin-block-end:7px]">
                              02
                            </p>
                            <p className="[margin-block-start:0] [margin-block-end:7px]">
                              03
                            </p>
                            <p className="[margin-block-start:0] [margin-block-end:7px]">
                              04
                            </p>
                            <p className="[margin-block-start:0] [margin-block-end:7px]">
                              05
                            </p>
                            <p className="m-0">06</p>
                          </div>
                          <div className="absolute top-[20px] left-[0px] bg-gray-400 w-[25px] h-[19px] z-[2]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[291px] shadow-[0px_12px_15px_rgba(0,_0,_0,_0.26)] rounded-7xl bg-whitesmoke-100 flex flex-col items-start justify-start pt-[46.9px] px-2.5 pb-[55.9px] box-border gap-[23.5px] min-w-[291px] z-[1] text-sm text-darkslategray-200 mq950:flex-1">
          <div className="w-[291px] h-[376.4px] relative shadow-[0px_12px_15px_rgba(0,_0,_0,_0.26)] rounded-7xl bg-whitesmoke-100 hidden" />
          <div className=" flex flex-row items-start justify-start pt-0 pb-[13.6px] pr-[68px] pl-[67px]">
            <div className="flex-1 flex flex-row items-end justify-start gap-[23.4px] mq450:flex-wrap">
              <img
                className="h-[12.8px] w-[19.7px] relative object-contain shrink-0 [debug_commit:bf4bc93] z-[1]"
                alt=""
                src="/chevron-down@2x.png"
              />
              <div className="flex-1 flex flex-row items-start justify-start gap-[6.5px] min-w-[60px] shrink-0 [debug_commit:bf4bc93] mq450:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-start pt-[7.1px] px-0 pb-0 box-border min-w-[44px]">
                  <b className=" h-0 relative leading-[0%] font-semibold inline-block z-[1]">
                    MARCH
                  </b>
                </div>
                <img
                  className="h-[13.9px] w-[18.6px] relative object-contain z-[1]"
                  alt=""
                  src="/chevron-down-1@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start pt-0 pb-[9.6px] pr-3.5 pl-[11px]">
            <div className="flex flex-row items-end justify-center gap-[13.9px] mq700:flex-wrap">
              <img
                className="h-[8.5px] w-5 relative z-[1]"
                alt=""
                src="/sun.svg"
              />
              <div className="w-[27.3px] flex flex-col items-start justify-start py-0 pr-1 pl-0 box-border">
                <img
                  className="w-[22.7px] h-[8.4px] relative z-[1]"
                  alt=""
                  src="/mon.svg"
                />
              </div>
              <div className="flex flex-col items-start justify-start py-0 pr-2 pl-0">
                <img
                  className="w-[19.4px] h-[8.4px] relative z-[1]"
                  alt=""
                  src="/tue.svg"
                />
              </div>
              <img
                className="h-[8.4px] w-[23.8px] relative z-[1]"
                alt=""
                src="/wed.svg"
              />
              <div className="flex flex-col items-start justify-start py-0 pr-1 pl-0">
                <img
                  className="w-[20.3px] h-[8.4px] relative z-[1]"
                  alt=""
                  src="/thu.svg"
                />
              </div>
              <div className="w-[20.1px] flex flex-col items-start justify-start py-0 pr-[7px] pl-0 box-border">
                <img
                  className="w-[12.6px] h-[8.7px] relative z-[1]"
                  alt=""
                  src="/fri.svg"
                />
              </div>
              <img
                className="h-[8.5px] w-[17.4px] relative z-[1]"
                alt=""
                src="/sat.svg"
              />
            </div>
          </div>
          <div className=" flex flex-row items-start justify-start pt-0 pb-[5.5px] pr-3.5 pl-[11px]">
            <div className="flex-1 flex flex-col items-start justify-start gap-[23.2px]">
              <div className=" flex flex-row items-start justify-center gap-[18.2px] min-h-[9px] mq700:flex-wrap">
                <div className="w-[22.5px] flex flex-col items-start justify-start py-0 pr-2.5 pl-0 box-border">
                  <img
                    className="w-[12.5px] h-[8.4px] relative z-[1]"
                    alt=""
                    src="/empty-cell.svg"
                  />
                </div>
                <div className="w-[21.7px] flex flex-col items-start justify-start py-0 pr-2 pl-0 box-border">
                  <img
                    className="w-[13.2px] h-[8.5px] relative z-[1]"
                    alt=""
                    src="/empty-cells.svg"
                  />
                </div>
                <div className="w-[21.8px] flex flex-col items-start justify-start py-0 pr-2 pl-0 box-border">
                  <img
                    className="w-[13.2px] h-[8.5px] relative z-[1]"
                    alt=""
                    src="/29.svg"
                  />
                </div>
                <div className="w-[25.7px] flex flex-col items-start justify-start py-0 pr-[11px] pl-0 box-border">
                  <img
                    className="w-[13.8px] h-[8.6px] relative z-[1]"
                    alt=""
                    src="/30.svg"
                  />
                </div>
                <img
                  className="h-[8.6px] w-[11.1px] relative z-[1]"
                  alt=""
                  src="/day-cells.svg"
                />
                <div className="w-[16.1px] flex flex-col items-start justify-start py-0 pr-0.5 pl-0 box-border">
                  <img
                    className="w-[13.4px] h-[8.6px] relative z-[1]"
                    alt=""
                    src="/02.svg"
                  />
                </div>
                <img
                  className="h-[8.6px] w-[13.8px] relative z-[1]"
                  alt=""
                  src="/day-cells1.svg"
                />
              </div>
              <div className=" flex flex-col items-start justify-start gap-[19.5px]">
                <div className=" flex flex-row items-end justify-center gap-[15.5px] mq700:flex-wrap">
                  <div className="w-[21.5px] flex flex-col items-start justify-end pt-0 pb-[7px] pr-[7px] pl-0 box-border">
                    <img
                      className="w-3.5 h-[8.6px] relative z-[1]"
                      alt=""
                      src="/calendar-days.svg"
                    />
                  </div>
                  <div className="h-[21.9px] w-[28.2px] relative">
                    <img
                      className="absolute top-[6.3px] left-[3.7px] w-[13.6px] h-[8.6px] z-[1]"
                      alt=""
                      src="/calendar-day.svg"
                    />
                    <div className="absolute top-[0px] left-[0px] rounded-[50%] box-border w-[21.9px] h-[21.9px] z-[2] border-[0px] border-solid border-darkslategray-100" />
                  </div>
                  <div className="w-[24.4px] flex flex-col items-start justify-end pt-0 pb-[7px] pr-2.5 pl-0 box-border">
                    <img
                      className="w-[13.8px] h-[8.6px] relative z-[1]"
                      alt=""
                      src="/06.svg"
                    />
                  </div>
                  <div className="w-[28.5px] flex flex-col items-start justify-end pt-0 pb-[7px] pr-[15px] pl-0 box-border">
                    <img
                      className="w-[12.9px] h-[8.6px] relative z-[1]"
                      alt=""
                      src="/07.svg"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[7px]">
                    <img
                      className="w-[13.8px] h-[8.6px] relative z-[1]"
                      alt=""
                      src="/08.svg"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-end pt-0 px-0 pb-[7px]">
                    <img
                      className="w-[13.8px] h-[8.6px] relative z-[1]"
                      alt=""
                      src="/09.svg"
                    />
                  </div>
                  <div className="h-[22.7px] w-[21.9px] relative">
                    <img
                      className="absolute top-[7.8px] left-[4.6px] w-[11.9px] h-[8.6px] z-[1]"
                      alt=""
                      src="/calendar-day1.svg"
                    />
                    <div className="absolute top-[0px] left-[0px] rounded-[50%] box-border w-full h-full z-[2] border-[0px] border-solid border-darkslategray-100" />
                  </div>
                </div>
                <div className="flex flex-row items-start justify-center gap-[17.8px] mq450:flex-wrap">
                  <div className="w-[22.9px] flex flex-col items-start justify-start py-0 pr-[13px] pl-0 box-border">
                    <img
                      className="w-[9px] h-[8.3px] relative z-[1]"
                      alt=""
                      src="/calendar-day2.svg"
                    />
                  </div>
                  <div className="w-[22.2px] flex flex-col items-start justify-start py-0 pr-2.5 pl-0 box-border">
                    <img
                      className="w-[11.3px] h-[8.4px] relative z-[1]"
                      alt=""
                      src="/calendar-day3.svg"
                    />
                  </div>
                  <div className="w-[22.1px] flex flex-col items-start justify-start py-0 pr-2.5 pl-0 box-border">
                    <img
                      className="w-[11.6px] h-[8.5px] relative z-[1]"
                      alt=""
                      src="/13.svg"
                    />
                  </div>
                  <div className="w-[26.2px] flex flex-col items-start justify-start py-0 pr-3.5 pl-0 box-border">
                    <img
                      className="w-[11.9px] h-[8.3px] relative z-[1]"
                      alt=""
                      src="/14.svg"
                    />
                  </div>
                  <img
                    className="h-[8.4px] w-[11.5px] relative min-h-[8px] z-[1]"
                    alt=""
                    src="/calendar-day4.svg"
                  />
                  <div className="w-[16.5px] flex flex-col items-start justify-start py-0 pr-1 pl-0 box-border">
                    <img
                      className="w-[11.6px] h-[8.5px] relative z-[1]"
                      alt=""
                      src="/16.svg"
                    />
                  </div>
                  <img
                    className="h-[8.3px] w-[11px] relative z-[1]"
                    alt=""
                    src="/calendar-day5.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start pt-0 pb-[2.1px] pr-[18px] pl-[11px]">
            <div className="flex flex-row items-start justify-center gap-[16.5px] mq700:flex-wrap">
              <div className="w-[24.2px] flex flex-col items-start justify-start py-0 pr-3 pl-0 box-border">
                <img
                  className="w-[11.6px] h-[8.5px] relative z-[1]"
                  alt=""
                  src="/calendar-day6.svg"
                />
              </div>
              <div className="w-[23.5px] flex flex-col items-start justify-start py-0 pr-[11px] pl-0 box-border">
                <img
                  className="w-[11.6px] h-[8.5px] relative z-[1]"
                  alt=""
                  src="/19.svg"
                />
              </div>
              <div className="w-[23.5px] flex flex-col items-start justify-start py-0 pr-2.5 pl-0 box-border">
                <img
                  className="w-[13.4px] h-[8.6px] relative z-[1]"
                  alt=""
                  src="/20.svg"
                />
              </div>
              <div className="w-[27.5px] flex flex-col items-start justify-start py-0 pr-[17px] pl-0 box-border">
                <img
                  className="w-[10.5px] h-[8.4px] relative z-[1]"
                  alt=""
                  src="/calendar-day7.svg"
                />
              </div>
              <img
                className="h-[8.4px] w-[12.8px] relative z-[1]"
                alt=""
                src="/calendar-days1.svg"
              />
              <div className="w-[17.7px] flex flex-col items-start justify-start py-0 pr-1 pl-0 box-border">
                <img
                  className="w-[13.2px] h-[8.5px] relative z-[1]"
                  alt=""
                  src="/23.svg"
                />
              </div>
              <img
                className="h-[8.4px] w-[13.3px] relative z-[1]"
                alt=""
                src="/calendar-days2.svg"
              />
            </div>
          </div>
          <div className="flex flex-row items-start justify-start py-0 pr-5 pl-[11px]">
            <div className="flex flex-row items-start justify-center gap-[16.1px] mq700:flex-wrap">
              <div className="w-[24.6px] flex flex-col items-start justify-start py-0 pr-[11px] pl-0 box-border">
                <img
                  className="w-[13px] h-[8.5px] relative z-[1]"
                  alt=""
                  src="/calendar-day8.svg"
                />
              </div>
              <div className="w-[23.8px] flex flex-col items-start justify-start py-0 pr-2.5 pl-0 box-border">
                <img
                  className="w-[13.2px] h-[8.5px] relative z-[1]"
                  alt=""
                  src="/26.svg"
                />
              </div>
              <div className="w-[23.9px] flex flex-col items-start justify-start py-0 pr-[11px] pl-0 box-border">
                <img
                  className="w-[12.5px] h-[8.4px] relative z-[1]"
                  alt=""
                  src="/27-1.svg"
                />
              </div>
              <div className="w-[27.9px] flex flex-col items-start justify-start py-0 pr-3.5 pl-0 box-border">
                <img
                  className="w-[13.2px] h-[8.5px] relative z-[1]"
                  alt=""
                  src="/28-1.svg"
                />
              </div>
              <img
                className="h-[8.5px] w-[13.2px] relative min-h-[9px] z-[1]"
                alt=""
                src="/29-1.svg"
              />
              <div className="flex flex-col items-start justify-start py-0 pr-1 pl-0">
                <img
                  className="w-[13.8px] h-[8.6px] relative z-[1]"
                  alt=""
                  src="/30-1.svg"
                />
              </div>
              <img
                className="h-[8.5px] w-[10.9px] relative min-h-[9px] z-[1]"
                alt=""
                src="/calendar-days3.svg"
              />
            </div>
          </div>
          <img
            className=" h-[1.5px] relative max-w-full overflow-hidden shrink-0 z-[1]"
            loading="lazy"
            alt=""
            src="/vector-19-stroke.svg"
          />
        </div>
      </div>
    </div>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent1;
