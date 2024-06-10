import { Button } from "@mui/material";
import PropTypes from "prop-types";

const ContentHeader = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch h-[448.5px] relative shadow-[0px_20px_26.4px_-6px_rgba(0,_0,_0,_0.25)] rounded-16xl bg-yellow-300 box-border max-w-full z-[2] text-center text-xs text-black font-inter border-t-[3.5px] border-solid border-silver-100 mq900:h-auto mq900:min-h-[445] ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] shadow-[0px_20px_26.4px_-6px_rgba(0,_0,_0,_0.25)] rounded-16xl bg-white box-border w-full h-full hidden border-t-[3.5px] border-solid border-silver-100" />
      <div className="absolute top-[137px] left-[177px] w-0 h-[254px] z-[5]" />
      <div className="absolute top-[137px] left-[307px] w-0 h-[254px] z-[7]" />
      <div className="absolute top-[137px] left-[437px] w-0 h-[254px] z-[7]" />
      <div className="absolute top-[137px] left-[568px] w-0 h-[254px] z-[7]" />
      <div className="absolute top-[137px] left-[698px] w-0 h-[254px] z-[7]" />
      <div className="absolute top-[137px] left-[829px] w-0 h-[254px] z-[7]" />
      <div className="absolute top-[137px] left-[81px] w-[854px] flex flex-row flex-wrap items-start justify-start gap-[5px] max-w-full">
        <div className="flex flex-col items-start justify-start flex-1 max-w-full mq700:min-w-full">
          <div className="self-stretch shadow-[0px_1px_1.04px_rgba(0,_0,_0,_0.25)] rounded-[7.81px] [background:linear-gradient(89.05deg,_#f5f5f5,_rgba(45,_128,_133,_0.35)_88.41%)] flex flex-row items-start justify-start pt-3 px-4 pb-[11px] box-border max-w-full [row-gap:20px] z-[3] mq900:flex-wrap">
            <div className="h-11 w-[849px] relative shadow-[0px_1px_1.04px_rgba(0,_0,_0,_0.25)] rounded-[7.81px] [background:linear-gradient(89.05deg,_#f5f5f5,_rgba(45,_128,_133,_0.35)_88.41%)] hidden max-w-full z-[1]" />
            <div className="w-[59.4px] flex flex-col items-start justify-start py-0 pr-[23px] pl-0 box-border">
              <a className="[text-decoration:none] self-stretch relative leading-[20px] text-[inherit] inline-block min-w-[36px] z-[4]">
                Name
              </a>
            </div>
            <div className="w-[88.7px] flex flex-col items-start justify-start py-0 pr-[34px] pl-0 box-border ml-[-5.4px]">
              <div className="self-stretch relative leading-[20px] inline-block min-w-[54px] z-[6]">
                Surname
              </div>
            </div>
            <div className="w-[109.2px] flex flex-col items-start justify-start ml-[-5.4px]">
              <a className="[text-decoration:none] w-[61px] relative leading-[20px] text-[inherit] inline-block min-w-[61px] z-[4]">
                Campaign
              </a>
            </div>
            <div className="w-[86.3px] flex flex-col items-start justify-start ml-[-5.4px]">
              <div className="w-[33px] relative leading-[20px] inline-block min-w-[33px] z-[4]">
                Team
              </div>
            </div>
            <div className="w-[75px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border ml-[-5.4px]">
              <div className="self-stretch relative leading-[20px] inline-block min-w-[75px] z-[8]">
                Team Leader
              </div>
            </div>
            <div className="w-[148px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border ml-[-5.4px]">
              <div className="self-stretch relative leading-[20px] z-[9]">
                Commission
              </div>
            </div>
            <div className="w-[93.8px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border ml-[-5.4px]">
              <div className="w-[47px] relative leading-[20px] inline-block z-[10]">
                Target
              </div>
            </div>
            <div className="w-16 relative leading-[20px] inline-block shrink-0 min-w-[64px] z-[4] ml-[-5.4px]">
              Frequency
            </div>
          </div>
          <div className="self-stretch shadow-[0px_9px_5.4px_-2px_rgba(0,_0,_0,_0.13)] rounded-[7.81px] bg-whitesmoke-100 flex flex-col items-end justify-start pt-[11px] pb-2.5 pr-[22px] pl-[19px] box-border gap-[30px] max-w-full z-[4]">
            <div className="w-[849px] h-[210px] relative shadow-[0px_9px_5.4px_-2px_rgba(0,_0,_0,_0.13)] rounded-[7.81px] bg-whitesmoke-100 hidden max-w-full" />
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq900:flex-wrap">
              <div className="w-[28.3px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                <div className="self-stretch relative leading-[20px] inline-block min-w-[28.3px] z-[5]">
                  Jack
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-px pb-0 pr-[11px] pl-0">
                <div className="w-[34.6px] relative leading-[20px] inline-block min-w-[34.6px] z-[6]">
                  Smith
                </div>
              </div>
              <div className="w-[60.9px] flex flex-col items-start justify-start pt-px pb-0 pr-2 pl-0 box-border">
                <div className="self-stretch relative leading-[20px] inline-block min-w-[52.9px] z-[5]">
                  3 Mobile
                </div>
              </div>
              <div className="w-[57.7px] flex flex-col items-start justify-start py-0 pr-2 pl-0 box-border">
                <div className="self-stretch relative leading-[20px] inline-block min-w-[49.2px] z-[5]">
                  Inbound
                </div>
              </div>
              <div className="w-[95.1px] flex flex-col items-start justify-start pt-px pb-0 pr-4 pl-0 box-border">
                <div className="self-stretch relative leading-[20px] inline-block min-w-[78.4px] z-[8]">
                  Shane Smart
                </div>
              </div>
              <div className="w-[59.1px] flex flex-col items-start justify-start py-0 pr-6 pl-0 box-border">
                <div className="self-stretch relative leading-[20px] inline-block min-w-[34.6px] whitespace-nowrap z-[8]">
                  $500
                </div>
              </div>
              <div className="w-[61.1px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border">
                <div className="self-stretch relative leading-[20px] inline-block min-w-[41px] whitespace-nowrap z-[5]">
                  $6500
                </div>
              </div>
              <div className="w-[100.1px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                <div className="w-[50px] relative leading-[20px] inline-block min-w-[50px] z-[5]">
                  Monthly
                </div>
              </div>
              <div className="w-[50px] flex flex-row items-start justify-start relative text-left text-mini text-white font-nunito">
                <div className="h-[29px] w-[63.7px] absolute !m-[0] bottom-[-14px] left-[-19px] rounded-4xs bg-darkslategray z-[5]" />
                <div className="flex flex-col items-start justify-start flex-1 px-0 pt-2 pb-0">
                  <b className="self-stretch h-0 relative leading-[0%] font-bold inline-block z-[6]">
                    Edit
                  </b>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[34.5px] mq900:flex-wrap">
              <div className="w-[99.3px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                <div className="self-stretch flex flex-col items-end justify-start gap-[20px]">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5">
                      <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                        <div className="w-[26.4px] relative leading-[20px] inline-block shrink-0 min-w-[26.4px] [debug_commit:bf4bc93] z-[5]">
                          Tom
                        </div>
                        <div className="relative leading-[20px] inline-block min-w-[41px] shrink-0 [debug_commit:bf4bc93] z-[6]">
                          Curran
                        </div>
                      </div>
                    </div>
                    <div className="w-[95.6px] flex flex-row items-start justify-start gap-[30px]">
                      <div className="flex-1 relative leading-[20px] inline-block min-w-[31px] z-[5]">
                        Kane
                      </div>
                      <div className="flex-1 relative leading-[20px] inline-block min-w-[34.6px] z-[6]">
                        Smith
                      </div>
                    </div>
                  </div>
                  <div className="w-[95.7px] flex flex-col items-start justify-start gap-[17px]">
                    <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
                      <div className="w-[26.4px] relative leading-[20px] inline-block shrink-0 min-w-[26.4px] [debug_commit:bf4bc93] z-[5]">
                        Alex
                      </div>
                      <div className="relative leading-[20px] inline-block min-w-[39.2px] shrink-0 [debug_commit:bf4bc93] z-[6]">
                        Parker
                      </div>
                    </div>
                    <div className="w-[92px] flex flex-row items-start justify-between gap-[20px]">
                      <div className="w-[24.6px] relative leading-[20px] inline-block shrink-0 min-w-[24.6px] z-[5]">
                        Patt
                      </div>
                      <div className="relative leading-[20px] inline-block min-w-[34.6px] z-[6]">
                        David
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-row items-end justify-start py-0 pr-[11px] pl-0 box-border gap-[34.8px] min-w-[177px] mq450:flex-wrap">
                <div className="flex-1 flex flex-row items-start justify-start gap-[29px] min-w-[99px]">
                  <div className="flex flex-col items-start justify-start flex-1 px-0 pt-px pb-0">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[19px]">
                      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-3 pl-[11px]">
                        <div className="flex-1 relative leading-[20px] inline-block min-w-[38.3px] z-[5]">
                          Lipton
                        </div>
                      </div>
                      <div className="self-stretch relative leading-[20px] inline-block min-w-[62px] z-[5]">
                        Coca Cola
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-3 pl-[11px]">
                        <div className="flex-1 relative leading-[20px] inline-block min-w-[38.3px] z-[5]">
                          Lipton
                        </div>
                      </div>
                      <div className="flex flex-row items-start self-stretch justify-start px-1 py-0">
                        <div className="flex-1 relative leading-[20px] inline-block min-w-[52.9px] z-[5]">
                          3 Mobile
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start gap-[19px]">
                    <div className="self-stretch relative leading-[20px] inline-block min-w-[61.1px] z-[5]">
                      Outbound
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[9px] pl-2">
                      <div className="flex-1 relative leading-[20px] inline-block min-w-[43.8px] z-[5]">
                        Vetting
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-1.5 pl-[5px]">
                      <div className="flex-1 relative leading-[20px] inline-block min-w-[49.2px] z-[5]">
                        Inbound
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start py-0 pr-1.5 pl-[5px]">
                      <div className="flex-1 relative leading-[20px] inline-block min-w-[49.2px] z-[5]">
                        Inbound
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-[74.8px] flex flex-col items-start justify-start gap-[19px] min-w-[74.8px] mq450:flex-1">
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0.5 pl-px">
                    <div className="flex-1 relative leading-[20px] inline-block min-w-[71.1px] z-[8]">
                      Jack Willow
                    </div>
                  </div>
                  <div className="self-stretch relative leading-[20px] inline-block min-w-[74.8px] z-[8]">
                    Mannie Smit
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[3px] pl-0.5">
                    <div className="flex-1 relative leading-[20px] inline-block min-w-[69.3px] z-[8]">
                      Brett Sharp
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0.5 pl-px">
                    <div className="flex-1 relative leading-[20px] inline-block min-w-[71.1px] z-[8]">
                      Peter Smith
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[145.5px] flex flex-col items-start justify-start py-0 pr-[5px] pl-0 box-border gap-[20px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
                  <div className="w-[134px] flex flex-row items-start justify-between gap-[20px]">
                    <div className="w-[41px] relative leading-[20px] inline-block shrink-0 whitespace-nowrap z-[8]">
                      $500
                    </div>
                    <div className="relative leading-[20px] inline-block min-w-[41px] whitespace-nowrap z-[5]">
                      $3000
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[3px]">
                    <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                      <div className="w-[34.6px] relative leading-[20px] inline-block shrink-0 min-w-[34.6px] whitespace-nowrap z-[8]">
                        $400
                      </div>
                      <div className="relative leading-[20px] inline-block min-w-[54px] z-[5]">
                        200 units
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-1.5 pl-px">
                  <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                    <div className="w-[39.2px] flex flex-col items-start justify-start gap-[17px]">
                      <div className="self-stretch relative leading-[20px] whitespace-nowrap z-[8]">
                        $500
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[3px] pl-0.5">
                        <div className="flex-1 relative leading-[20px] inline-block min-w-[34.6px] whitespace-nowrap z-[8]">
                          $400
                        </div>
                      </div>
                    </div>
                    <div className="w-[41px] flex flex-col items-end justify-start gap-[17px]">
                      <div className="w-[39.2px] relative leading-[20px] inline-block min-w-[39.2px] whitespace-nowrap z-[5]">
                        $6500
                      </div>
                      <div className="self-stretch relative leading-[20px] inline-block min-w-[41px] whitespace-nowrap z-[5]">
                        $6500
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[101.5px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
                <div className="w-[60px] flex flex-col items-start justify-start gap-[19px]">
                  <div className="self-stretch relative leading-[20px] z-[5]">
                    Monthly
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[5px] pl-1">
                    <div className="flex-1 relative leading-[20px] z-[5]">
                      Monthly
                    </div>
                  </div>
                  <div className="flex flex-row items-start self-stretch justify-start px-px py-0">
                    <div className="flex-1 relative leading-[20px] z-[5]">
                      Monthly
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[5px] pl-1">
                    <div className="flex-1 relative leading-[20px] z-[5]">
                      Monthly
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[50px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border text-left text-mini text-white font-nunito">
                <div className="relative flex flex-row items-start self-stretch justify-start">
                  <div className="h-[29px] w-[63.7px] absolute !m-[0] top-[-15px] left-[-19px] rounded-4xs bg-darkslategray z-[5]" />
                  <div className="h-[29px] w-[63.7px] absolute !m-[0] top-[27px] left-[-19px] rounded-4xs bg-darkslategray z-[5]" />
                  <div className="h-[29px] w-[63.7px] absolute !m-[0] bottom-[26px] left-[-19px] rounded-4xs bg-darkslategray z-[5]" />
                  <div className="h-[29px] w-[63.7px] absolute !m-[0] bottom-[-14px] left-[-19px] rounded-4xs bg-darkslategray z-[5]" />
                  <div className="flex-1 flex flex-col items-start justify-start gap-[40px]">
                    <b className="self-stretch h-0 relative leading-[0%] font-bold inline-block z-[6]">
                      Edit
                    </b>
                    <b className="self-stretch h-0 relative leading-[0%] font-bold inline-block z-[6]">
                      Edit
                    </b>
                    <b className="self-stretch h-0 relative leading-[0%] font-bold inline-block z-[6]">
                      Edit
                    </b>
                    <b className="self-stretch h-0 relative leading-[0%] font-bold inline-block z-[6]">
                      Edit
                    </b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[254px] w-0 relative z-[7] mq700:w-full mq700:h-0" />
      </div>
      <div className="absolute top-[30px] left-[34px] w-[869.3px] flex flex-col items-start justify-start gap-[17px] max-w-full text-left text-xl">
        <h2 className="m-0 w-[283px] relative text-inherit font-semibold font-inherit inline-block z-[3] mq450:text-base">
          Current Month: March 2024
        </h2>
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq900:flex-wrap">
          <Button
            className="h-[29px] w-[120.1px] z-[3]"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "15",
              background: "#067457",
              borderRadius: "9px",
              "&:hover": { background: "#067457" },
              width: 120.1,
              height: 29,
            }}
          >
            All Teams
          </Button>
          <div className="w-[654.3px] flex flex-row items-start justify-start gap-[58px] max-w-full mq700:flex-wrap">
            <Button
              className="h-[29px] flex-[0.8111] min-w-[110px] max-w-[120px] z-[3] mq450:flex-1"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "15",
                background: "#013a2b",
                borderRadius: "9px",
                "&:hover": { background: "#013a2b" },
                height: 29,
              }}
            >
              Inobund
            </Button>
            <Button
              className="h-[29px] flex-1 min-w-[110px] max-w-[120px] z-[3]"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "15",
                background: "#013a2b",
                borderRadius: "9px",
                "&:hover": { background: "#013a2b" },
                height: 29,
              }}
            >
              Outbound
            </Button>
            <Button
              className="h-[29px] flex-[0.7031] min-w-[110px] max-w-[120px] z-[3] mq450:flex-1"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "15",
                background: "#013a2b",
                borderRadius: "9px",
                "&:hover": { background: "#013a2b" },
                height: 29,
              }}
            >
              Vetting
            </Button>
            <Button
              className="h-[29px] flex-[0.4467] min-w-[110px] max-w-[120px] z-[3] mq450:flex-1"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "15",
                background: "#013a2b",
                borderRadius: "9px",
                "&:hover": { background: "#013a2b" },
                height: 29,
              }}
            >
              BDR
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

ContentHeader.propTypes = {
  className: PropTypes.string,
};

export default ContentHeader;
