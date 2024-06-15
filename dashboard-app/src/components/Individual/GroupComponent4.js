import { Button } from "@mui/material";
import PropTypes from "prop-types";

const GroupComponent = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch shadow-[0px_20px_26.4px_-6px_rgba(0,_0,_0,_0.25)] rounded-16xl bg-white box-border flex flex-row items-start justify-between pt-[37px] pb-[30.1px] pr-[100px] pl-[115px] max-w-full gap-[20px] z-[2] text-center text-5xl text-black font-inter border-t-[3.5px] border-solid border-silver-100 mq975:flex-wrap ${className}`}
    >
      <div className="h-[361.5px] htaya relative shadow-[0px_20px_26.4px_-6px_rgba(0,_0,_0,_0.25)] rounded-16xl bg-white box-border hidden max-w-full border-t-[3.5px] border-solid border-silver-100" />
      <div className="flex flex-col items-start justify-start gap-[14px] min-w-[229px] mq975:flex-1">
        <div className="w-[218px] flex flex-row items-start justify-start py-0 px-[18px] box-border">
          <img
            className="h-[207px] flex-1 relative max-w-full overflow-hidden object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/image-23@2x.png"
          />
        </div>
        <div className="relative font-medium z-[1] mq450:text-lgi">
          You selected CASH!
        </div>
      </div>
      <div className="w-[421px] flex flex-col items-end justify-start gap-[47px] min-w-[421px] max-w-full text-base mq975:flex-1 mq950:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[7px] max-w-full">
          <div className="self-stretch shadow-[0px_1px_1.04px_rgba(0,_0,_0,_0.25)] rounded-[7.81px] [background:linear-gradient(89.05deg,_#f5f5f5,_rgba(45,_128,_133,_0.35)_88.41%)] flex flex-row items-start justify-between pt-3.5 pb-[11px] pr-12 pl-[72px] box-border max-w-full gap-[20px] z-[1] mq700:flex-wrap">
            <div className="h-11 w-[421px] relative shadow-[0px_1px_1.04px_rgba(0,_0,_0,_0.25)] rounded-[7.81px] [background:linear-gradient(89.05deg,_#f5f5f5,_rgba(45,_128,_133,_0.35)_88.41%)] hidden max-w-full" />
            <div className="w-[76px] relative font-medium flex items-center justify-center shrink-0 z-[2]">
              Place
            </div>
            <div className="w-[76px] relative font-medium flex items-center justify-center shrink-0 z-[2]">
              Amount
            </div>
          </div>
          <div className="self-stretch shadow-[0px_9px_5.4px_-2px_rgba(0,_0,_0,_0.13)] rounded-[7.81px] bg-whitesmoke-100 flex flex-col items-start justify-start pt-[15px] px-0 pb-2.5 box-border gap-[10px] max-w-full z-[1]">
            <div className="self-stretch h-[170px] relative shadow-[0px_9px_5.4px_-2px_rgba(0,_0,_0,_0.13)] rounded-[7.81px] bg-whitesmoke-100 hidden" />
            <div className="self-stretch flex flex-col items-end justify-start gap-[9px] max-w-full">
              <div className="w-[368px] flex flex-row items-start justify-end pt-0 px-[19px] pb-[7px] box-border max-w-full">
                <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq700:flex-wrap">
                  <div className="w-[76px] relative font-medium flex items-center justify-center shrink-0 z-[2]">
                    1st prize
                  </div>
                  <div className="w-[136px] relative font-medium flex items-center justify-center shrink-0 z-[2]">
                    Enter amount
                  </div>
                </div>
              </div>
              <div className="self-stretch h-px relative">
                <div className="absolute top-[0px] left-[0px] box-border w-full h-full z-[2] border-t-[1px] border-solid border-silver-300" />
                <div className="absolute top-[0px] left-[0px] box-border w-full h-full z-[3] border-t-[1px] border-solid border-silver-300" />
              </div>
              <div className="w-[372px] flex flex-row items-start justify-end py-0 px-[19px] box-border max-w-full">
                <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq700:flex-wrap">
                  <div className="w-[84px] relative font-medium flex items-center justify-center shrink-0 z-[2]">
                    2nd prize
                  </div>
                  <div className="w-[136px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                    <div className="self-stretch relative font-medium z-[2]">
                      Enter amount
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-px relative">
                <div className="absolute top-[0px] left-[0px] box-border w-full h-full z-[2] border-t-[1px] border-solid border-silver-300" />
                <div className="absolute top-[0px] left-[0px] box-border w-full h-full z-[3] border-t-[1px] border-solid border-silver-300" />
              </div>
              <div className="w-[370px] flex flex-row items-start justify-end py-0 px-[19px] box-border max-w-full">
                <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq700:flex-wrap">
                  <div className="w-20 relative font-medium flex items-center justify-center shrink-0 z-[2]">
                    3rd prize
                  </div>
                  <div className="w-[136px] relative font-medium flex items-center justify-center shrink-0 z-[2]">
                    Enter amount
                  </div>
                </div>
              </div>
              <div className="self-stretch h-px relative">
                <div className="absolute top-[0px] left-[0px] box-border w-full h-full z-[2] border-t-[1px] border-solid border-silver-300" />
                <div className="absolute top-[0px] left-[0px] box-border w-full h-full z-[3] border-t-[1px] border-solid border-silver-300" />
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[70px] pl-16">
              <div className="flex-1 flex flex-row items-start justify-between gap-[20px] mq700:flex-wrap">
                <div className="w-[90px] relative font-medium flex items-center justify-center shrink-0 z-[2]">
                  Total cost
                </div>
                <div className="w-12 relative font-medium flex items-center justify-center shrink-0 z-[2]">
                  Total
                </div>
              </div>
            </div>
          </div>
        </div>
        <Button
          className="w-[92.9px] h-[22.9px] z-[1]"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "15",
            background: "#013a2b",
            borderRadius: "9px",
            "&:hover": { background: "#013a2b" },
            width: 92.9,
            height: 22.9,
          }}
        >
          Confirm
        </Button>
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent;
